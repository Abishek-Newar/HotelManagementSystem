import nodemailer from "nodemailer"
import env from "../../infrastructure/env.js"

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: env.MAILER_ID,
        pass: env.MAILER_PASS
    }
})


export const sendWarningMail = async(email)=>{
    try {
        const config = {
            from: env.MAILER_ID,
            to:email,
            subject:"WARNING for hotel rules violation",
            html:`
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px;">
            <h1 style="color:rgb(179, 0, 0);">WARNING FOR VIOLATION OF TERMS AND CONDITION</h1>
    <h2 style="color: #0056b3;">Terms and Conditions</h2>
    
    <h2 style="color: #0056b3;">Introduction</h2>
    <p>Welcome to [Your Website Name]. These Terms and Conditions govern your use of our website and services. By using our platform, you agree to comply with these terms. Please read them carefully.</p>
    
    <h2 style="color: #0056b3;">1. Acceptance of Terms</h2>
    <p>By accessing and using [Your Website Name], you accept and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website.</p>

    <h2 style="color: #0056b3;">2. Definitions</h2>
    <p>
        <strong>"Platform"</strong> refers to [Your Website Name], the website, and any related services.<br>
        <strong>"User"</strong> refers to any individual or entity using the platform.<br>
        <strong>"Hotel"</strong> refers to any accommodation service listed on our platform.<br>
        <strong>"Hotel Owner"</strong> refers to the individual or entity listing a hotel on the platform.
    </p>

    <h2 style="color: #0056b3;">3. Eligibility</h2>
    <p>To list a hotel on our platform, you must:</p>
    <ul>
        <li>Be at least 18 years old.</li>
        <li>Have the legal authority to list the hotel.</li>
        <li>Ensure that all information provided is accurate and up-to-date.</li>
    </ul>

    <h2 style="color: #0056b3;">4. Listing and Booking</h2>
    <p><strong>Listing:</strong> Hotel Owners are responsible for providing accurate and complete information about their hotels, including pricing, availability, and amenities.</p>
    <p><strong>Booking:</strong> Users can book hotels directly through the platform. The terms of the booking, including cancellation policies, are determined by the Hotel Owner and must be clearly stated in the listing.</p>

    <h2 style="color: #0056b3;">5. Responsibilities</h2>
    <p><strong>Hotel Owners:</strong> Must ensure that their listings are truthful and not misleading. They are responsible for maintaining the accuracy of their listing information.</p>
    <p><strong>Users:</strong> Must provide truthful and accurate information when making a booking. Users are responsible for reading and understanding the terms of each hotel listing before making a booking.</p>

    <h2 style="color: #0056b3;">6. Payments and Fees</h2>
    <p><strong>Payments:</strong> Transactions for hotel bookings are processed through our secure payment gateway. Any issues with payments should be reported to our support team.</p>
    <p><strong>Fees:</strong> [Your Website Name] may charge a service fee for listings and bookings. These fees will be clearly stated and agreed upon before any transaction is completed.</p>

    <h2 style="color: #0056b3;">7. Cancellations and Refunds</h2>
    <p><strong>Hotel Owners:</strong> Must provide clear cancellation and refund policies. Users are advised to review these policies before making a booking.</p>
    <p><strong>Users:</strong> Cancellation and refund requests must be made in accordance with the Hotel Owner's policies. [Your Website Name] is not responsible for disputes related to cancellations and refunds.</p>

    <h2 style="color: #0056b3;">8. Prohibited Activities</h2>
    <p>Users and Hotel Owners must not:</p>
    <ul>
        <li>Violate any laws or regulations.</li>
        <li>Use the platform for fraudulent or malicious activities.</li>
        <li>Post or transmit any content that is harmful, offensive, or infringing on the rights of others.</li>
    </ul>

    <h2 style="color: #0056b3;">9. Intellectual Property</h2>
    <p><strong>Ownership:</strong> All content on [Your Website Name], including text, images, logos, and software, is the property of [Your Website Name] or its licensors and is protected by intellectual property laws.</p>
    <p><strong>Use:</strong> Users may not use, reproduce, or distribute any content from the platform without prior written permission.</p>

    <h2 style="color: #0056b3;">10. Limitation of Liability</h2>
    <p>[Your Website Name] is not liable for any damages arising from the use of the platform, including but not limited to direct, indirect, incidental, or consequential damages. Hotel Owners are solely responsible for the content of their listings and the fulfillment of bookings.</p>

    <h2 style="color: #0056b3;">11. Indemnification</h2>
    <p>Users and Hotel Owners agree to indemnify and hold harmless [Your Website Name], its affiliates, and employees from any claims, losses, or damages arising from their use of the platform or violation of these Terms and Conditions.</p>

    <h2 style="color: #0056b3;">12. Changes to Terms</h2>
    <p>[Your Website Name] reserves the right to modify these Terms and Conditions at any time. Users will be notified of any changes, and continued use of the platform constitutes acceptance of the revised terms.</p>

    <h2 style="color: #0056b3;">13. Governing Law</h2>
    <p>These Terms and Conditions are governed by the laws of [Your Jurisdiction]. Any disputes arising from the use of the platform will be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].</p>

    <h2 style="color: #0056b3;">14. Contact Information</h2>
    <p>For any questions or concerns about these Terms and Conditions, please contact us at [Your Contact Information].</p>
</body>

            `
        }
        await transporter.sendMail(config)
    } catch (error) {
        console.log("error while sending mail",error)
        return error
    }
}

