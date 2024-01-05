import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Activity } from "../../models/activityModels";

export interface FavoritesState {
  favActivities: Activity[];
}

//getting first state from local storage
const favActivities = JSON.parse(
  localStorage.getItem("favActivities") ?? "[]"
) as Activity[];



const initialState: FavoritesState = {
  favActivities,
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addActivity: (state, action: PayloadAction<Activity>) => {
      // Redux toolkit makes all mutations into immutable operations, therefore, i can use a .push without trouble
      state.favActivities.push(action.payload);

      //adding the new array to localstorage
      localStorage.setItem(
        "favActivities",
        JSON.stringify(state.favActivities)
      );
    },

    deleteActivity: (state, action: PayloadAction<Activity>) => {
      //adding to the state only those activities that dont have the same id that the one that is being removed
      state.favActivities = state.favActivities.filter(
        (act) => act.id !== action.payload.id
      );
      //adding the new favActivities array to localstorage
      localStorage.setItem(
        "favActivities",
        JSON.stringify(state.favActivities)
      );
    },

  },
});

export const {
  addActivity,
  deleteActivity,
} = favoritesSlice.actions;
export default favoritesSlice.reducer;