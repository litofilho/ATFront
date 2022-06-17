import { styled, css } from "../utils/styles/stitches.config"
import eventaumLogo from "../assets/eventaumLogo.svg"

export const Button = styled("button", {
    borderRadius: "2px",
    padding: "10px",
    background: "$primary",
    color: "#FFF",
    border: "none",
    cursor: "pointer",

    variants: {
        size: {
            small: {
                padding: "10px",
                fontSize: "11px"
            },
            large: {
                padding: "12px",
                fontSize: "22px",
            }
        },
    }
})

export const TextField = styled("input", {
    border: " 1px solid #8A8A8A",
    padding: "10px",
    color: "$secondary",
    background: "#FFF",
    fontSize: "17px",
    lineHeight: "21px",
    outline: "none",
})

export const bgContainer = css({
    background: "$bgcolor",
    display: "flex",
    width: "100vw",
    height: "100vh",
    position: "relative"
})


export const Logo = styled("div", {
    backgroundImage: `url(${eventaumLogo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    variants: {
        size: {
            small: {
                width: "152px",
                height: "38px",
                position: "absolute",
                left: "30px",
                top: "30px"
            },
            large: {
                width: "314px",
                height: "78px",
                margin: "auto"
            }
        }
    }
})