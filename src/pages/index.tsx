"use client";
import { useRef, useState, useEffect } from "react";
import "../styles/main-styles.scss";
import "../styles/App.scss";
import "./Home.scss";
import rocket from "../img/rocket.svg";
import dynamic from "next/dynamic";
import Header from "@/components/Header/Header";
import Skills from "@/components/Skills/Skills";
import Blog from "@/components/Blog/Blog";
import ContactMe from "@/components/ContactMe/ContactMe";
import PrevWorks from "@/components/PrevWorks/PrevWorks";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const mainContainer = useRef<any>(null);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  let doc: any;
  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  useEffect(() => {
    if (doc) {
      return;
    }
    doc = document;
    if (doc) {
      doc.getElementsByTagName("html")[0].style.overflow = "hidden";
    }
  }, [document]);

  const onTouchStart = (e: any) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e: any) => setTouchEnd(e.targetTouches[0].clientY);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isDownSwipe = distance > minSwipeDistance;
    const isUpSwipe = distance < -minSwipeDistance;
    if (isUpSwipe) {
      triggerFrameChange("up");
    } else if (isDownSwipe) {
      triggerFrameChange("down");
    }
  };

  const layer1: any = [useRef(""), useRef(""), useRef("")];
  const layer2: any = [useRef("")];
  const layer3: any = [useRef("")];
  const layer4: any = [useRef(""), useRef(""), useRef("")];
  const layer5: any = [useRef("")];

  let [screenNumber, setScreenNumber] = useState(1);
  let [isScrolling, setIsScrolling] = useState(false);

  // console.log(screenNumber);

  const triggerFrameChange = (mode: string) => {
    if (mode === "up") {
      if (screenNumber > 1) {
        goToPrevPage();
      }
    } else if (mode === "down") {
      if (screenNumber < 5) {
        goToNextPage();
      }
    }
  };

  const goToNextPage = async () => {
    if (!mainContainer.current.querySelector) {
      return;
    }
    mainContainer.current
      .querySelector("#screen-" + screenNumber)
      ?.classList.remove("enter-from-bottom");
    mainContainer.current
      ?.querySelector("#screen-" + screenNumber)
      ?.classList.remove("enter-from-top");

    mainContainer.current
      ?.querySelector("#screen-" + screenNumber)
      ?.classList.add("leave-from-top");

    mainContainer.current
      ?.querySelector("#content-" + screenNumber)
      ?.classList.remove("enter-from-bottom");
    mainContainer.current
      ?.querySelector("#content-" + screenNumber)
      ?.classList.remove("enter-from-top");

    mainContainer.current
      ?.querySelector("#content-" + screenNumber)
      ?.classList.add("leave-from-top");

    await new Promise((r) => setTimeout(r, 200));

    mainContainer.current
      ?.querySelector("#screen-" + screenNumber)
      ?.classList.add("hide");

    mainContainer.current
      ?.querySelector("#screen-" + (screenNumber + 1))
      ?.classList.remove("leave-from-top");
    mainContainer.current
      ?.querySelector("#screen-" + (screenNumber + 1))
      ?.classList.remove("leave-from-bottom");

    mainContainer.current
      ?.querySelector("#screen-" + (screenNumber + 1))
      ?.classList.remove("hide");

    mainContainer.current
      ?.querySelector("#screen-" + (screenNumber + 1))
      ?.classList.add("enter-from-bottom");

    mainContainer.current
      ?.querySelector("#content-" + screenNumber)
      ?.classList.add("hide");

    mainContainer.current
      ?.querySelector("#content-" + (screenNumber + 1))
      ?.classList.remove("leave-from-top");
    mainContainer.current
      ?.querySelector("#content-" + (screenNumber + 1))
      ?.classList.remove("leave-from-bottom");

    mainContainer.current
      ?.querySelector("#content-" + (screenNumber + 1))
      ?.classList.remove("hide");

    mainContainer.current
      ?.querySelector("#content-" + (screenNumber + 1))
      ?.classList.add("enter-from-bottom");

    setScreenNumber(screenNumber + 1);
  };

  const goToPrevPage = async () => {
    if (!mainContainer.current) {
      return;
    }
    mainContainer.current
      ?.querySelector("#screen-" + screenNumber)
      ?.classList.remove("enter-from-bottom");
    mainContainer.current
      ?.querySelector("#screen-" + screenNumber)
      ?.classList.remove("enter-from-top");

    mainContainer.current
      ?.querySelector("#screen-" + screenNumber)
      ?.classList.add("leave-from-bottom");

    mainContainer.current
      ?.querySelector("#content-" + screenNumber)
      ?.classList.remove("enter-from-bottom");
    mainContainer.current
      ?.querySelector("#content-" + screenNumber)
      ?.classList.remove("enter-from-top");

    mainContainer.current
      ?.querySelector("#content-" + screenNumber)
      ?.classList.add("leave-from-bottom");

    await new Promise((r) => setTimeout(r, 200));

    mainContainer.current
      ?.querySelector("#screen-" + screenNumber)
      ?.classList.add("hide");

    mainContainer.current
      ?.querySelector("#screen-" + (screenNumber - 1))
      ?.classList.remove("leave-from-top");
    mainContainer.current
      ?.querySelector("#screen-" + (screenNumber - 1))
      ?.classList.remove("leave-from-bottom");

    mainContainer.current
      ?.querySelector("#screen-" + (screenNumber - 1))
      ?.classList.remove("hide");

    mainContainer.current
      ?.querySelector("#screen-" + (screenNumber - 1))
      ?.classList.add("enter-from-top");

    mainContainer.current
      ?.querySelector("#content-" + screenNumber)
      ?.classList.add("hide");

    mainContainer.current
      ?.querySelector("#content-" + (screenNumber - 1))
      ?.classList.remove("leave-from-top");
    mainContainer.current
      ?.querySelector("#content-" + (screenNumber - 1))
      ?.classList.remove("leave-from-bottom");

    mainContainer.current
      ?.querySelector("#content-" + (screenNumber - 1))
      ?.classList.remove("hide");

    mainContainer.current
      ?.querySelector("#content-" + (screenNumber - 1))
      ?.classList.add("enter-from-top");

    setScreenNumber(screenNumber - 1);
  };

  const handleScroll = (event: any) => {
    event.stopPropagation();
    if (isScrolling) {
      return;
    }
    if (event.deltaY > 0) {
      triggerFrameChange("down");
    }
    if (event.deltaY < 0) {
      triggerFrameChange("up");
    }
    setIsScrolling(true);
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  const handleMove = (event: any) => {
    handleLayer1(event);
    handleLayer2(event);
    handleLayer3(event);
    handleLayer4(event);
    handleLayer5(event);
  };

  const goToBlogs = (): any => {
    router.push("/blogs");
  };

  const goToProjects = (): any => {
    router.push("/projects");
  };

  const handleLayer1 = (event: any) => {
    const x0 = -15 + event.clientX / 400;
    const x1 = 24 + event.clientX / 400;
    const x2 = -6 + event.clientX / 300;

    const y0 = 38 - event.clientY / 400;
    const y1 = 45 - event.clientY / 400;
    const y2 = 54 - event.clientY / 300;

    if (!layer1[0].current) {
      return;
    }

    layer1[0].current.style.right = x0 + "rem";
    layer1[1].current.style.right = x1 + "rem";
    layer1[2].current.style.right = x2 + "rem";

    layer1[0].current.style.top = y0 + "rem";
    layer1[1].current.style.top = y1 + "rem";
    layer1[2].current.style.top = y2 + "rem";
  };

  const handleLayer2 = (event: any) => {
    const x0 = 3 - event.clientX / 1050;

    const y0 = 32 - event.clientY / 1050;

    if (!layer2[0].current) {
      return;
    }

    layer2[0].current.style.left = x0 + "rem";

    layer2[0].current.style.top = y0 + "rem";
  };

  const handleLayer3 = (event: any) => {
    const x0 = 0 + event.clientX / 800;

    const y0 = 0 - event.clientY / 800;

    layer3[0].current.style.right = x0 + "rem";
    layer3[0].current.style.top = y0 + "rem";
  };

  const handleLayer4 = (event: any) => {
    const x0 = 20 + event.clientX / 2200;
    const x1 = 24 + event.clientX / 2200;
    const x2 = 2 + event.clientX / 2200;

    const y0 = -6 - event.clientY / 2200;
    const y1 = 2 - event.clientY / 2200;
    const y2 = -5 - event.clientY / 2200;

    layer4[0].current.style.right = x0 + "rem";
    layer4[1].current.style.right = x1 + "rem";
    layer4[2].current.style.right = x2 + "rem";

    layer4[0].current.style.top = y0 + "rem";
    layer4[1].current.style.top = y1 + "rem";
    layer4[2].current.style.top = y2 + "rem";
  };

  const handleLayer5 = (event: any) => {
    const x0 = 0 + event.clientX / 1000;

    const y0 = 0 - event.clientY / 1000;

    layer5[0].current.style.right = x0 + "rem";

    layer5[0].current.style.top = y0 + "rem";
  };

  return (
    <>
      <div
        ref={mainContainer}
        className="main-container"
        onMouseMove={handleMove}
        onWheelCapture={handleScroll}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <Header />
        <div className="landing-page-container">
          <div className="row">
            <div className="col-1-of-4">
              <div className="header__text-box">
                <h1 id="screen-1" className={`heading-primary main-title`}>
                  <span className="heading-primary--main">
                    DhiNesh <br />
                    SanaLa
                  </span>
                  <div className="red-line-seperation">
                    <span className="red-line"></span>
                    <span className="red-line2"></span>
                  </div>
                  <span className="heading-primary--sub">
                    Web Developer & <br /> FullStack Engineer.
                  </span>
                </h1>

                <h1
                  id="screen-3"
                  className={`leave hide heading-primary main-title`}
                >
                  <span className="heading-primary--main font-size-4 letter-space-1">
                    <span style={{ whiteSpace: "nowrap" }}>Skills &</span>
                    <br />
                    Expertise
                  </span>
                  <div className="red-line-seperation">
                    <span className="red-line"></span>
                    <span className="red-line2"></span>
                  </div>
                  <span className="heading-primary--sub">
                    Technologies & <br /> Programming
                    <br />
                    Languages.
                  </span>
                </h1>

                <h1
                  id="screen-2"
                  className={`leave hide heading-primary main-title`}
                >
                  <div className="previousworks-headingcontainer">
                    <span className="heading-primary--main font-size-4 letter-space-1 line-height">
                      Previous <br />
                      Works
                    </span>
                    <div className="red-line-seperation">
                      <span className="red-line"></span>
                      <span className="red-line2"></span>
                    </div>
                    <span className="heading-primary--sub">
                      Projects & <br /> Web Applications.
                    </span>
                  </div>
                  <div className="wrap">
                    {/* <button className="btn" onClick={goToProjects}> */}
                    <button onClick={goToProjects} className="btn">
                      All Projects
                    </button>
                  </div>
                </h1>

                <h1
                  id="screen-4"
                  className={`leave hide heading-primary main-title`}
                >
                  <div className="previousworks-headingcontainer">
                    <span className="heading-primary--main font-size-4 letter-space-1">
                      Blogs
                    </span>
                    <div className="red-line-seperation">
                      <span className="red-line"></span>
                      <span className="red-line2"></span>
                    </div>
                    <span className="heading-primary--sub">
                      Articles & <br /> Learning
                      <br />
                      Resourses.
                    </span>
                  </div>

                  <div className="wrap">
                    {/* <button className="btn" onClick={goToBlogs}> */}
                    <button className="btn">All Articles</button>
                  </div>
                </h1>

                <h1
                  id="screen-5"
                  className={`leave hide heading-primary main-title`}
                >
                  <span className="heading-primary--main font-size-4 letter-space-1">
                    <span style={{ whiteSpace: "nowrap" }}>Get in</span>
                    <br />
                    touch
                  </span>
                  <div className="red-line-seperation">
                    <span className="red-line"></span>
                    <span className="red-line2"></span>
                  </div>
                  <span className="heading-primary--sub">
                    Email - <br />
                  </span>
                  <span className="email">dhineshsanala@gmail.com</span>
                </h1>

                {/* <div className="plannets-outline"></div> */}
              </div>
            </div>
            <div className="col-3-of-4">
              <div className="moon">
                <div className="circle-1" ref={layer3[0]}>
                  <div className="circle-2 circle-it">
                    <div className="circle-3 circle-it">
                      <div className="circle-4 circle-it">
                        <div className="circle-5 circle-it">
                          <div className="circle-6 circle-it">
                            <div className="moon-white">
                              <div className="crate-1"></div>
                              <div className="crate-2"></div>
                              <div className="crate-3"></div>
                            </div>
                            {/* {screenNumber !== 1 && (
                              <div className="astro-moon">
                                <img src={astroMoon} />
                              </div>
                            )} */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-container">
                  <div className="circle-it">
                    <div className="back-clouds">
                      <div className="cloud-4" ref={layer4[0]}></div>
                      <div className="cloud-5" ref={layer4[1]}></div>
                      <div className="cloud-6" ref={layer4[2]}></div>
                    </div>
                    <div className="front-clouds">
                      <div className="cloud-1" ref={layer1[0]}></div>
                      <div className="cloud-2" ref={layer1[1]}></div>
                      <div className="cloud-3" ref={layer1[2]}></div>
                    </div>

                    <h1
                      id="content-1"
                      className="heading-primary--red"
                      ref={layer2[0]}
                    >
                      PORTFOLIO
                    </h1>
                  </div>
                </div>
                <div className="hide content-container right-0" id="content-2">
                  <PrevWorks />
                </div>
                <div className="hide content-container right-0" id="content-3">
                  <Skills />
                </div>
                <div className="hide content-container right-0" id="content-4">
                  <Blog />
                </div>
                <div className="hide content-container right-0" id="content-5">
                  <ContactMe />
                </div>
                <div className="dots-container" ref={layer5[0]}>
                  <div className="dots dot-1"></div>
                  <div className="dots dot-2"></div>
                  <div className="dots dot-3"></div>
                  <div className="dots dot-4"></div>
                  <div className="dots dot-5"></div>
                  <div className="dots dot-6"></div>
                  <div className="dots dot-7"></div>
                  <div className="dots dot-8"></div>
                  <div className="dots dot-9"></div>
                  <div className="dots dot-10"></div>
                  <div className="dots dot-11"></div>
                  <div className="dots dot-12"></div>
                  <div className="dots dot-13"></div>
                  <div className="dots dot-14"></div>
                  <div className="dots dot-15"></div>
                  <div className="dots dot-16"></div>
                  <div className="dots dot-17"></div>
                  <div className="dots dot-18"></div>
                  <div className="dots dot-19"></div>
                  <div className="dots dot-20"></div>
                  <div className="dots dot-21"></div>
                  <div className="dots dot-22"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img className="rocket" src={rocket} />
      </div>
    </>
  );
};

// export it with SSR disabled
const HomeComponent = dynamic(() => Promise.resolve(Home), {
  ssr: false,
});

export default HomeComponent;
