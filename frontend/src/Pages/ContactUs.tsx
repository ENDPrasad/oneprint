import type React from "react";

const Contactus: React.FC = () =>{
    return(
        <div id="contact-us" className="text-center px-3 md:px-6 lg:px-8">
            <h1 className="mt-5 mb-1">Contact Us</h1>
            <div className="w-20 md:w-8 sm:w-20 border-round-2xl shadow-4 mx-auto p-2">
                <h2 className="m-0" style={{color:"#0A2540"}}>Get in Touch</h2>
                <p className="text-center">Have a question about your secure link? Or maybe a suggestion on how we can make digital printing even safer? We’re all ears. Our team typically responds within 24 hours.</p>
                <button style={{backgroundColor:"#0A2540", display:"flex", margin:"auto", textAlign:"center"}} className="font-bold border-round-2xl p-3 cursor-pointer hover:bg-white hover:text-blue-900 hover:shadow-8" onClick={() => window.location.href = "mailto:support@oneprint.com"}>Drop Us a Line</button>
            </div>
        </div>
    )
}

export default Contactus