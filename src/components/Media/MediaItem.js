import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Video from './Video'

const MediaItem = ({
  ratio, imageUrl, imageAlt, videoUrl, className, children, rounded, circle
}) => {
  let rounding = rounded ? 'rounded' : ''
  if (circle) {
    ratio = '1by1'
    rounded = false
    rounding = 'rounded-circle'
  }

  return (
    <div className={`embed-responsive embed-responsive-${ratio} ${rounding}`}>
      <Image source={imageUrl} alt={imageAlt} className='embed-responsive-item' />
      {videoUrl
        ? <Video source={videoUrl} className='embed-responsive-item' />
        : null}

      {children
        ? <div className='fill d-flex justify-content-center align-items-center'>{children}</div>
        : null}
    </div>
  )
};

const defaultProps = {
  ratio: '1by1',
  videoUrl: null,
  className: ''
}

const propTypes = {
  ratio: PropTypes.oneOf(['1by1', '4by3', '16by9', '21by9']),
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  videoUrl: PropTypes.string,
  className: PropTypes.string,
}

MediaItem.defaultProps = defaultProps;
MediaItem.propTypes = propTypes;

export default MediaItem;
