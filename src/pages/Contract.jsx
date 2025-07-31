import React from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import helloimg from '../assets/hello.png'

const Contract = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-white px-6 py-12">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left: Text Info */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Contact us</h1>
          <p className="text-gray-700 text-lg">
            If you have any questions, suggestions, or feedback about my portfolio or projects,
            feel free to reach out. I'm always happy to connect and improve!
          </p>

          <div className="space-y-4 text-gray-800 text-base">
            <div className="flex items-start gap-3">
  <FiMapPin className="text-xl mt-1" />
  <span>
    302/1 Sinpitak Dormitory, Soi Wongsawang 11,<br />
    Wongsawang Sub-district, Bang Sue District,<br />
    Bangkok 10800, Thailand
  </span>
</div>
            <div className="flex items-center gap-3">
              <FiPhone className="text-xl" />
              <span>062 195 7218</span>
            </div>
            <div className="flex items-center gap-3">
              <FiMail className="text-xl" />
              <a href="mailto:narongritklinloy2544@gmail.com" className="text-blue-600 hover:underline">
                narongritklinloy2544@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <img
            src={helloimg}
            alt="Contact Illustration"
            className="w-80 h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Contract;
