import React from 'react'
import PropTypes from 'prop-types'
import { lowerCase, includes } from 'lodash'

import Media from '../Media'

const MEDIA_COL_12 = ['default', 'inverted']
const MEDIA_COL_FIRST = ['default', 'right']
const TEXT_CENTER = ['default', 'inverted']

const BlockContainer = ({
  layout, imageUrl, imageAlt, videoUrl, ratio, children, className, rounded, media
}) => {
  layout = lowerCase(layout)
  const centerContentVH = 'd-flex justify-content-center align-items-center'
  const mediaColSize = includes(MEDIA_COL_12, layout) ? 'col-md-12' : 'col-md-6'
  const mediaColOrder = layout === 'inverted'
    ? 'order-last'
    : (includes(MEDIA_COL_FIRST, layout) ? 'order-first' : 'order-first order-md-last')

  const textAlignment = (includes(TEXT_CENTER, layout) ? 'text-center' : 'text-left')

  const mediaItem = media
    ? (
      <div>
        <Media {...media} rounded />
      </div>
    )
    : imageUrl || videoUrl
      ? (
        <div>
          <Media
            ratio={ratio}
            imageUrl={imageUrl}
            imageAlt={imageAlt}
            videoUrl={videoUrl}
            rounded />
        </div>
      )
      : null

  return (
    <div className={`container-fluid ${className}`}>
      <div className="row">
        <div className={`col-12 ${mediaColSize} ${mediaColOrder}`}>
          {mediaItem}
        </div>
        <div className={`col-12 col-md ${textAlignment} ${centerContentVH}`}>
          <div>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}


const defaultProps = {
  layout: 'default',
  imageUrl: null,
  imageAlt: null,
  videoUrl: null,
  ratio: '16by9',
  className: '',
  rounded: false,
  media: null
}

const propTypes = {
  layout: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  videoUrl: PropTypes.string,
  ratio: PropTypes.string,
  className: PropTypes.string,
  rounded: PropTypes.bool,
  media: PropTypes.object
}

BlockContainer.defaultProps = defaultProps
BlockContainer.propTypes = propTypes

export default BlockContainer
