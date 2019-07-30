import React, { Component, useState } from 'react';
import './App.css';
import {
  Media, Loader, Content, Accordion, Carousel
} from './components'

const imgUrl = "https://i-h1.pinimg.com/564x/bc/f8/e4/bcf8e4a9e37b32e9cdfdc775d6beeed8.jpg"
const imgAlt = 'some image alt'

const App = () => {
  const mediaProps = {
    imageAlt: imgAlt,
    imageUrl: imgUrl,
    ratio: '1by1',
    className: "smaller-img margin-auto"
  }

  return (
    <div className="App">
      <Carousel>
        <Media className="smaller-img" imageAlt={imgAlt} imageUrl={imgUrl} />

        <Content media={mediaProps}>
          <Content.Title>Passing in media as an object</Content.Title>
          <Content.Body>body</Content.Body>
        </Content>


        <Content
          imageAlt={imgAlt}
          imageUrl={imgUrl}
          ratio="1by1" >
          <Content.Title>Passing in individual media props</Content.Title>
          <Content.Body>body</Content.Body>
        </Content>
      </Carousel>

    </div>
  );
}

export default App;
