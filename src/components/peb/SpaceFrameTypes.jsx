import React from "react";
import Heading from "../Common/Heading/Heading";

const SpaceFrameTypes = () => {
  const data = [
    {
      imgUrl: "https://paramountsteel.in/wp-content/uploads/2024/04/Primary-Frame.jpg",
      fType: "Rigid Frame Clear Span",
      sRange: "20 - 40M",
      Remarks: "Suitable for warehouses, goods stores, workshops, industrial buildings with clear span requirements",
    },
    {
      imgUrl: "https://paramountsteel.in/wp-content/uploads/2024/04/Primary-Frame.jpg",
      fType: "Rigid Frame Clear Span",
      sRange: "20 - 40M",
      Remarks: "Suitable for warehouses, goods stores, workshops, industrial buildings with clear span requirements",
    },
    {
      imgUrl: "https://paramountsteel.in/wp-content/uploads/2024/04/Primary-Frame.jpg",
      fType: "Rigid Frame Clear Span",
      sRange: "20 - 40M",
      Remarks: "Suitable for warehouses, goods stores, workshops, industrial buildings with clear span requirements",
    },
    {
      imgUrl: "https://paramountsteel.in/wp-content/uploads/2024/04/Primary-Frame.jpg",
      fType: "Rigid Frame Clear Span",
      sRange: "20 - 40M",
      Remarks: "Suitable for warehouses, goods stores, workshops, industrial buildings with clear span requirements",
    },
    {
      imgUrl: "https://paramountsteel.in/wp-content/uploads/2024/04/Primary-Frame.jpg",
      fType: "Rigid Frame Clear Span",
      sRange: "20 - 40M",
      Remarks: "Suitable for warehouses, goods stores, workshops, industrial buildings with clear span requirements",
    },
    {
      imgUrl: "https://paramountsteel.in/wp-content/uploads/2024/04/Primary-Frame.jpg",
      fType: "Rigid Frame Clear Span",
      sRange: "20 - 40M",
      Remarks: "Suitable for warehouses, goods stores, workshops, industrial buildings with clear span requirements",
    },
  ];

  return (
    <div className="container mx-auto my-10 w-full sec-padding">
      {/* Event Item 1 */}
      <Heading title="Space Frame Structures" secTitle="Types" />

      {data.map((item, index) => (
        <div key={index} className={`mx-auto my-10 max-w-full`}>
          <div className={`flex max-md:flex-col ${index % 2 === 0 ? 'flex-row-reverse' : ''}  `}>
            {/* Time Block */}
            <div
              className={`flex items-center justify-center text-white py-10 md:w-1/3 border-2 border-[#3d7588]`}
            >
              <div className="text-center">
                <img src={item.imgUrl} alt="" className="aspect-video w-full" />
              </div>
            </div>

            {/* Event Details */}
            <div
              className={`flex flex-col justify-center md:w-2/3 border-2 border-[#3d7588] p-10`}
            >
              <div className="flex flex-col">
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200 text-left">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-3 px-5 text-md font-semibold uppercase border-b border-gray-200">
                          Attribute
                        </th>
                        <th className="py-3 px-5 text-md font-semibold uppercase border-b border-gray-200">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-3 px-5 font-semibold uppercase border-b border-gray-200">
                          Frame Type
                        </td>
                        <td className="py-3 px-5 border-b border-gray-200">
                          {item.fType}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-5 font-semibold uppercase border-b border-gray-200">
                          Span Range
                        </td>
                        <td className="py-3 px-5 border-b border-gray-200">
                          {item.sRange}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-5 font-semibold uppercase border-b border-gray-200">
                          Remarks
                        </td>
                        <td className="py-3 px-5 border-b border-gray-200">
                          {item.Remarks}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpaceFrameTypes;