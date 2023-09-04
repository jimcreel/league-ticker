export type Schedule = {
    id: number,
    league_id: number,
    team_id: number,
    game_id: number,
}

export type Game = {
    id: number,
    schedule_id: number,
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

export type Team = {
    id: number,
    league_id: number,
    name: string,
    logo: string,
    player_id: number[],
}

export type Member = {
    id: number,
    team_id: number,
    name: string,
}
