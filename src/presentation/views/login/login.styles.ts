import { css } from "../../../utils/styles/stitches.config"

export const loginContainer = css({
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    width: "500px",
    alignContent: "center",

    '& input': {
        marginBottom: "10px"
    },
    "& button": {
        margin: "30px 0"
    },
    "& div": {
        marginBottom: "100px"
    }
})