import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 gap-10">
        
        <div>
          <h3 className="text-2xl font-bold mb-3">E-Learning</h3>
          <p className="text-sm text-blue-100">
            Empowering learners worldwide with expert-led, accessible online education in tech, design, and business.
          </p>
        </div>

        
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/courses" className="hover:underline">Courses</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-300">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-blue-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      
      <div className="mt-10 border-t border-blue-700 pt-6 text-center text-sm text-blue-200">
        © {new Date().getFullYear()} E-Learning. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
