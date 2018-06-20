import React, {Component} from "react";
import DWJson from "../staticJs/setting";
import CustomSvgIcon from "../customSvgIcon/customSvgIcon";

const {btn} = DWJson.utilities.composeBtn;

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
                    <CustomSvgIcon
                        className='compose-btn-icon compose-btn-icon-plus absolute-center-no-transform'
                        svgProps={{
                            path:btn.svg.plus
                        }}
                    />
                    <CustomSvgIcon
                        className='compose-btn-icon compose-btn-icon-create absolute-center-no-transform'
                        svgProps={{
                            path:btn.svg.create
                        }}
                    />
                </div>
            </div>
        );
    }
}