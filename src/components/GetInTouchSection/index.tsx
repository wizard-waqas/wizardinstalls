import React, {useState} from 'react';
import ContactInput from "@/components/GetInTouchSection/ContactInput";
import CarInfoInput from "@/components/GetInTouchSection/CarInfoInput";
import FullNameInput from "@/components/GetInTouchSection/FullNameInput";
import {collection, doc, setDoc} from "@firebase/firestore";
import {db} from "@/firebase";
import toast from "react-hot-toast";
import SubmitButton from "@/components/GetInTouchSection/SubmitButton";
import MoreDetailsDropdown from "@/components/GetInTouchSection/MoreDetailsDropdown";
import GreyDivider from "@/components/GreyDivider";

const GetInTouchSection = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        contactInfo: '',
        vehicleInfo: '',
        hardwireInterest: false // Toggle state
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
                id: docId,
                submitDate: date.toDateString(),
                contactedClient: false
            });

            toast.success('Your details have been submitted successfully!', {id: toastId});
            return true
        } catch (error) {
            toast.error('Failed to submit your details. Please try again later.');
            console.error('Error submitting form:', error);
            return false
        }
    };


    return (
        <section className="flex flex-col items-center bg-black text-white mt-8 text-center" id="information-form">
            <h3 className="text-3xl font-bold mb-4 text-red-500">
                Interested? Let's talk.
            </h3>

            <p className="text-gray-400 mb-4 text-wrap w-11/12 lg:w-1/3">
                Ready to get a dashcam installed?&nbsp;
                Message us at <a href="tel:347-433-5693" className="text-red-300">(347)-433-5693</a> or provide your
                details below.&nbsp;
                We’re here to help!
            </p>

            <div className="text-left w-11/12 lg:w-1/3 ">
                <FullNameInput formData={formData} setFormData={setFormData}/>
                <ContactInput formData={formData} setFormData={setFormData}/>
                <CarInfoInput formData={formData} setFormData={setFormData}/>
                <MoreDetailsDropdown formData={formData} setFormData={setFormData}/>
                <SubmitButton handleSubmit={handleSubmit}/>

                <GreyDivider/>
            </div>
        </section>
    );
};

export default GetInTouchSection;