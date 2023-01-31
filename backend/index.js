import express from "express";
import FileUpload from "express-FileUpload";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/database.js";
import sequelizeStore from "connect-session-sequelize";
import bodyParser from "body-parser";

import AmenityRoutes from "./routes/AmenityRoute.js";
import AmenityVenueRoutes from "./routes/AmenityVenueRoute.js";
import CategoryRoutes from "./routes/CategoryRoute.js";
import FavoriteRoutes from "./routes/FavoriteRoute.js";
import FinderRoutes from "./routes/FinderRoute.js";
import GaleryRoutes from "./routes/GaleryRoute.js";
import LocationRoutes from "./routes/LocationRoute.js";
import OrderRoutes from "./routes/OrderRoute.js";
import TypeRoutes from "./routes/TypeRoute.js";
import TypeVenueRoutes from "./routes/TypeVenueRoute.js";
import UserRoutes from "./routes/UserRoute.js";
import VendorRoutes from "./routes/VendorRoute.js";
import VenueRoutes from "./routes/VenueRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import Venues from "./models/VenueModel.js";

dotenv.config();

const app = express();
const sessionStore = sequelizeStore(session.Store);
const store = new sessionStore({
  db: db,
});

// (async () => {
//   await db.sync({ alter: true });
//   // await Venues.sync();
// })();

app.use(FileUpload());
app.use(express.static("public"));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.use(UserRoutes);
app.use(FinderRoutes);
app.use(VendorRoutes);

app.use(AmenityRoutes);
app.use(CategoryRoutes);
app.use(LocationRoutes);
app.use(TypeRoutes);
app.use(VenueRoutes);

app.use(GaleryRoutes);
app.use(FavoriteRoutes);
app.use(TypeVenueRoutes);
app.use(AmenityVenueRoutes);

app.use(OrderRoutes);

app.use(AuthRoute);

// store.sync();
// --make sessiontable

app.listen(process.env.APP_PORT, () => {
  console.log("server running...");
});
