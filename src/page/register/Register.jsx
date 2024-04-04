import FormRegister from "../../components/formRegister/FormRegister"
import "../../index.css"

const Register = () => {
  const tipo = "Formulario de registro"
  return (
    <>
    <div className="row justify-content-center ">
      <div className="col justify-content-center ">
        <FormRegister tipo={tipo} />
      </div>

    </div>
    </>
  )
}

export default Register