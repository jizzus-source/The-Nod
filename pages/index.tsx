import type { NextPage } from 'next';
import router from 'next/router';
import { useContext } from 'react';
import styled from "styled-components";
import { AlertContext } from '../components/alert';
import { AlertType } from '../components/alertModal';
import Icon from '../components/icon';
import { buy } from '../components/metamask';
import LoginModal from '../components/register-modal';





const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

`;
const PortraitImage = styled(Icon)`
  width: 100vw;
  height: 100vh;
`;

const HomeContainer = styled.div`
position: relative;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
`;
const TopLeftBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 80vw;
`;
const TopIconContainer = styled.div`
    align-items: center;
    justify-content: flex-start;

`
const TopRightIcon = styled(Icon)`
width: 20vw;
height: 10vh;
`;
const TopLeftIcons = styled(Icon)`
width: 5vw;
height: 3vh;
`;
const BodyContainer = styled.div`
width:100vw;
height:100vh;
position: absolute;
display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction: column;
top:0rem;
`;
const PrinpcipalTitleContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
max-width:699px;
min-width:300px;
`;
const PrincipalTitle = styled.div`
 font-family: Discgent;
flex-direction: row;
display: flex;
  font-size: 50px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.98;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  
`;

const CenterIconContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

const CenterIcon = styled(Icon)`
position:absolute;
`;
const CollectionIcon = styled(Icon)`
position:absolute;
margin-left:7rem;
margin-bottom:3rem;
`;
const SubtitleContainer = styled.div`

`;

const SubTitle = styled.div`
  font-size: 40px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.98;
  letter-spacing: normal;
  text-align: center;
  color: #fff;`;

const SmallTextContainer = styled.div`
margin-bottom:2rem;
flex-direction: row;
display: flex;
width:70vw;
justify-content: space-between`;
const SmallText = styled.div`
font-family: Discgent;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
`;
const Button = styled.div`
    border: none;
    cursor: pointer;
    border-radius: 5px;
    user-select: none;
    color:green;
    white-space: nowrap;
    background-color:transparent;
    user-select: none;
`;
const Footer = styled.div`
position: absolute;
bottom: 0vh;
flex-direction: row;
display: flex;
background-color:#73e637;
color:black;
width:100vw;
justify-content: center;`; 



const Home = () => {
  const alertContext: any = useContext(AlertContext);
  function handleLoginButton() {
    const content: any = (
        <LoginModal onClickLogin={({ username, email }: { username: string, email: string }) => handleLoginPrimary({ username, email })} onClose={alertContext.closeAlert} />
    );
    alertContext.createAlert({ type: AlertType.CUSTOM, content: content });
   
}

function handleLoginPrimary({ username, email }: { username: string, email: string }) {
    if (username != "" && email != "") {
    } else {
        alertContext.createAlert({ type: AlertType.FAILURE, title: "Error en los datos", message: "Debes ingresar todos los datos solicitados" });
    }
}
  return (
    <MainContainer>
      <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/lodash.js/0.10.0/lodash.min.js"></script>
      <HomeContainer>
        <PortraitImage name={"land.jpg"}/>
      <BodyContainer>
      <TopLeftBar>
        <TopIconContainer><TopRightIcon name={"logo.png"}/>
        </TopIconContainer>
        <TopIconContainer>
          <TopLeftIcons name={"insta.svg"}/>
          <TopLeftIcons name={"discord.svg"}/>
          <TopLeftIcons name={"twitter.svg"}/>
          <TopLeftIcons name={"language.svg"}/>
        </TopIconContainer>
      </TopLeftBar>
        <PrinpcipalTitleContainer>
            <PrincipalTitle>
              FRIENDS & FAMILY
            </PrincipalTitle>
        </PrinpcipalTitleContainer>
        <CenterIconContainer>
          <CenterIcon height={"150px"} name={"nft.png"}/>
        </CenterIconContainer>
        <CenterIconContainer>
          <CollectionIcon height={"60px"} name={"collection.png"}/>
        </CenterIconContainer>
        <SubtitleContainer>
          <SubTitle>
          AUTHENTICATED SNEAKERS FOR
          AUTHENTIC SNEAKERHEADS.
          </SubTitle>
        </SubtitleContainer>
        <SmallTextContainer>
          <SmallText>
          JOIN THE WHITELIST TO PARTICIPATE FOR AN EXCLUSIVE AIRDROP
          </SmallText>
          <Button  onClick={handleLoginButton}>Join Now</Button>
          <Button  onClick={async ()=> {
            // router.push({pathname:`mainscreen/`}
            await buy(1);
          }}>Buy Now</Button>
        </SmallTextContainer>
       
      </BodyContainer>
      <Footer>
      THE NOD 2022. ALL RIGHTS RESERVED.
      </Footer>
      </HomeContainer>
    </MainContainer>
  )
}

export default Home
