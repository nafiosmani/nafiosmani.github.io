import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Users() {
    const { username } = useParams();
    useEffect(() => {
        // fetch('https://api.instagram.com/${username}')
    }, [])
    console.log(username)
    return <h1>{username}</h1>
  }

export default Users;