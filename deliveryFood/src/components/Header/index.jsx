import { Container } from "./style"
import logoFood from "../../Assets/logofood.svg"
import {FiSearch} from "react-icons/fi"
import { InputHeader } from "../InputHeader"
import { Button } from "../Button"
import { FiShoppingCart } from "react-icons/fi"
import { useNavigate } from "react-router-dom"
import hamburguer from "../../Assets/hamburguer.svg"


import buttonLogout from "../../Assets/buttonlogout.svg"
import buttonOrder from "../../Assets/buttonOrders.svg"

export function Header({isAdmin = true}){

    const navigation = useNavigate();


    return(
        <Container>
            {isAdmin ? <header>
            <div 
                onClick={() => navigation("/menu")}
                className="hamburguer">
                <img src={hamburguer} alt="hamburguer" />
            </div>
        <div 
        onClick={() => navigation("/")}
        className="logo">
        <img src={logoFood} alt="logoFood" />
        <h1>food explorer</h1>
        </div>

         <p>admin</p>

        <div className="input">
        <InputHeader
        onClick={() => navigation("/")}
        type = "text"
        icon={FiSearch}
        placeholder = "Busque por pratos ou ingredientes"
        />
        </div>

        <div className="orders">
        <img 
        onClick={() => navigation("/pedidos")}
        src={buttonOrder} alt="Botão de pedidos" />
        <Button
        title={`${"01"}` }
        />
        </div>

        <Button
        className = "cart"
        onClick={() => navigation("/new")}
        title={`Novo prato` }
        />

        <img id="logout" src={buttonLogout} alt="Botão de logout" />
        </header> : 

        <header>

            <div 
            onClick={() => navigation("/menu")}
            className="hamburguer">
                <img src={hamburguer} alt="hamburguer" />
            </div>

        <div onClick={() => navigation("/")}>
        <img src={logoFood} alt="logoFood" />
        <h1>food explorer</h1>
        </div>

        <div className="input">
        <InputHeader
        onClick={() => navigation("/")}
        type = "text"
        icon={FiSearch}
        placeholder = "Busque por pratos ou ingredientes"
        />
        </div>

        <div className="requests">
        <img 
        onClick={() => navigation("/carrinho")}
        src={buttonOrder} alt="Botão de pedidos" />
        <Button
        title={`${"01"}` }
        />
        </div>

        <Button
        className = "cart"
        onClick={() => navigation("/carrinho")}
        icon={FiShoppingCart}
        title={`Carrinho` }
        />

        <img id="logout" src={buttonLogout} alt="Botão de logout" />
        </header>}
        
        
        </Container>
        
        
    )
}