import styled from "styled-components"
import axios from "axios";
import { useState, useEffect } from "react";

export default function SelectFilm () {

    const [listFilms, setListFilms] = useState("");

	useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

		requisicao.then(res => {
			setListFilms(res.data);
            console.log(res.data)
		});
	}, []);
    return(
        <Select>

        <div>
            <h2>Selecione o filme</h2>
            

            <div className="Films">
                {listFilms.map((m)=><div><img src={m.posterURL} alt="what" /></div>)}
            </div>
            
        </div>
        </Select>
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

    .Films {
        display: flex;
        width: 320px;
        flex-wrap: wrap;
    }

    .Films div {
        width: 145px;
        height: 290px;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
    }

    .Films img {
        width: 129px;
    }
`