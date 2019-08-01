import React from 'react'
import './components/styles/css/christ-fellowship-bootstrap.css'
import { Inputs } from './components'


const App = () => {

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h1 className="text-primary">Hello There!</h1>
          <br/>
          <br/>
          <br/>
          <Inputs success placeholder='Enter Text'/>
          <br/>
          <br/>
          <br/>
          <Inputs fail placeholder='Enter Text'/>
          <br/>
          <br/>
          <br/>
          <Inputs disabled placeholder='Enter Text'/>
          <br/>
          <br/>
          <br/>
          <Inputs output='' helper='this is helper text' label='this is a label' placeholder='Enter Text'/>
        </div>
      </div>
    </div>
  )
}

export default App
