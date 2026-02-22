import React, { useState } from "react";
import viewImg from "../assets/view.svg";
import { isValidOnePrintS3Url } from "../utility/helper";

interface IViewSection {
  setLink: React.Dispatch<React.SetStateAction<string>>;
}

const ViewSection: React.FC<IViewSection> = ({ setLink }) => {
  const [url, setUrl] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentURL = e.target.value;
    setUrl(currentURL);
    setLink(currentURL);
    if (currentURL && !isValidOnePrintS3Url(currentURL)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className="flex flex-column gap-3 pt-6">
      <img src={viewImg} alt="view documents" className="w-6" />

      <h3 className="m-0">View Documents</h3>

      <p className="text-600 m-0">
        Paste the shared link to see the shared documents.
      </p>
      <div>
        <input
          type="text"
          value={url}
          onChange={onChangeHandler}
          placeholder="Paste Link here"
          className="p-3 border-1 border-300 border-round-md w-22rem"
        />
        {error && (
          <span className="text-red-400 text-sm pl-2">Invalid URL format</span>
        )}
      </div>
    </div>
  );
};

export default ViewSection;
