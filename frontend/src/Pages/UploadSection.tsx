import React from "react";
import uploadImg from "../assets/upload.svg";
import uploadButton from "../assets/uploadButton.svg";

const UploadSection: React.FC = () => {
  return (
    <div className="flex flex-column gap-3">
      <img src={uploadImg} alt="upload" className="w-8" />

      <h3 className="m-0">Upload File</h3>

      <p className="text-600 m-0">
        Upload the file to generate the temporary access link.
      </p>

      <button className="flex align-items-center justify-content-between border-none border-round-3 px-3 py-1 cursor-pointer"
              style={{ background: "#0b3d63", width: "170px" }}>
        <span className="text-white">Upload</span>

        <span className="flex align-items-center justify-content-center border-circle bg-white"
              style={{ width: "36px", height: "36px" }}>
          <img src={uploadButton} alt="upload" width={18} />
        </span>
      </button>
    </div>
  );
};


export default UploadSection;
