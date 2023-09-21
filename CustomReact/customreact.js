function customRender(reactElement , container )
const reactElement = {
    type : "a",
    props : {
        href : "https://google.com",
        target : "_blank",
    },
    children : "Click Me"
}


const mainConatiner = document.querySelector("#root")

customRender(reactElement , mainConatiner);