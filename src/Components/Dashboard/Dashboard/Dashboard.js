import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Orders from "../Orders/Orders";
import Sidebar from "../Sidebar/Sidebar";
import AddReview from "../AddReview/AddReview";
import AddServices from "../AddServices/AddServices";
import AddAdmin from "../AddAdmin/AddAdmin";
import CustomerOrders from "../CustomerOrders/CustomerOrders";

const Dashboard = () => {
  return (
    <Router>
      <div className="w-100 row">
        <Sidebar></Sidebar>
        <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/customerOrders">
            <CustomerOrders />
          </Route>
          <Route path="/addReview">
            <AddReview />
          </Route>
          <Route path="/addServices">
            <AddServices />
          </Route>
          <Route path="/addAdmin">
            <AddAdmin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Dashboard;
