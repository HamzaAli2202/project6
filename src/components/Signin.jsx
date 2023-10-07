import { useState } from "react";
import React from "react";
import { Grid,Button,Card,CardContent,TextField } from "@mui/material";

export const Signin=()=>{
    const [username,setUsername]=useState('');
    const [emailid,setEmailid]=useState('');
    const [mobile,setMobile]=useState(0);
    const [password,setPassword]=useState('');
    const [cnfpassword,setCnfpassword]=useState('');

    const handleClear=()=>{
        setUsername('');
        setEmailid('');
        setMobile('');
        setPassword('');
        setCnfpassword('');
    }
    const handleSubmit=()=>{
        alert("Thanks for Submitting")
    }
    return(
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Card>
                    <CardContent>
                        <Grid container spacing={2}>
                        <Grid item xs={12}>

                        <h3>SING IN</h3>
                        </Grid>
                        <Grid item xs={12}>
                        <TextField value={username} variant="outlined" label="username" onChange={(e)=>setUsername(e.target.value)} fullWidth/>
                        </Grid>
                        <Grid item xs={12}>
                        <TextField value={emailid} variant="outlined" label="email id" onChange={(e)=>setEmailid(e.target.value)} fullWidth/>
                        </Grid>
                        <Grid item xs={12}>
                        <TextField value={mobile} variant="outlined" label="Enter Mobile Number" onChange={(e)=>setMobile(e.target.value)} fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField value={password} variant="outlined" label="Enter Password" onChange={(e)=>setPassword(e.target.value)} fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField value={cnfpassword} variant="outlined" label="Confirm Password" onChange={(e)=>setCnfpassword(e.target.value)} fullWidth />
                        </Grid>
                        <Grid item xs={6}></Grid>
                        <Grid item xs={3}>
                            <Button onClick={(handleSubmit)} variant="contained" color="success" fullWidth>Submit</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button onClick={(handleClear)} variant="contained" color="warning" fullWidth>Cancel</Button>
                        </Grid>
                        </Grid>
                        
                    </CardContent>
                </Card>
            </Grid>

                <Grid item xs={8}>
                    <Card>
                        <CardContent>
                            <Grid container spacing={3}>
                                <Grid item xs={4}><h3>User Name : </h3></Grid>
                                <Grid item xs={8}><h3>{username }</h3></Grid>
                                <Grid item xs={4}><h3>Email i'd : </h3></Grid>
                                <Grid item xs={8}><h3>{emailid}</h3></Grid>
                                <Grid item xs={4}><h3>Mobile : </h3></Grid>
                                <Grid item xs={8}><h3>{mobile}</h3></Grid>
                                <Grid item xs={4}><h3>Password : </h3></Grid>
                                <Grid item xs={8}><h3>{password}</h3></Grid>
                                <Grid item xs={4}><h3>Confirm Password</h3></Grid>
                                <Grid item xs={8}><h3>{cnfpassword}</h3></Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

            
        </Grid>
    )
}