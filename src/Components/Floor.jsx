import Button from '@mui/material/Button';
import {Typography} from "@mui/material";

export default function Floor({floorIndex, setWallButtonPressed, getWallButtonStatus}){
    function handleClick(direction){
        let event = {index:floorIndex, direction:direction}
        // console.log(event)
        setWallButtonPressed(event)
    }

    return <div style={{display:'flex', flexDirection:'row', height:'50px', width: '200px', margin: '10px'}}>
        <Button onClick={()=> handleClick('up')}
                variant={getWallButtonStatus({index: floorIndex, direction: 'up'})?'contained':'outlined'}>Click</Button>
        {/*<Button onClick={()=> handleClick('down')}*/}
        {/*        variant={getButtonStatus({index: floorIndex, direction: 'down'})?'contained':'outlined'}>Down</Button>*/}
        <Typography style={{lineHeight:3.5}}>{floorIndex}</Typography>
    </div>
}