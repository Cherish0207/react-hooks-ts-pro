import { RouterState } from "connected-react-router";
import { HomeState, MineState, ProfileState } from ".";

export interface CombinedState {
  home: HomeState;
  mine: MineState;
  profile: ProfileState;
  router: RouterState;
}
