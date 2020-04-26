import React from 'react';
import {Avatar} from '@material-ui/core';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';

import ThemeToggle from '../Buttons/ThemeToggle/ThemeToggle';
import classes from './NavBar.module.scss';

const NavBar = (props) => {
  const {appState} = props;

  const history = useHistory();

  return (
    <nav className={classes.NavBar}>
      <button className={classes.Button}>
        <Avatar style={{cursor: 'pointer', backgroundColor: appState.appTheme === 'dark' ? '#fff' : '#000'}} onClick={() => history.push('/')}>
          <p style={{color: appState.appTheme === 'dark' ? '#000' : '#fff', paddingTop: '3px'}}>T</p>
        </Avatar>
      </button>
      <ThemeToggle />
    </nav>
  );
};

const mapStateToProps = (state) => ({appState: state.appReducer});

export default connect(mapStateToProps, null)(NavBar);
