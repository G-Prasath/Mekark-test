import React from "react";

const PebForm = () => {
  return (
    <div>
      <div
        className="bg-gray-100 flex bg-local"
        style={{
            backgroundImage: 
              "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/architect.svg')",
          }}
      >
        <div className="mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl my-24">
          <form>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                    htmlFor="company"
                  >
                    Name
                  </label>
                  <input
                    className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                    id="company"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="md:w-1/2 px-3">
                  <label
                    className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                    htmlFor="title"
                  >
                    Email
                  </label>
                  <input
                    className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                    id="title"
                    type="text"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                    htmlFor="company"
                  >
                    Phone
                  </label>
                  <input
                    className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                    id="company"
                    type="text"
                    placeholder="Phone Number"
                  />
                </div>

                <div className="md:w-1/2 px-3">
                  <label
                    className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                    htmlFor="title"
                  >
                    Services
                  </label>
                  <select
                    className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                    id="location"
                  >
                    <option>Service 1</option>
                    <option>Service 2</option>
                    <option>Service 3</option>
                  </select>
                </div>
              </div>

              <div className="md:flex mb-6 w-full">
                <div className="mb-6 md:mb-0 w-full">
                  <label
                    className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                    htmlFor="company"
                  >
                    Messages
                  </label>
                  <textarea
                    className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                    rows={4}
                    id="company"
                    type="text"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>

              <div className="-mx-3 md:flex mt-2">
                <div className="md:w-full px-3">
                  <button
                    className="w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PebForm;