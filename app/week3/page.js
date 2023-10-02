import Item from "./item";
import ItemList from "./item-list";
import StudentInfo from "../week2/studentInfo";

export default function Page(){
    return(
        <main className="justify-center m-10">
            <StudentInfo/>
            <ItemList />
          
        </main>
    )
}