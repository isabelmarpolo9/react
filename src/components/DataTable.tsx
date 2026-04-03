interface ColumnaTabla<T> {
  key: keyof T;
  cabecera: string;
}

interface DataTableProps<T extends object> {
  datos: T[];
  columnas: ColumnaTabla<T>[];
  onEditarFila?: (fila: T) => void;
}

export function DataTable<T extends object>({
  datos,
  columnas,
  onEditarFila,
}: DataTableProps<T>) {
  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          {columnas.map((col) => (
            <th key={String(col.key)} style={{ border: "1px solid #ccc", padding: "8px" }}>
              {col.cabecera}
            </th>
          ))}
          {onEditarFila && (
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Acciones</th>
          )}
        </tr>
      </thead>
      <tbody>
        {datos.map((fila, indice) => (
          <tr key={indice}>
            {columnas.map((col) => (
              <td key={String(col.key)} style={{ border: "1px solid #ccc", padding: "8px" }}>
                {String(fila[col.key])}
              </td>
            ))}
            {onEditarFila && (
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                <button onClick={() => onEditarFila(fila)}>Editar</button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

