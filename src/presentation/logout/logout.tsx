import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const auth = getAuth();
    let navigate = useNavigate();

    signOut(auth).then(() => {
        navigate("/")
        sessionStorage.removeItem("user_logged")
    }).catch((error) => {
        // An error happened.
    });
    return (
        <div>
        </div>
    )
};

export default Logout;