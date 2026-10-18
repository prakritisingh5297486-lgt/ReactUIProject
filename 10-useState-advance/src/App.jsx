// import React,{useState} from 'react'

// const App = () => {
//   // const [num, setNum] = useState({user:'Sarthak',age:20})
//   const [num, setNum] = useState([33,66])
//   const btnClicked = ()=>{
//     //destructure
//     // const newNum = {...num};
//     const newNum = [...num];
//     // newNum.user = 'Aman'
//     // newNum.age = 19
//     newNum.push(99)
//     // setNum(newNum)
//     console.log(newNum);
//     // console.log(user.user);
//     // console.log(user.age);
//   }
//   return (
//     <div>
//       {/* <h1>{num.user},{num.age}</h1> */}
//       <h1>{num}</h1>
//       <button onClick={btnClicked}>Click</button>
//     </div>
//   )
// }

// export default App


// import React,{useState} from 'react'

// const App = () => {
//   const [num, setNum] = useState({user:'Rishi',age:17})
//   const btnClicked=()=>{
//     setNum(prev=>({...prev,age:50}))
//   }
//   return (
//     <div>
//       <h1>{num.user},{num.age}</h1>
//       <button onClick={btnClicked}>Click</button>
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(10)
  const btnClicked = () => {
    // Batch Management

    //Increased by 1 always on all click
    // setNum(num+1)
    // setNum(num+1)
    // setNum(num+1)
    //Increase by 3 at all click
    setNum(prev => (prev + 1))
    setNum(prev => (prev + 1))
    setNum(prev => (prev + 1))
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App