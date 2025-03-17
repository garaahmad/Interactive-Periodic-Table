/*******************************************************
 * بيانات مختصرة لبعض العناصر (للتجربة فقط).
 * يمكنك إضافة بقية العناصر مع تصنيف كل عنصر (group) 
 * لضبط اللون الصحيح في الجدول.
 *******************************************************/
// بيانات كاملة لكل العناصر في الجدول الدوري حتى Z=118
const elementsData = [
  { atomicNumber: 1, symbolAr: "هيدروجين", symbolEn: "Hydrogen", shortSymbol: "H", group: "nonmetal", massNumber: 1 },
  { atomicNumber: 2, symbolAr: "هيليوم", symbolEn: "Helium", shortSymbol: "He", group: "noble-gas", massNumber: 4 },
  { atomicNumber: 3, symbolAr: "ليثيوم", symbolEn: "Lithium", shortSymbol: "Li", group: "alkali-metal", massNumber: 7 },
  { atomicNumber: 4, symbolAr: "بيريليوم", symbolEn: "Beryllium", shortSymbol: "Be", group: "alkaline-earth-metal", massNumber: 9 },
  { atomicNumber: 5, symbolAr: "بورون", symbolEn: "Boron", shortSymbol: "B", group: "metalloid", massNumber: 11 },
  { atomicNumber: 6, symbolAr: "كربون", symbolEn: "Carbon", shortSymbol: "C", group: "nonmetal", massNumber: 12 },
  { atomicNumber: 7, symbolAr: "نيتروجين", symbolEn: "Nitrogen", shortSymbol: "N", group: "nonmetal", massNumber: 14 },
  { atomicNumber: 8, symbolAr: "أكسجين", symbolEn: "Oxygen", shortSymbol: "O", group: "nonmetal", massNumber: 16 },
  { atomicNumber: 9, symbolAr: "فلور", symbolEn: "Fluorine", shortSymbol: "F", group: "halogen", massNumber: 19 },
  { atomicNumber: 10, symbolAr: "نيون", symbolEn: "Neon", shortSymbol: "Ne", group: "noble-gas", massNumber: 20 },
  { atomicNumber: 11, symbolAr: "صوديوم", symbolEn: "Sodium", shortSymbol: "Na", group: "alkali-metal", massNumber: 23 },
  { atomicNumber: 12, symbolAr: "مغنيسيوم", symbolEn: "Magnesium", shortSymbol: "Mg", group: "alkaline-earth-metal", massNumber: 24 },
  { atomicNumber: 13, symbolAr: "ألمنيوم", symbolEn: "Aluminium", shortSymbol: "Al", group: "post-transition-metal", massNumber: 27 },
  { atomicNumber: 14, symbolAr: "سيليكون", symbolEn: "Silicon", shortSymbol: "Si", group: "metalloid", massNumber: 28 },
  { atomicNumber: 15, symbolAr: "فوسفور", symbolEn: "Phosphorus", shortSymbol: "P", group: "nonmetal", massNumber: 31 },
  { atomicNumber: 16, symbolAr: "كبريت", symbolEn: "Sulfur", shortSymbol: "S", group: "nonmetal", massNumber: 32 },
  { atomicNumber: 17, symbolAr: "كلور", symbolEn: "Chlorine", shortSymbol: "Cl", group: "halogen", massNumber: 35.5 },
  { atomicNumber: 18, symbolAr: "أرغون", symbolEn: "Argon", shortSymbol: "Ar", group: "noble-gas", massNumber: 40 },
  { atomicNumber: 19, symbolAr: "بوتاسيوم", symbolEn: "Potassium", shortSymbol: "K", group: "alkali-metal", massNumber: 39 },
  { atomicNumber: 20, symbolAr: "كالسيوم", symbolEn: "Calcium", shortSymbol: "Ca", group: "alkaline-earth-metal", massNumber: 40 },
  { atomicNumber: 21, symbolAr: "سكانديوم", symbolEn: "Scandium", shortSymbol: "Sc", group: "transition-metal", massNumber: 45 },
  { atomicNumber: 22, symbolAr: "تيتانيوم", symbolEn: "Titanium", shortSymbol: "Ti", group: "transition-metal", massNumber: 48 },
  { atomicNumber: 23, symbolAr: "فاناديوم", symbolEn: "Vanadium", shortSymbol: "V", group: "transition-metal", massNumber: 51 },
  { atomicNumber: 24, symbolAr: "كروم", symbolEn: "Chromium", shortSymbol: "Cr", group: "transition-metal", massNumber: 52 },
  { atomicNumber: 25, symbolAr: "منغنيز", symbolEn: "Manganese", shortSymbol: "Mn", group: "transition-metal", massNumber: 55 },
  { atomicNumber: 26, symbolAr: "حديد", symbolEn: "Iron", shortSymbol: "Fe", group: "transition-metal", massNumber: 56 },
  { atomicNumber: 27, symbolAr: "كوبالت", symbolEn: "Cobalt", shortSymbol: "Co", group: "transition-metal", massNumber: 59 },
  { atomicNumber: 28, symbolAr: "نيكل", symbolEn: "Nickel", shortSymbol: "Ni", group: "transition-metal", massNumber: 59 },
  { atomicNumber: 29, symbolAr: "نحاس", symbolEn: "Copper", shortSymbol: "Cu", group: "transition-metal", massNumber: 64 },
  { atomicNumber: 30, symbolAr: "زنك", symbolEn: "Zinc", shortSymbol: "Zn", group: "transition-metal", massNumber: 65 },
  { atomicNumber: 31, symbolAr: "جاليوم", symbolEn: "Gallium", shortSymbol: "Ga", group: "post-transition-metal", massNumber: 70 },
  { atomicNumber: 32, symbolAr: "جرمانيوم", symbolEn: "Germanium", shortSymbol: "Ge", group: "metalloid", massNumber: 73 },
  { atomicNumber: 33, symbolAr: "زرنيخ", symbolEn: "Arsenic", shortSymbol: "As", group: "metalloid", massNumber: 75 },
  { atomicNumber: 34, symbolAr: "سيلينيوم", symbolEn: "Selenium", shortSymbol: "Se", group: "nonmetal", massNumber: 79 },
  { atomicNumber: 35, symbolAr: "بروم", symbolEn: "Bromine", shortSymbol: "Br", group: "halogen", massNumber: 80 },
  { atomicNumber: 36, symbolAr: "كريبتون", symbolEn: "Krypton", shortSymbol: "Kr", group: "noble-gas", massNumber: 84 },
  { atomicNumber: 37, symbolAr: "روبيديوم", symbolEn: "Rubidium", shortSymbol: "Rb", group: "alkali-metal", massNumber: 85 },
  { atomicNumber: 38, symbolAr: "سترونشيوم", symbolEn: "Strontium", shortSymbol: "Sr", group: "alkaline-earth-metal", massNumber: 88 },
  { atomicNumber: 39, symbolAr: "إيتريوم", symbolEn: "Yttrium", shortSymbol: "Y", group: "transition-metal", massNumber: 89 },
  { atomicNumber: 40, symbolAr: "زركونيوم", symbolEn: "Zirconium", shortSymbol: "Zr", group: "transition-metal", massNumber: 91 },
  { atomicNumber: 41, symbolAr: "نيوبيوم", symbolEn: "Niobium", shortSymbol: "Nb", group: "transition-metal", massNumber: 93 },
  { atomicNumber: 42, symbolAr: "موليبدينوم", symbolEn: "Molybdenum", shortSymbol: "Mo", group: "transition-metal", massNumber: 96 },
  { atomicNumber: 43, symbolAr: "تكنيشيوم", symbolEn: "Technetium", shortSymbol: "Tc", group: "transition-metal", massNumber: 98 },
  { atomicNumber: 44, symbolAr: "روثينيوم", symbolEn: "Ruthenium", shortSymbol: "Ru", group: "transition-metal", massNumber: 101 },
  { atomicNumber: 45, symbolAr: "روديوم", symbolEn: "Rhodium", shortSymbol: "Rh", group: "transition-metal", massNumber: 103 },
  { atomicNumber: 46, symbolAr: "بلاديوم", symbolEn: "Palladium", shortSymbol: "Pd", group: "transition-metal", massNumber: 106 },
  { atomicNumber: 47, symbolAr: "فضة", symbolEn: "Silver", shortSymbol: "Ag", group: "transition-metal", massNumber: 108 },
  { atomicNumber: 48, symbolAr: "كادميوم", symbolEn: "Cadmium", shortSymbol: "Cd", group: "transition-metal", massNumber: 112 },
  { atomicNumber: 49, symbolAr: "إنديوم", symbolEn: "Indium", shortSymbol: "In", group: "post-transition-metal", massNumber: 115 },
  { atomicNumber: 50, symbolAr: "قصدير", symbolEn: "Tin", shortSymbol: "Sn", group: "post-transition-metal", massNumber: 119 },
  { atomicNumber: 51, symbolAr: "إثمد", symbolEn: "Antimony", shortSymbol: "Sb", group: "metalloid", massNumber: 122 },
  { atomicNumber: 52, symbolAr: "تيلوريوم", symbolEn: "Tellurium", shortSymbol: "Te", group: "metalloid", massNumber: 128 },
  { atomicNumber: 53, symbolAr: "يود", symbolEn: "Iodine", shortSymbol: "I", group: "halogen", massNumber: 127 },
  { atomicNumber: 54, symbolAr: "زينون", symbolEn: "Xenon", shortSymbol: "Xe", group: "noble-gas", massNumber: 131 },
  { atomicNumber: 55, symbolAr: "سيزيوم", symbolEn: "Cesium", shortSymbol: "Cs", group: "alkali-metal", massNumber: 133 },
  { atomicNumber: 56, symbolAr: "باريوم", symbolEn: "Barium", shortSymbol: "Ba", group: "alkaline-earth-metal", massNumber: 137 },
  { atomicNumber: 57, symbolAr: "لانثانوم", symbolEn: "Lanthanum", shortSymbol: "La", group: "lanthanide", massNumber: 139 },
  { atomicNumber: 58, symbolAr: "سيريوم", symbolEn: "Cerium", shortSymbol: "Ce", group: "lanthanide", massNumber: 140 },
  { atomicNumber: 59, symbolAr: "براسيوديميوم", symbolEn: "Praseodymium", shortSymbol: "Pr", group: "lanthanide", massNumber: 141 },
  { atomicNumber: 60, symbolAr: "نيوديميوم", symbolEn: "Neodymium", shortSymbol: "Nd", group: "lanthanide", massNumber: 144 },
  { atomicNumber: 61, symbolAr: "بروميثيوم", symbolEn: "Promethium", shortSymbol: "Pm", group: "lanthanide", massNumber: 145 },
  { atomicNumber: 62, symbolAr: "ساماريوم", symbolEn: "Samarium", shortSymbol: "Sm", group: "lanthanide", massNumber: 150 },
  { atomicNumber: 63, symbolAr: "يوروبيوم", symbolEn: "Europium", shortSymbol: "Eu", group: "lanthanide", massNumber: 152 },
  { atomicNumber: 64, symbolAr: "جادولينيوم", symbolEn: "Gadolinium", shortSymbol: "Gd", group: "lanthanide", massNumber: 157 },
  { atomicNumber: 65, symbolAr: "تيربيوم", symbolEn: "Terbium", shortSymbol: "Tb", group: "lanthanide", massNumber: 159 },
  { atomicNumber: 66, symbolAr: "ديسبروسيوم", symbolEn: "Dysprosium", shortSymbol: "Dy", group: "lanthanide", massNumber: 163 },
  { atomicNumber: 67, symbolAr: "هولميوم", symbolEn: "Holmium", shortSymbol: "Ho", group: "lanthanide", massNumber: 165 },
  { atomicNumber: 68, symbolAr: "إربيوم", symbolEn: "Erbium", shortSymbol: "Er", group: "lanthanide", massNumber: 167 },
  { atomicNumber: 69, symbolAr: "ثوليوم", symbolEn: "Thulium", shortSymbol: "Tm", group: "lanthanide", massNumber: 169 },
  { atomicNumber: 70, symbolAr: "إيتيربيوم", symbolEn: "Ytterbium", shortSymbol: "Yb", group: "lanthanide", massNumber: 173 },
  { atomicNumber: 71, symbolAr: "لوتيتيوم", symbolEn: "Lutetium", shortSymbol: "Lu", group: "lanthanide", massNumber: 175 },
  { atomicNumber: 72, symbolAr: "هافنيوم", symbolEn: "Hafnium", shortSymbol: "Hf", group: "transition-metal", massNumber: 178 },
  { atomicNumber: 73, symbolAr: "تانتالوم", symbolEn: "Tantalum", shortSymbol: "Ta", group: "transition-metal", massNumber: 181 },
  { atomicNumber: 74, symbolAr: "تنجستن", symbolEn: "Tungsten", shortSymbol: "W", group: "transition-metal", massNumber: 184 },
  { atomicNumber: 75, symbolAr: "رينيوم", symbolEn: "Rhenium", shortSymbol: "Re", group: "transition-metal", massNumber: 186 },
  { atomicNumber: 76, symbolAr: "أوزميوم", symbolEn: "Osmium", shortSymbol: "Os", group: "transition-metal", massNumber: 190 },
  { atomicNumber: 77, symbolAr: "إيريديوم", symbolEn: "Iridium", shortSymbol: "Ir", group: "transition-metal", massNumber: 192 },
  { atomicNumber: 78, symbolAr: "بلاتين", symbolEn: "Platinum", shortSymbol: "Pt", group: "transition-metal", massNumber: 195 },
  { atomicNumber: 79, symbolAr: "ذهب", symbolEn: "Gold", shortSymbol: "Au", group: "transition-metal", massNumber: 197 },
  { atomicNumber: 80, symbolAr: "زئبق", symbolEn: "Mercury", shortSymbol: "Hg", group: "transition-metal", massNumber: 201 },
  { atomicNumber: 81, symbolAr: "ثاليوم", symbolEn: "Thallium", shortSymbol: "Tl", group: "post-transition-metal", massNumber: 204 },
  { atomicNumber: 82, symbolAr: "رصاص", symbolEn: "Lead", shortSymbol: "Pb", group: "post-transition-metal", massNumber: 207 },
  { atomicNumber: 83, symbolAr: "بزموت", symbolEn: "Bismuth", shortSymbol: "Bi", group: "post-transition-metal", massNumber: 209 },
  { atomicNumber: 84, symbolAr: "بولونيوم", symbolEn: "Polonium", shortSymbol: "Po", group: "metalloid", massNumber: 209 },
  { atomicNumber: 85, symbolAr: "أستاتين", symbolEn: "Astatine", shortSymbol: "At", group: "halogen", massNumber: 210 },
  { atomicNumber: 86, symbolAr: "رادون", symbolEn: "Radon", shortSymbol: "Rn", group: "noble-gas", massNumber: 222 },
  { atomicNumber: 87, symbolAr: "فرانسيوم", symbolEn: "Francium", shortSymbol: "Fr", group: "alkali-metal", massNumber: 223 },
  { atomicNumber: 88, symbolAr: "راديوم", symbolEn: "Radium", shortSymbol: "Ra", group: "alkaline-earth-metal", massNumber: 226 },
  { atomicNumber: 89, symbolAr: "أكتينيوم", symbolEn: "Actinium", shortSymbol: "Ac", group: "actinide", massNumber: 227 },
  { atomicNumber: 90, symbolAr: "ثوريوم", symbolEn: "Thorium", shortSymbol: "Th", group: "actinide", massNumber: 232 },
  { atomicNumber: 91, symbolAr: "بروتكتينيوم", symbolEn: "Protactinium", shortSymbol: "Pa", group: "actinide", massNumber: 231 },
  { atomicNumber: 92, symbolAr: "يورانيوم", symbolEn: "Uranium", shortSymbol: "U", group: "actinide", massNumber: 238 },
  { atomicNumber: 93, symbolAr: "نبتونيوم", symbolEn: "Neptunium", shortSymbol: "Np", group: "actinide", massNumber: 237 },
  { atomicNumber: 94, symbolAr: "بلوتونيوم", symbolEn: "Plutonium", shortSymbol: "Pu", group: "actinide", massNumber: 244 },
  { atomicNumber: 95, symbolAr: "أمريسيوم", symbolEn: "Americium", shortSymbol: "Am", group: "actinide", massNumber: 243 },
  { atomicNumber: 96, symbolAr: "كوريوم", symbolEn: "Curium", shortSymbol: "Cm", group: "actinide", massNumber: 247 },
  { atomicNumber: 97, symbolAr: "بركليوم", symbolEn: "Berkelium", shortSymbol: "Bk", group: "actinide", massNumber: 247 },
  { atomicNumber: 98, symbolAr: "كاليفورنيوم", symbolEn: "Californium", shortSymbol: "Cf", group: "actinide", massNumber: 251 },
  { atomicNumber: 99, symbolAr: "آينشتاينيوم", symbolEn: "Einsteinium", shortSymbol: "Es", group: "actinide", massNumber: 252 },
  { atomicNumber: 100, symbolAr: "فيرميوم", symbolEn: "Fermium", shortSymbol: "Fm", group: "actinide", massNumber: 257 },
  { atomicNumber: 101, symbolAr: "مندليفيوم", symbolEn: "Mendelevium", shortSymbol: "Md", group: "actinide", massNumber: 258 },
  { atomicNumber: 102, symbolAr: "نوبليوم", symbolEn: "Nobelium", shortSymbol: "No", group: "actinide", massNumber: 259 },
  { atomicNumber: 103, symbolAr: "لورنسيوم", symbolEn: "Lawrencium", shortSymbol: "Lr", group: "actinide", massNumber: 262 },
  { atomicNumber: 104, symbolAr: "رذرفورديوم", symbolEn: "Rutherfordium", shortSymbol: "Rf", group: "transition-metal", massNumber: 267 },
  { atomicNumber: 105, symbolAr: "دوبنيوم", symbolEn: "Dubnium", shortSymbol: "Db", group: "transition-metal", massNumber: 268 },
  { atomicNumber: 106, symbolAr: "سيبورغيوم", symbolEn: "Seaborgium", shortSymbol: "Sg", group: "transition-metal", massNumber: 271 },
  { atomicNumber: 107, symbolAr: "بوريوم", symbolEn: "Bohrium", shortSymbol: "Bh", group: "transition-metal", massNumber: 272 },
  { atomicNumber: 108, symbolAr: "هاسيوم", symbolEn: "Hassium", shortSymbol: "Hs", group: "transition-metal", massNumber: 270 },
  { atomicNumber: 109, symbolAr: "مايتنريوم", symbolEn: "Meitnerium", shortSymbol: "Mt", group: "transition-metal", massNumber: 276 },
  { atomicNumber: 110, symbolAr: "دارمشتاتيوم", symbolEn: "Darmstadtium", shortSymbol: "Ds", group: "transition-metal", massNumber: 281 },
  { atomicNumber: 111, symbolAr: "رونتجينيوم", symbolEn: "Roentgenium", shortSymbol: "Rg", group: "transition-metal", massNumber: 280 },
  { atomicNumber: 112, symbolAr: "كوبرنيسيوم", symbolEn: "Copernicium", shortSymbol: "Cn", group: "transition-metal", massNumber: 285 },
  { atomicNumber: 113, symbolAr: "نيوهينيوم", symbolEn: "Nihonium", shortSymbol: "Nh", group: "post-transition-metal", massNumber: 286 },
  { atomicNumber: 114, symbolAr: "فليروفيوم", symbolEn: "Flerovium", shortSymbol: "Fl", group: "post-transition-metal", massNumber: 289 },
  { atomicNumber: 115, symbolAr: "موسكوفيوم", symbolEn: "Moscovium", shortSymbol: "Mc", group: "post-transition-metal", massNumber: 290 },
  { atomicNumber: 116, symbolAr: "ليفرموريوم", symbolEn: "Livermorium", shortSymbol: "Lv", group: "post-transition-metal", massNumber: 293 },
  { atomicNumber: 117, symbolAr: "تينيسين", symbolEn: "Tennessine", shortSymbol: "Ts", group: "halogen", massNumber: 294 },
  { atomicNumber: 118, symbolAr: "أوغانيسون", symbolEn: "Oganesson", shortSymbol: "Og", group: "noble-gas", massNumber: 294 }
];
  
  // اللغة الافتراضية
  let currentLang = 'ar';
  
  // الحصول على العناصر من الـ DOM
  const periodicTable = document.getElementById('periodicTable');
  const detailPane = document.getElementById('detailPane');
  const detailContent = document.getElementById('detailContent');
  const closeBtn = document.getElementById('closeBtn');
  const langToggleBtn = document.getElementById('langToggleBtn');
  const pageTitle = document.getElementById('pageTitle');
  
  /*******************************************************
   * دالة لحساب توزيع الإلكترونات في المدارات (بشكل مبسط)
   *******************************************************/
  function getElectronDistribution(atomicNum) {
    // ترتيب بسيط للسعات (قد يختلف مع بعض العناصر الثقيلة):
    const capacities = [2, 8, 18, 32, 32, 18, 8, 2];
    let distribution = [];
    let remaining = atomicNum;
  
    for (let cap of capacities) {
      if (remaining > cap) {
        distribution.push(cap);
        remaining -= cap;
      } else {
        distribution.push(remaining);
        break;
      }
    }
    return distribution;
  }
  
  // إضافة توزيع الإلكترونات لكل عنصر
  elementsData.forEach(el => {
    el.electrons = getElectronDistribution(el.atomicNumber);
  });
  
  /*******************************************************
   * إنشاء الجدول الدوري
   *******************************************************/
  function generatePeriodicTable() {
    // تفريغ المحتوى القديم
    periodicTable.innerHTML = '';
  
    elementsData.forEach(el => {
      const div = document.createElement('div');
      div.classList.add('element');
      // إضافة لون حسب تصنيف العنصر
      div.classList.add(el.group || 'unknown');
  
      // الاسم المناسب حسب اللغة الحالية
      let name = (currentLang === 'ar') ? el.symbolAr : el.symbolEn;
  
      // محتوى العنصر: الرمز + العدد الذري
      div.innerHTML = `
        <span>${el.shortSymbol}</span>
        <span>${el.atomicNumber}</span>
      `;
  
      // تلميح (Tooltip) باسم العنصر
      div.title = name;
  
      // عند النقر على العنصر، نعرض تفاصيله
      div.addEventListener('click', () => showDetail(el));
      periodicTable.appendChild(div);
    });
  }
  
  /*******************************************************
   * عرض تفاصيل العنصر في النافذة المنبثقة
   *******************************************************/
  function showDetail(element) {
    detailContent.innerHTML = '';
  
    // النصوص حسب اللغة
    let name = (currentLang === 'ar') ? element.symbolAr : element.symbolEn;
    let labelAtomicNumber = (currentLang === 'ar') ? "العدد الذري" : "Atomic Number";
    let labelMassNumber = (currentLang === 'ar') ? "العدد الكتلي" : "Mass Number";
  
    // عنوان العنصر
    const title = document.createElement('h2');
    title.textContent = `${name} (${element.shortSymbol})`;
    detailContent.appendChild(title);
  
    // معلومات عامة
    const info = document.createElement('p');
    info.textContent = `${labelAtomicNumber}: ${element.atomicNumber} | ${labelMassNumber}: ${element.massNumber}`;
    detailContent.appendChild(info);
  
    // رسم الشكل المداري للإلكترونات
    const orbitDiagram = createOrbitDiagram(element.electrons);
    detailContent.appendChild(orbitDiagram);
  
    // إظهار النافذة
    detailPane.style.display = 'block';
  }
  
  /*******************************************************
   * إنشاء رسم SVG يوضح المدارات وعدد الإلكترونات
   *******************************************************/
  function createOrbitDiagram(electronsArray) {
    const svgNS = "http://www.w3.org/2000/svg";
    const size = 450; // أبعاد الرسم
    const center = size / 2;
  
    // إنشاء العنصر SVG
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('width', size);
    svg.setAttribute('height', size);
  
    // دائرة تمثل النواة
    const nucleus = document.createElementNS(svgNS, 'circle');
    nucleus.setAttribute('cx', center);
    nucleus.setAttribute('cy', center);
    nucleus.setAttribute('r', 40);
    nucleus.setAttribute('fill', '#999');
    svg.appendChild(nucleus);
  
    // نص داخل النواة
    const nucleusText = document.createElementNS(svgNS, 'text');
    nucleusText.setAttribute('x', center);
    nucleusText.setAttribute('y', center + 4);
    nucleusText.setAttribute('text-anchor', 'middle');
    nucleusText.setAttribute('font-size', '12');
    nucleusText.setAttribute('fill', '#fff');
    nucleusText.textContent = (currentLang === 'ar') ? 'نواة' : 'Nucleus';
    svg.appendChild(nucleusText);
  
    // رسم المدارات وتوزيع الإلكترونات
    let orbitRadius = 50;
    electronsArray.forEach(count => {
      // رسم الدائرة (المدار)
      const orbit = document.createElementNS(svgNS, 'circle');
      orbit.setAttribute('cx', center);
      orbit.setAttribute('cy', center);
      orbit.setAttribute('r', orbitRadius);
      orbit.setAttribute('stroke', '#000');
      orbit.setAttribute('fill', 'none');
      svg.appendChild(orbit);
  
      // توزيع الإلكترونات على محيط المدار
      for (let i = 0; i < count; i++) {
        const angle = (2 * Math.PI * i) / count;
        const ex = center + orbitRadius * Math.cos(angle);
        const ey = center + orbitRadius * Math.sin(angle);
  
        const electron = document.createElementNS(svgNS, 'circle');
        electron.setAttribute('cx', ex);
        electron.setAttribute('cy', ey);
        electron.setAttribute('r', 5);
        electron.setAttribute('fill', '#000');
        svg.appendChild(electron);
      }
  
      orbitRadius += 20; // زيادة نصف قطر المدار التالي
    });
  
    return svg;
  }
  
  /*******************************************************
   * إغلاق نافذة التفاصيل
   *******************************************************/
  closeBtn.addEventListener('click', () => {
    detailPane.style.display = 'none';
  });
  
  /*******************************************************
   * تبديل اللغة عند النقر على الزر
   *******************************************************/
  langToggleBtn.addEventListener('click', () => {
    if (currentLang === 'ar') {
      currentLang = 'en';
      langToggleBtn.textContent = 'العربية';
      pageTitle.textContent = 'Interactive Periodic Table';
      document.documentElement.setAttribute('lang', 'en');
      document.documentElement.setAttribute('dir', 'ltr');
    } else {
      currentLang = 'ar';
      langToggleBtn.textContent = 'English';
      pageTitle.textContent = 'الجدول الدوري التفاعلي';
      document.documentElement.setAttribute('lang', 'ar');
      document.documentElement.setAttribute('dir', 'rtl');
    }
  
    generatePeriodicTable();
  });
  
  /*******************************************************
   * عند تحميل الصفحة لأول مرة
   *******************************************************/

