import { GameData } from '../types/GameData';

export default function ScheduleDay(props: { game: GameData }) {
    const { game } = props;
    return (
        <div>
            <div className="flex justify-between">
                <div> team </div>
            </div>
        </div>
    );
}
