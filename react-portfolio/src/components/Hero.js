import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

import Typist from "react-typist";

import gif2 from "../images/gif-2.gif";

export default function Hero() {
  const [count, setCount] = useState(1);

  // For typist
  useEffect(() => {
    setCount(1);
  }, [count]);
  return (
    <>
      <div className="content-full">
        <div className="container">
          <div className="gif">
            <img src={gif2}></img>

            <div className="hero-info">
              {count ? (
                <Typist
                  onTypingDone={() => setCount(0)}
                  stdTypingDelay={75}
                  cursor={{
                    show: false,
                    blink: true,
                    element: "|",
                    hideWhenDone: true,
                    hideWhenDoneDelay: 10,
                  }}
                >
                  <h1>Hi, I'm Daniel</h1>
                  <Typist.Backspace count={15} delay={500} />
                  <Typist.Delay ms={500} delay={500} />
                  <h1>FrontEnd Developer</h1>
                  <Typist.Backspace count={18} delay={500} />
                  <Typist.Delay ms={500} delay={500} />
                </Typist>
              ) : (
                " "
              )}
            </div>
          </div>

          <div className="hero-background">
            <div className="background-text">
              <p>
                Software/FrontEnd devoloper graduate from Nackademin,
                experienced in front-end web development and Java programming in
                a test-driven environment. I am a dedicated, eager, learner who
                thrives in collaborative work environments and am enthusiastic
                when it comes to facing new challenges that require problem
                solving skills.
              </p>
            </div>

            <div className="hire-container">
              <p>
                If you are an employer looking to hire, startup seeking to
                develop a website or a business looking to upgrade your website.
                You can get in touch with me here.
              </p>
              <div className="btn-container">
                <a href="/react-portfolio/contact">
                  I need a website{" "}
                  <IoIosArrowForward style={{ marginLeft: "20px" }} />
                </a>
                <a href="/react-portfolio/contact">
                  I'm looking to hire{" "}
                  <IoIosArrowForward style={{ marginLeft: "20px" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
