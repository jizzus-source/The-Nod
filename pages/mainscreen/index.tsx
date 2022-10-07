
import type { NextPage } from 'next';
import { useContext } from 'react';
import styled from "styled-components";
import { useRouter } from "next/router";
import Icon from '../../components/icon';
import LoginModal from '../../components/register-modal';




const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const PortraitImage = styled(Icon)`
  width: 110vw;
  z-index: -3 !important;
  filter: blur(0.125rem);
`;

const CharaImage = styled(Icon)`
  width: 75vw;
  position: fixed;
  top: 14vh;
  left: 50vw;
  z-index: -1 !important;
`;

const MainScreenContainer = styled.div`
position: relative;
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
    top:0;
    position:absolute;
`;
const TopIconContainer = styled.div`
    align-items: center;
    justify-content: flex-start;

`
const TopRightIcon = styled(Icon)`
margin-top: 2vh;
width: 15vw;
`;
const TopLeftIcons = styled(Icon)`
  width: 5vw;
  cursor:pointer;
  height: 3vh;
`;
const BodyContainer = styled.div`
width:50vw;
height:50vh;
position: absolute;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
top:5rem;
`;
const PrinpcipalTitleContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;



`;
const PrincipalTitle = styled.div`
  font-family: discgent;
  flex-direction: row;
  display: flex;
  margin-top: 8vw;
  font-size: 6vw;
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
width:20vw;
`;
const CollectionIcon = styled(Icon)`
position:absolute;
width:8vw;
margin-left:7rem;
margin-top:7rem;
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
position:absolute;
flex-direction: column;
display: flex;
align-items: center;
justify-content: space-between;
bottom:10vh;`;
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
const Button = styled.button`
    font-family:discgent;
    font-size:2vh;
    border: none;
    cursor: pointer;
    border-radius: 30px;
    position: fixed;
    
    width: 20vw;
    height: 5vh;
    top: 80vh;
    left: 50vwpx;

    padding-top: 0.5vh;
    color: white;
    user-select: none;
    background: linear-gradient(to right, rgb(63,164,178), rgb(68,23,131));
    user-select: none;
`;
const Footer = styled.div`
position: fixed;
bottom: 0vh;
flex-direction: row;
display: flex;
background-color:#73e637;
color:black;
width:100vw;
justify-content: center;`; 
const IconsContainer = styled.div`
margin-top:6rem;
`;


const MainScreen = () => {
  const router = useRouter();


return(
        <MainContainer>
            <MainScreenContainer>
            <PortraitImage name={"landing-intro.png"} className="main-portrait"/>
            <TopLeftBar>
        <TopIconContainer>
            <TopRightIcon name={"logo.png"} className="main-logo"/>
        </TopIconContainer>
            <TopIconContainer className="main-icons">
                <TopLeftIcons name={"insta.svg"}    onClick={() => window.open("https://www.instagram.com/snkrthenod.io/")} className="main-icon"/>
                <TopLeftIcons name={"discord.svg"}  onClick={() => window.open("https://discord.gg/ZnDvG7US")} className="main-icon"/>
                <TopLeftIcons name={"twitter.svg"}  onClick={() => window.open("https://twitter.com/snkrthenod_io")} className="main-icon"/>
                <TopLeftIcons name={"language.svg"} className="main-icon"/>
            </TopIconContainer>
                </TopLeftBar>
            <BodyContainer>
           
                <PrinpcipalTitleContainer>
            <PrincipalTitle className="main-fnf">
              FRIENDS & FAMILY
            </PrincipalTitle>
        </PrinpcipalTitleContainer>
        <IconsContainer>
        <CenterIconContainer>
          <CenterIcon  name={"nft.png"} className="main-nftword"/>
        </CenterIconContainer>
        <CenterIconContainer>
          <CollectionIcon  name={"collection.png"} className="main-watermark"/>
        </CenterIconContainer>
        </IconsContainer>
        
            </BodyContainer>
            <SmallTextContainer>
          <Button onClick={()=> router.push({pathname:`landing/`})} className="main-enternow">Enter Now</Button>
        </SmallTextContainer>
            </MainScreenContainer>
            <Footer>
      THE NOD 2022. ALL RIGHTS RESERVED.
      </Footer>
            <CharaImage name={"character.png"} className="main-chara"/>
        </MainContainer>
)
}

export default MainScreen