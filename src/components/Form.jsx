import React, {useState, useEffect} from 'react'
import {Button, Form} from "semantic-ui-react";
import UseForm from "../customHooks";

const FormCompose = () => {
    const {body, title, setPostBody, setPostTitle, handleSubmit} = UseForm()
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

export default FormCompose
