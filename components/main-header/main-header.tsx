import Link from "next/link"
import {barriecito} from "@/app/fonts";

import classes from "./main-header.module.css";
import logoImg from "@/public/logo.png";
import SearchBar from "./search-bar";
import Profile from "@/components/main-header/profile";

export default function MainHeader() {
    return (
        <header className={'w-screen flex items-center px-8 py-2 border-b bg-primary'}>
            <Link className={`flex items-center justify-start font-bold ${barriecito.className} text-4xl w-72 text-secondary`} href="/">
                DiscoBird
            </Link>
            <SearchBar />
            <Profile />
        </header>
    )
};