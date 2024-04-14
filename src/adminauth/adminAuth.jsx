import React, { useState } from 'react';
import './adminauth.css';

import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import { SIGNIN_URL } from '../URLconstants';

const UserAuth = () => {
    const history = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [btndisabled, setbtnDisabled] = useState(false)

    const onSignIn = async () => {
        setbtnDisabled(true)
        try {
            const response = await axios({
                method: 'post', url: SIGNIN_URL, data: {
                    username: username,
                    password: password,
                }
            });

            if (response && response.status === 200) {
                toast.success("Login Succesfull");
                history("/adminpage")

            }
            setUsername('')
            setPassword('')
        }

        catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
            } else if (error.request) {
                toast.error('No response received from the server');
            } else {
                toast.error('Error: ' + error.message);
            }
        }

        setbtnDisabled(false)
    }
    return (
        <div className='bg-color'>
            <div className="container-fluid">
                <div className='row'>
                    <div className='col-sm-6' style={{ paddingLefteft: '39px' }}>
                        {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                            className="custom-img" alt="" style={{ width: '170%', height: '100%' }} /> */}
                    </div>
                    <div className='col-sm-6'>
                        <div className={`vertical-center border-style login-page`}>
                            <div className='text-center'>
                                {/* <img src={logo}
                                height="25"
                                width={25} alt="logo" className="mt-2" /> */}
                                <p className='logo-header'>Barber House</p>
                            </div>
                            <p className='margin-bottom2'>Username</p>
                            <input type='text' placeholder="username" onChange={(e) => setUsername(e.target.value)} className='form-control mb-4' value={username}/>
                            <p className='margin-bottom2'>Password</p>
                            <input type='password' placeholder="password" onChange={(e) => setPassword(e.target.value)} className='form-control mb-4' value={password}/>
                            <button className='btn-sign mt-3' onClick={() => { onSignIn() }} disabled={btndisabled}>Sign In</button>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default UserAuth;