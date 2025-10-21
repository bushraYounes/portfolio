import React, { useEffect, useState } from 'react'

const StarBackground = () => {

  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  

  useEffect(() => {
    generateStars();
    generateMeteors();

    // to handel the number of the stars when the window size changes
    const handelResize = () => {
      generateStars();
      generateMeteors();
    }

    window.addEventListener("resize", handelResize);

    return () => window.removeEventListener("resize", handelResize);
  }, []);


  //we want to generate stars based on the dimentions of our screen
  const generateStars = () => {
    const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 4000);
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2
      })
    }

    setStars(newStars);
  }
  const generateMeteors = () => {
    const numberOfMeteors = Math.floor(window.innerWidth * window.innerHeight / 200000);
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3
      })
    }

    setMeteors(newMeteors);
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div key={star.id}
          className="star animation-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s"
          }}
        />
      ))
      }


      {meteors.map((meteor) => (
        <div key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 30 + "px",
            height: meteor.size * 0.5 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            delay: meteor.delay,
            animationDuration: meteor.animationDuration + "s"
          }}
        />
      ))
      }

    </div>

  )
}

export default StarBackground