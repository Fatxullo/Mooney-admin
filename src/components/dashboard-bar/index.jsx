import React from 'react'
import { DashboardWrapper, Title, SearchIcon, ValuteMoney, Head, CardContainer, ExchangeCard, Box, TitleEx, Valute, ThirdStap, FirstBox, Data, Name, FirstStap, BoxEx, LastNum, GraphikBox, GraphikNum, GraphikImg, MainCard, CardBalance, Which, CardNumber, CardDote, GraphikLiens, Liens,  RedL, BlueL, Mon, SecondBox,
Gl2, Gl3, Gl4, Gl5, Liens2, Liens3, Liens4, Liens5, RedL2, RedL3, RedL4, RedL5, BlueL2, BlueL3, BlueL4, BlueL5,FourthCard, Fr, Do, Sircl, Price, Off, Text} from './style.js';
import Static1 from '../../img/gr1.png'



function Dashboard() {
    return (
        <DashboardWrapper>
            <Head>
                <input type="search" placeholder="Search" />
                <SearchIcon><i class="fas fa-search" style={{ color: "#ededed" }}></i></SearchIcon>
                <div>
                    <a href="#"><i class="fas fa-bell"></i></a>
                    <a href="#"><i class="fas fa-ellipsis-v"></i></a>
                </div>
            </Head>

            <Title>Dashboard</Title>


            <CardContainer>
                <FirstBox>

                    <MainCard>
                        <Box>
                            <FirstStap>
                                <div>
                                    <p>Balance</p>
                                    <CardBalance>$ 53,250</CardBalance>
                                </div>
                                <div>
                                    <p>Card</p>
                                    <Which>05</Which>
                                </div>
                            </FirstStap>

                            <CardNumber>
                                <div> <span>***</span>  <span>***</span>  <span>***</span>  <span> 6252</span></div>
                            </CardNumber>

                            <ThirdStap>
                                <div>
                                    <p>Card Time</p>
                                    <Data>02/25</Data>
                                </div>
                                <div>
                                    <p>Card Holder</p>
                                    <Name>Jonas</Name>
                                </div>
                            </ThirdStap>
                        </Box>
                    </MainCard>

                    <ExchangeCard>
                        <BoxEx>
                            <TitleEx>
                                <div>
                                    Exchange Rates
                                </div>
                                <ValuteMoney>
                                    <Valute>USD</Valute>
                                    <i class="fas fa-exchange-alt"></i>
                                    <Valute>IDR</Valute>
                                </ValuteMoney>
                            </TitleEx>

                            <GraphikBox>

                                <GraphikNum>
                                    <div>16.2</div>
                                    <div>15.5</div>
                                    <div>14.8</div>
                                    <div>13.1</div>
                                </GraphikNum>

                                <GraphikImg>
                                    <img src={Static1} alt="" />
                                </GraphikImg>
                            </GraphikBox>
                            <LastNum>
                                    <div>APR</div>
                                    <div>MAR</div>
                                    <div>JUN</div>
                                    <div>JULY</div>
                                    <div>JUN</div>
                                    <div>JUN</div>
                                </LastNum>
                        </BoxEx>
                    </ExchangeCard>

                </FirstBox>

                <SecondBox>
                
                <ExchangeCard>
                        <BoxEx>
                            <TitleEx>
                                <div>
                                   History
                                </div>
                                <CardDote>
                                    
                                <i class="fas fa-ellipsis-h"></i>
                                    
                                </CardDote>
                            </TitleEx>

                            <GraphikBox>

                                <GraphikNum>
                                    <div>16.2</div>
                                    <div>15.5</div>
                                    <div>14.8</div>
                                    <div>13.1</div>
                                    <div>12.5</div>
                                </GraphikNum>

                                <GraphikLiens>
                                    <Liens>
                                        <RedL></RedL>
                                        <BlueL></BlueL>
                                    </Liens>
                                    <Mon>APR</Mon>
                                </GraphikLiens>

                                <Gl2>
                                    <Liens2>
                                        <RedL2></RedL2>
                                        <BlueL2></BlueL2>
                                    </Liens2>
                                    <Mon>MAY</Mon>
                                </Gl2>

                                <Gl3>
                                    <Liens3>
                                        <RedL3></RedL3>
                                        <BlueL3></BlueL3>
                                    </Liens3>
                                    <Mon>JUN</Mon>
                                </Gl3>

                                <Gl4>
                                    <Liens4>
                                        <RedL4></RedL4>
                                        <BlueL4></BlueL4>
                                    </Liens4>
                                    <Mon>JUL</Mon>
                                </Gl4>

                                <Gl5>
                                    <Liens5>
                                        <RedL5></RedL5>
                                        <BlueL5></BlueL5>
                                    </Liens5>
                                    <Mon>AUG</Mon>
                                </Gl5>

                            </GraphikBox>
                            {/* <LastNum>
                                    <div>APR</div>
                                    <div>MAR</div>
                                    <div>JUN</div>
                                    <div>JULY</div>
                                    <div>JUN</div>
                                    <div>JUN</div>
                                </LastNum> */}
                        </BoxEx>
                    </ExchangeCard>

                    <FourthCard>
                        <Fr>
                            <div>Eficiensy</div>
                           
                            <Do> <i class="fas fa-ellipsis-h"></i></Do>
                        </Fr>
                        <Sircl>
                            <Price>$ 17,324</Price>
                            <Off>-58%</Off>
                        </Sircl>
                        <Text>
                            <div>Consuption</div>
                            <div>Income</div>
                        </Text>
                    </FourthCard>



                </SecondBox>
            </CardContainer>



        </DashboardWrapper>
    )
}

export default Dashboard
