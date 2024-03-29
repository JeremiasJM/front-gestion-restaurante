import fondoImagen from "../../../src/assets/footer-fondo3c.jpeg";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer
        className="container-fluid justify-content-center  container-con-fondo "
        style={{ backgroundImage: `url(${fondoImagen})` }}
      >
        <div className="row px-5 pt-sm-5 pt-lg-5 pb-lg-3 pt-xl-5 px-xl-5 justify-content-center align-items-xl-start ">

            <div className=" align-self-lg-center col-md-12 col-lg-3 d-flex align-items-center justify-content-center ">
                <div className="row ">
                    <div className=" col-12 col-md-12 col-lg-12">
                        <h4 className="text-white mb-5 text-center">
                        <a href="index.html">
                            {/* --->>>>   CAMBIAR 'href' cuando se use ruteo <------ */}
                            <img
                            className="img-fluid border rounded"
                            src="../../src/assets/logo.jpg"
                            alt=""
                            />
                        </a>
                        </h4>
                    </div>
                    
                    
                </div>
            </div>


          {/* <div className="col-12 text-center p-4 py-2"></div> */}
            <div className="col-12 col-md-12 col-lg-4 col-xl-4  d-flex align-items-center">
                <div className="row align-items-center">
                    
                    <div className="col-sm-12 col-lg-12 px-xl-5 col-md-6">
                        <h6 className="mb-lg-4 sombreado text-center titulo">
                        <strong>NUESTROS HORARIOS</strong>
                        </h6>
                        <p className="text-center sombreado subtitulo border border-2 rounded">
                        Martes a Domingos
                        <br /> 12AM - 16PM y de 20AM - 0:30AM
                        </p>
                    </div>
                    
                    <div className="mt-sm-4 mt-md-0 col-sm-12 col-lg-12 col-md-6 px-md-5 mb-xl-4">
                        <div className="row">
                        <h6 className="mb-lg-4 mb-3 sombreado text-center titulo">
                            <strong>ENCONTRANOS EN</strong>
                        </h6>
                        <a href="" className="btn btn-outline-light btn-mapa">
                            <i className="bi bi-pin-map-fill"></i>{" "}
                            <span className="fw-bold fs-4">
                            Gral. Paz 576, piso 9 of 2 - S.M. Tucumán{" "}
                            </span>
                        </a>
                        </div>
                    </div>

                    {/* <div className="col-12 text-center p-5 py-3"></div> */}

                    
                </div>

            </div>

            <div className=" col-12 col-md-12 col-lg-4 col-xl-5 ps-xl-5 col-md-6 py-sm-3 py-xl-0 pb-xl-1 d-flex align-items-center align-self-xl-center">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-12 px-xxl-5 py-sm-4 py-xl-0">
                        <strong><h5 className="sombreado text-center titulo">
                            ¿TENÉS ALGUNA DUDA?
                        </h5></strong>
                        <div className="border border-2 rounded mx-xl-5">
                            {/* <p className="sombreado text-center subtitulo">
                                Podés contactarte con nosotros directamente.
                            </p> */}
                            <a className="subtitulo text-decoration-none text-center">
                                <h6 className="subtitulo sombreado">
                                    <i className="bi bi-whatsapp me-2"></i>
                                    <strong>PEDIDOS:</strong> +549 3838 402-648
                                </h6>
                            </a>
                            <a className=" text-decoration-none text-center">
                                <h6 className="subtitulo sombreado">
                                    <i className="bi bi-whatsapp me-2"></i>
                                    <strong>RESERVAS:</strong> +549 381 486-268
                                </h6>
                            </a>
                        </div>
                    </div>

                    {/* <div className="col-12 text-center p-5 py-3"></div> */}

                    <div className="col col-sm col-md-6 col-lg-12 col-xl-12 my-sm-4 mt-md-3 mb-xl-4 align-self-md-center">
                        <h6 className="text-center mb-lg-1 mb-3 sombreado titulo ">
                            <strong>¡SEGUINOS AHORA!</strong>
                        </h6>
                        
                            <div className="row w-100 px-md-5 px-lg-0 px-xxl-5 d-flex justify-content-center">
                                <div className="col">
                                    <div className="text-color-white text-center py-md-2 mx-3">
                                        <a
                                        className="h5  text-decoration-none"
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                        >
                                        <i className="bi bi-facebook display-3 redes-sociales"></i>
                                        </a>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="text-color-white text-center py-md-2 mx-3">
                                        <a
                                        className="h5  text-decoration-none"
                                        href="https://www.youtube.com/"
                                        target="_blank"
                                        >
                                        <i className="bi bi-instagram display-3 redes-sociales"></i>
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="col">
                                    <div className="text-color-white text-center py-md-2 mx-3">
                                        <a
                                            className="h5 text-decoration-none"
                                            href="https://twitter.com"
                                            target="_blank"
                                        >
                                            <i className="bi bi-twitter display-3 redes-sociales"></i>
                                        </a>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="text-color-white text-center py-md-2 mx-3">
                                        <a
                                        className="h5  text-decoration-none"
                                        href="https://www.youtube.com/"
                                        target="_blank"
                                        >
                                        <i className="bi bi-youtube display-3 redes-sociales"></i>
                                        </a>
                                    </div>
                                </div>

                                

                            </div>
                        
                    </div>
                    
                    
                </div>
            </div>

        </div>
          <p className="text-center text-white bg-dark derechos subtitulo rounded-top ">
            ©2024 Rolling Food Gourmet
          </p>
      </footer>

    </>
  )
}

export default Footer