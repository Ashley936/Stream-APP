import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
import history from "../history";
class GoogleAuth extends React.Component {
  componentDidMount() {
    if (!navigator.onLine) {
      history.push("/error");
      return;
    }
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          //async request (init return promise)
          clientId:
            "1043646989670-bvqse8altknsef8bqdg4vrgn291f8446.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange); //onAuthChange funtion is called every time isSignedIn changes
        });
      // add a catch callback here
    }); //loads the required auth library when the component is mounted (already rendered on screen)
  }

  //Always use arrorw functions for callbacks
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId()); //action creater is called => goes to reducer & changes state
    } else {
      this.props.signOut();
    }
  };

  toSignIn = () => {
    this.auth.signIn();
  };
  toSignOut = () => {
    this.auth.signOut();
    history.push("/");
  };
  renderButton() {
    if (this.props.auth.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.toSignOut}>
          <i className="google icon"></i>
          Sign Out
        </button>
      );
    }
    return (
      <button className="ui red google button" onClick={this.toSignIn}>
        <i className="google icon"></i>
        Sign In
      </button>
    );
  }

  render() {
    return <div className="item">{this.renderButton()}</div>;
  }
}
const mapStateToProps = (state) => {
  return { ...state };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
