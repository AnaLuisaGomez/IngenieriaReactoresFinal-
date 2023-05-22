import React from "react";
import { useForm } from "react-hook-form";

export const DifRevOrden2 = () => {
  const { register, handleSubmit } = useForm();

  const calculate = (data) => {
    // find not empty
    var index = 0;
    for (let i = 1; i < 10; i++) {
      if (data["x_" + (i + 1)] == null || data["x_" + (i + 1)] == "") {
        index = i;
        break;
      }
    }

    // alpha
    var ca0 = parseFloat(document.getElementById("ca0").value);
    var cb0 = parseFloat(document.getElementById("cb0").value);
    var keq = parseFloat(document.getElementById("keq").value);
    var alpha = new Number();
    alpha = ca0 * cb0;
    document.getElementById("alp").value = alpha;

    // beta 
    var beta = new Number();
    beta = (ca0 + cb0) * -1;
    document.getElementById("beta").value = beta;

    // gama
    var gama = new Number();
    gama = 1 - (1/keq);
    document.getElementById("gamma").value = gama;

    for (let i = 1; i <= index; i++) {
      var j = i - 1;
      var ccTemp = new Number();
      ccTemp = parseFloat(document.getElementById("x_"+i).value) * ca0;
      document.getElementById("cc_"+i).value = ccTemp;
    
      
      var ccPromedio = new Number();
      ccPromedio = (parseFloat(document.getElementById("cc_"+i).value) + parseFloat(document.getElementById("cc_"+j).value)) / 2;
      document.getElementById("ccp_"+i).value = ccPromedio;

       // Calculate k
       var k = new Number();
       var t = new Number();
       t = parseFloat(data["t_" + i]) - parseFloat(data["t_" + j]);
       k = parseFloat(document.getElementById("cc_"+i).value) - parseFloat(document.getElementById("cc_"+j).value);
       k = (k / t);
       k = k / (alpha + (beta * ccPromedio) + gama * Math.pow(ccPromedio, 2) );
       //console.log(k)
       document.getElementById("k_" + i).value = k;
       //document.getElementById("t_" + index).value = "infinito";
       //document.getElementById("CAp_" + index).value = "infinito";
       //document.getElementById("k_" + index).value = "infinito";
    }

    // K promedio
    var kpromedio = new Number();
    kpromedio = 0;
    var counter = 0;
    for (let i = 1; i < index; i++) {
      kpromedio += parseFloat(document.getElementById("k_" + i).value);
      counter += 1;
    }
    kpromedio = kpromedio / counter;
    document.getElementById("k_promedio").value = kpromedio;

    // K1 y K2
    var K1 = kpromedio
    document.getElementById("K1").value = K1;

    var K2 = new Number();
    K2 = K1 / keq;
    document.getElementById("K2").value = K2;
  };

  // Need to change this part
  const rowsSize = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          Método diferencial para una reacción reversible de orden 2
        </h5>
        <div className="card-text">
          <form className="form-inline" onSubmit={handleSubmit(calculate)}>
            <div className="row">&nbsp;</div>
            <div className="row">
              <table className="table table-striped">
                <tr>CA0 (M)</tr>
                <tr>
                  <input
                    className="form-control"
                    {...register("ca0")}
                    id={"ca0"}
                  />
                </tr>
                <tr>CB0 (M)</tr>
                <tr>
                  <input
                    className="form-control"
                    {...register("cb0")}
                    id={"cb0"}
                  />
                </tr>
                <tr>Keq</tr>
                <tr>
                  <input
                    className="form-control"
                    {...register("keq")}
                    id={"keq"}
                  />
                </tr>
                <tr>α</tr>
                <tr>
                  <input
                    className="form-control"
                    {...register("alp")}
                    id={"alp"}
                  />
                </tr>
                <tr>β</tr>
                <tr>
                  <input
                    className="form-control"
                    {...register("beta")}
                    id={"beta"}
                  />
                </tr>
                <tr>γ</tr>
                <tr>
                  <input
                    className="form-control"
                    {...register("gamma")}
                    id={"gamma"}
                  />
                </tr>
              </table>
            </div>
            <div className="row">&nbsp;</div>
            <div className="row">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">t(s)</th>
                    <th scope="col">X</th>
                    <th scope="col">Cc</th>
                    <th scope="col">Cc prom</th>
                    <th scope="col">K* (mol/L*s)</th>
                  </tr>
                </thead>
                <tbody>
                  {rowsSize.map((row, i) => {
                    if (row === 0) {
                      return (
                        <tr>
                          <td>
                            <input
                              type="number"
                              className="form-control"
                              {...register("t_" + i)}
                              id={"t_" + i}
                              value={ 0 }
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control"
                              {...register("x_" + i)}
                              id={"x_" + i}
                              value={0}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control"
                              {...register("cc_" + i)}
                              id={"cc_" + i}
                              value="0"
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control"
                              {...register("ccp_" + i)}
                              id={"ccp_" + i}
                              readOnly
                              value="0"
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control"
                              {...register("k_" + i)}
                              id={"k_" + i}
                              readOnly
                              value="0"
                            />
                          </td>
                        </tr>
                      );
                    } else {
                      return (
                        <tr>
                          <td>
                            <input
                              type="number"
                              className="form-control"
                              {...register("t_" + i)}
                              id={"t_" + i}
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              {...register("x_" + i)}
                              id={"x_" + i}
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              {...register("cc_" + i)}
                              id={"cc_" + i}
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              {...register("ccp_" + i)}
                              id={"ccp_" + i}
                              readOnly
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              {...register("k_" + i)}
                              id={"k_" + i}
                              readOnly
                            />
                          </td>
                        </tr>
                      );
                    }
                  })}
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
            <div className="row">
              <label>K* promedio</label>
              <input
                className="form-control"
                {...register("k_promedio")}
                id={"k_promedio"}
              />
            </div>
            <div className="row">&nbsp;</div>
            <div className="row">
              <table>
                <tr>
                  <th>γA=</th>
                  <th>
                    <input
                      className="form-control"
                      {...register("K1")}
                      id={"K1"}
                    />
                  </th>
                  <th>CACB-</th>
                  <th>
                    <input
                      className="form-control"
                      {...register("k2")}
                      id={"K2"}
                    />
                  </th>
                  <th>CCCD</th>
                </tr>
              </table>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
