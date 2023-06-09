import React from "react";
import Fade from "react-reveal/Fade";

const Footer: React.FC = () => {
  return (
    <Fade bottom>
      <section className="md:w-auto mx-auto w-[90%] ">
        <div className="container mx-auto py-24">
          <footer className="footer">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2 lg:col-span-1">
                <img src="/images/logo.svg" alt="logo" className="logo w-56" />
              </div>
              <div className="col-span-1">
                <h4 className="text-xl font-bold">Company</h4>
                <ul>
                  <li className="mt-4">About</li>
                  <li className="mt-4">FAQ</li>
                  <li className="mt-4">Contact Us</li>
                  <li className="mt-4">Policies</li>
                </ul>
              </div>
              <div className="col-span-1">
                <h4 className="text-xl font-bold">Tools</h4>
                <ul>
                  <li className="mt-4">Resume Builder</li>
                  <li className="mt-4">Resume Feedback</li>
                  <li className="mt-4">Resources</li>
                  <li className="mt-4">Blog</li>
                </ul>
              </div>
              <div className="col-span-1">
                <h4 className="text-xl font-bold">Partnerships</h4>
                <ul>
                  <li className="mt-4">Universities</li>
                  <li className="mt-4">Companies</li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </Fade>
  );
};

export default Footer;
