

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
