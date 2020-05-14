import React from 'react'
import renderer from 'react-test-renderer'
import SideMenu from '../SideMenu'
import { MdStar } from 'react-icons/md'

test('Menu renders correctly', () => {
    const component = renderer.create(
        <SideMenu menu={[
            {
                icon: MdStar,
                text: "Test",
                link: "/test"
            },
            {
                hr: true
            }
        ]} />
    )
    let tree = component.toJSON()
    expect( tree ).toMatchSnapshot()
})
