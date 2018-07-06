import React, {Component} from "react";
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
                <ComposeBtn/>
                <DynamicWizardPage/>
            </div>
        );
    }
}