import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import ProfilesReducer from './profiles_reducer';
import PostsReducer from './posts_reducer';
import SearchReducer from './search_reducer';
import CommentReducer from './comments_reducer';
import NewsReducer from './news_reducer';

const EntitiesReducer = combineReducers({
  search: SearchReducer,
  posts: PostsReducer,
  profiles: ProfilesReducer,
  users: UsersReducer,
  comments: CommentReducer,
  news: NewsReducer,
});

export default EntitiesReducer;
