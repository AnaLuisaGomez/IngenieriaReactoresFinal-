import React from "react";
import { useForm } from "react-hook-form";

export const IntIrrevOrd1_2 = () => {
  const { register, handleSubmit } = useForm();

  const calculate = (data) => {
    // find not empty
    var index = 0;
    for (let i = 1; i < 10; i++) {
      if (data["ca_" + (i + 1)] == null || data["ca_" + (i + 1)] == "") {
        index = i;
        break;
      }
    }

    for (let i = 1; i <= index; i++) {
      var j = i - 1;
      // Calculate k
      var k = new Number();
      k =
        Math.pow(parseFloat(data["ca_" + i]), 0.5) -
        Math.pow(parseFloat(data["ca_0"]), 0.5);
      k = (-2 * k) / parseFloat(data["t_" + i]);
      //console.log(k)
      document.getElementById("k_" + i).value = k;
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
    document.getElementById("kpromedio").value = kpromedio;
  };

  // Need to change this part
  const rowsSize = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          Método Integral para una reacción no reversible de orden 1/2
        </h5>
        <div className="card-text">
          <form className="form-inline" onSubmit={handleSubmit(calculate)}>
            <div className="row">&nbsp;</div>

            <div className="row">&nbsp;</div>
            <div className="row">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">CA (mol/L)</th>
                    <th scope="col">t(s)</th>
                    <th scope="col">K (mol 1/2 / L1/2*s)</th>
                  </tr>
                </thead>
                <tbody>
                  {rowsSize.map((row, i) => {
                    if (row === 0) {
                      return (
                        <tr>
                          <td>
                            <input
                              className="form-control"
                              {...register("ca_" + i)}
                              id={"ca_" + i}
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              {...register("t_" + i)}
                              id={"t_" + i}
                              value={0}
                            />
                          </td>
                          <td>
                            <input
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
                              className="form-control"
                              {...register("ca_" + i)}
                              id={"ca_" + i}
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              {...register("t_" + i)}
                              id={"t_" + i}
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

            <div className="row">&nbsp;</div>
            <div className="row">
              <table>
                <tr>
                  <th>γA=</th>
                  <th>
                    <input
                      className="form-control"
                      {...register("kpromedio")}
                      id={"kpromedio"}
                    />
                  </th>
                  <th>CA^1/2</th>
                </tr>
              </table>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
