import { Player } from "./Player";
import { Team } from "./Team";

export interface GameData{
    gamePk: number,
    link: string,
    gameData: {
        
        datetime: {
            dateTime: string,
            originalDate: string,
            time: string,
            ampm: string,
        },
        status: {
            abstractGameState: string,
            codedGameState: string,
            detailedState: string,
            statusCode: string,
            startTimeTBD: boolean,
            abstractGameCode: string,
        },
        teams: {
            away: Team;
            home: Team;
        }
            players: Player[],
            venue: {
                location: {
                    address1: string,
                    address2: string,
                    city: string,
                    state: string,
                    stateAbbrev: string,
                    field: string,
                },
            },
            weather: {
                condition: string,
                temp: string,
                wind: string,
            },
    }
}