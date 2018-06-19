import React, {Component} from "react";
import SvgIcon from '@material-ui/core/SvgIcon';
import DWJson from "../staticJs/setting";

const {btn} = DWJson.utilities.composeBtn;

function PlusIcon(props) {
    return(
        <SvgIcon {...props}>
            <path
                d={btn.svg.plus}
            />
        </SvgIcon>
    );
}

function CreateIcon(props) {
    return(
        <SvgIcon {...props}>
            <path
                d={btn.svg.create}
            />
        </SvgIcon>
    );
}

export default class ComposeBtn extends Component{
    constructor(props){
        super(props);
        this.state = {
            containerClass:btn.hover.mouseLeave.className
        };
    }

    toggleComposeBtnIcon(name){
        switch (name){
            case btn.hover.mouseLeave.label:
                this.setContainerClass(btn.hover.mouseLeave.className);
                break;
            case btn.hover.mouseEnter.label:
                this.setContainerClass(btn.hover.mouseEnter.className);
                break;
            default:
                break;
        }
    }

    setContainerClass(className){
        this.setState({
            containerClass:className
        });
    }

    render(){
        const {containerClass} = this.state;
        const {fun} = DWJson.model;

        return(
            <div
                className={containerClass}
                onMouseEnter={()=>{
                    this.toggleComposeBtnIcon(btn.hover.mouseEnter.label)
                }}
                onMouseLeave={()=>{
                    this.toggleComposeBtnIcon(btn.hover.mouseLeave.label)
                }}
                onClick={()=>{
                    fun.setDisplay(true);
                }}
            >
                <div
                    className='compose-btn'
                >
                    <PlusIcon
                        className='compose-btn-icon compose-btn-icon-plus absolute-center-no-transform'
                    />
                    <CreateIcon
                        className='compose-btn-icon compose-btn-icon-create absolute-center-no-transform'
                    />
                </div>
            </div>
        );
    }
}