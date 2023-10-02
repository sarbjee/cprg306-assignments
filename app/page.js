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
      
    </main>
  )
}

