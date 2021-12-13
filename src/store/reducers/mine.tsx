import { MineState } from "@/typings";
import { AnyAction } from "redux";

const initialState: MineState = {};
export default function (state: MineState = initialState, action: AnyAction) {
  return state;
}
