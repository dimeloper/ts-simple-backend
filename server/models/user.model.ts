import { Document, Model, Schema } from 'mongoose';
import {ApiModel, ApiModelProperty} from 'swagger-express-ts';
import mongoose from '../config/database';
export interface IUser extends Document {
  email: string;
  password: string;
}

@ApiModel({
  description : 'User Model',
  name : 'User'
})
export class UserModel {
  /* tslint:disable */
  private _id? : string;
  /* tslint:enable */
  @ApiModelProperty({
    description : 'email of user',
    example: ['email@test.com'],
    required : true,
  })
  private email: string;

  @ApiModelProperty( {
    description : 'password of user',
    required : true
  })
  private password: string;

}

const schema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const UserMongooseModel = mongoose.model('User', schema);

export default UserMongooseModel;
