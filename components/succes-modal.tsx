import FormInput, { InputTypes } from "./form-input";

import styled from "styled-components";
import RegularButton from "./button";
import TextButton from "./text-button";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import Icon from "./icon";
import { ethers, providers } from "ethers";
import {isMetaMaskInstalled, provider} from "./metamask";
import { AlertContext } from "./alert";
import { AlertType } from "./alertModal";




const SuccesModalContainer = styled.div`
position: relative;
background-color:transparent;
display: flex;
flex-direction: row;
align-items: center;
width: 50vw;
height:60vh;

`;
const SuccesModalContent = styled.div`
position: absolute;
display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction: column;
width: 50vw;
height:50vh;
justify-content: flex-start;
align-items: center;
`;
const PortraitImage = styled(Icon)`
  width: 50vw;
  height:60vh;
`;
const TopIconContainer = styled.div`
    align-items: center;
`;
const TopRightIcon = styled(Icon)`
width: 10vw;
height: 7vh;
`;
const PrinpcipalTitleContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
max-width:699px;
gap:2rem;
margin-top:2rem;
`;
const PrincipalTitle = styled.div`
 font-family: Discgent;
flex-direction: row;
display: flex;
  font-size: 25px;
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
margin-top:3rem;
`;

const CenterIcon = styled(Icon)`
position:absolute;
width: 10vw;
height: 15vh;
`;
const CollectionIcon = styled(Icon)`
position:absolute;
margin-left:7rem;
margin-bottom:3rem;
width: 7vw;
height: 7vh;
`;
const SmallTextContainer = styled.div`
margin-top:1rem;
flex-direction: row;
display: flex;`;
const SmallText = styled.div`
font-family: Discgent;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
`;
const SuccesModal = () =>{


    return(
        <SuccesModalContainer>
            <PortraitImage name={"succes.png"}/>
            <SuccesModalContent>
            <TopIconContainer>
                <TopRightIcon name={"logo.png"}/>
            </TopIconContainer>
            <PrinpcipalTitleContainer>
            <PrincipalTitle>
             THANK YOU FOR JOINING
            </PrincipalTitle>
            <PrincipalTitle>
              FRIENDS & FAMILY
            </PrincipalTitle>
        </PrinpcipalTitleContainer>

        <CenterIconContainer>
          <CenterIcon  name={"nft.png"}/>
        </CenterIconContainer>
        <CenterIconContainer>
          <CollectionIcon  name={"collection.png"}/>
        </CenterIconContainer>

        <SmallTextContainer>
          <SmallText>
          YOUR SPOT ON THE WHITELIST IS RESERVED. STAY TUNED FOR EXCLUSIVE INFORMATION.
          </SmallText>
        </SmallTextContainer>
            </SuccesModalContent>
        </SuccesModalContainer>
    )
}

export default SuccesModal
