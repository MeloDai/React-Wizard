import React, {Component} from "react";
import DWJson from "../../../staticJs/setting";

export default class Stepper extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        const {Wizard} = DWJson.model;
        const {wizardProps, slide, index} = this.props;
        const {stepIndex, stepPassed} = wizardProps.stateProps;
        if(!stepPassed['step' + index].passed){
            return null;
        }
        const backgroundClass = index === stepIndex ? "background-focus " : "background-passed ";
        const stepperClass = "text-overflow " +
                            "cursor-pointer " +
                            backgroundClass +
                            "text-align-center " +
                            "md-wizard-step-stepper-size " +
                            "md-wizard-step-stepper-" +  Wizard.stepperModel;

        const {goToStep} = DWJson.model.fun;
        return(
            <div
                className={stepperClass}
                onClick={()=>{
                    goToStep(index);
                }}
            >
                {slide.name}
            </div>
        );
    }
}