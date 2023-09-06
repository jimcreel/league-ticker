import ScheduleDay from "./ScheduleDay";
import { useState, useEffect } from "react";
import { Schedule } from "../types/Schedule";
import { GameData } from "../types/GameData";
import { Player } from "../types/Player";



export default function ScheduleView() {
    const [schedule, setSchedule] = useState<Schedule | null>(null);

  
       
    
    useEffect(() => {
    

        
    }, []);
    let week = [];
    if (schedule) {
        for (let i = 0; i < schedule.games.length; i++) {
            week.push(<ScheduleDay key={schedule.games[i].gamePk} game={schedule.games[i]} />)
        }
    }
    
    return (
        <div className="flex justify-between m-5">
            {week}       
        </div>
    );
}
