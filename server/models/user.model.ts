import { Schema } from 'mongoose';
import { ApiModel, ApiModelProperty } from 'swagger-express-ts';
import mongoose from '../config/database';

export interface IUser {
  _id?: string;
  email: string;
  password: string;
}

@ApiModel({
  description: 'User Model',
  name: 'User'
})
export class UserModel implements IUser {
  /* tslint:disable */
  public _id?: string;
  /* tslint:enable */
  @ApiModelProperty({
    description: 'email of user',
    example: ['email@test.com'],
    required: true,
  })
  public email: string;

  @ApiModelProperty({
    description: 'password of user',
    required: true
  })
  public password: string;

}

const schema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const UserMongooseModel = mongoose.model('User', schema);

export default UserMongooseModel;
