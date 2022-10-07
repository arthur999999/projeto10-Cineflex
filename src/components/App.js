import Header from "./Header";
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectFilm from "./SelectFilm";


export default function App () {
    return(
        <>
        <BrowserRouter>
        
            <GlobalStyles>
                <Header/>
                <Routes>
                    <Route path="/" element={<SelectFilm/>} />
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