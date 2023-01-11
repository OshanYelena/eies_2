import React, { Component } from "react";

import { useParams } from "react-router";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";



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
                  Round table discussion - INNIVATIX 1.0 (4)
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
                  𝐅𝐢𝐫𝐞 𝐃𝐞𝐭𝐞𝐜𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝐏𝐫𝐨𝐭𝐞𝐜𝐭𝐢𝐨𝐧 by power circle and IEEE
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
                Photo Galery
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
                  HackDoze by tele and software circle
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
                        <h4 className="text-blueGray-500">Date: December 2021</h4>
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
                        <h4 className="text-blueGray-500">Date: February 2022</h4>
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

 export const Exbotics = () => {
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
                <h3 className="text-3xl font-semibold">Xbotics 2019, 2017</h3>
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
                        <h4 className="text-blueGray-500">Xbotics</h4>
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
                  require("assets/img/22528702_1819239778365961_2612831821938172801_o.jpeg")
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
          <div className="container mx-auto px-4 pb-32 pt-48">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                <div className="md:pr-12">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                    <i className="fas fa-file-alt text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">Career fair 2022</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    "Career Fair 2022" is a program aimed to offer the industrial
                    exposure to the students in 2nd year, 3rd year and final year.
                    This event was successfully concluded on 7th June 2022.
                    Several industries took part in the career fair including
                    Lseg, Synopsis, creative software, Mit esp and enactor.
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
                          <h4 className="text-blueGray-500">
                          Career Fair 2022
                          </h4>
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
                  src={require("assets/img/documentation.png").default}
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
};



export default function Events() {

  const { name} = useParams();


 return(
 <>
       <IndexNavbar transparent />

      {name == "Innovex" && <Innovex/>}
      {name == "WorkshopTronic" && <WorkshopTronic/>}
      {name == "FireDetection" && <FireDetection/>}
      {name == "Cisco" && <Cisco/>}
      {name == "HackDoze1" && <HackDoze1/>}
      {name == "Diptrace" && <Diptrace/>}
      {name == "UnlockHigh" && <UnlockHigh/>}
      {name == "GuideCareer" && <GuideCareer/>}
      {name == "DotNet" && <DotNet/>}
      {name == "Exbotics" && <Exbotics/>}
      {name == "Awareness" && <Awareness/>}
      {name == "Career" && <Career/>}


       <Footer />
 </>)


}