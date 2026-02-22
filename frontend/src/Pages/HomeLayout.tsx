import React, { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import UploadSection from "./UploadSection";
import ViewSection from "./ViewSection";
import LinkCreatedCard from "./LinkCreatedCard";
import FileExtractedCard from "./FileExtractedCard";
import type { UploadResponse } from "../interfaces/interfaces";
import { extractFileName, isValidOnePrintS3Url } from "../utility/helper";

const DEFAULT_EXPIRY_TIME = 5;
const BASE_API_URL = import.meta.env.VITE_API_URL;

const HomeLayout: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [link, setLink] = useState("");

  const [result, setResult] = useState<UploadResponse>();

  const handleSubmit = async (file: File): Promise<void> => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(
        `${BASE_API_URL}?expiryMinutes=${DEFAULT_EXPIRY_TIME}`,
        {
          method: "POST",
          body: formData,
        },
      );

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data: UploadResponse = await response.json();

      setResult(data);
    } catch (err) {
      console.error(JSON.stringify(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <Hero />

      <div className="grid justify-content-center gap-5">
        {/* Left Section */}
        <div className="col-12 md:col-5 px-6 flex flex-column gap-4 py-3">
          <UploadSection handleSubmit={handleSubmit} />
          {loading && <span>loading...</span>}
          {result && (
            <LinkCreatedCard
              link={result?.url || "Link not generated"}
              frequency={Infinity}
              expiresIn={`${result?.expiresInMinutes}`}
            />
          )}
        </div>

        {/* Divider */}
        <div className="border-1 mb-8"></div>

        {/* Right Section */}
        <div className="col-12 md:col-5 px-6 flex flex-column gap-4 py-3">
          <ViewSection setLink={setLink} />
          {isValidOnePrintS3Url(link) && (
            <FileExtractedCard
              fileName={extractFileName(link) || ""}
              expiresIn="5 mins"
              onView={() => console.log("View")}
              onPrint={() => console.log("Print")}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
