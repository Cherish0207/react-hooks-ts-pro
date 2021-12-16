import React, { PropsWithChildren } from "react";
import "./index.less";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import Nav from "@/components/Nav";
import { CombinedState, ProfileState } from "@/typings";
import mapDispatchToProps from "@/store/actions/profile";
type Props = PropsWithChildren<
  RouteComponentProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps
>;

function Profile(props: Props) {
  return (
    <>
      <Nav />
    </>
  );
}
const mapStateToProps = (state: CombinedState): ProfileState => state.profile;
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
