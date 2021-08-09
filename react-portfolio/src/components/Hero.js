import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

import Typist from "react-typist";

import gif2 from "../images/gif-2.gif";

export default function Hero() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log("Count: " + count);
    setCount(1);
  }, [count]);
  return (
    <>
      <div className="content-full">
        <div className="container">
          <div>
            <div className="gif">
              <img src={gif2}></img>
            </div>

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

          <div>
            <div className="hero-background">
              <div className="background-text">
                <p>
                  Software Engineering graduate from Nackademin, experienced in
                  Java programming and front-end web development in a
                  test-driven environment. I am a dedicated, eager, learner who
                  thrives in collaborative work environments and am enthusiastic
                  when it comes to facing new challenges that require problem
                  solving skills.
                </p>
              </div>

              <div className="hire-container">
                <p>
                  If you are a startup seeking to develop a web presence, a
                  business looking to upgrade your website or an employer
                  looking to hire, you can get in touch with me here.
                </p>
                <div className="btn-container">
                  <a href="mailto:danielbernhardt1996@outlook.com">
                    I need a website{" "}
                    <IoIosArrowForward style={{ marginLeft: "20px" }} />
                  </a>
                  <a href="mailto:danielbernhardt1996@outlook.com">
                    I'm looking to hire{" "}
                    <IoIosArrowForward style={{ marginLeft: "20px" }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
