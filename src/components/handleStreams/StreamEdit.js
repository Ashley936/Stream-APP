import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import history from "../../history";
import { fetchStream, updateStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id); //id got from Router from react-router-dom
  }
  /* Direct field rendering won't work bcz component rerenders on props change but form anly rerenders on input value change...
  So we first fetch stream then pass it onto another component
  also reuse code from createStream... (now moved to createForm)*/

  onSubmit = (formValues) => {
    this.props.updateStream(this.props.match.params.id, formValues);
    history.push("/");
  };
  render() {
    if (!this.props.stream) {
      return <div>Loading....</div>;
    }
    return (
      <div>
        <h2> Edit Stream </h2>
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, updateStream })(
  StreamEdit
);
