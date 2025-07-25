import {
    Plane,
    MapPin,
    Navigation,
    Radio,
    Shield,
    Eye,
    Fuel,
    Route as Runway,
  } from "lucide-react"
  

  import type { Airport } from "../type/index.ts"
  
  import { Badge } from "../components/ui/badge.tsx"
  import { Button } from "../components/ui/button.tsx"
  import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogDescription,
  } from "../components/ui/dialog.tsx"
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "../components/ui/card.tsx"
import { useLanguage } from "../lib/LanguageProvider.tsx"
  
  export function AirportCard({
    name,
    code,
    type,
    elevation,
    runways,
    status,
    image,
    details,
  }: Airport) {
    const { t } = useLanguage()
  
    return (
      <Card className="hover:shadow-md transition-shadow overflow-hidden">
        <div className="aspect-video relative">
          <img
            src={image || "https://aipchile.dgac.gob.cl/uploads/camara/ARICA/Norte/untitled1.png"}
            alt={`Aeródromo ${name}`}
            className="w-full h-full object-cover"
          />
          {status === "operational" && (
            <div className="absolute top-2 right-2">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300">
                {t("operational")}
              </Badge>
            </div>
          )}
        </div>
  
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-slate-900 dark:text-white">
            {name}
          </CardTitle>
          <CardDescription className="font-mono text-xl font-bold text-blue-600 dark:text-blue-400">
            {code}
          </CardDescription>
        </CardHeader>
  
        <CardContent>
          <div className="space-y-2 text-sm mb-4">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
              <Plane className="h-4 w-4" />
              <span>
                {t("type")} {t(type)}
              </span>
            </div>
  
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
            <MapPin className="h-4 w-4" />
              <span>
                {t("elevation")} {elevation}
              </span>
            </div>
  
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
              <Navigation className="h-4 w-4" />
              <span>
                {t("runways")} {runways}
              </span>
            </div>
          </div>
  
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                <Eye className="h-4 w-4 mr-2" />
                {t("view.more.info")}
              </Button>
            </DialogTrigger>
  
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Plane className="h-5 w-5 text-blue-600" />
                  {name} ({code})
                </DialogTitle>
                <DialogDescription>{t("detailed.info")}</DialogDescription>
              </DialogHeader>
  
              <div className="space-y-6">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Aeródromo ${name}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
  
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      {t("general.info")}
                    </h4>
  
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-slate-500" />
                        <span>
                          {t("coordinates")} {details.coordinates}
                        </span>
                      </div>
  
                      <div className="flex items-center gap-2">
                        <Radio className="h-4 w-4 text-slate-500" />
                        <span>
                          {t("frequency")} {details.frequency} MHz
                        </span>
                      </div>
  
                      <div className="flex items-center gap-2">
                        <Navigation className="h-4 w-4 text-slate-500" />
                        <span>
                          {t("schedule")} {details.operatingHours}
                        </span>
                      </div>
  
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-slate-500" />
                        <span>
                          {t("category")} {details.category}
                        </span>
                      </div>
                    </div>
                  </div>
  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      {t("available.services")}
                    </h4>
  
                    <div className="flex flex-wrap gap-2">
                      {details.services.map((service, idx) => (
                        <Badge key={idx} variant="secondary">
                          {service}
                        </Badge>
                      ))}
                    </div>
  
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Runway className="h-4 w-4 text-slate-500" />
                        <span>
                          {t("runways")} {runways}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Fuel className="h-4 w-4 text-slate-500" />
                        <span>{t("fuel.available")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    )
  }
  