import {Image, Paper} from "@mantine/core";

import elevatorRunningGif from '../assets/Elevator_Running.gif'

function ElevatorLoading(props) {

    //iife for timeout and move forward
    const moveFlowForward = (() => {
        setTimeout(()=> {
            props.setFlowOrder(2)
        }, 3000)
    })()

    return (
        <Paper shadow={"xl"} p={"md"}
               style={{
                   height: 500,
                   width: 400,
                   display: "flex",
                   justifyContent: "center",
                   alignItems: 'center'
        }}>
            <Image src={elevatorRunningGif}></Image>
        </Paper>
    )
}

export default ElevatorLoading;