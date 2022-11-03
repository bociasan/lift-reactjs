import Floor from "./Floor";

export default function Floors({manageState}){
    return <div style={{marginLeft:'100px',display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',width:'200px', height:'inherit'}}>
        {manageState.getWallButtons().map(floor => <Floor
            floorIndex={floor.index}
            setWallButtonPressed={manageState.setWallButtonPressed}
            getWallButtonStatus={manageState.getWallButtonStatus}
        />) }
    </div>
}