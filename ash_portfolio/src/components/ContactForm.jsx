import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <form className="max-w-md mx-auto bg-white p-8 shadow-lg rounded">
          <div className="mb-4">
            <label className="block text-left mb-2">Name</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-2">Email</label>
            <input type="email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-2">Message</label>
            <textarea className="w-full p-2 border rounded"></textarea>
          </div>
          <button className="px-4 py-2 bg-green-600 text-white rounded">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
