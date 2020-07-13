import React from 'react';
import {connect} from 'react-redux';

import classes from './Tools.module.scss';

const data = [
  {
    title: 'Lorem, ipsum dolor.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quam iste, esse aut pariatur sit.',
    image: 'https://pbs.twimg.com/profile_images/1224335491899760641/h404B5dU_400x400.jpg',
  },
  {
    title: 'Lorem, ipsum dolor.2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quam iste, esse aut pariatur sit.',
    image: 'https://pbs.twimg.com/profile_images/1224335491899760641/h404B5dU_400x400.jpg',
  },
  {
    title: 'Lorem, ipsum dolor.3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quam iste, esse aut pariatur sit.',
    image: 'https://pbs.twimg.com/profile_images/1224335491899760641/h404B5dU_400x400.jpg',
  },
  {
    title: 'Lorem, ipsum dolor.4',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quam iste, esse aut pariatur sit.',
    image: 'https://pbs.twimg.com/profile_images/1224335491899760641/h404B5dU_400x400.jpg',
  },
];

const getLi = item => (
  <li key={item.title}>
    <div className={classes.ItemTop}>
      <img src={item.image} alt="" />
      <h4>{item.title}</h4>
    </div>
    <p>{item.description}</p>
  </li>
);

const Tools = props => {
  return (
    <div className={classes.Error404}>
      <h1>Tools</h1>
      <ul className={classes.List}>{data.map(ele => getLi(ele))}</ul>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   appState: state.appReducer,
// });

export default connect(null, null)(Tools);
