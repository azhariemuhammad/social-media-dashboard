import React, {useState, useEffect} from 'react'
import {baseService} from "./services";


const UseForm = () => {
    const [body, setPostBody] = useState('')
    const [title, setPostTitle] = useState('')
    const [newPost, setNewPost] = useState([])


    useEffect(() => {
        if (newPost) {
            console.log('yeesss')
        }
    }, [])


    async function createNewPost() {
        const newPostData = {
            title: title,
            body: body,
            userId: 1
        }
        const resultPost = await baseService().createPost(newPostData)
        console.log(resultPost.data)
        console.log(newPost, 'newpost')
        const newData = [ ...newPost, resultPost.data,]
        setNewPost(newData)

    }

    const handleSubmit = (e) => {
        if (e) e.preventDefault()
        console.log(body, title)
        // return createNewPost()
    }


    return {
        setPostTitle,
        setPostBody,
        handleSubmit,
        title,
        body,
        newPost,
        setNewPost
    }
}

export default UseForm
