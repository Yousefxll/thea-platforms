/* AUTO-GENERATED — platform-chaptered scene script. */
export const SCENES = [
 {
  "id": "suite-intro",
  "platform": "suite",
  "kind": "platform",
  "platformIntro": true,
  "side": "center",
  "hold": 0.36,
  "band": 0.95,
  "color": "#38bdf8",
  "formation": {
   "kind": "primitive",
   "shape": "sphere"
  },
  "logo": "brand/thea-logo-dark.svg",
  "stats": [
   {
    "v": "٥",
    "ar": "منصّات",
    "en": "Platforms"
   },
   {
    "v": "+77",
    "ar": "وحدة",
    "en": "Modules"
   },
   {
    "v": "AR·EN",
    "ar": "لغتان",
    "en": "Bilingual"
   }
  ],
  "coming": false,
  "copy": {
   "ar": {
    "kicker": "عائلة ثيا",
    "title": "ثيا",
    "tagline": "منظومة واحدة للمستشفى كامل",
    "body": "ثيا منظومة من المنصات المتكاملة — الصحة وسَم وإمداد وسي فيجن — بتسجيل دخول واحد ومصدر بيانات موحّد، عربية أولاً ومهيأة للقطاع الصحي السعودي.",
    "feats": [
     "ثيا الصحة · السجل الصحي",
     "سَم · الحوكمة",
     "إمداد · سلسلة الإمداد",
     "سي فيجن · الموارد البشرية"
    ]
   },
   "en": {
    "kicker": "The Thea family",
    "title": "Thea",
    "tagline": "One ecosystem for the whole hospital",
    "body": "Thea is a family of integrated platforms — Health, SAM, Imdad and C-Vision — sharing one login and one data spine, Arabic-first and built for Saudi healthcare.",
    "feats": [
     "Thea Health · EHR",
     "SAM · Governance",
     "Imdad · Supply Chain",
     "C-Vision · HR"
    ]
   }
  },
  "intro": true
 },
 {
  "id": "health-intro",
  "platform": "health",
  "kind": "platform",
  "platformIntro": true,
  "side": "center",
  "hold": 0.36,
  "band": 0.95,
  "color": "#22d3ee",
  "formation": {
   "kind": "emoji",
   "char": "🩺"
  },
  "logo": "brand/thea-health.svg",
  "stats": [
   {
    "v": "+50K",
    "ar": "مريض",
    "en": "Patients"
   },
   {
    "v": "+500K",
    "ar": "سجل",
    "en": "Records"
   },
   {
    "v": "+25K",
    "ar": "موعد",
    "en": "Appointments"
   }
  ],
  "coming": false,
  "copy": {
   "ar": {
    "kicker": "منصّة من ثيا",
    "title": "ثيا الصحة",
    "tagline": "منصة واحدة، رعاية شاملة",
    "body": "نظام معلومات المستشفى الذي يغطي رحلة المريض كاملة — العيادات والطوارئ والتنويم والعمليات والمختبرات والأشعة والصيدلية والفوترة.",
    "feats": [
     "السجلات الطبية الإلكترونية",
     "إدارة المرضى",
     "التحليلات السريرية",
     "الفوترة و NPHIES"
    ]
   },
   "en": {
    "kicker": "A Thea platform",
    "title": "Thea Health",
    "tagline": "One Platform, Total Care",
    "body": "The hospital information system covering the full patient journey — clinics, emergency, inpatient, surgery, labs, imaging, pharmacy and billing.",
    "feats": [
     "Electronic Health Records",
     "Patient Management",
     "Clinical Analytics",
     "NPHIES & Billing"
    ]
   }
  }
 },
 {
  "id": "opd-outpatient",
  "group": "Core Clinical Platforms",
  "weight": "hero",
  "side": "left",
  "hold": 0.32,
  "depth": 0.12,
  "color": "#1fd6c5",
  "band": 1.0,
  "formation": {
   "kind": "svg",
   "icon": "stethoscope"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "العيادات الخارجية",
    "tagline": "من الحجز إلى الكشف",
    "body": "حجوزات إلكترونية ومراجعون بلا موعد تتدفق إلى محطة التمريض للعلامات الحيوية والفرز، وقائمة عمل للطبيب مع توثيق الزيارة، وطابور حي وإحصاء يومي.",
    "feats": [
     "حجز إلكتروني ومراجعون بلا موعد",
     "محطة تمريض: علامات حيوية وفرز",
     "قائمة عمل الطبيب وملاحظات الزيارة",
     "طابور حي وإحصاء يومي"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "OPD / Outpatient",
    "tagline": "From booking to bedside",
    "body": "Online booking and walk-ins flow into nurse-station vitals and triage, a doctor worklist with visit notes, and a live queue with daily census.",
    "feats": [
     "Online booking & walk-ins",
     "Nurse station vitals & triage",
     "Doctor worklist & visit notes",
     "Live queue & daily census"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "er-emergency",
  "group": "Core Clinical Platforms",
  "weight": "hero",
  "side": "right",
  "hold": 0.32,
  "depth": 0.14,
  "color": "#ff6b88",
  "band": 1.0,
  "formation": {
   "kind": "primitive",
   "shape": "ecg"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "الطوارئ",
    "tagline": "كل ثانية تُحتسب",
    "body": "فرز ESI بخمسة مستويات يغذّي لوحة تتبّع حية، ومركز قيادة لإدارة الإصابات الجماعية، وتنبيهات فورية للقيم الحرجة.",
    "feats": [
     "فرز ESI بخمسة مستويات",
     "لوحة تتبّع حية للمرضى",
     "مركز قيادة وإصابات جماعية",
     "تنبيهات القيم الحرجة الفورية"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "ER / Emergency",
    "tagline": "Every second counts",
    "body": "Five-level ESI triage feeds a live tracking board, a command center for mass-casualty events, and instant critical-value alerts.",
    "feats": [
     "5-level ESI triage",
     "Live tracking board",
     "Command center & MCI",
     "Critical-value alerts"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "inpatient-icu",
  "group": "Core Clinical Platforms",
  "weight": "hero",
  "side": "left",
  "hold": 0.32,
  "depth": 0.14,
  "color": "#7c8cff",
  "band": 1.0,
  "formation": {
   "kind": "primitive",
   "shape": "bedGrid"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "التنويم والعناية المركزة",
    "tagline": "رعاية حرجة بإيقاع متكامل",
    "body": "خرائط أسرّة حية وفترات تنويم تقترن بمقاييس APACHE والتهدئة والهذيان، وحزم الإنتان والالتهاب الرئوي المرتبط بالتنفس، مع الكود الأزرق والاستجابة السريعة.",
    "feats": [
     "أسرّة حية وفترات تنويم",
     "مقاييس APACHE والتهدئة والهذيان",
     "حزم الإنتان و VAP",
     "الكود الأزرق والاستجابة السريعة"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Inpatient & ICU",
    "tagline": "Critical care, fully orchestrated",
    "body": "Live bed maps and admission episodes pair with APACHE, sedation and delirium scoring, sepsis and VAP bundles, plus Code Blue and rapid response.",
    "feats": [
     "Live beds & admission episodes",
     "APACHE / sedation / delirium scoring",
     "Sepsis & VAP bundles",
     "Code Blue & rapid response"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "operating-rooms-or",
  "group": "Core Clinical Platforms",
  "weight": "hero",
  "side": "right",
  "hold": 0.32,
  "depth": 0.12,
  "color": "#38bdf8",
  "band": 1.0,
  "formation": {
   "kind": "svg",
   "icon": "scissors"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "غرف العمليات",
    "tagline": "دقّة من التحضير للإفاقة",
    "body": "جدول جراحي مرئي يربط تقييم ما قبل العملية والتقارير الجراحية وأوامر ما بعد العملية مع تتبّع آني للحالات في كل غرفة.",
    "feats": [
     "جدول جراحي مرئي",
     "تقييم ما قبل العملية",
     "تقارير جراحية وأوامر ما بعد العملية",
     "تتبّع آني للحالات"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Operating Rooms / OR",
    "tagline": "Precision from prep to recovery",
    "body": "A visual surgery schedule connects pre-op assessment, operative notes and post-op orders with real-time case tracking across every theatre.",
    "feats": [
     "Visual surgery schedule",
     "Pre-op assessment",
     "Operative notes & post-op orders",
     "Real-time case tracking"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "laboratory-lis",
  "group": "Core Clinical Platforms",
  "weight": "hero",
  "side": "left",
  "hold": 0.32,
  "depth": 0.14,
  "color": "#34e0a1",
  "band": 1.0,
  "formation": {
   "kind": "primitive",
   "shape": "helix"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "المختبر",
    "tagline": "من العينة إلى نتيجة موثّقة",
    "body": "استلام العينات بالباركود يقود التحقّق الآلي مع النطاقات المرجعية، والأحياء الدقيقة وحساسيّة المضادات، وتنبيهات حرجة بزمن دوران، وتكامل كامل مع الأجهزة.",
    "feats": [
     "استلام العينات والباركود",
     "تحقّق آلي ونطاقات مرجعية",
     "الأحياء الدقيقة وحساسيّة المضادات",
     "تنبيهات حرجة وزمن دوران"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Laboratory / LIS",
    "tagline": "From specimen to verified result",
    "body": "Barcoded specimen intake drives auto-validation with reference ranges, microbiology and susceptibility, critical alerts with TAT, and full analyzer integration.",
    "feats": [
     "Specimen intake & barcode",
     "Auto-validation & reference ranges",
     "Microbiology & susceptibility",
     "Critical alerts & TAT"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "radiology-pacs",
  "group": "Core Clinical Platforms",
  "weight": "hero",
  "side": "right",
  "hold": 0.32,
  "depth": 0.12,
  "color": "#b06bff",
  "band": 1.0,
  "formation": {
   "kind": "svg",
   "icon": "scan"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "الأشعة",
    "tagline": "رؤية أوضح وتقرير أسرع",
    "body": "عارض DICOM مدمج يجمع التقارير المنظّمة وتنبيهات النتائج الحرجة وقوائم عمل مخصّصة للفنّي وأخصّائي الأشعة في مسار واحد قائم على الصورة.",
    "feats": [
     "عارض DICOM مدمج",
     "تقارير منظّمة",
     "تنبيهات النتائج الحرجة",
     "قوائم عمل الفنّي وأخصّائي الأشعة"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Radiology / PACS",
    "tagline": "See clearly, report faster",
    "body": "A built-in DICOM viewer brings structured reporting, critical-findings alerts, and dedicated technologist and radiologist worklists into one image-driven workflow.",
    "feats": [
     "Built-in DICOM viewer",
     "Structured reporting",
     "Critical-findings alerts",
     "Tech & radiologist worklists"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "pharmacy",
  "group": "Core Clinical Platforms",
  "weight": "hero",
  "side": "left",
  "hold": 0.32,
  "depth": 0.12,
  "color": "#ffb347",
  "band": 1.0,
  "formation": {
   "kind": "svg",
   "icon": "pill"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "الصيدلة",
    "tagline": "دواء آمن في كل جرعة",
    "body": "مخزون بإعادة طلب ذكية يشغّل الصرف والجرعة الموحّدة، وتحضير المحاليل الوريدية، وخزائن الصرف الآلي، وتتبّعًا كاملًا للمواد الخاضعة للرقابة.",
    "feats": [
     "المخزون وإعادة الطلب",
     "الصرف والجرعة الموحّدة",
     "تحضير المحاليل الوريدية",
     "خزائن الصرف الآلي (ADC)"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Pharmacy",
    "tagline": "Safe meds, every dose",
    "body": "Inventory with smart reorder powers dispensing and unit-dose, IV admixture, automated dispensing cabinets, and end-to-end controlled-substance tracking.",
    "feats": [
     "Inventory & reorder",
     "Dispensing & unit-dose",
     "IV admixture",
     "Automated dispensing cabinets"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "billing-revenue-cycle",
  "group": "Enterprise Platforms",
  "weight": "hero",
  "side": "right",
  "hold": 0.32,
  "depth": 0.12,
  "color": "#34e0a1",
  "band": 1.0,
  "formation": {
   "kind": "svg",
   "icon": "wallet"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "الفوترة ودورة الإيرادات",
    "tagline": "من الخدمة إلى التحصيل",
    "body": "محرك إيرادات لحظي يلتقط الرسوم ويقدّم مطالبات نفيس ويسوّي المدفوعات ويتحقق من الأهلية التأمينية عبر الرحلة المالية للمريض بالكامل.",
    "feats": [
     "التقاط الرسوم لحظياً",
     "المطالبات والربط مع نفيس",
     "المدفوعات والتسوية المالية",
     "التأمين والتحقق من الأهلية"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Billing & Revenue Cycle",
    "tagline": "Capture to cash, end to end",
    "body": "A real-time revenue engine that captures charges, files NPHIES claims, reconciles payments, and verifies insurance eligibility across the entire patient financial journey.",
    "feats": [
     "Real-time charge capture",
     "Claims & NPHIES integration",
     "Payments & reconciliation",
     "Insurance & eligibility"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "patient-portal",
  "group": "Enterprise Platforms",
  "weight": "hero",
  "side": "left",
  "hold": 0.32,
  "depth": 0.12,
  "color": "#1fd6c5",
  "band": 1.0,
  "formation": {
   "kind": "svg",
   "icon": "smartphone"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "بوابة المريض",
    "tagline": "الرعاية بين يدي المريض",
    "body": "بوابة آمنة موجّهة للمريض لحجز المواعيد، والاطّلاع على النتائج والتقارير، والتواصل مع الفريق الطبي، وسداد الفواتير إلكترونياً.",
    "feats": [
     "حجز المواعيد",
     "الاطلاع على النتائج والتقارير",
     "المراسلة الآمنة",
     "الفواتير والدفع الإلكتروني"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Patient Portal",
    "tagline": "Care in the patient's hands",
    "body": "A secure patient-facing portal for booking appointments, accessing results and reports, messaging the care team, and paying bills online.",
    "feats": [
     "Appointment booking",
     "Results & reports access",
     "Secure messaging",
     "Bills & online payment"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "obgyn",
  "group": "Specialty Modules",
  "weight": "standard",
  "side": "left",
  "hold": 0.42,
  "depth": 0.12,
  "color": "#ff6b88",
  "band": 0.66,
  "formation": {
   "kind": "emoji",
   "char": "🤰"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "النساء والتوليد",
    "tagline": "من أول صورة حتى الولادة",
    "body": "رعاية متكاملة لصحة المرأة تشمل متابعة الحمل والولادة والرعاية النسائية في منصة واحدة.",
    "feats": [
     "بطاقة متابعة الحمل والفحوصات الدورية",
     "إدارة الولادة وتخطيط نبض الجنين",
     "العيادة النسائية والفحص بالموجات الصوتية"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "OB/GYN",
    "tagline": "From first scan to delivery",
    "body": "End-to-end maternity and women's health covering antenatal visits, labor and delivery, and gynecological care.",
    "feats": [
     "Antenatal care record and visit tracking",
     "Labor, delivery, and fetal monitoring",
     "Gynecology clinic and ultrasound workups"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "oncology",
  "group": "Specialty Modules",
  "weight": "standard",
  "side": "right",
  "hold": 0.42,
  "depth": 0.12,
  "color": "#b06bff",
  "band": 0.66,
  "formation": {
   "kind": "emoji",
   "char": "🎗️"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "الأورام",
    "tagline": "رعاية دقيقة لمرضى الأورام",
    "body": "رعاية منسقة للأورام من تحديد مرحلة الورم حتى بروتوكولات العلاج الكيميائي وجدولة دورات العلاج.",
    "feats": [
     "بروتوكولات العلاج الكيميائي وحساب الجرعات",
     "تحديد مرحلة الورم ومتابعة الاستجابة",
     "جدولة دورات العلاج واللجان الورمية"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Oncology",
    "tagline": "Precision cancer care",
    "body": "Coordinated cancer care from tumor staging through chemotherapy protocols and treatment-cycle scheduling.",
    "feats": [
     "Chemotherapy protocols and dose calculation",
     "Tumor staging and response tracking",
     "Treatment cycle and tumor board scheduling"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "psychiatry",
  "group": "Specialty Modules",
  "weight": "standard",
  "side": "left",
  "hold": 0.42,
  "depth": 0.12,
  "color": "#7c8cff",
  "band": 0.66,
  "formation": {
   "kind": "emoji",
   "char": "🧠"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "الطب النفسي",
    "tagline": "رعاية الصحة النفسية والعقلية",
    "body": "إدارة الصحة النفسية عبر تقييمات منظمة وملاحظات نفسية وخطط للأدوية والجلسات العلاجية.",
    "feats": [
     "التقييمات النفسية ومقاييس الحالة",
     "خطط الأدوية والجلسات العلاجية",
     "متابعة الخطورة وملاحظات الحالة"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Psychiatry",
    "tagline": "Mind and mental wellness",
    "body": "Mental health management with structured assessments, psychiatric notes, and medication and therapy planning.",
    "feats": [
     "Psychiatric assessments and rating scales",
     "Medication and therapy session plans",
     "Risk monitoring and progress notes"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "dental",
  "group": "Specialty Modules",
  "weight": "standard",
  "side": "right",
  "hold": 0.42,
  "depth": 0.12,
  "color": "#38bdf8",
  "band": 0.66,
  "formation": {
   "kind": "emoji",
   "char": "🦷"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "الأسنان",
    "tagline": "توثيق كل سن بدقة",
    "body": "رعاية أسنان متكاملة مع مخطط تفاعلي للأسنان وخطط علاجية وتوثيق الإجراءات.",
    "feats": [
     "مخطط الأسنان التفاعلي ورسم الحالة",
     "خطط العلاج وتقديرات التكلفة",
     "توثيق الإجراءات والصور الشعاعية"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Dental",
    "tagline": "Charting every tooth",
    "body": "Complete dental care with interactive tooth charting, treatment plans, and procedure documentation.",
    "feats": [
     "Interactive dental charting",
     "Treatment plans and cost estimates",
     "Procedure and radiograph documentation"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "blood-bank",
  "group": "Specialty Modules",
  "weight": "standard",
  "side": "left",
  "hold": 0.42,
  "depth": 0.12,
  "color": "#ff6b88",
  "band": 0.66,
  "formation": {
   "kind": "emoji",
   "char": "🩸"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "بنك الدم",
    "tagline": "دم آمن ومطابقة موثوقة",
    "body": "طب نقل الدم لإدارة وحدات المتبرعين والمطابقة المتقاطعة والتتبع الكامل من المخزون حتى المريض.",
    "feats": [
     "مخزون وحدات الدم وتتبع الانتهاء",
     "المطابقة المتقاطعة وفصائل الدم",
     "تتبع عمليات النقل والتفاعلات"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Blood Bank",
    "tagline": "Safe blood, every match",
    "body": "Transfusion medicine managing donor units, cross-matching, and full traceability from inventory to bedside.",
    "feats": [
     "Blood unit inventory and expiry tracking",
     "Cross-matching and blood typing",
     "Transfusion and reaction traceability"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "pathology",
  "group": "Specialty Modules",
  "weight": "standard",
  "side": "right",
  "hold": 0.42,
  "depth": 0.12,
  "color": "#1fd6c5",
  "band": 0.66,
  "formation": {
   "kind": "emoji",
   "char": "🔬"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "علم الأمراض",
    "tagline": "تشخيص دقيق تحت المجهر",
    "body": "علم الأمراض التشريحي والجراحي لإدارة استلام العينات وسير عمل الأنسجة والتقارير التشخيصية.",
    "feats": [
     "استلام العينات وتتبعها",
     "سير عمل تحضير الأنسجة",
     "التقارير التشخيصية المعتمدة"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Pathology",
    "tagline": "Diagnosis under the lens",
    "body": "Anatomic and surgical pathology managing specimen accessioning, histology workflows, and diagnostic reporting.",
    "feats": [
     "Specimen accessioning and tracking",
     "Histology preparation workflows",
     "Verified diagnostic reporting"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "telemedicine",
  "group": "Specialty Modules",
  "weight": "standard",
  "side": "left",
  "hold": 0.42,
  "depth": 0.12,
  "color": "#38bdf8",
  "band": 0.66,
  "formation": {
   "kind": "emoji",
   "char": "📱"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "الطب عن بُعد",
    "tagline": "رعاية تتجاوز المسافات",
    "body": "استشارات عن بُعد عبر مكالمات فيديو آمنة ووصفات إلكترونية وتوثيق متكامل في ملف المريض.",
    "feats": [
     "زيارات فيديو آمنة ومشفّرة",
     "الوصفات الإلكترونية عن بُعد",
     "توثيق الزيارة في ملف المريض"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Telemedicine",
    "tagline": "Care without distance",
    "body": "Remote consultations with secure video visits, e-prescriptions, and integrated documentation into the patient chart.",
    "feats": [
     "Secure encrypted video visits",
     "Remote e-prescriptions",
     "Visit documentation in the chart"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "physiotherapy",
  "group": "Specialty Modules",
  "weight": "standard",
  "side": "right",
  "hold": 0.42,
  "depth": 0.12,
  "color": "#34e0a1",
  "band": 0.66,
  "formation": {
   "kind": "emoji",
   "char": "🏃"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "العلاج الطبيعي",
    "tagline": "استعادة الحركة جلسة بعد جلسة",
    "body": "إدارة التأهيل عبر التقييمات الوظيفية وبرامج التمارين ومتابعة التقدم في كل جلسة.",
    "feats": [
     "التقييم الوظيفي وخطة التأهيل",
     "برامج التمارين العلاجية",
     "متابعة التقدم لكل جلسة"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Physiotherapy",
    "tagline": "Restoring movement, session by session",
    "body": "Rehabilitation management with functional assessments, exercise programs, and session-by-session progress tracking.",
    "feats": [
     "Functional assessment and rehab plan",
     "Therapeutic exercise programs",
     "Per-session progress tracking"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "wound-care",
  "group": "Specialty Modules",
  "weight": "standard",
  "side": "left",
  "hold": 0.42,
  "depth": 0.12,
  "color": "#ffb347",
  "band": 0.66,
  "formation": {
   "kind": "emoji",
   "char": "🩹"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "العناية بالجروح",
    "tagline": "متابعة التئام الجروح بدقة",
    "body": "إدارة منظمة للجروح مع تصنيف المرحلة والتوثيق بالصور وجداول الضمادات لمتابعة التئام الجرح.",
    "feats": [
     "تصنيف الجرح وقياس الأبعاد",
     "التوثيق بالصور عبر الزمن",
     "جداول الضمادات والمتابعة"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Wound Care",
    "tagline": "Tracking healing over time",
    "body": "Structured wound management with staging, photo documentation, and dressing schedules to track healing progress.",
    "feats": [
     "Wound staging and measurement",
     "Photo documentation over time",
     "Dressing schedules and follow-up"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "nutrition",
  "group": "Specialty Modules",
  "weight": "standard",
  "side": "right",
  "hold": 0.42,
  "depth": 0.12,
  "color": "#34e0a1",
  "band": 0.66,
  "formation": {
   "kind": "emoji",
   "char": "🥗"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "التغذية",
    "tagline": "تغذية تدعم الصحة والتعافي",
    "body": "تغذية سريرية تشمل التقييم الغذائي وخطط السعرات والحميات وإدارة طلبات وجبات المرضى المنومين.",
    "feats": [
     "التقييم الغذائي واحتياج السعرات",
     "خطط الحمية الغذائية",
     "طلبات الوجبات للمرضى المنومين"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Nutrition",
    "tagline": "Fueling recovery and health",
    "body": "Clinical nutrition with dietary assessments, calorie and diet planning, and inpatient meal-order management.",
    "feats": [
     "Dietary assessment and calorie needs",
     "Therapeutic diet planning",
     "Inpatient meal orders"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "social-work",
  "group": "Specialty Modules",
  "weight": "standard",
  "side": "left",
  "hold": 0.42,
  "depth": 0.12,
  "color": "#7c8cff",
  "band": 0.66,
  "formation": {
   "kind": "emoji",
   "char": "🤝"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "الخدمة الاجتماعية",
    "tagline": "دعم يتجاوز سرير المريض",
    "body": "خدمة اجتماعية طبية لتنسيق التقييم النفسي الاجتماعي ودعم الأسرة وتخطيط الخروج والموارد المجتمعية.",
    "feats": [
     "التقييم النفسي الاجتماعي",
     "دعم الأسرة وتخطيط الخروج",
     "ربط المريض بالموارد المجتمعية"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Social Work",
    "tagline": "Support beyond the bedside",
    "body": "Medical social work coordinating psychosocial assessments, family support, and discharge and community-resource planning.",
    "feats": [
     "Psychosocial assessment",
     "Family support and discharge planning",
     "Community resource referrals"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "consults-referrals",
  "group": "Specialty Modules",
  "weight": "standard",
  "side": "right",
  "hold": 0.42,
  "depth": 0.12,
  "color": "#1fd6c5",
  "band": 0.66,
  "formation": {
   "kind": "emoji",
   "char": "📋"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "الاستشارات والتحويلات",
    "tagline": "الأخصائي المناسب في الوقت المناسب",
    "body": "استشارات وتحويلات بين الأقسام مع التوجيه وتتبع الحالة واستكمال ردود الأخصائيين بحلقة مغلقة.",
    "feats": [
     "توجيه الاستشارات بين الأقسام",
     "تتبع حالة التحويل والأولوية",
     "ردود الأخصائيين بحلقة مغلقة"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Consults & Referrals",
    "tagline": "Right specialist, right time",
    "body": "Inter-departmental consults and referrals with routing, status tracking, and closed-loop specialist responses.",
    "feats": [
     "Inter-departmental consult routing",
     "Referral status and priority tracking",
     "Closed-loop specialist responses"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "infection-control",
  "group": "Operations & Quality",
  "weight": "quick",
  "side": "left",
  "hold": 0.42,
  "depth": 0.12,
  "color": "#34e0a1",
  "band": 0.46,
  "formation": {
   "kind": "emoji",
   "char": "🦠"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "مكافحة العدوى",
    "tagline": "نوقف العدوى قبل انتشارها",
    "body": "ترصد ومراقبة العزل ورصد العدوى المكتسبة لاحتواء العدوى المرتبطة بالرعاية الصحية في المنشأة.",
    "feats": [
     "ترصد العدوى المكتسبة والتنبيهات",
     "تتبع العزل والاحتياطات",
     "الإبلاغ عن التفشي"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Infection Control",
    "tagline": "Stop outbreaks before they spread",
    "body": "Surveillance, isolation tracking, and HAI monitoring to contain healthcare-associated infections across the facility.",
    "feats": [
     "HAI surveillance & alerts",
     "Isolation & precaution tracking",
     "Outbreak reporting"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "cssd-sterilization",
  "group": "Operations & Quality",
  "weight": "quick",
  "side": "right",
  "hold": 0.42,
  "depth": 0.12,
  "color": "#38bdf8",
  "band": 0.46,
  "formation": {
   "kind": "emoji",
   "char": "🧼"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "التعقيم المركزي",
    "tagline": "أدوات معقّمة قابلة للتتبع",
    "body": "وحدة التعقيم المركزي تتتبع مجموعات الأدوات عبر الغسيل والتعقيم والتحقق من الدورات مع تتبع كامل.",
    "feats": [
     "تتبع مجموعات الأدوات",
     "سجلات دورات التعقيم",
     "تتبع الصواني"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "CSSD (Sterilization)",
    "tagline": "Sterile instruments, fully traceable",
    "body": "Central sterile supply tracks instrument sets through wash, sterilize, and cycle validation with full traceability.",
    "feats": [
     "Instrument set tracking",
     "Sterilization cycle logs",
     "Tray traceability"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "equipment-management",
  "group": "Operations & Quality",
  "weight": "quick",
  "side": "left",
  "hold": 0.42,
  "depth": 0.12,
  "color": "#7c8cff",
  "band": 0.46,
  "formation": {
   "kind": "emoji",
   "char": "🩺"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "إدارة المعدات",
    "tagline": "كل جهاز جاهز ومعاير",
    "body": "سجل الأصول الطبية الحيوية مع الصيانة الوقائية وجداول المعايرة وتتبع فترات التوقف.",
    "feats": [
     "سجل الأصول ودورة حياتها",
     "خطط الصيانة الوقائية",
     "جدولة المعايرة"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Equipment Management",
    "tagline": "Every asset, ready and calibrated",
    "body": "Biomedical asset registry with preventive maintenance, calibration schedules, and downtime tracking.",
    "feats": [
     "Asset registry & lifecycle",
     "Preventive maintenance plans",
     "Calibration scheduling"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "nursing-operations",
  "group": "Operations & Quality",
  "weight": "quick",
  "side": "right",
  "hold": 0.42,
  "depth": 0.12,
  "color": "#1fd6c5",
  "band": 0.46,
  "formation": {
   "kind": "emoji",
   "char": "👩‍⚕️"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "عمليات التمريض",
    "tagline": "العنبر تحت السيطرة",
    "body": "محطة التمريض لتوزيع المناوبات وحدّة حالة المرضى وقوائم المهام والتوثيق بجانب السرير في شاشة واحدة.",
    "feats": [
     "توزيع المناوبات والمرضى",
     "موازنة حدّة الحالة وعبء العمل",
     "قوائم مهام بجانب السرير"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Nursing Operations",
    "tagline": "The ward, under control",
    "body": "Nursing station for shift assignments, patient acuity, task lists, and bedside documentation in one view.",
    "feats": [
     "Shift & patient assignment",
     "Acuity & workload balancing",
     "Bedside task lists"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "patient-experience",
  "group": "Operations & Quality",
  "weight": "quick",
  "side": "left",
  "hold": 0.42,
  "depth": 0.12,
  "color": "#ff6b88",
  "band": 0.46,
  "formation": {
   "kind": "emoji",
   "char": "💬"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "تجربة المريض",
    "tagline": "نستمع ونحل ونطوّر",
    "body": "يلتقط آراء المرضى والاستبيانات والشكاوى ويوجّه الحالات للحل ويتتبع اتجاهات الرضا.",
    "feats": [
     "الملاحظات والاستبيانات",
     "توجيه حالات الشكاوى",
     "تحليلات الرضا"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Patient Experience",
    "tagline": "Listen, resolve, and improve",
    "body": "Captures patient feedback, surveys, and complaints, routing cases to resolution and tracking satisfaction trends.",
    "feats": [
     "Feedback & surveys",
     "Complaint case routing",
     "Satisfaction analytics"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "quality-safety",
  "group": "Operations & Quality",
  "weight": "quick",
  "side": "right",
  "hold": 0.42,
  "depth": 0.12,
  "color": "#34e0a1",
  "band": 0.46,
  "formation": {
   "kind": "emoji",
   "char": "🛡️"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "الجودة والسلامة",
    "tagline": "جاهزية سباهي دائمة",
    "body": "يتتبع مؤشرات الجودة والإبلاغ عن الحوادث وجاهزية اعتماد سباهي عبر جميع الأقسام.",
    "feats": [
     "مؤشرات الجودة",
     "الإبلاغ عن الحوادث",
     "تتبع اعتماد سباهي"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Quality & Safety",
    "tagline": "CBAHI-ready, always audit-clean",
    "body": "Tracks quality indicators, incident reporting, and CBAHI accreditation readiness across all departments.",
    "feats": [
     "Quality indicators (KPIs)",
     "Incident & event reporting",
     "CBAHI accreditation tracking"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "risk-detection",
  "group": "Operations & Quality",
  "weight": "quick",
  "side": "left",
  "hold": 0.42,
  "depth": 0.12,
  "color": "#ffb347",
  "band": 0.46,
  "formation": {
   "kind": "emoji",
   "char": "⚠️"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "كشف المخاطر",
    "tagline": "ذكاء يرصد الخطر مبكراً",
    "body": "محرك مدعوم بالذكاء الاصطناعي يفحص الإشارات السريرية والتشغيلية لكشف مخاطر التدهور والسلامة والامتثال.",
    "feats": [
     "تقييم المخاطر اللحظي",
     "تنبيهات التدهور",
     "إشارات الامتثال"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Risk Detection",
    "tagline": "AI flags risk early",
    "body": "AI-driven engine scans clinical and operational signals to surface deterioration, safety, and compliance risks.",
    "feats": [
     "Real-time risk scoring",
     "Deterioration alerts",
     "Compliance flags"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "handover",
  "group": "Operations & Quality",
  "weight": "quick",
  "side": "right",
  "hold": 0.42,
  "depth": 0.12,
  "color": "#7c8cff",
  "band": 0.46,
  "formation": {
   "kind": "emoji",
   "char": "🤝"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "تسليم المناوبة",
    "tagline": "لا تفوت تفصيلة عند التسليم",
    "body": "تسليم مناوبة منظّم بصيغة SBAR مع المهام المعلّقة وحالة المريض تُنقل بدقة بين الفرق.",
    "feats": [
     "ملاحظات منظّمة SBAR",
     "ترحيل المهام المعلّقة",
     "استمرارية بين المناوبات"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Handover",
    "tagline": "No detail lost at shift change",
    "body": "Structured shift handover with SBAR notes, pending tasks, and patient status carried cleanly between teams.",
    "feats": [
     "SBAR structured notes",
     "Pending task carryover",
     "Shift-to-shift continuity"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "patient-transport",
  "group": "Operations & Quality",
  "weight": "quick",
  "side": "left",
  "hold": 0.42,
  "depth": 0.12,
  "color": "#38bdf8",
  "band": 0.46,
  "formation": {
   "kind": "emoji",
   "char": "🛏️"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "نقل المرضى",
    "tagline": "نقل آمن في وقته",
    "body": "ينسّق حركة المرضى داخل المنشأة عبر إرسال المرافقين وتتبع وسيلة النقل وتحديثات الحالة الحية.",
    "feats": [
     "إرسال طلبات النقل",
     "تعيين المرافقين",
     "تتبع الحركة لحظياً"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Patient Transport",
    "tagline": "The right move, on time",
    "body": "Coordinates intra-facility patient moves with porter dispatch, mode tracking, and live status updates.",
    "feats": [
     "Transport request dispatch",
     "Porter assignment",
     "Live move tracking"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "orders-hub",
  "group": "Operations & Quality",
  "weight": "quick",
  "side": "right",
  "hold": 0.42,
  "depth": 0.12,
  "color": "#1fd6c5",
  "band": 0.46,
  "formation": {
   "kind": "emoji",
   "char": "📋"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "مركز الطلبات",
    "tagline": "كل الطلبات في مكان واحد",
    "body": "مركز موحّد للطلبات السريرية يوجّه طلبات المختبر والأشعة والصيدلية مع متابعة الحالة عبر الأقسام.",
    "feats": [
     "إدخال موحّد للطلبات",
     "توجيه بين الأقسام",
     "تتبع حالة الطلب"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Orders Hub",
    "tagline": "Every order, one place",
    "body": "Central command for clinical orders, routing labs, imaging, and pharmacy requests with status across departments.",
    "feats": [
     "Unified order entry",
     "Cross-department routing",
     "Order status tracking"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "results-inbox",
  "group": "Operations & Quality",
  "weight": "quick",
  "side": "left",
  "hold": 0.42,
  "depth": 0.12,
  "color": "#b06bff",
  "band": 0.46,
  "formation": {
   "kind": "emoji",
   "char": "📥"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "صندوق النتائج",
    "tagline": "نتائج تُراجَع ولا تفوت",
    "body": "صندوق وارد لنتائج المختبر والأشعة مع تنبيهات القيم الحرجة والإقرار واعتماد الطبيب.",
    "feats": [
     "تنبيهات القيم الحرجة",
     "إقرار استلام النتائج",
     "اعتماد الطبيب"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Results Inbox",
    "tagline": "Results reviewed, never missed",
    "body": "Inbox for incoming lab and imaging results with critical-value alerts, acknowledgment, and clinician sign-off.",
    "feats": [
     "Critical-value alerts",
     "Result acknowledgment",
     "Clinician sign-off"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "downtime-pack",
  "group": "Operations & Quality",
  "weight": "quick",
  "side": "right",
  "hold": 0.42,
  "depth": 0.12,
  "color": "#ffb347",
  "band": 0.46,
  "formation": {
   "kind": "emoji",
   "char": "📴"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "حزمة الانقطاع",
    "tagline": "نواصل العمل وقت الانقطاع",
    "body": "حزمة استمرارية الأعمال بنماذج قابلة للطباعة وبيانات المرضى المخزّنة لاستمرار الرعاية أثناء انقطاع النظام.",
    "feats": [
     "نماذج انقطاع قابلة للطباعة",
     "لقطات بيانات المرضى المخزّنة",
     "مطابقة بيانات الاستعادة"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Downtime Pack",
    "tagline": "Keep running when systems don't",
    "body": "Business-continuity toolkit with printable forms and cached patient data to keep care going during system outages.",
    "feats": [
     "Printable downtime forms",
     "Cached patient snapshots",
     "Recovery reconciliation"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "multi-tenant",
  "group": "Platform / Infrastructure",
  "weight": "standard",
  "side": "left",
  "hold": 0.42,
  "depth": 0.12,
  "color": "#7c8cff",
  "band": 0.66,
  "formation": {
   "kind": "emoji",
   "char": "🏢"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "تعدّد المستأجرين",
    "tagline": "قاعدة بيانات مستقلة لكل منشأة",
    "body": "كل منشأة صحية تعمل على قاعدة بيانات مخصصة لها مع عزل كامل للبيانات وإعدادات مستقلة.",
    "feats": [
     "قاعدة بيانات مخصصة لكل مستأجر",
     "عزل كامل للبيانات بين المنشآت",
     "إعدادات وهوية مستقلة لكل منشأة"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Multi-tenant",
    "tagline": "Isolated database per organization",
    "body": "Each healthcare organization runs on its own dedicated database with complete data isolation and independent configuration.",
    "feats": [
     "Dedicated database per tenant",
     "Full data isolation between organizations",
     "Independent config and branding per org"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "interoperability",
  "group": "Platform / Infrastructure",
  "weight": "standard",
  "side": "right",
  "hold": 0.42,
  "depth": 0.12,
  "color": "#38bdf8",
  "band": 0.66,
  "formation": {
   "kind": "emoji",
   "char": "🔌"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "التكامل والمعايير",
    "tagline": "HL7 وFHIR ونفيس ومختبرات وأشعة",
    "body": "تبادل سلس للبيانات بين الأنظمة عبر معايير HL7 وFHIR العالمية مع ربط مباشر بنفيس وأنظمة المختبرات والأشعة.",
    "feats": [
     "معايير HL7 وFHIR العالمية",
     "ربط مباشر بمنصة نفيس",
     "تكامل مع أنظمة المختبرات والأشعة"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Interoperability",
    "tagline": "HL7, FHIR, NPHIES, LIS/RIS",
    "body": "Seamless data exchange across systems using global standards HL7 and FHIR, with native NPHIES, LIS, and RIS connectivity.",
    "feats": [
     "HL7 and FHIR global standards",
     "Native NPHIES integration",
     "LIS and RIS connectivity"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "security-rbac",
  "group": "Platform / Infrastructure",
  "weight": "standard",
  "side": "left",
  "hold": 0.42,
  "depth": 0.12,
  "color": "#ff6b88",
  "band": 0.66,
  "formation": {
   "kind": "emoji",
   "char": "🛡️"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "الأمان والصلاحيات",
    "tagline": "صلاحيات دقيقة وسجل تدقيق كامل",
    "body": "تحكّم دقيق بالصلاحيات يحمي كل إجراء مع سجل تدقيق كامل يوثّق من فعل ماذا ومتى.",
    "feats": [
     "صلاحيات دقيقة قائمة على الأدوار",
     "سجل تدقيق شامل لكل إجراء",
     "حماية البيانات وامتثال للخصوصية"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Security & RBAC",
    "tagline": "Granular roles, full audit trail",
    "body": "Granular role-based access control protects every action while a complete audit trail records who did what and when.",
    "feats": [
     "Granular role-based permissions",
     "Comprehensive audit trail",
     "Data protection and privacy compliance"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "arabic-first",
  "group": "Platform / Infrastructure",
  "weight": "standard",
  "side": "right",
  "hold": 0.42,
  "depth": 0.12,
  "color": "#34e0a1",
  "band": 0.66,
  "formation": {
   "kind": "emoji",
   "char": "🌐"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "عربي أولاً",
    "tagline": "واجهة ثنائية اللغة بنظام RTL",
    "body": "واجهة عربية أصيلة بدعم كامل للاتجاه من اليمين لليسار وتبديل سلس بين اللغتين في كل شاشة.",
    "feats": [
     "دعم كامل للاتجاه من اليمين لليسار",
     "تبديل فوري بين العربية والإنجليزية",
     "مصطلحات طبية بالسجل السعودي"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Arabic-first",
    "tagline": "Full RTL bilingual interface",
    "body": "A truly Arabic-first interface with complete right-to-left support and seamless bilingual switching across every screen.",
    "feats": [
     "Full right-to-left layout support",
     "Instant Arabic/English switching",
     "Saudi healthcare terminology"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "ai-assistance",
  "group": "Platform / Infrastructure",
  "weight": "standard",
  "side": "left",
  "hold": 0.42,
  "depth": 0.12,
  "color": "#b06bff",
  "band": 0.66,
  "formation": {
   "kind": "emoji",
   "char": "🤖"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "المساعدة الذكية",
    "tagline": "ملاحظات سريرية ومواءمة السياسات",
    "body": "الذكاء الاصطناعي يصيغ الملاحظات السريرية ويوائم السياسات لتسريع التوثيق مع بقاء القرار بيد الطبيب.",
    "feats": [
     "صياغة ذكية للملاحظات السريرية",
     "مواءمة وتوحيد السياسات",
     "اقتراحات تبقي القرار للطبيب"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "AI Assistance",
    "tagline": "Clinical notes, policy harmonization",
    "body": "AI drafts clinical notes and harmonizes policies, accelerating documentation while keeping clinicians in full control.",
    "feats": [
     "AI-drafted clinical notes",
     "Policy harmonization",
     "Suggestions, clinician stays in control"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "analytics-bi",
  "group": "Platform / Infrastructure",
  "weight": "standard",
  "side": "right",
  "hold": 0.42,
  "depth": 0.12,
  "color": "#1fd6c5",
  "band": 0.66,
  "formation": {
   "kind": "emoji",
   "char": "📊"
  },
  "copy": {
   "ar": {
    "kicker": "ثيا الصحة",
    "title": "التحليلات والمؤشرات",
    "tagline": "لوحات لحظية وتقارير مخصصة",
    "body": "لوحات معلومات لحظية وتقارير مخصصة تحوّل البيانات التشغيلية والسريرية إلى رؤى قابلة للتنفيذ على مستوى المنشأة.",
    "feats": [
     "لوحات معلومات لحظية",
     "تقارير مخصصة قابلة للبناء",
     "مؤشرات أداء سريرية وتشغيلية"
    ]
   },
   "en": {
    "kicker": "Thea Health",
    "title": "Analytics & BI",
    "tagline": "Real-time dashboards, custom reports",
    "body": "Real-time dashboards and custom reports turn operational and clinical data into actionable insight across the organization.",
    "feats": [
     "Real-time dashboards",
     "Custom report builder",
     "Clinical and operational KPIs"
    ]
   }
  },
  "platform": "health"
 },
 {
  "id": "sam-intro",
  "platform": "sam",
  "kind": "platform",
  "platformIntro": true,
  "side": "center",
  "hold": 0.36,
  "band": 0.95,
  "color": "#a855f7",
  "formation": {
   "kind": "emoji",
   "char": "🛡️"
  },
  "logo": "brand/sam.png",
  "stats": [
   {
    "v": "+1,200",
    "ar": "سياسة",
    "en": "Policies"
   },
   {
    "v": "98%",
    "ar": "امتثال",
    "en": "Compliance"
   },
   {
    "v": "+150",
    "ar": "تدقيق",
    "en": "Audits"
   }
  ],
  "coming": false,
  "copy": {
   "ar": {
    "kicker": "منصّة من ثيا",
    "title": "سَم",
    "tagline": "من السياسة إلى الامتثال",
    "body": "سَم منصة حوكمة السياسات والوثائق بالذكاء الاصطناعي، تُوائم سياساتك وتكشف التعارضات والفجوات وتُبقي الامتثال والمخاطر تحت مراقبة حية.",
    "feats": [
     "إدارة السياسات",
     "مراقبة الامتثال",
     "تقييم المخاطر",
     "تقارير التدقيق"
    ]
   },
   "en": {
    "kicker": "A Thea platform",
    "title": "SAM",
    "tagline": "From Policy to Compliance",
    "body": "SAM is the AI policy and document governance platform that harmonises your policies, exposes conflicts and gaps, and keeps compliance and risk under live watch.",
    "feats": [
     "Policy Management",
     "Compliance Monitoring",
     "Risk Assessment",
     "Audit Reports"
    ]
   }
  }
 },
 {
  "id": "sam-sam-library",
  "platform": "sam",
  "kind": "feature",
  "side": "left",
  "hold": 0.4,
  "band": 0.66,
  "color": "#a855f7",
  "formation": {
   "kind": "emoji",
   "char": "📚"
  },
  "copy": {
   "ar": {
    "kicker": "سَم",
    "title": "مكتبة السياسات والمعايير",
    "tagline": "مرجع واحد موثوق",
    "body": "مكتبة محوكمة واحدة تُصنَّف فيها كل سياسة وفق المعايير الوطنية ومعايير الاعتماد، مع ضبط كامل للإصدارات.",
    "feats": [
     "أكثر من ١٢٠٠ سياسة محوكمة",
     "المعايير والتصنيفات",
     "ضبط كامل للإصدارات"
    ]
   },
   "en": {
    "kicker": "SAM",
    "title": "Policy Library & Standards",
    "tagline": "One Source of Truth",
    "body": "A single governed library where every policy is classified against national and accreditation standards and version-controlled end to end.",
    "feats": [
     "1,200+ governed policies",
     "Standards & classifications",
     "Full version control"
    ]
   }
  }
 },
 {
  "id": "sam-sam-crosswalk",
  "platform": "sam",
  "kind": "feature",
  "side": "right",
  "hold": 0.4,
  "band": 0.66,
  "color": "#a855f7",
  "formation": {
   "kind": "emoji",
   "char": "🔀"
  },
  "copy": {
   "ar": {
    "kicker": "سَم",
    "title": "كشف التعارض والمواءمة",
    "tagline": "تناقضات تُكشف مبكراً",
    "body": "يربط الذكاء الاصطناعي كل سياسة عبر الأُطر المرجعية ويرصد التناقضات قبل وصولها للميدان، ثم يقود مواءمتها.",
    "feats": [
     "ربط عبر الأُطر المرجعية",
     "رصد تلقائي للتعارضات",
     "مواءمة موجَّهة"
    ]
   },
   "en": {
    "kicker": "SAM",
    "title": "Conflict Detection & Harmonisation",
    "tagline": "Contradictions, Caught Early",
    "body": "AI crosswalk maps every policy across frameworks and flags contradictions before they reach the floor, then guides harmonisation.",
    "feats": [
     "Cross-framework crosswalk",
     "Automated conflict flags",
     "Guided harmonisation"
    ]
   }
  }
 },
 {
  "id": "sam-sam-gaps",
  "platform": "sam",
  "kind": "feature",
  "side": "left",
  "hold": 0.4,
  "band": 0.66,
  "color": "#a855f7",
  "formation": {
   "kind": "emoji",
   "char": "🎯"
  },
  "copy": {
   "ar": {
    "kicker": "سَم",
    "title": "تحليل الفجوات والامتثال",
    "tagline": "سُدّ كل فجوة",
    "body": "يقيس سَم تغطية السياسات مقابل المعايير المطلوبة، ويُبرز الوثائق الناقصة، ويتابع الامتثال حتى الجاهزية الكاملة.",
    "feats": [
     "امتثال يبلغ ٩٨٪",
     "كشف فجوات التغطية",
     "الجاهزية للاعتماد"
    ]
   },
   "en": {
    "kicker": "SAM",
    "title": "Gap Analysis & Compliance",
    "tagline": "Close Every Gap",
    "body": "SAM measures policy coverage against required standards, surfaces missing documents, and tracks compliance toward full readiness.",
    "feats": [
     "98% compliance achieved",
     "Coverage gap detection",
     "Accreditation readiness"
    ]
   }
  }
 },
 {
  "id": "sam-sam-watchtower",
  "platform": "sam",
  "kind": "feature",
  "side": "right",
  "hold": 0.4,
  "band": 0.66,
  "color": "#a855f7",
  "formation": {
   "kind": "emoji",
   "char": "📡"
  },
  "copy": {
   "ar": {
    "kicker": "سَم",
    "title": "المخاطر وبرج المراقبة الحي",
    "tagline": "مخاطر تحت المراقبة الحية",
    "body": "يراقب برج المراقبة سلامة السياسات لحظياً، فيُقيّم المخاطر ويرفع الملاحظات فور بدء انحراف الامتثال.",
    "feats": [
     "مراقبة لحظية",
     "تقييم المخاطر والملاحظات",
     "تنبيهات الانحراف المبكر"
    ]
   },
   "en": {
    "kicker": "SAM",
    "title": "Risk & Live Watchtower",
    "tagline": "Risk, Watched Live",
    "body": "The watchtower monitors policy health in real time, scoring risks and raising issues the moment compliance starts to drift.",
    "feats": [
     "Real-time monitoring",
     "Risk scoring & issues",
     "Early drift alerts"
    ]
   }
  }
 },
 {
  "id": "sam-sam-drafts",
  "platform": "sam",
  "kind": "feature",
  "side": "left",
  "hold": 0.4,
  "band": 0.66,
  "color": "#a855f7",
  "formation": {
   "kind": "emoji",
   "char": "✍️"
  },
  "copy": {
   "ar": {
    "kicker": "سَم",
    "title": "مساعد الصياغة بالذكاء الاصطناعي",
    "tagline": "صُغ، واءم، اعتمد",
    "body": "يصوغ المساعد الذكي سياسات جديدة متوائمة مع المعايير ويُعيد صياغة القائمة لتتطابق معها، جاهزةً لمراجعة المجالس.",
    "feats": [
     "مسودات متوائمة مع المعايير",
     "إعادة صياغة تلقائية",
     "مخرجات جاهزة للمراجعة"
    ]
   },
   "en": {
    "kicker": "SAM",
    "title": "AI Drafting Assistant",
    "tagline": "Draft, Align, Approve",
    "body": "The AI assistant drafts new policies aligned to standards and rewrites existing ones to match, ready for council review.",
    "feats": [
     "Standard-aligned drafts",
     "Auto-rewrite to fit",
     "Review-ready output"
    ]
   }
  }
 },
 {
  "id": "sam-sam-audit",
  "platform": "sam",
  "kind": "feature",
  "side": "right",
  "hold": 0.4,
  "band": 0.66,
  "color": "#a855f7",
  "formation": {
   "kind": "emoji",
   "char": "⚖️"
  },
  "copy": {
   "ar": {
    "kicker": "سَم",
    "title": "التدقيق والمجالس وتتبع الأثر",
    "tagline": "حوكمة بالأدلة",
    "body": "تعتمد المجالس عبر مسارات موثَّقة، بينما يربط تتبع الأثر كل سياسة بخطوات الرعاية التي تحكمها، مع تقارير جاهزة للتدقيق.",
    "feats": [
     "أكثر من ١٥٠ عملية تدقيق",
     "مسارات اعتماد المجالس",
     "تتبع الأثر من السياسة للخطوة"
    ]
   },
   "en": {
    "kicker": "SAM",
    "title": "Audit, Councils & Impact Tracing",
    "tagline": "Govern with Evidence",
    "body": "Councils approve through documented workflows while impact tracing maps each policy to the care steps it governs, with audit-ready reports.",
    "feats": [
     "150+ audits completed",
     "Council approval workflows",
     "Policy-to-step impact tracing"
    ]
   }
  }
 },
 {
  "id": "imdad-intro",
  "platform": "imdad",
  "kind": "platform",
  "platformIntro": true,
  "side": "center",
  "hold": 0.36,
  "band": 0.95,
  "color": "#10b981",
  "formation": {
   "kind": "emoji",
   "char": "📦"
  },
  "logo": "brand/imdad.svg",
  "stats": [
   {
    "v": "+50K",
    "ar": "صنف",
    "en": "Items"
   },
   {
    "v": "+500",
    "ar": "مورّد",
    "en": "Suppliers"
   },
   {
    "v": "+25",
    "ar": "مستودع",
    "en": "Warehouses"
   }
  ],
  "coming": false,
  "copy": {
   "ar": {
    "kicker": "منصّة من ثيا",
    "title": "إمداد",
    "tagline": "سلاسل الإمداد الذكية",
    "body": "منصة موحّدة لسلاسل الإمداد الصحية تربط المخزون والمشتريات والمستودعات والميزانيات في مركز قيادة ذكي واحد.",
    "feats": [
     "أكثر من 50,000 صنف تحت المتابعة",
     "أكثر من 500 مورّد متصل",
     "أكثر من 25 مستودعاً مُداراً",
     "تتبّع كامل من المصدر للمريض"
    ]
   },
   "en": {
    "kicker": "A Thea platform",
    "title": "Imdad",
    "tagline": "Smart Supply Chain",
    "body": "A unified healthcare supply-chain platform connecting inventory, procurement, warehouses, and budgets under one intelligent command center.",
    "feats": [
     "50,000+ items tracked",
     "500+ connected suppliers",
     "25+ managed warehouses",
     "End-to-end traceability"
    ]
   }
  }
 },
 {
  "id": "imdad-inventory-stock-control",
  "platform": "imdad",
  "kind": "feature",
  "side": "left",
  "hold": 0.4,
  "band": 0.66,
  "color": "#10b981",
  "formation": {
   "kind": "emoji",
   "char": "📦"
  },
  "copy": {
   "ar": {
    "kicker": "إمداد",
    "title": "المخزون والرقابة على الأرصدة",
    "tagline": "كل صنف تحت الرؤية دائماً",
    "body": "تتبّع الأصناف والدفعات وتواريخ الانتهاء في كل موقع مع جرد لحظي وحدود إعادة طلب آلية وتنبيهات تمنع نفاد المخزون.",
    "feats": [
     "تتبّع الدفعات وتواريخ الصلاحية",
     "جرد لحظي وتسويات فورية",
     "حدود ذكية لإعادة الطلب"
    ]
   },
   "en": {
    "kicker": "Imdad",
    "title": "Inventory & Stock Control",
    "tagline": "Every Item, Always Visible",
    "body": "Track items, batches, and expiry across every location with live counts, automated reorder points, and zero-stockout alerts.",
    "feats": [
     "Batch & lot expiry tracking",
     "Live stock counts & adjustments",
     "Smart reorder thresholds"
    ]
   }
  }
 },
 {
  "id": "imdad-procurement-purchase-orders",
  "platform": "imdad",
  "kind": "feature",
  "side": "right",
  "hold": 0.4,
  "band": 0.66,
  "color": "#10b981",
  "formation": {
   "kind": "emoji",
   "char": "🛒"
  },
  "copy": {
   "ar": {
    "kicker": "إمداد",
    "title": "المشتريات وأوامر الشراء",
    "tagline": "من الطلب حتى الاستلام",
    "body": "حوّل طلبات الشراء إلى أوامر معتمدة، وتابع العقود والتوريدات، وطابق إيصالات الاستلام في مسار واحد منظّم.",
    "feats": [
     "مسار من الطلب إلى أمر الشراء",
     "متابعة العقود والتوريدات",
     "مطابقة إيصالات الاستلام"
    ]
   },
   "en": {
    "kicker": "Imdad",
    "title": "Procurement & Purchase Orders",
    "tagline": "From Request to Receipt",
    "body": "Turn requisitions into approved purchase orders, track contracts and deliveries, then match goods receipts in one clean flow.",
    "feats": [
     "Requisition-to-PO workflow",
     "Contract & delivery tracking",
     "Goods receipt matching"
    ]
   }
  }
 },
 {
  "id": "imdad-warehouse-supplier-network",
  "platform": "imdad",
  "kind": "feature",
  "side": "left",
  "hold": 0.4,
  "band": 0.66,
  "color": "#10b981",
  "formation": {
   "kind": "emoji",
   "char": "🏭"
  },
  "copy": {
   "ar": {
    "kicker": "إمداد",
    "title": "المستودعات وشبكة المورّدين",
    "tagline": "إدارة كل حركة بدقة",
    "body": "أدِر المناطق والأرفف والتجهيز والتخزين عبر المستودعات مع تنسيق شبكة مترابطة من المورّدين المعتمدين.",
    "feats": [
     "الأرفف والمناطق وقوائم التجهيز",
     "تخزين بدرجة حرارة مضبوطة",
     "تحويلات بين المستودعات"
    ]
   },
   "en": {
    "kicker": "Imdad",
    "title": "Warehouse & Supplier Network",
    "tagline": "Orchestrate Every Move",
    "body": "Run zones, bins, picking, and put-away across warehouses while orchestrating a connected network of qualified suppliers.",
    "feats": [
     "Bins, zones & pick-lists",
     "Temperature-controlled storage",
     "Inter-warehouse transfers"
    ]
   }
  }
 },
 {
  "id": "imdad-budget-governance-cost-centers",
  "platform": "imdad",
  "kind": "feature",
  "side": "right",
  "hold": 0.4,
  "band": 0.66,
  "color": "#10b981",
  "formation": {
   "kind": "emoji",
   "char": "💰"
  },
  "copy": {
   "ar": {
    "kicker": "إمداد",
    "title": "حوكمة الميزانيات ومراكز التكلفة",
    "tagline": "إنفاق منضبط ومحوكم",
    "body": "احكم كل ريال عبر ميزانيات الأقسام ومراكز التكلفة ومطابقة الفواتير واعتمادات توقف تجاوز الإنفاق قبل وقوعه.",
    "feats": [
     "متابعة ميزانيات الأقسام",
     "توزيع على مراكز التكلفة",
     "مطابقة الفواتير والمدفوعات"
    ]
   },
   "en": {
    "kicker": "Imdad",
    "title": "Budget Governance & Cost Centers",
    "tagline": "Spend With Discipline",
    "body": "Govern every riyal with department budgets, cost centers, invoice matching, and approvals that stop overspend before it happens.",
    "feats": [
     "Department budget tracking",
     "Cost-center allocation",
     "Invoice & payment matching"
    ]
   }
  }
 },
 {
  "id": "imdad-vendor-quality-sfda-compliance",
  "platform": "imdad",
  "kind": "feature",
  "side": "left",
  "hold": 0.4,
  "band": 0.66,
  "color": "#10b981",
  "formation": {
   "kind": "emoji",
   "char": "🛡️"
  },
  "copy": {
   "ar": {
    "kicker": "إمداد",
    "title": "جودة المورّدين والامتثال للهيئة",
    "tagline": "موثوق وآمن وممتثل",
    "body": "دقّق المورّدين، وأدِر سحب المنتجات وتقارير عدم المطابقة، واحفظ الشهادات وسجلات الهيئة جاهزة للتفتيش في أي لحظة.",
    "feats": [
     "تدقيق المورّدين وعمليات الفحص",
     "إدارة السحب وعدم المطابقة",
     "سجلات الهيئة والشهادات"
    ]
   },
   "en": {
    "kicker": "Imdad",
    "title": "Vendor Quality & SFDA Compliance",
    "tagline": "Trusted, Safe, Compliant",
    "body": "Audit vendors, manage recalls and NCRs, and keep certificates and SFDA logs ready for inspection at any moment.",
    "feats": [
     "Vendor audits & inspections",
     "Recall & NCR management",
     "SFDA logs & certificates"
    ]
   }
  }
 },
 {
  "id": "imdad-command-center-analytics-simulation",
  "platform": "imdad",
  "kind": "feature",
  "side": "right",
  "hold": 0.4,
  "band": 0.66,
  "color": "#10b981",
  "formation": {
   "kind": "emoji",
   "char": "🛰️"
  },
  "copy": {
   "ar": {
    "kicker": "إمداد",
    "title": "مركز القيادة والتحليلات",
    "tagline": "راقب، حاكِ، قرّر",
    "body": "غرفة عمليات حيّة تقرأ إشارات الإمداد ومؤشرات الضغط، وتحاكي السيناريوهات، وتقترح قرارات استباقية قبل وقوع الاضطراب.",
    "feats": [
     "إشارات الإمداد ومؤشرات الضغط لحظياً",
     "محرّك محاكاة السيناريوهات",
     "تنبيهات القرارات الاستباقية"
    ]
   },
   "en": {
    "kicker": "Imdad",
    "title": "Command Center & Analytics",
    "tagline": "See, Simulate, Decide",
    "body": "A live war-room reads supply signals and pressure, simulates scenarios, and surfaces autonomous decisions before disruptions hit.",
    "feats": [
     "Live supply signals & pressure",
     "Scenario simulation engine",
     "Autonomous decision alerts"
    ]
   }
  }
 },
 {
  "id": "cvision-intro",
  "platform": "cvision",
  "kind": "platform",
  "platformIntro": true,
  "side": "center",
  "hold": 0.36,
  "band": 0.95,
  "color": "#f97316",
  "formation": {
   "kind": "emoji",
   "char": "🧭"
  },
  "logo": "brand/cvision-dark.svg",
  "stats": [
   {
    "v": "+10K",
    "ar": "موظف",
    "en": "Employees"
   },
   {
    "v": "+89",
    "ar": "وحدة",
    "en": "Modules"
   },
   {
    "v": "+4",
    "ar": "تكامل",
    "en": "Integrations"
   }
  ],
  "coming": false,
  "copy": {
   "ar": {
    "kicker": "منصّة من ثيا",
    "title": "سي فيجن",
    "tagline": "إدارة شؤون الموظفين",
    "body": "منصة موارد بشرية واحدة تدير دورة حياة الموظف بالكامل، مهيأة لأنظمة العمل والامتثال الحكومي في السعودية.",
    "feats": [
     "إدارة أكثر من 10,000 موظف",
     "أكثر من 89 وحدة موارد بشرية متكاملة",
     "مبنية للامتثال السعودي",
     "تكامل مع التأمينات ومقيم"
    ]
   },
   "en": {
    "kicker": "A Thea platform",
    "title": "C-Vision",
    "tagline": "Employee Lifecycle Management",
    "body": "One workforce platform that runs the entire employee lifecycle, localized for Saudi labor and government compliance.",
    "feats": [
     "10,000+ employees managed",
     "89+ integrated HR modules",
     "Built for Saudi compliance",
     "GOSI & Muqeem integrations"
    ]
   }
  }
 },
 {
  "id": "cvision-cvision-employees-org",
  "platform": "cvision",
  "kind": "feature",
  "side": "left",
  "hold": 0.4,
  "band": 0.66,
  "color": "#f97316",
  "formation": {
   "kind": "emoji",
   "char": "🏢"
  },
  "copy": {
   "ar": {
    "kicker": "سي فيجن",
    "title": "الموظفون والهيكل التنظيمي",
    "tagline": "قوة عملك في صورة واحدة",
    "body": "دليل موظفين موحّد ومخطط تنظيمي حيّ يحافظ على دقة الدرجات والمناصب وخطوط الإشراف في كل الفروع.",
    "feats": [
     "دليل موظفين موحّد",
     "مخطط تنظيمي ودرجات وظيفية حيّة",
     "المناصب والمسميات الوظيفية",
     "تصميم الفروع والإدارات"
    ]
   },
   "en": {
    "kicker": "C-Vision",
    "title": "Employees & Org Structure",
    "tagline": "Your Workforce, Mapped",
    "body": "A single employee directory and live org chart that keep grades, positions, and reporting lines accurate across every branch.",
    "feats": [
     "Unified employee directory",
     "Live org chart & grades",
     "Positions & job titles",
     "Branch & department design"
    ]
   }
  }
 },
 {
  "id": "cvision-cvision-attendance-payroll",
  "platform": "cvision",
  "kind": "feature",
  "side": "right",
  "hold": 0.4,
  "band": 0.66,
  "color": "#f97316",
  "formation": {
   "kind": "emoji",
   "char": "💳"
  },
  "copy": {
   "ar": {
    "kicker": "سي فيجن",
    "title": "الحضور والرواتب",
    "tagline": "من البصمة إلى الراتب",
    "body": "حضور بالبصمة وكشوف دوام تتدفق مباشرة إلى رواتب جاهزة للتأمينات وصرف عبر البطاقات دون إعادة إدخال.",
    "feats": [
     "الحضور بالبصمة",
     "كشوف الدوام والجداول",
     "رواتب جاهزة للتأمينات",
     "صرف عبر البطاقات والآيبان"
    ]
   },
   "en": {
    "kicker": "C-Vision",
    "title": "Attendance & Payroll",
    "tagline": "From Clock-In to Payslip",
    "body": "Biometric attendance and timesheets flow straight into GOSI-ready payroll and paycard disbursement without re-keying.",
    "feats": [
     "Biometric attendance",
     "Timesheets & schedules",
     "GOSI-ready payroll",
     "Paycards & IBAN payout"
    ]
   }
  }
 },
 {
  "id": "cvision-cvision-recruitment-onboarding",
  "platform": "cvision",
  "kind": "feature",
  "side": "left",
  "hold": 0.4,
  "band": 0.66,
  "color": "#f97316",
  "formation": {
   "kind": "emoji",
   "char": "🎯"
  },
  "copy": {
   "ar": {
    "kicker": "سي فيجن",
    "title": "التوظيف والالتحاق",
    "tagline": "وظّف وجهّز بسرعة",
    "body": "تابع المرشحين من نشر الوظيفة إلى توقيع العرض، ثم نفّذ التحاقاً منظّماً ليبدأ الموظف الجديد جاهزاً.",
    "feats": [
     "نشر الوظائف وقمع التوظيف",
     "بوابة العروض والخطابات",
     "التحاق منظّم",
     "إنهاء خدمة سلس"
    ]
   },
   "en": {
    "kicker": "C-Vision",
    "title": "Recruitment & Onboarding",
    "tagline": "Hire and Onboard Faster",
    "body": "Track candidates from job posting to signed offer, then run structured onboarding so new hires start ready.",
    "feats": [
     "Job posting & pipeline",
     "Offer portal & letters",
     "Structured onboarding",
     "Smooth offboarding"
    ]
   }
  }
 },
 {
  "id": "cvision-cvision-leaves-performance",
  "platform": "cvision",
  "kind": "feature",
  "side": "right",
  "hold": 0.4,
  "band": 0.66,
  "color": "#f97316",
  "formation": {
   "kind": "emoji",
   "char": "📈"
  },
  "copy": {
   "ar": {
    "kicker": "سي فيجن",
    "title": "الإجازات والأداء والإحلال",
    "tagline": "طوّر واحتفظ بالكفاءات",
    "body": "إجازات بالخدمة الذاتية وتقييمات قائمة على الأهداف وخطط إحلال تبقي الفرق مسؤولة وجاهزة للخطوة التالية.",
    "feats": [
     "إجازات بالخدمة الذاتية",
     "الأهداف والتقييمات",
     "تخطيط الإحلال الوظيفي",
     "الترقيات والدرجات"
    ]
   },
   "en": {
    "kicker": "C-Vision",
    "title": "Leaves, Performance & Succession",
    "tagline": "Grow and Retain Talent",
    "body": "Self-service leaves, OKR-driven appraisals, and succession plans keep teams accountable and ready for the next step.",
    "feats": [
     "Self-service leaves",
     "OKRs & appraisals",
     "Succession planning",
     "Promotions & grades"
    ]
   }
  }
 },
 {
  "id": "cvision-cvision-engagement-training",
  "platform": "cvision",
  "kind": "feature",
  "side": "left",
  "hold": 0.4,
  "band": 0.66,
  "color": "#f97316",
  "formation": {
   "kind": "emoji",
   "char": "🌱"
  },
  "copy": {
   "ar": {
    "kicker": "سي فيجن",
    "title": "التدريب والتفاعل والتقدير",
    "tagline": "فريق يبقى ويزدهر",
    "body": "مسارات تدريب واستبيانات نبض ومكافآت تقدير تبني ثقافة تحافظ على تفاعل أفضل كوادرك.",
    "feats": [
     "التدريب والتطوير",
     "استبيانات النبض",
     "التقدير والمكافآت",
     "الثقافة والعافية"
    ]
   },
   "en": {
    "kicker": "C-Vision",
    "title": "Training, Engagement & Recognition",
    "tagline": "A Workforce That Stays",
    "body": "Training paths, pulse surveys, and recognition rewards build a culture that keeps your best people engaged.",
    "feats": [
     "Training & development",
     "Pulse surveys",
     "Recognition & rewards",
     "Culture & wellness"
    ]
   }
  }
 },
 {
  "id": "cvision-cvision-gov-analytics",
  "platform": "cvision",
  "kind": "feature",
  "side": "right",
  "hold": 0.4,
  "band": 0.66,
  "color": "#f97316",
  "formation": {
   "kind": "emoji",
   "char": "📊"
  },
  "copy": {
   "ar": {
    "kicker": "سي فيجن",
    "title": "الامتثال السعودي وتحليلات الموارد",
    "tagline": "امتثال مدمج بالأساس",
    "body": "تكامل أصيل مع مقيم والتأمينات والتأمين الطبي يبقى متزامناً، وتحليلات تنبؤية تكشف مخاطر الاستقالة والقوى العاملة.",
    "feats": [
     "مزامنة مقيم وأبشر",
     "التأمينات والتأمين الطبي",
     "تنبؤ بمخاطر الاستقالة",
     "لوحات تحليلات القوى العاملة"
    ]
   },
   "en": {
    "kicker": "C-Vision",
    "title": "Saudi Compliance & HR Analytics",
    "tagline": "Compliant by Default",
    "body": "Native Muqeem, GOSI, and insurance integrations stay in sync while predictive analytics surface attrition and headcount risk.",
    "feats": [
     "Muqeem & Absher sync",
     "GOSI & medical insurance",
     "Predictive attrition risk",
     "Workforce BI dashboards"
    ]
   }
  }
 },
 {
  "id": "edrac-intro",
  "platform": "edrac",
  "kind": "platform",
  "platformIntro": true,
  "side": "center",
  "hold": 0.36,
  "band": 0.95,
  "color": "#34d399",
  "formation": {
   "kind": "emoji",
   "char": "🧠"
  },
  "logo": "brand/edrac.png",
  "stats": [
   {
    "v": "97%",
    "ar": "دقّة",
    "en": "Accuracy"
   },
   {
    "v": "+25",
    "ar": "نموذج",
    "en": "Models"
   }
  ],
  "coming": true,
  "copy": {
   "ar": {
    "kicker": "منصّة من ثيا",
    "title": "إدراك",
    "tagline": "الذكاء السريري — قريباً",
    "body": "تشخيص مدعوم بالذكاء الاصطناعي وتحليلات تنبؤية ودعم للقرار السريري يعزّز كل قرار علاجي عند نقطة الرعاية.",
    "feats": [
     "التشخيص بالذكاء الاصطناعي",
     "التحليلات التنبؤية",
     "دعم القرار السريري"
    ]
   },
   "en": {
    "kicker": "A Thea platform",
    "title": "EDRAC",
    "tagline": "AI Clinical Intelligence — Coming soon",
    "body": "AI-powered diagnostics, predictive analytics and clinical decision support that sharpen every care decision at the point of care.",
    "feats": [
     "AI Diagnostics",
     "Predictive Analytics",
     "Clinical Decision Support"
    ]
   }
  }
 },
 {
  "id": "finale",
  "group": "cta",
  "weight": "finale",
  "side": "center",
  "hold": 0.34,
  "depth": 0.45,
  "color": "#1fd6c5",
  "band": 1.0,
  "formation": {
   "kind": "primitive",
   "shape": "heart"
  },
  "copy": {
   "ar": {
    "kicker": "جاهزون لك",
    "title": "شاهد ثيا\nعلى أرض الواقع",
    "tagline": "احجز عرضاً تجريبياً مخصّصاً",
    "body": "نظام واحد يتدفّق مع رحلة المريض كاملة — من أول حجز إلى آخر فاتورة.",
    "feats": [
     "thea@thea.com.sa"
    ]
   },
   "en": {
    "kicker": "Ready when you are",
    "title": "See Thea\nin action",
    "tagline": "Book a tailored demo",
    "body": "One system that flows with the entire patient journey — from first booking to final invoice.",
    "feats": [
     "thea@thea.com.sa"
    ]
   }
  },
  "cta": true,
  "platform": "cta"
 }
];
