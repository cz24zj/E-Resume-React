import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import skill from "./skill";
import experience from "./experience";
import school from "./school";
import coursework from "./coursework";
import profile from "./profile";
import user from './user';
import oneuser from './oneuser';
import message from './message'


const rootReducer = combineReducers({
  currentUser,
  user,
  oneuser,
  errors,
  skill,
  profile,
  experience,
  school,
  coursework,
  message
});

export default rootReducer;