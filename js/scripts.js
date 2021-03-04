const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style,) => 
window
     .getComputedStyle(element)
     .getPropertyValue(style)


const initialColors = { //pegar estilo css
    navbarColor: getStyle(html, "--navbar-color"),
    links: getStyle(html, " --links"),
    services: getStyle(html,"--services")
    
}


const darkMode = {
    navbarColor: "#ffffff",
    links: "#131313",
    services: "#131313",
    
}

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()



const changeColors = (colors) => {
   Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
    )    

}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})

