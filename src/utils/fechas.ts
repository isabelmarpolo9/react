import { differenceInDays, parseISO } from "date-fns";

// Recibe dos fechas y devuelve la diferencia en días
export function calcularDiasEntre(fechaInicio: Date, fechaFin: Date): number {
  return differenceInDays(fechaFin, fechaInicio);
}

// Versión que acepta strings en formato ISO (ej: "2024-01-15")
export function calcularDiasEntreStrings(inicio: string, fin: string): number {
  return differenceInDays(parseISO(fin), parseISO(inicio));
}
