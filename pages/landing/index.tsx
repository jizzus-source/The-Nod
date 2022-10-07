
import type { NextPage } from 'next';
import { useContext, useEffect } from 'react';
import styled from "styled-components";
import { useRouter } from "next/router";
import Icon from '../../components/icon';
import LoginModal from '../../components/register-modal';
import { buy, provider } from '../../components/metamask';

import * as lodash from "lodash";


((global || window) as any)._ = lodash;


const MainContainer = styled.div`
    overflow-x: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position:relative;
`;
const PortraitImage = styled(Icon)`
  width: 100vw;
`;
const BackgroundImage = styled(Icon)`
width:100vw;
max-height:180rem;
`;

const MainScreenContainer = styled.div`
position: relative;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color:rgb(51,51,51);

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
    display:flex;
    align-items: center;
    gap:0.4em;
`
const TopRightIcon = styled(Icon)`
max-width: 15vw;
max-height: 10vh;
`;
const TopLeftIcons = styled(Icon)`
cursor:pointer;
max-width: 2vw;
max-height: 3vh;
`;
const BodyContainer = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;

`;
const PrinpcipalTitleContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap:1rem;



`;
const PrincipalTitle = styled.div`
margin-top:10rem;
  font-family: Discgent;
  flex-direction: column;
  display: flex;
  font-size: 8vw;
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
  font-size: 2.5vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.98;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
`;

const SmallTextContainer = styled.div`
position:absolute;
flex-direction: column;
display: flex;
align-items: center;
justify-content: space-between;
bottom:10vh;`;
const SmallText = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: flex-start;
    font-family: discgent;
    font-size: 0.8vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.17;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
    
`;
const Button = styled.div`
display:flex;
justify-content: center
font-family:Discgent;
    font-size:1vw;
    border: none;
    cursor: pointer;
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
const TopMenuContainer =styled.div`
gap:0.5em;
display:flex;
align-items: center;

`;
const ScrollImage=styled(Icon)`
position:absolute;
bottom:0;
max-width:15vw;
`;
const PrincipalContainer=styled.div`
position:absolute;
display:flex;
flex-direction:column;
align-items: center
`;

const CollabsContainer=styled.div`
margin-top:2rem;
display:flex;
flex-direction:row;
gap:1rem;

`;
const CollabsIcons=styled(Icon)`
width:20vw;
cursor:pointer;
`;
const NodInfoContainer=styled.div`
display:flex;
flex-direction:row;
margin-top:3rem;
gap:2rem;
`;
const NodInfo =styled.div`
    display: grid;
    grid-template-rows: 30% 20% 50%;
    box-shadow: rgb(0 0 0) 0px 0px 12px 0px;
    max-width:20vw;
    border:1px solid rgba(115, 205, 55, 0.5);
    align-items: flex-start;
    justify-content: center;
    border-razdius: 5px;
`;
const NodBack=styled(Icon)`
max-width:20vw;
`
;
const NodBoxesContainer=styled.div`
display:flex;
flex-direction:row;
margin-top:4rem;
border:2px solid #ccccb3;
background-color: #333;
width: 70vw;
align-items: center;
`
const BoxIcon=styled(Icon)`
border-right:2px solid #ccccb3;
width:30vw;
`;
const NodBoxesContent=styled.div`
display:flex;
flex-direction:column;
align-items: center;

`;
const SmallTextGreen=styled.div`
margin-right:10px;
margin-left:10px;
font-family: discgent;
  font-size: 0.8vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #73cd37;
`;
const BuyButton= styled.div`
    width:50%;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    font-family: discgent;
    font-size:2vw;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 10px;
    user-select: none;
    background: linear-gradient(to right, rgb(63,164,178), rgb(68,23,131));
    user-select: none;
`;
const BoxTitle=styled.div`
margin-bottom:1em;
font-weight:bold;
text-align: center;
width:30vw;
font-size:5vw;
ont-family: Discgent;
background-color:white;
color:rgb(51, 51, 51);
`;
const NodBoxesText =styled.div`
display:flex;
flex-direction:column;
align-items: flex-start
`;
const BuyContainer= styled.div`
margin-top:1em;
display:flex;
flex-direction:column;
align-items: center
`;
const NodBoxesBox = styled.div`
display:flex;
flex-direction:row;
max-width: 100vw;
justify-content: flex-start;
overflow-x: scroll;
`;
const MetaIcon = styled(Icon)`
cursor:pointer;
max-width:8vw;`;


