import { Outlet } from "react-router-dom";
import banner from '../../assets/login-banner.jpg'

export default function App() {
    return (
        <>
            {/* all the other elements */}
            <div id="auth" className="h-[100dvh] bg-[#1A1B1F]">
                <div className="overflow-hidden py-2 px-3 mb-5 relative">
                    <div className={'bg-gradient-to-t from-gray-950 to-transparent absolute inset-0'}></div>
                    <img src={banner} alt="" className="rounded-2xl"/>
                    <div className="absolute bottom-2 left-2">
                    <h1 className="text-blue-900 px-3 text-4xl mb-1 uppercase">#LeniwaKluska</h1>
                    <h2 className="text-blue-900 px-3 mb-5 text-lg- uppercase font-bold">Yesterday you said
                        tommorow!</h2>
                    </div>
                </div>
                <Outlet/>
            </div>
        </>
    );
}
