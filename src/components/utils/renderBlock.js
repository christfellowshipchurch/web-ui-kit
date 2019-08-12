import React from 'react';
import { lowerCase } from 'lodash';
import { Block, Media, Button } from '..'
import {getTextColorClass} from '../utils'


//--------------
// Block Rendering Utils
// Takes care of image sizing and rendering block in correct format
//
//***NOTE*** 
//Need to add Buttons
//-------------------------


const renderBlock = ({content}) => {

    //Checks for # in hex value for background color
    let textColor = 'text-dark'
    let containerStyles = {}
    if (content.backgroundColor && content.backgroundColor !== '') {
        containerStyles = {
            backgroundColor: content.backgroundColor
        }
        textColor = getTextColorClass(content.backgroundColor)
    }

    const layout = lowerCase(content.contentLayout)

    if (layout === "background") {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className={`col`}>
                        <Media
                            imageUrl={content.coverImage ? content.coverImage.sources[0].uri : null}
                            imageAlt={content.imageAlt}
                            videoUrl={content.videos && content.videos[0].sources.length
                                ? content.videos[0].sources[0].uri
                                : null}
                            ratio={content.imageRatio}
                        >

                            <Block.Title>
                                {content.title}
                            </Block.Title>

                            <Block.Body>
                                {content.htmlContent}
                            </Block.Body>

                            {content.callsToAction
                                ? (
                                    <Button call={content.callsToAction.call} action={content.callsToAction.call} />
                                )
                                : null
                            }
                            

                        </Media>
                    </div>
                </div>

            </div>
        )
    } else {
        return (
            <div style={containerStyles} className="container-fluid py-5">
                <div className='container'>
                    <div className='row'>
                        <div className={`col ${textColor}`}>
                            {renderBlockWithImgSizing({content})}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const renderBlockWithImgSizing = ({ content }) => {

    const layout = lowerCase(content.contentLayout)
    const imageUrl = content.coverImage && layout !== 'original'
        ? content.coverImage.sources[0].uri
        : null
    const videoUrl = content.videos && content.videos[0].sources.length && layout !== 'original'
        ? content.videos[0].sources[0].uri
        : null

    let textAlign
    layout === 'right' || layout === 'left'
        ? textAlign = 'text-left' : textAlign = ''

    let header
    layout === 'right' || layout === 'left'
        ? header = 'h2' : header = 'h1'

    return (
        <div>
            {layout === 'original'
                ? (
                    <div className="w-100">
                        {content.videos
                            ? (
                                <video playsInline autoPlay loop muted className="w-100">
                                    <source type="video/mp4" src={videoUrl} />
                                </video>
                            )
                            : null}

                       <img src={content.coverImage.sources[0].uri} alt={content.imageAlt} className="w-100"/>
                    </div>
                )
                : null}

            <Block
                layout={layout}
                imageUrl={imageUrl}
                imageAlt={content.imageAlt}
                videoUrl={videoUrl}
                ratio={content.imageRatio}
            >

                <Block.Subtitle className={`text-muted font-weight-bold ${textAlign}`}>
                    {content.subtitle}
                </Block.Subtitle>

                <Block.Title className={`titleWeight ${textAlign} ${header}`}>
                    {content.title}
                </Block.Title>

                <Block.Body className={`pt-1 pb-4 font-weight-light ${textAlign}`}>
                    {content.htmlContent}
                </Block.Body>

                {content.callsToAction
                    ? (
                        <Button call={content.callsToAction.call} action={content.callsToAction.call} />
                    )
                    : null
                }

            </Block>
        </div>
    )
}

export default renderBlock