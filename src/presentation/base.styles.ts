import { styled, css } from "../utils/styles/stitches.config"
import eventaumLogo from "../assets/eventaumLogo.svg"
import searchOutline from "../assets/icons/searchOutline.svg"

export const Button = styled("button", {
    borderRadius: "2px",
    padding: "10px",
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
        primary: {
            true: {
                background: "$primary"
            },
            false: {
                background: "$bglightning",
                border: "solid 1px $primary",
                color: "$primary"
            }
        }
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

    variants: {
        search: {
            true: {
                margin: "auto 60px",
                flex: 1,
                border: "none",
                height: "26px",
                background: "transparent",
                paddingLeft: "34px",
                position: "relative",
                backgroundImage: `url(${searchOutline})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "left",
            }
        }
    }
})

export const bgContainer = css({
    background: "$bgcolor",
    display: "flex",
    width: "100vw",
    height: "100vh",
    position: "relative",
    flexWrap: "wrap"
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
        },
        home: {
            true: {
                position: "initial",
                margin: "auto"
            }
        }
    }
})

export const Avatar = styled("img", {
    width: "58px",
    height: "58px",
    border: "2px solid #FFFFFF",
    borderRadius: "100px",
    margin: "auto 30px"
})

export const gridContainer = css({
    display: "flex",
    height: "calc(100% - 100px)",
    flex: 1,
    flexWrap: "wrap"
})

export const categoryTitle = css({
    width: '100%',
    variants: {
        size: {
            small: {
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "19px",
                paddingBottom: "20px"
            },
            large: {
                fontWeight: 400,
                fontSize: "38px",
                lineHeight: "45px",
                paddingBottom: "30px"
            }
        },
        color: {
            black: { color: "#233539" },
            white: { color: "#fff" }
        }
    }
})

export const flex1 = css({ flex: 1, margin: "50px" })

export const overlay = css({
    position: "fixed",
    width: "100vw",
    height: "100vh",
    zIndex: 3,
    background: "#36363657",
    display: "flex",
    left: 0,
    top: 0
})

export const col = css({ flex: 1 })