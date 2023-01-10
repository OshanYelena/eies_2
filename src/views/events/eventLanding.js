import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

import "../../assets/styles/dropDown.css";
export default function Landing() {
  return (
    <>
      <IndexNavbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Our Events
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200"></p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-yellow-500 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={
                          require("assets/img/software_1000x700.webp").default
                        }
                      />
                    </div>
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i class="fas fa-bookmark"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Events On 2018, 2019 & 2020
                    </h6>
                    <div className="contain">
                      <div className=" menu">
                        <button className="toggle">Events</button>
                        <ul className="list">
                          <Link to="/event/Innovex">
                            <li className="list-item">INNIVATIX 1.0</li>
                          </Link>
                          <Link to="/event/WorkshopTronic">
                            <li className="list-item">
                              The workshop on Lab Equipment by tronic circle
                            </li>
                          </Link>
                          <Link to="/event/FireDetection">
                            <li className="list-item">
                              {" "}
                              𝐅𝐢𝐫𝐞 𝐃𝐞𝐭𝐞𝐜𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝐏𝐫𝐨𝐭𝐞𝐜𝐭𝐢𝐨𝐧
                            </li>
                          </Link>
                          <Link to="/event/Cisco">
                            <li className="list-item">
                              {" "}
                              𝙸𝚗𝚝𝚛𝚘𝚍𝚞𝚌𝚝𝚒𝚘𝚗 𝚝𝚘 𝙲𝚒𝚜𝚌𝚘 𝙲𝚎𝚛𝚝𝚒𝚏𝚒𝚌𝚊𝚝𝚒𝚘𝚗
                            </li>
                          </Link>
                          <Link to="/event/HackDoze1">
                            <li className="list-item">HackDoze</li>
                          </Link>
                          <Link to="/event/Diptrace">
                            <li className="list-item">DIPTRACE Workshop</li>
                          </Link>
                          <Link to="/event/UnlockHigh">
                            <li className="list-item">
                              Unlock Your Higher Studies Goals
                            </li>
                          </Link>
                          <Link to="/event/GuideCareer">
                            <li className="list-item">
                              {" "}
                              𝙰 𝚐𝚞𝚒𝚍𝚎 𝚏𝚘𝚛 𝚌𝚊𝚛𝚎𝚎𝚛 𝚘𝚙𝚙𝚘𝚛𝚝𝚞𝚗𝚒𝚝𝚒𝚎𝚜
                            </li>
                          </Link>
                          <Link to="/event/Innovex">
                            <li className="list-item">Front-end</li>
                          </Link>
                          <Link to="/event/Innovex">
                            <li className="list-item">Front-end</li>
                          </Link>
                          <Link to="/event/Innovex">
                            <li className="list-item">Front-end</li>
                          </Link>
                          <Link to="/event/Innovex">
                            <li className="list-item">Front-end</li>
                          </Link>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={
                          require("assets/img/csm_istock-468281218_energie_solar_links_20225143b7.jpeg")
                            .default
                        }
                      />
                    </div>
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i class="fas fa-bookmark"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Event On 2021</h6>
                    <div className="contain">
                      <div className=" menu">
                        <button className="toggle">Events</button>
                        <ul className="list">
                          <li className="list-item">Front-end</li>
                          <li className="list-item">Back-end</li>
                          <li className="list-item">Full-Stack</li>
                          <li className="list-item">@Website_Mentor</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={
                          require("assets/img/1649238424_resized-pic30.jpeg")
                            .default
                        }
                      />
                    </div>
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i class="fas fa-bookmark"></i>
                      {/* <i class="fa-regular fa-bookmark"></i> */}
                    </div>
                    <h6 className="text-xl font-semibold">Event On 2022</h6>
                    <div className="contain">
                      <div className=" menu">
                        <button className="toggle">Events</button>
                        <ul className="list">
                          <li className="list-item">Front-end</li>
                          <li className="list-item">Back-end</li>
                          <li className="list-item">Full-Stack</li>
                          <li className="list-item">@Website_Mentor</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 justify-center md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"></div>
              </div>

              {/* <div className="pt-6 justify-center md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <Link to="/tele">
                      <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                        <img
                          alt="..."
                          className="align-middle border-none max-w-full h-auto rounded-lg"
                          src={
                            require("assets/img/shutterstock_226031854.jpeg")
                              .default
                          }
                        />
                      </div>
                    </Link>
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-headset"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                     Event On 2021
                    </h6>
                  </div>
                </div>
              </div>

              <div className="pt-6 justify-center md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <Link to="/tele">
                      <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                        <img
                          alt="..."
                          className="align-middle border-none max-w-full h-auto rounded-lg"
                          src={
                            require("assets/img/shutterstock_226031854.jpeg")
                              .default
                          }
                        />
                      </div>
                    </Link>
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-headset"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                     Event On 2022
                    </h6>
                  </div>
                </div>
              </div> */}

              <div className="pt-6 justify-center md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
