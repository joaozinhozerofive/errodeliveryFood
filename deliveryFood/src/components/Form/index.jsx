import { Container } from "./style";

import { TagItem } from "../../components/TagItem";
import { Textarea } from "../Textarea";

import imgUpload from "../../Assets/uploadImg.svg"

export function Form(){
    return(
        <Container>

                <div className="selectImg">

                    <p>Imagem do prato</p>

                    <label htmlFor="imgPlate">
                        
                        <img src={imgUpload} alt="Imagem de upload " />

                        Selecione imagem

                    <input id="imgPlate" type="file" placeholder="Selecione uma imagem"/>

                    </label>


                <div className="name">

                    <p>Nome</p>

                    <input id="namePlate" type="text" placeholder="Ex.: Salada Ceasar" />

                </div>

                <div className="category">

                    <p>Categoria</p>

                     <select  id="event-category">

                    <option value="snack">Refeições</option>

                    <option value="desserts">Sobremesas</option>

                    <option value="drinks">Bebidas</option>
                </select>

                </div>

                </div>


                    <div className="ingredients">

                        <p>Ingredientes</p>

                        <div id="ingredients">

                        <TagItem 
                         isNew
                        placeholder='Adicionar'
                        />

                        <TagItem 
                        placeholder='Adicionar'
                        />

                        </div>


                    <div className="price">

                         <p>Preço</p>

                         <input id="price" type="text" placeholder="R$ 00,00" />

                    </div>
                </div>

                 <div className="description">

                    <p>Descrição</p>

                <Textarea

                placeholder = "Fale brevemente sobre o prato, seus ingredientes e composição"
                 />

                </div>

        </Container>
    )
}