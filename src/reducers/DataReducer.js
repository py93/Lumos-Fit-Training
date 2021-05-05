import {
  isAdded,
  addNewItem,
  toggleSavedStatus,
  toggleLikeStatus,
  removeItem,
} from "../utils/utilFunctions";

function addRemoveVideoFromLikedList(state, action) {
  const toggledStatusObj = {
    ...state,
    videos: toggleLikeStatus(state.videos, action.payload.id),
  };
  if (isAdded(toggledStatusObj.likedVideos, action.payload.id)) {
    const obj = {
      ...toggledStatusObj,
      likedVideos: removeItem(toggledStatusObj.likedVideos, action.payload.id),
    };
    return obj;
  } else {
    const obj = {
      ...toggledStatusObj,
      likedVideos: addNewItem(toggledStatusObj.likedVideos, {
        ...action.payload,
        likes: action.payload.likes + 1,
      }),
    };
    return obj;
  }
}

function addRemoveVideoFromSavedList(state, action) {
  const toggledStatusObj = {
    ...state,
    videos: toggleSavedStatus(state.videos, action.payload.id),
  };
  console.log(toggledStatusObj);
  if (isAdded(toggledStatusObj.savedVideos, action.payload.id)) {
    return {
      ...toggledStatusObj,
      savedVideos: removeItem(toggledStatusObj.savedVideos, action.payload.id),
    };
  } else {
    return {
      ...toggledStatusObj,
      savedVideos: addNewItem(toggledStatusObj.savedVideos, action.payload),
    };
  }
}

function filterByCategory(state, action) {
  if (state.filters.filterByCategories.includes(action.payload)) {
    return {
      ...state,
      filters: {
        ...state.filters,
        filterByCategories: state.filters.filterByCategories.filter(
          (item) => item !== action.payload
        ),
      },
    };
  } else
    return {
      ...state,
      filters: {
        ...state.filters,
        filterByCategories: state.filters.filterByCategories.concat(
          action.payload
        ),
      },
    };
}

export function dataReducer(state, action) {
  switch (action.type) {
    case "SET_VIDEOS":
      return { ...state, videos: action.payload };

    case "ADD_REMOVE_VIDEO_FROM_LIKED":
      return addRemoveVideoFromLikedList(state, action);

    case "ADD_REMOVE_VIDEO_FROM_SAVED":
      return addRemoveVideoFromSavedList(state, action);

    case "SORT": {
      if (action.payload === "HIGH_TO_LOW_LIKES") {
        return { ...state, sortBy: "HIGH_TO_LOW_LIKES" };
      }
      return { ...state, sortBy: "" };
    }

    case "FILTER_BY_CATEGORIES":
      return filterByCategory(state, action);

    case "CLEAR_FILTERS": {
      return {
        ...state,
        sortBy: "",
        filters: {
          includeOutOfStock: true,
          filterByCategories: [],
        },
      };
    }

    default:
      return state;
  }
}
