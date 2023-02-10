import React from "react";
import { LoginBg } from "../../assets";
// import "./register.scss";
import { Input, Button, Gap, Link } from "../../components";
import { useHistory } from "react-router-dom";
import './login.scss'

const Login = () => {
  const history = useHistory();
  return (
    <div className='main-page'>
      <div className='left'>
        <img src={LoginBg} alt='LoginBg' className='bg-image' />
      </div>
      <div className='right' style={{ backgroundColor: "#00bbff" }}>
        <p className='regis'>Login</p>
        <Input label='Email' placeholder='Email' />
        <Gap height={10} />
        <Input label='Password' placeholder='Password' />
        <Gap height={15} />
        <Button title='Login' onClick={() => history.push("/")} />
        <Gap height={30} />
        <Gap height={30} />
        <Link title='Belum punya akun. Daftar disini.' onClick={() => history.push("/register")} />
      </div>
    </div>
  );
};

export default Login;
