import React from "react";
import { Grid,Button } from "@mui/material";

export const Color=()=>{
    return(
        <div>
            <h1>Material UI Grid</h1>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Button variant="contained" fullWidth color="warning">01.Warning</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" fullWidth color="success">02.Success</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" fullWidth color="error">03.Error</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" fullWidth color="primary">04.Primary</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" fullWidth color="primary">05.Primary</Button>
                </Grid>
                <Grid item xs={8}>
                    <Button variant="contained" fullWidth color="secondary">06.Secondary</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" fullWidth color="warning">07.Warning</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained" fullWidth color="info">08.Info</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" fullWidth color="error">09.Error</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained" fullWidth color="warning">10.Warning</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" fullWidth color="primary">11.Primary</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" fullWidth color="secondary">12.Secondary</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained" fullWidth color="success">13.Success</Button>
                </Grid>
            </Grid>
        </div>
    )
}