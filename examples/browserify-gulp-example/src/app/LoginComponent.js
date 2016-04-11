
import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Dialog from 'material-ui/lib/dialog';
import {darkBlack} from 'material-ui/lib/styles/colors';
import FlatButton from 'material-ui/lib/flat-button';
import EnhancedButton from 'material-ui/lib/flat-button';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import Divider from 'material-ui/lib/divider';
import NapkyTheme from './NapkyTheme';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';


const style = {
  height: '20rem',
  width: '30rem',
  maxWidth: 'none',
  paddingTop: '1rem',
  textAlign: 'center',
  display: 'inline-block'
}

const styleText = {
  width: '25rem',
  marginBottom: '2rem',
  textAlign: 'center',
  display: 'inline-block'
}

const styleButton = {
  width: '25rem',
  marginBottom: '2rem',
  textAlign: 'center',
  display: 'inline-block'
}

class LoginComponent extends React.Component {
  constructor() {
    super();
  }

  handleChange(text){
    console.log(this.refs);
    console.log("Text : " + text)
  }

  handleLogin(){
    let password = this.refs.password.getValue();
    let username  = this.refs.username.getValue();
    console.log(username);
    console.log(password);

    if(password == '21251122' && username == 'napky')
      console.log('Login Successful');
  }

  render(){
    return(
      <Paper style={style} zDepth={4} className="login-component">
        <form>
          <div className="text-center">
              <TextField
                ref="username"
                style={styleText}
                hintText="Password Field"
                floatingLabelText="Username"
                onChange={this.handleChange.bind(this)}
              /><br/>
              <TextField
                ref="password"
                style={styleText}
                hintText="Password Field"
                floatingLabelText="Password"
                type="password"
                defaultVaule=""
                onChange={this.handleChange}
              /><br/>
              <RaisedButton
                label="Login"  
                style={styleButton} 
                onTouchTap={this.handleLogin.bind(this)} 
                className="login-submit"
                primary={true}
              />
          </div>
        </form>
      </Paper>
    );
  }
}

export default LoginComponent;
