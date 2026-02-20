import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import UploadSection from "./UploadSection";
import ViewSection from "./ViewSection";
import LinkCreatedCard from "./LinkCreatedCard";
import FileExtractedCard from "./FileExtractedCard";

const HomeLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="grid justify-content-center px-6">
        {/* Left Section */}
        <div className="col-12 md:col-5">
          <UploadSection />
          <LinkCreatedCard
            link="https://oneprint.com/234k9384"
            frequency={1}
            expiresIn="5 mins"
          />
        </div>

        {/* Divider */}
        <div className="hidden md:block col-1 flex justify-content-center">
          <div className="vertical-divider"></div>
        </div>

        {/* Right Section */}
        <div className="col-12 md:col-5">
          <ViewSection />
          <FileExtractedCard
            fileName="Aadhar.pdf"
            expiresIn="5 mins"
            onView={() => console.log("View")}
            onPrint={() => console.log("Print")}
          />
        </div>
      </div>
    </>
  );
};


export default HomeLayout;
