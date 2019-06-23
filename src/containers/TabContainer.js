import React from 'react'
import {Container, Tab} from 'semantic-ui-react'
import PostsContainer from "./PostContainer";
import AlbumsContainer from "./AlbumContainer";


const panes = [
    {menuItem: 'Posts', render: () => <Tab.Pane><PostsContainer /></Tab.Pane>},
    {menuItem: 'Albums', render: () => <Tab.Pane><AlbumsContainer /></Tab.Pane>},
]

const TabContainer = () => {
    return (
        <Container>
            <Tab panes={panes}/>
        </Container>
    )
}

export default TabContainer
