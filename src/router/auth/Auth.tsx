import { Outlet } from "react-router-dom";
import banner from '../../assets/login-banner.jpg'
export default function Auth() {
    return (
        <>
            {/* all the other elements */}
            <div id="auth" className="h-[100dvh] bg-[#1A1B1F]">
                <div className="overflow-hidden py-2 px-3 mb-5">
                <img src={banner} alt="" className="rounded-2xl" />
                </div>
                <h1 className="text-blue-900 px-3 text-4xl mb-1 uppercase">#LeniwaKluska</h1>
                <h2 className="text-blue-900 px-3 mb-5 text-lg- uppercase font-bold">Yesterday you said tommorow!</h2>
                <Outlet />
            </div>
        </>
    );
}
