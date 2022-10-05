
import type { NextPage } from 'next';
import { useContext } from 'react';
import styled from "styled-components";
import { useRouter } from "next/router";
import Icon from '../../components/icon';
import LoginModal from '../../components/register-modal';




const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:rgb(51,51,51);
`;
const PortraitImage = styled(Icon)`
  width: 100vw;
  height: 100vh;
`;

const MainScreenContainer = styled.div`
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
const Button = styled.div`
    font-size:1vw;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    user-select: none;
    user-select: none;
    font-family: Discgent;
    margin-right:1rem;
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
const TopMenuContainer =styled.div`
display:flex;
align-items: center;
justify-content: space-between;
`;

const Landing = () => {
  const router = useRouter();


return(
        <MainContainer>
            <MainScreenContainer>
            <PortraitImage name={"landing-icon.png"}/>
            <TopLeftBar>
        <TopIconContainer>
            <TopRightIcon name={"logo.png"}/>
        </TopIconContainer>
        <TopMenuContainer>
            <Button>
                Welcome
            </Button>
            <Button>
                Collabs
            </Button>
            <Button>
                The Nod
            </Button>
            <Button>
                F&F Collection
            </Button>
            <Button>
                Roadmap
            </Button>
            <Button>
                Team
            </Button>
            <Button>
                Alliances
            </Button>
        </TopMenuContainer>
        <TopIconContainer>
            <TopLeftIcons name={"insta.svg"}/>
            <TopLeftIcons name={"discord.svg"}/>
            <TopLeftIcons name={"twitter.svg"}/>
            <TopLeftIcons name={"language.svg"}/>
        </TopIconContainer>
        </TopLeftBar>
            <BodyContainer>
           
                <PrinpcipalTitleContainer>
           
        </PrinpcipalTitleContainer>
        
            </BodyContainer>
            </MainScreenContainer>
            <Footer>
      THE NOD 2022. ALL RIGHTS RESERVED.
      </Footer>
        </MainContainer>
)
}

export default Landing