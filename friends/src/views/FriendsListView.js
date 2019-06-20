import React from "react";
import { connect } from "react-redux";
import { FriendsList } from "../components";
import { getFriends } from "../actions";
// import Loader from "react-loader-spinner";

class FriendsListView extends React.Component {
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    console.log(this.props);
    // if (this.props.isLoading) {
    //   <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />;
    // }
    return (
      <div className="FriendsList_wrapper">
        <FriendsList friends={this.props.friends} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friendsReducer.friends,
  isLoading: state.friendsReducer.isLoading
});

export default connect(
  mapStateToProps,
  {
    getFriends
  }
)(FriendsListView);
