import React from 'react';
import Typewriter from "typewriter-effect"
function Type(props) {
    return (
        <Typewriter
        options={{
          strings: [
            "Developer",
            
            "MERN Stack",
            "React",
            "Express JS",
            "Node JS",
            "MongoDB",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    );
}

export default Type;