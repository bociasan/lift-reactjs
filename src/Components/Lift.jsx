import Floors from "./Floors";
import Tunel from "./Tunel";
import {useEffect, useState} from "react";
import {getInitialLiftState} from "../utiils";
import Button from "@mui/material/Button";
import {findNewDirection, hasDown, hasUp} from "../logix";
import LiftButtons from "./LiftButtons";

export default function Lift({numberOfFloors}) {
    const [liftState, setLiftState] = useState(getInitialLiftState(numberOfFloors))

    function Logix() {
        let cabinStatus = manageState.getCabinStatus()
        let wallButtons = manageState.getWallButtons()
        let liftButtons = manageState.getLiftButtons()
        console.log(cabinStatus)


        if (cabinStatus.needToOpen) {
            manageState.openCabin()
        } else if (cabinStatus.open) {
            manageState.closeCabin()
        } else {
            if (cabinStatus.direction == "stop") {
                let newDirection = findNewDirection({cabinStatus, wallButtons, liftButtons})
                manageState.setCabinDirection(newDirection)
            } else if (cabinStatus.direction == "up" && hasUp({cabinStatus, wallButtons, liftButtons})) {
                manageState.setCabinOnFloor(cabinStatus.index + 1)
            } else if (cabinStatus.direction == "down" && hasDown({cabinStatus, wallButtons, liftButtons})) {
                manageState.setCabinOnFloor(cabinStatus.index - 1)
            } else manageState.setCabinDirection('stop')


            manageState.verifyButtons()
        }


        setTimeout(Logix, 1000)
    }

    useEffect(() => {
        console.log('Lift component loaded.')
        setTimeout(Logix, 1000)
    }, [])

    const manageState = {
        getWallButtons: () => liftState.wallButtons,
        getLiftButtons: () => liftState.liftButtons,
        setWallButtonPressed: (buttonpressed) => {
            // console.log(buttonpressed)
            liftState.wallButtons[numberOfFloors - buttonpressed.index][buttonpressed.direction] = true
            setLiftState({...liftState})
        },
        setLiftButtonPressed: (index) => {
            // console.log(buttonpressed)
            liftState.liftButtons[numberOfFloors - index].pressed = true
            setLiftState({...liftState})
        },
        getWallButtonStatus: (button) => liftState.wallButtons[numberOfFloors - button.index][button.direction],
        getLiftButtonStatus: (index) => liftState.liftButtons[numberOfFloors - index]?.pressed,
        getCabinStatus: () => liftState.cabin,
        toggleCabin: () => {
            liftState.cabin.open = !liftState.cabin.open
            setLiftState({...liftState})
        },
        openCabin: () => {
            liftState.cabin.open = true
            liftState.cabin.needToOpen = false
            setLiftState({...liftState})
        },
        closeCabin: () => {
            liftState.cabin.open = false
            setLiftState({...liftState})
        },
        setCabinOnFloor: (floor) => {
            liftState.cabin.index = floor
            setLiftState({...liftState})
        },
        setCabinDirection: (direction) => {
            liftState.cabin.direction = direction
            setLiftState({...liftState})
        },
        verifyButtons: () => {
            //let stopFlag = true
            let cabinIndex = liftState.cabin.index

            liftState.wallButtons.forEach(el => {
                if (cabinIndex === el.index && el.up) {
                    //el.down = false
                    el.up = false
                    manageState.setNeedToOpen()
                    //manageState.setCabinDirection('stop')
                }
                //if (el.down || el.up) stopFlag = false
            })

            liftState.liftButtons.forEach(el => {
                if (cabinIndex === el.index && el.pressed) {
                    el.pressed = false
                    manageState.setNeedToOpen()
                }
            })

            //if (stopFlag) manageState.setCabinDirection('stop')
            setLiftState({...liftState})
        },
        setNeedToOpen: () => {
            liftState.cabin.needToOpen = true
            setLiftState({...liftState})
        }
    }

    return <div style={{display: 'flex', flexDirection: 'row'}}>
        <Floors manageState={manageState}/>
        <Tunel manageState={manageState}/>
        {/*<Button onClick={() => setLiftState(getInitialLiftState(numberOfFloors))}>Reset All</Button>*/}
        {/*<Button onClick={() => manageState.toggleCabin()}>ToggleCabin</Button>*/}
        <LiftButtons manageState={manageState}/>
    </div>
}