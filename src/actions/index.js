import streams from "../api/streams";
import history from "../history";

export const signIn = (userId) => {
  return {
    type: "SIGN_IN",
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const res = await streams.post("/streams", { ...formValues, userId});
  dispatch({ type: "CREATE_STREAM", payload: res.data });
  //Do some programatic navigation to home
  //automatically navigate user back to home
  history.push('/');
};

export const fetchStream = (id) => async (dispatch) => {
  const res = await streams.get(`/streams/${id}`);
  dispatch({ type: "FETCH_STREAM", payload: res.data });
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: "DELETE_STREAM", payload: id });
};

export const updateStream = (id, updatedValues) => async (dispatch) => {
  const res = await streams.patch(`streams/${id}`, updatedValues);
  dispatch({ type: "UPDATE_STREAM", payload: res.data });
};

export const fetchStreams = () => async (dispatch) => {
  const res = await streams.get("/streams");
  dispatch({ type: "FETCH_STREAMS", payload: res.data });
};
//make bulk action creaters
//Make a new file types.js in the actions folder to store all the action creater types and import them to reducers and action creaters to prevent typos in case of lots of action creaters
