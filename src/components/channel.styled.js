import Styled from "styled-components";

const Container = Styled.div`
width : 100%;
display: flex;
flex-direction: column;

.images{
    position: relative;
    width: 100%;


    .banner{
        width: 100%;
        max-height: 350px;
        position: sticky;
        top: 0;
    }

    .profile{
        width: 12vw;
        height: 12vw;
        object-fit:cover;
        position: absolute;
        border-radius: 50%;
        top: calc(100% - 4vw);
        right: 50%;
        transform: translateX(50%);
        box-shadow: 0 0 4px gray;
    }

    .info{
    color: #fff;
    position: absolute;
    top: calc(100% - -9vw);
    right: 50%;
    transform: translateX(50%);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: ubuntu,sans-serif;

    .channel-name{
        font-size: 1.5rem;
    }

    .subscribers{
        font-size: 1rem;
        color: #fffb;
    }
}
}


.channel-videos{
    color:white;
    width: 100%;
    flex-grow:1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-column-gap:.5rem;
    grid-row-gap: 1.5rem;
    margin: 11rem auto 0 auto;
    overflow-y:auto;
    overflow-x: hidden;
    justify-items:center;
    position: relative;
    padding: .5rem;

    @media screen and (max-width: 800px){
        margin-top: 8rem;
    }

    
&::-webkit-scrollbar{
    width: 0;
}  
}
`;

export { Container };
