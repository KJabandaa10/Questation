import React from "react";
import { connect } from "react-redux";
import SheetPreview from "./SheetPreview";

class Answers extends React.Component {
  renderSheets = () => {
    return this.props.class.map((question, index) => {
      return <SheetPreview data={question} sheet={index + 1} answersBool />;
    });
  };

  render() {
    return (
      <div>
        <p>Answers</p>
        {this.renderSheets()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { answers: state.answersReducer, class: state.classReducer };
};

export default connect(mapStateToProps, {})(Answers);
