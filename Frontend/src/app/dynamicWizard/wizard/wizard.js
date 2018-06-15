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
            stepIndex:0
        };
    }

    componentWillMount(){
        const YAMLJson = DWJson.staticFun.init.YAMLFile.get();
        try{
            if(YAMLJson){
                YAMLJson.then((res)=>{
                    console.log(res);
                    if(res.Wizard){
                        DWJson.model.Wizard = res.Wizard;
                        setTimeout(()=>{
                            this.setState({
                                finished:1,
                                stepIndex:1
                            });
                        }, 1000);
                    }
                })
            }
        }catch (e) {
            console.log(e);
        }
    }

    goToStep(stepNum){
        this.setState({
            stepIndex:stepNum
        });
    }

    componentDidMount(){
        DWJson.model.fun.goToStep = this.goToStep.bind(this);
    }

    render(){
        const {wizardProps} = this.props;

        const {finished, stepIndex} = this.state;

        const wizardSumProps = {
            props:wizardProps,
            stateProps:{
                stepIndex:stepIndex
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
                                wizardProps.step.container.model === 'none' ?
                                    null
                                    :
                                    <StepContainer
                                        wizardProps={wizardSumProps}
                                    />
                            }
                            <WizardBodyContainer
                                wizardProps={wizardSumProps}
                            />
                            <WizardController
                                wizardProps={wizardSumProps}
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