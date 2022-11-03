export function findNewDirection({cabinStatus, wallButtons, liftButtons}){
    let dir = 'stop'
    // console.log(cabinStatus, wallButtons)

    liftButtons.forEach(el => {
        if (el.pressed) {
            if (el.index != cabinStatus.index) {
                dir = el.index>cabinStatus.index?'up':'down'
            } else {
                dir = 'stop'
            }
            return
        }
    })

    wallButtons.forEach(el => {
        // console.log(el)
        if (el.up || el.down) {
            if (el.index != cabinStatus.index) {
                dir = el.index>cabinStatus.index?'up':'down'
            } else {
                dir = 'stop'
            }
            return
        }
    })
    //console.log(dir)
    return dir
}

export function hasUp({cabinStatus, wallButtons, liftButtons}){
    let returnFlag = false;

    liftButtons.forEach(el => {
        if (el.index > cabinStatus.index && (el.pressed)){
            returnFlag = true;
            return;
        }
    })

    wallButtons.forEach(el => {
        if (el.index > cabinStatus.index && (el.up || el.down)){
            returnFlag = true;
            return;
        }
    })
    return  returnFlag
}

export function hasDown({cabinStatus, wallButtons, liftButtons}){
    let returnFlag = false;

    liftButtons.forEach(el => {
        if (el.index < cabinStatus.index && (el.pressed)){
            returnFlag = true;
            return;
        }
    })

    wallButtons.forEach(el => {
        if (el.index < cabinStatus.index && (el.up || el.down)){
            returnFlag = true;
            return;
        }
    })
    return  returnFlag
}