import type React from "react";

const Footer: React.FC = () =>{
    const year = new Date().getFullYear();

    return(
        <div className="p-2 mt-3 text-center shadow-4">
            <p>&copy; {year} <strong>OnePrint</strong>. All rights reserved.</p>
        </div>
    )
}

export default Footer;