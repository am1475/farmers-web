import React from 'react';
import farmerJohn from './farm4.jpg';
import farmerJane from './farm5.jpg';
import farmerJoe from './farm6.jpg';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4 shadow-lg rounded">
            <img src={farmerJohn} alt="Farmer John" className="w-16 h-16 rounded-full mx-auto mb-4" />
            <p>"The crop monitoring service helped us improve our yield significantly."</p>
            <p className="mt-4 font-bold">- Farmer John</p>
          </div>
          <div className="p-4 shadow-lg rounded">
            <img src={farmerJane} alt="Farmer Jane" className="w-16 h-16 rounded-full mx-auto mb-4" />
            <p>"Soil analysis provided us with the data we needed for better crop rotation."</p>
            <p className="mt-4 font-bold">- Farmer Jane</p>
          </div>
          <div className="p-4 shadow-lg rounded">
            <img src={farmerJoe} alt="Farmer Joe" className="w-16 h-16 rounded-full mx-auto mb-4" />
            <p>"Market insights kept us ahead of the competition."</p>
            <p className="mt-4 font-bold">- Farmer Joe</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
