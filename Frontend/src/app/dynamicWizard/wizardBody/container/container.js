import React, {Component} from "react";
import WizardBodyName from "../header/name/name";
import WizardBodyContent from "../content/content";
import DWJson from "../../../staticJs/setting";

export default class WizardBodyContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        const {wizardProps} = this.props;
        const {Wizard} = DWJson.model;
        const wizardBodyContainerClass = "md-wizard-body-container-" +  Wizard.stepperModel;
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