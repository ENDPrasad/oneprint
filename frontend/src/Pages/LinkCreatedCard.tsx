import React from "react";
import copyIcon from "../assets/copy-icon.svg";
import shareIcon from "../assets/share-icon.svg";

interface LinkCreatedCardProps {
  link: string;
  frequency: number;
  expiresIn: string;
}

const LinkCreatedCard: React.FC<LinkCreatedCardProps> = ({
  link,
  frequency,
  expiresIn,
}) => {
  return (
    <div className="flex flex-column gap-4 py-1">
      <div
        className="text-center py-2 border-round-top"
        style={{ background: "#cde8d2", color: "#1f5130" }}
      >
        Link created successfully
      </div>

      <div className="p-3 flex justify-content-between flex-row gap-2 shadow-2">
        <div>
          <a href={link} className="text-blue-500 no-underline">
            <span className="text-blue-500">{link}</span>
          </a>
          <div className="flex justify-content-between text-sm text-600">
            <span>
              Print Frequency: <strong>{frequency}</strong>
            </span>
          </div>

          <div className="text-sm">
            Expires In: <strong>{expiresIn}</strong>
          </div>
        </div>

        <div className="flex flex-column gap-2">
          <div className="cursor-pointer mr-3"><img src={copyIcon} alt="Copy" style={{width:"1.5rem", height:"1.5rem" }}/></div>
          <div className="cursor-pointer mr-3"><img src={shareIcon} alt="Share" style={{width:"1.5rem", height:"1.5rem"}}/></div>
        </div>
      </div>
    </div>
  );
};

export default LinkCreatedCard;
