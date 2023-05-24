import React from "react";
import { useForm } from "react-hook-form";

export const EnSerie2 = () => {
  const { register, handleSubmit } = useForm();
  const calculate = (data) => {
    var teta = Number();
    var x = Number();
    
    var q = parseFloat(data["q"]);
    var v = parseFloat(data["v"]);
    var k = parseFloat(data["k"]);
    var reactores = parseFloat(data["reactores"]);
    
    teta = v / q;
    x = 1 - (1/  Math.pow(( (k*teta) + 1), reactores) );
    

    document.getElementById("teta").value = teta;
    document.getElementById("x").value = x;
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Cálculo de la conversión</h5>
        <div className="card-text">
          <form className="form-inline" onSubmit={handleSubmit(calculate)}>
            <div className="row">&nbsp;</div>

            <div className="row">&nbsp;</div>
            <div className="row">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>Q</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("q")}
                        id={"q"}
                      />
                    </td>
                    <td>cm^3/min</td>
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
                    <td>cm^3</td>
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
                    <td>1/min</td>
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
