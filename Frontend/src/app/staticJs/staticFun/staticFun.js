import "whatwg-fetch";
import * as yaml from 'js-yaml'

let staticFun = {
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
        }
    }
};

export default staticFun;