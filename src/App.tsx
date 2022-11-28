import React, { useRef } from "react";
import styled from "styled-components";
import {motion} from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
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

function App(){
  const biggerBoxRef = useRef<HTMLDivElement>(null);

    
    return (
        <Wrapper>
    {/*<Box 
    initial={{scale: 0}}
    animate={{ scale: 1, rotateZ: 360}}
    transition={{type: "spring", bounce:0.8, duration: 2, delay: 1}}/>
    */}
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
      </Wrapper>
    )
}

export default App;