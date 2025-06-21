let cartimeline;
let tyretimeline;
let carspeed = 6;
let tyrespeed = 3;
let isReversing = false;
let isstop = false;
function go() {
    updatespeed();

    if (!cartimeline) {
        cartimeline = gsap.timeline();
        cartimeline.to(".car", {
            duration: 10,
            x: window.innerWidth,
            ease: "power1.inOut"
        })
    }
    if (isReversing) {
        cartimeline.reverse();
    } else {
        cartimeline.play();
    }
    // cartimeline.timeScale(carspeed / 10); // carspeed 10 = normal, 20 = 2x faster
    if (!tyretimeline) {
        tyretimeline = gsap.to(".tyre", {
            duration: 1,
            rotation: 360,
            ease: "none",
            repeat: -1
        });
    }
    if (isReversing) {
        tyretimeline.reverse();
    } else {
        tyretimeline.play();
    }
    // tyretimeline.timeScale(carspeed / 10);
}
function stop() {
    isstop = true;
    cartimeline?.pause();
    tyretimeline?.pause();
}
function reverse() {
    isstop = false;
    isReversing = true;
    cartimeline?.reverse();
    tyretimeline?.reverse();
}
function forward() {
    isstop = false;
    isReversing = false;
    cartimeline?.play();
    tyretimeline?.play();
}

function updatespeed() {
    document.querySelector(".show-speed span").textContent = carspeed + "km/h";
}
document.addEventListener("keydown", function (event) {
    switch (event.code) {
        case "ArrowRight":
            if (isReversing && !isstop) {
                carspeed = Math.min(carspeed + 1, 50);
                updatespeed();
                cartimeline?.timeScale(carspeed / 10).reverse();
                tyretimeline?.timeScale(carspeed / 10).reverse();
            } else {
                carspeed = Math.min(carspeed + 1, 50);
                updatespeed();
                cartimeline?.timeScale(carspeed / 10);
                tyretimeline?.timeScale(carspeed / 10);
            }
            break;
        case "ArrowLeft":
            if (isReversing && !isstop) {
                carspeed = Math.max(carspeed - 1, 1);
                updatespeed();
                cartimeline?.timeScale(carspeed / 10).reverse();
                tyretimeline?.timeScale(carspeed / 10).reverse();
            } else {
                carspeed = Math.max(carspeed - 1, 1);
                updatespeed();
                cartimeline?.timeScale(carspeed / 10);
                tyretimeline?.timeScale(carspeed / 10);
            }
            break;
        case "KeyR": // optional: press "R" to reverse
            reverse();
            break;
        case "KeyF": // optional: press "F" to go forward
            forward();
            break;
        case "ArrowUp":
            go();
            break;
        case "ArrowDown":
            stop();
            break;
        default:
            return;
    }
})

gsap.to(".right-wing", {
    rotation: 30,
    duration: .5,
    yoyo: true,
    repeat: -1,             // infinite
    ease: "sine.inOut"      // smooth back & forth
});
gsap.to(".left-wing", {
    rotation: -30,
    duration: .5,
    yoyo: true,
    repeat: -1,             // infinite
    ease: "sine.inOut"      // smooth back & forth
});
gsap.to(".right-wing-2", {
    rotation: 30,
    duration: .6,
    yoyo: true,
    repeat: -1,             // infinite
    ease: "sine.inOut"      // smooth back & forth
});
gsap.to(".left-wing-2", {
    rotation: -30,
    duration: .6,
    yoyo: true,
    repeat: -1,             // infinite
    ease: "sine.inOut"      // smooth back & forth
});
gsap.to(".right-wing-3", {
    rotation: 30,
    duration: .55,
    yoyo: true,
    repeat: -1,             // infinite
    ease: "sine.inOut"      // smooth back & forth
});
gsap.to(".left-wing-3", {
    rotation: -30,
    duration: .55,
    yoyo: true,
    repeat: -1,             // infinite
    ease: "sine.inOut"      // smooth back & forth
});


