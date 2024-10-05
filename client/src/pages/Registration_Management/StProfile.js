import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
//import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Userprofile from './Userprofile';
import { UserDetails } from '../../context/UserContext';


function StProfile() {
        const {user,setUser} = UserDetails();

        const [name,setName] = useState();
        const [mobile,setMobile] = useState();
        const [userName,setUserName] = useState();
        const [Email,setEmail] = useState();

        // console.log(user)

        useEffect(() => {
                setName(user.name)
                setMobile(user.mobile)
                setUserName(user.userName)
                setEmail(user.Email)
        }, [user.Email, user.mobile, user.name, user.userName])
        



  return (
        <>
        <Userprofile/>
    <Container style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center', border:"2px solid black", borderRadius:"10px", marginBottom:"25px", padding:"30px"}}>  

    <h1 style={{display:"flex", justifyContent:"center",marginBottom:"20px"}}>User profile</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail" style={{justifyContent:'center'}}>
                <Form.Label>Full name</Form.Label>
                <Form.Control type="text" value = {name} />               

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail" style={{justifyContent:'center'}}>
                <Form.Label>Mobile number</Form.Label>
                <Form.Control type="text" value = {mobile} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail" style={{justifyContent:'center'}}>
                <Form.Label>Whatsapp number</Form.Label>
                <Form.Control type="text" value = {mobile} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail" style={{justifyContent:'center'}}>
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" value = {Email} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail" style={{justifyContent:'center'}}>
                <Form.Label>User name</Form.Label>
                <Form.Control type="text" value = {userName} />
        </Form.Group>

      {/* <Button variant="primary" type="submit" style={{width:'20%'}}>
            <a href='/EditUserProfile' style={{textDecoration:'none', color:'white'}}>Edit profile</a>
      </Button> */}
    </Container>
    </>
  )
}

export default StProfile

