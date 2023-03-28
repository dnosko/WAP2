import  { React, useEffect, useState } from 'react';
import axios from 'axios';

export function useAuth(){
    const [accessToken, setAccessToken] = useState()

    useEffect(()=>{
        axios.get('http://localhost:3001/token').then(res => {
            setAccessToken(res.data.access_token)
        }).catch(() => {
            window.location= '/'
        })
    }, [])

    return accessToken
};