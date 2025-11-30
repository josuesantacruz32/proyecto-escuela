import "./Dashboard.css";
import LayoutPrincipal from "../LayoutPrincipal/LayoutPrincipal";

export default function Dashboard() {
  return (
    <LayoutPrincipal>
      <h2 className="title">Resumen</h2>

      <div className="cards">
        <div className="card"> <h3>5</h3> <p>Tareas</p> </div>
        <div className="card"> <h3>8</h3> <p>Alumnos</p> </div>
        <div className="card"> <h3>12</h3> <p>Próximos</p> </div>
      </div>

      <h2 className="title">Reportes</h2>

      <div className="report-box">
        <p>Calificaciones</p>
        <button className="report-btn">Generar reporte</button>
      </div>
    </LayoutPrincipal>
  );
}
