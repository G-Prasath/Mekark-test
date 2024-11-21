import React from "react";
import Heading from "../Common/Heading/Heading";

// Card component for individual items
const Card = ({ image, title, description }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-xl">
      <img
        src={image}
        alt={title}
        className="rounded-lg shadow-md w-full mb-4"
      />
      <h5 className="text-gray-800 text-lg font-semibold mb-2">{title}</h5>
    </div>
  );
};

// Main component for displaying all cards
const PebApp = () => {
  const cardData = [
    {
      image:
        "https://img.freepik.com/premium-photo/metal-roof-beam-columns-incomplete-warehouse-building-structure-construction-site_43514-2634.jpg?w=1060",
      title: "Dragon Art",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/metal-roof-beam-columns-incomplete-warehouse-building-structure-construction-site_43514-2634.jpg?w=1060",
      title: "Dragon Art",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/metal-roof-beam-columns-incomplete-warehouse-building-structure-construction-site_43514-2634.jpg?w=1060",
      title: "Dragon Art",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/metal-roof-beam-columns-incomplete-warehouse-building-structure-construction-site_43514-2634.jpg?w=1060",
      title: "Dragon Art",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/metal-roof-beam-columns-incomplete-warehouse-building-structure-construction-site_43514-2634.jpg?w=1060",
      title: "Dragon Art",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/metal-roof-beam-columns-incomplete-warehouse-building-structure-construction-site_43514-2634.jpg?w=1060",
      title: "Dragon Art",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4 sec-paading">
      <Heading title="PEB Applications" secTitle="Types" />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-10">
        {cardData.map((item, index) => (
          <Card key={index} image={item.image} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default PebApp;
