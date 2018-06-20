import React, {Component} from "react";
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import LeftMenuItem from "../menuItem/menuItem";
import DWJson from "../../staticJs/setting";

const {nested} = DWJson.utilities.leftMenu;

export default class LeftNestedMenu extends Component{
    constructor(props){
        super(props);
        this.state = {
            open:false
        };
    }

    toggleNestedMenu(){
        const {open} = this.state;
        this.setState({open: !open});
    }

    componentWillMount(){
        const {itemProps} = this.props;
        const {index} = itemProps;
        const {nestedFun} = DWJson.model.fun.leftMenu;
        nestedFun[nested.label + index] = this.toggleNestedMenu.bind(this);
    }

    render(){
        const {itemProps} = this.props;
        const {items} = itemProps;
        return(
            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                <List
                    component="div"
                    disablePadding
                    className='left-menu-nested'
                >
                    {
                        items.map((item, index)=>{
                            return (
                                <LeftMenuItem
                                    key={index}
                                    itemProps={{
                                        item:item,
                                        index:index
                                    }}
                                />
                            );
                        })
                    }
                </List>
            </Collapse>
        );
    }
}