import React from "react";
import PropTypes from 'prop-types';
import "./App.css";
import { SampleContent } from "./features/sample-content/SampleContent";

function App(props) {
  return (
    <div className="app-container">
      <div className="app-container-body">
        <SampleContent interactionId={props.interactionId} ></SampleContent>
      </div>
    </div>

  );

}

App.propTypes = {
  interactionId: PropTypes.string
}

export default App;
