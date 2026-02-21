import React, { useState } from "react";
import viewImg from "../assets/view.svg";
const ViewSection: React.FC = () => {
  const [link, setLink] = useState("");

  return (
    <div className="flex flex-column gap-3 pt-6">
      <img src={viewImg} alt="view documents" className="w-6" />

      <h3 className="m-0">View Documents</h3>

      <p className="text-600 m-0">
        Paste the shared link to see the shared documents.
      </p>

      <input
        type="text"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Paste Link here"
        className="p-3 border-1 border-300 border-round-md w-22rem"
      />
    </div>
  );
};


export default ViewSection;
