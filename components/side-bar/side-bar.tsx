import NavLink from "@/components/main-header/nav-link";
import NewPostButton from "@/components/main-header/new-post-button";

export default function SideBar() {
    return (
        <nav className={"bg-secondary"}>
            <ul className={"flex flex-col gap-6 text-xl"}>
                <li>
                    <NavLink href={"/public"}>홈</NavLink>
                </li>
                <li>
                    <NavLink href={"/notifications"}>알림</NavLink>
                </li>
                <li>
                    <NavLink href={"/events"}>프로필</NavLink>
                </li>
                <li>
                    <NewPostButton />
                </li>
            </ul>
        </nav>
    )
}