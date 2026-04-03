import { useState } from "react";
import { DataTable } from "./components/DataTable";
import { calcularDiasEntre, calcularDiasEntreStrings } from "./utils/fechas";

interface Estudiante {
  id: string;
  nombre: string;
  email: string;
  nota: number;
}

const estudiantes: Estudiante[] = [
  { id: "1", nombre: "Ana García", email: "ana@uni.es", nota: 8.5 },
  { id: "2", nombre: "Luis Martín", email: "luis@uni.es", nota: 6.2 },
  { id: "3", nombre: "Sara López", email: "sara@uni.es", nota: 9.1 },
];

const columnas = [
  { key: "nombre" as const, cabecera: "Nombre" },
  { key: "email" as const, cabecera: "Email" },
  { key: "nota" as const, cabecera: "Nota" },
];

function App() {
  // Partial<Estudiante> porque al editar el usuario puede no haber
  // rellenado todos los campos todavía. null = no hay edición activa.
  const [filaEnEdicion, setFilaEnEdicion] = useState<Partial<Estudiante> | null>(null);
const diasDesdeInicio = calcularDiasEntreStrings("2024-01-01", "2024-12-31");
console.log("Días entre fechas:", diasDesdeInicio);
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Gestión de Estudiantes</h1>
      <p>Días en el año 2024: {diasDesdeInicio}</p>
      <DataTable
        datos={estudiantes}
        columnas={columnas}
        onEditarFila={(fila) => setFilaEnEdicion(fila)}
      />

      {filaEnEdicion && (
        <div style={{ marginTop: "1rem", padding: "1rem", border: "1px solid #ccc" }}>
          <h2>Editando: {filaEnEdicion.nombre ?? "—"}</h2>
          <p>Email: {filaEnEdicion.email ?? "—"}</p>
          <p>Nota: {filaEnEdicion.nota ?? "—"}</p>
          <button onClick={() => setFilaEnEdicion(null)}>Cerrar</button>
        </div>
      )}
    </div>
  );
}

export default App;