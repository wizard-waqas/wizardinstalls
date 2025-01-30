import React, {useState} from 'react';
import ContactInput from "@/components/GetInTouchSection/ContactInput";
import InterestedInHardwireToggle from "@/components/GetInTouchSection/InterestedInHardwireToggle";
import CarInfoInput from "@/components/GetInTouchSection/CarInfoInput";
import FullNameInput from "@/components/GetInTouchSection/FullNameInput";
import {collection, doc, setDoc} from "@firebase/firestore";
import {db} from "@/firebase";
import toast from "react-hot-toast";
import SubmitButton from "@/components/GetInTouchSection/SubmitButton";

const GetInTouchSection = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        contactInfo: '',
        vehicleInfo: '',
        recordingInterest: false // Toggle state
    });

    const handleSubmit = async () => {
        const {fullName, contactInfo} = formData;

        if (!fullName.trim() || !contactInfo.trim()) {
            if (!fullName.trim()) {
                toast.error('Please enter your full name.');
                return false
            }
            if (!contactInfo.trim()) {
                toast.error('Please enter phone or email.');
                return false
            }
        }

        try {
            const date = new Date();
            const formattedDate = `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}-${date.getFullYear()}`;
            const randomNumber = Math.floor(1000 + Math.random() * 9000);
            const docId = `${formattedDate}-${fullName.replace(/\s+/g, '-')}-${randomNumber}`;
            const collectionName = process.env.NEXT_PUBLIC_ENVIRONMENT === "production" ? "interested-clients" : "test-clients";

            const toastId = toast.loading('Submitting your details...');
            await setDoc(doc(collection(db, collectionName), docId), {
                ...formData,
                timestamp: new Date(),
            });
            toast.dismiss(toastId);
            if (result.success) {
                toast.success('Your details have been submitted successfully!');
            } else {
                toast.error(result.message || 'Failed to send message. Please try again.');
                return false
            }
            return true
        } catch (error) {
            toast.error('Failed to submit your details. Please try again later.');
            console.error('Error submitting form:', error);
            return false
        }
    };


    return (
        <section className="bg-black text-white mt-8 pb-16 mx-8 text-center" id="information-form">
            <h2 className="text-4xl font-bold mb-4 text-red-500">
                Interested? Let's talk.
            </h2>

            <p className="text-gray-400 mb-4">
                Provide your details below and we'll contact you to discuss your dashcam installation needs.
            </p>
            <p className="text-gray-400 mb-8">
                Or shoot us a message now: <a href="tel:347-433-5693" className="text-red-300">(347)-433-5693</a>
            </p>

            <div className="max-w-lg mx-auto text-left">
                <FullNameInput formData={formData} setFormData={setFormData}/>
                <ContactInput formData={formData} setFormData={setFormData}/>
                <CarInfoInput formData={formData} setFormData={setFormData}/>
                <InterestedInHardwireToggle formData={formData} setFormData={setFormData}/>
                <SubmitButton handleSubmit={handleSubmit}/>

            </div>
        </section>
    );
};

export default GetInTouchSection;