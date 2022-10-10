import styled from "styled-components"
import {  useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
export default function SelectChair () {
    const { id } = useParams();
    const [seatList, setSeatList] = useState([])
    const [greenList, setGreenList] = useState([])
    const [ylList, setYlList] = useState([])
    const [namee, setNamee] = useState('')
    const [cpf, setCpf] = useState('')
    const [film, setFilm] = useState(undefined)
    function classColor (m) {
        if(greenList.includes(m.id)){
            return (
                'green seat'
                
            )
            
        }else if(ylList.includes(m)){
            return (
                'yellow seat'
            )
        }else {
            return (
                'seat'
            )
        }
    }

    function greenToggle (m) {
        if(greenList.includes(m)){
            setGreenList(greenList.filter((z)=> z !== m ))
        }else {
            setGreenList([...greenList, m])
        }
        
    }

    
		
    function reservSeat (event) {

        event.preventDefault(); // impede o redirecionamento

		const requisicaoPost = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", {
			ids: greenList,
	        name: namee,
	        cpf: cpf
		});
        requisicaoPost.then(res => console.log(res))
    }

    useEffect(() => {
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${id}/seats`);

		requisicao.then(res => {
            setSeatList(res.data.seats)
            console.log(res.data)
            setYlList((res.data.seats).filter((m)=> m.isAvailable === false))
            setFilm(res.data)
		});
	}, []);
    return (
        <>
        <Select>
            <h2>Selecione o(s) assento(s)</h2>
            <div className="seats">{seatList.map((m, key)=><button key={key} onClick={ylList.includes(m)? undefined : ()=> greenToggle(m.id)} className={(classColor(m))}>{m.name > 9 ? m.name: `0${m.name}`}</button>)}</div>
            <div className="seats"><div><button className="green seat"></button><p>Selecionado</p></div><div><button className="seat"></button><p>Disponível</p></div><div><button className="yellow seat"></button><p>Indisponível</p></div></div>
            <form onSubmit={reservSeat}>

                <div className="inputs">
                    <p>Nome do comprador:</p>
                    <input type="text" value={namee} onChange={e => setNamee(e.target.value)} placeholder="Digite seu nome..." required />
                    <p>CPF do comprador:</p>
                    <input type="text" value={cpf} onChange={e => setCpf(e.target.value)} placeholder="Digite seu CPF..." required/>
                    
                </div>
                <button type="submit">Reservar assento(s)</button>
            </form>
           
        </Select>
         <Footer>
         <div className="foo">
    
         
             <img src={film === undefined? '' : film.movie.posterURL} alt=''/>
             <div>
                <p>{film === undefined? '' : film.movie.title} </p>
                <p>{film === undefined? '' : `${film.day.weekday}-${film.name}`}</p>

             </div>
 
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

    .seats {
        width: 330px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        text-align: center;
        font: 400 13px 'Roboto', sans-serif;
        color: #4E5A65;
    }

    .seat {
        width: 26px;
        height: 26px;
        border-radius: 12px;
        border:  1px solid #808F9D;
        margin-right: 7px;
        margin-bottom: 18px;
        font: 400 11px 'Roboto', sans-serif;
        text-align: center;
        color: #000;
    }

    .green {
        background: #1AAE9E;
        border: 1px solid #0E7D71;
    }

    .yellow {
        background: #FBE192;
        border: 1px solid #F7C52B;
    }

    .inputs  {
        display: flex;
        flex-direction: column;
        text-align: start;
        width: 327px;
        margin-top: 42px;
    }

    .inputs p {
        font: 400 18px 'Roboto', sans-serif;
    }

    input {
        height: 51px;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        margin-bottom: 7px;
        padding-left: 18px;
        font: 400 18px 'Roboto', sans-serif;
    }

    form button {
        background-color: #E8833A;
        width: 225px;
        height: 42px;
        border: none;
        border-radius: 3px;
        color: white;
        margin-top: 50px;
        font: 400 18px 'Roboto', sans-serif;
        margin-bottom: 123px;
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