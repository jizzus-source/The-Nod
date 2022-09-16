import type { NextPage } from 'next';
import styled from "styled-components";
import Icon from '../components/icon';

const MainContainer = styled.div`
    height: 100vh;
    padding: 0px;
    margin: 0px;
    position: relative;
    top: 0px;
    left: 0px;
    width: 100vw;
    overflow-y: hidden;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const PortraitImage = styled(Icon)`
  width: 100vw;
  height: 100vh;

`;
const TopLeftBar = styled.div`
    position: absolute;
    top: 10px;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 50vw;
`;
const HomeContainer = styled.div`
position: relative;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
`;
const TopIconContainer = styled.div`
align-items: center;
    justify-content: flex-start;

`
const TopRightIcon = styled(Icon)`
width: 10vw;
height: 10vh;
`;
const TopLeftIcons = styled(Icon)`
width: 3vw;
height: 3vh;
`;
const BodyContainer = styled.div`
width:80vw;
height:90vh;
position: absolute;
display: flex;
align-items: center;
justify-content: center;
top: 2vh;
`;
const TopRightBar = styled.div`
position: absolute;
top: 10px;
left: 0;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
width: 80vw;
`;
const PrinpcipalTitleContainer = styled.div`
position: absolute;
top: 15vh;
left: 0;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 80vw;
`;
const PrincipalTitle = styled.div`
 font-family: Discgent;
flex-direction: row;
display: flex;
  font-size: 90px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.98;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
`;
const Letter = styled.div`
margin-right:30px;
margin-left:30px;
`;

const CenterIconContainer = styled.div`
position: absolute;
top: 15vh;
`;

const CenterIcon = styled(Icon)`
width:25vw;
`;
const CollectionIcon = styled(Icon)`
width:10vw;
margin-left:10rem;
margin-top:10rem;
`;
const SubtitleContainer = styled.div`
margin-top:20rem;
`;

const SubTitle = styled.div`
  font-size: 50px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.98;
  letter-spacing: normal;
  text-align: center;
  color: #fff;`;

const SmallTextContainer = styled.div`
position: absolute;
bottom: 5vh;
flex-direction: row;
display: flex;`;
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
    margin-left:5rem;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    user-select: none;
    color:green;
    gap: 10px;
    white-space: nowrap;
    background-color:transparent;
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

const Home: NextPage = () => {
  return (
    <MainContainer>
      <HomeContainer>
        <PortraitImage name={"land.jpg"}/>
      <BodyContainer>
      <TopLeftBar>
        <TopIconContainer><TopRightIcon name={"logo.png"}/>
        </TopIconContainer>
      </TopLeftBar>
      <TopRightBar>
        <TopIconContainer>
          <TopLeftIcons name={"insta.svg"}/>
          <TopLeftIcons name={"discord.svg"}/>
          <TopLeftIcons name={"twitter.svg"}/>
          <TopLeftIcons name={"language.svg"}/>
        </TopIconContainer>
      </TopRightBar>
        <PrinpcipalTitleContainer>
            <PrincipalTitle>
              FRIENDS <Letter> & </Letter> FAMILY
            </PrincipalTitle>
        </PrinpcipalTitleContainer>
        <CenterIconContainer>
          <CenterIcon name={"nft.png"}/>
        </CenterIconContainer>
        <CenterIconContainer>
          <CollectionIcon name={"collection.png"}/>
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
          <Button>Join Now</Button>
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
