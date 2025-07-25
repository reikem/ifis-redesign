export type LangCode = "es" | "en" | "pt" | "fr" | "zh" | "ja"

type Dict = Record<string, string>
type Translations = Record<LangCode, Dict>
export const translations:Translations = {
    es: {
     
      "system.operational": "Sistema Operacional",
      "online.24.7": "En línea 24/7",
      "dgac.full.name": "Dirección General de Aeronáutica Civil - Chile",
  
      "disclaimer.warning":
        "⚠️ AVISO: Esta NO es la página oficial de IFIS-DGAC. Es una recreación para proyecto personal y fines educativos únicamente.",
  
    
      "flight.information.system": "Sistema de Información de Vuelo",
      "official.access": "Acceso oficial a procedimientos operacionales y servicios de navegación aérea",
      "updated.24.7": "Información actualizada 24/7 para operadores y pilotos en territorio chileno",
      "explore.services": "Explorar Servicios",
      documentation: "Documentación",
  
    
      "consult.aeronautical.info": "Consultar Información Aeronáutica",
      "enter.icao.code": "Ingrese código OACI (ej: SCEL, SCVP, SCIE)",
      consult: "Consultar",
  
   
      "notam.active": "NOTAM Activo:",
      "volcanic.restriction":
        "Restricción temporal de vuelos en zona volcánica. Consulte información actualizada antes de planificar operaciones.",
  
     
      procedures: "Procedimientos",
      airports: "Aeródromos",
      "notam.notices": "NOTAM/Avisos",
      meteorology: "Meteorología",
  
    
      "operation.procedures": "Procedimientos de Operación",
      "total.procedures": "procedimientos",
      total: "Total:",
      valid: "Vigente",
      "view.pdf": "Ver PDF",
  
      // Airports
      "airports.heliports": "Aeródromos y Helipuertos",
      "airports.count": "aeródromos",
      operational: "Operacional",
      type: "Tipo:",
      elevation: "Elevación:",
      runways: "Pistas:",
      "view.more.info": "Ver Más Información",
      "detailed.info": "Información detallada del aeródromo",
      "general.info": "Información General",
      coordinates: "Coordenadas:",
      frequency: "Frecuencia:",
      schedule: "Horario:",
      category: "Categoría:",
      "available.services": "Servicios Disponibles",
      "fuel.available": "Combustible: Disponible",
  
    
      "notices.notifications": "Avisos y Notificaciones",
      "notices.count": "avisos",
      high: "Alta",
      medium: "Media",
      low: "Baja",
  
    
      "meteorological.info": "Información Meteorológica",
      "reports.count": "reportes",
  
     
      "dgac.short": "DGAC",
      "dgac.description":
        "Organismo técnico del Estado encargado de la regulación, fiscalización y control de las actividades aeronáuticas civiles en Chile.",
      services: "Servicios",
      "operational.procedures": "• Procedimientos Operacionales",
      "airport.information": "• Información de Aeródromos",
      "notam.notices.footer": "• NOTAM y Avisos",
      "aeronautical.meteorology": "• Meteorología Aeronáutica",
      "navigation.charts": "• Cartas de Navegación",
      "official.contact": "Contacto Oficial",
      "ifis.help.desk": "📞 Mesa de Ayuda IFIS",
      "dgac.address": "🏢 Dirección General de Aeronáutica Civil",
      "santiago.chile": "📍 Santiago, Chile",
      "rights.reserved": "© 2025 DGAC - Dirección General de Aeronáutica Civil de Chile. Todos los derechos reservados.",
      "important.disclaimer":
        "⚠️ IMPORTANTE: Esta es una recreación no oficial con fines educativos y de demostración únicamente.",
  
    
      light: "Claro",
      dark: "Oscuro",
      system: "Sistema",
  
     
      international: "Internacional",
      national: "Nacional",
      regional: "Regional",
  
     
      north: "Norte",
      center: "Centro",
      south: "Sur",
      austral: "Austral",
    },
    en: {
      
      "system.operational": "Operational System",
      "online.24.7": "Online 24/7",
      "dgac.full.name": "General Directorate of Civil Aviation - Chile",
  
    
      "disclaimer.warning":
        "⚠️ WARNING: This is NOT the official IFIS-DGAC page. It is a recreation for personal project and educational purposes only.",
  
      
      "flight.information.system": "Flight Information System",
      "official.access": "Official access to operational procedures and air navigation services",
      "updated.24.7": "24/7 updated information for operators and pilots in Chilean territory",
      "explore.services": "Explore Services",
      documentation: "Documentation",
  
   
      "consult.aeronautical.info": "Consult Aeronautical Information",
      "enter.icao.code": "Enter ICAO code (e.g.: SCEL, SCVP, SCIE)",
      consult: "Consult",
  
     
      "notam.active": "Active NOTAM:",
      "volcanic.restriction":
        "Temporary flight restriction in volcanic zone. Check updated information before planning operations.",
  
      
      procedures: "Procedures",
      airports: "Airports",
      "notam.notices": "NOTAM/Notices",
      meteorology: "Meteorology",
  
      // Procedures
      "operation.procedures": "Operation Procedures",
      "total.procedures": "procedures",
      total: "Total:",
      valid: "Valid",
      "view.pdf": "View PDF",
  
      // Airports
      "airports.heliports": "Airports and Heliports",
      "airports.count": "airports",
      operational: "Operational",
      type: "Type:",
      elevation: "Elevation:",
      runways: "Runways:",
      "view.more.info": "View More Information",
      "detailed.info": "Detailed airport information",
      "general.info": "General Information",
      coordinates: "Coordinates:",
      frequency: "Frequency:",
      schedule: "Schedule:",
      category: "Category:",
      "available.services": "Available Services",
      "fuel.available": "Fuel: Available",
  
      // Notices
      "notices.notifications": "Notices and Notifications",
      "notices.count": "notices",
      high: "High",
      medium: "Medium",
      low: "Low",
  
      // Weather
      "meteorological.info": "Meteorological Information",
      "reports.count": "reports",
  
      // Footer
      "dgac.short": "DGAC",
      "dgac.description":
        "Technical state body responsible for regulation, supervision and control of civil aviation activities in Chile.",
      services: "Services",
      "operational.procedures": "• Operational Procedures",
      "airport.information": "• Airport Information",
      "notam.notices.footer": "• NOTAM and Notices",
      "aeronautical.meteorology": "• Aeronautical Meteorology",
      "navigation.charts": "• Navigation Charts",
      "official.contact": "Official Contact",
      "ifis.help.desk": "📞 IFIS Help Desk",
      "dgac.address": "🏢 General Directorate of Civil Aviation",
      "santiago.chile": "📍 Santiago, Chile",
      "rights.reserved": "© 2025 DGAC - General Directorate of Civil Aviation of Chile. All rights reserved.",
      "important.disclaimer":
        "⚠️ IMPORTANT: This is an unofficial recreation for educational and demonstration purposes only.",
  
      // Theme
      light: "Light",
      dark: "Dark",
      system: "System",
  
      // Airport types
      international: "International",
      national: "National",
      regional: "Regional",
  
      // Regions
      north: "North",
      center: "Center",
      south: "South",
      austral: "Austral",
    },
    pt: {
      
      "system.operational": "Sistema Operacional",
      "online.24.7": "Online 24/7",
      "dgac.full.name": "Direção Geral de Aviação Civil - Chile",
  
    
      "disclaimer.warning":
        "⚠️ AVISO: Esta NÃO é a página oficial do IFIS-DGAC. É uma recriação para projeto pessoal e fins educacionais apenas.",
  
     
      "flight.information.system": "Sistema de Informação de Voo",
      "official.access": "Acesso oficial a procedimentos operacionais e serviços de navegação aérea",
      "updated.24.7": "Informações atualizadas 24/7 para operadores e pilotos em território chileno",
      "explore.services": "Explorar Serviços",
      documentation: "Documentação",
  
     
      "consult.aeronautical.info": "Consultar Informação Aeronáutica",
      "enter.icao.code": "Digite código ICAO (ex: SCEL, SCVP, SCIE)",
      consult: "Consultar",
  
    
      "notam.active": "NOTAM Ativo:",
      "volcanic.restriction":
        "Restrição temporária de voos em zona vulcânica. Consulte informações atualizadas antes de planejar operações.",
  
    
      procedures: "Procedimentos",
      airports: "Aeroportos",
      "notam.notices": "NOTAM/Avisos",
      meteorology: "Meteorologia",
  
     
      "operation.procedures": "Procedimentos de Operação",
      "total.procedures": "procedimentos",
      total: "Total:",
      valid: "Válido",
      "view.pdf": "Ver PDF",
  
     
      "airports.heliports": "Aeroportos e Heliportos",
      "airports.count": "aeroportos",
      operational: "Operacional",
      type: "Tipo:",
      elevation: "Elevação:",
      runways: "Pistas:",
      "view.more.info": "Ver Mais Informações",
      "detailed.info": "Informação detalhada do aeroporto",
      "general.info": "Informação Geral",
      coordinates: "Coordenadas:",
      frequency: "Frequência:",
      schedule: "Horário:",
      category: "Categoria:",
      "available.services": "Serviços Disponíveis",
      "fuel.available": "Combustível: Disponível",
  
    
      "notices.notifications": "Avisos e Notificações",
      "notices.count": "avisos",
      high: "Alta",
      medium: "Média",
      low: "Baixa",
  
     
      "meteorological.info": "Informação Meteorológica",
      "reports.count": "relatórios",
  
      
      "dgac.short": "DGAC",
      "dgac.description":
        "Órgão técnico do Estado responsável pela regulamentação, fiscalização e controle das atividades de aviação civil no Chile.",
      services: "Serviços",
      "operational.procedures": "• Procedimentos Operacionais",
      "airport.information": "• Informação de Aeroportos",
      "notam.notices.footer": "• NOTAM e Avisos",
      "aeronautical.meteorology": "• Meteorologia Aeronáutica",
      "navigation.charts": "• Cartas de Navegação",
      "official.contact": "Contato Oficial",
      "ifis.help.desk": "📞 Mesa de Ajuda IFIS",
      "dgac.address": "🏢 Direção Geral de Aviação Civil",
      "santiago.chile": "📍 Santiago, Chile",
      "rights.reserved": "© 2025 DGAC - Direção Geral de Aviação Civil do Chile. Todos os direitos reservados.",
      "important.disclaimer":
        "⚠️ IMPORTANTE: Esta é uma recriação não oficial para fins educacionais e de demonstração apenas.",
  
    
      light: "Claro",
      dark: "Escuro",
      system: "Sistema",
  
    
      international: "Internacional",
      national: "Nacional",
      regional: "Regional",
  
     
      north: "Norte",
      center: "Centro",
      south: "Sul",
      austral: "Austral",
    },
    fr: {
      
      "system.operational": "Système Opérationnel",
      "online.24.7": "En ligne 24/7",
      "dgac.full.name": "Direction Générale de l'Aviation Civile - Chili",
  
     
      "disclaimer.warning":
        "⚠️ AVIS: Ceci N'EST PAS la page officielle d'IFIS-DGAC. C'est une recréation pour projet personnel et à des fins éducatives uniquement.",
  
     
      "flight.information.system": "Système d'Information de Vol",
      "official.access": "Accès officiel aux procédures opérationnelles et services de navigation aérienne",
      "updated.24.7": "Informations mises à jour 24/7 pour les opérateurs et pilotes en territoire chilien",
      "explore.services": "Explorer les Services",
      documentation: "Documentation",
  
    
      "consult.aeronautical.info": "Consulter l'Information Aéronautique",
      "enter.icao.code": "Entrez le code OACI (ex: SCEL, SCVP, SCIE)",
      consult: "Consulter",
  
     
      "notam.active": "NOTAM Actif:",
      "volcanic.restriction":
        "Restriction temporaire de vols en zone volcanique. Consultez les informations mises à jour avant de planifier les opérations.",
  
      
      procedures: "Procédures",
      airports: "Aéroports",
      "notam.notices": "NOTAM/Avis",
      meteorology: "Météorologie",
  
     
      "operation.procedures": "Procédures d'Opération",
      "total.procedures": "procédures",
      total: "Total:",
      valid: "Valide",
      "view.pdf": "Voir PDF",
  
     
      "airports.heliports": "Aéroports et Héliports",
      "airports.count": "aéroports",
      operational: "Opérationnel",
      type: "Type:",
      elevation: "Élévation:",
      runways: "Pistes:",
      "view.more.info": "Voir Plus d'Informations",
      "detailed.info": "Information détaillée de l'aéroport",
      "general.info": "Information Générale",
      coordinates: "Coordonnées:",
      frequency: "Fréquence:",
      schedule: "Horaire:",
      category: "Catégorie:",
      "available.services": "Services Disponibles",
      "fuel.available": "Carburant: Disponible",
  
     
      "notices.notifications": "Avis et Notifications",
      "notices.count": "avis",
      high: "Haute",
      medium: "Moyenne",
      low: "Basse",
  
     
      "meteorological.info": "Information Météorologique",
      "reports.count": "rapports",
  
     
      "dgac.short": "DGAC",
      "dgac.description":
        "Organisme technique de l'État chargé de la réglementation, supervision et contrôle des activités d'aviation civile au Chili.",
      services: "Services",
      "operational.procedures": "• Procédures Opérationnelles",
      "airport.information": "• Information d'Aéroports",
      "notam.notices.footer": "• NOTAM et Avis",
      "aeronautical.meteorology": "• Météorologie Aéronautique",
      "navigation.charts": "• Cartes de Navigation",
      "official.contact": "Contact Officiel",
      "ifis.help.desk": "📞 Bureau d'Aide IFIS",
      "dgac.address": "🏢 Direction Générale de l'Aviation Civile",
      "santiago.chile": "📍 Santiago, Chili",
      "rights.reserved": "© 2025 DGAC - Direction Générale de l'Aviation Civile du Chili. Tous droits réservés.",
      "important.disclaimer":
        "⚠️ IMPORTANT: Ceci est une recréation non officielle à des fins éducatives et de démonstration uniquement.",
  
     
      light: "Clair",
      dark: "Sombre",
      system: "Système",
  
     
      international: "International",
      national: "National",
      regional: "Régional",
  
    
      north: "Nord",
      center: "Centre",
      south: "Sud",
      austral: "Austral",
    },
    zh: {
      
      "system.operational": "系统运行中",
      "online.24.7": "24/7在线",
      "dgac.full.name": "智利民航总局",
  
     
      "disclaimer.warning": "⚠️ 警告：这不是IFIS-DGAC的官方页面。这是一个个人项目的重建，仅用于教育目的。",
  
     
      "flight.information.system": "飞行信息系统",
      "official.access": "官方访问操作程序和空中导航服务",
      "updated.24.7": "为智利境内的运营商和飞行员提供24/7更新信息",
      "explore.services": "探索服务",
      documentation: "文档",
  
     
      "consult.aeronautical.info": "查询航空信息",
      "enter.icao.code": "输入ICAO代码（例如：SCEL, SCVP, SCIE）",
      consult: "查询",
  
    
      "notam.active": "活跃NOTAM：",
      "volcanic.restriction": "火山区域临时飞行限制。在计划操作前请查看更新信息。",
  
     
      procedures: "程序",
      airports: "机场",
      "notam.notices": "NOTAM/通知",
      meteorology: "气象",
  
     
      "operation.procedures": "操作程序",
      "total.procedures": "程序",
      total: "总计：",
      valid: "有效",
      "view.pdf": "查看PDF",
  
     
      "airports.heliports": "机场和直升机场",
      "airports.count": "机场",
      operational: "运营中",
      type: "类型：",
      elevation: "海拔：",
      runways: "跑道：",
      "view.more.info": "查看更多信息",
      "detailed.info": "机场详细信息",
      "general.info": "基本信息",
      coordinates: "坐标：",
      frequency: "频率：",
      schedule: "时间表：",
      category: "类别：",
      "available.services": "可用服务",
      "fuel.available": "燃料：可用",
  
      
      "notices.notifications": "通知和公告",
      "notices.count": "通知",
      high: "高",
      medium: "中",
      low: "低",
  
    
      "meteorological.info": "气象信息",
      "reports.count": "报告",
  
     
      "dgac.short": "DGAC",
      "dgac.description": "负责智利民航活动监管、监督和控制的国家技术机构。",
      services: "服务",
      "operational.procedures": "• 操作程序",
      "airport.information": "• 机场信息",
      "notam.notices.footer": "• NOTAM和通知",
      "aeronautical.meteorology": "• 航空气象",
      "navigation.charts": "• 导航图",
      "official.contact": "官方联系",
      "ifis.help.desk": "📞 IFIS帮助台",
      "dgac.address": "🏢 民航总局",
      "santiago.chile": "📍 智利圣地亚哥",
      "rights.reserved": "© 2025 DGAC - 智利民航总局。保留所有权利。",
      "important.disclaimer": "⚠️ 重要：这是一个非官方的重建，仅用于教育和演示目的。",
  
     
      light: "浅色",
      dark: "深色",
      system: "系统",
  
     
      international: "国际",
      national: "国内",
      regional: "地区",
  
     
      north: "北部",
      center: "中部",
      south: "南部",
      austral: "南极",
    },
    ja: {
      
      "system.operational": "システム稼働中",
      "online.24.7": "24時間365日オンライン",
      "dgac.full.name": "チリ民間航空総局",
  
     
      "disclaimer.warning":
        "⚠️ 警告：これはIFIS-DGACの公式ページではありません。個人プロジェクトの再現であり、教育目的のみです。",
  
     
      "flight.information.system": "飛行情報システム",
      "official.access": "運航手順と航空航法サービスへの公式アクセス",
      "updated.24.7": "チリ領土内の運航者とパイロットのための24時間365日更新情報",
      "explore.services": "サービスを探索",
      documentation: "ドキュメント",
  
    
      "consult.aeronautical.info": "航空情報を照会",
      "enter.icao.code": "ICAOコードを入力（例：SCEL, SCVP, SCIE）",
      consult: "照会",
  
   
      "notam.active": "アクティブNOTAM：",
      "volcanic.restriction": "火山地域での一時的な飛行制限。運航計画前に更新情報を確認してください。",
  
    
      procedures: "手順",
      airports: "空港",
      "notam.notices": "NOTAM/通知",
      meteorology: "気象",
  
      "operation.procedures": "運航手順",
      "total.procedures": "手順",
      total: "合計：",
      valid: "有効",
      "view.pdf": "PDFを表示",
  
   
      "airports.heliports": "空港とヘリポート",
      "airports.count": "空港",
      operational: "運用中",
      type: "タイプ：",
      elevation: "標高：",
      runways: "滑走路：",
      "view.more.info": "詳細情報を表示",
      "detailed.info": "空港の詳細情報",
      "general.info": "一般情報",
      coordinates: "座標：",
      frequency: "周波数：",
      schedule: "スケジュール：",
      category: "カテゴリー：",
      "available.services": "利用可能サービス",
      "fuel.available": "燃料：利用可能",
  
    
      "notices.notifications": "通知とお知らせ",
      "notices.count": "通知",
      high: "高",
      medium: "中",
      low: "低",
  
      
      "meteorological.info": "気象情報",
      "reports.count": "レポート",
  
    
      "dgac.short": "DGAC",
      "dgac.description": "チリの民間航空活動の規制、監督、管理を担当する国家技術機関。",
      services: "サービス",
      "operational.procedures": "• 運航手順",
      "airport.information": "• 空港情報",
      "notam.notices.footer": "• NOTAMと通知",
      "aeronautical.meteorology": "• 航空気象",
      "navigation.charts": "• 航法図",
      "official.contact": "公式連絡先",
      "ifis.help.desk": "📞 IFISヘルプデスク",
      "dgac.address": "🏢 民間航空総局",
      "santiago.chile": "📍 チリ、サンティアゴ",
      "rights.reserved": "© 2025 DGAC - チリ民間航空総局。全権利保留。",
      "important.disclaimer": "⚠️ 重要：これは教育およびデモンストレーション目的のみの非公式な再現です。",
  
   
      light: "ライト",
      dark: "ダーク",
      system: "システム",
  
      
      international: "国際",
      national: "国内",
      regional: "地域",
  
     
      north: "北部",
      center: "中部",
      south: "南部",
      austral: "南極",
    },
  }