export interface ChatMsg {
  id: string;
  from: "bot" | "user";
  text: string;
}

const STORAGE_KEY = "afterme_ai_setup";

interface SetupState {
  progress: number;
  messages: ChatMsg[];
}

const DEFAULT_STATE: SetupState = {
  progress: 65,
  messages: [],
};

const load = (): SetupState => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as SetupState) : DEFAULT_STATE;
  } catch {
    return DEFAULT_STATE;
  }
};

const save = (state: SetupState) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

export const getSetupState = () => load();

export const addMessage = (msg: ChatMsg) => {
  const state = load();
  state.messages.push(msg);
  save(state);
  return state;
};

export const setProgress = (value: number) => {
  const state = load();
  state.progress = value;
  save(state);
};
