import Modal from "../Modal";
import history from "../../history";
import React from "react";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  onDismiss = (e) => {
    history.push("/");
  };
  actions = () => {
    return (
      <React.Fragment>
        <button className="ui button" onClick={() => history.push("/")}>
          Cancel
        </button>
        <button
          className="ui negative button"
          onClick={() => {
            this.props.deleteStream(this.props.stream.id);
            history.push("/");
          }}
        >
          Delete
        </button>
      </React.Fragment>
    );
  };
  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream ?";
    }
    return `Are you sure you want to delete the stream with the title : ${this.props.stream.title} ?`;
  }
  render() {
    return (
      <Modal
        header="Delete Stream"
        content={this.renderContent()}
        onDismiss={this.onDismiss}
        actions={this.actions}
      />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, {
  fetchStream,
  deleteStream,
})(StreamDelete);
