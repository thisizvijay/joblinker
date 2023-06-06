import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="container mx-auto py-24">
      <footer className="footer">
        <div className="flex flex-row">
          <div className="w-1/4">
            <img src="/images/logo.svg" alt="logo" className="logo w-56" />
          </div>
          <div className="w-1/4">
            <h4
                className="text-xl font-bold"
            >Company</h4>
            <ul>
              <li className="mt-4">About</li>
              <li className="mt-4">FAQ</li>
              <li className="mt-4">Contact Us</li>
              <li className="mt-4">Policies</li>
            </ul>
          </div>
          <div className="w-1/4">
            <h4 className="text-xl font-bold">Tools</h4>
            <ul>
              <li className="mt-4">Resume Builder</li>
              <li className="mt-4">Resume Feedback</li>
              <li className="mt-4">Resources</li>
              <li className="mt-4">Blog</li>
            </ul>
          </div>
          <div className="w-1/4">
            <h4 className="text-xl font-bold">Partnerships</h4>
            <ul>
              <li className="mt-4">Universities</li>
              <li className="mt-4">Companies</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
