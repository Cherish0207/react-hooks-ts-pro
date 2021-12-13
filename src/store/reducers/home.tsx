import { HomeState } from "@/typings";
import { AnyAction } from "redux";

const initialState: HomeState = {};
export default function (state: HomeState = initialState, action: AnyAction) {
  return state;
}
