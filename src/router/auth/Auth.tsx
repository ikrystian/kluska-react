import { Outlet } from "react-router-dom";
import banner from '../../assets/login-banner.jpg'
export default function Auth() {
    return (
        <>
            {/* all the other elements */}
            <div id="auth">
                <img src={banner} alt="" />
                <h1>Yesterday you said tommorow!</h1>
                <Outlet />
            </div>
        </>
    );
}
