import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {AnimatePresence, motion, useMotionValue, useScroll, useTransform} from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 500vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: linear-gradient(135deg,rgb(238,0,153), rgb(221,0,238))
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const myVars = {
  start: {scale: 0},
  end: {scale: 1, rotateZ: 360, transition:{type: "spring", bounce:0.8, duration: 2, delay: 1}}
};


//---------------------------------------------------------------------------------------------

const Box1 = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255,255,255,0.2);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
display: grid;
grid-template-columns: repeat(2, 1fr);
  `;

const Circle = styled(motion.div)`
width: 70px;
height: 70px;  
border-radius: 35px;
place-self: center;
background-color:white;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const box1Vars = {
  first:{
    opacity: 0, 
    scale: 0.5,
  },
  final:{
    scale: 1,
    opacity: 1,
    transition:{
      type: "spring",
      duration: 2,
      bounce: 0.5,
      delayChildren: 1,
      staggerChildren:0.1
    }
  }
}

const circleVariants = {
  first:{ // motion이 자동으로 variants를 넣어주기 때문에 이름을 통일해야한다
    opacity: 0,
    y:10
  },
  final: {
    opacity: 1,
    y:0
   }
};


//---------------------------------------------------------------------------------------------

const Box2 = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;


const box2Vars = {
  hover: {
    scale: 1.5, rotateZ: 90
  },
  click: {
    scale: 1, borderRadius: "100px"
  },
  drag: {
    backgroundColor: "rgb(46,204,113)",
    transition: {
      duration: 3
    }
  }
};


//---------------------------------------------------------------------------------------------

const BiggerBox = styled.div`
width: 600px;
height: 600px;
background-color: rgba(255,255,255,0.5);
border-radius: 40px;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
`

//---------------------------------------------------------------------------------------------

const Box3 = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

//---------------------------------------------------------------------------------------------

const Svg = styled.svg`
  width: 300px;
  height: 300px;
  path {
    stroke: white;
    stroke-width: 10;
  }
`;

const svg = {
  start:{
    pathLength: 0,
    fill:"rgba(255,255,255,0)"
  },
  end:{
    pathLength: 1,
    fill: "rgba(255,255,255,1)",
  }
}

//---------------------------------------------------------------------------------------------

const Box4 = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const box4Vars = {
  initial:{
    opacity:0,
    scale:0,
  },
  visible:{
    opacity:1,
    scale:1,
    rotateZ: 360,
  },
  leaving:{
    opacity:0,
    scale:0,
    y: 120,
  }
}

//---------------------------------------------------------------------------------------------

