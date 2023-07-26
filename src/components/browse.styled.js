import Styled from "styled-components";

const Container = Styled.div`
    color:white;
    width: auto;
    height: calc(100vh - 70px);
    flex-grow:1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-column-gap: 1.5rem;
    grid-row-gap: 1.5rem;
    margin:0 auto;
    overflow-y:auto;
    overflow-x: hidden;
    justify-items:center;
    position: relative;
    padding: .5rem;
    padding-top: 4rem;
    
@media screen and (max-width: 400px){
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

&::-webkit-scrollbar{
    width: 0;

}

   h2{
   position: absolute;
   height: 4rem;
   top : 0px;
   width: 100%;
   margin: auto;
   display: flex;
   font-family: ubuntu, sans-serif;
   display: flex;
   align-items: center;
   justify-content: center;
   }   
`;

export { Container };
