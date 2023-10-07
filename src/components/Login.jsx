import React from "react";
import { Grid,TextField,Button,Card,CardContent} from "@mui/material";
 export const Login=()=>{
    return(
        <Grid container spacing={2}>
            <Grid item xs={4.5}></Grid>
            <Grid item xs={3}>
                <Card>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <h1>Login</h1>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth variant="outlined" label="Email" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth variant="outlined" label="Password" />
                            </Grid>
                            <Grid item xs={12}>
                                <Button style={{height:55}} variant="contained" color="primary" fullWidth>login</Button>
                            </Grid>
                            <Grid item xs={12}>
                                <h4>Not a Member?  <span>Signup Now</span></h4>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4.5}></Grid>
        </Grid>
    )
}