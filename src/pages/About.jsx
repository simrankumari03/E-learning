import React from "react";

const About = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4">About E-Learning</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering learners around the world through accessible, flexible,
            and expert-led education in technology, design, business, and more.
          </p>
        </div>

        
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-3 text-blue-700">
               Our Mission
            </h3>
            <p>
              To deliver high-quality, affordable education to anyone, anywhere.
              We aim to remove barriers to learning and help individuals reach
              their full potential.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-3 text-blue-700">
               Our Vision
            </h3>
            <p>
              To be the world’s most learner-centric platform, trusted for
              transforming lives and careers through cutting-edge, interactive
              learning experiences.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-3 text-blue-700">
              Our Values
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Accessibility & Inclusion</li>
              <li>Innovation in Learning</li>
              <li>Student Success</li>
              <li>Integrity & Trust</li>
            </ul>
          </div>
        </div>

        
        <div className="bg-white rounded-xl shadow p-10 mb-20 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 text-center">
          <div>
            <h4 className="text-4xl font-bold text-blue-600">500K+</h4>
            <p className="text-gray-600">Students Enrolled</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-blue-600">1,200+</h4>
            <p className="text-gray-600">Expert Instructors</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-blue-600">3,000+</h4>
            <p className="text-gray-600">Courses Offered</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-blue-600">95%</h4>
            <p className="text-gray-600">Student Satisfaction</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Our Global Learning Community
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Start your journey with E-Learning and unlock new career
            opportunities with world-class education.
          </p>
          <a
            href="/courses"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Browse Courses
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
