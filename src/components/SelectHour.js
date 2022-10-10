import styled from "styled-components"
import {  useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";


export default function SelectHour () {
    const [listDays, setListDays] = useState([])
    const [film, setFilm] = useState(undefined)
    const { id } = useParams();
    useEffect(() => {
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`);

		requisicao.then(res => {
            setListDays(res.data.days)
            setFilm(res.data)
            console.log(res.data)
		});
	}, []);
    console.log(listDays)
    return (
        <>

        <Select>
            <div >
                <h2>Selecione o horário</h2>
                {listDays.map((m)=> <div className="hour">
                        <p>{m.weekday} - {m.date}</p>
                        <div>
                            {(m.showtimes).map((z)=><Link to={`/sessao/${z.id}`}><button>{z.name}</button></Link>)}
                        </div>
                    </div>)}

            </div>

        </Select>
        <Footer>
        <div className="foo">
           
                
            <img src={film === undefined? '' : film.posterURL} alt=''/>
            <p>{film === undefined? '' : film.title}</p>
        
        </div>
        </Footer>
        </>
    )
}

const Select = styled.div`
    text-align: center;
    
    h2 {
        height: 110px;
        display: flex;
        justify-content: center;
        align-items: center;
        font: 400 24px 'Roboto', sans-serif;
    }

    .hour {
        width: 320px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: start;
        font: 400 20px 'Roboto', sans-serif;
    }

    .hour p {
        margin-bottom: 24px;
    }

    .hour button {
        width: 83px;
        height: 43px;
        background: #E8833A;
        border-radius: 3px;
        border: none;
        margin-right: 8px;
        font: 400 18px 'Roboto', sans-serif;
        color: white;
        margin-bottom: 23px;
        
    }
`

const Footer = styled.div`
    position: fixed;
    bottom:0;
    height: 117px;
    background-color: #DFE6ED;
    width: 100vw;
    display: flex;
    justify-content: center;
    

    .foo {
        width: 375px;
        position: relative;
        display: flex;
        align-items: center;
        font: 400 20px 'Roboto', sans-serif;
    }

    .foo p {
        margin-left: 14px;
    }

    
    img{
        height: 72px;
        position: relative;
        top: 0;
        border: 8px solid white;
        
        
    }

`