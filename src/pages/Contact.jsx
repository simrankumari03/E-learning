import React from 'react';

const Contacts = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions or need support? We'd love to hear from you. Fill out the form or use the contact information below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          
          <div className="bg-white p-8 rounded-xl shadow-md border border-blue-100">
            <form className="flex flex-col gap-5">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Your Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Your Message</label>
                <textarea
                  rows="4"
                  placeholder="Type your message here..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white font-medium py-2 px-6 rounded hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          
          <div className="bg-white p-8 rounded-xl shadow-md border border-blue-100">
            <h3 className="text-2xl font-semibold text-blue-700 mb-6">Contact Information</h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                 <strong>Email:</strong> support@elearning.com
              </li>
              <li>
                 <strong>Phone:</strong> 8976579878
              </li>
              <li>
                 <strong>Address:</strong> Salt lake city
              </li>
              <li>
                 <strong>Hours:</strong> Mon - Fri, 9am - 6pm 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
