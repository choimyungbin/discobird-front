import {Button} from "@/components/ui/button";
import Profile from "@/components/main-header/profile";

export default function NewPost() {
    return (
        <div className={"bg-card w-full h-40 rounded-sm p-4"}>
            <div className={"flex justify-between gap-4"}>
                <Profile />
                <Button className={"grow bg-background hover:bg-background/60 cursor-pointer text-card-foreground justify-start"}>Start a post</Button>
            </div>
            <div className={"flex gap-4 mt-4"}>
                <Button>Video</Button>
                <Button>Photo</Button>
            </div>
        </div>
    )
}