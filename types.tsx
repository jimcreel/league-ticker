export interface Schedule {
    games: Game[],
}

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

export interface Team  {
    id: number,
    league_id: number,
    name: string,
    logo: string,
    player_id: number[],
}

export interface Member  {
    id: number,
    team_id: number,
    name: string,
}
