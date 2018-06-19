import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import {ChevronLeft, ChevronRight} from '@material-ui/icons';
import DWJson from "../../staticJs/setting";

export default class WizardController extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        const {wizardProps} = this.props;
        const {props, stateProps} = wizardProps;
        const {stepIndex} = stateProps;
        const wizardControllerClass = "md-wizard-controller-" + props.step.container.model;
        const {fun, Wizard} = DWJson.model;
        const {goToStep} = fun;
        const {slides} = Wizard;
        return(
            <div
                className={wizardControllerClass}
            >
                <Button
                    variant="contained"
                    color="default"
                    onClick={()=>{
                        fun.setDisplay(false);
                    }}
                >
                    Cancel
                </Button>
                <div
                    className="float-right"
                >
                    {
                        stepIndex === 1 ?
                            null
                            :
                            <Button
                                variant="contained"
                                color="primary"
                                className='padding-left-5 padding-6-0'
                                onClick={()=>{
                                    goToStep(stepIndex - 1);
                                }}
                            >
                                <ChevronLeft/>
                                Back
                            </Button>
                    }
                    {
                        slides.length === stepIndex ?
                            <Button
                                variant="contained"
                                color="primary"
                                className="margin-left-15"
                            >
                                Apply
                            </Button>
                            :
                            <Button
                                variant="contained"
                                color="primary"
                                className="margin-left-15 padding-right-5 padding-6-0"
                                onClick={()=>{
                                    goToStep(stepIndex + 1);
                                }}
                            >
                                Next
                                <ChevronRight/>
                            </Button>
                    }
                </div>
            </div>
        );
    }
}