
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
  width: 100vw;
  height: 100vh;
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
width: 15vw;
height: 10vh;
`;
const TopLeftIcons = styled(Icon)`
width: 5vw;
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
 font-family: Discgent;
flex-direction: row;
display: flex;
  font-size: 10vw;
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
font-family:Discgent;
    font-size:2vw;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    user-select: none;
    background: linear-gradient(to right, rgb(63,164,178), rgb(68,23,131));
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
const IconsContainer = styled.div`
margin-top:6rem;
`;


const MainScreen = () => {
  const router = useRouter();


return(
        <MainContainer>
            <MainScreenContainer>
            <PortraitImage name={"landing-intro.png"}/>
            <TopLeftBar>
        <TopIconContainer>
            <TopRightIcon name={"logo.png"}/>
        </TopIconContainer>
            <TopIconContainer>
                <TopLeftIcons name={"insta.svg"}/>
                <TopLeftIcons name={"discord.svg"}/>
                <TopLeftIcons name={"twitter.svg"}/>
                <TopLeftIcons name={"language.svg"}/>
            </TopIconContainer>
                </TopLeftBar>
            <BodyContainer>
           
                <PrinpcipalTitleContainer>
            <PrincipalTitle>
              FRIENDS & FAMILY
            </PrincipalTitle>
        </PrinpcipalTitleContainer>
        <IconsContainer>
        <CenterIconContainer>
          <CenterIcon  name={"nft.png"}/>
        </CenterIconContainer>
        <CenterIconContainer>
          <CollectionIcon  name={"collection.png"}/>
        </CenterIconContainer>
        </IconsContainer>
        
            </BodyContainer>
            <SmallTextContainer>
          <Button onClick={()=> router.push({pathname:`landing/`})}>Enter Now</Button>
        </SmallTextContainer>
            </MainScreenContainer>
            <Footer>
      THE NOD 2022. ALL RIGHTS RESERVED.
      </Footer>
        </MainContainer>
)
}

export default MainScreen