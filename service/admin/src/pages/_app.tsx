import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ToastClassName, ToastContainer, TypeOptions} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const client = new QueryClient();

export default function App({Component, pageProps}: AppProps) {
    return (
        <div className=" [&_*]:font-['Pretendard']">
            <QueryClientProvider client={client}>
                <Component {...pageProps} />
                <ToastContainer/>
            </QueryClientProvider>
        </div>
    );
}
