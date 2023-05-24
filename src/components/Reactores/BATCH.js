import React from "react";
import { useForm } from "react-hook-form";

export const BATCH = () => {
  const { register, handleSubmit } = useForm();
  const calculate = (data) => {
    var n = Number();
    var xtotal = Number();
    var tos = Number();
    var toh = Number();
    var ttotal = Number();
    var np = Number();
    var volumen  = Number();

    let temperatura = parseFloat(data['temp']);
    let presion = parseFloat(data['presion']);
    let gamma = parseFloat(data['gamma']);
    let ca0 = parseFloat(data['ca0']);
    let re = parseFloat(data['re']);
    let x = parseFloat(data['re']);
    let mc = parseFloat(data['mc']);
    let cc = parseFloat(data['cc']);
    let pmC = parseFloat(data['pm']);
    let tm = parseFloat(data['tm']);

    n = cc / pmC;
    xtotal = n / ( (re/100) * ca0 );
    tos = (-1 * (1/gamma)) * ( Math.log(1 - xtotal) );
    toh = tos / 3600;
    ttotal = tm + toh;
    np = (mc / pmC) * (1000);
    volumen = (np / n) * 1.1;

    document.getElementById('n').value = n;
    document.getElementById('xtot').value = xtotal;
    document.getElementById('tos').value = tos;
    document.getElementById('toh').value = toh;
    document.getElementById('ttotal').value = ttotal;
    document.getElementById('np').value = np;
    document.getElementById('volumen').value = volumen;
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">BATCH</h5>
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
                    <td>ºC</td>
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
                    <td>γA</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("gamma")}
                        id={"gamma"}
                      />
                    </td>
                    <td>CA(1/s)</td>
                  </tr>
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
                    <td>Re</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("re")}
                        id={"re"}
                      />
                    </td>
                    <td></td>
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
                    <td>Mc</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("mc")}
                        id={"mc"}
                      />
                    </td>
                    <td>Kg/día</td>
                  </tr>
                  <tr>
                    <td>Cc</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("cc")}
                        id={"cc"}
                      />
                    </td>
                    <td>g/lt</td>
                  </tr>
                  <tr>
                    <td>PM de C</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("pm")}
                        id={"pm"}
                      />
                    </td>
                    <td>g/mol</td>
                  </tr>
                  <tr>
                    <td>Tm</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("tm")}
                        id={"tm"}
                      />
                    </td>
                    <td>hrs</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="row">&nbsp;</div>
            <div className="row">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>n</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("n")}
                        id={"n"}
                      />
                    </td>
                    <td>mol/lt</td>
                  </tr>
                  <tr>
                    <td>Xtotal</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("xtot")}
                        id={"xtot"}
                      />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>to</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("tos")}
                        id={"tos"}
                      />
                    </td>
                    <td>s</td>
                  </tr>
                  <tr>
                    <td>to</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("toh")}
                        id={"toh"}
                      />
                    </td>
                    <td>hrs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row">&nbsp;</div>
            <div className="row">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>Ttotal</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("ttotal")}
                        id={"ttotal"}
                      />
                    </td>
                    <td>hrs</td>
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
                    <td>mol</td>
                  </tr>
                  <tr>
                    <td>Volumen</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("volumen")}
                        id={"volumen"}
                      />
                    </td>
                    <td>lt</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
