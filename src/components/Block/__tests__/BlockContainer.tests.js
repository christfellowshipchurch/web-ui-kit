import React from 'react'
import Block from '..'
import renderer from 'react-test-renderer'

describe('BlockContainer', () => {
    it('renders Block in default layout without media', () => {
        const tree = renderer.create(
            <Block
                ratio="21by9"
                layout="default"
            >
                <Block.Title>Title</Block.Title>
                <Block.Body>Block body.</Block.Body>
            </Block>
        )

        expect(tree).toMatchSnapshot();
    })

    it('renders an image and Block in default layout', () => {
        const tree = renderer.create(
            <Block
                imageUrl="https://image.url.com"
                imageAlt="Image Alt"
                ratio="21by9"
                layout="default"
            >
                <Block.Title>Title</Block.Title>
                <Block.Body>Block body.</Block.Body>
            </Block>
        )

        expect(tree).toMatchSnapshot();
    })

    it('renders a video with background image and Block in default layout', () => {
        const tree = renderer.create(
            <Block
                videoUrl="https://video.url.com"
                imageUrl="https://image.url.com"
                imageAlt="Image Alt"
                ratio="21by9"
                layout="default"
            >
                <Block.Title>Title</Block.Title>
                <Block.Body>Block body.</Block.Body>
            </Block>
        )

        expect(tree).toMatchSnapshot();
    })

    it('renders a subtitle in the Block in the default size', () => {
        const tree = renderer.create(
            <Block
                videoUrl="https://video.url.com"
                imageUrl="https://image.url.com"
                imageAlt="Image Alt"
                ratio="21by9"
                layout="default"
            >
                <Block.Title>Title</Block.Title>
                <Block.Subtitle>Subtitle</Block.Subtitle>
                <Block.Body>Block body.</Block.Body>
            </Block>
        )

        expect(tree).toMatchSnapshot()
    })

    it('renders a larger title and subtitle', () => {
        const tree = renderer.create(
            <Block
                videoUrl="https://video.url.com"
                imageUrl="https://image.url.com"
                imageAlt="Image Alt"
                ratio="21by9"
                layout="default"
            >
                <Block.Title larger>Title</Block.Title>
                <Block.Subtitle larger>Subtitle</Block.Subtitle>
                <Block.Body>Block body.</Block.Body>
            </Block>
        )

        expect(tree).toMatchSnapshot()
    })

    it('renders a content Block with the inverted layout', () => {
    const tree = renderer.create(
            <Block
                videoUrl="https://video.url.com"
                imageUrl="https://image.url.com"
                imageAlt="Image Alt"
                ratio="21by9"
                layout="inverted"
            >
                <Block.Title larger>Title</Block.Title>
                <Block.Subtitle larger>Subtitle</Block.Subtitle>
                <Block.Body>Block body.</Block.Body>
            </Block>
        )

        expect(tree).toMatchSnapshot()
    })

    it('renders a content Block with the right layout', () => {
        const tree = renderer.create(
                <Block
                    videoUrl="https://video.url.com"
                    imageUrl="https://image.url.com"
                    imageAlt="Image Alt"
                    ratio="21by9"
                    layout="right"
                >
                    <Block.Title larger>Title</Block.Title>
                    <Block.Subtitle larger>Subtitle</Block.Subtitle>
                    <Block.Body>Block body.</Block.Body>
                </Block>
            )
    
            expect(tree).toMatchSnapshot()
        })

        it('renders a content Block with the left layout', () => {
            const tree = renderer.create(
                    <Block
                        videoUrl="https://video.url.com"
                        imageUrl="https://image.url.com"
                        imageAlt="Image Alt"
                        ratio="21by9"
                        layout="left"
                    >
                        <Block.Title larger>Title</Block.Title>
                        <Block.Subtitle larger>Subtitle</Block.Subtitle>
                        <Block.Body>Block body.</Block.Body>
                    </Block>
                )
        
                expect(tree).toMatchSnapshot()
            })
})