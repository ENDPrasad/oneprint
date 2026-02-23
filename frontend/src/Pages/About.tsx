import React from "react";

const About: React.FC = () =>{
    return(
        <div id="about" className="text-center px-3 md:px-6 lg:px-8">
            <h1 className="m-1">About</h1>
            <div className="w-20 md:w-8 sm:w-10 border-round-2xl shadow-4 mx-auto p-2">
                <h2 style={{color:"#0A2540"}} className="m-0">OnePrint: Your Privacy-First Printing Solution</h2>
                <p className="text-center">In a world where digital privacy is often overlooked, <strong>OnePrint</strong> was built to bridge the gap between convenience and security. No more leaving your personal documents in a shop’s "Sent" folder or worrying about who else has access to your files.</p>
            </div>
        </div>
    )
}


export default About