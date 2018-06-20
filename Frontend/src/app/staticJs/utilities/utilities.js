let utilities = {
    theme:{
        svg:{
            light:"M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z",
            dark:'m9,21c0,0.55 0.45,1 1,1l4,0c0.55,0 1,-0.45 1,-1l0,-1l-6,0l0,1zm3,-19c-3.86,0 -7,3.14 -7,7c0,2.38 1.19,4.47 3,5.74l0,2.26c0,0.55 0.45,1 1,1l6,0c0.55,0 1,-0.45 1,-1l0,-2.26c1.81,-1.27 3,-3.36 3,-5.74c0,-3.86 -3.14,-7 -7,-7z'
        },
        css:{
            light:{
                label:'light',
                fileName:'light.css'
            },
            dark:{
                label:'dark',
                fileName:'dark.css'
            }
        }
    },
    leftMenuStyle:{
        leftMenu:{
            show:{
                className:'left-menu-container'
            },
            hide:{
                className:'left-menu-container left--250'
            }
        },
        bodyContainer:{
            full:{
                className:'body-container left-0'
            },
            default:{
                className:'body-container'
            }
        }
    },
    composeBtn:{
        btn:{
            svg:{
                plus:"M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z",
                create:"M3 17.25v3.75h3.75l11.06-11.06-3.75-3.75-11.06 11.06zm17.71-10.21c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
            },
            hover:{
                mouseLeave:{
                    label:'default',
                    className:'compose-btn-container'
                },
                mouseEnter:{
                    label:"hover",
                    className:'compose-btn-container is-active'
                }
            }
        }
    },
    leftMenu:{
        nested:{
            label:'nested'
        },
        items:[
            {
                label:{
                    text:'Home'
                },
                svg:{
                    path:'M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z'
                },
                children:[
                    {
                        label:{
                            text:'child5'
                        },
                        svg:{
                            path:'M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z'
                        }
                    },
                    {
                        label:{
                            text:'child6'
                        },
                        svg:{
                            path:'M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z'
                        }
                    },
                    {
                        label:{
                            text:'child7'
                        },
                        svg:{
                            path:'M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z'
                        }
                    }
                ]
            },
            {
                label:{
                    text:'Mail'
                },
                svg:{
                    path:'M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z'
                }
            },
            {
                label:{
                    text:'Account'
                },
                svg:{
                    path:'M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z'
                },
                children:[
                    {
                        label:{
                            text:'child1'
                        },
                        svg:{
                            path:'M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z'
                        }
                    },
                    {
                        label:{
                            text:'child2'
                        },
                        svg:{
                            path:'M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z'
                        }
                    },
                    {
                        label:{
                            text:'child3'
                        },
                        svg:{
                            path:'M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z'
                        }
                    }
                ]
            }
        ]
    }
};

export default utilities;