import {Component} from 'react'

import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'

import {
  Container,
  Name,
  SubContainer,
  NameContainer,
  ScoreContainer,
  ScoreName,
  ScoreItem,
  Button,
  Image,
  GameImage,
  RulesContainer,
  GameContainer,
  ItemButton,
  ResultContainer,
  MyContainer,
  OpponentContainer,
  ResultDisplayContainer,
  Heading,
  ResultImage,
  PlayAgainButton,
} from './styled'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Game extends Component {
  state = {
    score: 0,
    isGameRunning: true,
    opponentImage: '',
    myImage: '',
    gameStatus: '',
  }

  playAgainBtn = () => {
    this.setState({isGameRunning: true})
  }

  onClickButton = id => {
    const ourImage = choicesList.find(choice => choice.id === id)
    const myImage = ourImage.imageUrl
    const randomNumber = Math.floor(Math.random() * choicesList.length)
    console.log(randomNumber)
    const opponentImage = choicesList[randomNumber].imageUrl
    console.log(opponentImage, 'opp')
    console.log(myImage, 'my')
    const rockItem =
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png'
    const scissorsItem =
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png'
    const paperItem =
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png'
    if (myImage === rockItem) {
      console.log('My image is rock')
      if (opponentImage === scissorsItem) {
        console.log('opp image is scissors')
        this.setState(prevState => ({
          score: prevState.score + 1,
          gameStatus: 'YOU WON',
          opponentImage,
          myImage,
          isGameRunning: false,
        }))
      } else if (opponentImage === paperItem) {
        console.log('opp image is paper')
        this.setState(prevState => ({
          score: prevState.score - 1,
          gameStatus: 'YOU LOSE',
          opponentImage,
          myImage,
          isGameRunning: false,
        }))
      } else {
        console.log('opp image is rock')
        this.setState(prevState => ({
          score: prevState.score,
          gameStatus: 'IT IS DRAW',
          opponentImage,
          myImage,
          isGameRunning: false,
        }))
      }
    } else if (myImage === scissorsItem) {
      console.log('my image is scissors')
      if (opponentImage === scissorsItem) {
        console.log('opp image is scissors')
        this.setState(prevState => ({
          score: prevState.score,
          gameStatus: 'IT IS DRAW',
          opponentImage,
          myImage,
          isGameRunning: false,
        }))
      } else if (opponentImage === paperItem) {
        console.log('opp image is paper')
        this.setState(prevState => ({
          score: prevState.score + 1,
          gameStatus: 'YOU WON',
          opponentImage,
          myImage,
          isGameRunning: false,
        }))
      } else {
        console.log('opp image is rock')
        this.setState(prevState => ({
          score: prevState.score - 1,
          gameStatus: 'YOU LOSE',
          opponentImage,
          myImage,
          isGameRunning: false,
        }))
      }
    } else if (myImage === paperItem) {
      console.log('my image is paper')
      if (opponentImage === scissorsItem) {
        console.log('opp image is scissors')
        this.setState(prevState => ({
          score: prevState.score - 1,
          gameStatus: 'YOU LOSE',
          opponentImage,
          myImage,
          isGameRunning: false,
        }))
      } else if (opponentImage === paperItem) {
        console.log('opp image is paper')
        this.setState(prevState => ({
          score: prevState.score,
          gameStatus: 'IT IS DRAW',
          opponentImage,
          myImage,
          isGameRunning: false,
        }))
      } else {
        console.log('opp image is rock')
        this.setState(prevState => ({
          score: prevState.score + 1,
          gameStatus: 'YOU WON',
          opponentImage,
          myImage,
          isGameRunning: false,
        }))
      }
    }
  }

  renderScoreCard = () => {
    const {score} = this.state
    return (
      <SubContainer>
        <NameContainer>
          <Name>ROCK PAPER SCISSORS</Name>
        </NameContainer>
        <ScoreContainer>
          <ScoreName>Score {score}</ScoreName>
        </ScoreContainer>
      </SubContainer>
    )
  }

  renderGameView = () => (
    <GameContainer>
      {choicesList.map(choice => (
        <ItemButton
          key={choice.id}
          data-testid={`${choice.id.toLowerCase()}Button`}
          onClick={() => this.onClickButton(choice.id)}
        >
          <GameImage src={choice.imageUrl} alt={choice.id} />
        </ItemButton>
      ))}
    </GameContainer>
  )

  renderResultView = () => {
    const {myImage, opponentImage, gameStatus} = this.state
    console.log(myImage, opponentImage)
    return (
      <ResultContainer>
        <MyContainer>
          <Heading>MY</Heading>
          <ResultImage src={myImage} alt="your choice" />
        </MyContainer>
        <OpponentContainer>
          <Heading>OPPONENT</Heading>
          <ResultImage src={opponentImage} alt="opponent choice" />
        </OpponentContainer>
        <ResultDisplayContainer>
          <Heading>{gameStatus}</Heading>
          <PlayAgainButton type="button" onClick={this.playAgainBtn}>
            PLAY AGAIN
          </PlayAgainButton>
        </ResultDisplayContainer>
      </ResultContainer>
    )
  }

  renderRulesBtn = () => (
    <>
      <Popup modal trigger={<Button type="button">Rules</Button>}>
        {close => (
          <>
            <RulesContainer>
              <Button type="button" onClick={() => close()}>
                <RiCloseLine />
              </Button>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </RulesContainer>
          </>
        )}
      </Popup>
    </>
  )

  render() {
    const {isGameRunning} = this.state
    return (
      <Container>
        {this.renderScoreCard()}
        {isGameRunning ? this.renderGameView() : this.renderResultView()}
        {this.renderRulesBtn()}
      </Container>
    )
  }
}

export default Game
