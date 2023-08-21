var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var productsRouter = require("./routes/products");
var usersRouter = require("./routes/users");
var authRouter = require("./routes/auth");


var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
//dont this right now
app.use("/api/products", productsRouter);
app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter); //all end points will start with this 

// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/dist/index.html"));
  });
  
  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.send("error");
  });
  



















module.exports = app;

// this example works for mysql
// {
// "name": "Scotch Bonnet Chilli Jam",
// "ingredients":"Sugar, Scotch Bonnet, Salt, Dried Apricot, Red Peppers, Garlic, Ginger, Cider Vinegar",
// "description":"Super spicy jam that goes great on burgers, fries, cold meats, with cheese or to add a spicy kick to sauce or marinade. Jiggy Jams will always have you spicing up your life (can you tell I’m a Spice girls fan). Store in a cool dry place, once opened keep refrigerated and consume within 8 weeks.",
// "quantity": 10,
// "price": 4.99,
// "size": "340g"
// }
// // [
// //     {
// "id": 3,
// "name": "Scotch Bonnet Chilli Jam",
// "ingredients": "Sugar, Scotch Bonnet, Salt, Dried Apricot, Red Peppers, Garlic, Ginger, Cider Vinegar",
// "description": "Super spicy jam that goes great on burgers, fries, cold meats, with cheese or to add a spicy kick to sauce or marinade. Jiggy Jams will always have you spicing up your life (can you tell I’m a Spice girls fan). Store in a cool dry place, once opened keep refrigerated and consume within 8 weeks.",
// "quantity": 10,
// "price": 5
// //     },
// //     {
// //         "id": 4,
// //         "name": "Scotch Bonnet Chilli Jam",
// //         "ingredients": "Sugar, Scotch Bonnet, Salt, Dried Apricot, Red Peppers, Garlic, Ginger, Cider Vinegar",
// //         "description": "Super spicy jam that goes great on burgers, fries, cold meats, with cheese or to add a spicy kick to sauce or marinade. Jiggy Jams will always have you spicing up your life (can you tell I’m a Spice girls fan). Store in a cool dry place, once opened keep refrigerated and consume within 8 weeks.",
// //         "quantity": 240,
// //         "price": 5
