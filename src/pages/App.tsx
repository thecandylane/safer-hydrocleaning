import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App bg-gray-200 min-h-screen py-12">

      <nav className="bg-blue-700 p-6 text-white shadow-md">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mb-4">Safer Powerwashing</h1>
          <div className="flex space-x-6">
            <a href="#about" className="hover:bg-blue-800 px-4 py-2 rounded transition duration-300 ease-in-out">About Us</a>
            <a href="#services" className="hover:bg-blue-800 px-4 py-2 rounded transition duration-300 ease-in-out">Services</a>
            <a href="#testimonials" className="hover:bg-blue-800 px-4 py-2 rounded transition duration-300 ease-in-out">Testimonials</a>
            <a href="#contact" className="hover:bg-blue-800 px-4 py-2 rounded transition duration-300 ease-in-out">Contact</a>
          </div>
        </div>
      </nav>

      <section id="about" className="p-8 bg-white rounded-lg shadow-md my-8 mx-4">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p>
        "Safer Powerwashing isn't just our name, it's our promise. With a fusion of seasoned expertise and eco-friendly techniques, 
        we rejuvenate surfaces while safeguarding the environment. Our commitment goes beyond the shine; it's about providing a cleaner, 
        Safer, and brighter community for everyone. Dive deeper into our story and discover why Safer Powerwashing has become the trusted 
        choice for transformative cleaning in Baton Rouge."
        </p>
      </section>

      <section id="services" className="p-8 bg-white rounded-lg shadow-md my-8 mx-4">
        <h2 className="text-3xl font-bold mb-4">Services</h2>
        <ul className="list-disc pl-8">
          <li className="mb-2">Residential Powerwashing</li>
          <li className="mb-2">Commercial Powerwashing</li>
          <li className="mb-2">Driveway and Patio Cleaning</li>
          {/* Add other services here */}
        </ul>
      </section>

      <section id="testimonials" className="p-8 bg-white rounded-lg shadow-md my-8 mx-4">
        <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
        <blockquote className="pl-8 border-l-4 border-blue-700 italic">
          "Safer Powerwashing did an amazing job on my home! I couldn't believe 
          how clean it looked afterwards." - Satisfied Customer
        </blockquote>
        {/* Add more testimonials here */}
      </section>

      <section id="contact" className="p-8 bg-white rounded-lg shadow-md my-8 mx-4">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p>
          Need a quote or have questions? Reach out to us at: 
          <a href="mailto:contact@saferpowerwashing.com" className="text-blue-700 underline hover:text-blue-800 transition duration-300 ease-in-out">contact@saferpowerwashing.com</a>
        </p>
      </section>

      <footer className="bg-blue-700 p-6 text-white mt-8">
        <p>© {new Date().getFullYear()} Safer Powerwashing. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
