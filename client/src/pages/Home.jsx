import { useEffect, useState } from "react"
import { useGlobalContext } from "../context/GlobalContext";
import axios from "axios";
import Student from "../components/Student";

export default function Home() {
    const [open, setOpen] = useState(false);
    const {students,setStudents} = useGlobalContext()
    async function fetchStudents(){
        await axios.get("http://localhost:4000/student/all")
        .then((data)=>{
            setStudents(data.data)
        })
        .catch(()=>{

        })
    }
    useEffect(()=>{
        fetchStudents()

    },[])
    return (
        <div>
            {/* <div className={"add-student absolute w-full h-full flex items-center justify-center "} style={{ pointerEvents: open ? "all" : "none", opacity: open ? "1" : "0" }}>            <form action="" className="flex flex-col p-2 m-4 bg-green-100 rounded-2xl w-96  shadow-xl ">
                <div className="close ml-auto mx-2 mt-2 text-zinc-800" onClick={() => { setOpen(false) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className="text-lg font-bold m-2 text-xinc-700">Add Student</div>
                <input type="number" name="" id="" placeholder="Roll no" className="h-10 pl-2 border-2 border-zinc-300 rounded-md m-2" />
                <input type="text" name="" id="" placeholder="Full Name" className="h-10 pl-2 border-2 border-zinc-300 rounded-md m-2" />
                <input type="email" name="" id="" placeholder="Email" className="h-10 pl-2 border-2 border-zinc-300 rounded-md m-2" />
                <input type="number" name="" id="" placeholder="Contact" className="h-10 pl-2 border-2 border-zinc-300 rounded-md m-2" />
                <input type="text" name="" id="" placeholder="Address" className="h-10 pl-2 border-2 border-zinc-300 rounded-md m-2" />
                <div className=" flex items-center m-2 text-zinc-600 ">
                    <div className="mr-2">Select Gender:</div>
                    <label htmlFor="male" className="mr-1 ">Male</label>
                    <input type="radio" name="gender" id="male" />
                    <label htmlFor="female" className="mr-1 ml-2">Female</label>
                    <input type="radio" name="gender" id="female" />
                    <label htmlFor="other" className="mr-1 ml-2">Other</label>
                    <input type="radio" name="gender" id="other" />
                </div>
                <button className="self-start h-10 py-2 px-4 m-2 text-sm font-bold bg-green-400 text-white text-bold rounded-md  ">Submit</button>
            </form>
            </div> */}
            {students &&<div className="student-list">
                {
                    students.map((data)=>(
                        <Student data={data} key={data._id}/>
                    ))
                }
            </div>}
        </div>
    )
}
