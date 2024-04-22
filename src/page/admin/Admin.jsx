import "./admin.css";

const Admin = () => {
  return (
    <>
      <main className="container-fluid mt-5 mb-5">
        <h1 className="text-center">Panel Administrador</h1>

        <section className="pt-3 pb-3">
          <h2 className="text-center p-2 text-decoration-none">Gestión Usuarios</h2>
          <div className="table-responsive me-5 ms-5">
            <table className="table table-bordered">
              <thead className="colorTabla">
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
          <h2 className="text-center text-decoration-none">Gestión Reservas</h2>
          <div className="table-responsive me-5 ms-5">
            <table className="table table-bordered">
              <thead className="colorTabla">
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
                <tr>
                  <td>Juan</td>
                  <td>Cruz</td>
                  <td>11/11/2024</td>
                  <td>22:00</td>
                  <td>10</td>
                  <td className="d-flex justify-content-end gap-2">
                    <button type="button" className="btn btn-primary">
                      Editar
                    </button>
                    <button type="button" className="btn btn-danger">
                      Eliminar
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Juan</td>
                  <td>Cruz</td>
                  <td>11/11/2024</td>
                  <td>22:00</td>
                  <td>10</td>
                  <td className="d-flex justify-content-end gap-2">
                    <button type="button" className="btn btn-primary">
                      Editar
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
      </main>
    </>
  );
};

export default Admin;
