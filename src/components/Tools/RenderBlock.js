import React from 'react';
import { lowerCase } from 'lodash';
import { Block, Media } from '..'
import { Container, Row, Col } from 'reactstrap'
import { getTextColorClass } from './Tools'


//--------------
// Block Rendering Utils
// Takes care of image sizing and rendering block in correct format
//
//***NOTE*** 
//Need to add Buttons
//------------------------



export const renderBlock = (content) => {
    console.log({content})

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
            <Container fluid>
                <Row>
                    <Col className={textColor}>
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

                            {/* {renderButtons(content.callsToAction)} */}
                        </Media>
                    </Col>
                </Row>

            </Container>
        )
    } else {
        return (
            <Container style={containerStyles} className="py-5" fluid>
                <Container>
                    <Row>
                        <Col className={textColor}>
                            {renderBlocktWithImgSizing(content)}
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}

const renderBlocktWithImgSizing = (content) => {
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
                        <video playsInline autoPlay loop muted className="w-100">
                            <source type="video/mp4" src={videoUrl} />
                        </video>

                        <img src={imageUrl} alt={content.imageAlt} className="w-100" />
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

                <Block.Subtitle className={`text-uppercase text-muted font-weight-bold ${textAlign}`}>
                    {content.subtitle}
                </Block.Subtitle>

                <Block.Title className={`text-uppercase titleWeight ${textAlign} ${header}`}>
                    {content.title}
                </Block.Title>

                <Block.Body className={`pt-1 ${textAlign}`}>
                    {content.htmlContent}
                </Block.Body>

                {/* {renderButtons(content.callsToAction, content.buttonColor, content.title, content.openLinksInNewTab)} */}
            </Block>
        </div>
    )
}