import React from "react";

const Profile = ({data}) => {
  return (
    <div>
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-5 md:py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
            <h1 className="sm:text-4xl text-xl w-full mb-4 font-medium text-[#305764]">
              Pre Engineered Buildings
            </h1>
            <p className="mb-8 leading-relaxed text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ab dignissimos praesentium placeat harum atque soluta vitae quas nulla sunt saepe quisquam eum veritatis unde quidem minima ut commodi corporis cumque! Necessitatibus accusantium iure quisquam repudiandae perspiciatis harum, doloribus excepturi.

              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus minus rerum, iste veritatis ipsa fuga quam, optio atque eum mollitia quidem velit dolorem repellat vel. Ut, explicabo! Non perferendis tenetur animi veritatis ut qui a adipisci ex vel error! <br/><br/>

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat a quibusdam saepe molestiae voluptatibus atque fuga illum odio, natus error animi ipsam, doloribus fugit accusantium consequatur nesciunt minima architecto. Distinctio suscipit molestias saepe, incidunt nobis repellendus maxime quidem quam sequi quaerat molestiae earum a dolorem quos. Voluptatum quis placeat pariatur.

              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat id beatae possimus blanditiis, harum minus esse incidunt quam dolores ut provident cupiditate in quasi explicabo ratione velit quidem fugiat dicta. Deserunt, repudiandae commodi. Molestias voluptas unde reprehenderit eius alias eaque cupiditate nobis ut, totam enim a vel. Exercitationem, magnam possimus?
            </p>
            
          </div>
          <div className="md:w-1/2 w-ful">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/About/Banner.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
