import Button from "@mui/material/Button";

export default function LiftButtons({manageState}) {
    const liftButtons = manageState.getLiftButtons()

    return <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: "wrap",
        width: '300px',
        height: '250px',
        border: '1px solid black',
        justifyContent: 'center',
        alignSelf: 'center'
    }}>
        {liftButtons.map(el =>
            <Button
                onClick={() => manageState.setLiftButtonPressed(el.index)}
                variant={manageState.getLiftButtonStatus(el.index)?'contained':'outlined'}

            >{el.index}</Button>)}
    </div>

}