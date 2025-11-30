import "./TareasCalificaciones.css";
import LayoutPrincipal from "../LayoutPrincipal/LayoutPrincipal";

export default function TareasCalificaciones() {
  return (
    <LayoutPrincipal>
      <h2 className="title">Tareas y calificaciones</h2>

      <select className="select">
        <option>Matemáticas</option>
      </select>

      <table className="tabla">
        <thead>
          <tr>
            <th>Tarea</th>
            <th>Calificación</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Tarea 1</td><td>85</td></tr>
          <tr><td>Tarea 2</td><td>90</td></tr>
          <tr><td>Quiz 1</td><td>18</td></tr>
          <tr><td>Quiz 2</td><td>20</td></tr>
        </tbody>
      </table>

      <button className="register-btn">Registrar</button>
    </LayoutPrincipal>
  );
}
