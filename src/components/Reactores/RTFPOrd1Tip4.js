import React from "react";
import { useForm } from "react-hook-form";

export const RTFPOrd1Tip4 = () => {
  const { register, handleSubmit } = useForm();
  const calculate = (data) => {
    var v = Number();
    var qa0 = parseFloat(data['qa0']);
    var k = parseFloat(data['k']);
    var x = parseFloat(data['x']);

    v = (qa0/k) * ( (Math.log(1/(1-x))) );

    document.getElementById("v").value = v;
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Reacción a flujo constante A <b>&#x2192;</b>  B</h5>
        <div className="card-text">
          <form className="form-inline" onSubmit={handleSubmit(calculate)}>
            <div className="row">&nbsp;</div>

            <div className="row">&nbsp;</div>
            <div className="row">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>QA0</td>
                    <td>
                      <input
                        className="form-control"
                        {...register("qa0")}
                        id={"qa0"}
                      />
                    </td>
                    <td>lt/min</td>
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
