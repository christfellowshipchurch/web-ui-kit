import React from 'react'
import renderBlockMethod from './renderBlock'

export const renderBlock = renderBlockMethod

//---------
//Tools is a component that holds various utilities
//most of these methods were copied over from 'utils.js' from CF Conference Website
//--------------------------

//Converts a hex value to an RGB value
export const hexToRGB = (hex) => {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    })

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null
}

//Determines text color from background color
export const getTextColorClass = (backgroundColor) => {
    var rgb = hexToRGB(backgroundColor)
    var o = Math.round(((parseInt(rgb.r) * 299) +
        (parseInt(rgb.g) * 587) +
        (parseInt(rgb.b) * 114)) / 1000);
    // return (o > 125) ? 'text-dark' : 'text-light';
    return (o > 175) ? 'text-dark' : 'text-light'
}

//Maps edges to nodes
export const mapEdgesToNodes = (data) => data.edges.map(n => n.node)
