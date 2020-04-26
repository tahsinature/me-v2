import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Terminal from 'react-animated-term';
import 'react-animated-term/dist/react-animated-term.css';

const termLines = [
  {
    text: 'npx tahsin',
    cmd: true,
    delay: 50,
  },
];

const NpxTahsin = (props) => {
  const {appState} = props;

  const [show, toggleShow] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      refresh();
    }, 5000);

    return () => clearInterval(id);
  }, []);

  const refresh = () => {
    toggleShow(false);
    toggleShow(true);
  };

  return (
    <>
      {/* <p>or cli</p> */}
      <div>{show ? <Terminal height={100} lines={termLines} interval={80} white={appState.appTheme === 'dark'} /> : null}</div>
    </>
  );
};

const mapStateToProps = (state) => ({
  appState: state.appReducer,
});

export default connect(mapStateToProps, null)(NpxTahsin);
