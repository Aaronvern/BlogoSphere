import React from 'react';
import {useDispatch} from 'react-redux'
import { logout } from '../../features/auth/authSlice.js'
import authService from '../../appwrite/auth.js';
const LogoutBtn = () => {
    const dispatch = useDispatch();
    const logoutHandler = ()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }

    return (
        <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            onClick={logoutHandler}
        >
            logout
        </button>
    );
};

export default LogoutBtn;