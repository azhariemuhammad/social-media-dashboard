import React, {useState, useEffect} from 'react';
import { Container } from 'semantic-ui-react'


import {baseService} from '../services'
import UserList from "../components/UserList";

export const UserContainer = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function fetchUserData() {
            const result = await baseService().getAllUsers()

            console.log(result.data)
            setUsers(result.data)
        }
        fetchUserData();
    }, [])

    return (
        <Container>
            <UserList users={users}/>
        </Container>
    )
}
