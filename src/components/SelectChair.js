import styled from "styled-components"
import {  useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
export default function SelectChair () {
    const { id } = useParams();
    const [seatList, setSeatList] = useState([])
    useEffect(() => {
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${id}/seats`);

		requisicao.then(res => {
            
            console.log(res.data)
		});
	}, []);
    return (
        <div>
            <h2>Selecione o(s) assento(s)</h2>
            <div>{}</div>
        </div>
    )
}