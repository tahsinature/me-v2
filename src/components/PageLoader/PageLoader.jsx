import React from 'react';
import classes from './PageLoader.module.scss';
import colors from '../../constants/colors';

const text = 'LOADING';

const PageLoader = () => {
  return (
    <div className={classes.PageLoader}>
      {text
        .split('')
        .reverse()
        .map((alp, index) => (
          <div className={classes.AlphabetDiv} style={{ color: colors.primaryGreenishColor }} key={index}>
            {alp}
          </div>
        ))}
    </div>
  );
};

export default PageLoader;
