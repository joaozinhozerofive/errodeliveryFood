const {Router} = require("express")
const ordersRoutes = Router(); 


const OrdersController = require("../Controllers/OrdersController")
const ordersController = new OrdersController();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")



ordersRoutes.use(ensureAuthenticated)




ordersRoutes.post("/", ordersController.create)
ordersRoutes.get("/", ordersController.index)
ordersRoutes.get("/:order_id", ordersController.show)
ordersRoutes.delete("/:order_id", ordersController.delete)



module.exports = ordersRoutes;