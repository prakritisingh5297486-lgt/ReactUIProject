import React from 'react'
import Card from './components/card.jsx'

const App = () => {
  return (
    <div className="parent">
      
      <Card user='Ananya Singh' age={18} img="https://plus.unsplash.com/premium_photo-1776981820574-8e9e3ba40109?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user='Prakriti Singh' age={20} img="https://images.unsplash.com/photo-1777047023536-8e47688b77f9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user='Akash Singh' age={21} img="https://images.unsplash.com/photo-1762138012600-2ab523f8b35a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      {/* <Card />
      <Card /> */}
    </div>
  )
}

export default App
