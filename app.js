/* ============================================================
   THEA — Marketing site logic
   i18n · data-driven rendering · tailored visuals · canvas bg
   ============================================================ */

/* ---------- Icon library (Lucide-style stroke paths) ---------- */
const I = {
  clipboard:'<path d="M9 3h6v3H9zM9 4H6a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3"/>',
  stethoscope:'<path d="M4 3v6a4 4 0 0 0 8 0V3M5 3H3m5 0h-1m1 14a4 4 0 0 0 8 0v-2"/><circle cx="20" cy="13" r="2"/>',
  beaker:'<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3M6.5 14h11"/>',
  pill:'<path d="m10.5 20.5-7-7a4.95 4.95 0 0 1 7-7l7 7a4.95 4.95 0 0 1-7 7zM8.5 8.5l7 7"/>',
  bed:'<path d="M3 7v12M3 13h18a0 0 0 0 1 0 0v6M21 19v-6a2 2 0 0 0-2-2h-7v6M7 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>',
  wallet:'<path d="M3 7a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v2M3 7v10a2 2 0 0 0 2 2h14a1 1 0 0 0 1-1v-3M3 7h16M16 12h5v4h-5a2 2 0 0 1 0-4z"/>',
  activity:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  scissors:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12"/>',
  microscope:'<path d="M6 18h8M3 22h18M14 22a7 7 0 1 0 0-14h-1M9 14h2M9 12a2 2 0 0 1-2-2V6h4v4a2 2 0 0 1-2 2zM12 6 8.5 2.5"/>',
  scan:'<path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M7 12h10"/>',
  baby:'<path d="M9 12h.01M15 12h.01M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5M19 6.3a9 9 0 0 1-14 0M12 3v2"/><circle cx="12" cy="13" r="9"/>',
  brain:'<path d="M9.5 2a2.5 2.5 0 0 0-2.5 2.5c-1.4 0-2.5 1.1-2.5 2.5 0 .5.1.9.3 1.3A2.5 2.5 0 0 0 4 10.5c0 1 .6 1.9 1.5 2.3M9.5 2A2.5 2.5 0 0 1 12 4.5v15M9.5 22A2.5 2.5 0 0 1 7 19.5M14.5 2A2.5 2.5 0 0 1 17 4.5c1.4 0 2.5 1.1 2.5 2.5 0 .5-.1.9-.3 1.3a2.5 2.5 0 0 1 .8 1.9"/>',
  ribbon:'<path d="M12 11.5 7 21l5-3 5 3-5-9.5M12 2a5 5 0 0 0 0 10 5 5 0 0 0 0-10z"/>',
  tooth:'<path d="M12 5.5c-2-2-5-2-6.5 0C4 7.5 4 11 5 15c.7 2.8 1 5 2.5 5s1.5-3 2-5c.3-1.2.7-1.5 2.5-1.5s2.2.3 2.5 1.5c.5 2 .5 5 2 5s1.8-2.2 2.5-5c1-4 1-7.5-.5-9.5-1.5-2-4.5-2-6.5 0z"/>',
  droplet:'<path d="M12 2.7s6 5.3 6 10.3a6 6 0 0 1-12 0c0-5 6-10.3 6-10.3z"/>',
  video:'<path d="M3 7a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM16 9l5-3v12l-5-3"/>',
  dumbbell:'<path d="M6.5 6.5 17.5 17.5M3 9l1.5-1.5M21 15l-1.5 1.5M5.5 11 3 8.5 4.5 7 7 9.5M19 13l2.5 2.5L20 17l-2.5-2.5M14.5 5.5 17 8M7 16l2.5 2.5"/>',
  bandage:'<path d="m9 14 1-1M14 9l1-1M5.5 11.5 11.5 5.5a4 4 0 1 1 5.6 5.6l-6 6a4 4 0 1 1-5.6-5.6z"/><circle cx="12" cy="12" r=".5"/>',
  apple:'<path d="M12 7c-1-2-3-3-5-2-2.5 1.2-3 5 0 9 1.2 1.6 2 3 3.5 3s1.5-1 3-1 1.5 1 3 1 2.3-1.4 3.5-3c1-1.4 1.5-3 1.3-4.3M12 7c0-2 1-3.5 3-4M12 7c1-2 3-3 5-2"/>',
  handshake:'<path d="m11 17 2 2a1 1 0 0 0 1.4 0l4-4M14 7l-2.6 2.6a1 1 0 0 0 0 1.4l.6.6a1 1 0 0 0 1.4 0L17 9l4 4M3 9l4-4 5 5M3 9l4 4M21 13V7a2 2 0 0 0-2-2h-4"/>',
  share:'<circle cx="6" cy="12" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="m8.6 10.6 6.8-3.2M8.6 13.4l6.8 3.2"/>',
  book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4a1 1 0 0 0-1-1H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
  refresh:'<path d="M21 12a9 9 0 1 1-3-6.7L21 8M21 3v5h-5"/>',
  fileText:'<path d="M14 3v5h5M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM8 13h8M8 17h8M8 9h2"/>',
  briefcase:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/>',
  smartphone:'<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>',
  database:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  plug:'<path d="M12 22v-5M9 7V2M15 7V2M7 7h10v3a5 5 0 0 1-10 0z"/>',
  shield:'<path d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5z"/><path d="m9 12 2 2 4-4"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z"/>',
  sparkles:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9zM5 4l.6 1.4L7 6l-1.4.6L5 8l-.6-1.4L3 6l1.4-.6z"/>',
  barChart:'<path d="M3 3v18h18M8 17V9M13 17V5M18 17v-6"/>',
  check:'<path d="m20 6-11 11-5-5"/>',
  shieldCheck:'<path d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5z"/><path d="m9 12 2 2 4-4"/>',
  package:'<path d="M12 2 3 7v10l9 5 9-5V7zM3 7l9 5 9-5M12 12v10"/>',
  wrench:'<path d="M14.7 6.3a4 4 0 0 0-5.4 5.3L3 18v3h3l6.4-6.3a4 4 0 0 0 5.3-5.4l-2.5 2.5-2.1-2.1z"/>',
  users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  smile:'<circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>',
  award:'<circle cx="12" cy="8" r="6"/><path d="m8.2 13.4-1.2 8 5-3 5 3-1.2-8"/>',
  alertTriangle:'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/>',
  swap:'<path d="m17 3 4 4-4 4M21 7H7M7 21l-4-4 4-4M3 17h14"/>',
  truck:'<path d="M3 6a1 1 0 0 1 1-1h10v11H3zM14 8h4l3 3v4h-7M7 18a2 2 0 1 0 0 .1M17 18a2 2 0 1 0 0 .1"/>',
  cloudOff:'<path d="m2 2 20 20M5.8 5.8A6 6 0 0 0 8 17h9a4 4 0 0 0 1.3-7.8M9 5a6 6 0 0 1 8.5 5.5"/>',
  list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  inbox:'<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.5 5.1 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.5-6.9A2 2 0 0 0 16.8 4H7.2a2 2 0 0 0-1.7 1.1z"/>',
  calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
  syringe:'<path d="m18 2 4 4M17 3l4 4M19 5 9.5 14.5M14 7l-9 9-3 3 3-3M9 12l3 3M6 15l3 3"/>',
  network:'<rect x="9" y="2" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="16" y="16" width="6" height="6" rx="1"/><path d="M12 8v4M5 16v-2h14v2M12 12v2"/>',
  heart:'<path d="M20.8 5.6a5.5 5.5 0 0 0-7.8 0L12 6.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 22l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>',
};
const svg = (name, cls='') => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${I[name]||''}</svg>`;

/* ---------- Static UI strings ---------- */
const T = {
  navCta:        { ar: 'تواصل معنا', en: 'Get in touch' },
  heroEyebrow:   { ar: 'نظام معلومات المستشفيات المتكامل', en: 'Unified Hospital Information System' },
  heroTitle:     { ar: 'منصة <span class="grad">ثيا</span> الصحية.<br>رحلة المريض كاملة في نظام واحد.', en: '<span class="grad">Thea</span> Health.<br>The entire patient journey, one platform.' },
  heroSub:       { ar: 'من العيادة والطوارئ والتنويم، إلى المختبر والأشعة والصيدلة والفوترة والموارد البشرية — منظومة سريرية وإدارية واحدة، عربية أولاً ومتوافقة مع NPHIES.', en: 'From clinics, emergency and inpatient care to labs, imaging, pharmacy, billing and HR — one clinical and administrative system, Arabic-first and NPHIES-ready.' },
  heroPrimary:   { ar: 'استكشف المنصات', en: 'Explore platforms' },
  heroSecondary: { ar: 'رحلة المريض', en: 'Patient journey' },

  journeyKicker: { ar: 'تجربة موحّدة', en: 'One continuum' },
  journeyTitle:  { ar: 'رحلة واحدة، بلا فواصل', en: 'One seamless journey' },
  journeyDesc:   { ar: 'كل خطوة من رحلة المريض مترابطة — سجل موحّد واحد يتدفق عبر كل الأقسام دون إعادة إدخال.', en: 'Every step of the patient journey is connected — one unified record flowing across all departments, no re-entry.' },

  coreKicker:    { ar: 'المنصات السريرية', en: 'Clinical platforms' },
  coreTitle:     { ar: 'منصات الرعاية الأساسية', en: 'The core care platforms' },
  coreDesc:      { ar: 'سبع منصات سريرية أساسية، كل واحدة مصمّمة لطبيعة عملها — بتدفقات ولوحات تناسب القسم.', en: 'Seven core clinical platforms, each engineered for its own workflow — with screens built for the department.' },

  specKicker:    { ar: 'التخصصات', en: 'Specialties' },
  specTitle:     { ar: 'تخصّصات ووحدات سريرية', en: 'Specialty clinical modules' },
  specDesc:      { ar: 'وحدات متخصّصة جاهزة للتفعيل حسب احتياج المنشأة، بمعايير وبروتوكولات كل تخصص.', en: 'Specialty modules you can switch on as needed, each with its own protocols and standards.' },

  entKicker:     { ar: 'منصات المؤسسة', en: 'Enterprise platforms' },
  entTitle:      { ar: 'ما وراء السرير', en: 'Beyond the bedside' },
  entDesc:       { ar: 'الإيرادات، الوثائق، الموارد البشرية، وبوابة المريض — أنظمة مؤسسية متكاملة ضمن ثيا نفسها.', en: 'Revenue, documents, workforce and the patient portal — full enterprise systems built into Thea itself.' },

  opsKicker:     { ar: 'العمليات والجودة', en: 'Operations & quality' },
  opsTitle:      { ar: 'تشغيل المستشفى من الخلف', en: 'Running the hospital behind the scenes' },
  opsDesc:       { ar: 'الوحدات التشغيلية التي تبقي المنشأة آمنة وممتثلة وفعّالة على مدار الساعة.', en: 'The operational modules that keep the facility safe, compliant and efficient around the clock.' },

  infraKicker:   { ar: 'المنصّة', en: 'The platform' },
  infraTitle:    { ar: 'مبنية للمؤسسات الصحية', en: 'Built for healthcare enterprises' },
  infraDesc:     { ar: 'الأساس التقني الذي تقوم عليه كل وحدة — أمان، تكامل، وتعدّد مستأجرين بمعايير عالمية.', en: 'The technical foundation under every module — security, interoperability and multi-tenancy at enterprise grade.' },

  ctaTitle:      { ar: 'جاهزون لرؤية ثيا على أرض الواقع؟', en: 'Ready to see Thea in action?' },
  ctaDesc:       { ar: 'احجز عرضاً تجريبياً مخصّصاً لمنشأتك، ودعنا نريك كيف تتدفق رحلة المريض في نظام واحد.', en: 'Book a tailored demo for your facility and see the entire patient journey flow through one system.' },
  ctaPrimary:    { ar: 'اطلب عرضاً تجريبياً', en: 'Request a demo' },
  ctaSecondary:  { ar: 'العودة للأعلى', en: 'Back to top' },
  ctaMeta:       { ar: 'thea@thea.com.sa · متوافق مع NPHIES · عربي وإنجليزي', en: 'thea@thea.com.sa · NPHIES-ready · Arabic & English' },

  footerLine:    { ar: 'ثيا — نظام معلومات صحية متكامل، مصمّم للمنشآت الصحية في المملكة والمنطقة.', en: 'Thea — a unified health information system, built for healthcare facilities across the region.' },
};

/* ---------- Nav links ---------- */
const NAV = [
  { href: '#journey',     ar: 'الرحلة',      en: 'Journey' },
  { href: '#platforms',   ar: 'المنصات',     en: 'Platforms' },
  { href: '#specialties', ar: 'التخصصات',    en: 'Specialties' },
  { href: '#enterprise',  ar: 'المؤسسة',     en: 'Enterprise' },
  { href: '#infra',       ar: 'المنصّة',      en: 'Platform' },
];

/* ---------- Stats ---------- */
const STATS = [
  { num: '77+',    ar: 'وحدة متكاملة',         en: 'Integrated modules' },
  { num: '20+',    ar: 'تخصص سريري',           en: 'Clinical specialties' },
  { num: '2',      ar: 'لغتان كاملتان · RTL',   en: 'Fully bilingual' },
  { num: 'NPHIES', ar: 'متوافق · FHIR · HL7',  en: 'Standards-ready' },
];

/* ---------- Trust strip ---------- */
const TRUST = [
  { icon:'shieldCheck', ar:'متوافق مع NPHIES', en:'NPHIES Ready' },
  { icon:'network',     ar:'FHIR / HL7',        en:'FHIR / HL7' },
  { icon:'award',       ar:'متوافق مع CBAHI',   en:'CBAHI Compliant' },
  { icon:'briefcase',   ar:'مرتبط بالتأمينات GOSI', en:'GOSI Integrated' },
  { icon:'database',    ar:'تعدّد مستأجرين',    en:'Multi-tenant' },
  { icon:'globe',       ar:'عربي أولاً (RTL)',  en:'Arabic-first (RTL)' },
  { icon:'scan',        ar:'DICOM / PACS',      en:'DICOM / PACS' },
  { icon:'shield',      ar:'صلاحيات دقيقة',     en:'Role-based access' },
  { icon:'fileText',    ar:'سجل تدقيق كامل',    en:'Full audit trail' },
  { icon:'sparkles',    ar:'مدعوم بالذكاء',     en:'AI-assisted' },
];

/* ---------- Journey ---------- */
const JOURNEY = [
  { icon:'clipboard',  ar:'التسجيل',          en:'Registration', dAr:'سجل مرضى موحّد', dEn:'Unified master record' },
  { icon:'stethoscope',ar:'العيادة / الطوارئ', en:'Clinic / ER',  dAr:'فرز وكشف وتقييم',  dEn:'Triage & encounter' },
  { icon:'beaker',     ar:'التشخيص',          en:'Diagnostics',  dAr:'مختبر وأشعة',     dEn:'Lab & imaging' },
  { icon:'pill',       ar:'العلاج',           en:'Treatment',    dAr:'أوامر وصيدلة',     dEn:'Orders & pharmacy' },
  { icon:'bed',        ar:'التنويم / العمليات', en:'Admission / OR', dAr:'أسرّة وجراحة',  dEn:'Beds & surgery' },
  { icon:'wallet',     ar:'الفوترة والخروج',   en:'Billing',      dAr:'مطالبات وخروج',   dEn:'Claims & discharge' },
];

/* ---------- Core clinical pillars (with tailored visuals) ---------- */
const PILLARS = [
  {
    icon:'stethoscope', color:'var(--teal)', visual:'opd',
    ar:'العيادات الخارجية', en:'Outpatient · OPD',
    tagAr:'العيادات', tagEn:'OPD',
    descAr:'إدارة كاملة للرعاية الخارجية: من الحجز والتسجيل إلى محطة التمريض وقائمة عمل الطبيب.',
    descEn:'End-to-end outpatient care, from booking and registration to the nurse station and doctor worklist.',
    feats:[
      {ar:'حجز إلكتروني ومراجعون بلا موعد', en:'Online booking & walk-ins'},
      {ar:'محطة التمريض والعلامات الحيوية والفرز', en:'Nurse station, vitals & triage'},
      {ar:'قائمة عمل الطبيب وملاحظات الزيارة', en:'Doctor worklist & visit notes'},
      {ar:'لوحة الانتظار والإحصاء اليومي', en:'Live queue & daily census'},
    ],
  },
  {
    icon:'activity', color:'var(--rose)', visual:'er',
    ar:'الطوارئ', en:'Emergency · ER',
    tagAr:'الطوارئ', tagEn:'ER',
    descAr:'منصة طوارئ عالية الحدة بفرز ESI، لوحة متابعة لحظية، ومركز قيادة للكوارث والإصابات الجماعية.',
    descEn:'High-acuity emergency platform with ESI triage, a live tracking board and a command center for mass-casualty events.',
    feats:[
      {ar:'فرز ESI من خمسة مستويات', en:'5-level ESI triage'},
      {ar:'لوحة متابعة حيّة للأسرّة والحالات', en:'Live patient & bed tracking board'},
      {ar:'مركز قيادة وإصابات جماعية (MCI)', en:'Command center & mass-casualty (MCI)'},
      {ar:'تنبيهات القيم الحرجة والتصعيد', en:'Critical-value alerts & escalation'},
    ],
  },
  {
    icon:'bed', color:'var(--indigo)', visual:'beds',
    ar:'التنويم والعناية المركزة', en:'Inpatient & ICU',
    tagAr:'التنويم', tagEn:'IPD / ICU',
    descAr:'إدارة التنويم والعناية الحرجة: أسرّة حيّة، حلقات تنويم، مقاييس شدّة، وحزم إنذار مبكر.',
    descEn:'Inpatient and critical-care management: live beds, admission episodes, severity scoring and early-warning bundles.',
    feats:[
      {ar:'أسرّة حيّة وحلقات التنويم', en:'Live beds & admission episodes'},
      {ar:'مقاييس APACHE والتركين والهذيان', en:'APACHE, sedation & delirium scoring'},
      {ar:'حزم الإنتان والالتهاب الرئوي (VAP)', en:'Sepsis & VAP bundle compliance'},
      {ar:'كود أزرق والاستجابة السريعة', en:'Code Blue & rapid response'},
    ],
  },
  {
    icon:'scissors', color:'var(--violet)', visual:'or',
    ar:'غرف العمليات', en:'Operating Rooms',
    tagAr:'العمليات', tagEn:'OR',
    descAr:'إدارة الحالات الجراحية من التقييم قبل التخدير إلى ملاحظات العملية وأوامر ما بعد الجراحة.',
    descEn:'Surgical case management from pre-op clearance to operative notes and post-op orders.',
    feats:[
      {ar:'جدول العمليات المرئي', en:'Visual surgery schedule board'},
      {ar:'تقييم وتجهيز ما قبل التخدير', en:'Pre-op assessment & clearance'},
      {ar:'ملاحظات العملية وأوامر التعافي', en:'Operative notes & post-op orders'},
      {ar:'تتبع حالة العملية لحظياً', en:'Real-time case tracking'},
    ],
  },
  {
    icon:'beaker', color:'var(--cyan)', visual:'lab',
    ar:'المختبر', en:'Laboratory · LIS',
    tagAr:'المختبر', tagEn:'LAB',
    descAr:'نظام معلومات مختبري كامل: استقبال العينات، التحقق التلقائي، الأحياء الدقيقة، والتنبيهات الحرجة.',
    descEn:'A complete laboratory information system: specimen intake, auto-validation, microbiology and critical alerts.',
    feats:[
      {ar:'استقبال العينات وتتبع الباركود', en:'Specimen intake & barcode tracking'},
      {ar:'التحقق التلقائي والمدى المرجعي', en:'Auto-validation & reference ranges'},
      {ar:'الأحياء الدقيقة والحساسية', en:'Microbiology & susceptibility'},
      {ar:'تنبيهات حرجة وزمن الإنجاز (TAT)', en:'Critical alerts & TAT metrics'},
      {ar:'ربط الأجهزة والمحلّلات (LIS)', en:'Analyzer (LIS) integration'},
    ],
  },
  {
    icon:'scan', color:'var(--cyan)', visual:'dicom',
    ar:'الأشعة', en:'Radiology · PACS',
    tagAr:'الأشعة', tagEn:'RAD',
    descAr:'إدارة التصوير الطبي بعارض DICOM متكامل، تقارير مهيكلة، وتنبيهات للنتائج الحرجة.',
    descEn:'Medical imaging with a built-in DICOM viewer, structured reporting and critical-findings alerts.',
    feats:[
      {ar:'عارض DICOM متكامل', en:'Built-in DICOM viewer'},
      {ar:'تقارير مهيكلة وبروتوكولات', en:'Structured, protocol-based reporting'},
      {ar:'تنبيهات النتائج الحرجة العاجلة', en:'Critical-findings alerts'},
      {ar:'قوائم عمل الفنّي والأخصائي', en:'Technologist & radiologist worklists'},
    ],
  },
  {
    icon:'pill', color:'var(--emerald)', visual:'pharm',
    ar:'الصيدلة', en:'Pharmacy',
    tagAr:'الصيدلة', tagEn:'RX',
    descAr:'عمليات صيدلية متكاملة: المخزون، الصرف، تحضير الوريديات، خزائن الصرف الآلي، والمواد الخاضعة للرقابة.',
    descEn:'Full pharmacy operations: inventory, dispensing, IV admixture, automated cabinets and controlled substances.',
    feats:[
      {ar:'المخزون ونقاط إعادة الطلب', en:'Inventory & reorder points'},
      {ar:'الصرف والجرعات الموحّدة', en:'Dispensing & unit-dose'},
      {ar:'تحضير الوريديات (IV)', en:'IV admixture preparation'},
      {ar:'خزائن الصرف الآلي (ADC)', en:'Automated dispensing cabinets'},
      {ar:'المواد الخاضعة للرقابة', en:'Controlled-substance tracking'},
    ],
  },
];

/* ---------- Specialty chips ---------- */
const SPECIALTIES = [
  { icon:'baby',       ar:'النساء والتوليد', en:'OB / GYN',      dAr:'الحمل والولادة وحديثي الولادة', dEn:'Antenatal, L&D & newborn' },
  { icon:'ribbon',     ar:'الأورام',         en:'Oncology',      dAr:'بروتوكولات العلاج وتصنيف TNM',  dEn:'Protocols, TNM & CTCAE' },
  { icon:'brain',      ar:'الطب النفسي',     en:'Psychiatry',    dAr:'تقييم الخطورة وفحص الحالة العقلية', dEn:'Risk & mental-status exams' },
  { icon:'tooth',      ar:'الأسنان',         en:'Dental',        dAr:'الرسم السنّي وخطط العلاج',      dEn:'Charting & treatment plans' },
  { icon:'droplet',    ar:'بنك الدم',        en:'Blood Bank',    dAr:'التطابق وإدارة المشتقات',       dEn:'Crossmatch & inventory' },
  { icon:'microscope', ar:'علم الأمراض',     en:'Pathology',     dAr:'الخزعات والتشخيص النسيجي',      dEn:'Biopsy & histopathology' },
  { icon:'video',      ar:'الطب عن بُعد',     en:'Telemedicine',  dAr:'استشارات وزيارات افتراضية',     dEn:'Virtual consults & visits' },
  { icon:'dumbbell',   ar:'العلاج الطبيعي',  en:'Physiotherapy', dAr:'إعادة التأهيل وخطط العلاج',     dEn:'Rehab & therapy plans' },
  { icon:'bandage',    ar:'العناية بالجروح', en:'Wound Care',    dAr:'تقييم وتتبع التئام الجروح',      dEn:'Wound assessment & healing' },
  { icon:'apple',      ar:'التغذية',         en:'Nutrition',     dAr:'التقييم الغذائي وخطط الوجبات',   dEn:'Nutrition & meal planning' },
  { icon:'handshake',  ar:'الخدمة الاجتماعية', en:'Social Work', dAr:'التقييم النفسي-الاجتماعي',     dEn:'Psychosocial assessment' },
  { icon:'share',      ar:'الاستشارات والتحويلات', en:'Consults & Referrals', dAr:'إحالات بين الأقسام والمنشآت', dEn:'Inter-department & facility referrals' },
];

/* ---------- Enterprise rich cards ---------- */
const ENTERPRISE = [
  {
    icon:'wallet', glow:'var(--cyan)',
    ar:'الفوترة ودورة الإيرادات', en:'Billing & Revenue Cycle',
    descAr:'دورة إيرادات كاملة من التقاط الرسوم إلى المطالبات والمدفوعات، مع تكامل NPHIES السعودي.',
    descEn:'A full revenue cycle from charge capture to claims and payments, with native Saudi NPHIES integration.',
    feats:[
      {ar:'التقاط الرسوم لحظياً', en:'Real-time charge capture'},
      {ar:'المطالبات وربط NPHIES', en:'Claims & NPHIES'},
      {ar:'المدفوعات والتسويات', en:'Payments & reconciliation'},
      {ar:'خطط التأمين والأهلية', en:'Insurance & eligibility'},
      {ar:'الكشوف ومسودات الفواتير', en:'Statements & invoices'},
      {ar:'كتالوج الرسوم والخدمات', en:'Charge catalog'},
    ],
  },
  {
    icon:'fileText', glow:'var(--violet)',
    ar:'سام — ذكاء السياسات والوثائق', en:'SAM — Policy Intelligence',
    descAr:'إدارة مؤسسية للسياسات والإجراءات مع كشف التعارض ومواءمة الوثائق بالذكاء الاصطناعي.',
    descEn:'Enterprise policy & procedure management with AI-powered conflict detection and document harmonization.',
    feats:[
      {ar:'مكتبة سياسات قابلة للبحث', en:'Searchable policy library'},
      {ar:'كشف التعارض بالذكاء الاصطناعي', en:'AI conflict detection'},
      {ar:'مواءمة الوثائق آلياً', en:'Automated harmonization'},
      {ar:'مساعد كتابة الوثائق', en:'AI document assistant'},
      {ar:'معالج إنشاء موجّه', en:'Guided creation wizard'},
      {ar:'بحث نصّي كامل', en:'Full-text search'},
    ],
  },
  {
    icon:'briefcase', glow:'var(--indigo)',
    ar:'سيفجن — الموارد البشرية', en:'CVision — Workforce',
    descAr:'منصة موارد بشرية كاملة لدورة حياة الموظف: من التوظيف والحضور إلى الرواتب وربط التأمينات.',
    descEn:'A complete HR platform for the full employee lifecycle — from recruitment and attendance to payroll and GOSI.',
    feats:[
      {ar:'ملفات الموظفين والعقود', en:'Employee records & contracts'},
      {ar:'الحضور والورديات', en:'Attendance & shifts'},
      {ar:'الرواتب وربط التأمينات (GOSI)', en:'Payroll & GOSI'},
      {ar:'التوظيف والتعيين', en:'Recruitment & onboarding'},
      {ar:'الإجازات والأداء', en:'Leaves & performance'},
      {ar:'الهيكل التنظيمي والميزانية', en:'Org structure & headcount'},
    ],
  },
  {
    icon:'smartphone', glow:'var(--teal)',
    ar:'بوابة المريض', en:'Patient Portal',
    descAr:'بوابة موجّهة للمريض للوصول إلى المواعيد والنتائج والفواتير والتواصل الآمن مع المنشأة.',
    descEn:'A patient-facing portal for appointments, results, bills and secure communication with the facility.',
    feats:[
      {ar:'حجز ومتابعة المواعيد', en:'Appointment booking'},
      {ar:'الوصول للنتائج والتقارير', en:'Results & reports access'},
      {ar:'التواصل الآمن', en:'Secure messaging'},
      {ar:'الفواتير والدفع الإلكتروني', en:'Bills & online payment'},
    ],
  },
];

/* ---------- Operations & quality chips ---------- */
const OPS = [
  { icon:'shieldCheck',   ar:'مكافحة العدوى',     en:'Infection Control', dAr:'ترصّد العدوى والأنتيبيوجرام', dEn:'Surveillance & antibiogram' },
  { icon:'package',       ar:'التعقيم المركزي',    en:'CSSD',              dAr:'دورات التعقيم وتتبع الأدوات',  dEn:'Sterilization & instrument sets' },
  { icon:'wrench',        ar:'إدارة المعدات',      en:'Equipment',         dAr:'الصيانة والفحص اليومي',        dEn:'Maintenance & daily checks' },
  { icon:'users',         ar:'عمليات التمريض',     en:'Nursing Ops',       dAr:'القوى العاملة والجدولة',       dEn:'Manpower & scheduling' },
  { icon:'smile',         ar:'تجربة المريض',       en:'Patient Experience', dAr:'الاستبيانات والشكاوى',        dEn:'Surveys & complaints' },
  { icon:'award',         ar:'الجودة والسلامة',    en:'Quality & Safety',  dAr:'الحوادث والمؤشرات ومراجعة الوفيات', dEn:'Incidents, KPIs & mortality' },
  { icon:'alertTriangle', ar:'كشف المخاطر',        en:'Risk Detection',    dAr:'تحليلات تنبؤية وتصنيف المخاطر', dEn:'Predictive risk stratification' },
  { icon:'swap',          ar:'تسليم المناوبة',     en:'Handover',          dAr:'قوالب تسليم منظّمة',           dEn:'Structured handoff templates' },
  { icon:'truck',         ar:'نقل المرضى',         en:'Patient Transport', dAr:'طلبات وتنسيق النقل',           dEn:'Transport requests & routing' },
  { icon:'list',          ar:'مركز الطلبات',       en:'Orders Hub',        dAr:'حزم الطلبات الجاهزة',          dEn:'Pre-built order sets' },
  { icon:'inbox',         ar:'صندوق النتائج',      en:'Results Inbox',     dAr:'إشعار وإقرار النتائج',         dEn:'Result notify & acknowledge' },
  { icon:'cloudOff',      ar:'حزمة الانقطاع',      en:'Downtime Pack',     dAr:'نماذج ورقية للطوارئ التقنية',  dEn:'Offline downtime forms' },
];

/* ---------- Infrastructure ---------- */
const INFRA = [
  { icon:'database', ar:'تعدّد المستأجرين', en:'Multi-tenant', dAr:'عزل كامل وقاعدة بيانات مستقلة لكل منشأة.', dEn:'Full isolation with a dedicated database per organization.' },
  { icon:'network',  ar:'التكامل والمعايير', en:'Interoperability', dAr:'واجهات HL7 و FHIR و NPHIES وربط LIS / RIS.', dEn:'HL7, FHIR, NPHIES interfaces and LIS / RIS connectors.' },
  { icon:'shield',   ar:'الأمان والصلاحيات', en:'Security & RBAC', dAr:'صلاحيات دقيقة قائمة على الأدوار وسجل تدقيق كامل.', dEn:'Granular role-based access with a complete audit trail.' },
  { icon:'globe',    ar:'عربي أولاً', en:'Arabic-first', dAr:'واجهة ثنائية اللغة بدعم كامل لليمين لليسار (RTL).', dEn:'A bilingual interface with full right-to-left (RTL) support.' },
  { icon:'sparkles', ar:'مساعدة ذكية', en:'AI assistance', dAr:'توليد الملاحظات السريرية ومواءمة السياسات بالذكاء.', dEn:'AI for clinical notes and policy harmonization.' },
  { icon:'barChart', ar:'التحليلات والمؤشرات', en:'Analytics & BI', dAr:'لوحات لحظية على مستوى المستشفى وتقارير مخصّصة.', dEn:'Real-time hospital-wide dashboards and custom reports.' },
];

/* ============================================================
   Tailored mini-visuals per core pillar
   ============================================================ */
const VISUALS = {
  opd(L) {
    const rows = [
      { n:'A‑104', ar:'مراجعة متابعة', en:'Follow-up', s:{ar:'قيد الكشف',en:'In room'} },
      { n:'A‑105', ar:'مراجع جديد', en:'New patient', s:{ar:'بانتظار الطبيب',en:'Waiting'} },
      { n:'A‑106', ar:'تطعيم', en:'Vaccination', s:{ar:'التمريض',en:'Nursing'} },
      { n:'A‑107', ar:'بلا موعد', en:'Walk-in', s:{ar:'مفروز',en:'Triaged'} },
    ];
    return win(L, L==='ar'?'قائمة الانتظار · العيادة':'Clinic queue', `
      ${rows.map((r,i)=>`<div class="queue-row" style="animation:fadeUp .5s ${.1+i*.12}s both">
        <span class="queue-num">${i+1}</span>
        <div><div>${r.n}</div><div class="meta">${L==='ar'?r.ar:r.en}</div></div>
        <span class="stt">${L==='ar'?r.s.ar:r.s.en}</span>
      </div>`).join('')}
    `);
  },
  er(L) {
    const rows = [
      { esi:'var(--rose)',   tag:'ESI 1', tc:'#ff6b88', ar:'ألم صدري', en:'Chest pain',  loc:'Resus-1' },
      { esi:'var(--amber)',  tag:'ESI 2', tc:'#ffb347', ar:'ضيق تنفّس', en:'SOB',         loc:'Bay-3' },
      { esi:'var(--amber)',  tag:'ESI 3', tc:'#ffb347', ar:'كسر ساعد', en:'Forearm fx',  loc:'Bay-7' },
      { esi:'var(--emerald)',tag:'ESI 4', tc:'#34e0a1', ar:'جرح سطحي', en:'Laceration',  loc:'Fast-2' },
      { esi:'var(--teal)',   tag:'ESI 5', tc:'#1fd6c5', ar:'إعادة وصفة', en:'Rx refill',  loc:'WR' },
    ];
    return win(L, L==='ar'?'لوحة المتابعة · الطوارئ':'ER tracking board', `
      ${rows.map((r,i)=>`<div class="er-row" style="animation:fadeUp .5s ${.1+i*.1}s both">
        <span class="esi" style="background:${r.esi}"></span>
        <div><div class="nm">${L==='ar'?r.ar:r.en}</div><div class="loc">${r.loc}</div></div>
        <span class="tag" style="background:${r.tc}22;color:${r.tc}">${r.tag}</span>
      </div>`).join('')}
    `);
  },
  beds(L) {
    const map = ['occ','occ','crit','','occ','','occ','occ','','crit','occ','','occ','occ','occ'];
    return win(L, L==='ar'?'الأسرّة الحيّة · العناية':'Live beds · ICU', `
      <div class="bed-grid">${map.map((c,i)=>`<div class="bed ${c}" style="animation:fadeUp .4s ${i*.04}s both">${String(i+1).padStart(2,'0')}</div>`).join('')}</div>
      <div style="display:flex;gap:14px;margin-top:14px;font-size:11px;color:var(--ink-faint)">
        <span><i style="display:inline-block;width:9px;height:9px;border-radius:3px;background:rgba(31,214,197,.5);margin-inline-end:5px"></i>${L==='ar'?'مشغول':'Occupied'}</span>
        <span><i style="display:inline-block;width:9px;height:9px;border-radius:3px;background:rgba(255,107,136,.6);margin-inline-end:5px"></i>${L==='ar'?'حرج':'Critical'}</span>
        <span><i style="display:inline-block;width:9px;height:9px;border-radius:3px;background:rgba(255,255,255,.1);margin-inline-end:5px"></i>${L==='ar'?'متاح':'Free'}</span>
      </div>
    `);
  },
  or(L) {
    const rows = [
      { r:'OR-1', x:'4%',  w:'46%' },
      { r:'OR-2', x:'28%', w:'40%' },
      { r:'OR-3', x:'12%', w:'30%' },
      { r:'OR-4', x:'52%', w:'38%' },
    ];
    return win(L, L==='ar'?'جدول العمليات':'OR schedule board', `
      <div class="gantt">${rows.map((r,i)=>`<div class="gantt-row"><span>${r.r}</span>
        <div class="gantt-track"><span class="gantt-bar" style="inset-inline-start:${r.x};width:${r.w};animation:growBar .7s ${.15+i*.12}s both"></span></div></div>`).join('')}
      </div>
      <div style="display:flex;justify-content:space-between;margin-top:10px;font-size:10px;color:var(--ink-faint)"><span>08:00</span><span>12:00</span><span>16:00</span><span>20:00</span></div>
    `);
  },
  lab(L) {
    const rows = [
      { t:'WBC',  v:'14.2', u:'10³/µL', c:'hi', flag:true },
      { t:'Hgb',  v:'13.6', u:'g/dL',   c:'ok' },
      { t:'K⁺',   v:'5.9',  u:'mmol/L', c:'hi', flag:true },
      { t:'Creat',v:'0.9',  u:'mg/dL',  c:'ok' },
      { t:'CRP',  v:'48',   u:'mg/L',   c:'hi' },
    ];
    return win(L, L==='ar'?'النتائج · المختبر':'Lab results', `
      ${rows.map((r,i)=>`<div class="lab-row" style="animation:fadeUp .4s ${i*.08}s both">
        <span style="color:var(--ink-dim)">${r.t}</span>
        <span style="display:flex;align-items:center;gap:8px"><span class="val ${r.c}">${r.v}</span><span style="color:var(--ink-faint);font-size:11px">${r.u}</span>${r.flag?`<span class="lab-flag">${L==='ar'?'حرج':'CRIT'}</span>`:''}</span>
      </div>`).join('')}
    `);
  },
  dicom(L) {
    return win(L, L==='ar'?'عارض DICOM':'DICOM viewer', `
      <div class="dicom">
        <div class="skull">${svg('brain')}</div>
        <div class="scan"></div>
        <div class="crit-pin"></div>
        <div class="dlabel">CT · HEAD · ${L==='ar'?'نتيجة حرجة':'CRITICAL FINDING'}</div>
      </div>
    `);
  },
  pharm(L) {
    const steps = [
      { ar:'وصول الطلب', en:'Order received', done:true },
      { ar:'تحقّق الصيدلي', en:'Pharmacist verify', done:true },
      { ar:'الصرف من ADC', en:'Dispense (ADC)', done:false },
      { ar:'التسليم', en:'Delivered', done:false },
    ];
    return win(L, L==='ar'?'مسار الصرف':'Dispensing flow', `
      <div class="pipe">${steps.map((s,i)=>`<div class="pipe-step ${s.done?'done':''}" style="animation:fadeUp .45s ${i*.12}s both">
        <span class="dot">${s.done?'✓':i+1}</span><span>${L==='ar'?s.ar:s.en}</span>
      </div>`).join('')}</div>
    `);
  },
};
function win(L, title, body) {
  return `<div class="mini-window mini"><div class="mini-bar"><i></i><i></i><i></i><span>${title}</span></div><div class="mini-body">${body}</div></div>`;
}

/* ============================================================
   Render
   ============================================================ */
let LANG = localStorage.getItem('thea-lang') || 'ar';

function txt(el, key) { el.textContent = T[key][LANG]; }

function render() {
  const L = LANG;

  // nav
  document.getElementById('nav-links').innerHTML = NAV.map(n=>`<a href="${n.href}">${n[L]}</a>`).join('');

  // static i18n text nodes
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent = T[el.dataset.i18n][L]; });
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{ el.innerHTML = T[el.dataset.i18nHtml][L]; });

  // stats
  document.getElementById('hero-stats').innerHTML = STATS.map((s,i)=>`
    <div class="stat reveal d${(i%3)+1}"><div class="stat-num">${s.num}</div><div class="stat-label">${s[L]}</div></div>`).join('');

  // trust strip (doubled for marquee)
  const stripItems = TRUST.map(t=>`<span class="strip-item">${svg(t.icon)}${t[L]}</span>`).join('');
  document.getElementById('strip-track').innerHTML = stripItems + stripItems;

  // journey
  document.getElementById('journey-flow').innerHTML = JOURNEY.map((j,i)=>`
    <div class="journey-node reveal d${(i%3)+1}">
      <div class="jn-icon">${svg(j.icon)}</div>
      <h4>${j[L]}</h4><p>${L==='ar'?j.dAr:j.dEn}</p>
    </div>`).join('');

  // pillars
  document.getElementById('pillars').innerHTML = PILLARS.map((p,i)=>{
    const flip = i % 2 === 1;
    const feats = p.feats.map(f=>`<li style="color:${p.color}">${svg('check')}<span style="color:var(--ink)">${f[L]}</span></li>`).join('');
    return `<article class="pillar ${flip?'flip':''} reveal">
      <div class="pillar-info">
        <span class="pillar-badge" style="background:${p.color}1a;color:${p.color};border:1px solid ${p.color}40">${L==='ar'?p.tagAr:p.tagEn}</span>
        <div class="pillar-icon" style="background:${p.color}1a;color:${p.color}">${svg(p.icon)}</div>
        <h3>${p[L]}</h3>
        <div class="pillar-en">${p.en}</div>
        <p>${L==='ar'?p.descAr:p.descEn}</p>
        <ul class="feat-list">${feats}</ul>
      </div>
      <div class="pillar-visual">${VISUALS[p.visual](L)}</div>
    </article>`;
  }).join('');

  // specialties
  document.getElementById('spec-grid').innerHTML = SPECIALTIES.map((s,i)=>`
    <div class="chip reveal d${(i%3)+1}">
      <div class="chip-icon">${svg(s.icon)}</div>
      <h4>${s[L]}</h4><div class="chip-en">${s.en}</div>
      <p>${L==='ar'?s.dAr:s.dEn}</p>
    </div>`).join('');

  // enterprise
  document.getElementById('ent-grid').innerHTML = ENTERPRISE.map(e=>{
    const feats = e.feats.map(f=>`<li>${svg('check')}<span>${f[L]}</span></li>`).join('');
    return `<article class="ent-card reveal">
      <span class="ent-glow" style="background:${e.glow}"></span>
      <div class="ent-head">
        <div class="ent-ic" style="background:${e.glow}1a;color:${e.glow}">${svg(e.icon)}</div>
        <div><h3>${e[L]}</h3><div class="ent-en">${e.en}</div></div>
      </div>
      <p>${L==='ar'?e.descAr:e.descEn}</p>
      <ul class="ent-feats">${feats}</ul>
    </article>`;
  }).join('');

  // ops
  document.getElementById('ops-grid').innerHTML = OPS.map((s,i)=>`
    <div class="chip reveal d${(i%3)+1}">
      <div class="chip-icon">${svg(s.icon)}</div>
      <h4>${s[L]}</h4><div class="chip-en">${s.en}</div>
      <p>${L==='ar'?s.dAr:s.dEn}</p>
    </div>`).join('');

  // infra
  document.getElementById('infra-grid').innerHTML = INFRA.map((c,i)=>`
    <div class="infra-card reveal d${(i%3)+1}">
      <div class="infra-ic">${svg(c.icon)}</div>
      <h4>${c[L]}</h4><p>${L==='ar'?c.dAr:c.dEn}</p>
    </div>`).join('');

  document.getElementById('year').textContent = '2026';
  setupReveal();
}

/* language toggle */
function setLang(l) {
  LANG = l;
  localStorage.setItem('thea-lang', l);
  document.documentElement.lang = l;
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  render();
}
document.getElementById('lang-toggle')?.addEventListener('click', ()=> setLang(LANG==='ar'?'en':'ar'));

/* nav scrolled state */
const nav = document.getElementById('nav');
addEventListener('scroll', ()=> nav.classList.toggle('scrolled', scrollY > 30), { passive:true });

/* reveal on scroll */
let io;
function setupReveal() {
  if (io) io.disconnect();
  io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach(el=> io.observe(el));
}

/* ---------- Canvas particle network ---------- */
function startBg(){
  const c = document.getElementById('bg-canvas');
  if (!c) return;
  const ctx = c.getContext('2d');
  let w, h, pts, dpr = Math.min(devicePixelRatio || 1, 2);
  const mouse = { x: -999, y: -999 };
  function resize(){
    w = c.width = innerWidth * dpr; h = c.height = innerHeight * dpr;
    c.style.width = innerWidth+'px'; c.style.height = innerHeight+'px';
    const count = Math.min(90, Math.floor(innerWidth/16));
    pts = Array.from({length:count}, ()=>({
      x: Math.random()*w, y: Math.random()*h,
      vx: (Math.random()-.5)*0.18*dpr, vy: (Math.random()-.5)*0.18*dpr,
      r: (Math.random()*1.6+0.6)*dpr,
    }));
  }
  function step(){
    ctx.clearRect(0,0,w,h);
    const max = 140*dpr;
    for (let i=0;i<pts.length;i++){
      const p = pts[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x<0||p.x>w) p.vx*=-1;
      if (p.y<0||p.y>h) p.vy*=-1;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,7); ctx.fillStyle='rgba(120,200,220,.55)'; ctx.fill();
      for (let j=i+1;j<pts.length;j++){
        const q = pts[j], dx=p.x-q.x, dy=p.y-q.y, d=Math.hypot(dx,dy);
        if (d<max){
          ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(q.x,q.y);
          ctx.strokeStyle=`rgba(60,170,200,${0.18*(1-d/max)})`; ctx.lineWidth=dpr*0.6; ctx.stroke();
        }
      }
      const mdx=p.x-mouse.x, mdy=p.y-mouse.y, md=Math.hypot(mdx,mdy);
      if (md < 160*dpr){
        ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(mouse.x,mouse.y);
        ctx.strokeStyle=`rgba(31,214,197,${0.25*(1-md/(160*dpr))})`; ctx.lineWidth=dpr*0.7; ctx.stroke();
      }
    }
    requestAnimationFrame(step);
  }
  addEventListener('resize', resize);
  addEventListener('mousemove', e=>{ mouse.x=e.clientX*dpr; mouse.y=e.clientY*dpr; });
  addEventListener('mouseout', ()=>{ mouse.x=-999; mouse.y=-999; });
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches){ resize(); step(); }
}

/* keyframes injected for visual animations */
const style = document.createElement('style');
style.textContent = `
@keyframes fadeUp { from{opacity:0;transform:translateY(10px);} to{opacity:1;transform:none;} }
@keyframes growBar { from{opacity:0;transform:scaleX(0);transform-origin:inline-start;} to{opacity:1;transform:none;} }
.er-row{opacity:1!important;}`;
document.head.appendChild(style);

/* init / fallback exposure */
window.theaRenderDom = function(){
  document.documentElement.classList.add('dom-mode');
  document.documentElement.lang = LANG;
  document.documentElement.dir = LANG === 'ar' ? 'rtl' : 'ltr';
  render(); startBg();
};
window.theaSetLang = setLang;
if (!window.__THEA_CINEMATIC__) {
  document.documentElement.lang = LANG;
  document.documentElement.dir = LANG === 'ar' ? 'rtl' : 'ltr';
  render(); startBg();
}
