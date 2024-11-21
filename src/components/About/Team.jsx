import React from "react";
import Heading from "../Common/Heading/Heading";

const Team = () => {
  return (
    <div className="sm:p-10 p-5 sm:mt-10 mt-5">
      <Heading title="Our Team" secTitle={`Group`} />

      {/* Add content in full width above both images */}
      <p className="text-md text-gray-700 text-justify w-full mb-5">
        At Mekark, our team is our greatest asset. We are a dedicated group of
        professionals with skills in engineering, design, project management and
        construction, all passionate about delivering excellent results. We
        thrive on collaboration, encouraging each other to share ideas and solve
        problems creatively. By focusing on continuous learning and keeping up
        with industry trends, we aim to build structures that not only meet but
        exceed our client’s expectations.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
        <div className="relative overflow-hidden">
          <img
            src="https://img.freepik.com/free-photo/business-people-posing-together-office_23-2148746329.jpg?t=st=1727166035~exp=1727169635~hmac=d6035a481258018cedf7a84397b72ce5cc76bd6b6aaf617952b819ba988ad5d4&w=1060"
            alt="Gallery Image 1"
            className="w-full h-auto rounded-xl transition-transform duration-300 p-1 hover:scale-105"
          />
        </div>
        <div className="relative overflow-hidden">
          <img
            src="https://img.freepik.com/free-photo/business-people-posing-together-office_23-2148746329.jpg?t=st=1727166035~exp=1727169635~hmac=d6035a481258018cedf7a84397b72ce5cc76bd6b6aaf617952b819ba988ad5d4&w=1060"
            alt="Gallery Image 2"
            className="w-full h-auto rounded-xl transition-transform duration-300 p-1 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
