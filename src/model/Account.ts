import { Schema, model } from 'mongoose';

interface IAccount {
  //Interface for the account schema
  username: string;
  password: string;
  balance: number;
}

const accountSchema = new Schema<IAccount>({
  //Creating the account schema
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minLength: 8,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

const Account = model<IAccount>('Account', accountSchema); //Creating the account model

export default Account; //Exporting the account model
