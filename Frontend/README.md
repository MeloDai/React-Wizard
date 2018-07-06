# React-YAML-Wizard
This is a react wizard component.
It is using a json to get the wizard props.

## Json
It can ben configured in path "src/app/staticJs/model/model.js".

Format is like this:
```javascript
Wizard:{
    title:"React Wizard",//the title of whole wizard
    stepperModel:"left",//it is the stepper style, can be left or top
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
}
```
## Apply Function
You can configure the apply function in "src/app/composeBtn/composeBtn.js"

## Usage
clone or download
cd Frontend
npm install
npm run buildAll
npm start