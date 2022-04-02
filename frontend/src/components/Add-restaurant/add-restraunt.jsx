import { Zfooter } from "../zfooter/zfooter"
import { Alisted } from "./sub-parts/alreadylisted/Alisted"
import { Findres } from "./sub-parts/findres/findres"
import { Fqs } from "./sub-parts/fqs/fqs"
import { Getsup } from "./sub-parts/getsup/getsup"
import { Head } from "./sub-parts/header/head"
import { Hworks } from "./sub-parts/how-it-works/hworks"
import { Strtj } from "./sub-parts/start-Journey/strtj"
import { Whyp } from "./sub-parts/why-partner/whyp"

export const Addrestaurant = () =>{



    return(
        <div>
            <Head/>
            <Whyp/>
            <Hworks/>
            <Alisted/>
            <Getsup/>
            <Strtj/>
            <Fqs/>
            <Findres/>
            <Zfooter/>           
        </div>
    )


}