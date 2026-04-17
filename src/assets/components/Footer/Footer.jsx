import React from "react";

const Footer = () => {
  return (
    <div className="bg-emerald-800">
      <div className="w-full max-w-7xl mx-auto px-6 py-14 text-center space-y-4">
        <div>
          <h1 className="text-7xl text-white text-semibold">KeenKeeper</h1>
          <p className="text-gray-200 py-5">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>
        <h1 className="text-white">Social Link</h1>
        <div className="flex gap-2 justify-center">
          <a href="">
            <img src="/instagram.png" alt="Instagram" />
          </a>
          <a href="">
            <img src="/facebook.png" alt="Facebook" />
          </a>
          <a href="">
            <img src="/twitter.png" alt="Twitter" />
          </a>
        </div>
        <hr className="border-gray-500" />
        <div className="flex justify-between">
          <p className="text-gray-400">
            © 2026 KeenKeeper. All rights reserved.
          </p>
          <div>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-200 transition-colors"
            >
              Privacy Policy
            </a>
            <span className="mx-2 text-gray-400">|</span>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-200 transition-colors"
            >
              Terms of Service
            </a>
            <span className="mx-2 text-gray-400">|</span>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-200 transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
