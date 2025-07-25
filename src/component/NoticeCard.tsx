import { Calendar, AlertTriangle, FileText, Radio } from "lucide-react"
import { Badge } from "../components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import type { Notice } from "../type"
import { useLanguage } from "../lib/LanguageProvider"

const typeConfig = {
  info: { icon: FileText },
  warning: { icon: AlertTriangle },
  help: { icon: Radio },
}

const priorityClasses: Record<Notice["priority"], string> = {
  high: "border-red-500 bg-red-50 dark:bg-red-900/20",
  medium: "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20",
  low: "border-blue-500 bg-blue-50 dark:bg-blue-900/20",
}

const priorityBadgeVariant: Record<Notice["priority"], "destructive" | "default" | "secondary"> = {
  high: "destructive",
  medium: "default",
  low: "secondary",
}

export function NoticeCard({
  title,
  description,
  date,
  type,
  priority,
}: Notice) {
  const { t } = useLanguage()
  const Icon = typeConfig[type].icon

  return (
    <Card className={`border-l-4 ${priorityClasses[priority]}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Icon className="h-5 w-5" />
            {title}
          </CardTitle>

          <Badge variant={priorityBadgeVariant[priority]}>
            {t(priority)}
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
