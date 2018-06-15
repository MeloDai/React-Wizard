import React, {Component} from "react";
import Stepper from "../stepper/stepper";
import DWJson from "../../../staticJs/setting";

export default class StepContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        const {wizardProps} = this.props;
        const stepContainerClass = "md-wizard-step-container-" +  wizardProps.props.step.container.model;

        const {slides} =  DWJson.model.Wizard;

        return(
            <div
                className={stepContainerClass}
            >
                {
                   slides.map((slide, index)=>{
                        return(
                            <Stepper
                                key={index}
                                slide={slide}
                                index={index + 1}
                                wizardProps={wizardProps}
                            />
                        );
                    })
                }
            </div>
        );
    }
}