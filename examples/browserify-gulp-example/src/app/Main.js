/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */

import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Dialog from 'material-ui/lib/dialog';

import {indigo700} from 'material-ui/lib/styles/colors';
import {green500} from 'material-ui/lib/styles/colors';
import {grey300} from 'material-ui/lib/styles/colors';
import {white} from 'material-ui/lib/styles/colors';
import {grey900} from 'material-ui/lib/styles/colors';

import FlatButton from 'material-ui/lib/flat-button';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';

import Login from './LoginComponent';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#3F51B5',
    primary2Color: '#C5CAE9',
    primary3Color: '#303F9F',
    accent1Color: '#C5CAE9',
    accent2Color: '#C5CAE9',
    accent3Color: '#C5CAE9',
    textColor: '#212121',
    alternateTextColor: '#fff',
    canvasColor: white,
    borderColor: '#B6B6B6',
  },
});

class Main extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        secondary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
          <div className="row center-xs middle-xs login-wrapper">
              <div className="col-xs-6">
                  <Login></Login>
              </div>
          </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;