import React from "react";
import { fetchStreams } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams(); //action-creater
  }

  renderAdmin(stream) {
    if (this.props.currentUserId === stream.userId) {
      return (
        <div className="right floated content">
          <Link to={`/stream/edit/${stream.id}`}className="ui black button">Edit</Link>
          <Link to={ `/stream/delete/${stream.id}`}className="ui negative button">Delete</Link>
        </div>
      );
    }
  }
  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div
          className="item ui segment"
          key={stream.id}
          style={{ padding: "15px" }}
        >
          {this.renderAdmin(stream)}
          <i className="black huge middle aligned camera icon"></i>
          <h4 className="ui content header">
            <Link to={`/stream/${stream.id}`}><div className="header">{stream.title}</div></Link>
            <div className="description">{stream.description}</div>
          </h4>
        </div>
      );
    });
  }

  renderCreateBtn() {
    if (this.props.isSignedIn) {
      return (
        <Link to="/stream/new" className="ui black button">Create Stream</Link>
      )
    }
  }
  render() {
    return (
      <div style={{paddingBottom:"50px"}}>
        <h2>Streams List </h2>
        <div className="ui celled list">{this.renderList()}</div>
        <div style={{ textAlign: "right" }}>
          {this.renderCreateBtn()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
