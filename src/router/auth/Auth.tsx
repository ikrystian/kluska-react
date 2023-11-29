import { Outlet } from "react-router-dom";

export default function Auth() {
    return (
        <>
            {/* all the other elements */}
            <div id="auth">
                <Outlet />
            </div>
        </>
    );
}
