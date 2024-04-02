import Carousel from 'react-bootstrap/Carousel';
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

    </>
  )
}

export default Home




