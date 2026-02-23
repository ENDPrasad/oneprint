import React from "react";

interface FileExtractedCardProps {
  fileName: string;
  expiresIn: string;
  onView?: () => void;
  onPrint?: () => void;
}

const FileExtractedCard: React.FC<FileExtractedCardProps> = ({
  fileName,
  expiresIn,
  onView,
  onPrint,
}) => {
  return (
    <div className="flex flex-column gap-4 py-1">

      <div className="text-center py-2 border-round-top"
           style={{ background: "#cde8d2", color: "#1f5130" }}>
        File extracted successfully
      </div>

      <div className="p-3 flex justify-content-between lg:flex-row shadow-2 flex-column">
        <div>
          <a href="#" className="text-blue-500 no-underline font-medium">
            {fileName}
          </a>
          <div className="text-sm text-600">
            Expires In: <strong>{expiresIn}</strong>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={onView}
            className="font-bold w-6rem border-round-2xl cursor-pointer text-white hover:bg-white hover:text-blue-900 hover:shadow-8 h-3rem"
          >
            View
          </button>

          <button
            onClick={onPrint}
            className="font-bold w-6rem border-round-2xl cursor-pointer text-white hover:bg-white hover:text-blue-900 hover:shadow-8 h-3rem"
            style={{ background: "#0b3d63" }}
          >
            Print
          </button>
        </div>
      </div>
    </div>
  );
};


export default FileExtractedCard;
