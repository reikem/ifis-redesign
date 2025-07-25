export type Procedure = {
    id: number
    title: string
    code: string
    description: string
    date: string
    status: "active" | "updated" | "inactive"
  }
  
  export type Airport = {
    id: number
    name: string
    code: string
    type: "international" | "national" | "regional"
    elevation: string
    runways: string
    status: "operational" | "closed"
    image: string
    details: {
      coordinates: string
      frequency: string
      services: string[]
      operatingHours: string
      category: string
    }
  }
  
  export type Notice = {
    id: number
    title: string
    description: string
    date: string
    type: "info" | "warning" | "help"
    priority: "high" | "medium" | "low"
  }
  
  export type WeatherReport = {
    id: number
    title: string
    description: string
    date: string
    severity: "high" | "medium" | "low"
    region: "north" | "center" | "south" | "austral"
  }
  