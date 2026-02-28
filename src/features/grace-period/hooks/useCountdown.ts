import { useState, useEffect, useCallback } from "react";

/** Total grace period in seconds (5 minutes by default) */
const GRACE_SECONDS = 5 * 60;

export const useCountdown = (totalSeconds = GRACE_SECONDS) => {
  const [remaining, setRemaining] = useState(totalSeconds);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running || remaining <= 0) return;
    const id = setInterval(() => setRemaining((s) => s - 1), 1000);
    return () => clearInterval(id);
  }, [running, remaining]);

  const hours = Math.floor(remaining / 3600);
  const mins = Math.floor((remaining % 3600) / 60);
  const secs = remaining % 60;

  const cancel = useCallback(() => setRunning(false), []);

  return { hours, mins, secs, remaining, running, cancel };
};
