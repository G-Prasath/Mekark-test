import React from 'react';

const BentoGrid = () => {
  return (
    <div className="bg-gray-900 text-gray-100 p-6">
      <section className="mx-auto max-w-4xl">
        <div className="grid gap-5 md:grid-cols-3 md:grid-rows-3">
          <div className="border border-gray-700 bg-gray-800 p-6 rounded-lg row-span-2">
            <h2 className="font-semibold text-2xl">1. Lorem ipsum dolor</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Voluptatibus, expedita id optio animi veritatis nemo necessitatibus explicabo modi recusandae praesentium.</p>
            <p>Dolores cumque earum commodi repellendus!</p>
          </div>

          <div className="border border-gray-700 bg-gray-800 p-6 rounded-lg">
            <h2 className="font-semibold text-2xl">2. Distinctio alias</h2>
            <p>Neque hic iusto tenetur, distinctio alias iste expedita ullam unde dolores aliquid, ipsa laudantium rerum deleniti, tempora enim dolore? Ab, neque ratione?</p>
          </div>

          <div className="border border-gray-700 bg-gray-800 p-6 rounded-lg row-span-2">
            <h2 className="font-semibold text-2xl">3. Ullam unde dolores aliquid</h2>
            <p>Consectetur adipisicing elit. Neque hic iusto tenetur, distinctio alias iste expedita ullam unde dolores aliquid, ipsa laudantium rerum deleniti.</p>
            <p>Consectetur adipisicing elit.</p>
          </div>

          <div className="border border-gray-700 bg-gray-800 p-6 rounded-lg">
            <h2 className="font-semibold text-2xl">4. Laudantium rerum deleniti</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque hic iusto tenetur, distinctio alias iste expedita ullam unde dolores aliquid, ipsa laudantium rerum deleniti, tempora enim dolore? Ab, neque ratione?</p>
          </div>

          <div className="border border-gray-700 bg-gray-800 p-6 rounded-lg col-span-2 row-span-2">
            <h2 className="font-semibold text-2xl">5. Facere aut porro</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa laudantium rerum deleniti, tempora enim dolore? Ab, neque ratione?</p>
            <p>Dicta at dolor sint, unde labore, numquam sunt id provident facilis architecto aspernatur quis officia veniam facere aut porro quidem. Molestiae, veritatis.</p>
          </div>

          <div className="border border-gray-700 bg-gray-800 p-6 rounded-lg">
            <h2 className="font-semibold text-2xl">6. Consectetur</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque hic iusto tenetur, distinctio alias iste expedita ullam unde dolores aliquid, ipsa laudantium rerum deleniti, tempora enim dolore? Ab, neque ratione?</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl border-t-2 border-dashed border-gray-700 pt-16">
        <div className="grid gap-5 md:grid-cols-3 md:grid-rows-4">
          <div className="border border-gray-700 bg-gray-800 p-6 rounded-lg">
            <h2 className="font-semibold text-2xl">1. Lorem ipsum dolor</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque hic iusto tenetur, distinctio alias iste expedita ullam unde dolores aliquid, ipsa laudantium rerum deleniti, tempora enim dolore? Ab, neque ratione?</p>
          </div>

          <div className="border border-gray-700 bg-gray-800 p-6 rounded-lg col-span-2">
            <h2 className="font-semibold text-2xl">2. Distinctio alias</h2>
            <p>Neque hic iusto tenetur, distinctio alias iste expedita ullam unde dolores aliquid, ipsa laudantium rerum deleniti, tempora enim dolore? Ab, neque ratione?</p>
          </div>

          <div className="border border-gray-700 bg-gray-800 p-6 rounded-lg row-span-3">
            <h2 className="font-semibold text-2xl">3. Ullam unde dolores aliquid</h2>
            <p>Consectetur adipisicing elit. Neque hic iusto tenetur, distinctio alias iste expedita ullam unde dolores aliquid, ipsa laudantium rerum deleniti.</p>
            <p>Consectetur adipisicing elit. Neque hic iusto tenetur, distinctio alias iste expedita ullam unde dolores aliquid.</p>
          </div>

          <div className="border border-gray-700 bg-gray-800 p-6 rounded-lg col-span-2 row-span-2">
            <h2 className="font-semibold text-2xl">4. Laudantium rerum deleniti</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque hic iusto tenetur, distinctio alias iste expedita ullam unde dolores aliquid, ipsa laudantium rerum deleniti, tempora enim dolore? Ab, neque ratione?</p>
            <p>Alias quisquam necessitatibus labore sunt dolorum repellat ipsum architecto illo magni, in dolores.</p>
          </div>

          <div className="border border-gray-700 bg-gray-800 p-6 rounded-lg">
            <h2 className="font-semibold text-2xl">5. Facere aut porro</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa laudantium rerum deleniti, tempora enim dolore? Ab, neque ratione?</p>
            <p>Dicta at dolor sint, unde labore, numquam sunt id provident facilis architecto.</p>
          </div>

          <div className="border border-gray-700 bg-gray-800 p-6 rounded-lg col-span-2">
            <h2 className="font-semibold text-2xl">6. Consectetur</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque hic iusto tenetur, distinctio alias iste expedita ullam unde dolores aliquid, ipsa laudantium rerum deleniti, tempora enim dolore? Ab, neque ratione?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo repellendus beatae adipisci soluta iusto doloremque, veritatis cupiditate.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BentoGrid;
