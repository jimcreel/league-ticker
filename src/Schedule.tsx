import ScheduleDay from "./ScheduleDay"
import { useState } from "react"

const schedule, setSchedule = useState([])




export default function Schedule() {
    let week = []
    for (let i = 0; i < 7; i++) {
        week.push(<ScheduleDay />)
    }
    return (
        <div className="flex justify-between m-5">
            {week}       
        </div>
    )
}