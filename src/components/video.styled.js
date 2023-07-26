import Styled from "styled-components";
const VideoContainer = Styled.div`
.browse-video-div{
     width: 350px;
     height: 300px;
     transition: all .15s ease-in-out;
     display: flex;
     flex-direction: column;
     gap: .5rem;
 }

    .browse-video-div{
        cursor: pointer;
        display : flex;
        flex-direction: column;
        width: 370px;
        height: 350px;
        transition: all 0s ease-in-out;
        
        @media screen and (max-width: 400px){
            width: 270px;
            height: 270px;
        }

        img{
            border-radius: .6rem;
        }
    .browse-video-bottom{
           display: flex;
           justify-content: space-between;
       
        .browse-video-info{

            img{
                border-radius: 50%;
            }

            display:flex;
            gap: .5rem;
            font-family: ubuntu,sans-serif;
            a{
                img{
                    width: 40px;
                }
            }

            p:nth-of-type(1){
             font-size: 1rem;

            }
            p:nth-of-type(2){
          font-size: .8rem;
          color: lightgray;
          margin-top:4px;
         }
             p:nth-of-type(3){
         font-size: .8rem;
         color: lightgray;
         display:flex;
         gap: .5rem;
       }

        }

        .browse-video-more-actions{
            position: relative;
            .three-dots-btn{
                background-color: transparent;
                color: gray;
                transition: all .15s ease-in-out;
                border: none;
                cursor:pointer;
                font-size:1rem;
                display: flex;
                align-items: center;

                &:hover{
                    color: white;
                }
            }

        }
    }
    }

`;
export { VideoContainer };
