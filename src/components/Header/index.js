import React from 'react';
import * as C from './styles.js';
import { FaBars } from 'react-icons/fa';

const Header = () => {
    return (
        <C.Container>
            <C.Logo href="#">Schoolar</C.Logo>
            <C.Burguer><FaBars /></C.Burguer>

            <C.Menu>
                <C.Item><C.Link href="#">Inicio</C.Link></C.Item>
                <C.Item><C.Link href="#">Alunos</C.Link></C.Item>
                <C.Item><C.Link href="#">Turmas</C.Link></C.Item>
                <C.Item><C.Link href="#">Agenda</C.Link></C.Item>
                <C.Item><C.Link href="#">Login</C.Link></C.Item>
            </C.Menu>
        </C.Container>
    );
};

export default Header;
