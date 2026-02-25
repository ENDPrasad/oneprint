import React, { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import UploadSection from "./UploadSection";
import ViewSection from "./ViewSection";
import LinkCreatedCard from "./LinkCreatedCard";
import FileExtractedCard from "./FileExtractedCard";
import Mobile from "./Mobile";
import About from "./About";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import type { UploadResponse } from "../interfaces/interfaces";
import { extractFileName, isValidOnePrintS3Url } from "../utility/helper";


const DEFAULT_EXPIRY_TIME = 5;
const BASE_API_URL = import.meta.env.VITE_API_URL;

const HomeLayout: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [link, setLink] = useState("");
  const [active, setActive] = useState(false);

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

  const handleClick = () => {
    setActive(!active);

    if (!active) {
      console.log("Generate Link Action");
    } else {
      console.log("View Link Action");
    }
  };

  return (
    <>
      <Navbar />
      <Hero />

      {/* Mobile View */}
      <Mobile active={active} handleClick={handleClick} />


      {/* Desktop View with components */}
      <div className="grid justify-content-center gap-5">
        {/* Left Section */}
        <div
          className={`
      col-12 md:col-5 px-6 py-3
      ${active ? "hidden md:block" : ""}
    `}
        >
          <div className="flex flex-column gap-4">
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
        </div>

        {/* Divider */}
        <div className="hidden md:block border-1 mb-8"></div>

        {/* Right Section */}
        <div
          className={`
      col-12 md:col-5 px-6 py-3
      ${!active ? "hidden md:block" : ""}
    `}
        >
          <div className="flex flex-column gap-4">
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
      </div>
      <div>
        <About />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
};

export default HomeLayout;
