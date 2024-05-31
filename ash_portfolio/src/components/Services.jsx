import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4 bg-white shadow-lg rounded">
            <h3 className="text-xl font-bold">Crop Monitoring</h3>
            <p className="mt-2">Utilize advanced sensors and analytics to monitor crop health.</p>
          </div>
          <div className="p-4 bg-white shadow-lg rounded">
            <h3 className="text-xl font-bold">Soil Analysis</h3>
            <p className="mt-2">Get detailed insights on soil composition for better crop planning.</p>
          </div>
          <div className="p-4 bg-white shadow-lg rounded">
            <h3 className="text-xl font-bold">Market Insights</h3>
            <p className="mt-2">Stay updated with the latest market trends and prices.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
