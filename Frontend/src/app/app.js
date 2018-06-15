import React, {Component} from "react";
import "es6-promise/auto";

import { HashRouter as Router, Route, Link } from "react-router-dom";
import {render} from "react-dom";
import DynamicWizardPage from "./dynamicWizardPage/page";
import DWJson from "./staticJs/setting";
import MainPage from "./main/main";

const {router} = DWJson.config.path;
window.location.hash = router.main;

render((
    <Router>
        <div>
            <Route path={router.main} component={MainPage} />
            <Route path={router.dynamicWizard} component={DynamicWizardPage} />
        </div>
    </Router>
), document.getElementById('app'));

