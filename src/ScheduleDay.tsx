import { GameData } from '../types/GameData';

export default function ScheduleDay(props: { game: GameData }) {
    const { game } = props;
    return (
        <div>
            <h2>{game.gameData.datetime.originalDate}</h2>
            <h3>{game.gameData.teams.away.abbreviation} @ {game.gameData.teams.home.abbreviation}</h3>
            <p>{game.gameData.teams.away.teamName} {game.gameData.teams.away.record.wins}-{game.gameData.teams.away.record.losses}</p>
            <p>{game.gameData.teams.home.teamName} {game.gameData.teams.home.record.wins}-{game.gameData.teams.home.record.losses}</p>
        </div>
    );
}
