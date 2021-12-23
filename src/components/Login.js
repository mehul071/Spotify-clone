import React from 'react'
import './Login.css'
import {loginUrl} from '../spotify';

function Login() {
    return (
      <div className='main'>
        <div className="login">
            <img 
              src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
              alt=""
              />
              <a href={loginUrl} className="text-white rounded-full">Login with spotify</a>
        </div>
      </div>
    )
}

export default Login
