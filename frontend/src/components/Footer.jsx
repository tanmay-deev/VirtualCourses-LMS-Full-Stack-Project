import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Footer = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  let navigate = useNavigate();

  return (
    <>
      <footer className="bg-black text-gray-300 py-10 px-6">
        <div className="max-w-7xl mx-auto flex lg:items-center items-start justify-center gap-[40px] lg:gap-[150px] flex-col lg:flex-row">

          {/* Logo + Description */}
          <div className="lg:w-[40%] md:w-[50%] w-[100%]">
            <img src={logo} alt="Logo" className="h-10 mb-3 border-1 rounded-[5px]" />
            <h2 className="text-xl font-bold text-white mb-3">Virtual Courses</h2>
            <p className="text-sm">
              AI-powered learning platform to help you grow smarter. Learn anything, anytime, anywhere.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:w-[20%] md:w-[100%]">
            <h3 className="text-white font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li className="hover:text-white cursor-pointer" onClick={() => navigate("/")}>Home</li>
              <li className="hover:text-white cursor-pointer" onClick={() => navigate("/allcourses")}>Courses</li>
              <li className="hover:text-white cursor-pointer" onClick={() => navigate("/login")}>Login</li>
              <li className="hover:text-white cursor-pointer" onClick={() => navigate("/profile")}>My Profile</li>
            </ul>
          </div>

          {/* Explore Categories */}
          <div className="lg:w-[20%] md:w-[100%]">
            <h3 className="text-white font-semibold mb-2">Explore Categories</h3>
            <ul className="space-y-1 text-sm">
              <li className="hover:text-white">Web Development</li>
              <li className="hover:text-white">AI/ML</li>
              <li className="hover:text-white">Data Science</li>
              <li className="hover:text-white">UI/UX Design</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="lg:w-[20%] md:w-[100%]">
            <h3 className="text-white font-semibold mb-2">Contact</h3>
            <ul className="space-y-1 text-sm">
              <li className="hover:text-white">📞 9588424899</li>
              <li className="hover:text-white">📧 tanmaybonde20@gmail.com</li>
              <li className="hover:text-white leading-5">
                📍 Loahegao, DY Patil Road,<br />
                Pune, Maharashtra – <b>411047</b>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="lg:w-[20%] md:w-[100%]">
            <h3 className="text-white font-semibold mb-2">Legal</h3>
            <ul className="space-y-1 text-sm">
              <li
                className="hover:text-white cursor-pointer"
                onClick={() => setShowTerms(true)}
              >
                Terms & Conditions
              </li>
              <li
                className="hover:text-white cursor-pointer"
                onClick={() => setShowPrivacy(true)}
              >
                Privacy Policy
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-5 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} Virtual Courses. All rights reserved.
        </div>
      </footer>

      {/* ================= TERMS & CONDITIONS MODAL ================= */}
      {showTerms && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 px-4">
          <div className="bg-white text-black p-6 rounded-lg max-w-lg w-full shadow-xl overflow-y-auto max-h-[80vh]">

            <h2 className="text-2xl font-bold mb-4">Terms & Conditions</h2>

            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>All users must provide accurate personal information for account creation and course access.</li>
              <li>Course materials, videos, and training resources may not be copied, shared, or resold.</li>
              <li>We reserve the right to update, remove, or modify any course at any time.</li>
              <li>Your account is your responsibility—keep your credentials confidential.</li>
              <li>Refunds (if offered) follow our official refund policy only.</li>
              <li>Misuse, cheating, or violating platform rules may result in account suspension.</li>
            </ul>

            <button
              onClick={() => setShowTerms(false)}
              className="mt-6 w-full py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ================= PRIVACY POLICY MODAL ================= */}
      {showPrivacy && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 px-4">
          <div className="bg-white text-black p-6 rounded-lg max-w-lg w-full shadow-xl overflow-y-auto max-h-[80vh]">

            <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>

            <p className="text-sm mb-4">
              Your privacy is extremely important to us. This Privacy Policy explains how we collect, use, and protect your information.
            </p>

            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>We collect personal information such as name, email, and device data only to provide better course access.</li>
              <li>Your data is used for authentication, progress tracking, and account support.</li>
              <li>We never sell or share your personal data with third-party advertisers.</li>
              <li>All payments are processed securely through trusted payment gateways.</li>
              <li>You may request account or data deletion anytime by contacting support.</li>
              <li>We use cookies to improve user experience and platform performance.</li>
            </ul>

            <p className="text-sm mt-4">
              By using Virtual Courses, you consent to the practices described in this Privacy Policy.
            </p>

            <button
              onClick={() => setShowPrivacy(false)}
              className="mt-6 w-full py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
