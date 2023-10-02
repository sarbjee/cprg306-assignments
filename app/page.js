
import StudentInfo from "./week2/studentInfo";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306 :WEB DEVELOPMENT 2  ASSIGNMENTS</h1>
      <StudentInfo/>
      <Link href={"/week2"}>week2 Link</Link>
      <Link className="hover:underline" href={"/week3"}></Link>
      
     </main>
    
  )
}
