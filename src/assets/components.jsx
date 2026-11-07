/*
export function SaveTheDate(date, time){
    const day = new Date(date);
    const time = day.getTime();
}
*/

import { useState, useEffect } from "react";

export function NavBar({setActiveSection}){
    return (
        <nav className="navbar">
            <button onClick={() => setActiveSection("Home")}>HOME</button>
            <button onClick={() => setActiveSection("Schedule")}>SCHEDULE</button>
            <button onClick={() => setActiveSection("Travel")}>TRAVEL</button>
            <button onClick={() => setActiveSection("Registry")}>REGISTRY</button>
            <button onClick={() => setActiveSection("Wedding Party")}>WEDDING PARTY</button>
            <button onClick={() => setActiveSection("Gallery")}>GALLERY</button>
            <button onClick={() => setActiveSection("FAQ")}>FAQ</button>
        </nav>
    )
}

export function CountdownDate({targetDate}){
    const calculateTimeLeft = () => {
        const difference = new Date(targetDate).getTime() - Date.now();

        if (difference <= 0){
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        }
    

    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(difference / (1000 * 60 * 60) % 24),
        minutes: Math.floor(difference / (1000 * 60) % 60),
        seconds: Math.floor(difference / 1000 % 60)
    };
    };
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);

    }, [targetDate])

    return (
        <div className="countdown">
                <h2>Countdown</h2>
                <div className="countdown-display">
                    <div className="numbers">
                        <p>{timeLeft.days}</p>
                            <p>:</p>
                        <p>{timeLeft.hours}</p>
                            <p>:</p>
                        <p>{timeLeft.minutes}</p>
                            <p>:</p>
                        <p>{timeLeft.seconds}</p>
                    </div>

                    <div className="text">
                        <p>Days</p>
                        <p>Hours</p>
                        <p>Minutes</p>
                        <p>Seconds</p>
                    </div>
                </div>
        </div>
    )
}

export function PhotoGallery({images=[]}){
    if(images.length === 0) return null;

    return(
        <div className="gallery">
            <div className="gallery-track">
                {[...images, ...images].map((images, index) => (
                    <img
                        key={index}
                        src={images}
                        alt={`Photo Gallery ${index % images.length + 1}`}
                        className="gallery-image"
                    />
                ))}
            </div>
        </div>
    )
}