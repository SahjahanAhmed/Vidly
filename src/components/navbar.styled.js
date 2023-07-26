import Styled from "styled-components";

const Container = Styled.div`
  background-color: #222;
  color:white;
  position : sticky;
  height : 70px;
  right : 0;
  top : 0;
  z-index: 100;
  display: flex;
  align-items:center;
  justify-content: space-between;
  box-shadow: 0 0 1px white;
  `;

const Logo = Styled.div`
    height: 100%;
    width: 100%;
    max-width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;

    a{
        text-decoration: none;
        color: #fff;
        display: flex;
        gap: .5rem;

    }
    img{
        height:2rem;
        width: 2rem;
        border-radius: 50%;
        cursor: pointer;
        transition : all .4s ease-in-out;
        &:hover{
            transform: rotate(360deg);
        }
    } 
    h2 {
        cursor: pointer;
        font-family: ubuntu, sans-serif;
        letter-spacing: 3px; 
        font-size: 1.7rem;
    }
    `;

const Rightnav = Styled.div`
width: 100%;
display: flex;
align-items:center;
justify-content: flex-end;
gap: 1rem;
 
@media screen and (max-width: 400px){
    gap: .5rem;
}

.search-div{
    display:flex;
    align-items: center;
    position:relative;
    width: 70%;
    max-width: 700px;


label{
    position: absolute;
    right: 2px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.2rem;
    height: 2.2rem;
    width: 2.2rem;
    padding: .5rem;
    transition: all .1s ease-in-out;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: gray;
    cursor: pointer;

    @media screen and (max-width: 400px){
    display: none;
}

    &:hover{
        background-color: #555;
        color: white;
    }
}

    input{
        padding: .6rem;
        border-radius:1rem;
        border: none;
        outline : .5px solid darkgray;
        background-color: #222;
        color: white;
        font-size: 1rem;
        width: 100%;
        &:focus{
            box-shadow: 0 0 4px white;
        }
    }
}

.profile-and-notification-div{
    width: 30%;
    max-width:80px;
    display: flex;
    align-items:center;
    justify-content: space-between;
    margin:0 10px;

    @media screen and (max-width: 400px){
        gap: 1rem;
        transform: scale(.9);
        width: 40%;
    }
    
    button{
        background-color: #222;
        border:none;
        font-size:1.5rem;
        color: lightgray;
        cursor: pointer;
        display: flex;
        align-items: center;
    }

  .notification-btn{
    position: relative;
    transition : all .15s ease-in-out;

      &:hover{
      color: #fff;
  }

     &::before{
       content: '9+';
       font-size: 12px;
       background-color:red;
       padding: 2px;
       width:19px;
       height:16px;
       position: absolute;
       top:-12px;
       right:-6px;
       border-radius: 50%;
       display: flex;
       align-items: center;
       justify-content:center;
       color: #fff;
   }}

   .profile-btn{
        position: relative;
   }

    img{
        width:30px;
        height:30px;
        border-radius: 50%;
    }
}

`;

export { Container, Logo, Rightnav };
