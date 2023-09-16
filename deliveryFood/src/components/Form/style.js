import styled from 'styled-components'


export const Container = styled.form`



display: flex;
flex-direction: column;
gap: 32px;

p{
        font-size: 1.6rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.LIGHT};
        margin-bottom: 1.6rem;
        margin-top: 1.6rem;
    }




    #namePlate, #price{

     text-decoration: none;
     color: ${({theme}) => theme.COLORS.WHITE};
     background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
     gap: 1.2rem ;
     padding: 1.4rem 3.2rem;
     border-radius: 0.8rem;
    }


    #price{
        width: 25.1rem;
    }

   

.name, .category, .ingredients, .price, .description{
    
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;

    textarea{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
    }

    

    #event-category{
        width: 100%;
        border: none;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
        color: ${({theme}) => theme.COLORS.WHITE};
        display: flex;
        align-items: center;
        gap: 1.2rem ;
        padding: 1.6rem 3.2rem;
        border-radius: 0.8rem;
    }

    #ingredients{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
        border-radius: 0.8rem;
        display: flex;
        gap: 1rem;
        padding: 0.8rem;
        width: 100%;
    }
    }


label{  
     background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
     display: flex;
     align-items: center;
     gap: 1.2rem ;
     padding: 1.2rem 3.2rem;
     border-radius: 0.8rem;

       #imgPlate{
        display: none;
       } 
}





`