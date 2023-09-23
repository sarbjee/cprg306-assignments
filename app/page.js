import Link from "next/link";
import studentInfo from "./studentInfo";
import link from "next/link"




export default function Home() {
  return (
    <main>
      <h1>CPRG 306 :WEB DEVELOPMENT 2  ASSIGNMENTS</h1>
      <studentInfo />
      <Link href={"./week2"}> Week 2</Link>
    </main>
    
  )
}
