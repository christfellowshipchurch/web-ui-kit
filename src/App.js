import React from 'react'
import './components/styles/css/christ-fellowship-bootstrap.css'
import { TextInput, Dropdown, TextArea } from './components'



const App = () => {

  const items = [
    {
      call: 'item 1',
      action: '#item1'
    },
    {
      call: 'item 2',
      action: '#item2'
    },
    {
      call: 'disabled',
      action: '#disabled',
      disable: true
    }
  ]

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h1 className="text-primary">Components</h1>
          <br/>
          <br/>
          <br/>
          <TextInput success placeholder='Enter Text'/>
          <br/>
          <br/>
          <br/>
          <TextInput fail placeholder='Enter Text'/>
          <br/>
          <br/>
          <br/>
          <TextInput disabled placeholder='Enter Text'/>
          <br/>
          <br/>
          <br/>
          <TextInput output='' helper='this is helper text' label='this is a label' placeholder='Enter Text'/>
          <br/>
          <br/>
          <br/>
          <div className='d-flex justify-content-center'>
          <Dropdown title='Dropdown Title' items={items}/>
          </div>
          <br/>
          <br/>
          <br/>
          <div className='d-flex justify-content-center'>
             <TextArea placeholder='Type your message' helper='this is helper text' label='this is a label' fail/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
