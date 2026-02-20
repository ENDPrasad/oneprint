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
    <div className="mt-4 shadow-2 border-round bg-white">

      <div className="text-center py-2 border-round-top"
           style={{ background: "#cde8d2", color: "#1f5130" }}>
        File extracted successfully
      </div>

      <div className="p-3 flex justify-content-between align-items-center">
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
            className="border-1 border-900 bg-white border-round-3 px-3 py-1 cursor-pointer"
          >
            View
          </button>

          <button
            onClick={onPrint}
            className="border-none border-round-3 px-3 py-1 text-white cursor-pointer"
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
