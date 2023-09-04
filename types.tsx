export interface Schedule {
    games: Game[],
}
export interface gameData{
    gamePk: number,
    link: string,
    gameData: {
        game: {
            pk: number,
            type: string,
            doubleHeader: string,
            id: number,
            gamedayType: string,
            tiebreaker: string,
            gameNumber: number,
            calendarEventID: string,
            season: string,
            seasonDisplay: string,
        },
        datetime: {
            dateTime: string,
            originalDate: string,
            officialDate: string,
            dayNight: string,
            time: string,
            ampm: string,
        },
        status: {
            abstractGameState: string,
            codedGameState: string,
            detailedState: string,
            statusCode: string,
            startTimeTBD: string,
            abstractGameCode: string,
        },
        teams: {
            away: {
                id: number,
                name: string,
                link: string,
                season: string,
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
            },
            home: {
                id: number,
                name: string,
                link: string,
                season: string,
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
            },
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
            weather: {
                condition: string,
                temp: string,
                wind: string,
            },
            }
        },
    }
}
export interface LiveData {
    plays: {
        allPlays: Play[],

}}

export interface Play {
    result: {
        type: string,
        event: string,
        eventType: string,
        description: string,
        rbi: number,
        awayScore: number,
        homeScore: number,
        isOut: boolean,
    },
    about: {
        atBatIndex: number,
        halfInning: string,
        isTopInning: boolean,
        inning: number,
        startTime: string,
        endTime: string,
        isComplete: boolean,
        isScoringPlay: boolean,
        hasOut: boolean,
    },
    count: {
        balls: number,
        strikes: number,
        outs: number,
    }, 
    matchup: {
        batter: {
            id: number,
            fullName: string,
            link: string,
        },
        batSide: {
            code: string,
            description: string,
        },
        pitcher: {
            id: number,
            fullName: string,
            link: string,
        },
        pitchHand: {
            code: string,
            description: string,
        },
    },
    pitchIndex: number[],
    actionIndex: number[],
    runnerIndex: number[],
    runners: {
        movement: {
            originBase: number,
            start: string,
            end: string,
            outBase: number,
            isOut: boolean,
            outNumber: number,
        },
        details: {
            event: string,
            eventType: string,
            movementReason: string,
            runner: {
                id: number,
                fullName: string,
                link: string,
            },
            responsiblePitcher: number,
            isScoringEvent: boolean,
            rbi: boolean,
            earned: boolean,
            teamUnearned: boolean,
            playIndex: number,
        },
export interface Player{
    id: number,
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
