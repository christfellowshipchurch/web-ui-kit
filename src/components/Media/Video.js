import React from 'react'
import PropTypes from 'prop-types'

const MediaVideo = ({ source, className }) => (
  <video playsInline autoPlay loop muted className={className}>
    <source type="video/mp4" src={source} />
  </video>
)

const defaultProps = {}
const propTypes = {
  source: PropTypes.string.isRequired,
}

MediaVideo.defaultProps = defaultProps
MediaVideo.propTypes = propTypes

export default MediaVideo
