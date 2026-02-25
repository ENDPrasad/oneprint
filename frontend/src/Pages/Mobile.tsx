import type React from "react";
import mobilePrinterIcon from "../assets/mobile-printer.svg";

interface IMobileProps{
    active: boolean;
    handleClick: () => void;
}

const Mobile: React.FC<IMobileProps> = ({active, handleClick}) =>{
    return(
        <div>
            <div
        className="block md:hidden gap-4"
        style={{ display: "flex", textAlign: "center", justifyItems: "center" }}
      >
        <img src={mobilePrinterIcon} alt="Printer" />
        <div
          onClick={handleClick}
          className="relative w-18rem h-2rem surface-200 cursor-pointer flex align-items-center m-6"
        >
          {/* Sliding Background */}
          <div
            className={`absolute h-3rem w-6rem border-round-3xl bg-primary transition-all transition-duration-300 ${
              active ? "right-0" : "left-0"
            }`}
          ></div>

          {/* Labels */}
          <div className="flex z-1 font-bold border-1 border-round-3xl">
            <span
              style={{
                backgroundColor: !active ? "#0A2540" : "#ffffff",
                color: !active ? "#ffffff" : "#000000",
                padding: "12px 25px",
                borderRadius: "1.5rem",
              }}
            >
              Generate Link
            </span>
            <span
              style={{
                backgroundColor: active ? "#0A2540" : "#ffffff",
                color: active ? "#ffffff" : "#000000",
                padding: "12px 25px",
                borderRadius: "1.5rem",
              }}
            >
              View Link
            </span>
          </div>
        </div>
      </div>
        </div>
    )
}


export default Mobile;