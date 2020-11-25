import {post, get} from '../Client';

const SearchUser = userName => {
  return get (
    `search/users?page=1&query=${userName}&client_id=UYpNmc0NcAqZzA2NoYmRauiWXoz0a_Hu1v-r1yvdH5k`
  );
};

const UserProfile = userName => {
  return get (
    `users/${userName}/?client_id=UYpNmc0NcAqZzA2NoYmRauiWXoz0a_Hu1v-r1yvdH5k`
  );
};

const UserPhotos = userName => {
  return get (
    `users/${userName}/photos/?per_page=30&client_id=UYpNmc0NcAqZzA2NoYmRauiWXoz0a_Hu1v-r1yvdH5k`
  );
};

module.exports = {
  SearchUser,
  UserProfile,
  UserPhotos,
};
