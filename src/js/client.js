import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Repo from "./pages/Repo";

const app = document.getElementById('app');

ReactDOM.render(
    <Router>
        <Layout>
            <Route exact path="/repo" component={Repo}></Route>
        </Layout>
    
    </Router>,
app);