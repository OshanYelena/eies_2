import React, { useEffect, createRef } from "react";

import { useParams } from "react-router";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

import { LogoChange } from "./logo.js";

export const Innovex = () => {
  return (
    <>
      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        ></div>
        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  Round table discussion - INN0VATIX 1.0
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  “Innovatix 1.0” is a round table discussion, organized by
                  Electrical and Information Engineering Society (EIES), Faculty
                  of Engineering, University of Ruhuna. The aim of the event is
                  to provide the undergraduates an opportunity to gain knowledge
                  about the industry relevant to the fields of telecommunication
                  and networking, electronic, electrical and software.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i class="fas fa-calendar"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">Date: 2022</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i class="fas fa-info"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          𝐼𝑁𝑁𝑂𝑉𝐴𝑇𝐼𝑋 1.0 Round table discussion
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={require("assets/img/documentation.png").default}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const WorkshopTronic = () => {
  return (
    <>
      {" "}
      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        ></div>
        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  The workshop on Lab Equipment by tronic circle
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Description: A workshop on laboratory equipment was
                  successfully conducted on 24th May 2022 at DEEE. This was
                  conducted by final year students with the main aim of
                  enhancing the awareness of 2nd year undergraduates regarding
                  the laboratory equipment. Each participant received hands-on
                  experience on using lab equipment and knowledge on how to
                  operate them.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i class="fas fa-calendar"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Date: 24th May 2022
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i class="fas fa-info"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          The workshop on lab equipments
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={require("assets/img/workshop on equips.jpg").default}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const FireDetection = () => {
  return (
    <>
      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        ></div>
        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  
                Fire Detection and Protection By Power Circle And IEEE
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  A workshop on “Fire Detection and Protection Design” by
                  industry expertise, Mr. Kamal Deshapriya, Assistant General
                  Manager at LAUGFS Terminals Limited and Mr. Amidh Perera,
                  Electrical Engineer, In-charge at LPG Cylinder Filling Plant,
                  Hambantota and Assistant Manager at LAUGFS Terminals Limited,
                  was held on 27th of April, 2022. The event was organized by
                  IEEE Student Branch, University of Ruhuna in collaboration
                  with “Power Circle” of Electrical and Information Engineering
                  Society (EIES).
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i class="fas fa-calendar"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Date: 27th of April, 2022.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i class="fas fa-info"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          𝐅𝐢𝐫𝐞 𝐃𝐞𝐭𝐞𝐜𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝐏𝐫𝐨𝐭𝐞𝐜𝐭𝐢𝐨𝐧 workshop
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={
                  require("assets/img/280194376_2961706800785914_1933065949601884290_n.jpeg")
                    .default
                }
              />
            </div>
          </div>
        </div>
        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4"></div>
        </div>
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <h5 className="text-xl font-semibold pb-4 text-center">
                Photo Gallery
              </h5>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={
                        require("assets/img/279795870_2961706630785931_3168653105057954207_n.jpeg")
                          .default
                      }
                    />
                  </div>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={
                        require("assets/img/280209243_2961706597452601_2241063760441885999_n.jpeg")
                          .default
                      }
                    />
                  </div>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={
                        require("assets/img/280289755_2961706697452591_3895992021256125862_n.jpeg")
                          .default
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const Cisco = () => {
  return (
    <>
      {" "}
      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        ></div>
        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  𝙸𝚗𝚝𝚛𝚘𝚍𝚞𝚌𝚝𝚒𝚘𝚗 𝚝𝚘 𝙲𝚒𝚜𝚌𝚘 𝙲𝚎𝚛𝚝𝚒𝚏𝚒𝚌𝚊𝚝𝚒𝚘𝚗 by Tele circle
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  A session was conducted by EIES of University of Ruhuna to
                  acknowledge the students regarding the importance of Cisco
                  certification. The event was conducted by Mr. Wenura Mendis, a
                  network Engineer/lecturer.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i class="fas fa-calendar"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">Date:</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i class="fas fa-info"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          𝙸𝚗𝚝𝚛𝚘𝚍𝚞𝚌𝚝𝚒𝚘𝚗 𝚝𝚘 𝙲𝚒𝚜𝚌𝚘 𝙲𝚎𝚛𝚝𝚒𝚏𝚒𝚌𝚊𝚝𝚒𝚘𝚗 workshop
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={require("assets/img/documentation.png").default}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const HackDoze1 = () => {
  return (
    <>
      {" "}
      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        ></div>
        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  HackDoze by Telecommunication and Software circle
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  HackDoze 1.0, a Python Workshop series and subsequently a
                  Hackathon was a virtual event organized by Electrical and
                  Information Society (EIES), successfully completed on 19th
                  February 2022. This event was conducted for A/L students with
                  the main objective to boost their innovative thinking and
                  further establish the idea sharing, effective collaboration
                  and creativeness.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i class="fas fa-calendar"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Date: December 2021
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i class="fas fa-info"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          HackDoze 1.0 - python workshop series and Hackathon
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i class="fas fa-code"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-red-500">
                          <a
                            className=""
                            href="https://hackdoze-eies.github.io/hackathon/"
                          >
                            To the Site
                          </a>
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={require("assets/img/hackdoze.jpg").default}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const Diptrace = () => {
  return (
    <>
      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        ></div>
        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  DIPTRACE Workshop by tronic circle
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  A workshop on “Diptrace” ,conducted by Mr. Ruchira Perera,
                  application Engineer at Synopsys Sri Lanka was successfully
                  held on 26th February 2022. This workshop was organized by
                  Electronics Circle of EIES to provide the opportunity for the
                  undergraduates to broaden their knowledge in the Electronics
                  field.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i class="fas fa-calendar"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">Date:</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i class="fas fa-info"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          A workshop on "Diptrace"
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={require("assets/img/documentation.png").default}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const UnlockHigh = () => {
  return (
    <>
      {" "}
      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        ></div>
        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  Unlock Your Higher Studies Goals by EIES and WIE
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  “Unlock your higher studies” was a webinar organized by EIES
                  collaborating with WIE was successfully concluded on 16th
                  February 2022 via zoom. Mr. Gaveen Ranabahu and Ms. Hiruni
                  Silva; two experienced speakers conducted the event sharing
                  their great insights with students. The main aim of the
                  webinar was to motivate and encourage students to choose the
                  correct higher studies pathway that will help them achieve
                  their career goals.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i class="fas fa-calendar"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Date: February 2022
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i class="fas fa-info"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Unlock Your Higher Studies Goals by EIES and WIE
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={require("assets/img/documentation.png").default}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const GuideCareer = () => {
  return (
    <>
      {" "}
      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        ></div>
        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  𝙰 𝚐𝚞𝚒𝚍𝚎 𝚏𝚘𝚛 𝚌𝚊𝚛𝚎𝚎𝚛 𝚘𝚙𝚙𝚘𝚛𝚝𝚞𝚗𝚒𝚝𝚒𝚎𝚜 𝚒𝚗 𝚙𝚘𝚠𝚎𝚛 𝚒𝚗𝚍𝚞𝚜𝚝𝚛𝚢 by power
                  circle
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  “A guide for career opportunities in power industry” organized
                  by Power Circle of EIES was successfully conducted virtually
                  on 25th September. The webinar was conducted by Eng. Janaka
                  Munasignhe, senior engineer at Sierra Constructions (Pvt) Ltd.
                  the main aim of the webinar was to acknowledge undergraduates
                  about emerging trends in power industry and career
                  opportunities related to Electrical engineering. The
                  undergraduates were also given the opportunity to enhance
                  their vita by introducing industry recognized qualifications.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i class="fas fa-calendar"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">Date:</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i class="fas fa-info"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          𝙰 𝚐𝚞𝚒𝚍𝚎 𝚏𝚘𝚛 𝚌𝚊𝚛𝚎𝚎𝚛 𝚘𝚙𝚙𝚘𝚛𝚝𝚞𝚗𝚒𝚝𝚒𝚎𝚜 𝚒𝚗 𝚙𝚘𝚠𝚎𝚛 𝚒𝚗𝚍𝚞𝚜𝚝𝚛𝚢
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={require("assets/img/documentation.png").default}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const DotNet = () => {
  return (
    <>
      {" "}
      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        ></div>
        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  𝐇𝐚𝐧𝐝𝐬-𝐨𝐧 𝐛𝐚𝐜𝐤𝐞𝐧𝐝 𝐰𝐞𝐛 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭 𝐰𝐢𝐭𝐡 𝐀𝐒𝐏.𝐍𝐄𝐓 𝐂𝐨𝐫𝐞 𝐰𝐞𝐛 𝐀𝐏𝐈
                  workshop by software circle
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  ASP.NET Core is a framework that has become quite popular
                  among developers for effective and straightforward web
                  application development. “Hands-on backend web development
                  with ASP.NET Core web API” is a workshop organized by Software
                  Circle of EIES of University of Ruhuna. The students were
                  given insights about the field of software by giving a hands
                  -on experience in basic web development with .NET core.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i class="fas fa-calendar"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">Date:</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i class="fas fa-info"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Webinar on 𝐇𝐚𝐧𝐝𝐬-𝐨𝐧 𝐛𝐚𝐜𝐤𝐞𝐧𝐝 𝐰𝐞𝐛 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭 𝐰𝐢𝐭𝐡 .𝐍𝐄𝐓
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={
                  require("assets/img/240511701_1818014608384705_1143627451851708344_n.jpeg")
                    .default
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const ExbotiX = () => {
  return (
    <>
      {" "}
      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        ></div>
        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">XbotiX</h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  XbotiX 2019 is the robotic competition organized by Electrical
                  and Information Engineering Society (EIES) in collaboration
                  with IEEE Student Branch, IET Ruhuna Chapter and Mechanical
                  and Manufacturing Engineering Student Society (MMESS)
                  university of Ruhuna. It was held at the premises of Faculty
                  of Engineering, University of Ruhuna on 20th December 2019.
                  This was an event where young minds compete head to head to
                  accomplish a unique goal using self-designed robots.
                </p>
                <ul className="list-none mt-6">
                  {/* <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                                                <i class="fas fa-calendar"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                    
                    </h4>
                  </div>
                </div>
              </li> */}
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i class="fas fa-info"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">XbotiX</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i class="fas fa-info"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Conducted Years - 2017, 2018, 2019
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={
                  require("assets/img/2019/79675672_2304264153196852_2254890128554065920_n.jpg")
                    .default
                }
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <h5 className="text-2xl font-semibold pb-4 text-center">
                Photo Gallery
              </h5>
              <h5 className="text-xl font-semibold mt-10 pb-4 text-center">
                XbotiX - 2017
              </h5>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={
                        require("assets/img/2017/22384123_1815087722114500_4683437197328096812_o.jpg")
                          .default
                      }
                    />
                  </div>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={
                        require("assets/img/2017/22528770_1819242831698989_7102871479813875123_o.jpg")
                          .default
                      }
                    />
                  </div>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={
                        require("assets/img/2017/22548988_1819200961703176_749600597043189848_o.jpg")
                          .default
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-12/12 px-4  mt-15">
              <h5 className="text-xl font-semibold pb-4 text-center">
                XbotiX - 2018
              </h5>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={
                        require("assets/img/2018/46315262_2034949026795034_5719905357388578816_n.jpg")
                          .default
                      }
                    />
                  </div>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={
                        require("assets/img/2018/46362847_2034949563461647_8315667704283398144_n.jpg")
                          .default
                      }
                    />
                  </div>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={
                        require("assets/img/2018/46431726_2034954126794524_1523454852993122304_n.jpg")
                          .default
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-12/12 px-4  mt-15">
              <h5 className="text-xl font-semibold pb-4 text-center">
                XbotiX - 2019
              </h5>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={
                        require("assets/img/2019/79830391_2304217809868153_7634915048564981760_n.jpg")
                          .default
                      }
                    />
                  </div>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={
                        require("assets/img/2019/80046267_2304226839867250_3167114446053048320_n.jpg")
                          .default
                      }
                    />
                  </div>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={
                        require("assets/img/2019/81464029_2304248573198410_5540388514828386304_n.jpg")
                          .default
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const Awareness = () => {
  return (
    <>
      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        ></div>
        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  Awareness sessions 2022
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  The prime objective of having "Awareness Sessions" is building
                  up the communication and finding recruitment opportunities for
                  the undergraduates. The series of awareness sessions was
                  successfully concluded on 7th June 2022.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i class="fas fa-calendar"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">Date: 2022</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i class="fas fa-info"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Industry awareness sessions for career week Software
                          companies: Synopsys, MIT ESP, LSEG technologies,
                          Enactor, Creative Software
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={require("assets/img/documentation.png").default}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const Career = () => {
  return (
    <>
      {" "}
      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        ></div>
        <div className="container mx-auto px-4 pb-20 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">Career Fair 2022</h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  The Career fair is one of the major platforms where young
                  undergraduates and graduates of faculty of engineering in
                  university of Ruhuna can meet industry partners who will be
                  offering internship and job opportunities in one location.
                  Career week 2022 was organized by Electrical and Information
                  Engineering Society of Faculty of Engineering University of
                  Ruhuna collaborating with Career Guidance Unit. This was a
                  huge opportunity for the undergraduates to identify their
                  potential, enhance their skills and pre-qualify for the future
                  recruitment opportunities. Career fair mainly focused on four
                  sessions to optimize the skills on cv writing and interview
                  facing and aware about the industry. Deviating from the
                  traditional online interface, this time career fair gave final
                  year undergraduates to face mock interview in physical
                  platform. This offered an opportunity uplift the hands-on
                  experience. <br /> <br />
                   "Career Fair 2022" is a program aimed to offer the
                  industrial training opportunities to the students in final
                  year. Several industries took part in the career fair
                  including London Stock Exchange Group (LSEG), Synopsis,
                  Creative Software, MIT ESP, Sysco LABS, Codegen International
                  and Enactor.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i class="fas fa-calendar"></i>
                          {/* <i className="fas fa-fingerprint"></i> */}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">Date: 2022</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          {/* <i className="fab fa-html5"></i> */}
                          <i class="fas fa-info"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">Career Fair 2022</h4>
                      </div>
                    </div>
                  </li>

                  {/* <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Dynamic Javascript Components
                          </h4>
                        </div>
                      </div>
                    </li> */}
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={
                  require("assets/img/290416016_2997309360558991_6148363483366547015_n.jpg")
                    .default
                }
              />
            </div>
            <LogoChange />
          </div>
        </div>
        <div className="container mt-20 mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <h5 className="text-xl font-semibold pb-4 text-center">
                Photo Gallery
              </h5>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={
                        require("assets/img/290590488_2997310390558888_5861774523924550405_n.jpg")
                          .default
                      }
                    />
                  </div>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={
                        require("assets/img/289691980_2997309687225625_6340273345131253649_n.jpg")
                          .default
                      }
                    />
                  </div>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={
                        require("assets/img/290597664_2997310117225582_7161198404293812574_n.jpg")
                          .default
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default function Events() {
  const ref = React.createRef();
  const { name } = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <IndexNavbar transparent />

      {name == "Innovex" && <Innovex />}
      {name == "WorkshopTronic" && <WorkshopTronic />}
      {name == "FireDetection" && <FireDetection />}
      {name == "Cisco" && <Cisco />}
      {name == "HackDoze1" && <HackDoze1 />}
      {name == "Diptrace" && <Diptrace />}
      {name == "UnlockHigh" && <UnlockHigh />}
      {name == "GuideCareer" && <GuideCareer />}
      {name == "DotNet" && <DotNet />}
      {name == "ExbotiX" && <ExbotiX />}
      {name == "Awareness" && <Awareness />}
      {name == "Career" && <Career />}

      <Footer />
    </>
  );
}
