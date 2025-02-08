import './HowOld.css'
import * as React from "react";
import {DateTime} from "luxon";

interface HowOldProps {
    name: string;
    initial: string;
    birthdate: DateTime;
}

const HowOld : React.FC<HowOldProps> = ({name, initial, birthdate}: HowOldProps) => {

    const now = DateTime.now();
    const diff = now.diff(birthdate, ["years", "months", "days","hours", "minutes"]).toObject();

    return (
        <div className={`how-old ${name.toLowerCase()}`}>
            <h1 className="initial">{initial}</h1>

            <p>{name} is </p>
            <p>{diff.years}&nbsp;years {diff.months}&nbsp;months {diff.days}&nbsp;days {diff.hours}&nbsp;hours {Math.floor(diff.minutes ?? 0)}&nbsp;minutes
                old</p>
        </div>
    )
}

export default HowOld
