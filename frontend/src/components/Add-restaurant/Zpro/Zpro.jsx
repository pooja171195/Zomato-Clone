import { Zfooter } from "../../zfooter/zfooter";
import { Gszp } from "./zprosub/gszp/gszp";
import { Watin } from "./zprosub/watin/watin";
import { Wntmore } from "../wntmore/wntmore";
import { Zphead } from "./zprosub/zpheader/zphead";
import { Zpmap } from "./zprosub/zpmap/zpmap";
import {Zmphed} from "./zprosub/zmaphed/zmaphead"


export const Zpro = () =>{


    return(
        <div>
            <Zphead/>
            <Zmphed/>
            <Zpmap/>
            <Watin/>
            <Gszp/>
            <Wntmore/>
            <Zfooter/>
        </div>
    );

}