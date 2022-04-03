import { Zfooter } from "../../zfooter/zfooter";
import { Wntmore } from "../wntmore/wntmore";
import { Adhead } from "./Asub/adhead/adhead";
import { Azmphed } from "./Asub/azmaphed/azmaphead";
import { Azmap } from "./Asub/azpmap/azpmap";
import { Howad } from "./Asub/howad/howad";
import { Whyadz } from "./Asub/whyad/whyadz";



export const Adver =() =>{

    return(
        <div>
            <Adhead/>
            <Azmphed/>
            <Azmap/>
            <Whyadz/>
            <Howad/>
            <Wntmore/>
            <Zfooter/>

        </div>
    );

}