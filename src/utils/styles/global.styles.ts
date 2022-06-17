import { globalCss } from "./stitches.config"

const globalStyles = globalCss({
    '@import': [
        "url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap')"
    ],
    "*": {
        boxSizing: "border-box",
        padding: 0,
        margin: 0,
        fontFamily: "Roboto"
    }
})

export default globalStyles