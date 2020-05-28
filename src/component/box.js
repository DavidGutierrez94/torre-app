import React from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import MediaCard from './card';
import './box.css';



class Box extends React.Component{
    render(){
        
        return(
            
        <Grid  container spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={0} className="main">
                    <form noValidate autoComplete="off">
                                <TextField id="outlined-basic" label="Search" variant="outlined" />
                    </form>
                    <Button onClick={()=>{this.props.handleClick()}} variant="contained" color="primary" > <SearchIcon/></Button>
                    
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={0} className="main">
                    <MediaCard  />
                   
               
                </Grid>
            </Grid>
        </Grid>
               
  
        )
    }
}

export default Box;