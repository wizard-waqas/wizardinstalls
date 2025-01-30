'use client';

import {useState} from 'react';
import {collection, getDocs} from "@firebase/firestore";
import {db} from "@/firebase";
import {ClientInfo} from "@/types";

export default function ClientsPage() {
    const [pin, setPin] = useState('');
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [clients, setClients] = useState<ClientInfo[]>([]);
    const [error, setError] = useState('');

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
            setError("Failed to fetch clients. Please try again.");
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (pin === process.env.NEXT_PUBLIC_CLIENT_INFO_PIN) {
            setIsAuthorized(true);
            await fetchClients();
        } else {
            setError("Invalid PIN. Try again.");
            setPin('');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <h1 className="text-2xl font-bold mb-4">Client List</h1>

            {!isAuthorized ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <input
                        type="number"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        placeholder="Enter PIN"
                        className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
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
                                    <p className="text-sm text-gray-400">{client.recordingInterest ? "Interested in hardwire kit" : "Not interested in hardwire kit"}</p>
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