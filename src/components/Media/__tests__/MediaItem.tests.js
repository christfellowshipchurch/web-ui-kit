import React from 'react'
import MediaItem from '../../Media'
import renderer from 'react-test-renderer'

describe('MediaItem', () => {
    it('renders an image with no video', () => {
        const tree = renderer.create(
            <MediaItem imageUrl="https://img.url.com" imageAlt="Image Alt" />
        )

        expect(tree).toMatchSnapshot()
    })

    it('renders a video with a background image', () => {
        const tree = renderer.create(
            <MediaItem videoUrl="https://video.url.com" imageUrl="https://img.url.com" imageAlt="Image Alt" />
        )

        expect(tree).toMatchSnapshot()
    })

    it('renders content overtop of an image', () => {
        const tree = renderer.create(
            <MediaItem imageUrl="https://img.url.com" imageAlt="Image Alt">
                <h1>This is content overtop of an image</h1>
            </MediaItem>
        )

        expect(tree).toMatchSnapshot()
    })

    it('renders a rounded media item', () => {
        const tree = renderer.create(
            <MediaItem imageUrl="https://img.url.com" imageAlt="Image Alt" rounded />
        )

        expect(tree).toMatchSnapshot()
    })
})