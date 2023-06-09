import {connect} from "mongoose";

export const startConnection = async () => {
  try {
    const db = await connect("mongodb://localhost:27017/crud-database");
    console.log(db.connection.name);
  } catch (error) {
    console.error(error);
  }
};