const sky = document.querySelector(".sky");
const skyWidth = sky.clientWidth;
const skyHeight = sky.clientHeight;
// alert("width"+skyWidth);
// move from center to top-right
gsap.to(".bird-1", {
    duration: 20,
    x: skyWidth + 200,
    y: -skyHeight,
    scale: .4,
    ease: "power1.inOut",
    repeat: -1
});
gsap.to(".bird-2", {
    duration: 20,
    x: skyWidth + 200,
    y: -skyHeight,
    scale: .4,
    ease: "power1.inOut",
    repeat: -1
});
gsap.to(".bird-3", {
    duration: 20,
    x: skyWidth + 200,
    y: -skyHeight,
    scale: .4,
    ease: "power1.inOut",
    repeat: -1
});
gsap.to(".bird-4", {
    duration: 20,
    x: skyWidth + 200,
    y: -skyHeight - 50,
    scale: .4,
    ease: "power1.inOut",
    repeat: -1
});
gsap.to(".bird-jerk", {
    y: '+=10',
    duration: 0.3,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1
});
// could animation
gsap.to(".cloud-1", {
    x: -window.innerWidth,
    duration: 810,
    repeat: -1
})

gsap.to(".cloud", {
    x: -window.innerWidth,
    duration: 810,
    repeat: -1
})
gsap.to(".sun-set", {
    y: (window.innerHeight) ,
    duration: 800,
    // repeat: -1,
    scale: 12,
})
gsap.to(".sun", {
  "--sun-start": "#FFA07A", // light salmon
  "--sun-end": "#FF8C00",   // dark orange
  duration: 600,
  ease: "power1.inOut"
});

// waves 
  gsap.to(".wave1", {
    x: "-60",
    duration: 10,
    repeat: -1,
    yoyo:true,
  ease: "power1.inOut"
    // ease: "linear"
  });

  gsap.to(".wave2", {
    x: "-6",
    duration: 10,
    repeat: -1,
    yoyo:true,
  ease: "power1.inOut"
    // ease: "linear"
  });

  gsap.to(".wave3", {
    x: "-8",
    duration: 2,
    repeat: -1,
    yoyo:true,
  ease: "power1.inOut"
    // ease: "linear"
  });

  gsap.to(".wave4", {
    x: "-10",
    duration: 4,
    repeat: -1,
    yoyo:true,
  ease: "power1.inOut"
    // ease: "linear"
  });
  gsap.to(".wave5", {
    x: "-12",
    duration: 5,
    repeat: -1,
    yoyo:true,
  ease: "power1.inOut"
    // ease: "linear"
  });
  gsap.to(".wave6", {
    x: "-10",
    duration: 2,
    repeat: -1,
    yoyo:true,
  ease: "power1.inOut"
    // ease: "linear"
  });
// const tl = gsap.timeline({ repeat: -1, yoyo: true });

// tl.to(".sun", {
//   filter: "hue-rotate(120deg)", // changes from yellow to orange/red/pink
//   duration: 200,
//   ease: "power1.inOut"
// });

// gsap.utils.toArray(".cloud").forEach((cloud, i) => {
//   gsap.to(cloud, {
//     x: "+=30",
//     duration: 6 + Math.random() * 4,
//     yoyo: true,
//     repeat: -1,
//     ease: "sine.inOut",
//     delay: i * 0.5
//   });
// });


// const bug = document.querySelector(".bug");

//   let posX = window.innerWidth / 2;
//   let posY = window.innerHeight / 2;
//   let angle = 0;

//   const speed = 10;

//   function updateBugTransform() {
//     bug.style.transform = `translate(-50%, -50%) translate(${posX}px, ${posY}px) rotate(${angle}deg)`;
//   }

//   document.addEventListener("keydown", function (event) {
//     switch (event.code) {
//       case "ArrowLeft":
//         angle -= 10;
//         break;
//       case "ArrowRight":
//         angle += 10;
//         break;
//       case "ArrowUp":
//         // move forward in the current angle
//         posX += speed * Math.cos((angle * Math.PI) / 180);
//         posY += speed * Math.sin((angle * Math.PI) / 180);
//         break;
//       case "ArrowDown":
//         // move backward
//         posX -= speed * Math.cos((angle * Math.PI) / 180);
//         posY -= speed * Math.sin((angle * Math.PI) / 180);
//         break;
//     }
//     updateBugTransform();
//   });

//   updateBugTransform();