import type {NextPage} from "next";
import {Home} from "@/components/home/home"

 const HomePage : NextPage = ()=>{
    return(
        <div>
            <section>
                <Home/>
            </section>
        </div>
    )
}

export default HomePage;