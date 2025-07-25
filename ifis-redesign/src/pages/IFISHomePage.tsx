import { useEffect, useState } from "react"
import { Search, AlertTriangle } from "lucide-react"
import { useLanguage } from "../lib/LanguageProvider"
import { LoadingVideo } from "../component/LoadingVideo"
import { LanguageSelector } from "../component/LanguageSelector"
import { ThemeToggle } from "../lib/ThemeToggle"
import { HeroCarrusel } from "../component/HeroCarrusel"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Alert, AlertDescription } from "../components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { airports, notices, procedures, weatherReports } from "../data/mock"
import { Pagination } from "../component/Pagination"
import { AirportCard } from "../component/AirportCard"
import { NoticeCard } from "../component/NoticeCard"
import { WeatherCard } from "../component/WeatherCard"
import { ProcedureCard } from "../component/ProcedureCard"
import Logo from "../assets/logo.svg"



const ITEMS_PER_PAGE = 6

export default function IFISHomePage() {
    const { t } = useLanguage()

    const [isLoading, setIsLoading] = useState(true)
    const [searchQuery, setSearchQuery] = useState("")
    const [proceduresPage, setProceduresPage] = useState(1)
    const [airportsPage, setAirportsPage] = useState(1)
    const [noticesPage, setNoticesPage] = useState(1)
    const [weatherPage, setWeatherPage] = useState(1)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 3000)
        return () => clearTimeout(timer)
    }, [])

    if (isLoading) return <LoadingVideo />

    const getPaginatedItems = <T,>(items: T[], page: number) => {
        const startIndex = (page - 1) * ITEMS_PER_PAGE
        return items.slice(startIndex, startIndex + ITEMS_PER_PAGE)
    }
    const getTotalPages = (items: any[]) => Math.ceil(items.length / ITEMS_PER_PAGE)

    return (
        <div className="min-h-screen w-screen overflow-x-hidden bg-slate-50 dark:bg-slate-900">
  
            <div className="bg-red-600 text-white py-2 px-4 text-center text-sm font-medium">
                {t("disclaimer.warning")}
            </div>


            <header className="w-full bg-white dark:bg-slate-800 border-b-2 border-blue-600 shadow-sm">
                <div className="w-full px-4 py-4">
                    <div className="flex items-center justify-between">
                       
                        <div className="flex items-center space-x-4">
                            <img src={Logo} alt="Escudo de Chile" className="h-16 w-16" />
                            <div>
                                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">IFIS</h1>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Internet Flight Information Service</p>
                                <p className="text-xs text-slate-500 dark:text-slate-500">{t("dgac.full.name")}</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="text-right hidden md:block">
                                <p className="text-sm font-medium text-slate-900 dark:text-white">{t("system.operational")}</p>
                                <p className="text-xs text-green-600 dark:text-green-400 flex items-center justify-end">
                                    <span
                                        aria-hidden="true"
                                        className="inline-block h-2 w-2 bg-green-500 rounded-full mr-2 animate-pulse"
                                    />
                                    <span>{t("online.24.7")}</span>
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <LanguageSelector />
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <HeroCarrusel />

            <section className="w-full py-8 bg-white dark:bg-slate-800 border-b">
                <div className="w-full px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                            {t("consult.aeronautical.info")}
                        </h3>
                        <div className="flex gap-2 max-w-2xl mx-auto">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
                                <Input
                                    type="text"
                                    placeholder={t("enter.icao.code")}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                            <Button className="bg-blue-600 hover:bg-blue-700">{t("consult")}</Button>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-6 bg-yellow-50 dark:bg-yellow-900/20 border-b">
                <div className="w-full px-4">
                    <Alert className="border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20">
                        <AlertTriangle className="h-4 w-4 text-yellow-600" />
                        <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                            <strong>{t("notam.active")}</strong> {t("volcanic.restriction")}
                        </AlertDescription>
                    </Alert>
                </div>
            </section>

            <section className="py-12">
                <div className="w-full px-4">
                    <Tabs defaultValue="procedures" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-white dark:bg-slate-800">
                            <TabsTrigger value="procedures" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                                {t("procedures")}
                            </TabsTrigger>
                            <TabsTrigger value="airports" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                                {t("airports")}
                            </TabsTrigger>
                            <TabsTrigger value="notices" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                                {t("notam.notices")}
                            </TabsTrigger>
                            <TabsTrigger value="weather" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                                {t("meteorology")}
                            </TabsTrigger>
                        </TabsList>


                        <TabsContent value="procedures" className="space-y-6">
                            <HeaderCount
                                title={t("operation.procedures")}
                                totalLabel={`${t("total")} ${procedures.length} ${t("total.procedures")}`}
                            />

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {getPaginatedItems(procedures, proceduresPage).map((p) => (
                                    <ProcedureCard key={p.id} {...p} />
                                ))}
                            </div>

                            <Pagination
                                currentPage={proceduresPage}
                                totalPages={getTotalPages(procedures)}
                                onPageChange={setProceduresPage}
                            />
                        </TabsContent>


                        <TabsContent value="airports" className="space-y-6">
                            <HeaderCount
                                title={t("airports.heliports")}
                                totalLabel={`${t("total")} ${airports.length} ${t("airports.count")}`}
                            />

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {getPaginatedItems(airports, airportsPage).map((a) => (
                                    <AirportCard key={a.id} {...a} />
                                ))}
                            </div>

                            <Pagination
                                currentPage={airportsPage}
                                totalPages={getTotalPages(airports)}
                                onPageChange={setAirportsPage}
                            />
                        </TabsContent>


                        <TabsContent value="notices" className="space-y-6">
                            <HeaderCount
                                title={t("notices.notifications")}
                                totalLabel={`${t("total")} ${notices.length} ${t("notices.count")}`}
                            />

                            <div className="grid md:grid-cols-2 gap-6">
                                {getPaginatedItems(notices, noticesPage).map((n) => (
                                    <NoticeCard key={n.id} {...n} />
                                ))}
                            </div>

                            <Pagination
                                currentPage={noticesPage}
                                totalPages={getTotalPages(notices)}
                                onPageChange={setNoticesPage}
                            />
                        </TabsContent>


                        <TabsContent value="weather" className="space-y-6">
                            <HeaderCount
                                title={t("meteorological.info")}
                                totalLabel={`${t("total")} ${weatherReports.length} ${t("reports.count")}`}
                            />

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {getPaginatedItems(weatherReports, weatherPage).map((r) => (
                                    <WeatherCard key={r.id} {...r} />
                                ))}
                            </div>

                            <Pagination
                                currentPage={weatherPage}
                                totalPages={getTotalPages(weatherReports)}
                                onPageChange={setWeatherPage}
                            />
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            <Footer />
        </div>
    )
}

