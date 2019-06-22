import React, {useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import {Card, Feed} from 'semantic-ui-react'

import avatar from '../assets/images/jenny.jpg';
import avatar2 from '../assets/images/elliot.jpg';
import UseChooseUser from "../customHooks";
import {Link} from 'react-router-dom'


const UserList = ({users}) => {
    return (
        <Card>
            <Card.Content>
                <Card.Header>Choose User</Card.Header>
            </Card.Content>
            <Card.Content>
                <Feed>
                    {
                        (users.length > 0) &&
                        users.map((user, idx) => {
                            return (
                                <Link to={`/${user.id}`} key={idx}>
                                    <Feed>
                                    <Feed.Event >
                                        <Feed.Label image={(idx % 2 === 0) ? avatar : avatar2}/>
                                        <Feed.Content>
                                            <Feed.Date content={user.username}/>
                                        </Feed.Content>
                                    </Feed.Event>
                                    </Feed>
                                </Link>
                            )
                        })
                    }
                </Feed>
            </Card.Content>
        </Card>
    )
}


// this also works with react-router-native


export default UserList
