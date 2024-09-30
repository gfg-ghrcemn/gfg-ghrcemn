import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <div className="bg-inherit text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-green-400 text-center mb-8">
          About GFG Club
        </h2>
        <p className="text-lg leading-7 mb-6">
          The <span className="font-semibold">GeeksforGeeks (GFG) Club</span> is a community of passionate programmers and technology enthusiasts dedicated to learning, sharing knowledge, and building projects together. Our mission is to foster a collaborative environment where members can enhance their coding skills, prepare for technical interviews, and stay updated with the latest industry trends.
        </p>
        <p className="text-lg leading-7 mb-6">
          We organize regular workshops, coding competitions, hackathons, and guest lectures by industry professionals. Whether you're a beginner looking to start your programming journey or an experienced developer aiming to expand your skill set, the GFG Club offers resources and support for everyone.
        </p>
        <p className="text-lg leading-7">
          Join us to connect with like-minded individuals, contribute to open-source projects, and be a part of an engaging learning experience. Let's code, learn, and grow together!
        </p>
        <div className="mt-10 flex justify-center">
          <button className="border-green-500 border-1 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-green-600 shadow-lg">
            Join the Club
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
