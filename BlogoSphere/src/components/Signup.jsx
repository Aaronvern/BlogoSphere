import React ,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { login } from '../features/auth/authSlice';
import Button from './Button';
import Input from './Input';
import Logo from './logo';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import {useForm} from 'react-hook-form'

const Signup = () => {
    return (
        <div>
            
        </div>
    );
};

export default Signup;