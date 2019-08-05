import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  contentContainer, contentMedia, contentRight, contentLeft, contentTop, contentBottom
} from '../styles/scss/styles.module.scss'

import Media from '../Media'

const BlockContainer = ({
  layout, imageUrl, imageAlt, videoUrl, ratio, children, className, rounded, media
}) => {
  const layouts = {
    default: contentBottom,
    inverted: contentTop,
    left: contentLeft,
    right: contentRight,
  };

  const mediaItem = media
    ? (
      <div className={contentMedia}>
        <Media {...media} />
      </div>
    )
    : imageUrl || videoUrl
      ? (
        <div className={contentMedia}>
          <Media ratio={ratio} imageUrl={imageUrl} imageAlt={imageAlt} videoUrl={videoUrl} rounded={rounded} />
        </div>
      )
      : null

  return (
    <div className={classNames(contentContainer, className)}>
      {mediaItem}
      <div className={layouts[layout]}>
        {children}
      </div>
    </div>
  );
};

const defaultProps = {
  layout: 'default',
  imageUrl: null,
  imageAlt: null,
  videoUrl: null,
  ratio: '16by9',
  className: '',
  rounded: false,
  media: null
};

const propTypes = {
  layout: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  videoUrl: PropTypes.string,
  ratio: PropTypes.string,
  className: PropTypes.string,
  rounded: PropTypes.bool,
  media: PropTypes.object
};

BlockContainer.defaultProps = defaultProps;
BlockContainer.propTypes = propTypes;

export default BlockContainer;
