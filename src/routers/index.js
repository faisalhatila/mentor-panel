import React from "react";
import { Switch, Redirect } from "react-router-dom";
import HomeContainer from "../containers/Home";
import PageNotFound from "../containers/404";
import Route from "./route";
import PvtRoute from "./privateRoute";
import LoginContainer from "../containers/Login";
import Profile from "../containers/Profile";
import MenteesList from "../containers/MenteesList";
import Services from "../containers/Services";
import Report from "../containers/Report";
// import LoginForm from "../containers/LoginForm";
// import SignUpForm from "../containers/SignUpForm";
// import { AboutUs } from "../containers/AboutUs";
// import OurServices from "../containers/OurServices";
// import OurCrew from "../containers/OurCrew";
// import Resources from "../containers/Resources";
// import Community from "../containers/Community";
// import CommunityPostDetail from "../containers/CommunityPostDetail";
// import ContactUs from "../containers/ContactUs";
const Router = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/mentees-list" component={MenteesList} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/report" component={Report} />
      {/* <Route exact path="/about-us" component={AboutUs} />
      <Route exact path="/our-services" component={OurServices} />
      <Route exact path="/our-crew" component={OurCrew} />
      <Route exact path="/resources" component={Resources} />
      <Route exact path="/community" component={Community} />
      <Route
        exact
        path="/community-post-detail"
        component={CommunityPostDetail}
      />
      <Route exact path="/contact-us" component={ContactUs} /> */}
      <PvtRoute exact path="/login" component={LoginContainer} />
      <PvtRoute exact path="/login/:id" component={LoginContainer} />
      {/* <PvtRoute exact path="/login-form" component={LoginForm} />
      <PvtRoute exact path="/sign-up" component={SignUpForm} /> */}
      <Route exact path="/404" component={PageNotFound} />
      <Route exact path="/*" component={() => <Redirect to="/404" />} />
    </Switch>
  );
};

export default Router;
