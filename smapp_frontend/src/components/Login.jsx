import React from 'react';
import GoogleLogin from 'react-google-login';
import { Navigate, useNavigate } from 'react-router-dom';
import { FcGoogle} from 'react-icons/fc';
import logo from '../assets/logowhite.png';

import { client } from '../client';

const Login = () => {
    const navigate = useNavigate();
    const responseGoogle= (response) => {
        localStorage.setItem('user', JSON.stringify(response.profileObj))

        const { name, googleId, imageUrl } = response.profileObj;

        const doc = {
            _id: googleId,
            _type: 'user',
            userName: name,
            image: imageUrl,
        }
        client.createIfNotExists(doc)
            .then(()  => {
                navigate('/', {replace: true})
            })

}

    return (
        <div className="flex justify-start items-center flex-col h-screen">
            <div className="relative w-full h-full bg-gradient-to-r from-blue-900 via-purple-800 to-pink-700">
                <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0">
                
                    <div className="p-5">
                        <img src={logo} width="130px" alt="logo" />
                    </div>

                    <div className="flex flex-col justify-center items-center text-center mr-4 text-white text-xl p-3 pt-5 pb-10">Einfach & schnell anmelden</div>

                <div className="shadow-2xl">
                    <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
                    render={(renderProps) => (
                        <button
                            type="button"
                            className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            >
                            <FcGoogle className="mr-4"/>  Mit Google anmelden  
                            </button>
                    )}  
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy="single_host_origin"
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;