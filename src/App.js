import { Container,
  CssBaseline,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
 } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

import React from 'react';

const useStyles = makeStyles((theme) => ({
  copyright: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#FFFFFF',
  },
}));

function Calculator() {
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Typography>Output</Typography>
        </CardContent>
        <CardContent>
        <CardActions>
          <Button>AC</Button>
          <Button>/</Button>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>0</Button>
          <Button>.</Button>
        </CardActions>
        <CardActions>
          <Button>x</Button>
          <Button>-</Button>
          <Button>+</Button>
          <Button>=</Button>
        </CardActions>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
    <CssBaseline />
      <Container maxWidth="lg" style = {{ backgroundColor: '#161B22' }}>
        <Calculator/>
        <div className = {classes.copyright}>Made with love by Alan :3</div>
      </Container>
    </React.Fragment>
  );
}

export default App;
