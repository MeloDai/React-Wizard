import React, {Component} from "react";
import LeftMenuContainer from "../leftMenu/container/container";
import HeaderContainer from "../header/container/container";
import BodyContainer from "../body/container/container";
import ComposeBtn from "../composeBtn/composeBtn";
import DynamicWizardPage from "../dynamicWizardPage/page";

export default class MainPage extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <div>
                <HeaderContainer/>
                <LeftMenuContainer/>
                <BodyContainer/>
                <ComposeBtn/>
                <DynamicWizardPage/>
            </div>
        );
    }
}