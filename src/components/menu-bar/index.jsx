import React from 'react'
import { MenuWrapper, Name, BookBox,  Container, LogoBox, LogoName, Menu, } from './style.js';
import bookimg from '../../img/book.jpg'


function MenuBar() {
    return (
        <MenuWrapper>

            <Container>

                <LogoBox>
                    <div><i className="fas fa-money-bill-wave"></i></div>
                    <LogoName>mooney</LogoName>
                </LogoBox>

                <Menu>
                    <li>
                        <i className="fas fa-home" style={{color:"rgb(146, 50, 252)"}} /> <a href="#" style={{color:"rgb(146, 50, 252)"}}> Dashboard</a>
                    </li>
                    <li>
                        <i class="fas fa-wallet" /> <a href="#"> Wallet</a>
                    </li>
                    <li>
                        <i class="fab fa-alipay" /><a href="#"> Transfer</a>
                    </li>
                    <li>
                        <i class="fas fa-user" /> <a href="#"> Profile</a>
                    </li>
                    <li>
                        <i class="fab fa-cc-amazon-pay" /> <a href="#"> Payment</a>
                    </li>
                </Menu>

                <BookBox>
                    <div><img src={bookimg} alt="" /></div>
                    <Name>Arnual Report</Name>
                    <p>Now or never!</p>
                    <a href="#">Download</a>
                </BookBox>

            </Container>

        </MenuWrapper>
    )
}

export default MenuBar
