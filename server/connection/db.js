import mongoose from "mongoose";

const Connection = async () => {
  try {
    const URL = `mongodb+srv://Sandeep007:Sandeep00@clone-inshorts.t741d.mongodb.net/clone-inshorts?retryWrites=true&w=majority`;

    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("databse connected succesfully");
  } catch (error) {
    console.log("error while connecting database1", error);
  }
};

export default Connection;
