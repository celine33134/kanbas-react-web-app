

// Account/index.tsx
import Signin from "./Signin";
import { Routes, Route, Navigate } from "react-router";
import AccountNavigation from "./Navigation";
import Profile from "./Profile";
import Signup from "./Signup";
import Users from "./Users";

export default function Account() {
    return (
        <div id="wd-account-screen" style={{ display: "flex", flexDirection: "row" }}>
            {/* Account navigation column */}
            <div style={{ flex: "0 0 200px", padding: "20px" }}>
                <AccountNavigation />
            </div>

            {/* Main content column */}
            <div style={{ flex: 1, padding: "20px" }}>
                <Routes>
                    <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
                    <Route path="/Signin" element={<Signin />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="/Signup" element={<Signup />} />
                    <Route path="/Users" element={<Users />} />
                    <Route path="/Users/:uid" element={<Users />} />
                </Routes>
            </div>
        </div>
    );
}
