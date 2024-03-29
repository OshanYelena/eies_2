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
                "url('https://scontent.fcmb1-2.fna.fbcdn.net/v/t1.6435-9/42506566_1008768885975952_7865025124108337152_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=wPMvhEXXQK8AX_OvLbH&_nc_ht=scontent.fcmb1-2.fna&oh=00_AfAN9M3pnK16d4zd4bc6KyUgnEDa5p-9Q1Wvde-U3cjFDQ&oe=63E6EA84')",
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
                    <Link to="/event/ExbotiX">
                      <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                        <img
                          alt="..."
                          className="align-middle border-none max-w-full h-auto rounded-lg"
                          src={require("assets/img/xbotix.jpg").default}
                        />
                      </div>
                    </Link>

                    <h6 className=" contain text-xl font-semibold">
                      <Link to="/event/ExbotiX">
                        <div className="list-item">XbotiX</div>
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                  <Link to="/event/HackDoze1">
                    
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle img-size-3 border-none max-w-full h-auto rounded-lg"
                        src={
                          require("assets/img/HachDoze-1.0-1280x640.jpg")
                            .default
                        }
                      />
                    </div>
                    </Link>

                    <h6 className=" contain text-xl font-semibold">
                      <Link to="/event/HackDoze1">
                        <li className="list-item">HackDoze</li>
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                  <Link to="/event/Career">
                   
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={
                          require("assets/img/284208171_2017888398397324_47513556800236840_n.jpeg")
                            .default
                        }
                      />
                    </div>
                    </Link>

                    <h6 className=" contain text-xl font-semibold">
                      <Link to="/event/Career">
                        <li className="list-item">Career fair 2022</li>
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                  <Link to="/event/FireDetection">
                   
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/fire.jpg").default}
                      />
                    </div>
                    </Link>
                    <h6 className=" contain text-xl font-semibold">
                      <Link to="/event/FireDetection">
                        <li className="list-item">
                          {" "}
                          Fire Detection and Protection
                        </li>
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                  <Link to="/event/Innovex">
                    
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={
                          require("assets/img/293511733_2050933631759467_6941341020540910265_n.jpeg")
                            .default
                        }
                      />
                    </div>
                    </Link>

                    <h6 className=" contain text-xl font-semibold">
                      <Link to="/event/Innovex">
                        <li className="list-item">INN0VATIX</li>
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                  <Link to="/event/WorkshopTronic">
                   
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={
                          require("assets/img/workshop on equips.jpg").default
                        }
                      />
                    </div>
                    </Link>

                    <h6 className=" contain text-xl font-semibold">
                      <Link to="/event/WorkshopTronic">
                        <li className="list-item">
                          The Workshop by Electronic Circle
                        </li>
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                  <Link to="/event/Cisco">
                    
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={
                          require("assets/img/278084806_1979093532276811_606329407904681013_n.jpeg")
                            .default
                        }
                      />
                    </div>
                    </Link>

                    <h6 className=" contain text-xl font-semibold">
                      <Link to="/event/Cisco">
                        <li className="list-item">
                          {" "}
                          Introduction to Cisco Certification
                        </li>
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    
                  <Link to="/event/Diptrace">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={
                          require("assets/img/274449782_1942842952568536_3371352016318589329_n.jpeg")
                            .default
                        }
                      />
                    </div>
                    </Link>

                    <h6 className=" contain text-xl font-semibold">
                      <Link to="/event/Diptrace">
                        <li className="list-item">DIPTRACE Workshop</li>
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                  <Link to="/event/DotNet">
                  
                   <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/asp.net.jpg").default}
                      />
                    </div>
                    </Link>

                    <h6 className=" contain text-xl font-semibold">
                      <Link to="/event/DotNet">
                        <li className="list-item">
                          Hands-on Backend Web Development
                        </li>
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>

              {/* <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                  <Link to="/event/Awareness">
                   
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/xbotix.jpg").default}
                      />
                    </div>
                    </Link>

                    <h6 className=" contain text-xl font-semibold">
                      <Link to="/event/Awareness">
                        <li className="list-item">Awareness Sessions 2022</li>
                      </Link>
                    </h6>
                  </div>
                </div>
              </div> */}
              {/* <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                  <Link to="/event/GuideCareer">
                   
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/xbotix.jpg").default}
                      />
                    </div>
                    </Link>

                    <h6 className=" contain text-xl font-semibold">
                      <Link to="/event/GuideCareer">
                        <li className="list-item">
                          {" "}
                          A Guide For Career Opportunities
                        </li>
                      </Link>
                    </h6>
                  </div>
                </div>
              </div> */}
              {/* <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                  <Link to="/event/UnlockHigh">
                    
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/xbotix.jpg").default}
                      />
                    </div>
                    </Link>

                    <h6 className=" contain text-xl font-semibold">
                      <Link to="/event/UnlockHigh">
                        <li className="list-item">
                          Unlock Your Higher Studies Goals
                        </li>
                      </Link>
                    </h6>
                  </div>
                </div>
              </div> */}

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
