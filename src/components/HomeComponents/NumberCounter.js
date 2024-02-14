import React, { useEffect, useRef, useState } from 'react';

function NumberCounter({ initialNumber, targetNumber }) {
    const numberRef = useRef(null);
    const [animated, setAnimated] = useState(false);

    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animateNumber();
                setAnimated(true);
            }
        });
    };

    const animateNumber = () => {
        let currentNumber = 0;
        const duration = 3000;
        const startTime = performance.now();

        const updateNumber = (currentTime) => {
            const progress = (currentTime - startTime) / duration;
            if (progress < 1) {
                currentNumber = Math.floor(progress * targetNumber);
                numberRef.current.textContent = currentNumber.toLocaleString();
                requestAnimationFrame(updateNumber);
            } else {
                numberRef.current.textContent = targetNumber.toLocaleString();
            }
        };

        requestAnimationFrame(updateNumber);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, { threshold: 0.95 });
        observer.observe(numberRef.current);

        return () => observer.disconnect();
    });

    return <div ref={numberRef}>{initialNumber}</div>;
}

export default NumberCounter;
