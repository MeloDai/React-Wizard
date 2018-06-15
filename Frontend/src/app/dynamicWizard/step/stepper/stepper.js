import React, {Component} from "react";
import DWJson from "../../../staticJs/setting";

export default class Stepper extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        const {wizardProps, slide, index} = this.props;
        const {stepIndex} = wizardProps.stateProps;
        const backgroundClass = index === stepIndex ? "background-focus " : "background-passed ";
        const colorClass = index ===stepIndex ? 'color-white ' : 'color-black ';
        const stepperClass = colorClass +
                            "text-overflow " +
                            "cursor-pointer " +
                            backgroundClass +
                            "text-align-center " +
                            "md-wizard-step-stepper-size " +
                            "md-wizard-step-stepper-" +  wizardProps.props.step.container.model;

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