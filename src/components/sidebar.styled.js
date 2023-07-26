import Styled from "styled-components";

const Container = Styled.div`
position : sticky;
height : calc(100vh - 70px);
width: ${(props) => (props.$sidebarOpen ? "150px" : "46px")};
left: 0;
color : white;
overflow-y:auto;
z-index:10;
transition: all .15s ease-in-out;
box-shadow: 0 0 1px white;

&::-webkit-scrollbar{ 
    width:0;
};
scrollbar-width:none;

@media screen and (max-width: 500px){
    height: 60px;
    width: 100%;
    margin-top: .5rem;
    box-shadow: 0 0 0 0;
    display: flex;
    align-items: center;
}
`;

const Category = Styled.ul`
position: absolute;
display : flex;
flex-direction:column;
font-family: ubuntu,sans-serif;
gap:1.3rem;
width: 150px;


@media screen and (max-width: 500px){
    flex-direction: row;
    width: 100%;

}

li{
    transition : all .1s ease-in-out;
    padding: .5rem;
    cursor:  pointer;
    display: flex;
    align-items: center; 
    gap:1rem; 
    padding-left:1rem; 

    @media screen and (max-width: 500px){
        padding-top: 0;
        padding-bottom: 0;
    }

    &:hover{
        color: #fffb;
        border-right:3px solid white;
        border-left:${(props) => !props.$sidebarOpen && "3px solid white"};
    }
}

.active {
    border-left:${(props) =>
      !props.$sidebarOpen && "5px solid white !important"};
    border-right:${(props) =>
      props.$sidebarOpen && "5px solid white !important"};
      background-color: #333 ;
      font-size: 120%;
  }
`;

const Button = Styled.button`
    background-color: #222 ;
    border: none;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 28px;
    margin: 1px auto -10px 9px;
    transition: all .15s ease-in-out;
    color: lightgray;
    transform: rotate(${(props) => (props.$sidebarOpen ? "0deg" : "180deg")});
     &:hover{
    color: white;     
 }

  @media screen and (max-width: 500px){
     display: none;
 }
`;

export { Container, Category, Button };
