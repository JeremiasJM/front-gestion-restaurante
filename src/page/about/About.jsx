

const About = (props) => {
    return (
        <div className='contenedor-about'>
            <img
                className='imagen-about'
                src={require(`../img-about/img-${props.imagen}.jpeg`)}
                alt='Foto equipo 3' />
            <div className='contenedor-texto-about'>
                <p className='nombre-about'>
                    <strong>{props.nombre}</strong>
                </p>
                <p className='contacto-about'>
                    {props.contacto}
                </p>
                <p className='texto-about'>"{props.testimonio}"</p>
            </div>
        </div>
    )
}

export default About