function HeaderCount({ title, totalLabel }: { title: string; totalLabel: string }) {
    return (
        <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">{totalLabel}</p>
        </div>
    )
}

function Footer() {
    const { t } = useLanguage()
    return (
        <footer className="w-full bg-slate-800 text-white py-8 border-t-4 border-blue-600">
            <div className="w-full px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <img src={Logo} alt="Escudo de Chile" className="h-10 w-10" />
                            <div>
                                <h4 className="font-bold">{t("dgac.short")}</h4>
                                <p className="text-sm text-slate-300">{t("dgac.full.name")}</p>
                            </div>
                        </div>
                        <p className="text-sm text-slate-400">{t("dgac.description")}</p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">{t("services")}</h4>
                        <ul className="space-y-2 text-sm text-slate-300">
                            <li>{t("operational.procedures")}</li>
                            <li>{t("airport.information")}</li>
                            <li>{t("notam.notices.footer")}</li>
                            <li>{t("aeronautical.meteorology")}</li>
                            <li>{t("navigation.charts")}</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">{t("official.contact")}</h4>
                        <div className="space-y-2 text-sm text-slate-300">
                            <p>📧 ifis@dgac.gob.cl</p>
                            <p>{t("ifis.help.desk")}</p>
                            <p>{t("dgac.address")}</p>
                            <p>{t("santiago.chile")}</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-700 mt-8 pt-6 text-center">
                    <p className="text-sm text-slate-400">{t("rights.reserved")}</p>
                    <p className="text-xs text-red-400 mt-2">{t("important.disclaimer")}</p>
                </div>
            </div>
        </footer>
    )
}
