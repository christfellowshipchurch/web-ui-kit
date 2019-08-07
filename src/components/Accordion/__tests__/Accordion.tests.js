import React from 'react'
import renderer from 'react-test-renderer'
import {
    configure, shallow, mount, render
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Accordion from '../../Accordion'

configure({ adapter: new Adapter() });

describe('Accordion', () => {
    it('renders an accordion with items inside', () => {
        const tree = renderer.create(
            <Accordion>
                <div title="Item 1">
                    This is item 1
                </div>
                <div title="Item 2">
                    This is item 2
                </div>
                <div title="Item 3">
                    This is item 3
                </div>
            </Accordion>
        )

        expect(tree).toMatchSnapshot()
    })

    // Type: Single
    it('opens one item at a time with the ability to close an item that is open', () => {
        const wrapper = mount(
            <Accordion type="single">
                <div title="Item 1">
                    This is item 1
                </div>
                <div title="Item 2">
                    This is item 2
                </div>
                <div title="Item 3">
                    This is item 3
                </div>
            </Accordion>
        )
        const firstButton = wrapper.find('button').first()
        const secondButton = wrapper.find('button').at(1)

        // Opens and closes an item
        firstButton.simulate('click')
        wrapper.update()

        let sections = wrapper.find("[status='open']").first()
        expect(sections.length).toEqual(1)

        firstButton.simulate('click')
        wrapper.update()

        sections = wrapper.find("[status='open']").first()
        expect(sections.length).toEqual(0)


        // Closes an open item after opening a new item
        firstButton.simulate('click')
        wrapper.update()

        secondButton.simulate('click')
        wrapper.update()

        sections = wrapper.find("[status='open']")

        expect(sections.length).toEqual(1)
        expect(sections.find('button').find('div').first().html()).toEqual('<div>Item 2</div>')
    })

    // Type: Single Persisten
    it('opens one item at a time but cannot close an item that is open', () => {
        const wrapper = mount(
            <Accordion type="single-persistent">
                <div title="Item 1">
                    This is item 1
                </div>
                <div title="Item 2">
                    This is item 2
                </div>
                <div title="Item 3">
                    This is item 3
                </div>
            </Accordion>
        )
        const firstButton = wrapper.find('button').first()
        const secondButton = wrapper.find('button').at(1)

        // Opens and closes an item
        firstButton.simulate('click')
        wrapper.update()

        let sections = wrapper.find("[status='open']").first()
        expect(sections.length).toEqual(1)

        firstButton.simulate('click')
        wrapper.update()

        sections = wrapper.find("[status='open']").first()
        expect(sections.length).toEqual(1)


        // Closes an open item after opening a new item
        firstButton.simulate('click')
        wrapper.update()

        secondButton.simulate('click')
        wrapper.update()

        sections = wrapper.find("[status='open']")

        expect(sections.length).toEqual(1)
        expect(sections.find('button').find('div').first().html()).toEqual('<div>Item 2</div>')
    })

    // Type: Multiple
    it('opens multiple items at a time with the ability to close an item that is open', () => {
        const wrapper = mount(
            <Accordion type="multiple">
                <div title="Item 1">
                    This is item 1
                </div>
                <div title="Item 2">
                    This is item 2
                </div>
                <div title="Item 3">
                    This is item 3
                </div>
            </Accordion>
        )
        const firstButton = wrapper.find('button').first()
        const secondButton = wrapper.find('button').at(1)

        // Opens 2 sections
        firstButton.simulate('click')
        wrapper.update()

        secondButton.simulate('click')
        wrapper.update()

        let sections = wrapper.find("[status='open']")

        expect(sections.length).toEqual(2)

        // Closes an open section
        firstButton.simulate('click')
        wrapper.update()

        sections = wrapper.find("[status='open']")

        expect(sections.length).toEqual(1)
    })

    // Type: Persistent
    it('opens multiple items at a time but cannot close an item that is open', () => {
        const wrapper = mount(
            <Accordion type="persistent">
                <div title="Item 1">
                    This is item 1
                </div>
                <div title="Item 2">
                    This is item 2
                </div>
                <div title="Item 3">
                    This is item 3
                </div>
            </Accordion>
        )
        const firstButton = wrapper.find('button').first()
        const secondButton = wrapper.find('button').at(1)

        // Opens 2 sections
        firstButton.simulate('click')
        wrapper.update()

        secondButton.simulate('click')
        wrapper.update()

        let sections = wrapper.find("[status='open']")

        expect(sections.length).toEqual(2)

        // Closes an open section
        firstButton.simulate('click')
        wrapper.update()

        sections = wrapper.find("[status='open']")

        expect(sections.length).toEqual(2)
    })
})