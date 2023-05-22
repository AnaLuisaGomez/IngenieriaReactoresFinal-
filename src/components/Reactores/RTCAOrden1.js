import React from "react";
import { useForm } from "react-hook-form";

export const RTCAOrden1 = () => {
  const { register, handleSubmit } = useForm();
  const calculate = (data) => {
    var ca0 = Number();
    var fa0 = Number();
    var v = Number();

    ca0 =
      (parseFloat(data["gamma"]) * parseFloat(data["presion"])) /
      (0.082 * parseFloat(data["temp"]));
    fa0 = ca0 * parseFloat(data["qa0"]);
    v =
      (fa0 * parseFloat(data["x"])) /
      (parseFloat(data["k"]) * ca0 * (1 - parseFloat(data["x"])));

    document.getElementById("ca0").value = ca0;
    document.getElementById("fa0").value = fa0;
    document.getElementById("v").value = v;
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Reacción de primer orden A+I B+C</h5>
        <div className="card-text">
          <form className="form-inline" onSubmit={handleSubmit(calculate)}>
            <div className="row">&nbsp;</div>

            <div className="row">&nbsp;</div>
            <div className="row">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>Temperatura</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("temp")}
                        id={"temp"}
                      />
                    </td>
                    <td>ºK</td>
                  </tr>
                  <tr>
                    <td>Presión</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("presion")}
                        id={"presion"}
                      />
                    </td>
                    <td>atm</td>
                  </tr>
                  <tr>
                    <td>QA0</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("qa0")}
                        id={"qa0"}
                      />
                    </td>
                    <td>lt/s</td>
                  </tr>
                  <tr>
                    <td>K</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("k")}
                        id={"k"}
                      />
                    </td>
                    <td>1/s</td>
                  </tr>
                  <tr>
                    <td>X</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("x")}
                        id={"x"}
                      />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>γA0</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("gamma")}
                        id={"gamma"}
                      />
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="row">&nbsp;</div>
            <div className="row">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>CA0</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("ca0")}
                        id={"ca0"}
                      />
                    </td>
                    <td>mol/lt</td>
                  </tr>
                  <tr>
                    <td>FA0</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("fa0")}
                        id={"fa0"}
                      />
                    </td>
                    <td>atm</td>
                  </tr>
                  <tr>
                    <td>V</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("v")}
                        id={"v"}
                      />
                    </td>
                    <td>lt</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row">&nbsp;</div>
            <div className="row">
              <input
                type="submit"
                value="Calcular"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
