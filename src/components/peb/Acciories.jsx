import React from "react";
import Heading from "../Common/Heading/Heading";

const Acciories = () => {
  const data = [
    {
      imgUrl: "https://i.ibb.co/vhKYByB/cardimg.jpg",
      title: "Name",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloremque atque dicta recusandae debitis tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, inventore Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vero saepe nemo dolorem, iure molestiae facilis modi architecto unde laboriosam!",
    },
    {
      imgUrl: "https://i.ibb.co/vhKYByB/cardimg.jpg",
      title: "Name",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloremque atque dicta recusandae debitis tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, inventore Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vero saepe nemo dolorem, iure molestiae facilis modi architecto unde laboriosam!",
    },
    {
      imgUrl: "https://i.ibb.co/vhKYByB/cardimg.jpg",
      title: "Name",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloremque atque dicta recusandae debitis tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, inventore",
    },
    {
      imgUrl: "https://i.ibb.co/vhKYByB/cardimg.jpg",
      title: "Name",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloremque atque dicta recusandae debitis tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, inventore",
    },
    {
      imgUrl: "https://i.ibb.co/vhKYByB/cardimg.jpg",
      title: "Name",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloremque atque dicta recusandae debitis tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, inventore",
    },
  ];

  return (
    <div className="mt-10">
      <Heading title="PEB" secTitle="Accessories" />
      <section className="grid md:grid-cols-2 grid-cols-1 gap-10 bg-gray-100 sec-padding mt-10">
        {data.map((item, index) => (
          <div key={index} className="flex w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex-none w-2/5">
              <img
                src={item.imgUrl}
                alt="Project"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-grow p-5">
              <h3 className="text-2xl font-bold mb-5">{item.title}</h3>
              <p className="text-base leading-relaxed mb-8 text-justify">
                {item.para}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Acciories;
