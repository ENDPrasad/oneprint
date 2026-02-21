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

      <div className="p-3 flex justify-content-between flex-row shadow-1">
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
            className="w-6rem border-round-right-3xl border-round-left-3xl cursor-pointer"
          >
            View
          </button>

          <button
            onClick={onPrint}
            className="w-6rem border-round-right-3xl border-round-left-3xl cursor-pointer text-white"
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
