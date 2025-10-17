import { useEffect, useRef, useState } from "react";

const useCountDown = (totalSeconds: number) => {
    const [count, setCount] = useState(0);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const countdown = totalSeconds - count;

    const countdownMinutes = countdown > 0 ? `${~~(countdown / 60)}`.padStart(2, "0") : "00";
    const countdownSeconds = countdown > 0 ? (countdown % 60).toFixed(0).padStart(2, "0") : "00";
    const expired = countdown <= 0;

    // Set up interval timer
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount((c) => c + 1);
        }, 1000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    // Check for interval expiration
    useEffect(() => {
        if (expired && intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, [expired]);

    return {
        countdownMinutes,
        countdownSeconds,
        expired
    }
};

export default useCountDown;