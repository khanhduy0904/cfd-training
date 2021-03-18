import React from "react";
import Avatar from "./components/Avatar";
import Title from "./components/Title";
import Info from "./components/Info";
import Course from "./components/Course";
import Project from "./components/Project";
import CoursePayment from "./components/CoursePayment";
import Coin from "./components/Coin";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
// import { useAuth } from "../../core/hook/useAuth";
function Profile(props) {
  let login = true;

  // let auth = useAuth();
  const match = useRouteMatch();

  if (!login) return <Redirect to="/" />
  return (
    <>
      <main className="profile" id="main">
        <section>
          <Avatar />
          <div className="container">
            <div className="tab">
              <Title />  
              <div className="tab-content">
                  <Switch>
                      <Route path={`${match.path}/khoa-hoc`} component={Course}/>
                      <Route path={`${match.path}/du-an`} component={Project}/>
                      <Route path={`${match.path}/lich-su-thanh-toan`} component={CoursePayment}/>
                      <Route path={`${match.path}/coin`} component={Coin}/>
                      <Route component={Info}/>
                  </Switch>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;
