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

    let nextBirthday = birthdate.set({ year: now.year });
    if (nextBirthday < now) {
        nextBirthday = nextBirthday.plus({ years: 1 });
    }

    const diffBirthDay = nextBirthday.diff(now, ["months", "days"]).toObject();

    return (
        <div className={`how-old ${name.toLowerCase()}`}>
            <h1 className="initial">{initial}</h1>

            <p>{name} ha </p>
            <p>{diff.years}&nbsp;anni {diff.months}&nbsp;mesi {diff.days}&nbsp;giorni {diff.hours}&nbsp;ore {Math.floor(diff.minutes ?? 0)}&nbsp;minuti</p>

            <p>il prossimo compleanno sarà tra <br />
            {diffBirthDay.months}&nbsp;mesi {Math.floor(diffBirthDay.days ?? 0)}&nbsp;giorni</p>
        </div>
    )
}

export default HowOld
