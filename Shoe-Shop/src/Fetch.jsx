import { useState, useEffect } from 'react';

const Fetch = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://shoes-collections.p.rapidapi.com/shoes', {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '6f853713e3msh910acaafc292a34p16dfa7jsn29324de366d7',
            'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setShoes(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="max-w-xs bg-white rounded overflow-hidden shadow-lg">
            <img className="w-full h-32 object-cover" src={shoe.image} alt={shoe.name} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{shoe.name}</div>
              <p className="text-gray-700 text-base">{shoe.description}</p>
              <p className="text-gray-700 text-base mt-2">{shoe.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fetch;
