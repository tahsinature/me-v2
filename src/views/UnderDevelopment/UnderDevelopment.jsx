import React from 'react';
import { connect } from 'react-redux';
import Terminal from 'react-animated-term';
import PropTypes from 'prop-types';

import classes from './UnderDevelopment.module.scss';

const UnderDevelopment = props => {
  const { appState, progress } = props;
  const termLines = [{ text: 'Oops! This is under development. ☹️', cmd: true }];
  if (progress) termLines.push({ text: 'But the good news is:', cmd: true }, { text: `The progress is almost ${progress}%`, cmd: true });

  return (
    <div className={classes.UnderDevelopment}>
      <div className={classes.TerminalContainer}>
        <Terminal lines={termLines} interval={80} white={appState.appTheme === 'dark'} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  appState: state.appReducer,
});

UnderDevelopment.propTypes = {
  progress: PropTypes.number,
};

export default connect(mapStateToProps, null)(UnderDevelopment);
