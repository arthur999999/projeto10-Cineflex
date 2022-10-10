import styled from 'styled-components';
import axios from "axios";
export default function End ({namee, cpf, film, greenList, seatNumb}) {
    function reservSeat () {

        

		const requisicaoPost = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", {
			ids: greenList,
	        name: namee,
	        cpf: cpf
		});
        requisicaoPost.then(res => console.log(res))
        
    }

    reservSeat ()
    return (
        <Select>

            <h2>Pedido feito <br/> com sucesso!</h2>
            <div>
                <h3>Filme e sessão</h3>
                <p>{film.movie.title}</p>
                <p>{film.day.date} {film.name}</p>
            </div>
            <div>
                <h3>Ingressos</h3>
                {seatNumb.map((m)=><p>Assento {m}</p>)}
            </div>
            <div>
                <h3>Comprador</h3>
                <p>Nome: {namee}</p>
                <p>CPF: {cpf}</p>
            </div>

            <button onClick={()=>window.location = '/'}>Voltar pra Home</button>
        </Select>
    )
}

const Select = styled.div`

        display: flex;
        flex-direction: column;
        align-items: center;


        h2 {
            font: 700 24px 'Roboto', sans-serif;
            color: #247A6B;
            text-align: center;
            margin-bottom: 54px;
            margin-top: 14px;
        }

        div {
            width: 320px;
            margin-bottom: 55px;
        }

        h3 {
            font: 700 24px 'Roboto', sans-serif;
            color: #293845;
            margin-bottom: 15px;
        }

        p {
            font: 400 22px 'Roboto', sans-serif;
            color: #293845;
            
        }

        button {
            width: 225px;
            height: 42px;
            margin-bottom: 10px;
            border: none;
            background: #E8833A;
            border-radius: 3px;
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            color: white;
        }
    `