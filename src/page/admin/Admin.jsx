import { useContext, useState } from "react";
import "./admin.css";
import Swal from "sweetalert2";
import { ReservaProvider } from "../../context/ReserveContext";
import { PulseLoader } from "react-spinners";

const Admin = () => {
  const { reservas, updateReserva, loading, deleteReserva } =
    useContext(ReservaProvider);
  const [modalData, setModalData] = useState(null);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [comensales, setComensales] = useState("");
  const [validationError, setValidationError] = useState(false);

  const extractDate = (isoDateString) => {
    const dateOnly = isoDateString.split("T")[0];
    return dateOnly;
  };
  const openModal = (reserva) => {
    setModalData(reserva);
    setNombre(reserva.nombre);
    setApellido(reserva.apellido);
    setFecha(extractDate(reserva.fecha));
    setHora(reserva.hora);
    setComensales(reserva.comensales);
  };
  const closeModal = () => {
    setModalData(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !apellido || !fecha || !hora || !comensales) {
      setValidationError("Complete los Campos Correspondiente");
      return;
    }
    if (!nombre || nombre.length > 10 || !/^[a-zA-Z\s]+$/.test(nombre)) {
      setValidationError("Dato no Valido: Solo letras");
      return;
    }

    if (!apellido || apellido.length > 15 || !/^[a-zA-Z\s]+$/.test(apellido)) {
      setValidationError("Dato no Valido: Solo letras");
      return;
    }

    const selectedDate = new Date(fecha);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    if (!fecha || selectedDate < currentDate) {
      setValidationError("Fecha no Dispoble");
      return;
    }
    if (!comensales || comensales < 1 || comensales >= 5) {
      setValidationError("Dato no Valido: Solo numero");
      return;
    }

    console.log(reservas);
    //entra a las reservas y valida que ninguna de las otras reservas tengan el mismo dia y hora
    for (let i = 0; i < reservas.length; i++) {
      const reserva = reservas[i];
      if (
        extractDate(reserva.fecha) === extractDate(fecha) &&
        reserva.hora === hora &&
        reserva._id !== modalData._id
      ) {
        setValidationError("Ya hay una reserva en ese dia y hora");
        return;
      }
    }
    const { _id } = modalData;
    const updatedReserva = {
      _id,
      nombre,
      apellido,
      fecha,
      hora,
      comensales,
    };

    Swal.fire({
      title: "Seguro que desea Editar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        updateReserva(_id, updatedReserva)
          .then((response) => {
            console.log("Reserva actualizada:", response);
            setNombre("");
            setApellido("");
            setFecha("");
            setHora("");
            setComensales("");
            setValidationError(false);
            Swal.fire({
              title: "Reserva Actualizada!",
              icon: "success",
              confirmButtonText: "Ok",
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.reload();
              }
            });
          })
          .catch((error) => {
            console.error("Error al actualizar la reserva:", error);
          });
      }
    });
  };
  //crea una funcion para eliminar reserva
  const handleDelete = (id) => {
    Swal.fire({
      title: "Eliminar Reserva!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteReserva(id)
          .then((response) => {
            console.log("Reserva eliminada:", response);
            window.location.reload();
          })
          .catch((error) => {
            console.error("Error al eliminar la reserva:", error);
          });
      }
    });
  };
  return (
    <>
      {loading ? (
        <div className="loading ">
          <div className="">
            <PulseLoader color="#8A6113" size={25} />
            <h6>Cargando.....</h6>
          </div>
        </div>
      ) : (
        <main className="container-fluid">
          <h1 className="text-center">Panel Administrador</h1>

          <section className="pt-3 pb-3">
            <h2 className="text-center p-2">Gestión Usuarios</h2>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Usuario</th>
                    <th scope="col">Mail</th>
                    <th scope="col" className="text-end">
                      Acción
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Juan</td>
                    <td>juan@gmail.com</td>
                    <td className="d-flex justify-content-end gap-2">
                      <button type="button" className="btn btn-primary">
                        Editar
                      </button>
                      <button type="button" className="btn btn-warning">
                        Suspender
                      </button>
                      <button type="button" className="btn btn-danger">
                        Eliminar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Juan</td>
                    <td>juan@gmail.com</td>
                    <td className="d-flex justify-content-end gap-2">
                      <button type="button" className="btn btn-primary">
                        Editar
                      </button>
                      <button type="button" className="btn btn-warning">
                        Suspender
                      </button>
                      <button type="button" className="btn btn-danger">
                        Eliminar
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-center">Gestión Reservas</h2>
            <h2>Reservas</h2>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Hora</th>
                    <th scope="col">Comensales</th>
                    <th scope="col" className="text-end">
                      Acción
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {reservas.map((reserva) => (
                    <tr key={reserva._id}>
                      <td>{reserva.nombre}</td>
                      <td>{reserva.apellido}</td>
                      <td>{extractDate(reserva.fecha)}</td>
                      <td>{reserva.hora}</td>
                      <td>{reserva.comensales}</td>
                      <td className="d-flex justify-content-end gap-2">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => openModal(reserva)}
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          Editar
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => handleDelete(reserva._id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      )}

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Editar Reserva
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              ></button>
            </div>
            <div className="modal-body">
              <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                  <label htmlFor="nombre" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="apellido" className="form-label">
                    Apellido
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="fecha" className="form-label">
                    Fecha
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="fecha"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                  />
                </div>
                <div className="col-md-5">
                  <label htmlFor="hora" className="form-label">
                    Hora
                  </label>
                  <select
                    className="form-select"
                    id="hora"
                    onChange={(e) => setHora(e.target.value)}
                  >
                    <option value={hora}>Su hora {hora} </option>
                    <option value="21:30">21:30</option>
                    <option value="23:30">23:30</option>
                  </select>
                </div>

                <div className="col-md-3">
                  <label htmlFor="comensales" className="form-label">
                    Comensales
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="comensales"
                    value={comensales}
                    onChange={(e) => setComensales(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Guardar Cambios
                  </button>
                </div>
                {validationError && (
                  <div className="col-12">
                    <div className="alert alert-danger" role="alert">
                      {validationError}
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
