import React, { useEffect, useState } from "react";

const Testimonial: React.FC = () => {
    const [currentIndex, setcurrentIndex]:[any, any] = useState(0);
    const [touchPosition, setTouchPosition] = useState(null)

    const handleTouchStart = (e:any) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    useEffect(() => {
        // randomize the testimonial 
        const randomNumber = Math.floor(Math.random() * 4);
        setcurrentIndex(randomNumber);
    }, []);
    


    const handleTouchMove = (e:any) => {
        const touchDown = touchPosition
    
        if(touchDown === null) {
            return
        }
    
        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch
    
        if (diff > 5) {
            let _currentIndex = currentIndex;
            _currentIndex = _currentIndex + 1;
            if (_currentIndex > 3) {
                _currentIndex = 0;
            }
            setcurrentIndex(_currentIndex);
        }
    
        if (diff < -5) {
            let _currentIndex = currentIndex;
            _currentIndex = _currentIndex - 1;
            if (_currentIndex < 0) {
                _currentIndex = 3;
            }
            setcurrentIndex(_currentIndex);
        }
    
        setTouchPosition(null)
    }

  return (
    <>
         <section className="relative h-[500px]">
        <div className="container mx-auto">
          {/* testimonial slider */}
          <div className="flex flex-col">
            <h1 className="text-center text-primary mt-5 text-2xl font-bold">Opinions</h1>
            <p className="text-3xl text-center mt-5">People who find Platform Interesting
             
            </p>
            <div className="flex flex-row">
              <div className="hidden md:block md:w-[10%]">
                <button
                    onClick={() => {
                        let _currentIndex = currentIndex;
                        _currentIndex = _currentIndex - 1;
                        if (_currentIndex < 0) {
                            _currentIndex = 3;
                        }
                        setcurrentIndex(_currentIndex);
                        
                    }}
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
              <>
              {currentIndex === 0 && (
              <div className="w-[100%] md:w-[80%] animate-fade-in"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              >
                <div>
                  
                  <div className="text-center">
                    <img
                      src="images/user-david.png"
                      className="rounded-full w-24 h-24 mx-auto my-10"
                    />
                    <h1 className="text-3xl my-5">
                      <span className="text-orange-500">David Schulman</span>{" "} <br />
                      <span className="text-xl"> Software Engineer</span>
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
                    <p className="w-2/3 mx-auto my-4 text-lg">
                      “As a referrer, I see great potential in a dedicated job referral platform. It would make it easier for me to recommend suitable candidates and help talented individuals find the right opportunities.”
                    </p>
                  </div>
            
                </div>
                {/* navigation dot */}
                <p className="text-center my-6">
                  <button 
                    onClick={() => setcurrentIndex(0)}
                  className={
                    currentIndex === 0 ?"bg-[#F85E9F] ml-3  cursor-pointer w-3 h-3 rounded-full":"bg-gray-300 ml-3  cursor-pointer w-3 h-3 rounded-full"
                  }></button>
                  <button 
                   onClick={() => setcurrentIndex(1)}
                   className={
                    currentIndex === 1 ?"bg-[#F85E9F] ml-3  cursor-pointer w-3 h-3 rounded-full":"bg-gray-300 ml-3  cursor-pointer w-3 h-3 rounded-full"
                  }
                  ></button>
                  <button 
                   onClick={() => setcurrentIndex(2)}
                   className={
                    currentIndex === 2 ?"bg-[#F85E9F] ml-3  cursor-pointer w-3 h-3 rounded-full":"bg-gray-300 ml-3  cursor-pointer w-3 h-3 rounded-full"
                  }
                  ></button>
                  <button 
                   onClick={() => setcurrentIndex(3)}
                   className={
                    currentIndex === 3 ?"bg-[#F85E9F] ml-3  cursor-pointer w-3 h-3 rounded-full":"bg-gray-300 ml-3  cursor-pointer w-3 h-3 rounded-full"
                  }
                  ></button>
                </p>
              </div>)}
              {currentIndex === 1 && (
              <div className="w-[100%] md:w-[80%] animate-fade-in"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              >
                <div>
                  
                  <div className="text-center">
                    <img
                      src="images/user-linda.png"
                      className="rounded-full w-24 h-24 mx-auto my-10"
                    />
                    <h1 className="text-3xl my-5">
                      <span className="text-orange-500">Linda Martin</span>{" "} <br />
                      <span className="text-xl">  HR Manager</span>
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
                    <p className="w-2/3 mx-auto my-4 text-lg">
                      “As a hiring manager, having access to a pool of referred candidates through a dedicated platform would streamline our hiring process and improve the quality of our hires.”
                    </p>
                  </div>
            
                </div>
                {/* navigation dot */}
                <p className="text-center my-6">
                  <button 
                    onClick={() => setcurrentIndex(0)}
                  className={
                    currentIndex === 0 ?"bg-[#F85E9F] ml-3  cursor-pointer w-3 h-3 rounded-full":"bg-gray-300 ml-3  cursor-pointer w-3 h-3 rounded-full"
                  }></button>
                  <button 
                   onClick={() => setcurrentIndex(1)}
                   className={
                    currentIndex === 1 ?"bg-[#F85E9F] ml-3  cursor-pointer w-3 h-3 rounded-full":"bg-gray-300 ml-3  cursor-pointer w-3 h-3 rounded-full"
                  }
                  ></button>
                  <button 
                   onClick={() => setcurrentIndex(2)}
                   className={
                    currentIndex === 2 ?"bg-[#F85E9F] ml-3  cursor-pointer w-3 h-3 rounded-full":"bg-gray-300 ml-3  cursor-pointer w-3 h-3 rounded-full"
                  }
                  ></button>
                  <button 
                   onClick={() => setcurrentIndex(3)}
                   className={
                    currentIndex === 3 ?"bg-[#F85E9F] ml-3  cursor-pointer w-3 h-3 rounded-full":"bg-gray-300 ml-3  cursor-pointer w-3 h-3 rounded-full"
                  }
                  ></button>
                </p>
              </div>)}
              {currentIndex === 2 && (
              <div className="w-[100%] md:w-[80%] animate-fade-in"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              >
                <div>
                  
                  <div className="text-center">
                    <img
                      src="images/user-mark.png"
                      className="rounded-full w-24 h-24 mx-auto my-10"
                    />
                    <h1 className="text-3xl my-5">
                      <span className="text-orange-500">Mark Clattenburg </span>{" "} <br />
                      <span className="text-xl"> Technical Consultant</span>
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
                    <p className="w-2/3 mx-auto my-4 text-lg">
                      “A dedicated job referral platform would greatly simplify my role in recommending qualified candidates. I'm eager to leverage my network and help talented individuals find the right opportunities through this platform.”
                    </p>
                  </div>
            
                </div>
                {/* navigation dot */}
                <p className="text-center my-6">
                  <button 
                    onClick={() => setcurrentIndex(0)}
                  className={
                    currentIndex === 0 ?"bg-[#F85E9F] ml-3  cursor-pointer w-3 h-3 rounded-full":"bg-gray-300 ml-3  cursor-pointer w-3 h-3 rounded-full"
                  }></button>
                  <button 
                   onClick={() => setcurrentIndex(1)}
                   className={
                    currentIndex === 1 ?"bg-[#F85E9F] ml-3  cursor-pointer w-3 h-3 rounded-full":"bg-gray-300 ml-3  cursor-pointer w-3 h-3 rounded-full"
                  }
                  ></button>
                  <button 
                   onClick={() => setcurrentIndex(2)}
                   className={
                    currentIndex === 2 ?"bg-[#F85E9F] ml-3  cursor-pointer w-3 h-3 rounded-full":"bg-gray-300 ml-3  cursor-pointer w-3 h-3 rounded-full"
                  }
                  ></button>
                  <button 
                   onClick={() => setcurrentIndex(3)}
                   className={
                    currentIndex === 3 ?"bg-[#F85E9F] ml-3  cursor-pointer w-3 h-3 rounded-full":"bg-gray-300 ml-3  cursor-pointer w-3 h-3 rounded-full"
                  }
                  ></button>
                </p>
              </div>)}
              {currentIndex === 3 && (
              <div className="w-[100%] md:w-[80%] animate-fade-in"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              >
                <div>
                  
                  <div className="text-center">
                    <img
                      src="images/user-image.png"
                      className="rounded-full w-24 h-24 mx-auto my-10"
                    />
                    <h1 className="text-3xl my-5">
                      <span className="text-orange-500">Sowmya Sreenivasan </span>{" "} <br />
                      <span className="text-xl">  QA Engineer</span>
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
                    <p className="w-2/3 mx-auto my-4 text-lg">
                      “I'm excited about a platform that simplifies job referrals and connects me with potential opportunities. It would greatly enhance my job search and increase my chances of finding relevant employment.”
                    </p>
                  </div>
            
                </div>
                {/* navigation dot */}
                <p className="text-center my-6">
                  <button 
                    onClick={() => setcurrentIndex(0)}
                  className={
                    currentIndex === 0 ?"bg-[#F85E9F] ml-3  cursor-pointer w-3 h-3 rounded-full":"bg-gray-300 ml-3  cursor-pointer w-3 h-3 rounded-full"
                  }></button>
                  <button 
                   onClick={() => setcurrentIndex(1)}
                   className={
                    currentIndex === 1 ?"bg-[#F85E9F] ml-3  cursor-pointer w-3 h-3 rounded-full":"bg-gray-300 ml-3  cursor-pointer w-3 h-3 rounded-full"
                  }
                  ></button>
                  <button 
                   onClick={() => setcurrentIndex(2)}
                   className={
                    currentIndex === 2 ?"bg-[#F85E9F] ml-3  cursor-pointer w-3 h-3 rounded-full":"bg-gray-300 ml-3  cursor-pointer w-3 h-3 rounded-full"
                  }
                  ></button>
                  <button 
                   onClick={() => setcurrentIndex(3)}
                   className={
                    currentIndex === 3 ?"bg-[#F85E9F] ml-3  cursor-pointer w-3 h-3 rounded-full":"bg-gray-300 ml-3  cursor-pointer w-3 h-3 rounded-full"
                  }
                  ></button>
                </p>
              </div>)}
              </>
             
              <div className="hidden md:block md:w-[10%]">
                <button
                    onClick={()=>{
                        let index = currentIndex;
                        index = index+1;
                        if(index>3){
                            index=0;
                        }
                        
                        setcurrentIndex(index);
                    }}
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
    <div
    className="block md:hidden h-44"
    ></div>
    </>
  );
};

export default Testimonial;
