import React from "react";
import { useForm } from "react-hook-form";

export const RTFPOrd1Tip3 = () => {
  const { register, handleSubmit } = useForm();
  const calculate = (data) => {
    var ca0 = Number();
    var fb0 = Number();
    var fa0 = Number();
    var ea = Number();
    var v = Number();

    var k = parseFloat(data["k"]);
    var x = parseFloat(data["x"]);
    var p = parseFloat(data["p"]);
    var nr = parseFloat(data["nr"]);
    var np = parseFloat(data["np"]);

    ca0 =
      (parseFloat(data["gamma"]) * parseFloat(data["presion"])) /
      (0.082 * parseFloat(data["temp"]));
    fb0 = p * ( 1000000/883008000) ;
    fa0 = fb0 / x;
    ea = (np-nr)/nr;
    var part1 = Number();
    var part2 = Number();
    var part3 = Number();
    v = fa0 / (k*ca0);
    part1 = 1 + ea;
    part2 = Math.log(1/(1-x));
    part3 = ea * x;
    v = v * ((part1 * part2)-part3);
    

    document.getElementById("ca0").value = ca0;
    document.getElementById("fb0").value = fb0;
    document.getElementById("fa0").value = fa0;
    document.getElementById("ea").value = ea;
    document.getElementById("v").value = v;
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Reacción de primer orden isotermica A -- B + I</h5>
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
                    <td>P</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("p")}
                        id={"p"}
                      />
                    </td>
                    <td>ton/año</td>
                  </tr>
                  <tr>
                    <td>K2</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("k2")}
                        id={"k2"}
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
                    <td>E</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("e")}
                        id={"e"}
                      />
                    </td>
                    <td>Kcal/mol</td>
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
                    <td>FB0</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("fb0")}
                        id={"fb0"}
                      />
                    </td>
                    <td>mol/s</td>
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
                    <td>mol/s</td>
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
