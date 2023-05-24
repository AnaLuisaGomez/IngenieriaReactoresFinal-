import React from "react";
import { useForm } from "react-hook-form";

export const EnSerie1 = () => {
  const { register, handleSubmit } = useForm();
  const calculate = (data) => {
    var k = Number();
    var teta = Number();
    var tetaT = Number();
    
    let tiempo = parseFloat(data["tiempo"]);
    let x = parseFloat(data["x"]);
    let reactores = parseFloat(data["reactores"]);
    
    k = Math.log(1/(1-x));
    k = k * (1/tiempo);
    
    teta = Math.pow( (1 / (1-x)) , (1/(reactores)) )-1;
    teta = teta / k;

    tetaT = teta * reactores;
    

    document.getElementById("k").value = k;
    document.getElementById("teta").value = teta;
    document.getElementById("tetaT").value = tetaT;
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Cálculo del tiempo de retención</h5>
        <div className="card-text">
          <form className="form-inline" onSubmit={handleSubmit(calculate)}>
            <div className="row">&nbsp;</div>

            <div className="row">&nbsp;</div>
            <div className="row">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>Tiempo</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("tiempo")}
                        id={"tiempo"}
                      />
                    </td>
                    <td>hrs</td>
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
                    <td>#Reactores</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("reactores")}
                        id={"reactores"}
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
                    <td>K</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("k")}
                        id={"k"}
                      />
                    </td>
                    <td>mol/lt</td>
                  </tr>
                  <tr>
                    <td>Θ</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("teta")}
                        id={"teta"}
                      />
                    </td>
                    <td>hrs</td>
                  </tr>
                  <tr>
                    <td>ΘTOT</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("tetaT")}
                        id={"tetaT"}
                      />
                    </td>
                    <td>hrs</td>
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
