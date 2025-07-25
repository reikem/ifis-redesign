import { FileText } from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { useLanguage } from "../lib/LanguageProvider"

export type ProcedureStatus = "active" | "updated" | "inactive"

export interface ProcedureCardProps {
  title: string
  code: string
  description: string
  date: string
  status?: ProcedureStatus
  onViewPdf?: () => void
}

const statusConfig: Record<
  ProcedureStatus,
  { labelKey: keyof typeof LABELS; badgeClass: string }
> = {
  active:   { labelKey: "valid",    badgeClass: "bg-green-50 text-green-700 border-green-300" },
  updated:  { labelKey: "updated",  badgeClass: "bg-yellow-50 text-yellow-700 border-yellow-300" },
  inactive: { labelKey: "inactive", badgeClass: "bg-slate-200 text-slate-700 border-slate-300" },
}

// Claves por si quieres i18n de status
const LABELS = {
  valid: "valid",
  updated: "updated",
  inactive: "inactive",
  "view.pdf": "view.pdf",
} as const

export function ProcedureCard({
  title,
  code,
  description,
  date,
  status = "active",
  onViewPdf,
}: ProcedureCardProps) {
  const { t } = useLanguage()
  const cfg = statusConfig[status]

  return (
    <Card className="hover:shadow-md transition-shadow border-l-4 border-l-blue-600">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg text-slate-900 dark:text-white">
              {title}
            </CardTitle>
            <CardDescription className="font-mono text-blue-600 dark:text-blue-400 font-semibold">
              {code}
            </CardDescription>
          </div>

          <Badge variant="outline" className={cfg.badgeClass}>
            {t(LABELS[cfg.labelKey])}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-500">{date}</span>

          <Button
            variant="outline"
            size="sm"
            className="text-xs bg-transparent"
            onClick={onViewPdf}
          >
            <FileText className="h-3 w-3 mr-1" />
            {t(LABELS["view.pdf"])}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
