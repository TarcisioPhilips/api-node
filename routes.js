const routes = require("express").Router();
const ProdutosController = require("./src/controllers/ProdutosController");
const PedidosController = require("./src/controllers/PedidosController");

//lista todas as opções de requisições de produtos disponíveis

routes.get("/produtos", ProdutosController.index);
routes.get("/produtos:id_produto", ProdutosController.indexJustOne);

routes.post("/produtos", ProdutosController.store);
routes.put("/produtos:id_produto", ProdutosController.update);
routes.delete("/produtos:id_produto", ProdutosController.destroy);

//lista todas as opções de requisições de Pedidos disponíveis

module.exports = routes;
