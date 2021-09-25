import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
class StreamShow extends React.Component {
  constructor() {
    super()
    this.videoRef = React.createRef();
  }
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return <h2>Loading....</h2>;
    }
    return (
      <div className="ui raised segment">
        <video ref={this.videoRef} style={{width:"100%"}} controls/>
            <h1>{this.props.stream.title}</h1>
            <h2>{this.props.stream.description}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
