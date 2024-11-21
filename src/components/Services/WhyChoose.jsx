import Heading from "../Common/Heading/Heading";

const WhyChoose = () => {
  return (
    <div className="py-24 bg-white w-full sec-padding my-20">
      <Heading title={`Why Choose`} secTitle={`Mekark`}  />
      <div className="mt-10 max-w-screen-xl px-4 grid grid-cols-1 md:grid-cols-3 md:gap-8 items-center justify-center">
        {/* Left Features List */}
        <div>
          <ul className="grid grid-cols-1 justify-start md:gap-y-5 md:gap-x-10">
            <FeatureItem
              iconPath="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              title="Feature Name"
              subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolore ipsa molestias provident expedita illo veritatis voluptas eos voluptatibus sunt."
            />
            <FeatureItem
              iconPath="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              title="Feature Name"
              subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolore ipsa molestias provident expedita illo veritatis voluptas eos voluptatibus sunt."
            />
            <FeatureItem
              iconPath="M13 10V3L4 14h7v7l9-11h-7z"
              title="Feature Name"
              subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolore ipsa molestias provident expedita illo veritatis voluptas eos voluptatibus sunt."
            />
          </ul>
        </div>

        {/* Center Image */}
        <div>
          <div
            className="h-full mx-auto rounded bg-cover bg-right shadow-lg"
            style={{
              minHeight: "500px",
              backgroundImage:
                "url(https://img.freepik.com/premium-photo/closed-market-pavilions-shops-are-closed-shopping-arcade-corridor-shopping-pavilion_251376-1232.jpg?w=360)",
            }}
          ></div>
        </div>

        {/* Right Features List */}
        <div>
          <ul className="grid grid-cols-1 md:gap-y-5 md:gap-x-10">
            <FeatureItem
              iconPath="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
              title="Feature Name"
              subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolore ipsa molestias provident expedita illo veritatis voluptas eos voluptatibus sunt."
            />
            <FeatureItem
              iconPath="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              title="Feature Name"
              subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolore ipsa molestias provident expedita illo veritatis voluptas eos voluptatibus sunt."
            />
            <FeatureItem
              iconPath="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              title="Feature Name"
              subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolore ipsa molestias provident expedita illo veritatis voluptas eos voluptatibus sunt."
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ iconPath, title, subtitle }) => (
  <li className="my-5 md:mt-0">
    <div className="flex justify-center items-center">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-md text-[#2e4750]">
          <svg
            className="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={iconPath}
            />
          </svg>
        </div>
      </div>
      <div className="ml-4">
        <h4 className="text-lg leading-6 text-gray-900 font-semibold">
          {title}
        </h4>
        <p className="text-gray-500 text-justify">{subtitle}</p>
      </div>
    </div>
  </li>
);

export default WhyChoose;
