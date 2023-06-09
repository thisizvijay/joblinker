"use client";
import { useEffect, useState } from "react";
import { Lato } from "next/font/google";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import Testimonial from "../components/testimonial";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import HeadShake from "react-reveal/HeadShake";
import Bounce from "react-reveal/Bounce";
import Script from "next/script";

const inter = Lato({
  weight: "400",
  subsets: ["latin-ext"]
});

export default function Home() {
  const [mainIllustration, setmainIllustration] = useState("/images/main-illustration.png");
  const [effortlessConnection, seteffortlessConnection] = useState(
    "/images/effortless-connections.png"
  );
  const [powerOfJobReferral, setpowerOfJobReferral] = useState("/images/power-of-referrals.png");
  const [hiringProcess, sethiringProcess] = useState("/images/hiring-process.png");
  const [youGotNewJob, setyouGotNewJob] = useState("/images/you-got-new-job.png");
  const [showForm, setshowForm] = useState(false);
  const [blockID, setblockID] = useState("");
  const [emailID, setemailID] = useState("");
  const [sourceX, setsourceX] = useState("");
  const [videoModel, setvideoModel] = useState(false);

  const constructUrl = () => {
    let url = "https://sk2ck7ohu9y.typeform.com/to/ob8UZl9V";
    if (blockID) {
      url = `${url}?block=${blockID}`;
    }
  };

  useEffect(() => {
    // main-illustration change into
    // @ts-ignore
    const svgImage = new Image();
    svgImage.src = "/images/main-illustration.svg";
    svgImage.onload = () => {
      // check the media query is mobile or not
      if (!window.matchMedia("(max-width: 768px)").matches) {
        setmainIllustration(svgImage.src);
      }
    };

    // effortless-connections change into
    // @ts-ignore
    const svgImage2 = new Image();
    svgImage2.src = "/images/effortless-connections.svg";
    svgImage2.onload = () => {
      seteffortlessConnection(svgImage2.src);
    };

    // power-of-referrals change into
    // @ts-ignore
    const svgImage3 = new Image();
    svgImage3.src = "/images/power-of-referrals.svg";
    svgImage3.onload = () => {
      setpowerOfJobReferral(svgImage3.src);
    };

    // hiring-process change into
    // @ts-ignore
    const svgImage4 = new Image();
    svgImage4.src = "/images/hiring-process.svg";
    svgImage4.onload = () => {
      sethiringProcess(svgImage4.src);
    };

    // you-got-new-job change into
    // @ts-ignore
    const svgImage5 = new Image();
    svgImage5.src = "/images/you-got-new-job.svg";
    svgImage5.onload = () => {
      setyouGotNewJob(svgImage5.src);
    };

    // print all query params
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get("source");
  }, []);
  return (
    <div className={inter.className}>
      <Head>
        <title>JobLinkr - Power Your Job Search with Connections and Referrals</title>
        <meta
          name="description"
          content="Join JobLinkr and unlock a world of job opportunities through powerful connections and referrals. Streamline your job search and land your dream job today"
        />
      </Head>
      <div className="container mx-auto"></div>
      <div className="md:container md:mx-auto">
        <Header
          setshowLogin={(boolValue: boolean, id: string) => {
            setshowForm(boolValue);
            setblockID(id);
          }}
        />
        {showForm && (
          // Modal
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              {/* https://sk2ck7ohu9y.typeform.com/to/ob8UZl9V */}
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-100">
                  <div className="absolute inset-0">
                    <div className="h-full w-[90%] mx-auto bg-white opacity-100">
                      <iframe
                        id="myIframe"
                        src={"https://eu-submit.jotform.com/231576852462361"}
                        frameBorder="0"
                        className="w-full h-full relative top-1/2 -translate-y-1/2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {videoModel && (
          <div>
            {/* overlay */}
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
              <div
                id="defaultModal"
                tabIndex={-1}
                className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex"
                aria-modal="true"
                role="dialog"
              >
                <div className="relative w-full max-w-2xl max-h-full">
                  {/* Modal content */}
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* Modal header */}
                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Introducing JobLinker.app
                      </h3>
                      <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="defaultModal"
                        onClick={() => setvideoModel(false)}
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    {/* Modal body */}
                    <div className="p-6 space-y-6">
                      {/* video */}
                      <video controls className="w-full" autoPlay>
                        <source src="/introduction-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    {/* Modal footer */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* A big circle with blurly  */}
        <div className="absolute top-0 pointer-events-none -left-10 -z-10 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000 "></div>
        <section className="min-h-screen w-[90%] md:w-auto mx-auto">
          <p className=" md:my-8   ">&nbsp;</p>
          <button className="bg-transparent shadow-none   border md:inline-block md:bg-white p-3 rounded-full px-5 md:shadow-md hover:shadow-lg text-primary">
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
              <div className="flex relative">
                <button
                  className="
              bg-gradient-to-r from-[#5350FF]   to-[#DF0F99] text-white px-10  rounded-full my-12 shadow-md hover:shadow-lg
              w-1/2
              py-3
              text-sm
              "
                  onClick={() => setshowForm(true)}
                >
                  Sign Up
                </button>
                <button
                  className="
                  animate-bounce
            border px-10  py-3 rounded-full my-12  ml-3 inline-block hover:shadow-lg bg-white
            w-1/2 text-sm
            "
                  onClick={() => setvideoModel(true)}
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hidden md:inline-block mr-2 -mt-[2px] "
                  >
                    <path
                      d="M11.9688 2C6.44875 2 1.96875 6.48 1.96875 12C1.96875 17.52 6.44875 22 11.9688 22C17.4888 22 21.9688 17.52 21.9688 12C21.9688 6.48 17.4988 2 11.9688 2ZM14.9688 14.23L12.0687 15.9C11.7087 16.11 11.3088 16.21 10.9187 16.21C10.5188 16.21 10.1287 16.11 9.76875 15.9C9.04875 15.48 8.61875 14.74 8.61875 13.9V10.55C8.61875 9.72 9.04875 8.97 9.76875 8.55C10.4888 8.13 11.3487 8.13 12.0787 8.55L14.9787 10.22C15.6987 10.64 16.1287 11.38 16.1287 12.22C16.1287 13.06 15.6987 13.81 14.9688 14.23Z"
                      fill="#5D50C6"
                    />
                  </svg>
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
              <img
                src={mainIllustration}
                id="main-illustration"
                className="relative -top-28 h-[640px]"
              />
            </div>
          </div>

          {/* 
          <img
            src="/images/trust-brand.png"
            className="
          hidden
          md:block
          w-full mx-auto   relative
          md:-top-32
          "
          /> */}

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
              <Fade bottom>
                <p className="py-6">&nbsp;</p>
                <h1 className="text-4xl md:text-6xl my-6 font-bold">
                  Effortless&nbsp;
                  <br />
                  <span className="text-primary">Connections</span>
                </h1>
                <p className="text-slate-500 leading-9 text-lg">
                  For job givers, we provide a seamless and efficient hiring process. Our smart
                  candidate matching algorithms help you find the perfect fit for your organization.
                  Save time and resources by connecting directly with high-quality candidates
                  referred by trusted professionals.
                </p>
              </Fade>
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
              <Fade bottom>
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
              </Fade>
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
            <img src={hiringProcess} className="md:block hidden" />
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-[90%] md:w-2/3 mx-auto  pt-3 md:pt-24">
              <Fade bottom>
                <p className="py-6 md:py-6">&nbsp;</p>
                <h1 className="text-4xl md:text-6xl my-6 font-bold">
                  Streamlined &nbsp;
                  <span className="text-primary block">Hiring Process</span>
                </h1>
                <p className="text-slate-500 leading-9 text-lg">
                  For job givers, we provide a seamless and efficient hiring process. Our smart
                  candidate matching algorithms help you find the perfect fit for your organization.
                  Save time and resources by connecting directly with high-quality candidates
                  referred by trusted professionals.
                </p>
              </Fade>
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
              <h1 className="text-4xl md:text-6xl my-4 font-bold">Features That <span className="text-primary">Empower You</span></h1>
              <p className="text-slate-500 my-7 text-lg">
                Maximize Your Potential with Powerful Platform Features
              </p>

              <Bounce>
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
              </Bounce>

              <Bounce>
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
              </Bounce>
              <Bounce>
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
              </Bounce>

              <Bounce>
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
              </Bounce>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative hidden md:block">
            <img src={youGotNewJob} className="relative -right-44 -top-20 h-[700px]" />
          </div>
        </div>
      </section>

      <p>&nbsp;</p>
      <p>&nbsp;</p>

      <Testimonial />

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
                JobLinker.app
              </span>
            </p>
            <p>&nbsp;</p>
            <div className="flex justify-center mt-5">
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="p-4 border border-gray-300 rounded-lg mr-3
        w-full md:w-96
        focus:outline-none
        focus:ring-2
        focus:ring-[#5D50C6]
        focus:border-transparent"
                    value={emailID}
                    onChange={(e) => setemailID(e.target.value)}
                    onFocus={() => setshowForm(true)}
                  />
                </div>
                <div className="flex flex-col">
                  <button
                    onClick={() => setshowForm(true)}
                    className="bg-[#5D50C6] text-white p-4 rounded-2xl mt-3 md:mt-0"
                  >
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
      <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-KWL7EK3TXX"
      strategy="afterInteractive"
      id="google-analytics"
      >
        
      </Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-KWL7EK3TXX');
          console.log("google analytics loaded")
          `}
      </Script>
    </div>
  );
}
