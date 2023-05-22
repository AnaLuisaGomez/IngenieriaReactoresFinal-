import React from "react";
import { useForm } from "react-hook-form";

export const BATCH = () => {
  const { register, handleSubmit } = useForm();
  const calculate = (data) => {
    var n = Number();
    var xtot = Number();
    var tos = Number();
    var toh = Number();
    var ttotal = Number();
    var ne = Number();
    var volumen  = Number();

    n = parseFloat(data['cc']) / parseFloat(data['pm']);
    xtot = (n / parseFloat(data['re'])) / parseFloat(data['ca0']);
    tos = ( Math.log( 1 - xtot) ) * ((1 / parseFloat(data['gamma'])) * -1);
    toh = tos * 3600;
    ttotal = parseFloat(data['tm']) + toh;
    ne = parseFloat(data['mc']) / parseFloat(data['densidad']);
    volumen = ne / n;

    document.getElementById('n').value = n;
    document.getElementById('xtot').value = xtot;
    document.getElementById('tos').value = tos;
    document.getElementById('toh').value = toh;
    document.getElementById('ttotal').value = ttotal;
    document.getElementById('ne').value = ne;
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
                    <td>s</td>
                  </tr>
                  <tr>
                    <td>Densidad de C</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("densidad")}
                        id={"densidad"}
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
                    <td>Xtot</td>
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
                    <td>ne</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("ne")}
                        id={"ne"}
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
