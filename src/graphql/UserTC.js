import { composeWithMongoose } from "graphql-compose-mongoose";
import User from "../models/User.js";

// mongoose --> TypeComposer
const customisationOptions = {};
export const UserTC = composeWithMongoose(User, customisationOptions);
