import styled from 'styled-components';
export default function Header () {
    return(
        <HeaderSty>

            <div>
                <h1>CINEFLIX</h1>
            </div>
        </HeaderSty>
    )
}

const HeaderSty = styled.div`
    h1 {

        background-color: #C3CFD9;
        color: #E8833A;
        font: 400 34px 'Roboto', sans-serif;
        height: 67px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
    }
`