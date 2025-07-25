import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../components/ui/button"
import { useLanguage } from "../lib/LanguageProvider"


type Page = number | "..."

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  siblingCount?: number
  className?: string
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 2,
  className = "",
}: PaginationProps) {
  const { t } = useLanguage()

  if (totalPages <= 1) return null

  const getVisiblePages = (): Page[] => {
    const range: number[] = []
    const rangeWithDots: Page[] = []

    const start = Math.max(2, currentPage - siblingCount)
    const end = Math.min(totalPages - 1, currentPage + siblingCount)

    for (let i = start; i <= end; i++) range.push(i)

    if (start > 2) {
      rangeWithDots.push(1, "...")
    } else {
      rangeWithDots.push(1)
    }

    rangeWithDots.push(...range)

    if (end < totalPages - 1) {
      rangeWithDots.push("...", totalPages)
    } else {
      rangeWithDots.push(totalPages)
    }

    return rangeWithDots
  }

  const pages = getVisiblePages()

  const goTo = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return
    onPageChange(page)
  }

  return (
    <nav
      className={`flex items-center justify-center mt-8 ${className}`}
      role="navigation"
      aria-label="pagination"
    >
      {/* Mobile: compacto */}
      <div className="flex w-full items-center justify-between sm:hidden px-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => goTo(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-transparent"
          aria-label={t("Anterior") ?? "Anterior"}
        >
          <ChevronLeft className="h-4 w-4" />
          {t("Anterior") ?? "Anterior"}
        </Button>

        <span className="text-sm text-slate-600 dark:text-slate-300">
          {currentPage} / {totalPages}
        </span>

        <Button
          variant="outline"
          size="sm"
          onClick={() => goTo(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-transparent"
          aria-label={t("Siguiente") ?? "Siguiente"}
        >
          {t("Siguiente") ?? "Siguiente"}
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Desktop/Tablet: completa */}
      <div className="hidden sm:flex items-center justify-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => goTo(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-transparent"
          aria-label={t("Anterior") ?? "Anterior"}
        >
          <ChevronLeft className="h-4 w-4" />
          {t("Anterior") ?? "Anterior"}
        </Button>

        <div className="flex items-center space-x-1" aria-hidden>
          {pages.map((page, idx) =>
            page === "..." ? (
              <span key={`dots-${idx}`} className="px-3 py-2 text-slate-500 select-none">
                …
              </span>
            ) : (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => goTo(page)}
                className={currentPage === page ? "bg-blue-600 hover:bg-blue-700" : "bg-transparent"}
                aria-current={currentPage === page ? "page" : undefined}
              >
                {page}
              </Button>
            )
          )}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => goTo(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-transparent"
          aria-label={t("Siguiente") ?? "Siguiente"}
        >
          {t("Siguiente") ?? "Siguiente"}
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </nav>
  )
}