import React from "react";
import { useForm } from "react-hook-form";

export const RTFPOrd1Tip3 = () => {
  const { register, handleSubmit } = useForm();
  const calculate = (data) => {
    var ca0 = Number();
    var K1 = Number();
    var fb0 = Number();
    var fa0 = Number();
    var e = Number();
    var v = Number();
    var potencia = Number();
    var part1 = Number();
    var part2 = Number();
    var part3 = Number();
    var part4 = Number();

    let t0 = parseFloat(data["t0"]);
    let t1 = parseFloat(data["t1"]);
    let t2 = parseFloat(data["t2"]);
    let presion = parseFloat(data["presion"]);
    let p = parseFloat(data["p"]);
    let k2 = parseFloat(data["k2"]);
    let ea = parseFloat(data["ea"]);
    let x = parseFloat(data["x"]);
    let np = parseFloat(data["np"]);
    let nr = parseFloat(data["nr"]);
    let gamma = parseFloat(data["gamma"]);
    

    ca0 = (gamma * presion) / (0.082 * t0);
    potencia = (ea/0.001987) * ( (1/t2) - (1/t0) );
    K1 = k2 * ( Math.pow( Math.E, potencia));
    fb0 = p * (125/110376);
    fa0 = fb0 / x;
    e = (np - nr) / nr;
    
    part1 = fa0/(K1*ca0);
    console.log("p1 " + part1);
    part2 = 1 + ea;
    console.log("p2 " + part2);
    part3 = Math.log(1/(1-x));
    console.log("p3 " + part3);
    part4 = ea * x;
    console.log("p4 " + part4);
    v = part1 * ( (part2* part3) / part4 );
    
    document.getElementById("ca0").value = ca0;
    document.getElementById("K1").value = K1;
    document.getElementById("fb0").value = fb0;
    document.getElementById("fa0").value = fa0;
    document.getElementById("e").value = e;
    
    document.getElementById("v").value = v;
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Reacción de primer orden isotermica A <b>&#x2192;</b>  B + I</h5>
        <div className="card-text">
          <form className="form-inline" onSubmit={handleSubmit(calculate)}>
            <div className="row">&nbsp;</div>

            <div className="row">&nbsp;</div>
            <div className="row">
              <table className="table table-striped">
                <tbody>
                <tr>
                    <td>T0</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("t0")}
                        id={"t0"}
                      />
                    </td>
                    <td>ºK</td>
                  </tr>
                  <tr>
                    <td>T1</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("t1")}
                        id={"t1"}
                      />
                    </td>
                    <td>ºK</td>
                  </tr>
                  <tr>
                    <td>T2</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("t2")}
                        id={"t2"}
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
                    <td>P (flujo de producción)</td>
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
                    <td>Ea</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("ea")}
                        id={"ea"}
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
                    <td>K1</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("K1")}
                        id={"K1"}
                      />
                    </td>
                    <td>1/s</td>
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
                    <td>E</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("e")}
                        id={"e"}
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
