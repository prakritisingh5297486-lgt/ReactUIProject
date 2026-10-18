import React from 'react'

const App = () => {
  const submitHandle=(e)=>{
    e.preventDefault()
    console.log('form submitted');
  }
  return (
    <div>
      <form action="" onSubmit={(e)=>{
        submitHandle(e)
      }}>
        <input type="text" placeholder='Enter your name'/>
        <input type="email" placeholder='Enter your email'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App