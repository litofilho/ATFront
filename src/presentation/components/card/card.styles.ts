import { css } from "../../../utils/styles/stitches.config"

export const cardContainer = css({
    background: "#fff",
    boxShadow: "0px 2px 9px rgba(0, 0, 0, 0.03)",
    borderRadius: "6px",
    padding: "30px",
    display: "flex",
    flexDirection: "column"
})

export const cardDate = css({
    fontSize: "14px",
    color: "#474F58",
    marginBottom: "50px",
    position: "relative",

    "&::after": {
        content: "",
        position: "absolute",
        width: "50%",
        height: "5px",
        left: 0,
        bottom: "-14px",
        background: "#0BBEF2",
        borderRadius: "11px",
    }
})

export const cardItemContainer = css({
    borderRadius: "6px",
    padding: "15px",
    background: "$secondary",
    fontSize: "13px",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    cursor: "pointer"
})

export const cardItemBgImg = css({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0.3,
    position: "absolute",
    left: 0,
    top: 0
})

export const cardItemTitle = css({
    fontWeight: 600,
    fontSize: "16px",
    margin: "15px 0",
    position: "relative",
    zIndex: 2
})

export const cardItemTag = css({
    padding: "6px 10px",
    background: "#fff",
    border: "1px solid rgba(77, 161, 255, 0.7)",
    borderRadius: "2px",
    float: "left",
    marginRight: "10px",
    position: "relative",
    zIndex: 2,
    height: "30px",

    "& img": {
        height: "100%"
    }
})

export const cardDetailsContainer = css({
    borderRadius: "6px",
    boxShadow: "0px 2px 9px rgba(0, 0, 0, 0.03)",
    padding: "30px",
    background: "$bglightning",
    fontSize: "14px",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    cursor: "pointer",
    margin: "auto",
    maxWidth: "1150px"
})

export const cardDetailsTitle = css({
    fontWeight: 600,
    fontSize: "32px",
    marginBottom: "15px",
    position: "relative",
    zIndex: 2,
    color: "$secondary",
    display: "flex",
    alignItems: "center"
})

export const cardDetailsStatus = css({
    background: "rgba(77, 161, 255, 0.1)",
    borderRadius: "2px",
    padding: "6px 10px",
    fontSize: "11px",
    color: "$secondary",
    lineHeight: "11px",
    textTransform: "uppercase",
    marginLeft: "10px"
})

export const cardDetailsInfo = css({
    width: "100%",
    padding: "16px 16px 16px 0",
    display: "grid",
    color: "$secondary",

    "& label": {
        fontSize: "16px",
        fontWeight: "500",
        lineHeight: "24px"
    },
    "& span": {
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "20px"
    }
})