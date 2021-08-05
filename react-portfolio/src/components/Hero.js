import React from "react";
import me from "../images/me.JPG";
import Typist from "react-typist";


export default function Hero() {
  return (
    <div className='hero-container content-small'>
      <div className='hero-info'>
        <div>
          <Typist
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
            <Typist.Backspace count={15} delay={200} />
            <Typist.Delay ms={500} />
            <h1>FrontEnd Developer</h1>
          </Typist>
          <br />
          <br />
          <br />
          <p>
            Software Engineering graduate from Nackademin, experienced in Java
            programming and front-end web development in a test-driven
            environment. I am a dedicated, eager, learner who thrives in
            collaborative work environments and am enthusiastic when it comes to
            facing new challenges that require problem solving skills.
          </p>
        </div>
        <div>
          <img src={me} alt='hittade ej bild' className='programmer' />
        </div>
      </div>
    </div>
  );
}
