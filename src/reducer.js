export const initialstate = {
  user: null,
  playlists: [],
  item: null,
  playing: false,
  //REMOVE AFTER THE PROJECT >>>USED FOR DEBUGGING
  // token: null,
  // token:
  //   "BQAAzpGRm4oDGv5cTYLDsM9KTozLzYCc1UZzJMHwzG8a-3LWkErOIiQPhUEcJvUu1kWRECzGyy4maBmqRy6J5tgWejp4nIn5khhpEhgTRgdoVb7jqveFS-jfADvsoSzJUvUdqk3ZwTQdpwdjGOW9nH137sSeaVOFUdMlcTeJHzwQ2nJ1ezbJPX7P",
};
const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        loading: true,
        discover_weekly: action.discover_weekly,
      };
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
    //   case"SET_SPOTIFY":
    //   return{
    //       ...state,
    //       spotif
    //   }
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
