import React, {Component} from "react";
import StepContainer from "../step/container/container";
import WizardBodyContainer from "../wizardBody/container/container";
import WizardController from "../controller/controller";
import WizardTitle from "../title/wizardTitle";
import CircularProgress from '@material-ui/core/CircularProgress';
import DWJson from "../../staticJs/setting";

export default class Wizard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            finished:0,
            stepIndex:0,
            YAMLError:false
        };
    }

    componentWillMount(){
        const {init} = DWJson.staticFun.wizard;
        const YAMLJson = init.YAMLFile.get();
        try{
            if(YAMLJson){
                YAMLJson.then((res)=>{
                    console.log(res);
                    if(res.Wizard){
                        DWJson.model.Wizard = res.Wizard;
                        setTimeout(()=>{
                            this.setState({
                                finished:1,
                                stepIndex:1,
                                stepPassed:init.stepPassed(res.Wizard.slides)
                            });
                        }, 600);
                    }
                })
            }
        }catch (e) {
            console.log(e);
        }
    }

    goToStep(stepNum){
        const {stepPassed} = this.state;
        stepPassed['step' + stepNum].passed = true;
        this.setState({
            stepIndex:stepNum,
            stepPassed:stepPassed
        });
    }

    componentDidMount(){
        DWJson.model.fun.goToStep = this.goToStep.bind(this);
    }

    render(){
        const {finished, stepIndex, stepPassed} = this.state;
        const {Wizard} = DWJson.model;

        const wizardProps = {
            stateProps:{
                stepIndex:stepIndex,
                stepPassed:stepPassed
            }
        };

        return(
            <div
                className='md-wizard-background'
            >
                {
                    finished ?
                        <div
                            className='md-wizard box-shadow-1'
                        >
                            <WizardTitle/>
                            {
                                Wizard.stepperModel === 'none' ?
                                    null
                                    :
                                    <StepContainer
                                        wizardProps={wizardProps}
                                    />
                            }
                            <WizardBodyContainer
                                wizardProps={wizardProps}
                            />
                            <WizardController
                                wizardProps={wizardProps}
                            />
                        </div>
                        :
                        <div
                            className='absolute-center'
                        >
                            <CircularProgress
                                size={50}
                            />
                        </div>
                }
            </div>
        );
    }
}