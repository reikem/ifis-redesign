import type { Procedure, Airport, Notice, WeatherReport } from "../type/index.ts"

export const procedures: Procedure[] = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  title: `Operación ${["VFR SCDA", "SCIR", "SCVL", "SCEL", "SCIE", "SCSE", "SCFA", "SCIP"][i % 8]}`,
  code: `DAP 11 ${101 + i}`,
  description: `Procedimientos aplicables para operaciones ${["VFR", "IFR", "SVFR"][i % 3]} en aeródromo`,
  date: `${String(Math.floor(Math.random() * 28) + 1).padStart(2, "0")}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, "0")}-2023`,
  status: ["active", "updated", "active"][i % 3] as "active" | "updated" | "inactive",
}))

export const airports: Airport[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: [
    "Santiago - Arturo Merino Benítez",
    "Valparaíso - Rodelillo",
    "Concepción - Carriel Sur",
    "La Serena - La Florida",
    "Antofagasta - Andrés Sabella",
    "Iquique - Diego Aracena",
    "Temuco - Maquehue",
    "Puerto Montt - El Tepual",
  ][i % 8],
  code: ["SCEL", "SCVP", "SCIE", "SCSE", "SCFA", "SCDA", "SCTC", "SCTE"][i % 8],
  type: ["international", "national", "regional"][i % 3] as Airport["type"],
  elevation: `${Math.floor(Math.random() * 1000) + 50}m`,
  runways: String(Math.floor(Math.random() * 3) + 1),
  status: "operational",
  image: `/../src/assets/airports/${["scl.webp", "vp.webp", "ie.webp", "se.webp", "fa.webp", "da.webp", "tc.webp", "te.webp"][i % 8]}`,
  details: {
    coordinates: `${Math.floor(Math.random() * 90)}°S ${Math.floor(Math.random() * 180)}°W`,
    frequency: `${118 + Math.random() * 18}.${Math.floor(Math.random() * 100)}`,
    services: ["ATC", "AFIS", "Combustible", "Mantenimiento"].slice(0, Math.floor(Math.random() * 4) + 1),
    operatingHours: "24/7",
    category: ["CAT I", "CAT II", "CAT III"][Math.floor(Math.random() * 3)],
  },
}))

export const notices: Notice[] = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  title: [
    "Trámites de Fiscalización",
    "Tiempo de presentación de Plan de vuelo",
    "Mesa ayuda IFIS",
    "Restricción temporal de vuelos",
    "Actualización de procedimientos",
    "Mantenimiento de sistemas",
  ][i % 6],
  description: `Descripción detallada del aviso número ${i + 1}. Información importante para operadores y pilotos.`,
  date: `${String(Math.floor(Math.random() * 28) + 1).padStart(2, "0")}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, "0")}-2023`,
  type: ["info", "warning", "help"][i % 3] as Notice["type"],
  priority: ["high", "medium", "low"][i % 3] as Notice["priority"],
}))

export const weatherReports: WeatherReport[] = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  title: [
    "Monitoreo Ceniza Volcánica",
    "Actividad de Drones",
    "Condiciones Meteorológicas Adversas",
    "Vientos Fuertes en Región",
    "Visibilidad Reducida",
  ][i % 5],
  description: `Reporte meteorológico ${i + 1} con información actualizada sobre condiciones atmosféricas.`,
  date: `${String(Math.floor(Math.random() * 28) + 1).padStart(2, "0")}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, "0")}-2023`,
  severity: ["high", "medium", "low"][i % 3] as WeatherReport["severity"],
  region: ["north", "center", "south", "austral"][i % 4] as WeatherReport["region"],
}))
