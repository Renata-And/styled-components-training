import { Button } from "./components/Button.styled";
import { Container } from "./components/Container.styled";
import { Image } from "./components/Image.styled";
import { Title } from "./components/Title.styled";
import image from './img/desert.png';

function App() {
  return (
    <Container>
      <Image src={image} alt='Desert' />
      <Title>Headline</Title>
      <p style={{
        fontWeight: '500',
        fontSize: '12px',
        lineHeight: '167%',
        color: '#abb3ba',
        padding: '0 20px',
      }}>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
      <div style={{ display: 'flex', gap: '12px', padding: '0 0 22px 20px' }}>
        <Button btnType={'primary'} color={'#4E71FE'}>See more</Button>
        <Button btnType={'outlined'} color={'#4E71FE'}>Save</Button>
      </div>
    </Container >
  );
}

export default App;
