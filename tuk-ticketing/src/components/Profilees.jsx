import React, { useState } from "react";
import logo from "../images/logo.jpg";
import spider from "../images/images.jpg";

const Profilees = () => {
  const [fname, setFname] = useState("Miles");
  const [lname, setLname] = useState("Morales");
  const [email, setEmail] = useState("spiderman@yahoo.com");
  const [contact, setcontact] = useState(911);
  const [school, setSchool] = useState("S.H.I.E.L.D");
  const [course, setCourse] = useState("Web Dev");

  return (
    <section className="bg-white fixed top-0 left-0 lg:min-h-screen sm:min-h-max min-w-full flex font-Inconsolata sm:scroll-smooth">
      <div className="lg:min-h-screen w-20 bg-[#008080] sticky sm:min-h-screen">
        <ul class="relative justify-evenly bg-white rounded-3xl min-h-screen border border-[#008080]">
          <li class="relative  ">
            <img className="h-25 w-24 bg-inherit right-0" src={logo} />
          </li>
          <li class="relative py-5">
            <a
              class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </a>
          </li>
          <li class="relative py-5">
            <a
              class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </a>
          </li>
          <li class="relative py-5">
            <a
              class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                />
              </svg>
            </a>
          </li>
          <li class="relative py-5">
            <a
              class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
            </a>
          </li>
          <li class="absolute bottom-2 py-5 ">
            <a
              class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="lg:grid grid-cols-2 sm:grid grid-col-1 w-full ">
        <div className="grid grid-cols-1 justify-center p-10">
          <img
            className="ml-32 w-64 h-64 rounded-full border border-stone-800"
            src={spider}
          />

          <div className="text-black text-center justify-center">
            <h2 className="p-6 font-bold text-lg">
              {fname} {lname}
            </h2>
            <button className=" bg-[#008080] hover:bg-white hover:text-[#008080] align-baseline dropdown-toggle ">
              <h3 className="flex">
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
                Edit Profile
              </h3>
            </button>
          </div>
        </div>
        <div className="text-black text-center grid grid-cols-1 col-span-1 justify-around">
          <h1>My Details</h1>
          <hr></hr>

          <div className=" flex justify-evenly text-center text-lg">
            <div className="text-center text-xl">
              <h3 className="p-5">First Name</h3>
              <div className="bg-[#008080] rounded-xl w-56">
                <span className="py-6">{fname}</span>
              </div>
            </div>
            <div className="text-center text-xl">
              <h3 className="p-5">last Name</h3>
              <div className="bg-[#008080] rounded-xl w-56">
                <span className=" py-6">
                  {lname}
                </span>
              </div>
            </div>
          </div>
          <div className="p-6 flex justify-evenly text-center text-lg">
            <div className="text-center text-xl">
              <h3 className="p-5">Contact</h3>
              <div className="bg-[#008080] rounded-xl w-56">
                <span className="py-6">
                  {contact}
                </span>
              </div>
            </div>
            <div className="text-center text-xl">
              <h3 className="p-5">Email</h3>
              <div className="bg-[#008080] rounded-xl w-56">
                <span className="py-6">
                  {email}
                </span>
              </div>
            </div>
          </div>
          <div className="text-center text-black p-10">
            <h1>Course Details</h1>
            <hr></hr>
            <div className="flex flex-row justify-evenly p-10">
              <div className="justify-evenly text-lg">
                <h3 className="p-5"> School</h3>
                <div className="bg-[#008080] rounded-xl w-56">
                  <span className="py-6">
                    {school}
                  </span>
                </div>
              </div>
              <div className=" justify-evenly text-center text-lg">
                <h3 className="p-5">Course Of Study</h3>
                <div className="bg-[#008080] rounded-xl w-56">
                  <span className="py-6">
                    {course}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-flow-row bg-[#008080] w-full col-span-3 text-white text-center align-bottom ">
          <span>@tukenya</span>
        </div>
      </div>
    </section>
  );
};

export default Profilees;
