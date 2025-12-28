import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Job<span className="text-purple-500">Portal</span>
          </h2>
          <p className="mt-4 text-sm text-gray-400">
            Find your dream job or hire the perfect candidate.  
            Trusted by thousands of companies.
          </p>
        </div>

        {/* Job Seekers */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Job Seekers
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-purple-400 cursor-pointer">Find Jobs</li>
            <li className="hover:text-purple-400 cursor-pointer">Create Resume</li>
            <li className="hover:text-purple-400 cursor-pointer">Job Alerts</li>
            <li className="hover:text-purple-400 cursor-pointer">Career Advice</li>
          </ul>
        </div>

        {/* Employers */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Employers
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-purple-400 cursor-pointer">Post a Job</li>
            <li className="hover:text-purple-400 cursor-pointer">Search Resumes</li>
            <li className="hover:text-purple-400 cursor-pointer">Pricing Plans</li>
            <li className="hover:text-purple-400 cursor-pointer">Employer Login</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Company
          </h3>
          <ul className="space-y-2 text-sm">
            <Link to="/about">
            <li className="hover:text-purple-400 cursor-pointer">About Us</li>
            </Link>
            <li className="hover:text-purple-400 cursor-pointer">Contact</li>
            <li className="hover:text-purple-400 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-purple-400 cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-400">
            © {new Date().getFullYear()} JobPortal. All rights reserved.
          </p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <span className="hover:text-purple-400 cursor-pointer">LinkedIn</span>
            <span className="hover:text-purple-400 cursor-pointer">Twitter</span>
            <span className="hover:text-purple-400 cursor-pointer">Instagram</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
