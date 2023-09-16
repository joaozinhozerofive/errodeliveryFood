const knex = require ("../database/knex");
const AppError = require("../utils/AppError");


class OrdersController{
    async create(request, response){
        const user_id  = request.user.id
        const { observation, totalPrice, plates, quantity } = request.body;
    
        const [order_id] = await knex("orders").insert({
            user_id, 
            observation, 
            totalPrice
        });
    
        const cartsInsert = [];

        /*for 
        (valor inicial da variavel; 
        condição para o loop acontecer; 
        incremento da variavel após o loop ser concluido) 
        -- o valor inicial de variavel deve ser sempre igual a 0,
        já que queremos percorrer desde a primeira posição. A primeira posição de um array é igual a 0
        */

                                //4\\
        for (let i = 0; i < plates.length; i++) {
            const plate_id = plates[i];
            const quant = quantity[i];
    
            const cartItem = {
                plate_id,
                user_id,
                order_id,
                quantity: quant
            };
    
            cartsInsert.push(cartItem);
        }
    
        await knex("carts").insert(cartsInsert);
    
        response.json({
            order_id, 
            cartsInsert
        });
    }
    
    
    async index(request, response){
        const orders = await knex("orders")


        response.json({
            orders
        })

    }


    async show(request, response){
        const {order_id} = request.params;
        const order = await knex("orders").where("order_id", order_id);

        if(order.length === 0){
             throw new AppError("Pedido não encontrado");
        }



        const observation = await knex("orders").select("observation").where({order_id})
        const platesIds = await knex("carts").select("plate_id").where({order_id})
        
        const plate_id = platesIds.map(plate => plate.plate_id)
        
        const quantity = await knex("carts").select("plate_id", "quantity")
        .whereIn("plate_id", plate_id)
        .where({order_id})
        ;



        const plates = await knex("plates").whereIn("plate_id", plate_id)

        const plateQuantity = {}

        quantity.forEach(item => {
         //Aqui entre colchetes, definimos qual vai ser a chave e após o sinal de igual seu valor/propriedade 
           plateQuantity[item.plate_id] = item.quantity;
        });


        const platesWithQuantity = plates.map((plate) => {
            return{
                ...plate, 
            /*aqui estou acessando o quantity. quantity é uma propriedade da varievel plateQuantity,
            entre os colchetes estou querendo acessar todos os quantity 
            que tenham uma chave (plate_id neste caso) 
            igual a de cada plate. Ou seja, quero acessar a propriedade quantity que pertença a uma certa chave,
            neste caso esta certa chaveé o plate_id, então quero pegar todos quantity em que sua chave seja igual
            aos plate.plate_id

            */
                quantity : plateQuantity[plate.plate_id]
            }
            
        })



        response.json({
            platesWithQuantity
        })

    }


    async delete(request, response){
        const {order_id} = request.params;

        const order = await knex("orders").where("order_id", order_id);

        if(order.length === 0){
             throw new AppError("Pedido não encontrado");
        }
            await knex("orders").where({order_id}).delete();
            await knex("carts").where({order_id}).delete();

        



        response.status(200).json({})
    }
            

}

module.exports = OrdersController;