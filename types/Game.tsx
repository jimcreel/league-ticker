
export interface Game  {
    id: number,
    team_id: number[],
    score: number[],
    status: string,
    inning: number,
    outs: number,
    balls: number,
    strikes: number,
    runners: number[],
    location: string,
    field: string,
    start_time: string,
}