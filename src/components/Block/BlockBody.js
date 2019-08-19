import React from 'react'
import { Parser } from 'html-to-react'

const htmlToReactParser = new Parser()

const BlockBody = ({ className, children }) =>
  <div className={className}>
    {htmlToReactParser.parse(children)}
  </div>

const defaultProps = {}
const propTypes = {}

BlockBody.defaultProps = defaultProps
BlockBody.propTypes = propTypes

export default BlockBody
