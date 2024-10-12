import React from 'react';
import gfg from '../assets/logos//gfg logo.svg';
import { Link } from 'react-router-dom';
const AboutPage: React.FC = () => {
    return (
        <div className="p-8 px-20 bg-black text-green-500 flex flex-col items-center justify-center">
            <img src={gfg} alt="GFG GHRCEMN Student Chapter" className="w-32 h-32 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4 w-full">About GFG GHRCEMN Student Chapter</h1>
            <p className="mb-6 text-start">
                Welcome to the GeeksforGeeks GHRCEMN Student Chapter! We are a community of enthusiastic students from GH Raisoni College of Engineering and Management, Nagpur, who are passionate about coding, technology, and continuous learning.
            </p>
            <h2 className="text-3xl font-semibold mb-3 text-start w-full">Our Mission</h2>
            <p className="mb-6">
                Our mission is to provide a platform for students to enhance their coding skills, collaborate on projects, and prepare for competitive programming and technical interviews. We aim to foster a culture of learning and innovation within our college.
            </p>
            <h2 className="text-3xl font-semibold mb-3 w-full text-start">Activities</h2>
            <ul className="list-disc list-inside mb-6 text-start w-full">
                <li>Weekly Coding Sessions</li>
                <li>Workshops on Latest Technologies</li>
                <li>Hackathons and Coding Competitions</li>
                <li>Guest Lectures by Industry Experts</li>
                <li>Project Collaborations</li>
            </ul>
            <Link to="https://chat.whatsapp.com/KfqB1aBkEqnJRFsOtcMAjT" className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-green-600 shadow-lg">
                <button>
                    join us
                </button>
            </Link>
        </div>
    );
};

export default AboutPage;