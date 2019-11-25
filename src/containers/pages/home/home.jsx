import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import HomeComponent from '../../../components/pages/home';
import { isUsersFetching as isFetchingUsers, getUsersData } from './selectors';
import { fetchUsers as getUsers } from './actions';

class Home extends React.PureComponent {
  componentDidMount() {
    const { isUsersFetching, users, fetchUsers } = this.props;
    if (!isUsersFetching && users.length === 0) fetchUsers();
  }

  render() {
    return <HomeComponent {...this.props} />;
  }
}

Home.propTypes = {
  isUsersFetching: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
  fetchUsers: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isUsersFetching: isFetchingUsers(),
  users: getUsersData(),
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(getUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
