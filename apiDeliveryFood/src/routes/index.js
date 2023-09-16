const {Router} =  require("express");

const userRoutes = require("./users.routes");
const sessionRoutes = require("./Sessions.routes");
const adminRoutes = require("./AdminsSessions.routes");
const platesRoutes = require("./Plates.routes");
const tagsRoutes = require("./tags.routes");
const ordersRoutes = require("./orders.routes")

const routes = Router();



routes.use("/users",  userRoutes);
routes.use("/sessions",  sessionRoutes);
routes.use("/sessionsAdmin",  adminRoutes);
routes.use("/plates", platesRoutes);
routes.use("/tags", tagsRoutes);
routes.use("/orders", ordersRoutes);


module.exports = routes;
