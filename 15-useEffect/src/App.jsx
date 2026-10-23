// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [num1, setNum1] = useState(0)
//   const [num2, setNum2] = useState(100)
//   // useEffect(function(){
//   //   console.log('Use Effect is running')
//   // })   //Print whenever button is clicked
//   // useEffect(function(){
//   //   console.log('Use Effect is running')
//   // },[])   //Print only one time when click on button and change this   (This is right method to use useEffect) //Baar baar print na ho isliye ye use krtehain agar function use krte to baar baar print hota
//   useEffect(function(){
//     console.log('Use Effect is running')
//   },[num1])   //Its dependencies is num1
//   return (
//     <div>
//       <h1>The value of num1 is {num1}</h1>
//       <h1>The value of num2 is {num2}</h1>
//       <button 
//       onMouseEnter={()=>{
//         setNum1(num1+1)
//       }}
//       onMouseLeave={()=>{
//         setNum2(num2+10)
//       }}
//       >Click</button>
//     </div>
//   )
// }

// export default App

import React, { useEffect, useState } from 'react'

const App = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  function aChanging(){
    console.log('A ki value change ho gyi')
  }
  function bChanging(){
    console.log('B ki value change ho gyi')
  }

  useEffect(function(){
    aChanging();
    // console.log('Use effect is running');
  },[a,b])   //jb a ki value change hogi tb chlega if [b] jb b ki value change hogi tb chlega

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button
      onClick={()=>{
        setA(a+1)
      }}
      >Change A</button>
      <button
      onClick={()=>{
        setB(b-1)
      }}
      >Change B</button>
    </div>
  )
}

export default App