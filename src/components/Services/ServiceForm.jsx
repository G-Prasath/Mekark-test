import React from "react";

const ServiceForm = () => {
  return (
    <section className="pt-5 pb-5">
      <div className="">
        <div className="flex justify-center border border-t-red-700 rounded-tr-lg rounded-tl-lg">
          <div className="bg-white relative p-5 md:px-20 rounded-lg overflow-hidden flex justify-between w-full">
            <div className="absolute top-0 right-0">
              <img
                src="https://i.ibb.co/bRJVsq5/contact-us-box-bg.png"
                alt="signup"
                className="w-full"
              />
            </div>
            <div className="flex items-center justify-between gap-8 relative w-full">
              <div
                className="space-y-6 md:w-3/5 w-full p-5"
                style={{ backdropFilter: "blur(10px)" }}
              >
                <h2 className="text-xl md:text-3xl font-semibold text-white md:text-[#ef4444] text-center uppercase">
                  Get a Quote
                </h2>
                <form className="space-y-4">
                  <div className="form-group">
                    <input
                      type="text"
                      name="text"
                      placeholder="Your Name"
                      className="w-full py-3 px-4 rounded-md border border-red-600 outline-none"
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full py-3 px-4 rounded-md border border-red-600 outline-none"
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      className="w-full py-3 px-4 rounded-md border border-red-600 outline-none"
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group">
                    <select
                      name="cars"
                      id="cars"
                      className="w-full py-3 px-4 rounded-md border border-red-600 outline-none"
                    >
                      <option value="">Choose Services</option>
                      <option value="saab">Service 1</option>
                      <option value="opel">Service 2</option>
                      <option value="audi">Service 3</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea
                      type="text"
                      name="msg"
                      placeholder="Enter Message here"
                      rows={3}
                      className="w-full py-3 px-4 rounded-md border border-red-600 outline-none"
                      autoComplete="off"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="bg-red-500 w-full text-white font-semibold uppercase py-2 px-8 rounded-md cursor-pointer hover:bg-red-600 transition"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceForm;