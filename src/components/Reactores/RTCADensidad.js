import React from "react";
import { useForm } from "react-hook-form";

export const RTCADensidad = () => {
  const { register, handleSubmit } = useForm();
  const calculate = (data) => {
    var v = Number();
    var q = parseFloat(data['q']);
    var k1 = parseFloat(data['k1']);
    var k2 = parseFloat(data['k2']);

    v = (Math.log(k1/k2) * q) / (k1-k2);

    document.getElementById("v").value = v;
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Densidad constante A <b>&#x2192;</b> B <b>&#x2192;</b> C</h5>
        <div className="card-text">
          <form className="form-inline" onSubmit={handleSubmit(calculate)}>
            <div className="row">&nbsp;</div>

            <div className="row">&nbsp;</div>
            <div className="row">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>K1</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("k1")}
                        id={"k1"}
                      />
                    </td>
                    <td>1/min</td>
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
                    <td>1/min</td>
                  </tr>
                  <tr>
                    <td>Q</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("q")}
                        id={"q"}
                      />
                    </td>
                    <td>ft^3/min</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="row">&nbsp;</div>
            <div className="row">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>V</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("v")}
                        id={"v"}
                      />
                    </td>
                    <td>ft^3/min</td>
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
