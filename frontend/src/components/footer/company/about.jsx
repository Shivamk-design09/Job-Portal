import React from 'react'
import Navbar from '../../shared/Navbar';

const About = () => {
  return (
    <div>
      <Navbar/>
     
    <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-200 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Intro */}
        <div className="max-w-4xl">
          <p className="text-purple-400 font-semibold tracking-wider uppercase">
            Our Story
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white leading-tight">
            Jobs aren’t just listings. <br />
            They’re life decisions.
          </h2>
          <p className="mt-6 text-gray-400 text-lg">
            JobPortal was created with one simple belief —
            finding a job should feel empowering, not exhausting.
            We built a platform where talent meets opportunity
            without noise, fake listings, or endless scrolling.
          </p>
        </div>

        {/* Split Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14">
          
          {/* Left */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              Built for Real People
            </h3>
            <p className="text-gray-400 leading-relaxed">
              We know the struggle — rejected applications, unclear job roles,
              and portals that feel more confusing than helpful.
              JobPortal is designed to respect your time and effort.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Whether you’re switching careers, searching for your first role,
              or hiring your next key team member —
              we keep the process simple, transparent, and human.
            </p>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              What Makes Us Different
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3">
                <span className="text-purple-400">▹</span>
                No fake or expired job listings
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400">▹</span>
                Clean, distraction-free job discovery
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400">▹</span>
                Smart matching, not random results
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400">▹</span>
                Built equally for candidates and recruiters
              </li>
            </ul>
          </div>
        </div>

        {/* Numbers with meaning */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition">
            <h4 className="text-3xl font-bold text-white">10,000+</h4>
            <p className="mt-2 text-gray-400">Careers started here</p>
          </div>

          <div className="border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition">
            <h4 className="text-3xl font-bold text-white">5,000+</h4>
            <p className="mt-2 text-gray-400">Companies hiring smarter</p>
          </div>

          <div className="border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition">
            <h4 className="text-3xl font-bold text-white">98%</h4>
            <p className="mt-2 text-gray-400">User satisfaction rate</p>
          </div>
        </div>

        {/* Closing Line */}
        <div className="mt-20 max-w-3xl">
          <p className="text-xl text-gray-300">
            At <span className="text-purple-400 font-semibold">JobPortal</span>,
            we’re not just connecting resumes to companies —
            we’re helping people move forward in life.
          </p>
        </div>

      </div>
    </section>


    </div>
    
  );
};

export default About;
