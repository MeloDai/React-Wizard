import React from 'react';
import Component1 from "../../content/content1";
import Component2 from "../../content/content2";
import Component3 from "../../content/content3";
import Component4 from "../../content/content4";
import Component5 from "../../content/content5";
import Component6 from "../../content/content6";

let model = {
    Wizard:{
        title:"React Wizard",
        stepperModel:"left",//it can be left or top
        slides:[
            {
                name:"slide1",
                title:"this is title of slide 1",
                content:<Component1/>
            },
            {
                name:"slide2",
                title:"this is title of slide 2",
                content:<Component2/>
            },
            {
                name:"slide3",
                title:"this is title of slide 3",
                content:<Component3/>
            },
            {
                name:"slide4",
                title:"this is title of slide 4",
                content:<Component4/>
            },
            {
                name:"slide5",
                title:"this is title of slide 5",
                content:<Component5/>
            },
            {
                name:"slide6",
                title:"this is title of slide 6",
                content:<Component6/>
            }
        ]
    },
    fun:{

    }
};

export default model;