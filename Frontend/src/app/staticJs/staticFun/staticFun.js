import "whatwg-fetch";
import * as yaml from 'js-yaml'

let staticFun = {
    wizard:{
        init:{
            YAMLFile:{
                get:()=>{
                    return fetch(
                        '/yaml/test.yaml',
                        {
                            method:'GET'
                        }
                    ).then((res)=>{
                        // console.log(res);
                        return res.text();
                    }).then((res)=>{
                        // console.log(res);
                        try{
                            // console.log(doc);
                            return yaml.safeLoad(res);
                        }catch (e) {
                            console.log(e);
                            return null;
                        }
                    });
                }
            },
            stepPassed:(slides)=>{
                const stepPassed = {};
                slides.map((slide, index)=>{
                    const stepNum = index + 1;
                    stepPassed['step' + stepNum] = {
                        passed:index === 0
                    };
                });
                return stepPassed;
            }
        },
    },
    style:{
        switchCss:(fileName)=>{
            let localLinks = document.getElementsByTagName("link");
            for (let i = 0; i < localLinks.length; i++) {
                if (localLinks.item(i).hasAttributes("href")) {
                    let currentFile = localLinks.item(i).getAttribute("href");
                    if (currentFile && (currentFile.includes("light.css") || currentFile.includes("dark.css"))) {
                        localLinks.item(i).setAttribute("href", currentFile
                            .split('light.css').join(fileName)
                            .split('dark.css').join(fileName)
                        );
                        break;
                    }
                }
            }
        }
    }
};

export default staticFun;