import Immutable from "seamless-immutable";

export const Types = {
  SET_MISSIONS: "missions/SET_MISSIONS",
  SET_CURRENT: "missions/SET_CURRENT"
};

const INITIAL_STATE = Immutable({
  data: [
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, ligula nec mattis malesuada, justo nunc euismod mauris, eu efficitur orci nisl et ligula. Maecenas euismod ligula arcu. Quisque ullamcorper nibh ut diam pellentesque venenatis. Donec sed nisi blandit elit aliquet congue. Vivamus dignissim blandit porttitor.",
      title: "Minha primeira missão",
      options: ["Opção 1", "Opção 2", "Opção 3", "Opção 4", "Opção 5"],
      correctOption: 2
    }
  ],
  current: 0
});

export default function Missions(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_MISSIONS:
      return { ...state, data: action.payload.data };
    case Types.SET_CURRENT:
      return { ...state, current: action.payload.current };
    default:
      return state;
  }
}

export const Creators = {
  setMissions: data => ({
    type: Types.SET_MISSIONS,
    payload: { data }
  }),
  setCurrent: current => ({
    type: Types.SET_CURRENT,
    payload: { current }
  })
};
