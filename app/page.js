import StudentInfo from "./week2/studentInfo";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306 :WEB DEVELOPMENT 2 ASSIGNMENTS</h1>
      <StudentInfo/>
      
      <div className="mt-4">
        <Link className="hover:underline" href={"/week2"}>WEEK 2 Link</Link>
      </div>

      <div className="mt-4">
        <Link className="hover:underline" href={"/week3"}>WEEK 3 Link</Link>
      </div>
      <div>
        <Link className="hover:underline" href="\week4">WEEK 4</Link>
      </div>
       <div>
        <Link className="hover:underline" href="\week5">WEEK 5</Link>
      </div>

       <div>
        <Link className="hover:underline" href="\week6">WEEK 6</Link>
      </div>
       <div>
        <Link className="hover:underline" href="\week7">WEEK 7</Link>
      </div>
      <div>
        <Link className="hover:underline" href="\week8">WEEK 8</Link>
      </div>
      <div>
        <Link className="hover:underline" href="\week10">WEEK 10</Link>
      </div>


    </main>
  )
}

