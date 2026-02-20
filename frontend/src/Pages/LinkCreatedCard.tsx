import React from "react";

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
    <div className="mt-4 border-2 border-blue-400 border-round bg-white">

      <div className="text-center py-2 border-round-top"
           style={{ background: "#cde8d2", color: "#1f5130" }}>
        Link created successfully
      </div>

      <div className="p-3 flex flex-column gap-2">
        <a href={link} className="text-blue-500 no-underline">
          {link}
        </a>

        <div className="flex justify-content-between text-sm text-600">
          <span>Print Frequency: {frequency}</span>
          <span>View: Once</span>
        </div>

        <div className="text-sm">
          Expires In: <strong>{expiresIn}</strong>
        </div>
      </div>
    </div>
  );
};


export default LinkCreatedCard;
