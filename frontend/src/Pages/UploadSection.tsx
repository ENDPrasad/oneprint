import React, { useRef } from "react";
import uploadImg from "../assets/upload.svg";
import uploadButton from "../assets/uploadButton.svg";

interface IUploadSection {
  handleSubmit: (file: File) => void;
}

const UploadSection: React.FC<IUploadSection> = ({ handleSubmit }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleSubmit(file);
    }
  };

  return (
    <div className="flex flex-column gap-3">
      <img src={uploadImg} alt="upload" className="w-6" />

      <h3 className="m-0">Upload File</h3>

      <p className="text-600 m-0">
        Upload the file to generate the temporary access link.
      </p>

      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />

      <button
        type="button"
        onClick={handleButtonClick}
        className="flex align-items-center justify-content-between pl-3 pr-0 cursor-pointer w-13rem border-none"
        style={{ background: "#0A2540", borderRadius: "28px" }}
      >
        <span className="text-white text-xl font-bold">Upload</span>

        <img src={uploadButton} alt="upload" width={52} />
      </button>
    </div>
  );
};

export default UploadSection;
