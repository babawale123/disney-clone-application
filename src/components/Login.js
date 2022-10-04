import React from 'react';
import styled from 'styled-components';
const Login = (props) => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" />
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>
                    Get Premier Access to Raya and the last dragon for an additional fee with a disney+ subscription.As of 16/06/2021, the price of disney+ and the disney bundle will increase by $2.
                    </Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" />
                 </CTA>
                <BgImage />
            </Content>
        </Container>
    )
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
     margin-bottom:10vw;
     width: 100%;
     position: relative;
     min-height: 100vh;
     box-sizing: border-box;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     padding: 80px 40px;
     height: 100%;
`;

const BgImage = styled.div`
    background-image: url("/images/login-background.jpg");
    height: 100%;
    position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;

const CTA = styled.div` 
    margin-bottom: 2vw;
    max-width: 650px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    margin-top: 0;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-right: auto;
    margin-left:auto;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;
    width: 100;
`;

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`;

const CTALogoTwo = styled.img`
    margin-bottom: 20px;
    max-width: 600px;
    width: 100%;
    display: inline-block;
    width: 100%;
    vertical-align: bottom;
`;

const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
        background-color: #0483ee;
    }

`;

const Description = styled.p`
  color: hsla(0,0%,95.3%,1);
  letter-spacing: 1.5px;
  font-size: 11px;
  margin: 0 0 24;
  line-height: 1.5;

`;

export default Login

