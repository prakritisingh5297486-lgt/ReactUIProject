import React from 'react'

const App = () => {
  // localStorage.clear();      //All clear in localStorage of Application of Console
  // sessionStorage.clear(); //All clear in sessionStorage of Application of Console
  // localStorage.setItem('user','Aman')
  // localStorage.setItem('Age',18)
  // const user = localStorage.getItem('user')
  // const age = localStorage.getItem('Age')
  // localStorage.removeItem('user')   //remove user
  // console.log(user,age);  //Aman 18

  const user = {
    username:'Sarthak',
    age:18,
    city:'Bhopal'
  }
  // localStorage.setItem('user',user)  //save in localStorage like Key user and Value is [object Object] beaause when data store in localStorage in key value then here value should be in the form of string, here is in object form then it should ne convert into string
  localStorage.setItem('user',JSON.stringify(user))  //Key user Value {"username":"Sarthak","age":18,"city":"Bhopal"}

  const usera = JSON.parse(localStorage.getItem('user'))
  console.log(usera);
  
  return (
    <div>App</div>
  )
}

export default App