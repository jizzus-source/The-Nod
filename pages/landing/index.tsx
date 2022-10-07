
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
  height: 100vh;
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
    gap:1em;
`
const TopRightIcon = styled(Icon)`
max-width: 15vw;
max-height: 10vh;
`;
const TopLeftIcons = styled(Icon)`
cursor:pointer;
max-width: 5vw;
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
  color: #fff;`;

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
font-family: Monserrat;
  font-size: 1.4vw;
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
gap:1em;
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
`;
const NodInfoContainer=styled.div`
display:flex;
flex-direction:row;
margin-top:3rem;
gap:2rem;
`;
const NodInfo =styled.div`
display:flex;
flex-direction:column;
box-shadow: rgb(0 0 0) 0px 0px 12px 0px;
max-width:20vw;
border:1px solid #73cd37;
align-items: flex-start;
justify-content: center

`;
const NodBack=styled(Icon)`
max-width:20vw;
`
;
const NodBoxesContainer=styled.div`
display:flex;
flex-direction:row;
margin-top:4rem;
border:1px solid #ccccb3;
background-color: #333;
width: 70vw;
align-items: center;
`
const BoxIcon=styled(Icon)`
border:1px solid #ccccb3;
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
font-family: Monserrat;
  font-size: 1.4vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #73cd37;
`;
const BuyButton= styled.div`

width:13vw;
text-align: center;
font-family:Discgent;
    font-size:2vw;
    border: none;
    cursor: pointer;
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
        <TopIconContainer>
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
                <CollabsContainer>
                    <CollabsIcons name={"collab-1.png"}/>
                    <CollabsIcons name={"collab-2.png"}/>
                    <CollabsIcons name={"collab-3.png"}/>
                </CollabsContainer>
                <PrincipalTitle>THE NOD</PrincipalTitle>
                <NodInfoContainer>
                    <NodInfo>
                        <NodBack name={"nod.png"}/>
                    </NodInfo>
                    <NodInfo>
                        <PrinpcipalTitleContainer>
                             <SubTitle>2</SubTitle>
                             <SubTitle>Ai SCAN</SubTitle>
                        </PrinpcipalTitleContainer>

                        <SmallText>
                        Scan your OG Kicks. Other shoe details will be required, such as labels, sewings, outsole, etc. The images will be analyzed thought Artificial Intelligence. This  first step  will determine if your kicks are OG or fake.
                        </SmallText>
                    </NodInfo>
                    <NodInfo><PrinpcipalTitleContainer>
                             <SubTitle>3</SubTitle>
                             <SubTitle>VALIDATION & COMMUNITY</SubTitle>
                        </PrinpcipalTitleContainer>

                        <SmallText>
                        Your kicks will be audited by THE NOD community, based on AI  percentage  of authenticity. ATTENTION, you could be rewarded or penalized with points, based on your kicks authenticity.
                        </SmallText>
                        <SmallText>You can become a validator and participate in audits. Show to the world your SNEAKERS IQ.</SmallText>
                        </NodInfo>
                    <NodInfo><PrinpcipalTitleContainer>
                             <SubTitle>4</SubTitle>
                             <SubTitle>BUILD UP YOUR SHOWCASE</SubTitle>
                        </PrinpcipalTitleContainer>

                        <SmallText>
                        After getting your authenticity result with the help of AI, you will receive a phygital  NFT. This will store your OG authenticity data for life. You will also receive a physical tag which you can put on your kicks and invite your friends with the code to see your personal kicks collection showcase.
                        </SmallText>
                        </NodInfo>
                </NodInfoContainer>
                <NodBoxesBox>
                <NodBoxesContainer>
                    <BoxIcon name={"CAJA_1.gif"}/>

                    <NodBoxesContent>
                    <BoxTitle>DeadStock</BoxTitle>
                        <NodBoxesText>
                            <SmallText>LEGITIMACY KEYS TO YOUR <SmallTextGreen>SHOWCASE</SmallTextGreen> </SmallText>
                        <SmallText>NFT EXCLUSIVE BY<SmallTextGreen>GUACHE ART</SmallTextGreen></SmallText>
                        </NodBoxesText>
                        <BuyContainer>
                        <SmallText><SmallTextGreen>250</SmallTextGreen> USDT DIGITAL</SmallText>
                        <BuyButton onClick={async ()=> {await buy(1); }} >Buy Now</BuyButton>
                        </BuyContainer>
                    </NodBoxesContent>
                </NodBoxesContainer>
                <NodBoxesContainer>
                    <BoxIcon name={"CAJA_2.gif"}/>

                    <NodBoxesContent>
                    <BoxTitle>HOLY GRAIL</BoxTitle>
                        <NodBoxesText>
                            <SmallText>LEGITIMACY KEYS TO YOUR <SmallTextGreen>SHOWCASE</SmallTextGreen> </SmallText>
                        <SmallText>NFT EXCLUSIVE BY<SmallTextGreen>GUACHE ART</SmallTextGreen></SmallText>
                        <SmallText><SmallTextGreen>EXCLUSIVE</SmallTextGreen> MERCH</SmallText>
                        </NodBoxesText>
                        <BuyContainer>
                        <SmallText><SmallTextGreen>500 USDT</SmallTextGreen> PHYGITALS</SmallText>
                        <BuyButton  onClick={async ()=> {await buy(2); }} >Buy Now</BuyButton>
                        </BuyContainer>
                    </NodBoxesContent>
                </NodBoxesContainer>
                <NodBoxesContainer>
                    <BoxIcon name={"CAJA_3.gif"}/>

                    <NodBoxesContent>
                    <BoxTitle>GOAT</BoxTitle>
                        <NodBoxesText>
                            <SmallText>LEGITIMACY KEYS TO YOUR <SmallTextGreen>SHOWCASE</SmallTextGreen> </SmallText>
                        <SmallText>NFT EXCLUSIVE BY<SmallTextGreen>GUACHE ART</SmallTextGreen></SmallText>
                        <SmallText><SmallTextGreen>EXCLUSIVE</SmallTextGreen> MERCH</SmallText>
                        <SmallText><SmallTextGreen>LUXURY</SmallTextGreen> BOX</SmallText>
                        </NodBoxesText>
                        <BuyContainer>
                        <SmallText><SmallTextGreen>1000 USDT</SmallTextGreen> PHYGITALS</SmallText>
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