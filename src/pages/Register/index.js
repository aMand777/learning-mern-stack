import React from "react";
import { RegisterBg } from "../../assets";
import "./register.scss";
import { Input, Button, Gap, Link } from "../../components";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  return (
    <div className='main-page'>
      <div className='left'>
        <img src={RegisterBg} alt='RegisterBg' className='bg-image' />
      </div>
      <div className='right'>
        <p className='regis'>Register</p>
        <Input label='Full Name' placeholder='Full name ..' />
        <Gap height={10} />
        <Input label='Email' placeholder='Email' />
        <Gap height={10} />
        <Input label='Password' placeholder='Password' />
        <Gap height={15} />
        <Button title='Register' onClick={() => history.push("/login")} />
        <Gap height={30} />
        <Link title='Kembali ke login' onClick={() => history.push("/login")} />
      </div>
    </div>
  );
};

export default Register;
