// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(#161617, #0b0c1e);
  width: 100%;
  height: 100vh;
`
export const ImgTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 10px;
`

export const Image = styled.img`
  height: 100px;
  width: 100px;
  padding: 20px;
  align-self: center;
`
export const Text = styled.p`
  color: #e2e8f0;
  font-family: 'Roboto';
  font-size: 16px;
  margin-top: 24px;
  margin-bottom: 90px;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 68px;
    line-height: 1.5;
  }
`
export const ButtonElement = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  background-color: #06b6d4;
  border: none;
  border-radius: 12px;
  margin-top: 90px;
  padding-top: 12px;
  padding-right: 24px;
  padding-bottom: 12px;
  padding-left: 24px;
  cursor: pointer;
  outline: none;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    margin-top: 68px;
  }
`
