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

      <div className="grid justify-content-center gap-5">
        {/* Left Section */}
        <div className="col-12 md:col-5 px-6 flex flex-column gap-4 py-3">
          <UploadSection />
          <LinkCreatedCard
            link="https://oneprint.com/234k9384"
            frequency={1}
            expiresIn="5 mins"
          />
        </div>

        {/* Divider */}
          <div className="border-1 mb-8"></div>

        {/* Right Section */}
        <div className="col-12 md:col-5 px-6 flex flex-column gap-4 py-3">
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
