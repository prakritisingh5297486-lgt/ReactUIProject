// import React from 'react'

// const App = () => {
//   function btnclicked(){
//     console.log('button is clicked');
//   }
//   return (
//     <div>
//       <h1>Hello, Sarthak</h1>
//       <button onClick={btnclicked}>Change User</button>
//     </div>
//   )
// }

// export default App



// import React from 'react'

// const App = () => {
//   function inputChanging(val) {
//     // console.log('User is typing');
//     console.log(val);
//   }
//   return (
//     <div>
//       {/* <button onClick={() => {
//         console.log('Button Clicked');
//       }}>Click Here</button> */}

//       {/* <input onChange={()=>{
//         console.log('Click on input')
//       }} type="text" placeholder='Enter Name'/> */}

//       {/* <input onChange={inputChanging} type="text" placeholder='Enter Name'/> */}

//       {/* <input onChange={function (elem) {
//         // console.log(elem);
//         // console.log(elem.target);
//         console.log(elem.target.value);
//       }} type="text" placeholder='Enter Name' /> */}

//       <input onChange={function (elem) {
//         inputChanging(elem.target.value);
//       }} type="text" placeholder='Enter Name' />
//     </div>
//   )
// }

// export default App



// import React from 'react'

// const App = () => {

//   const pageScrolling = (elem) => {
//     // console.log('Pag scrolling at speed', elem);
//     if(elem>0){
//       console.log('Scrolling Down');
//     }
//     else{
//       console.log('Scrolling Up');
//     }
//   }

//   return (
//     // <div onWheel={pageScrolling} className='container'>
//     <div onWheel={(elem)=>{
//       // console.log(elem.deltaY);
//         pageScrolling(elem.deltaY)
//       }} className='container'>
//       {/* <div onMouseMove={(elem)=>{
//         console.log(elem.clientX, elem.clientY);
//       }} className="box"></div> */}
//       <div className="page1"></div>
//       <div className="page2"></div>
//       <div className="page3"></div>
//     </div>
//   )
// }

// export default App


import React from 'react'

const App = () => {
  function btnclicked() {
    console.log('HELLO BACHCHO!');
  }
  return (
    <div>
      <button onClick={btnclicked}>Click</button>
    </div>
  )
}

export default App