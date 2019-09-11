import React from 'react'
import './components/styles/css/christ-fellowship-bootstrap.css'
import { faEnvelope } from '@fortawesome/fontawesome-pro-light'
import { Block, Row, TextInput, Dropdown, TextArea, Carousel, Accordion, Button, Media } from './components'

const videoUrl = "https://gochristfellowship.com/wp-content/uploads/2018/08/August_2018_Home_Video.mp4"

const App = () => {
  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-6 p-5 bg-white">
          <Button type="primary" title="Default" />
        </div>
        <div className="col-6 p-5 bg-white">
          <Button type="primary" title="Default" disabled />
        </div>
      </div>
      <div className="row">
        <div className="col-6 p-5 bg-white">
          <Button type="primary" title="Default" size="sm" />
        </div>
        <div className="col-6 p-5 bg-white">
          <Button type="primary" title="Default" size="sm" disabled />
        </div>
      </div>

      <div className="row">
        <div className="col-6 p-5 bg-white">
          <Button type="dark" title="Default" />
        </div>
        <div className="col-6 p-5 bg-white">
          <Button type="dark" title="Default" disabled />
        </div>
      </div>
      <div className="row">
        <div className="col-6 p-5 bg-white">
          <Button type="dark" title="Default" size="sm" />
        </div>
        <div className="col-6 p-5 bg-white">
          <Button type="dark" title="Default" size="sm" disabled />
        </div>
      </div>

      <div className="row">
        <div className="col-6 p-5 bg-dark">
          <Button type="light" title="Default" />
        </div>
        <div className="col-6 p-5 bg-dark">
          <Button type="light" title="Default" disabled />
        </div>
      </div>
      <div className="row">
        <div className="col-6 p-5 bg-dark">
          <Button type="light" title="Default" size="sm" />
        </div>
        <div className="col-6 p-5 bg-dark">
          <Button type="light" title="Default" size="sm" disabled />
        </div>
      </div>
      <div className="row">
        <div className="col-6 p-5 bg-white">
          <Media videoUrl={videoUrl} rounded />
        </div>
      </div>
    </div>
  )
}

export default App
