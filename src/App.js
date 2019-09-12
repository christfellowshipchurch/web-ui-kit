import React from 'react'
import './components/styles/css/christ-fellowship-bootstrap.css'
import { faEnvelope } from '@fortawesome/fontawesome-pro-light'
import { Block, Row, TextInput, Dropdown, TextArea, Carousel, Accordion, Button, Media } from './components'

const videoUrl = "https://gochristfellowship.com/wp-content/uploads/2018/08/August_2018_Home_Video.mp4"
const title = 'Lorem ipsum'
const subtitle = 'Lorem ipsum dolor sit amet'
const htmlContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien erat, laoreet sed justo sit amet, vestibulum tempus nulla. Aliquam mattis imperdiet ante, vel venenatis sapien. Vestibulum sed nisi ex. Donec euismod leo id turpis dapibus, at suscipit lorem commodo. Suspendisse potenti. Curabitur id ex ipsum. Morbi justo ipsum, aliquet quis dictum id, iaculis nec nisl. Morbi erat sapien, hendrerit viverra ullamcorper quis, hendrerit non nisl. Praesent porttitor a dolor nec auctor. Phasellus sed consequat dui. Quisque consequat massa mi, non placerat magna ornare vel. Integer sed nibh ac dolor pharetra porta. Nullam vitae ante vel nunc rhoncus eleifend. Nulla facilisi.'

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
        <div className="col-12 py-6 px-4 bg-light">
          <Block
            videoUrl={videoUrl}
            rounded
            layout="right"
            className="bg-white"
          >
            <Block.Subtitle className=''>
              {subtitle}
            </Block.Subtitle>

            <Block.Title className='h3'>
              {title}
            </Block.Title>

            <Block.Body>
              {htmlContent}
              {htmlContent}
              {htmlContent}
            </Block.Body>
          </Block>
        </div>
      </div>
    </div>
  )
}

export default App
