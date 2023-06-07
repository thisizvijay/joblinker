"use client";
import React, { useState } from "react";

const Header: any = (props: any) => {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <>
      <header>
        <nav
          className="
    flex flex-wrap
    items-center
    justify-between
    w-full
    py-4
    md:py-0
    px-4
    text-lg text-gray-700
    md:mt-10
  "
        >
          <div>
            <a href="#">
              <img src="/images/logo.svg" />
            </a>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => setshowMenu(!showMenu)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <div
            className={
              showMenu
                ? "w-full md:flex md:items-center md:w-auto "
                : "w-full md:flex md:items-center md:w-auto hidden"
            }
            id="menu"
          >
            <ul
              className="
        pt-4
        text-base text-gray-700
        md:flex
        md:justify-between 
        md:pt-0
        bg-white
        md:bg-transparent
        md:rounded-none
        rounded-lg
        p-6
        md:p-0
        mt-4
        md:mt-0
        "
            >
              <li>
                <a
                  className="md:p-4 py-2 block hover:text-purple-400"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    props.setshowLogin(true, "01H29SHDWPWYZHR5GHDQGJ237P");
                  }}
                >
                  For Job Seeker
                </a>
              </li>
              <li>
                <a
                  className="md:p-4 py-2 block hover:text-purple-400"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    props.setshowLogin(true,"abd23d0a-ec19-4205-b591-1bc7e2d3caeb");
                  }}
                >
                  For Job Referrer
                </a>
              </li>
              <li>
                <a
                  className="md:p-4 py-2 block hover:text-purple-400"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    props.setshowLogin(true,"01H29SHDWP66FMVZ8C3RV689GQ");
                  }}
                >
                  For Companies
                </a>
              </li>
              <li>
                <a
                  className=" py-2 block 
                 bg-gradient-to-r from-[#5350FF]   to-[#DF0F99] text-white px-10 rounded-full my-2 shadow-md hover:shadow-lg text-center
                "
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    props.setshowLogin(true);
                  }}
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
