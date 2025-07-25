import React from 'react';

const categorizedCourses = {
  Technology: [
    {
      title: "Web Development",
      description: "Learn HTML, CSS, JavaScript, and modern frameworks to build websites.",
      image: "/public/dev.jpg",
    },
    {
      title: "Data Science",
      description: "Master Python, data analysis, and machine learning techniques.",
      image: "/public/datascience.jpg",
    },
    {
      title: "Mobile App Development",
      description: "Build iOS and Android apps using React Native and Flutter.",
      image: "/public/mobileapp.jpg",
    },
    {
      title: "Artificial Intelligence",
      description: "Dive into neural networks and natural language processing.",
      image: "/public/ai.jpg",
    },
    {
      title: "Blockchain Development",
      description: "Build decentralized apps and smart contracts using Solidity.",
      image: "/public/blockchain.jpg",
    },
    {
      title: "DevOps Engineering",
      description: "Automate pipelines with Docker, Kubernetes & CI/CD tools.",
      image: "/public/devops.jpg",
    },
    {
      title: "Cloud Computing",
      description: "Learn AWS, Azure, and cloud infrastructure tools.",
      image:"/public/cloud.jpg",
    },
    {
      title: "Machine Learning Ops (MLOps)",
      description: "Deploy and manage ML models using real-time workflows.",
      image: "/public/machine.jpg",
    },
    {
      title: "Cybersecurity",
      description: "Learn ethical hacking and secure infrastructure practices.",
      image: "/public/cyber.jpg",
    },
    {
      title: "Robotics",
      description: "Design and program robots using Arduino and Raspberry Pi.",
      image: "/public/robot.jpg",
    },
  ],
  Design: [
    {
      title: "Graphic Design",
      description: "Master Photoshop, Illustrator, and visual design principles.",
      image: "/public/graphic.jpg",
    },
    {
      title: "UI/UX Design",
      description: "Create intuitive interfaces with Figma and design systems.",
      image: "/public/ui.jpg",
    },
    {
      title: "Photography",
      description: "Learn lighting, composition, and editing techniques.",
      image: "/public/photo.jpg",
    },
    {
      title: "Video Editing",
      description: "Edit professional videos with Premiere Pro and After Effects.",
      image: "/public/vdo.jpg",
    },
    {
      title: "Game Development",
      description: "Build games using Unity or Unreal Engine.",
      image: "/public/game.jpg",
    },
    {
      title: "AR/VR Design",
      description: "Create immersive AR/VR experiences using Unity.",
      image: "/public/ar.jpg",
    },
  ],
  "Business & Soft Skills": [
    {
      title: "Digital Marketing",
      description: "Learn SEO, content strategy, ads, and campaign management.",
      image: "/public/digi.jpg",
    },
    {
      title: "Finance & Investment",
      description: "Understand stock markets, ETFs, and portfolio strategies.",
      image: "/public/finance.jpg",
    },
    {
      title: "Entrepreneurship",
      description: "Learn startup planning, pitching, and MVP development.",
      image: "/public/enter.jpg",
    },
    {
      title: "Public Speaking",
      description: "Enhance communication and presentation skills.",
      image: "/public/public.jpg",
    },
    {
      title: "English for Professionals",
      description: "Improve communication, emails, and workplace language.",
      image: "/public/english.jpg",
    },
  ],
};

const Courses = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-16">Explore Our Courses</h2>

        {Object.entries(categorizedCourses).map(([category, courses]) => (
          <div key={category} className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
              {courses.map((course, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5 flex flex-col h-full">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{course.title}</h4>
                    <p className="text-sm text-gray-600 flex-grow">{course.description}</p>
                    <a
                      href="/courses"
                      className="mt-4 inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                      View Course
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
