import React, {useState, useEffect, useReducer} from 'react'
import {Button, Form} from "semantic-ui-react";

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import * as actionsPosts from '../actions/postsAction'

function FormCompose (props) {
    const [title, setPostTitle] = useState('')
    const [body, setPostBody] = useState('')

    useEffect(() => {
        if (props.isEdit) {
            setPostTitle(props.post.title)
            setPostBody(props.post.body)
        }
    }, [])

    const handleSubmit = async (e) => {
        if (e) e.preventDefault()
        const newPost = {body, title, userId: props.id}

        if (!props.isEdit) {
            props.posts.addNewPost(newPost)
        } else {
            const editedPost = {body, title, userId: props.post.userId, id: props.post.id}
            await props.posts.editPost(editedPost)
            await props.handleModal(false)
        }
    }

    const closeModal = () => {
        props.handleModal(false)
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
            <Button
                content={props.isEdit ? 'Edit' : 'Compose'}
                onClick={handleSubmit} labelPosition='left' icon='edit' primary />
            {props.isEdit && <Button content='close' onClick={closeModal} labelPosition='right' icon='close' />}
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

