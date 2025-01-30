'use client';

import {useState} from 'react';
import {collection, doc, getDocs, updateDoc} from "@firebase/firestore";
import {db} from "@/firebase";
import {ClientInfo} from "@/types";
import toast from "react-hot-toast";

export default function ClientsPage() {
    const [pin, setPin] = useState('');
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [clients, setClients] = useState<ClientInfo[]>([]);
    const [pinError, setPinError] = useState('');

    const fetchClients = async () => {
        try {
            const collectionName = process.env.ENVIRONMENT === "production" ? "interested-clients" : "test-clients";
            const querySnapshot = await getDocs(collection(db, collectionName));
            const clientsList = querySnapshot.docs.map(doc => ({
                ...(doc.data() as ClientInfo)
            }));
            setClients(clientsList);
        } catch (err) {
            console.error("Error fetching clients:", err);
            setPinError("Failed to fetch clients. Please try again.");
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (pin === process.env.NEXT_PUBLIC_CLIENT_INFO_PIN) {
            setIsAuthorized(true);
            await fetchClients();
        } else {
            setPinError("Invalid PIN. Try again.");
            setPin('');
        }
    };

    const handleCheckboxChange = async (clientId: string | undefined, clientName: string, currentContactedState: boolean | undefined) => {
        if (!clientId || !currentContactedState) return;

        const toastId = toast.loading('Updating client: ' + clientName);
        try {
            const collectionName = process.env.ENVIRONMENT === "production" ? "interested-clients" : "test-clients";
            await updateDoc(doc(db, collectionName, clientId), {
                contactedClient: !currentContactedState
            });

            setClients(prevClients =>
                prevClients.map(client =>
                    client.id === clientId ? {...client, contactedClient: !currentContactedState} : client
                )
            );
            toast.success('Client updated successfully!', {id: toastId});
        } catch (err) {
            console.error("Error updating client:", err);
            toast.error('Failed to update client. Please try again later.', {id: toastId});
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
            <h1 className="text-2xl font-bold mb-4">Client List</h1>

            {!isAuthorized ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <input
                        type="text"
                        pattern="[0-9]*"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        placeholder="Enter PIN"
                        className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
                    />
                    {pinError && <p className="text-red-500 text-sm">{pinError}</p>}
                    <button type="submit" className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded">
                        Enter
                    </button>
                </form>
            ) : (
                <div className="w-full max-w-lg bg-gray-800 p-4 rounded-lg">
                    {clients.length > 0 ? (
                        <ul className="space-y-2">
                            {clients.map((client: ClientInfo) => (
                                <li key={client.fullName} className="border-b border-gray-600 py-2 space-y-1">
                                    <div className={"flex justify-between"}>
                                        <p className="font-semibold">{client.fullName}</p>
                                        <p className="font-bold text-red-500">{formatContactInfo(client.contactInfo)}</p>
                                    </div>
                                    <p className=" font-bold">{client.vehicleInfo}</p>
                                    <p>{client.submitDate}</p>
                                    <div className={"flex justify-between"}>
                                        <p className="text-sm text-gray-400">{client.recordingInterest ? "Interested in hardwire kit" : "Not interested in hardwire kit"}</p>
                                        <input type="checkbox" checked={client.contactedClient}
                                               onChange={() => handleCheckboxChange(client.id, client.fullName, client.contactedClient)}/>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No clients found.</p>
                    )}
                </div>
            )}
        </div>
    );
}

const formatContactInfo = (contactInfo: string) => {
    // if the contactInfo begins with a number then format it at a phone number in this format xxx-xxx-xxxx
    if (/^\d/.test(contactInfo)) {
        return contactInfo.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    }
    return contactInfo;
}