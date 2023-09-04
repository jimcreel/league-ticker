import ScheduleDay from "./ScheduleDay";
import { useState, useEffect } from "react";
import { Schedule, Game } from "../types";


export default function ScheduleView() {
    const [schedule, setSchedule] = useState<Schedule | null>(null);

    const scheduleData: Schedule = {
        games: [
            {
                id: 1,
                team_id: [1, 2],
                score: [0, 0],
                status: "scheduled",
                inning: 0,
                outs: 0,
                balls: 0,
                strikes: 0,
                runners: [],
                location: "Burlington",
                field: "Field 1",
                start_time: "2021-06-01T18:00:00.000Z"
            },
            {
                id: 2,
                team_id: [3, 4],
                score: [0, 0],
                status: "scheduled",
                inning: 0,
                outs: 0,
                balls: 0,
                strikes: 0,
                runners: [],
                location: "Burlington",
                field: "Field 2",
                start_time: "2021-06-01T18:00:00.000Z"
            },



        ]
    };
    useEffect(() => {
        setSchedule(scheduleData);

        
    }, []);
    let week = [];
    if (schedule) {
        for (let i = 0; i < schedule.games.length; i++) {
            week.push(<ScheduleDay key={schedule.games[i].id} game={schedule.games[i]} />)
        }
    }
    
    return (
        <div className="flex justify-between m-5">
            {week}       
        </div>
    );
}
