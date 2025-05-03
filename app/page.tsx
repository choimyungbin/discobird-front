import MainHeader from "@/components/main-header/main-header";
import NewPost from "@/components/new-post";

export default function Home() {
  return (
    <main className="flex justify-center h-full">
      <div className={"mx-[28rem] my-8 grow"}>
        <NewPost />
      </div>
    </main>
  );
}
