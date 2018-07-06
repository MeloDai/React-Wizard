import React, {Component} from "react";
import DWJson from "../../../../staticJs/setting";

export default class WizardBodyTitle extends Component{
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
                className='md-wizard-body-name text-overflow'
            >
                {slides[stepIndex - 1].title}
            </div>
        );
    }
}