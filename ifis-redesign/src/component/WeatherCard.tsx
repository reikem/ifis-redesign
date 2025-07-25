import { Calendar } from "lucide-react"
import { Badge } from "../components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import type { WeatherReport } from "../type";
import { useLanguage } from "../lib/LanguageProvider";

const severityConfig: Record<
  WeatherReport["severity"],
  { color: string; badge: "destructive" | "default" | "secondary" }
> = {
  high: { color: "border-red-500 bg-red-50 dark:bg-red-900/20", badge: "destructive" },
  medium: { color: "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20", badge: "default" },
  low: { color: "border-green-500 bg-green-50 dark:bg-green-900/20", badge: "secondary" },
}

export function WeatherCard({
  title,
  description,
  date,
  severity,
  region,
}: WeatherReport) {
  const { t } = useLanguage()

  return (
    <Card className={`border-l-4 ${severityConfig[severity].color}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Badge variant={severityConfig[severity].badge}>
            {t(region)}
          </Badge>
        </div>

        <CardDescription className="text-xs flex items-center gap-2">
          <Calendar className="h-3 w-3" />
          {date}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-slate-700 dark:text-slate-300">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}
