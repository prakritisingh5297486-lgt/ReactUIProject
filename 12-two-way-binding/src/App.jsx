import React from 'react'
import {useState} from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  // const [title, setTitle] = useState('Sarthak')
  const submitHandler=(e)=>{
    e.preventDefault()
    console.log('form submitted by',title);
    setTitle('');
  }
  return (
    <div>
      <form action="" onSubmit={(e)=>{
        submitHandler(e)
      }}>
        {/* here, when e take or write value attribute in input then typing letters not show in input box  */}
        <input 
        type="text" 
        value={title}
        // value={title} //Sarthak
        placeholder='Enter your name'
        onChange={(e)=>{
          console.log(e.target.value)
          setTitle(e.target.value)
        }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App