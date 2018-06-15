import React, {Component} from "react";
import WizardBodyName from "../header/name/name";
import WizardBodyContent from "../content/content";

export default class WizardBodyContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        const {wizardProps} = this.props;
        const wizardBodyContainerClass = "md-wizard-body-container-" +  wizardProps.props.step.container.model;
        return(
            <div
                className={wizardBodyContainerClass}
            >
                <WizardBodyName
                    wizardProps={wizardProps}
                />
                <WizardBodyContent
                    wizardProps={wizardProps}
                />
            </div>
        );
    }
}