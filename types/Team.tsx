export interface Team {

        id: number,
        name: string,
        link: string,
        season: number,
        teamCode: string,
        abbreviation: string,
        teamName: string,
        shortName: string,
        record: {
            gamesPlayed: number,
            leagueGamesBack: string,
            leagueRecord: {
                wins: number,
                losses: number,
                ties: number,
                pct: string,
            },
            wins: number,
            losses: number,
            winningPercentage: string,
            streak: {
                streakType: string,
                streakNumber: number,
                streakCode: string,
            },
        }
}