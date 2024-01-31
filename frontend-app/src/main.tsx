import React from "react";
import ReactDOM from "react-dom/client";
import {WagmiConfig} from "wagmi";
import {config} from "./share/wagmi";
import AppRoutes from "@/components/AppRoutes";
import {Toaster} from "./components/primitives/Toaster";
import './index.css'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <WagmiConfig config={config}>
        <AppRoutes/>
        <Toaster/>
    </WagmiConfig>
);
