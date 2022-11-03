export const getInitialLiftState = (numberOfFloors) => {
    let floorsArray = []
    for (let i = 0; i <= numberOfFloors; i++) {
        floorsArray[i] = numberOfFloors - i
    }

    return {
        wallButtons: floorsArray.map(el => {
            return {index: el, up: false, down: false}
        }),
        liftButtons: floorsArray.map(el => {
            return {index: el, pressed: false}
        }),
        cabin: {
            index: 0,
            open: false,
            direction: 'stop',
            needToOpen: false,
            numberOfFloors: numberOfFloors
        },
    }
}