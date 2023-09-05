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
    }
}