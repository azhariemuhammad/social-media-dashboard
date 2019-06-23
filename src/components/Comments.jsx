import React, {useEffect} from 'react'
import {Comment, Header} from 'semantic-ui-react'

import avatar from '../assets/images/jenny.jpg';
import avatar2 from '../assets/images/elliot.jpg';


const Comments = ({comments}) => {
    return (

        <Comment.Group>
            <Header as='h3' dividing>
                Comments
            </Header>
            {
                (comments.length > 0) &&
                comments.map((comment, idx) => {
                    return (
                    <Comment key={idx}>
                        <Comment.Avatar src={(idx % 2 === 0) ? avatar : avatar2}/>
                        <Comment.Content>
                            <Comment.Author as='a'>{comment.email}</Comment.Author>
                            <Comment.Metadata>
                                <div>{comment.name}</div>
                            </Comment.Metadata>
                            <Comment.Text>{comment.body}</Comment.Text>
                        </Comment.Content>
                    </Comment>
                )
                })
            }
        </Comment.Group>


    )
}


export default Comments
