import React from 'react'
import {
    configure, mount
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AccordionItem from '../AccordionItem'

configure({ adapter: new Adapter() });

describe('AccordionItem', () => {
    it('run the onClick function passed into the object including the item Id as a parameter', () => {
        const onClick = (id) => {
            expect(id).toEqual("my-accordion-item")
        }

        const wrapper = mount(
            <AccordionItem id="my-accordion-item" title='My Accordion Item' onClick={onClick}>
                <div>
                    This is the accordion item content
                </div>
            </AccordionItem>
        )
        const firstButton = wrapper.find('button').first()

        // Clicks on the item to simulate the onClick function
        firstButton.simulate('click')
        wrapper.update()
    })
})