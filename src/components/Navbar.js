import React from "react";
import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IntIrrevOrd0 } from "./Velocidad/IntIrrevOrd0";

export const Navbar = () => {
  const [element1Expanded, setElement1Expanded] = useState(false);
  const [element2Expanded, setElement2Expanded] = useState(false);
  const [element3Expanded, setElement3Expanded] = useState(false);
  const [element4Expanded, setElement4Expanded] = useState(false);
  const [element5Expanded, setElement5Expanded] = useState(false);
  const [element6Expanded, setElement6Expanded] = useState(false);
  const [element7Expanded, setElement7Expanded] = useState(false);
  const [element8Expanded, setElement8Expanded] = useState(false);
  const [element9Expanded, setElement9Expanded] = useState(false);
  const [element10Expanded, setElement10Expanded] = useState(false);
  const [element11Expanded, setElement11Expanded] = useState(false);

  const toggleElement1 = () => {
    setElement1Expanded(!element1Expanded);
  };
  const toggleElement2 = () => {
    setElement2Expanded(!element2Expanded);
  };
  const toggleElement3 = () => {
    setElement3Expanded(!element3Expanded);
  };
  const toggleElement4 = () => {
    setElement4Expanded(!element4Expanded);
  };
  const toggleElement5 = () => {
    setElement5Expanded(!element5Expanded);
  };
  const toggleElement6 = () => {
    setElement6Expanded(!element6Expanded);
  };
  const toggleElement7 = () => {
    setElement7Expanded(!element7Expanded);
  };
  const toggleElement8 = () => {
    setElement8Expanded(!element8Expanded);
  };
  const toggleElement9 = () => {
    setElement9Expanded(!element9Expanded);
  };
  const toggleElement10 = () => {
    setElement10Expanded(!element10Expanded);
  };
  const toggleElement11 = () => {
    setElement11Expanded(!element11Expanded);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-element">
        <div className="element-header" onClick={toggleElement1}>
          Velocidad de Reacción
        </div>
        {element1Expanded && (
          <ul className="sub-elements">
            <li>
              <div className="sidebar-element">
                <div className="element-header" onClick={toggleElement2}>
                  Diferencial
                </div>
                {element2Expanded && (
                  <ul className="sub-elements">
                    <li>
                      <div className="sidebar-element">
                        <div
                          className="element-header"
                          onClick={toggleElement3}
                        >
                          Reversible
                        </div>
                        {element3Expanded && (
                          <ul className="sub-elements">
                            <li>
                              {" "}
                              <Link
                                to={"DifRevOrden1"}
                                className="disabled-link"
                              >
                                Orden 1
                              </Link>
                            </li>
                            <li>
                              {" "}
                              <Link
                                to={"DifRevOrden2"}
                                className="disabled-link"
                              >
                                Orden 2
                              </Link>
                            </li>
                          </ul>
                        )}
                      </div>
                    </li>
                    <li>
                      <div className="sidebar-element">
                        <div
                          className="element-header"
                          onClick={toggleElement4}
                        >
                          No Reversible
                        </div>
                        {element4Expanded && (
                          <ul className="sub-elements">
                            <li>
                              <Link
                                className="disabled-link"
                                to={"DifIrrevOrd0"}
                              >
                                Orden 0
                              </Link>{" "}
                            </li>
                            <li>
                              <Link
                                className="disabled-link"
                                to={"DifIrrevOrd1_2"}
                              >
                                Orden 1/2
                              </Link>{" "}
                            </li>
                            <li>
                              <Link
                                className="disabled-link"
                                to={"DifIrrevOrd1"}
                              >
                                Orden 1
                              </Link>{" "}
                            </li>
                            <li>
                              <Link
                                className="disabled-link"
                                to={"DifIrrevOrd3_2"}
                              >
                                Orden 3/2
                              </Link>{" "}
                            </li>
                            <li>
                              <Link
                                className="disabled-link"
                                to={"DifIrrevOrd2"}
                              >
                                Orden 2
                              </Link>{" "}
                            </li>
                            <li>
                              <Link
                                className="disabled-link"
                                to={"DifIrrevOrd5_2"}
                              >
                                Orden 5/2
                              </Link>{" "}
                            </li>
                            <li>
                              <Link
                                className="disabled-link"
                                to={"DifIrrevOrd3"}
                              >
                                Orden 3
                              </Link>{" "}
                            </li>
                          </ul>
                        )}
                      </div>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <div className="sidebar-element">
                <div className="element-header" onClick={toggleElement5}>
                  Integral
                </div>
                {element5Expanded && (
                  <ul className="sub-elements">
                    <li>
                      <div className="sidebar-element">
                        <div
                          className="element-header"
                          onClick={toggleElement6}
                        >
                          Reversible
                        </div>
                        {element6Expanded && (
                          <ul className="sub-elements">
                            <li>
                              {" "}
                              <Link
                                className="disabled-link"
                                to={"IntRevOrden1"}
                              >
                                Orden 1
                              </Link>
                            </li>
                            <li>
                              {" "}
                              <Link
                                className="disabled-link"
                                to={"IntRevOrden2"}
                              >
                                Orden 2
                              </Link>
                            </li>
                          </ul>
                        )}
                      </div>
                    </li>
                    <li>
                      <div className="sidebar-element">
                        <div
                          className="element-header"
                          onClick={toggleElement7}
                        >
                          No Reversible
                        </div>
                        {element7Expanded && (
                          <ul className="sub-elements">
                            <li>
                              <Link
                                className="disabled-link"
                                to={"IntIrrevOrd0"}
                              >
                                Orden 0
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="disabled-link"
                                to={"IntIrrevOrd1_2"}
                              >
                                Orden 1/2
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="disabled-link"
                                to={"IntIrrevOrd1"}
                              >
                                Orden 1
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="disabled-link"
                                to={"IntIrrevOrd3_2"}
                              >
                                Orden 3/2
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="disabled-link"
                                to={"IntIrrevOrd2"}
                              >
                                Orden 2
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="disabled-link"
                                to={"IntIrrevOrd5_2"}
                              >
                                Orden 5/2
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="disabled-link"
                                to={"IntIrrevOrd3"}
                              >
                                Orden 3
                              </Link>
                            </li>
                          </ul>
                        )}
                      </div>
                    </li>
                  </ul>
                )}
              </div>
            </li>
          </ul>
        )}
      </div>

      <div className="sidebar-element">
        <div className="element-header" onClick={toggleElement8}>
          Volumen de Reactores
        </div>
        {element8Expanded && (
          <ul className="sub-elements">
            <li>
              <Link className="disabled-link" to={"BATCH"}>
                BATCH
              </Link>
            </li>
            <li>
              <div className="sidebar-element">
                <div className="element-header" onClick={toggleElement11}>
                  RTCA
                </div>
                {element11Expanded && (
                  <ul className="sub-elements">
                    <li>
                      <Link className="disabled-link" to={"RTCAOrden1"}>
                        Orden 1
                      </Link>
                    </li>
                    <li>
                      <Link className="disabled-link" to={"RTCADensidad"}>
                        Densidad constante
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>

            <li>
              <div className="sidebar-element">
                <div className="element-header" onClick={toggleElement9}>
                  RTFP
                </div>
                {element9Expanded && (
                  <ul className="sub-elements">
                    <li>
                      <Link className="disabled-link" to={"RTFPOrd1Tip1"}>
                        Orden 1 tipo A+ I <b>&#x2192;</b> B+C
                      </Link>
                    </li>
                    <li>
                      <Link className="disabled-link" to={"RTFPOrd1Tip2"}>
                        Orden 1 tipo A <b>&#x2192;</b> B + I
                      </Link>
                    </li>
                    <li>
                      <Link className="disabled-link" to={"RTFPOrd1Tip3"}>
                        Orden 1 Isotérmica
                      </Link>
                    </li>
                    <li>
                      <Link className="disabled-link" to={"RTFPOrd1Tip4"}>
                        Flujo constante
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <div className="sidebar-element">
                <div className="element-header" onClick={toggleElement10}>
                  Reactores en serie
                </div>
                {element10Expanded && (
                  <ul className="sub-elements">
                    <li>
                      <Link className="disabled-link" to={"EnSerie1"}>
                        Cálculo del tiempo de retención
                      </Link>
                    </li>
                    <li>
                      <Link className="disabled-link" to={"EnSerie2"}>
                        Cálcuo de la conversión
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <Link className="disabled-link2" to={"/"}>
                <b>Acerca de nosotros</b>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
