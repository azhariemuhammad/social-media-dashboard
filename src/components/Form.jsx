import React, {useState, useEffect, useReducer} from 'react'
import {Button, Form} from "semantic-ui-react";

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import * as actionsPosts from '../actions/postsAction'

function FormCompose (props) {
    const [title, setPostTitle] = useState('')
    const [body, setPostBody] = useState('')

    const handleSubmit = (e) => {
        if (e) e.preventDefault()
        const newPost = {body, title, userId:1}
        props.posts.addNewPost(newPost)

    }

    return (
        <Form reply>
            <Form.Input
                name='title'
                value={title || ''}
                onChange={e => setPostTitle(e.target.value)} />
            <Form.TextArea
                onChange={e => setPostBody(e.target.value)}
                name='body'
                value={body || ''}  />
            <Button content='Compose' onClick={handleSubmit} labelPosition='left' icon='edit' primary />
        </Form>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        posts: bindActionCreators(actionsPosts, dispatch),
    }
}

FormCompose = connect(null, mapDispatchToProps)(FormCompose)
export default FormCompose

