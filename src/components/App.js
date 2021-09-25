import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

import StreamShow from "./handleStreams/SreamShow";
import StreamCreate from "./handleStreams/StreamCreate";
import StreamDelete from "./handleStreams/StreamDelete";
import StreamEdit from "./handleStreams/StreamEdit";
import StreamList from "./handleStreams/StreamList";
import Header from "./Header";
import Error404 from "./Error404";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/stream/new" exact component={StreamCreate} />
            <Route path="/stream/edit/:id" exact component={StreamEdit} />
            <Route path="/stream/delete/:id" exact component={StreamDelete} />
            <Route path="/stream/:id" exact component={StreamShow} />
            <Route path="/error" component={Error404} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
