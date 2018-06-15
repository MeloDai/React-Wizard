import React, {Component} from "react";
import Wizard from "../dynamicWizard/wizard/wizard";
import FrameWork from "../frameWork/frameWork";

export default class DynamicWizardPage extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentWillMount(){
        this.state.wizardProps = {
            step:{
                container:{
                    model:'left'
                }
            }
        };
    }

    changeModel(model){
        this.setState({
            wizardProps:{
                step:{
                    container:{
                        model:model
                    }
                }
            }
        });
    }

    render(){
        const {wizardProps} = this.state;
        return(
            <div>
                <div
                    style={{
                        zIndex:11,
                        position:'fixed'
                    }}
                >
                    <button
                        onClick={()=>this.changeModel('left')}
                    >
                        left
                    </button>
                    <button
                        onClick={()=>this.changeModel('top')}
                    >
                        top
                    </button>
                    <button
                        onClick={()=>this.changeModel('none')}
                    >
                        none
                    </button>
                </div>
                <FrameWork
                    content={
                        <Wizard
                            wizardProps={wizardProps}
                        />
                    }
                />
            </div>
        );
    }
}