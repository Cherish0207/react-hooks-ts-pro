import * as actionTypes from "@/store/action-types";
export default {
  setCurrentCategory: (currentCategory: string) => {
    return {
      action: actionTypes.SET_CURRENT_CATEGORY,
      payload: currentCategory,
    };
  },
};
