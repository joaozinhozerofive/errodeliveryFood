const knex = require("../database/knex/index")
const DiskStorage =  require("../providers/DiskStorage")
const AppError = require('../utils/AppError');


class PlatesImgController {

    

    async update(request, response){
        const {plate_id} = request.params;

        const plates = await knex("plates").where({plate_id})


        if(plates.length === 0){
            throw new AppError("Prato não encontrado")
        }

        const diskStorage = new DiskStorage();

        const plateImg = request.file.filename
        

        


        const plate = await knex("plates").where({plate_id});


        if(!plate){
            throw new AppError("Prato não encontrado")
        }

        const filename = await diskStorage.saveFile(plateImg)
        const data = new Date();

        const dateFormatted = data.toISOString().slice(0, 19).replace("T", " ");

        const imgInsert = {
            img : plateImg, 
            updated_at : dateFormatted
        }


        await knex("plates").update(imgInsert).where({plate_id})


        response.json({imgInsert, plate});

    }


}


module.exports = PlatesImgController;