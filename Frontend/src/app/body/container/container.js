import React, {Component} from "react";
import DWJson from "../../staticJs/setting";

const {fun} = DWJson.model;
const {leftMenuStyle} = DWJson.utilities;

export default class BodyContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            containerClass:leftMenuStyle.bodyContainer.default.className
        };
    }

    containerFullWidth(){
        this.setState({
            containerClass:leftMenuStyle.bodyContainer.full.className
        });
    }

    containerDefaultWidth(){
        this.setState({
            containerClass:leftMenuStyle.bodyContainer.default.className
        });
    }

    componentDidMount(){
        fun.leftMenu.bodyContainer = {
            full:this.containerFullWidth.bind(this),
            default:this.containerDefaultWidth.bind(this)
        };
    }

    render(){
        const {containerClass} = this.state;

        return(
            <div
                className={containerClass}
            >

            </div>
        );
    }
}