import {  useEffect, useState } from "react";
import  {Slides} from "../data/slides";
import { Button } from "../components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../lib/LanguageProvider";


export function HeroCarrusel(){
    const [currentSlide, setCurrentSlide] = useState(0);
    const { t } = useLanguage()

    useEffect(() => {
        const timer = setInterval(()=>{
            setCurrentSlide((prev) => {
                return (prev + 1) % Slides.length;
            });
        },5000)
        return () => clearInterval(timer);
    }  , []);

    const nextSlide=()=>{
        setCurrentSlide((prev) => {
            return (prev + 1) % Slides.length;
        });
    }
    const prevSlide=()=>{
        setCurrentSlide((prev) => {
            return (prev - 1 + Slides.length) % Slides.length;
        });
    }
    return(
        <section className="relative bg-slate-900 text-white overflow-hidden h-[600px]">
        {/* Slides */}
        {Slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 z-0">
              <img
                src={slide.image || "/placeholder.svg"}
                alt={t(slide.titleKey)}
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-slate-900/60" />
            </div>
  
            <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
              <div className="max-w-4xl">
                <h2 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">{t(slide.titleKey)}</h2>
                <p className="text-2xl text-slate-200 mb-4 animate-fade-in-delay">{t(slide.subtitleKey)}</p>
                <p className="text-lg text-slate-300 mb-8 max-w-2xl animate-fade-in-delay-2">{t(slide.descriptionKey)}</p>
  
                <div className="flex gap-4 animate-fade-in-delay-3">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    {t("explore.services")}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                  >
                    {t("documentation")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
  
       
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
  
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
  
    
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {Slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
  
      
        <div className="absolute bottom-6 right-6 z-20 bg-black/30 px-3 py-1 rounded-full text-sm">
          {currentSlide + 1} / {Slides.length}
        </div>
      </section>
    )
}