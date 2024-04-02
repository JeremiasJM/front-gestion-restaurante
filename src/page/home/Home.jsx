import { Carousel, Button, Card } from 'react-bootstrap';
import flyer1 from '../../resource/media/img-carousel/flyer-principal.png';
import flyer2 from '../../resource/media/img-carousel/flyer-secundario.png';

const Home = () => {
  return (
    <>
      <Carousel style={{ width: '75%', margin: '3% auto' }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={flyer1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={flyer2}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>

      <Card className="text-center titulo" style={{
        width: '75%', margin: '5% auto',
        border: 'none',
        backgroundColor: '#efe7df'
      }}>
        <Card.Header style={{
          backgroundColor: '#efe7df'
        }}>Bienvenidos</Card.Header>
        <Card.Body className='parrafo'>
          <Card.Text>
          Te esperamos para vivir una experiencia inigualable! Donde la comida exquisita, los tragos de calidad premium y el 
          ambiente amigable se combinan para hacer de cada visita un momento inolvidable. Nuestro equipo de bartenders expertos 
          está listo para prepararte tus cócteles preferidos, mientras disfrutas de la mejor música en vivo o de nuestros eventos 
          temáticos.
          </Card.Text>
          <Button variant="primary" style={{marginTop: '2%'}}>Hace tu reserva aquí</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default Home