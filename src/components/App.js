import Header from "./Header";
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectFilm from "./SelectFilm";
import SelectHour from "./SelectHour";
import SelectChair from "./SelectChair";
import End from "./End";
import { useState} from "react";


export default function App () {
    const [namee, setNamee] = useState('')
    const [cpf, setCpf] = useState('')
    const [film, setFilm] = useState(undefined)
    const [greenList, setGreenList] = useState([])
    const [seatNumb, setSeatNumb] = useState ([])
    return(
        <>
        <BrowserRouter>
        
            <GlobalStyles>
                <Header/>
                <Routes>
                    <Route path="/" element={<SelectFilm/>} />
                    <Route path="/filme/:id" element={<SelectHour/>} />
                    <Route path="/sessao/:id" element={<SelectChair namee={namee} setNamee={setNamee} cpf={cpf} setCpf={setCpf} film={film} setFilm={setFilm} greenList={greenList} setGreenList={setGreenList} seatNumb={seatNumb} setSeatNumb={setSeatNumb}/>} />
                    <Route path="/sucesso" element={<End namee={namee} cpf={cpf} film={film} greenList={greenList} seatNumb={seatNumb}/>} />
                </Routes>

            </GlobalStyles>
            
        </BrowserRouter>
        </>
   )
}

const GlobalStyles = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

`