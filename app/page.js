import Link from "next/link";

export default function Home() {
  const todos = ["eat", "sleep", "code", "repeat"];
  return (
    <main className="min-h-screen justify-between flex max-w-screen overflow-hidden">
      <div className="bg-[#D9D9D9] h-screen w-1/3 ml-0 relative">
        <div className="h-10 w-10 rounded-full border-4 border-slate-700 absolute mt-[500px] ml-20"></div>
      </div>
      <div className="text-black">
        <h1>Hello I am JOAN WANINI MAINA</h1>
        <p>A SOFTWARE ENGINEER based in Kenya</p>
        <button>View Resume</button>
      </div>

      <div className="h-52 w-52 rounded-full bg-slate-700 -mr-10 -mt-10"></div>
    </main>
  );
}
