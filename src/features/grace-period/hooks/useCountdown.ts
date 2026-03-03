import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { safetyNetStore } from "../store/safetyNetStore";

export const useCountdown = () => {
  const navigate = useNavigate();
  const initialSeconds = safetyNetStore.getSecondsRemaining();
  const [remaining, setRemaining] = useState(initialSeconds);
  const [running, setRunning] = useState(true);
  const didExpire = useRef(false);

  // Tick down every second
  useEffect(() => {
    if (!running) return;
    if (remaining <= 0) {
      if (!didExpire.current) {
        didExpire.current = true;
        safetyNetStore.escalateToAlert();
        navigate("/emergency-alert", { replace: true });
      }
      return;
    }
    const id = setInterval(() => setRemaining((s) => s - 1), 1000);
    return () => clearInterval(id);
  }, [running, remaining, navigate]);

  const hours = Math.floor(remaining / 3600);
  const mins = Math.floor((remaining % 3600) / 60);
  const secs = remaining % 60;

  /** "I'm Safe" — cancels the alert and returns to dashboard. */
  const cancel = useCallback(() => {
    setRunning(false);
    safetyNetStore.resolve();
    navigate("/dashboard", { replace: true });
  }, [navigate]);

  /** "Trigger SOS Now" from grace period page — escalate immediately. */
  const escalate = useCallback(() => {
    setRunning(false);
    safetyNetStore.triggerSOS();
    navigate("/emergency-alert", { replace: true });
  }, [navigate]);

  return { hours, mins, secs, remaining, running, cancel, escalate };
};
