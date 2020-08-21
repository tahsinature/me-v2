import React from 'react';
import classes from './PageLoader.module.scss';
import './PageLoader.scss';
import colors from '../../constants/colors';

const PageLoader = () => {
  return (
    <div className={classes.PageLoader}>
      <div class="loader" style={{ '--dot': colors.primaryGreenishColor }}>
        <svg viewBox="0 0 80 80">
          <circle id="test" cx="40" cy="40" r="32"></circle>
        </svg>
      </div>
      <div class="loader triangle" style={{ '--dot': colors.primaryGreenishColor }}>
        <svg viewBox="0 0 86 80">
          <polygon points="43 8 79 72 7 72"></polygon>
        </svg>
      </div>
      <div class="loader" style={{ '--dot': colors.primaryGreenishColor }}>
        <svg viewBox="0 0 80 80">
          <rect x="8" y="8" width="64" height="64"></rect>
        </svg>
      </div>
    </div>
  );
};

export default PageLoader;
