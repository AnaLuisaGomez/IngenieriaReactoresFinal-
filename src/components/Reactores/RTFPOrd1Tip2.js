import React from "react";
import { useForm } from "react-hook-form";

export const RTFPOrd1Tip2 = () => {
  const { register, handleSubmit } = useForm();
  const calculate = (data) => {
    var ca0 = Number();
    var ea = Number();
    var v = Number();
    var k = parseFloat(data['k']);
    var x = parseFloat(data['x']);
    var np = parseFloat(data['np']);
    var nr = parseFloat(data['nr']);
    var fa0 = parseFloat(data['fa0']);

    ca0 =
      (parseFloat(data["gamma"]) * parseFloat(data["presion"])) /
      (0.082 * parseFloat(data["temp"]));
    ea = (np-nr)/nr;
    v = fa0 / (k*ca0);
    var part1 = Number();
    var part2 = Number();
    var part3 = Number();
    part1 = 1 + ea;
    part2 = Math.log(1/(1-x));
    part3 = ea * x;
    v = v * ((part1 * part2)-part3);

    document.getElementById("ca0").value = ca0;
    document.getElementById("ea").value = ea;
    document.getElementById("v").value = v;
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Reacción de primer orden tipo A --  B + I</h5>
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
                    <td>FA0</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("fa0")}
                        id={"fa0"}
                      />
                    </td>
                    <td>mol/hr</td>
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
                    <td>np</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("np")}
                        id={"np"}
                      />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>nr</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("nr")}
                        id={"nr"}
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
                    <td>EA</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("ea")}
                        id={"ea"}
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
