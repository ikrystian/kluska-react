import { Outlet } from "react-router-dom";
export default function Home() {
    return (
        <>
            {/* all the other elements */}
            <div id="home" className="h-[100dvh] bg-[#1A1B1F]">
                <Outlet />
            </div>
        </>
    );
}
