import React, {Component} from "react";
import DWJson from "../../../staticJs/setting";

export default class WizardBodyContent extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        const {wizardProps} = this.props;
        const {stateProps} = wizardProps;
        const {slides} = DWJson.model.Wizard;
        const {stepIndex} = stateProps;
        return(
            <div
                className='md-wizard-body-content'
            >
                {slides[stepIndex - 1].content}
            </div>
        );
    }
}