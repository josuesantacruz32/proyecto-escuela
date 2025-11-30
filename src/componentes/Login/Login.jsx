import "./Login.css";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-grid">

        <div className="login-box">
          <h2>Iniciar sesión</h2>

          <input type="text" placeholder="Usuario" className="input"/>
          <input type="password" placeholder="Contraseña" className="input"/>

          <button className="login-btn">Ingresar</button>

          <p className="recover">¿Olvidaste tu contraseña?</p>
        </div>

        <div className="login-info">
          <h1>Control Escolar Moderno</h1>
          <p>Gestión rápida de tareas, calificaciones y asistencia.</p>
        </div>

      </div>
    </div>
  );
}
