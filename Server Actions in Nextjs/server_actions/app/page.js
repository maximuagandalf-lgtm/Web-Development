
import Image from "next/image";
import fs from 'fs/promises'
import submitAction from "@/actions/action";

export default function Home() {
  
  return (
   <div className="w-2/3 mx-auto my-12">
    <form action={submitAction}>
      <div>
       <label htmlFor="name">Name</label>
        <input className= "text-white" type="text" name="name" id="name" placeholder="name" />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input className= "text-white" type="text" name="address" id="address" placeholder="address"/>

        <button>Submit</button>
      </div>
    </form>
   </div>
  );
}
