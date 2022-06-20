import { css } from "../../../utils/styles/stitches.config"

export const cardContainer = css({
    background: "#fff",
    boxShadow: "0px 2px 9px rgba(0, 0, 0, 0.03)",
    borderRadius: "6px",
    padding: "30px",
})

export const cardData = css({
    fontSize: "14px",
    color: "#474F58",
    marginBottom: "50px",

    "& after": {
        content: "",
        position: "absolute",
        width: "50%",
        height: "5px",
        left: 0,
        bottom: "14px",
        background: "#0BBEF2",
        borderRadius: "11px",
    }
})