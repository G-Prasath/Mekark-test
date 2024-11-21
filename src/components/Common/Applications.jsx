import React from "react";
import Heading from "../Common/Heading/Heading";

const Applications = ({ data }) => {
  return (
    <div className="my-0 sec-padding">
      <Heading title="Applications" secTitle="Usages" />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-2 gap-y-2 w-full items-center justify-center sm:px-20 mt-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="group relative my-10 flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg border-2 border-[#3d7588]"
          >
            <div
              className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"
              data-aos="zoom-out-down" data-aos-duration="800"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full transform transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {item.name}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applications;
