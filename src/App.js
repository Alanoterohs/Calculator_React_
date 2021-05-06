import { Container,
  CssBaseline,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Grid,
  Box,
 } from '@material-ui/core/';
import { grey } from '@material-ui/core/colors';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#161B22',
  },
  typographyOut: {
    fonsSize: '29px',
    fontFamily: 'digital',
    color: 'white',
    textAlign: 'right',
    lineHeight: '35px',
  },
  calculator: {
      border: '1px solid #BDBDBD',
      padding: '5px',
      backgroundColor: '#0D1117',
      width: '335px',
      position: 'relative',
    },
  equal: {
    background: '#004466',
    position: 'absolute',
    height: '130',
    bottom: '6',
  },
  copyright: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#FFFFFF',
    backgroundColor: '#161B22',
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(grey[400]),
    backgroundColor: grey[400],
    height: '65px',
    width: '80px',
    outline: '1.5px solid black',
    fontSize: '20px',
  },
}))(Button);

function Calculator() {
  const classes = useStyles();
  return (
      <div className= {classes.calculator}>
            <Typography className= {classes.typographyOut} >out</Typography>
            <ColorButton style= {{ width: '160px', }}>AC</ColorButton>
            <ColorButton>/</ColorButton>
            <ColorButton>x</ColorButton>
            <ColorButton>7</ColorButton>
            <ColorButton>8</ColorButton>
            <ColorButton>9</ColorButton>
            <ColorButton>-</ColorButton>
            <ColorButton>4</ColorButton>
            <ColorButton>5</ColorButton>
            <ColorButton>6</ColorButton>
            <ColorButton>+</ColorButton>
            <ColorButton>1</ColorButton>
            <ColorButton>2</ColorButton>
            <ColorButton>3</ColorButton>
            <ColorButton style= {{ width: '160px', }}>0</ColorButton>
            <ColorButton>.</ColorButton>
            <ColorButton className= {classes.equal}>=</ColorButton>

    </div>

  );
}

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
    <CssBaseline />
      <div className = {classes.root}>
        <Calculator/>
      </div>
      <div>
        <div className = {classes.copyright}>Made with love by Alan ^_^</div>
      </div>
    </React.Fragment>
  );
}

export default App;
