import React from "react";
import { Button,Grid } from "@mui/material";
export const Gridpracticrass=()=>{
    return(
        <div className="sub">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Button variant="contained" color="success" fullWidth>Item1</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color="warning" fullWidth>Item2</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" color="error" fullWidth>Item3</Button>
                    </Grid>
            <Grid item xs={4}>
                <Button variant="contained" color="info" fullWidth>Item4</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" color="primary" fullWidth>Item5</Button>
                </Grid>
                <Grid item xs={8}>
                    <Button variant="contained" color="secondary" fullWidth>Item6</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" color="warning" fullWidth>Item7</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" color="info" fullWidth>Item8</Button>
                </Grid>
                <Grid item xs={8}>
                    <Button variant="contained" color="warning" fullWidth>Item9</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" color="error" fullWidth>Item10</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" color="success" fullWidth>Item11</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" color="secondary" fullWidth>Item12</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" color="error" fullWidth>Item13</Button>
                </Grid>
            </Grid>

        </div>
    )
}
