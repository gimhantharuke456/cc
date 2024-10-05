import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container'
import Userprofile from './Userprofile';
import { UserDetails } from '../../context/UserContext';
import axios from 'axios';

function ChangePw() {

    
    const {user,setUser} = UserDetails();
    const [id,setId] = useState();

    const [currPass,setCurrPass] = useState();
    const [newPass,setNewpass] = useState();
    const [newPassC,setNewpassC] = useState();


    
    const [name,setName] = useState();
    const [mobile,setMobile] = useState();
    const [userName,setUserName] = useState();
    const [Email,setEmail] = useState();
    const[Role,setRole] = useState();
    const[confirm,setConfirm] = useState(false);



    useEffect(() => {

        setId(user._id)
        console.log(user)
        setName(user.name)
        setMobile(user.mobile)
        setUserName(user.userName)
        setEmail(user.Email)
        setRole(user.Role)

    }, [user, user.userName])


    
    const changePass = async(e) =>{



        e.preventDefault();
        if(newPass !== newPassC){
            alert("Confirm password and new Password must be same")
        }else{

            const newDate = {
                Email,
                Role,
                mobile,
                name,
                userName,
                newPassC,
                id
            }

            await axios.post("http://localhost:8080/authUser/getLogged",{userName:userName,password:newPassC}).then(res =>{
                    // alert("data"+res.data.status)
                     axios.put("http://localhost:8080/authUser/updateUserPassword",newDate).then(newRes =>{
                    alert(newRes.data.status)
                    window.location.reload()
                }).catch(errr =>{
                    alert("From the second part" +errr)
                })
                    setConfirm(true);
                }).catch(err =>{
                    alert(err+"new")
                })
        }


        

    }
    
    
    return (
    <>
    <Userprofile/>
    <Container style={{marginTop : '5%',width : '500px' , border:'1px solid black', padding:'15px', height:'500px'}}>
        <Form onSubmit={changePass}>
            <h1>Change passsword</h1>
            <hr style={{width:'100%'}}></hr>
            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Currect Password</Form.Label>
                <Form.Control type="text" placeholder="Enter current password" onChange={(e)=>{setCurrPass(e.target.value)}} style={{width:'450px'}} required/>
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>New Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your new password" onChange={(e)=>{setNewpass(e.target.value)}} style={{width:'450px'}}required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Confirm New passsword</Form.Label>
                <Form.Control type="password" placeholder="Re-enter your new password" onChange={(e)=>{setNewpassC(e.target.value)}} style={{width:'450px'}}required/>
            </Form.Group>

            <Button variant="primary" type="submit" style={{width:'50%', display:'flex', justifyContent:'center', marginLeft:'25%'}}>
                Change
            </Button>

        </Form>
    </Container>
    </>
  )
}

export default ChangePw