// ... (الكود السابق يبقى كما هو)

/*******************************************************
 * إنشاء رسم SVG يوضح المدارات وعدد الإلكترونات
 *******************************************************/
function createOrbitDiagram(electronsArray) {
  const svgNS = "http://www.w3.org/2000/svg";
  const size = Math.min(window.innerWidth * 0.8, 450); // حجم SVG يتناسب مع الشاشة
  const center = size / 2;

  // إنشاء العنصر SVG
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('width', size);
  svg.setAttribute('height', size);

  // دائرة تمثل النواة
  const nucleus = document.createElementNS(svgNS, 'circle');
  nucleus.setAttribute('cx', center);
  nucleus.setAttribute('cy', center);
  nucleus.setAttribute('r', size * 0.1); // حجم النواة يتناسب مع الشاشة
  nucleus.setAttribute('fill', '#999');
  svg.appendChild(nucleus);

  // نص داخل النواة
  const nucleusText = document.createElementNS(svgNS, 'text');
  nucleusText.setAttribute('x', center);
  nucleusText.setAttribute('y', center + 4);
  nucleusText.setAttribute('text-anchor', 'middle');
  nucleusText.setAttribute('font-size', size * 0.03); // حجم الخط يتناسب مع الشاشة
  nucleusText.setAttribute('fill', '#fff');
  nucleusText.textContent = (currentLang === 'ar') ? 'نواة' : 'Nucleus';
  svg.appendChild(nucleusText);

  // رسم المدارات وتوزيع الإلكترونات
  let orbitRadius = size * 0.15; // نصف قطر المدار الأول يتناسب مع الشاشة
  electronsArray.forEach(count => {
      // رسم الدائرة (المدار)
      const orbit = document.createElementNS(svgNS, 'circle');
      orbit.setAttribute('cx', center);
      orbit.setAttribute('cy', center);
      orbit.setAttribute('r', orbitRadius);
      orbit.setAttribute('stroke', '#000');
      orbit.setAttribute('fill', 'none');
      svg.appendChild(orbit);

      // توزيع الإلكترونات على محيط المدار
      for (let i = 0; i < count; i++) {
          const angle = (2 * Math.PI * i) / count;
          const ex = center + orbitRadius * Math.cos(angle);
          const ey = center + orbitRadius * Math.sin(angle);

          const electron = document.createElementNS(svgNS, 'circle');
          electron.setAttribute('cx', ex);
          electron.setAttribute('cy', ey);
          electron.setAttribute('r', size * 0.02); // حجم الإلكترون يتناسب مع الشاشة
          electron.setAttribute('fill', '#000');
          svg.appendChild(electron);
      }

      orbitRadius += size * 0.1; // زيادة نصف قطر المدار التالي
  });

  return svg;
}

  generatePeriodicTable();
  