const Landing = () => {
  const router = useRouter();

function handleMeta(){
    provider()
};
return(

        <MainContainer>
            <script type="text/javascript" src="https//cdnjs.cloudflare.com/ajax/libs/lodash.js/0.10.0/lodash.min.js" async/>
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
        <TopIconContainer className="main-icons">
        <TopLeftIcons name={"opensea.svg"}/>
            <TopLeftIcons name={"insta.svg"}  onClick={() => window.open("https://www.instagram.com/snkrthenod.io/")}/>
            <TopLeftIcons name={"discord.svg"  } onClick={() => window.open("https://discord.gg/ZnDvG7US")}/>
            <TopLeftIcons name={"twitter.svg"} onClick={() => window.open("https://twitter.com/snkrthenod_io")}/>
            <TopLeftIcons name={"language.svg"}/>
            <MetaIcon name="meta.png" onClick={handleMeta} />
        </TopIconContainer>
        </TopLeftBar>
        <ScrollImage name={"scroll.png"}/>
            </MainScreenContainer>
            <BodyContainer>
            <BackgroundImage name={"nod_back.png"}/>
                <PrincipalContainer>
                <PrincipalTitle>OUR COLLABS</PrincipalTitle>    
                <CollabsContainer className="landing-collab-container">
                    <CollabsIcons name={"collab-1.png"} onClick={() => window.open("https://www.instagram.com/zionylennox/")}/>
                    <CollabsIcons name={"collab-2.png"} onClick={() => window.open("https://www.instagram.com/phraa/")}/>
                    <CollabsIcons name={"collab-3.png"} onClick={() => window.open("https://www.instagram.com/djmkc/")}/>
                    <CollabsIcons name={"collab-4.png"} onClick={() => window.open("https://www.instagram.com/guache_art/")}/>
                    <CollabsIcons name={"collab-5.png"} onClick={() => window.open("https://www.instagram.com/sneakerzinecol/")}/>
                </CollabsContainer>
                
                <PrincipalTitle><div>
                    <span className="landing-title-black">THE </span>
                    <span className="landing-title-white">NOD</span>
                </div></PrincipalTitle>

                <NodInfoContainer className="landing-nodinfo-container">
                    {/* First NodInfo */}
                    <NodInfo className="landing-nodinfo-fifo">
                        <div className="landing-nodinfo-img">
                            <img src="/icons/Grupo 326.png"/>
                        </div>
                        <PrinpcipalTitleContainer className="landing-nodinfo-subtitle-container">
                             <SubTitle className="landing-nodinfo-subtitle-number">1</SubTitle>
                             <SubTitle className="landing-nodinfo-subtitle-name">KEY ACCESS</SubTitle>
                        </PrinpcipalTitleContainer>

                        <SmallText className="landing-nodinfo-subtitle-smalltext">
                        By getting one NFT Case you obtain your Key(s) to validate your Kicks. Make sure to HODL it. IMPORTANT: In the F&F Collection, the Keys are half price.
                        </SmallText>
                    </NodInfo>
                    
                    {/* AI Scanner*/}
                    <NodInfo className='landing-nodinfo'>
                        <div className="landing-nodinfo-img">
                            <img src="/icons/Grupo 313.png"/>
                        </div>
                        <PrinpcipalTitleContainer className="landing-nodinfo-subtitle-container">
                             <SubTitle className="landing-nodinfo-subtitle-number">2</SubTitle>
                             <SubTitle className="landing-nodinfo-subtitle-name">AI SCANNER</SubTitle>
                        </PrinpcipalTitleContainer>

                        <SmallText className="landing-nodinfo-subtitle-smalltext">
                        Scan your OG Kicks. Other shoe details will be required, such as labels, sewings, outsole, etc. The images will be analyzed thought Artificial Intelligence. This  first step  will determine if your kicks are OG or fake.
                        </SmallText>
                    </NodInfo>

                    {/* Validation & Community */}
                    <NodInfo className='landing-nodinfo'>
                        <div className="landing-nodinfo-img">
                            <img src="/icons/Grupo 315.png"/>
                        </div>
                        <PrinpcipalTitleContainer className="landing-nodinfo-subtitle-container">
                             <SubTitle className="landing-nodinfo-subtitle-number">3</SubTitle>
                             <SubTitle className="landing-nodinfo-subtitle-name">VALIDATION & COMMUNITY</SubTitle>
                        </PrinpcipalTitleContainer>

                        <SmallText className="landing-nodinfo-subtitle-smalltext">
                            Your kicks will be audited by THE NOD community, based on AI  percentage  of authenticity. ATTENTION, you could be rewarded or penalized with points, based on your kicks authenticity.
                            You can become a validator and participate in audits. Show to the world your SNEAKERS IQ.
                        </SmallText>
                    </NodInfo>

                    {/* Build Up Your Showcase */}
                    <NodInfo className='landing-nodinfo'>
                        <div className="landing-nodinfo-img">
                            <img src="/icons/Grupo 319.png"/>
                        </div>
                        <PrinpcipalTitleContainer className="landing-nodinfo-subtitle-container">
                             <SubTitle className="landing-nodinfo-subtitle-number">4</SubTitle>
                             <SubTitle className="landing-nodinfo-subtitle-name">BUILD UP<br/>YOUR SHOWCASE</SubTitle>
                        </PrinpcipalTitleContainer>

                        <SmallText className="landing-nodinfo-subtitle-smalltext">
                        After getting your authenticity result with the help of AI, you will receive a phygital  NFT. This will store your OG authenticity data for life. You will also receive a physical tag which you can put on your kicks and invite your friends with the code to see your personal kicks collection showcase.
                        </SmallText>
                        </NodInfo>
                </NodInfoContainer>

                <div className="landing-fnf">
                    {/*<img src="/icons/fnf.png"/>*/}
                    <h1>8888</h1>
                    <h2>Friends <strong>&</strong> Family</h2>
                </div>

                <NodBoxesBox className="landing-nodebox-container">
                    {/* DEADSTOCK */}
                    <NodBoxesContainer className="landing-nodebox">
                        <BoxIcon name={"CAJA_1.gif"}/>
    
                        <NodBoxesContent className="landing-nodebox-content">
                            <BoxTitle className="landing-nodebox-boxtitle">DEADSTOCK</BoxTitle>
                            <NodBoxesText className="landing-nodebox-boxcontent">
                                <img src="icons/1.png"/>
                                <SmallText>LEGITIMACY KEYS TO YOUR <SmallTextGreen>SHOWCASE</SmallTextGreen> </SmallText>

                                <img src="icons/nfticon.png"/>
                                <SmallText>NFT EXCLUSIVE BY<SmallTextGreen>GUACHE ART</SmallTextGreen></SmallText>
                            </NodBoxesText>
                            <BuyContainer>
                            <SmallText className="landing-nodebox-footer"><SmallTextGreen className="landing-nodebox-footer">250</SmallTextGreen> USDT (DIGITAL)</SmallText>
                            <BuyButton onClick={async ()=> {await buy(1); }} >Buy Now</BuyButton>
                            </BuyContainer>
                        </NodBoxesContent>
                    </NodBoxesContainer>
                    
                    {/* HOLY GRAIL */}
                    <NodBoxesContainer className="landing-nodebox">
                        <BoxIcon name={"CAJA_2.gif"}/>

                        <NodBoxesContent className="landing-nodebox-content">
                            <BoxTitle className="landing-nodebox-boxtitle">HOLY GRAIL</BoxTitle>
                            <NodBoxesText className="landing-nodebox-boxcontent">
                                <img src="icons/1.png"/>
                                <SmallText>LEGITIMACY KEYS TO YOUR <SmallTextGreen>SHOWCASE</SmallTextGreen> </SmallText>

                                <img src="icons/nfticon.png"/>
                                <SmallText>NFT EXCLUSIVE BY<SmallTextGreen>GUACHE ART</SmallTextGreen></SmallText>

                                <img src="/icons/Grupo 315.png"/>
                                <SmallText>EXCLUSIVE<SmallTextGreen>MERCH</SmallTextGreen></SmallText>
                            </NodBoxesText>
                            <BuyContainer>
                            <SmallText className="landing-nodebox-footer"><SmallTextGreen className="landing-nodebox-footer">500 USDT</SmallTextGreen> (PHYGITAL)</SmallText>
                            <BuyButton  onClick={async ()=> {await buy(2); }} >Buy Now</BuyButton>
                            </BuyContainer>
                        </NodBoxesContent>
                    </NodBoxesContainer>
                    
                    <NodBoxesContainer className="landing-nodebox">
                        <BoxIcon name={"CAJA_3.gif"}/>

                        <NodBoxesContent className="landing-nodebox-content">
                        <BoxTitle className="landing-nodebox-boxtitle">GOAT</BoxTitle>
                            <NodBoxesText className="landing-nodebox-boxcontent">
                                <img src="icons/1.png"/>
                                <SmallText>LEGITIMACY KEYS TO YOUR <SmallTextGreen>SHOWCASE</SmallTextGreen> </SmallText>

                                <img src="icons/nfticon.png"/>
                                <SmallText>NFT EXCLUSIVE BY<SmallTextGreen>GUACHE ART</SmallTextGreen></SmallText>

                                <img src="/icons/Grupo 315.png"/>
                                <SmallText>EXCLUSIVE<SmallTextGreen>MERCH</SmallTextGreen></SmallText>
                                <img src="icons/1.png"/>
                                <SmallText><SmallTextGreen>LUXURY</SmallTextGreen> BOX</SmallText>
                            </NodBoxesText>
                            <BuyContainer>
                            <SmallText className="landing-nodebox-footer"><SmallTextGreen className="landing-nodebox-footer">1000 USDT</SmallTextGreen> (PHYGITAL)</SmallText>
                            <BuyButton  onClick={async ()=> {await buy(3); }} >Buy Now</BuyButton>
                            </BuyContainer>
                        </NodBoxesContent>
                    </NodBoxesContainer>
                </NodBoxesBox>
                
                
                </PrincipalContainer>
                
            
            </BodyContainer>
        </MainContainer>
)
}

export default Landing