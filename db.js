const mongoose = require("mongoose");

mongoose.connect(
	"mongodb+srv://shiveshdewangan:Sapient%40123@cluster0.mgdgw.mongodb.net/sheygram?retryWrites=true&w=majority",
	{ useNewUrlParser: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;

connection.on("connected", () => {
	console.log("Mongo db connection successfull");
});

connection.on("error", () => {
	console.log("Mongo db connection error");
});

module.exports = mongoose;
