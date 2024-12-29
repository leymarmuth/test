// Register the MorphSVGPlugin
gsap.registerPlugin(MorphSVGPlugin);

// Initial SVG Path
const shape = document.querySelector(".morph-shape");

// Button to trigger the morph
const morphButton = document.getElementById("morphButton");

// Define the morph animation
const morphAnimation = gsap.to(".morph-shape", {
    duration: 2,
    morphSVG: {
        // Target shape to morph into
        d: "M50,75 Q100,25 150,75 Q175,100 150,125 Q125,175 75,150 Q50,125 50,75 Z",
    },
    ease: "power1.inOut",
    paused: true, // Start paused until triggered
    repeat: -1,
    yoyo: true
});

// Add event listener to start the morph animation
morphButton.addEventListener("click", () => {
    morphAnimation.play();
});
