import React from 'react'
import './components/styles/css/christ-fellowship-bootstrap.css'
import { Button } from './components'


const App = () => {

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
        <br/>
        <br/>
          <h1 className="text-primary">Buttons</h1>
          <br/>
          <br/>
          <Button type='primary' size='lg' call='Large Primary'/>
          <br/>
          <br/>
          <br/>
          <Button type='secondary' size='lg' call='Large Secondary'/>
          <br/>
          <br/>
          <br/>
          <Button type='tertiary' size='lg' call='Large Tertiary'/>
          <br/>
          <br/>
          <br/>
          <Button type='primary' size='sm' call='Small Primary'/>
          <br/>
          <br/>
          <br/>
          <Button type='secondary' size='sm' call='Small Secondary'/>
          <br/>
          <br/>
          <br/>
          <Button type='tertiary' size='sm' call='Small Tertiary'/>
          <br/>
          <br/>
          <br/>        </div>
      </div>
    </div>
  )
}

export default App
