// Free api website => Lorem Picsum , JSON Placeholder
import React, { useState } from 'react'

import axios from 'axios'

const App = () => {
  // async function getData(){
  //   console.log('Data aa gya');
  //   const response =await fetch('https://jsonplaceholder.typicode.com/posts/1')
  //   console.log(response);
  // }
  // const getData = async () => {
  //   const response =await fetch('https://jsonplaceholder.typicode.com/posts/1')  //Shows only one data
  //   const response1 =await fetch('https://jsonplaceholder.typicode.com/posts')  //Shows all data

  //   const response2 =await fetch('https://jsonplaceholder.typicode.com/users')  //Shows all data
    
  //   const data = await response.json()
  //   const data1 = await response1.json()

  //   const data2 = await response1.json()

  //   console.log(data);
  //   console.log(data1);

  //   console.log(data2);
    
  //   // console.log(response);
    
  //   // console.log(response.json());
    
  // }

  // const getData=async()=>{
  //   const response =await axios.get('https://jsonplaceholder.typicode.com/users')
  //   console.log(response.data);

  //   // or
  //   // restructuring

  //   const {data} =await axios.get('https://jsonplaceholder.typicode.com/users')
  //   console.log(data);

  // }
  const [data, setData] = useState([])

  const getData=async()=>{
    const response =await axios.get('https://picsum.photos/v2/list')
    console.log(response.data);
    setData(response.data)
  }
  return (
    <div>
      <button onClick={getData} className="bg-blue-500 text-white px-4 py-2 rounded">Get Data</button>
      <div>
        {data.map(function(elem,idx){
          return (<div key={elem} className='my-4'>
            <h3 className='text-black'>Hello, {elem.author} {idx}</h3>
          </div>)
        })}
      </div>
    </div>
  )
}

export default App

// For install axios library
// npm i axios (run this commmand)