const Box5 = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
position: absolute;
top: 410%;
`;

const box5Vars = {
  entry: (back:boolean) => ({

    x:back ? -500 : 500,
    opacity: 0,
    scale: 0,

  }),
  center: {
    x:0,
    opacity: 1,
    scale: 1,
    rotateY: 720,
    transition: {
      duration: 0.3,
    }
  },
  exit: (back:boolean) => ({
    x:back ? 500 : -500,
    opacity: 0,
    scale: 0,
    rotateX: 180,
    transition: {
      duration: 0.3,
    }
  })
}

function App(){
  const biggerBoxRef = useRef<HTMLDivElement>(null);

  //------------------------------------------------------------------------

  const x = useMotionValue(0);
  //console.log(x); 
  // Box3를 움직여도
  //useMotionValue는 다시 랜더링이 되지않는다 
  //그래서 한번만 출력된다

  //------------------------------------------------------------------------

  const rotateZ = useTransform(x, [-900,0, 900], [-360,0, 360]);

  useEffect(()=> {
   // x.onChange(() => console.log(x.get()))
   x.onChange(() => console.log(rotateZ.get()))
  },[x])  

  //------------------------------------------------------------------------

const gradient = 
useTransform(x, 
  [-900,0, 900], 
  [
  "linear-gradient(135deg,rgb(0,210,238), rgb(0,83,238))",
  "linear-gradient(135deg,rgb(238,0,153), rgb(221,0,238))",
  "linear-gradient(135deg,rgb(0,238,155), rgb(238,238,0))",
  ]
  );

  //------------------------------------------------------------------------

const {scrollY, scrollYProgress} = useScroll();
/*useEffect(()=> {
  scrollY.onChange(() => {console.log(scrollY.get(), scrollYProgress.get())})
})*/

const wrapperScale = useTransform(scrollYProgress, [0, 1], [1,2])

//------------------------------------------------------------------------

const [show, setShow] = useState(false);

const onclick = () => {
setShow((current)=>!current)
}

//------------------------------------------------------------------------

const [visible, setVisible] = useState(1);
const [back, setBack] = useState(false);
const nextPlease = () => {
  setBack(false)
  setVisible((prev) => (prev === 10 ? 10 : prev+1))
}
const prevPlease = () => {
  setBack(true)
  setVisible((prev) => (prev === 1 ? 1 : prev-1))
}


return (
        <Wrapper style={{background: gradient}}>
    {/*<Box 
    initial={{scale: 0}}
    animate={{ scale: 1, rotateZ: 360}}
    transition={{type: "spring", bounce:0.8, duration: 2, delay: 1}}/>
    */}
<Svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 448 512"
>
<motion.path
variants={svg}
initial="start"
animate="end"
transition={{
default: {duration: 5},
fill: {duration: 2, delay: 1} // property 각각 적용가능
}}
d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z">
</motion.path>
</Svg>
<Box variants={myVars} initial="start" animate="end"/>
<Box1 variants={box1Vars} initial="first" animate="final">
  <Circle variants={circleVariants} />
  <Circle variants={circleVariants} />
  <Circle variants={circleVariants} />
  <Circle variants={circleVariants} />
  {/* motion은 부모 컴포넌트가 variants랑 
  initial, animate를 가지고 있을때 자식 컴포넌트에 
  variants랑 initial, animate를 자동으로 복사한다 
  <Circle initial="start" animate="end" />
  <Circle initial="start" animate="end" />
  <Circle initial="start" animate="end" />
  <Circle initial="start" animate="end" />
  */}
</Box1>
<BiggerBox ref={biggerBoxRef}>
<Box2 
variants={box2Vars}
whileHover="hover"
whileTap="click"
whileDrag="drag"
drag
dragConstraints={biggerBoxRef} // 드래그 제한을  biggerBox에 맞춘다
dragSnapToOrigin
dragElastic={0.3} // Box2가 마우스를 따라다니는 정도 1로 갈수록 제일 잘 따라다님
/>
</BiggerBox>
<Box3 
style={{x, rotateZ, scale:scrollYProgress}}
drag="x"
dragSnapToOrigin
/>
{/*<button onClick={()=>{x.set(100)}}>set X</button>*/}

<AnimatePresence>{show ? 
<Box4 
variants={box4Vars} 
initial="initial" 
animate="visible" 
exit="leaving"/>: null}</AnimatePresence>
{/* <AnimatePresence>는 안쪽에 사라지는 게 있다면  사라지는 것을 animate하게 해줌*/}
<button onClick={onclick}>Click</button>

<AnimatePresence mode="wait" custom={back}>
<Box5 
custom={back}
variants={box5Vars} 
initial="entry" 
animate="center" 
exit="exit" 
key={visible}>{visible}</Box5>

{/* element의 key를 바꿔주면 React는 element가 사라졌다고 생각함 
  그래서 React는 이전의 컴포넌트을 없애고 새 컴포넌트을을 보여준다
  이때, initial,animate,exit 세가지의 animation이 모두 실행된다
*/}
</AnimatePresence>
<button onClick={nextPlease}>next</button>
<button onClick={prevPlease}>previous</button>
</Wrapper>
    )
}

export default App;

