import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #223a5f;
  padding: 30px;
`

export const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: 10px 30px 10px 30px;
  border: 1px solid #ffffff;
  border-radius: 20px;
`

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: #ffffff;
`

export const Name = styled.h1`
  margin: 2px;
  width: 20%;
  font-family: 'Bree Serif';
  font-size: 24px;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  padding: 10px 45px 10px 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`

export const ScoreName = styled.p`
  font-family: 'Roboto';
  font-size: 28px;
  margin: 0px;
`

export const ScoreItem = styled.p`
  font-family: 'Roboto';
  font-size: 48px;
  margin: 0px;
`

export const Button = styled.button`
  align-self: flex-end;
  padding: 5px 15px 5px 15px;
  background-color: #ffffff;
  border: 0px;
  border-radius: 5px;
  font-family: 'Bree Serif';
  margin-bottom: 15px;
`

export const RulesContainer = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  width: 90%;
  height: 70vh;
`

export const GameImage = styled.img`
  width: 70%;
`

export const GameContainer = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 30px;
`

export const ItemButton = styled.button`
  width: 46%;
  background-color: transparent;
  border: 0px;
  margin: 10px;
`

export const ResultContainer = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

export const MyContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const OpponentContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ResultDisplayContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.p`
  font-weight: bold;
  font-size: 32px;
  color: #ffffff;
`

export const ResultImage = styled.img`
  width: 40%;
`

export const PlayAgainButton = styled.button`
  padding: 7px 25px 7px 25px;
  border: 0px;
  border-radius: 5px;
  font-faimly: 'Bree Serif';
`
