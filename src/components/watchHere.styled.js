import Styled from "styled-components";

const Container = Styled.div`
    color:white;
    height: calc(100vh - 70px);
    display: flex;
    flex-wrap: wrap;
    margin:0 auto;
    overflow-y:auto;
    overflow-x: hidden;
    position: relative;
    width: 0;
    flex-grow:1;
    padding: .5rem;
    padding-top: 4rem;
    padding: .5rem 1%;
    gap: 2%;
    @media screen and (max-width: 500px){
    width: 100%;
    }
&::-webkit-scrollbar{
    width: 0;
}


    .watch-left{
        flex-grow:1;
        width: 60%;
        display : flex;
        flex-direction: column;
        gap: .5rem;
    & > :nth-child(1){
        width: 100% !important;
        display: flex;
        background: #333;
        video{
            width: 100% !important;
        }
    }

        
        .title{
            font-family: ubuntu,sans-serif;
            line-height: 1.5rem;
            font-size: 1.1rem;
            margin-bottom : .5rem;
        }

        .info{
            display: flex;
            justify-content: space-between;
            gap: .5rem;
            flex-wrap: wrap;
            margin-bottom: .5rem;

            .channel-info{
                display: flex;
                align-items: center;
                gap: .3rem;

                img{
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 50%;
                    cursor: pointer;

                }

                div{
                    display: flex;
                    flex-direction: column;
                    font-family: sans-serif;
                    font-size: .8rem;
                    gap: .2rem;
                    
                    
                    & > :nth-child(1){
                        font-size: 1rem;
                        text-decoration: none;
                        color: #fff;
                        cursor: pointer;
                    }
                }

                .subscribe-div{
                    background: #444;
                    padding: .6rem 1rem;
                    border-radius: 1.5rem;
                    margin-left: 1rem;
                    font-size: 1rem;
                    font-family: ubuntu,sans-serif;
                    cursor: pointer;
                    transition: all .15s ease-in-out;
                    &:hover{
                        background-color: #555 ;
                    }
                }

            }

            .other-info{
                display: flex;
                align-items: center;
                gap: .5rem;

                .like-dislike-info{
                    /* outline: 1px solid white; */
                    border-radius: 1.5rem;
                    background-color: #444;
                    overflow: hidden;
                    display: flex;
                    align-items: center;

                    button{
                        background-color: transparent;
                        color: white;
                        padding: .5rem .7rem;
                        border: none;
                        cursor: pointer;
                        transition : all .15s ease-in-out;
                        display: flex;
                        align-items: center;
                        gap: .5rem;
                        font-size: 1rem;
                        span{
                            font-size: 1.4rem;
                            display: flex;
                            align-items: center;
                        }
                        &:hover{
                        background-color: #555;
                        }
                    }

                    & > :nth-child(1){
                        border-right: 1px solid #666;
                        
                    }
                }

                .share-info{
                   background-color: #444;
                    color: white;
                    padding: .6rem .8rem;
                    border: none;
                    background-color: #444;
                    border-radius: 1.5rem;
                    transition : all .15s ease-in-out;
                    display: flex;
                    align-items: center;
                    gap: .5rem;
                    cursor: pointer;
                    &:hover{
                    background-color: #555;
                    }
                     span{
                        font-size: 1.2rem;
                        display: flex;
                        align-items: center;
                     }
                }

                .three-dot-div{
                    position: relative;
                    .three-dots-btn{
                    height: 2.5rem;
                    width: 2.5rem;
                    border-radius: 50%;
                    background-color: #444;
                    display: flex;
                    border: none;
                    color: #fff;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.1rem;
                    cursor: pointer;
                    transition : all .15s ease-in-out;
                    &:hover{
                    background-color: #555;

                    }
                }
                }
            }
        }

        .description{
            background-color: #444;
            border-radius:1rem ;
            padding: .5rem;
            line-height: 1.1rem;
            font-family: sans-serif;
            font-size: .9rem;
            line-height: 1.2rem;

            p{
            color: #fff9;
            font-size: .9rem;
            font-weight: bold;
            margin-bottom: .3rem;
            display: flex;
            gap: 1rem;
            }

            button{
                background-color: #444 ;
                border: none;
                color: #fff;
                padding: 0 .5rem;
                box-shadow: 0 0 6px #666;
                border-radius: 100px;
                margin: .2rem;
                cursor: pointer;
                transition: all .15s ease-in-out;
                &:hover{
                background-color: #555 ;
                }
            }
        }
    }

    .watch-right{
        flex-grow:1;
        width: 38%;
        min-width:270px;
        outline: 1px solid #444;
        height: auto;
        padding: 0 .5rem;


        .total-comments-and-sorts{
            margin-top:1rem;
            /* outline: 1px solid white; */
            display : flex;
            align-items: center;
            gap: 3rem;

            p{
                font-family: sans-serif;
                font-size: .9rem;
            }

            button{
                background-color: #222;
                border: none;    
                color: white;
                display: flex;
                align-items: center; 
                gap: .5rem;
                cursor: pointer;
                span{
                    font-size: 1.2rem;
                    display: flex: ;
                    align-items: center;
                }
            }
        }

        .add-comment-div{
            margin-top: .5rem;
            display: flex;
            align-items: center;
            gap: .5rem;
            img{
                width: 2rem;
                height: 2rem;
                border-radius: 50%;
                cursor: pointer;
            }

            div{
                display: flex;
                flex-direction: column;
                gap: .5rem;
                width: 100%;

                textarea{
                    background-color: transparent;
                    resize: none;
                    border: none;
                    border-bottom: 1px solid #555;
                    transition: all .15s ease-in-out;
                    font-size: 1rem;
                    color: #fff;
                    &:focus{
                        outline: none;
                        border-bottom: 1px solid #fff;
                    }
                }

                div{
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    button{
                        border: none;
                        border-radius: 1rem;
                        padding: .5rem .8rem;
                        font-family: sans-serif;
                        background-color: transparent;
                        color: white;
                        transition: all .15s ease-in-out;
                        cursor: pointer;
                    }
                    & > :nth-child(1){
                        &:hover{
                            background-color: #666;
                        }
                    }
                    & > :nth-child(2){
                        background-color: #87CEEB;
                        color: black;

                        &:hover {
                            background-color: #0096FF;
                        }
                    }
                }
            }

        }


        .all-comments{
            margin-top: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: .5rem;
            font-family: sans-serif;

            li{
                display: flex;
                gap: .5rem;
                

                img{
                    width: 2rem;
                    height: 2rem;
                    border-radius: 50%;
                    cursor : pointer;
                }

                div{
                    display: flex;
                    flex-direction: column;

                   & > p:nth-of-type(1){
                        margin: .3rem 0;
                        display: flex;
                        align-items: center;
                        gap: .5rem;
                        color: #999;
                        font-size: .8rem;

                       & >  :nth-child(1){
                            font-size: .8rem;
                            color: #fff;
                            cursor: pointer;
                        }
                    }

                    & > p:nth-of-type(2){
                        margin-bottom: .5rem;
                        font-size: .8rem;

                    }

                    div{
                        display: flex;
                        align-items: center;
                        flex-direction: row;
                        gap: .5rem;

                        span{
                            display: flex;
                            align-items: center;
                            margin-right: 1rem;
                            font-size: .8rem;
                            button{
                                font-size: 1rem;
                            }
                        }
                        
                        button{
                            background-color: transparent;
                            border: none;
                            border-radius: 1rem;
                            color : #fff;
                            font-size: 1rem;
                             height: 2rem;
                             width: 2rem;
                             display: flex;
                             align-items: center;
                             justify-content: center;
                             transition: all .15s ease-in-out;
                             cursor: pointer;
                            &:hover{
                                background-color: #333;
                                height: 2rem;
                                width: 2rem;
                                border-radius: 50%;
                            }
                        }  
                        
                        & > button:nth-of-type(2){
                            margin-left: 1rem;
                            width: auto;
                            height: auto;
                            padding: .3rem .5rem;
                            font-size: .8rem;
                             &:hover{
                            background-color: #333;
                            border-radius: 1rem;
                            }
                        }
                        
                    }
                }
            }
        }
    }

`;

export { Container };
