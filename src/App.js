import React, {useState, useEffect} from "react";
import {useWindowSize} from '@react-hook/window-size'
import Confetti from 'react-confetti'
import Snowfall from 'react-snowfall'

import './App.css'

export const App = () => {
    const [seconds, setSeconds] = useState(10);
    const [minutes, setMinutes] = useState(0);

    const {width, height} = useWindowSize()
    const [isShowAnim, setIsShowAnim] = useState(false);

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                setMinutes(minutes - 1)
                setSeconds(60)
            }
            if (minutes === 0) {

                if (seconds === 0) {
                    clearInterval(myInterval);
                    setSeconds(0)
                    setMinutes(0)
                }
            }
        }, 1000);
        return () => {
            clearInterval(myInterval);
        };
    });
    useEffect(() => {
        if (seconds === 0 && minutes === 0) {
            setIsShowAnim(true);
        }
    }, [seconds])
    return (
        <div className="counter-block">
            <Snowfall/>
            <div className='counter-info-block'>
                {
                    isShowAnim && <div>
                        <div>
                            <h1 className='counter-title'>Happy birthday, my dear Alina! ❤️</h1>
                        </div>
                    </div>
                }

                <div className='counters-block'>
                    <div className="timer_section-count">
                        <p>{minutes >= 10 ? minutes.toString().split().join()[0] : 0}</p></div>
                    <div className="timer_section-count">
                        <p>{minutes >= 10 ? minutes.toString().split().join()[1] : minutes.toString().split().join()[0]}</p>
                    </div>
                    <div className="timer_section-count"><p>:</p></div>
                    <div className="timer_section-count">
                        <p>{seconds >= 10 ? seconds.toString().split().join()[0] : 0}</p></div>
                    <div className="timer_section-count">
                        <p>{seconds >= 10 ? seconds.toString().split().join()[1] : seconds.toString().split().join()[0]}</p>
                    </div>
                </div>
            </div>

            <Confetti
                run={isShowAnim}
                width={width}
                height={height}
            />

        </div>
    );
}

