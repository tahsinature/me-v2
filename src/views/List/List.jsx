import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import classes from './List.module.scss';

const getLiElement = item => (
  <li key={item.title}>
    <div className={classes.ItemTop}>
      <img src={item.image} alt="" />
      <h4>{item.title}</h4>
    </div>
    <p>{item.description}</p>
  </li>
);

const Tools = props => {
  const { listTitle, data = [] } = props;
  return (
    <div>
      <h1 className={classes.ListTitle}>{listTitle || 'List'}</h1>
      <ul className={classes.List}>{data.map(ele => getLiElement(ele))}</ul>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   appState: state.appReducer,
// });

Tools.propTypes = {
  listTitle: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default connect(null, null)(Tools);
