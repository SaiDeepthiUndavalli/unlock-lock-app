// Write your code here
import {useState} from 'react'
import {
  Container,
  ImgTextContainer,
  Image,
  Text,
  ButtonElement,
} from './styledComponents'

const Unlock = () => {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const imgUrl = isUnlocked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const alttext = isUnlocked ? 'unlock' : 'lock'
  const text = isUnlocked ? 'Your Device is Unlocked' : 'Your Device is locked'
  const button = isUnlocked ? 'Lock' : 'Unlock'

  const onClickButton = () => setIsUnlocked(prevState => !prevState)
  return (
    <Container>
      <ImgTextContainer>
        <Image src={imgUrl} alt={alttext} />
        <Text>{text}</Text>
      </ImgTextContainer>
      <ButtonElement type="button" onClick={onClickButton}>
        {button}
      </ButtonElement>
    </Container>
  )
}

export default Unlock
