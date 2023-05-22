import React from "react";
import { useForm } from "react-hook-form";

export const IntRevOrden1 = () => {
  const { register, handleSubmit } = useForm();

  const calculate = (data) => {
    // find not empty
    var index = 0;
    for (let i = 0; i < 10; i++) {
      if (data["ca_" + (i + 1)] == null || data["ca_" + (i + 1)] == "") {
        index = i;
        break;
      }
    }

    for (let i = 1; i <= index; i++) {
      var k = new Number();
      var arriba = new Number();
      var abajo = new Number();
      arriba = parseFloat(data["ca_" + i]) - parseFloat(data["ca_" + index]);
      abajo = parseFloat(data["ca_" + 0]) - parseFloat(data["ca_" + index]);
      k = Math.log( arriba / abajo ) * -1;
      k = k * ( 1 / parseFloat( data['t_'+i] ) );
      document.getElementById("k_"+i).value = k;
    }
    document.getElementById("k_"+index).value = "infinito";
    document.getElementById("t_"+index).value = "infinito";

    // K promedio 
    var kpromedio = new Number();
    kpromedio = 0;
    var counter = 0;
    for (let i = 1; i < index; i++) {
      kpromedio += parseFloat(document.getElementById("k_" + i).value );
      counter += 1;
    }
    kpromedio = kpromedio / counter;
    document.getElementById("kpromedio").value = kpromedio;

    //kep
    var keq = new Number();
    keq = (parseFloat(data['ca_0']) - parseFloat(data['ca_'+index])) / parseFloat(data['ca_'+index]);
    document.getElementById("keq").value = keq;

    // K1 y K2
    var K1 = new Number();
    K1 = (kpromedio * keq) / (keq +1);
    document.getElementById("k1").value = K1;

    var K2 = new Number();
    K2 = K1 / keq;
    document.getElementById("k2").value = K2;

  };

  // Need to change this part
  const rowsSize = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          Método integral para una reacción reversible de orden 1
        </h5>
        <div className="card-text">
          <form className="form-inline" onSubmit={handleSubmit(calculate)}>
            <div className="row">&nbsp;</div>
            <div className="row">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">CA (mol/L)</th>
                    <th scope="col">t(s)</th>
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
                              {...register("ca_" + i)}
                              id={"ca_" + i}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control"
                              {...register("t_" + i)}
                              id={"t_" + i}
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
              <input type="submit" value="Calcular" className="btn btn-primary"/>
            </div>
            <div className="row">
              <label>K* promedio</label>
              <input
                className="form-control"
                {...register("kpromedio")}
                id={"kpromedio"}
              />
            </div>
            <div className="row">
              <label>Keq</label>
              <input className="form-control" {...register("keq")} id={"keq"} />
            </div>
            <div className="row">&nbsp;</div>
            <div className="row">
              <table>
                <tr>
                  <th>γA=</th>
                  <th><input className="form-control" {...register("k1")} id={"k1"} /></th>
                  <th>CA-</th>
                  <th><input className="form-control" {...register("k2")} id={"k2"} /></th>
                  <th>CB</th>
                </tr>
              </table>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
