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
                <div className="countdown-display">
                    <h2>COUNTDOWN</h2>
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
            <div className="gallery-overlay">
                <h2 className="gallery-text">We're getting married!</h2>
            </div>
        </div>
    )
}

export function MemoryLaneTimeLine({photos=[]}){
    const events = [
        {
            title: "Test",
            description: "Test Description",
            image: photos[0]
        },

        {
            title: "Test2",
            description: "Test Description",
            image: photos[1]
        },

    ];

    return(
        <section className="timeline-section">
            <h1>A WALK DOWN MEMORY LANE!</h1>

            <div className="timeline">
                {events.map((event, index) => (
                    <div className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`} key={index}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-icon">
                                    <img src={event.image}
                                        alt={event.title}
                                    />
                            </div>
                            <div className="timeline-content">
                                    <h2>{event.title}</h2>
                                    <p>{event.description}</p>
                            </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export function EventInfo({venuePic, name, time, address, description, extraDetails, mapLink, start, end}){
    return (
        <section className="event-info">
                {venuePic && (
                    <div className="event-image">
                        <img src={venuePic} alt={name}/>
                    </div>
                )}

                    <div className="event-details">
                            <h1>{name}</h1>
                            <h2>{time}</h2>

                            {address &&  <p>{address}</p>}
                            {description && (
                                <p className="eventDescription">{description}</p>
                            )}

                            {extraDetails && (
                                <p className="eventDescription">{extraDetails}</p>
                            )}

                            <div className="event-buttons">
                                    {mapLink && (
                                        <button className="event-btn"><a href={mapLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            > MAP </a></button>
                                    )}

                                    {start && end && (
                                        <AddToCalendar 
                                            title = {name}
                                            description = {description}
                                            location = {address}
                                            start = {start}
                                            end = {end}
                                        />
                                    )}
                            </div>
                    </div>

                    
        </section>
    )
}

export function AddToCalendar({
    title,
    description,
    location,
    start,
    end
}) {
    const handleAddToCalendar = () => {
        const event = {
            title: title,
            description: description,
            location: location,
            start: start,
            end: end
        };
            const escapeICS = (value) =>
        String(value ?? "")
            .replace(/\\/g, "\\\\")
            .replace(/\r\n|\r|\n/g, "\\n")
            .replace(/,/g, "\\,")
            .replace(/;/g, "\\;");

        const calendarData = [
            "BEGIN:VCALENDAR",
            "VERSION:2.0",
            "PRODID:-//Wedding Website//EN",
            "CALSCALE:GREGORIAN",
            "BEGIN:VEVENT",
            `UID:${encodeURIComponent(title)}-${start}@wedding`,
            `DTSTAMP:${new Date().toISOString()
                .replace(/[-:]/g, "")
                .replace(/\.\d{3}/, "")}`,
            `DTSTART:${start}`,
            `DTEND:${end}`,
            `SUMMARY:${escapeICS(title)}`,
            `DESCRIPTION:${escapeICS(description)}`,
            `LOCATION:${escapeICS(location)}`,
            "END:VEVENT",
            "END:VCALENDAR"
        ].join("\r\n") + "\r\n";

        const blob = new Blob([calendarData], {
            type: "text/calendar;charset=utf-8"
        });

        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = url;
        link.download = `${title.replace(/[^a-zA-Z0-9]/g, "-")}.ics`;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    setTimeout(() => URL.revokeObjectURL(url), 1000);
    };

    return (
        <button
            type="button"
            className="event-btn"
            onClick={handleAddToCalendar}
        >
            ADD TO CALENDAR
        </button>
    );
}


export function footer(){
    return (
        <section className="footer">
                <h1>C & E</h1>
                <p>---------</p>
                <p>Created by Kaleb :P</p>
        </section>
    )
}