import React from 'react';

const Home = () => {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-blue-900 mb-4">
              Learn Anytime, Anywhere
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Join thousands of learners on E-Learning and upgrade your skills with industry-ready courses.
            </p>
            <a
              href="/courses"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow hover:bg-blue-700 transition"
            >
              Browse Courses
            </a>
          </div>
          <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
            <img
              src="/public/e-learning.jpg"
              alt="Hero"
              className="rounded-xl shadow-xl w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: '🧠',
                title: 'Expert Mentors',
                desc: 'Learn from industry leaders and experienced instructors.',
              },
              {
                icon: '⏰',
                title: 'Flexible Schedule',
                desc: 'Access content anytime, on any device, at your own pace.',
              },
              {
                icon: '🏆',
                title: 'Recognized Certification',
                desc: 'Earn certificates that add value to your career profile.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-blue-50 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-blue-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">Popular Categories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Technology', img: "/public/tech.jpg" },
              { name: 'Design', img: '/public/design.jpg' },
              { name: 'Business', img: '/public/business.jpg' },
            ].map((cat, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"
              >
                <img src={cat.img} alt={cat.name} className="w-full h-48 object-cover" />
                <div className="p-5 text-center">
                  <h4 className="text-xl font-semibold text-blue-700">{cat.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">What Our Students Say</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                name: 'Aarav Mehta',
                text: 'E-Learning helped me land my first job in tech! The courses are well-structured and beginner-friendly.',
              },
              {
                name: 'Sanya Sharma',
                text: 'The design course was amazing! The mentors gave real-world advice and the projects helped build my portfolio.',
              },
            ].map((review, i) => (
              <div
                key={i}
                className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <p className="italic text-gray-700 mb-4">"{review.text}"</p>
                <h5 className="font-semibold text-blue-800">{review.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-100 text-black text-center mb-10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Start Learning Today</h2>
          <p className="text-lg mb-6">
            Whether you're a beginner or pro, we have something for everyone. Join our global learning community now.
          </p>
          <a
            href="/courses"
            className="inline-block bg-white text-blue-700 font-medium px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            View Courses
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
