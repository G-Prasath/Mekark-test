import React from "react";
import Heading from "../Common/Heading/Heading";

function CeoSection() {
  return (
    <>
      <div className="mt-10">
        <Heading title={"Meet Our Managing Director"} secTitle={`of Mekark`} />
      </div>
      <div className="flex flex-col items-center bg-white mt-5 px-4 md:flex-row">
        <div className="w-full md:w-1/2 p-4">
          <img
            src="https://img.freepik.com/free-photo/model-wearing-beautiful-shade-clothing_23-2151428030.jpg?t=st=1727170076~exp=1727173676~hmac=4a8faa21229d2ad52a32a7c04cc94d85b6d51e421d27011865576c043e74b928&w=1380"
            alt="CEO smiling in a suit"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 pl-0 md:pl-8 p-4">
          <div className="border-l-4 border-[#305764] pl-4">
            <p className="text-3xl md:text-4xl font-bold text-[#305764]">
              D.Aquin Janvel
            </p>
            <p className="text-lg md:text-xl font-bold text-[#e59350] mt-4">
              CEO of Mekark Pvt Ltd
            </p>
            <p className="text-gray-600 mt-4">
              Our MD, Mr. D Aquin Janvel, is the key innovator behind Mekark's
              success. With a clear vision and strong industry knowledge, he has
              successfully led Mekark to become a leader in pre-engineered
              buildings and industrial constructions. His leadership has set new
              standards for quality and innovation
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CeoSection;
