import React from 'react'
import { ContactWrapper, Img, Name, Today, PriceRed, Container, IconBox, Ctext,  Profile, SocialMedia, Icon, ContactFriend, Avatar, Text, UserName, Price, LastName,  } from './style.js';




function Contact() {
    return (
        <ContactWrapper>
            <Container>

                <IconBox>
                    <a href="#"><i class="fas fa-cog"></i></a>
                    <a href="#"><i class="fas fa-times"></i></a>
                </IconBox>

                <Profile>
                    <Img><i class="fas fa-user-alt"></i></Img>
                    <Name>Jones Kanwald</Name>
                </Profile>

                <SocialMedia>
                    <div>
                        <Icon> <i class="fas fa-wallet" /> </Icon>
                        <p>Time Up</p>
                    </div>
                    <div>
                        <Icon> <i class="fab fa-cc-amazon-pay" /></Icon>
                        <p>Pay</p>
                    </div>
                    <div>
                        <Icon><i class="fab fa-telegram-plane"></i></Icon>
                        <p>Send</p>
                    </div>
                    <div>
                        <Icon><i class="fab fa-alipay" /></Icon>
                        <p>Downl</p>
                    </div>
                </SocialMedia>

                <Ctext>Recent Transcaction</Ctext>

                <Today>Today</Today>

                <ContactFriend>
                    <Avatar><i class="fas fa-user-alt"></i></Avatar>
                    <Text>
                        <UserName>Jon Smith</UserName>
                        <LastName>Tershtegn Lope</LastName>
                    </Text>
                    <Price>+ $200</Price>

                </ContactFriend>

                <ContactFriend>
                    <Avatar><i class="fas fa-user-alt"></i></Avatar>
                    <Text>
                        <UserName>Mikel Jordan</UserName>
                        <LastName>Mrgelfse Lope</LastName>
                    </Text>
                    <PriceRed>- $440</PriceRed>

                </ContactFriend>

                <ContactFriend>
                    <Avatar><i class="fas fa-user-alt"></i></Avatar>
                    <Text>
                        <UserName>Tom Holand</UserName>
                        <LastName>Molife Bland</LastName>
                    </Text>
                    <Price>+ $8900</Price>

                </ContactFriend>

                <ContactFriend>
                    <Avatar><i class="fas fa-user-alt"></i></Avatar>
                    <Text>
                        <UserName>Jon Smith</UserName>
                        <LastName>Tershtegn Lope</LastName>
                    </Text>
                    <PriceRed>- $70</PriceRed>

                </ContactFriend>

                



            </Container>
        </ContactWrapper>
    )
}

export default Contact
