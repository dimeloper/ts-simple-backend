import { Document, Model, Schema } from 'mongoose';
import mongoose from '../config/database';

export interface IUser extends Document {
  email: string;
  password: string;
}

export interface IUserModel extends Model<IUser> {
  // custom methods model would be defined here
}

const schema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const UserModel = mongoose.model('User', schema) as IUserModel;

export default UserModel;
