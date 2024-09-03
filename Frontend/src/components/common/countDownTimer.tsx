import React from 'react';
import Countdown from 'react-countdown';

const Completionist = () => <span>Opps! Sale ended</span>;

interface Props{
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
}

export const CountDown = () => {

    const renderer:React.FC<Props> = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            return <Completionist />;
        } else {
            // Render a countdown
            return (
                <span>
                    {hours}:{minutes}:{seconds}
                </span>
            );
        }
    };

    return (
        <>
            <Countdown
                date={Date.now() + 86400000}
                renderer={renderer}
            />
        </>
    )
}

