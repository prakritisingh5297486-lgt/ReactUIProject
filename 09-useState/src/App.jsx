// import React, {useState} from 'react'

// const App = () => {

//   // useState is a hook in React that allows you to add state to functional components. However, in the provided code snippet, the `useState` hook is not being used correctly. Instead, a regular variable `a` is being declared and modified, which will not trigger a re-render of the component when its value changes.

//   const [num, setNum] = useState(0);
//   const [username, setUsername] = useState('Aman');
//   // const [users, setUsers] = useState([10,20,30]);

//   function changeNum(){
//     setNum(1);
//     setUsername('Prakriti');
//     // setUsers([30,40,50]);
//     // setNum(num+1);
//   }
//   return (
//     <div>
//       <h1>Value of num is {num} <br /> value of user is {username}</h1>
//       <button onClick={changeNum}>Click</button>
//     </div>
//   )
// }

// export default App

//counter
import React,{useState} from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  function increaseNum(){
    setnum(num+1)
  }
  function decreaseNum(){
    setnum(num-1)
  }
  function jump5Num(){
    setnum(num+5)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jump5Num}>Jump by 5</button>
    </div>
  )
}

export default App