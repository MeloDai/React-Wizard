import React, {Component} from "react";
import List from '@material-ui/core/List';
import LeftMenuItem from "../menuItem/menuItem";
import LeftNestedMenu from "../nestedMenu/nestedMenu";
import DWJson from "../../staticJs/setting";

const {nested} = DWJson.utilities.leftMenu;

export default class LeftMenu extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    componentWillMount(){
        const {leftMenu} = DWJson.model.fun;
        leftMenu.nestedFun = {};
    }

    render(){
        const {leftMenuProps} = this.props;
        const {items} = leftMenuProps;

        const res = [];
        items.map((item, index)=>{
            if(item.children && item.children.length > 0){
                res.push(
                    <LeftMenuItem
                        key={index}
                        itemProps={{
                            item:item,
                            index:index,
                            nested:true
                        }}
                    />,
                    <LeftNestedMenu
                        key={nested.label + index}
                        itemProps={{
                            items:item.children,
                            index:index
                        }}
                    />
                );
            }else{
                res.push(
                    <LeftMenuItem
                        key={index}
                        itemProps={{
                            item:item,
                            index:index
                        }}
                    />
                );
            }
        });

        return(
            <List
                component='nav'
            >
                {res}
            </List>
        );
    }
}