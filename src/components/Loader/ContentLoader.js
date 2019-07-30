import React from 'react'

import {
  contentLoaderContainer, contentLoaderImg, contentLoaderTitle, contentLoaderLine,
} from '../css/styles.module.css'

const ContentLoader = () => (
  <div className={contentLoaderContainer}>

    <div className={contentLoaderImg}></div>

    <div className={contentLoaderTitle}></div>

    <div className={contentLoaderLine}></div>
    <div className={contentLoaderLine}></div>
    <div className={contentLoaderLine}></div>
    <div className={contentLoaderLine}></div>
    <div className={contentLoaderLine}></div>
  </div>
)

const defaultProps = {}

const propTypes = {}

ContentLoader.defaultProps = defaultProps
ContentLoader.propTypes = propTypes

export default ContentLoader;
