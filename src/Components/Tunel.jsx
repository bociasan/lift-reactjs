import Cabin from "./Cabin";

export default function Tunel({manageState}){

    return  <div style={{display:'flex', flexDirection:'column', width:'40vw', height:'inherit', position:"relative"}}>
        <Cabin props={manageState.getCabinStatus()}/>
    </div>
}