"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useEffect, useState } from "react";

export default function Home() {
  const [mainIllustration, setmainIllustration] = useState("/images/main-illustration.png");
  const [effortlessConnection, seteffortlessConnection] = useState(
    "/images/effortless-connections.png"
  );
  const [powerOfJobReferral, setpowerOfJobReferral] = useState("/images/power-of-referrals.png");
  const [hiringProcess, sethiringProcess] = useState("/images/hiring-process.png");
  const [youGotNewJob, setyouGotNewJob] = useState("/images/you-got-new-job.png");

  useEffect(() => {
    // main-illustration change into
    const svgImage = new Image();
    svgImage.src = "/images/main-illustration.svg";
    svgImage.onload = () => {
      setmainIllustration(svgImage.src);
    };

    // effortless-connections change into
    const svgImage2 = new Image();
    svgImage2.src = "/images/effortless-connections.svg";
    svgImage2.onload = () => {
      seteffortlessConnection(svgImage2.src);
    };

    // power-of-referrals change into
    const svgImage3 = new Image();
    svgImage3.src = "/images/power-of-referrals.svg";
    svgImage3.onload = () => {
      setpowerOfJobReferral(svgImage3.src);
    };

    // hiring-process change into
    const svgImage4 = new Image();
    svgImage4.src = "/images/hiring-process.svg";
    svgImage4.onload = () => {
      sethiringProcess(svgImage4.src);
    };

    // you-got-new-job change into
    const svgImage5 = new Image();
    svgImage5.src = "/images/you-got-new-job.svg";
    svgImage5.onload = () => {
      setyouGotNewJob(svgImage5.src);
    }

  }, []);
  return (
    <>
      <div className="container mx-auto"></div>
      <div className="md:container md:mx-auto">
        <Header />
        {/* A big circle with blurly  */}
        <div className="absolute top-0 pointer-events-none -left-10 -z-10 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000 "></div>
        <section className="min-h-screen w-[90%] md:w-auto mx-auto">
          <p className=" md:my-8   ">&nbsp;</p>
          <button className="bg-transparent shadow-none  border md:inline-block md:bg-white p-3 rounded-full px-5 md:shadow-md hover:shadow-lg text-primary">
            <img src="/images/work-icon.svg" className="w-5 inline -mt-1 mr-1" /> Explore the
            Opportunities
          </button>

          <p className="my-3">&nbsp;</p>
          <div className="flex">
            <div className="w-full md:w-2/5  min-h-fit		">
              <h1 className=" text-4xl md:text-6xl leading-tight md:leading-snug	 font-bold">
                Unlock the <br />
                Power of &nbsp;
                {/* text graident */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DF0F99]  to-[#5350FF]">
                  Job Referrals
                </span>
              </h1>
              <p className="text-slate-500 leading-relaxed mt-10 text-lg">
                Transforming the Way Job Seekers Connect with Referrers and Employers. Embrace a New
                Era of Job Search and Say Farewell to Traditional Methods
              </p>
              {/* gradient button */}
              <div className="flex">
                <button
                  className="
              bg-gradient-to-r from-[#5350FF]   to-[#DF0F99] text-white px-10  rounded-full my-12 shadow-md hover:shadow-lg
              w-1/2
              py-3
              text-sm
              "
                >
                  Sign Up
                </button>
                <button
                  className="
            border px-10  py-3 rounded-full my-12  ml-3 inline-block hover:shadow-lg bg-white
            w-1/2 text-sm
            "
                >
                  Watch Demo
                </button>
              </div>

              <img
                src="images/arrow-objects.svg"
                className="absolute bottom-0  w-52 h-52 -z-20 opacity-40 hidden md:inline-block
                -left-20
                "
              />
            </div>
            <div className="hidden md:w-3/5  md:block	">
              <img src={mainIllustration} id="main-illustration" className="relative -top-28 h-[640px]" />
            </div>
          </div>

          <img
            src="/images/trust-brand.png"
            className="
          hidden
          md:block
          w-full mx-auto   relative
          md:-top-32
          "
          />

          <div
            className="
           hidden
          md:block
          w-[500px] h-[500px] opacity-30 bg-[#FACD49] rounded-full blur-3xl absolute  -right-[27rem] -bottom-96"
          ></div>

          <img src={mainIllustration} className="block md:hidden relative" />
        </section>
      </div>

      <section className="relative">
        <img
          src="/images/rocket.png"
          className="absolute -bottom-44 md:-bottom-24 -right-6 h-40 md:h-56
            hidden md:block
          "
        />
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img src={effortlessConnection} className="hidden md:block" />
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-[90%] md:w-2/3 mx-auto pt-3 md:pt-24">
              <p className="py-6">&nbsp;</p>
              <h1 className="text-4xl md:text-6xl my-6 font-bold">
                Effortless&nbsp;
                <br />
                <span className="text-primary">Connections</span>
              </h1>
              <p className="text-slate-500 leading-9 text-lg">
                For job givers, we provide a seamless and efficient hiring process. Our smart
                candidate matching algorithms help you find the perfect fit for your organization.
                Save time and resources by connecting directly with high-quality candidates referred
                by trusted professionals.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="hidden md:block">
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      </div>
      <section className="relative">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="w-[90%] md:w-2/3 mx-auto pt-3 md:pt-24">
              <p className="py-6">&nbsp;</p>
              <h1 className="text-4xl md:text-6xl my-6 font-bold">
                Tap into the&nbsp;
                <span className="text-primary block">Power of Referrals</span>
              </h1>
              <p className="text-slate-500 leading-9 text-lg">
                Studies have shown that referrals are one of the most effective ways to secure a
                job. With JobLinkr, you gain access to a pool of pre-screened and recommended
                candidates, significantly increasing your chances of landing interviews and job
                offers.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 text-right relative">
            <img
              src={powerOfJobReferral}
              className="h-[600px] hidden md:block relative -right-20"
            />
          </div>
        </div>
      </section>

      <section className="relative">
        <img
          src="/images/resume.png"
          className="absolute w-16 md:w-auto top-10 md:top-20 right-12 hidden md:block"
        />
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img src={hiringProcess}
             className="md:block hidden" />
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-[90%] md:w-2/3 mx-auto  pt-3 md:pt-24">
              <p className="py-6 md:py-6">&nbsp;</p>
              <h1 className="text-4xl md:text-6xl my-6 font-bold">
                Streamlined &nbsp;
                <span className="text-primary block">Hiring Process</span>
              </h1>
              <p className="text-slate-500 leading-9 text-lg">
                For job givers, we provide a seamless and efficient hiring process. Our smart
                candidate matching algorithms help you find the perfect fit for your organization.
                Save time and resources by connecting directly with high-quality candidates referred
                by trusted professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* clearfix */}
      <div className="clearfix py-12 my-1 md:py-10 md:my-10 "></div>

      <section>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="w-[90%] md:w-2/3  mx-auto">
              <h3 className="text-xl text-primary my-3">KEY FEATURES</h3>
              <h1 className="text-4xl md:text-6xl my-4 font-bold">Features That Empower You</h1>
              <p className="text-slate-500 my-7 text-lg">
                Maximize Your Potential with Powerful Platform Features
              </p>
              <div className="p-4 bg-white z-10 rounded-lg mt-3 border hover:shadow-sm cursor-pointer">
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <span className="bg-[#FF5722] w-16 h-16 p-3 rounded-2xl">
                      <img src="/images/user.svg" />
                    </span>
                  </div>
                  <div className="flex flex-col justify-center pl-6 font-semibold">
                    Personalized Job Recommendations
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white rounded-lg mt-3 border hover:shadow-sm cursor-pointer">
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <span className="bg-[#7D65D5] w-16 h-16 p-3 rounded-2xl">
                      <img src="/images/match.svg" />
                    </span>
                  </div>
                  <div className="flex flex-col justify-center pl-6 font-semibold">
                    Resume Match Algorithm
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg mt-3 border hover:shadow-sm cursor-pointer">
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <span className="bg-[#FACD49] w-16 h-16 p-3 rounded-2xl pt-5">
                      <img src="/images/ats.svg" className="justify-center flex flex-col" />
                    </span>
                  </div>
                  <div className="flex flex-col justify-center pl-6 font-semibold">
                    Application Tracking and Updates
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg mt-3 border hover:shadow-sm cursor-pointer">
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <span className="bg-[#F85E9F] w-16 h-16 p-3 rounded-2xl">
                      <img src="/images/pie.svg" />
                    </span>
                  </div>
                  <div className="flex flex-col justify-center pl-6 font-semibold">
                    Data-Driven Insights
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative hidden md:block">
            <img
              src={youGotNewJob}
              className="relative -right-44 -top-20 h-[700px]"
            />
          </div>
        </div>
      </section>

      <p>&nbsp;</p>
      <p>&nbsp;</p>

      <section className="relative h-[500px]">
        <div className="container mx-auto">
          {/* testimonial slider */}
          <div className="flex flex-col">
            <h1 className="text-center text-primary mt-5 text-2xl font-bold">Testimonials</h1>
            <p className="text-3xl text-center mt-5">Trust our clients</p>
            <div className="flex flex-row">
              <div className="hidden md:block md:w-[10%]">
                <button
                  className="bg-white text-black border p-2 rounded-full
                  w-16 h-16 mt-20 hover:shadow-lg 
                "
                >
                  <svg
                    width={24}
                    height={25}
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="block mx-auto"
                  >
                    <path
                      d="M6.41431 11.5H20.0001C20.5524 11.5 21.0001 11.9478 21.0001 12.5C21.0001 13.0523 20.5524 13.5 20.0001 13.5H6.41431L9.65695 16.7427C10.0475 17.1332 10.0475 17.7664 9.65695 18.1569C9.26642 18.5474 8.63326 18.5474 8.24273 18.1569L4.00009 13.9143C3.21904 13.1332 3.21904 11.8669 4.00009 11.0858L8.24273 6.84319C8.63326 6.45266 9.26642 6.45266 9.65695 6.84319C10.0475 7.23371 10.0475 7.86688 9.65695 8.2574L6.41431 11.5Z"
                      fill="#191825"
                    />
                  </svg>
                </button>
              </div>
              <div className="w-[100%] md:w-[80%]">
                <div>
                  <div className="text-center">
                    <img
                      src="images/user-image.png"
                      className="rounded-full w-24 h-24 mx-auto my-10"
                    />
                    <h1 className="text-3xl my-5">
                      <span className="text-orange-500">John Doe </span>{" "}
                      <span className="text-xl"> / CEO Company</span>
                    </h1>
                    <p className="mt-2">
                      {/* star  svg */}
                      <svg
                        width={24}
                        height={23}
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline ml-2"
                      >
                        <path
                          d="M12 0L15.0919 7.23607H22.3639L16.3639 11.7639L19.4558 19L12 14.4722L4.54418 19L7.63607 11.7639L1.63607 7.23607H8.90812L12 0Z"
                          fill="#FACD49"
                        />
                      </svg>
                      <svg
                        width={24}
                        height={23}
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline ml-2"
                      >
                        <path
                          d="M12 0L15.0919 7.23607H22.3639L16.3639 11.7639L19.4558 19L12 14.4722L4.54418 19L7.63607 11.7639L1.63607 7.23607H8.90812L12 0Z"
                          fill="#FACD49"
                        />
                      </svg>
                      <svg
                        width={24}
                        height={23}
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline ml-2"
                      >
                        <path
                          d="M12 0L15.0919 7.23607H22.3639L16.3639 11.7639L19.4558 19L12 14.4722L4.54418 19L7.63607 11.7639L1.63607 7.23607H8.90812L12 0Z"
                          fill="#FACD49"
                        />
                      </svg>
                      <svg
                        width={24}
                        height={23}
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline ml-2"
                      >
                        <path
                          d="M12 0L15.0919 7.23607H22.3639L16.3639 11.7639L19.4558 19L12 14.4722L4.54418 19L7.63607 11.7639L1.63607 7.23607H8.90812L12 0Z"
                          fill="#FACD49"
                        />
                      </svg>
                      <svg
                        width={24}
                        height={23}
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline ml-2"
                      >
                        <path
                          d="M12 0L15.0919 7.23607H22.3639L16.3639 11.7639L19.4558 19L12 14.4722L4.54418 19L7.63607 11.7639L1.63607 7.23607H8.90812L12 0Z"
                          fill="#FACD49"
                        />
                      </svg>
                    </p>
                    <p className="w-2/3 mx-auto my-4">
                      “JobLinkr is a great platform for job seekers and job givers alike. I was able
                      to find a job that matched my skills and experience in no time. I highly
                      recommend it!”
                    </p>
                  </div>
                  <div className="hidden">
                    <img src="images/user-image.png" />
                    <h1>
                      John Doe <span>CEO, Company</span>
                    </h1>
                    <p>
                      “JobLinkr is a great platform for job seekers and job givers alike. I was able
                      to find a job that matched my skills and experience in no time. I highly
                      recommend it!”
                    </p>
                  </div>
                  <div className="hidden">
                    <img src="images/user-image.png" />
                    <h1>
                      John Doe <span>CEO, Company</span>
                    </h1>
                    <p>
                      “JobLinkr is a great platform for job seekers and job givers alike. I was able
                      to find a job that matched my skills and experience in no time. I highly
                      recommend it!”
                    </p>
                  </div>
                </div>
                {/* navigation dot */}
                <p className="text-center my-6">
                  <button className="bg-gray-300 ml-3  cursor-pointer w-3 h-3 rounded-full"></button>
                  <button className="bg-[#F85E9F] ml-3 cursor-pointer  w-3 h-3 rounded-full"></button>
                  <button className="bg-gray-300 ml-3 w-3 cursor-pointer h-3 rounded-full"></button>
                </p>
              </div>
              <div className="hidden md:block md:w-[10%]">
                <button
                  className="bg-primary text-white border p-2 rounded-full
                  w-16 h-16 mt-20 hover:shadow-lg
                "
                >
                  <svg
                    width={24}
                    height={25}
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="block mx-auto"
                  >
                    <path
                      d="M17.5857 11.5H4.00006C3.44779 11.5 3.00006 11.9478 3.00006 12.5C3.00006 13.0523 3.44779 13.5 4.00006 13.5H17.5857L14.343 16.7427C13.9525 17.1332 13.9525 17.7664 14.343 18.1569C14.7336 18.5474 15.3667 18.5474 15.7572 18.1569L20 13.9143C20.781 13.1332 20.781 11.8669 20 11.0858L15.7572 6.84319C15.3667 6.45266 14.7336 6.45266 14.343 6.84319C13.9525 7.23371 13.9525 7.86688 14.343 8.2574L17.5857 11.5Z"
                      fill="#fff"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src="images/testimonial-blob.svg"
          className="
            hidden md:block
          absolute w-screen -top-[450px] left-0 pointer-events-none -z-10"
        />
      </section>

      <div className="container mx-auto ">
        <section className="relative mt-20 ">
          <div className="p-4 md:p-20 md:py-20 relative bg-[#FFFBF0] w-auto mx-auto mt-10 text-center">
            <img
              src="/images/graphic-elements.svg"
              className="hidden md:block absolute -top-10 -left-10"
            />
            <img
              src="/images/rings.svg"
              className="hidden md:block absolute -right-28  -bottom-40"
            />
            <h3 className="text-primary text-lg font-semibold uppercase">Be the First to Know</h3>
            <p>&nbsp;</p>
            <p className="text-4xl font-medium my-6">
              Connect, refer, and seize job opportunities with &nbsp; <br />
              {/* text gr */}
              {/* #DF0F99 */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DF0F99]  to-[#5350FF] mt-6 inline-block text-6xl">
                JobLinkr.io
              </span>
            </p>
            <p>&nbsp;</p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="p-4 border border-gray-300 rounded-lg mr-3
        w-full md:w-96
        focus:outline-none
        focus:ring-2
        focus:ring-[#5D50C6]
        focus:border-transparent"
                  />
                </div>
                <div className="flex flex-col">
                  <button className="bg-[#5D50C6] text-white p-4 rounded-2xl mt-3 md:mt-0">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            <p>&nbsp;</p>
            <p>&nbsp;</p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
