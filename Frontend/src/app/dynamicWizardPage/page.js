import React, {Component} from "react";
import Wizard from "../dynamicWizard/wizard/wizard";
import FrameWork from "../frameWork/frameWork";
import DWJson from "../staticJs/setting";

export default class DynamicWizardPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            display:false
        };
    }

    setDisplay(display){
        this.setState({
            display:display
        });
    }

    componentDidMount(){
        DWJson.model.fun.setDisplay = this.setDisplay.bind(this);
    }

    render(){
        const {display} = this.state;

        if(!display){
            return null;
        }
        return(
            <FrameWork
                content={
                    <Wizard/>
                }
            />
        );
    }
}