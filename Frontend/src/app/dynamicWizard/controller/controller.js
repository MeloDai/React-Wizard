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

    apply(){
        console.log("wizard apply");
        /*
        const {fun} = DWJson.model;
        fun.setDisplay(false);//this is let wizard disappear
         */
        return null;
    }

    render(){
        const {wizardProps} = this.props;
        const {stateProps} = wizardProps;
        const {stepIndex} = stateProps;
        const {fun, Wizard} = DWJson.model;
        const wizardControllerClass = "md-wizard-controller-" + Wizard.stepperModel;
        const {goToStep} = fun;
        const {slides} = Wizard;
        return(
            <div
                className={wizardControllerClass}
            >
                <Button
                    variant="contained"
                    className='cancel-btn'
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
                                className='padding-left-5 padding-6-0 primary-btn'
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
                                className="margin-left-15 primary-btn"
                                onClick={this.apply.bind(this)}
                            >
                                Apply
                            </Button>
                            :
                            <Button
                                variant="contained"
                                className="margin-left-15 padding-right-5 padding-6-0 primary-btn"
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