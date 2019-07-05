import React, { lazy, Fragment, Suspense, Component } from "react";
import { observer, inject } from 'mobx-react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import Player from "@/components/Player";
import routes from "@/router/web";
import Loading from "@/components/Common/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


@inject('layoutStore')
@observer
export default class Routers extends Component {
  componentDidMount() {
    const { layoutStore } = this.props
    layoutStore.getPlayerList()
  }
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Header {...this.props} />
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/home" push />}
              />
              {routes.map(({ path, component }, index) => (
                <Route
                  key={index}
                  exact
                  path={path}
                  component={component}
                />
              ))}
            </Switch>
          </Suspense>
          <ToastContainer />
          <Footer />
          {/* <BackTop visibilityHeight="100" /> */}
          <Player />
        </BrowserRouter>
      </Fragment>
    );
  }
}
