import React, {Component} from "react";
import DWJson from "../../staticJs/setting";

const {fun} = DWJson.model;
const {leftMenuStyle} = DWJson.utilities;

export default class LeftMenuContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            containerClass:leftMenuStyle.leftMenu.show.className
        };
    }

    hideContainer(){
        fun.leftMenu.hide = true;
        this.setState({
            containerClass:leftMenuStyle.leftMenu.hide.className
        });
    }

    showContainer(){
        fun.leftMenu.hide = false;
        this.setState({
            containerClass:leftMenuStyle.leftMenu.show.className
        });
    }

    componentDidMount(){
        fun.leftMenu.leftMenuContainer = {
            show:this.showContainer.bind(this),
            hide:this.hideContainer.bind(this)
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