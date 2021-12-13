import { ProfileState } from "@/typings";
import { AnyAction } from "redux";

const initialState: ProfileState = {};
export default function (
  state: ProfileState = initialState,
  action: AnyAction
) {
  return state;
}
