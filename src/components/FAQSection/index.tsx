import React from "react"
import FAQItem from "@/components/FAQSection/FAQItem";

export default function FAQSection() {
    return (
        <section id="faq-section" className="py-8 bg-grey-800">
            <h3 className="text-center text-red-500 font-bold text-2xl">
                FAQ
            </h3>
            <h3 className={"text-center mt-2"}>Frequently Asked Questions</h3>
            <div className="flex flex-col items-center mt-4">
                <div className="w-full md:w-1/2">
                    <FAQItem question="Are dashcams illegal?"
                             answer="Dashcams are legal in all 50 U.S. states. Our installation ensures it will not obstruct your view."/>
                    <FAQItem question="Can I install a dashcam myself?"
                             answer="You can do anything! But with our service you can save yourself time and forget the risk of damaging your vehicle."/>
                    <FAQItem question="Is my dashcam footage private?"
                             answer="Yes! Its stored locally on an sd card on the dashcam."/>
                    {/*<FAQItem question="Do you offer any discounts or bundle packages?"*/}
                    {/*         answer="We can work out a deal for clients looking to install dash cams on more than one vehicle at once."/>*/}
                    {/*<FAQItem question="What happens if something goes wrong with my dashcam after installation"*/}
                    {/*         answer="We offer an installation warranty"/>*/}
                    <FAQItem question="Are dashcam videos admissible in court or with insurance claims?"
                             answer="This is where they are most helpful as they can help you get out of insurance fraud situations."/>
                    <FAQItem question="Where do you provide your dashcam installation services?"
                             answer="We are a mobile service, we come to you!"/>
                    <FAQItem question="What is the cost of installing a dashcam?"
                             answer="For our service it is $70 for front dashcam and $120 for a rear dashcam. You can also see our [Dashcam Packages section](#dashcam-packages)."/>
                </div>
            </div>
        </section>
    )
}