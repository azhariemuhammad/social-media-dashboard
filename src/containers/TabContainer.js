import React from 'react'
import {Container, Tab} from 'semantic-ui-react'
import PostsContainer from "./PostContainer";


const panes = [
    {menuItem: 'Tab 1', render: () => <Tab.Pane><PostsContainer /></Tab.Pane>},
    {menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>},
    {menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>},
]

const TabContainer = () => {
    return (
        <Container>
            <Tab panes={panes}/>
        </Container>
    )
}

export default TabContainer