export const accountDeleteMessage = async(email)=>{
    try {
        const config = {
            from: env.MAILER_ID,
            to:email,
            subject:"HOTEL DELETED FOR VIOLATION OF RULES",
            html:`
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px;">
            <h1 style="color:rgb(179, 0, 0);">HOTEL DELETED FOR VIOLATION OF TERMS AND CONDITION</h1>
    <h2 style="color: #0056b3;">Terms and Conditions</h2>
    
    <h2 style="color: #0056b3;">Introduction</h2>
    <p>Welcome to [Your Website Name]. These Terms and Conditions govern your use of our website and services. By using our platform, you agree to comply with these terms. Please read them carefully.</p>
    
    <h2 style="color: #0056b3;">1. Acceptance of Terms</h2>
    <p>By accessing and using [Your Website Name], you accept and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website.</p>

    <h2 style="color: #0056b3;">2. Definitions</h2>
    <p>
        <strong>"Platform"</strong> refers to [Your Website Name], the website, and any related services.<br>
        <strong>"User"</strong> refers to any individual or entity using the platform.<br>
        <strong>"Hotel"</strong> refers to any accommodation service listed on our platform.<br>
        <strong>"Hotel Owner"</strong> refers to the individual or entity listing a hotel on the platform.
    </p>

    <h2 style="color: #0056b3;">3. Eligibility</h2>
    <p>To list a hotel on our platform, you must:</p>
    <ul>
        <li>Be at least 18 years old.</li>
        <li>Have the legal authority to list the hotel.</li>
        <li>Ensure that all information provided is accurate and up-to-date.</li>
    </ul>

    <h2 style="color: #0056b3;">4. Listing and Booking</h2>
    <p><strong>Listing:</strong> Hotel Owners are responsible for providing accurate and complete information about their hotels, including pricing, availability, and amenities.</p>
    <p><strong>Booking:</strong> Users can book hotels directly through the platform. The terms of the booking, including cancellation policies, are determined by the Hotel Owner and must be clearly stated in the listing.</p>

    <h2 style="color: #0056b3;">5. Responsibilities</h2>
    <p><strong>Hotel Owners:</strong> Must ensure that their listings are truthful and not misleading. They are responsible for maintaining the accuracy of their listing information.</p>
    <p><strong>Users:</strong> Must provide truthful and accurate information when making a booking. Users are responsible for reading and understanding the terms of each hotel listing before making a booking.</p>

    <h2 style="color: #0056b3;">6. Payments and Fees</h2>
    <p><strong>Payments:</strong> Transactions for hotel bookings are processed through our secure payment gateway. Any issues with payments should be reported to our support team.</p>
    <p><strong>Fees:</strong> [Your Website Name] may charge a service fee for listings and bookings. These fees will be clearly stated and agreed upon before any transaction is completed.</p>

    <h2 style="color: #0056b3;">7. Cancellations and Refunds</h2>
    <p><strong>Hotel Owners:</strong> Must provide clear cancellation and refund policies. Users are advised to review these policies before making a booking.</p>
    <p><strong>Users:</strong> Cancellation and refund requests must be made in accordance with the Hotel Owner's policies. [Your Website Name] is not responsible for disputes related to cancellations and refunds.</p>

    <h2 style="color: #0056b3;">8. Prohibited Activities</h2>
    <p>Users and Hotel Owners must not:</p>
    <ul>
        <li>Violate any laws or regulations.</li>
        <li>Use the platform for fraudulent or malicious activities.</li>
        <li>Post or transmit any content that is harmful, offensive, or infringing on the rights of others.</li>
    </ul>

    <h2 style="color: #0056b3;">9. Intellectual Property</h2>
    <p><strong>Ownership:</strong> All content on [Your Website Name], including text, images, logos, and software, is the property of [Your Website Name] or its licensors and is protected by intellectual property laws.</p>
    <p><strong>Use:</strong> Users may not use, reproduce, or distribute any content from the platform without prior written permission.</p>

    <h2 style="color: #0056b3;">10. Limitation of Liability</h2>
    <p>[Your Website Name] is not liable for any damages arising from the use of the platform, including but not limited to direct, indirect, incidental, or consequential damages. Hotel Owners are solely responsible for the content of their listings and the fulfillment of bookings.</p>

    <h2 style="color: #0056b3;">11. Indemnification</h2>
    <p>Users and Hotel Owners agree to indemnify and hold harmless [Your Website Name], its affiliates, and employees from any claims, losses, or damages arising from their use of the platform or violation of these Terms and Conditions.</p>

    <h2 style="color: #0056b3;">12. Changes to Terms</h2>
    <p>[Your Website Name] reserves the right to modify these Terms and Conditions at any time. Users will be notified of any changes, and continued use of the platform constitutes acceptance of the revised terms.</p>

    <h2 style="color: #0056b3;">13. Governing Law</h2>
    <p>These Terms and Conditions are governed by the laws of [Your Jurisdiction]. Any disputes arising from the use of the platform will be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].</p>

    <h2 style="color: #0056b3;">14. Contact Information</h2>
    <p>For any questions or concerns about these Terms and Conditions, please contact us at [Your Contact Information].</p>
</body>

            `
        }
        await transporter.sendMail(config)
    } catch (error) {
        console.log("error while sending mail",error)
        return error
    }
}