import React from 'react';
import PropTypes from 'prop-types';

import { mediaItem } from '../css/styles.module.css'

const MediaVideo = ({ source }) => (
  <video playsInline autoPlay loop muted className={mediaItem}>
    <source type="video/mp4" src={source} />
  </video>
);

const defaultProps = {}
const propTypes = {
  source: PropTypes.string.isRequired,
}

MediaVideo.defaultProps = defaultProps;
MediaVideo.propTypes = propTypes;

export default MediaVideo;
