const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.pqspl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log('connected successfully');
  } catch (e) {
    console.log(e.message);
  }
};
module.exports = connectDb;
