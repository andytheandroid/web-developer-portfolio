/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

 
 
class Stuff extends Component {
   
    
    
    render() {

    return (
      <div>
        <h2>Material UI Test</h2>
            <Button variant="contained" color="primary">
      Hello World
    </Button>
    <Card className="card">
      <CardContent>
        <Typography className="title" color="textSecondary">
          Word of the Day
        </Typography>
        <Typography variant="headline" component="h2">
          be
          
          nev
          lent
        </Typography>
        <Typography className="pos" color="textSecondary">
          adjective
        </Typography>
        <Typography component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      
      </div>
    );
  }
}
 
export default Stuff;