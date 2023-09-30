import Link from "next/link";
import image from "../public/W.png";

export default function Home() {
  return (
    <main className="min-h-screen justify-between flex max-w-screen overflow-hidden">
      <div className="bg-[#D9D9D9] h-screen w-1/3 ml-0 relative">
        <img
          src="https://i.postimg.cc/VsJhyksJ/W.png"
          alt="logo"
          className="h-[200px] w-[200px] ml-4 absolute"
        />
        <div className="h-10 w-10 rounded-full border-2 border-slate-700 absolute mt-[600px] ml-20"></div>
        <img
          src="https://i.postimg.cc/fybtPPQd/Microsoft-Teams-image-8.jpg"
          alt="logo"
          className="h-[400px] w-[300px] ml-72 mt-28 absolute border-2 border-[#D9D9D9]  rounded-full"
        />
      </div>
      <div className="text-black mt-5 text-right -ml-20 ">
        <h1 className="text-7xl p-10">
          Hello, I am JOAN <br></br>WANINI<br></br> MAINA
        </h1>

        <h3 className="w-[400px] ml-52 text-sm">
          Software engineering is my area of interest. I do software quality
          assurance to ensure that our users/customers are getting the best
          experience and results. Technology helps solve problems in efficient
          ways. I enjoy problem solving using technology. It has eveolved from
          the big old computers to now the coming up of AI. As it keeps
          evolving, I get to use a variety of tools.
        </h3>
        {/* </div>
      <div> */}
        <button className="bg-[#8EBE50] text-slate-700 p-4 rounded-3xl m-9 w-44">
          VIEW PROJECTS
        </button>
        <a href="https://github.com/Joan-Maina/resumeTest/blob/main/Joan%20Wanini%20Resume.pdf">
          <button className="bg-[#8EBE50] text-slate-700 p-4 rounded-3xl m-9 w-44">
            VIEW RESUME
          </button>
        </a>
      </div>
      <div className="h-52 w-52 rounded-full bg-slate-700 -mr-10 -mt-10"></div>
    </main>
  );
}
