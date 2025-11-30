import "./Asistencia.css";
import LayoutPrincipal from "../LayoutPrincipal/LayoutPrincipal";

export default function Asistencia() {
  return (
    <LayoutPrincipal>
      <h2 className="title">Asistencia</h2>

      <select className="select">
        <option>3° A</option>
      </select>

      <table className="tabla">
        <thead>
          <tr>
            <th>Alumno</th>
            <th>L</th><th>M</th><th>M</th><th>J</th><th>V</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Federico Cruz</td>
            <td>✓</td><td>✓</td><td>✗</td><td>✗</td><td>✓</td>
          </tr>

          <tr>
            <td>Sofia Lopez</td>
            <td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✗</td>
          </tr>
        </tbody>
      </table>
    </LayoutPrincipal>
  );
}
