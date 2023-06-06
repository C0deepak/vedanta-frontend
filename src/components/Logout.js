import React, { useEffect, useContext } from 'react'
import { UserContext } from '../App'
import { useNavigate } from 'react-router-dom'

const Logout = () => {

    const { state, dispatch } = useContext(UserContext)
    const navigate = useNavigate()
    useEffect(() => {
        fetch('/api/v1/logout', {
            method: 'GET',
            headers: {
                Accept: 'appllication/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then((res) => {
            dispatch({type: 'USER', payload: false})
            navigate('/auth')
            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error
            }
        }).catch((err) => {
            console.log(err)
        })
    })

    return (
        <div>Logout</div>
    )
}

export default Logout