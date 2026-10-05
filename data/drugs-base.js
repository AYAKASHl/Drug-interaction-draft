const drugs = {
 levothyroxine:{inn:"Левотироксин натрия",rx:"levothyroxine",aliases:["левотироксин","левотироксин натрия","эутирокс","euthyrox","l-тироксин","l тироксин","synthroid"],products:[
  {n:"Euthyrox / Эутирокс",k:"бренд",c:"#e75586"},{n:"L-Тироксин",k:"дженерик",c:"#3577d5"},{n:"Levothyroxine",k:"дженерик",c:"#4b9a86"}]},
 calcium:{inn:"Кальция карбонат",rx:"calcium carbonate",aliases:["кальций","кальция карбонат","calcium carbonate","кальций д3","кальций-d3"],products:[
  {n:"Calcium carbonate",k:"МНН",c:"#3c83e6"},{n:"Кальций-Д3",k:"бренд-пример",c:"#e58a3b"},{n:"Calcium",k:"дженерик",c:"#4c9a69"}]},
 sildenafil:{inn:"Силденафил",rx:"sildenafil",aliases:["силденафил","sildenafil","виагра","viagra","динамико","силденафил-сз"],products:[
  {n:"Viagra / Виагра",k:"оригинальный бренд",c:"#295cc3"},{n:"Динамико",k:"дженерик",c:"#2aa2ad"},{n:"Силденафил",k:"дженерик",c:"#6670cf"}]},
 nitroglycerin:{inn:"Нитроглицерин",rx:"nitroglycerin",aliases:["нитроглицерин","nitroglycerin","нитроспрей"],products:[
  {n:"Nitroglycerin",k:"МНН",c:"#d54b5d"},{n:"Нитроспрей",k:"бренд-пример",c:"#de6a3b"},{n:"Нитроглицерин",k:"дженерик",c:"#b95f91"}]},
 clopidogrel:{inn:"Клопидогрел",rx:"clopidogrel",aliases:["клопидогрел","clopidogrel","плавикс","plavix","зилт","клопидогрел-сз"],products:[
  {n:"Plavix / Плавикс",k:"оригинальный бренд",c:"#2165b0"},{n:"Зилт",k:"дженерик",c:"#159783"},{n:"Клопидогрел",k:"дженерик",c:"#6670cd"}]},
 omeprazole:{inn:"Омепразол",rx:"omeprazole",aliases:["омепразол","omeprazole","лосек","losec","омез","omez"],products:[
  {n:"Losec / Лосек",k:"оригинальный бренд",c:"#a94d95"},{n:"Омез",k:"дженерик",c:"#e36f3f"},{n:"Омепразол",k:"дженерик",c:"#397cc2"}]},
 warfarin:{inn:"Варфарин",rx:"warfarin",aliases:["варфарин","warfarin","coumadin","кумадин"],products:[
  {n:"Coumadin",k:"исторический бренд",c:"#9a508b"},{n:"Варфарин",k:"дженерик",c:"#526fd0"},{n:"Warfarin",k:"дженерик",c:"#5d9a88"}]},
 ibuprofen:{inn:"Ибупрофен",rx:"ibuprofen",aliases:["ибупрофен","ibuprofen","бруфен","brufen","нурофен","nurofen"],products:[
  {n:"Brufen / Бруфен",k:"бренд",c:"#d15a45"},{n:"Нурофен",k:"бренд",c:"#ce3340"},{n:"Ибупрофен",k:"дженерик",c:"#3d7dca"}]},
 amlodipine:{inn:"Амлодипин",rx:"amlodipine",aliases:["амлодипин","amlodipine","норваск","norvasc"],products:[
  {n:"Norvasc / Норваск",k:"оригинальный бренд",c:"#3f78b5"},{n:"Амлодипин",k:"дженерик",c:"#4a9679"},{n:"Amlodipine",k:"дженерик",c:"#606dcc"}]},
 atorvastatin:{inn:"Аторвастатин",rx:"atorvastatin",aliases:["аторвастатин","atorvastatin","липитор","lipitor","липримар"],products:[
  {n:"Lipitor / Липримар",k:"оригинальный бренд",c:"#368a7b"},{n:"Аторвастатин",k:"дженерик",c:"#427dc4"},{n:"Atorvastatin",k:"дженерик",c:"#7863be"}]},
 linezolid:{inn:"Линезолид",rx:"linezolid",aliases:["линезолид","linezolid","зивокс","zyvox"],products:[
  {n:"Zyvox / Зивокс",k:"оригинальный бренд",c:"#b44f68"},{n:"Линезолид",k:"дженерик",c:"#427bc7"},{n:"Linezolid",k:"дженерик",c:"#7166c4"}]},
 sertraline:{inn:"Сертралин",rx:"sertraline",aliases:["сертралин","sertraline","золофт","zoloft"],products:[
  {n:"Zoloft / Золофт",k:"оригинальный бренд",c:"#376fb6"},{n:"Сертралин",k:"дженерик",c:"#4a9a80"},{n:"Sertraline",k:"дженерик",c:"#6d62c1"}]},
 metformin:{inn:"Метформин",rx:"metformin",aliases:["метформин","metformin","глюкофаж","glucophage","сиофор"],products:[
  {n:"Glucophage / Глюкофаж",k:"оригинальный бренд",c:"#4d7dd2"},{n:"Сиофор",k:"бренд",c:"#3fa480"},{n:"Метформин",k:"дженерик",c:"#6c65c4"}]},
 ciprofloxacin:{inn:"Ципрофлоксацин",rx:"ciprofloxacin",aliases:["ципрофлоксацин","ciprofloxacin","ципролет","цифран","cipro"],products:[
  {n:"Cipro",k:"референс-бренд",c:"#2d79bd"},{n:"Ципролет",k:"дженерик/бренд",c:"#45956f"},{n:"Ципрофлоксацин",k:"дженерик",c:"#6b65c8"}]},
 doxycycline:{inn:"Доксициклин",rx:"doxycycline",aliases:["доксициклин","doxycycline","юнидокс","вибрамицин"],products:[
  {n:"Vibramycin",k:"бренд",c:"#3577c1"},{n:"Юнидокс Солютаб",k:"бренд",c:"#e07c42"},{n:"Доксициклин",k:"дженерик",c:"#5a9a79"}]},
 iron:{inn:"Железа сульфат",rx:"ferrous sulfate",aliases:["железа сульфат","железо","ferrous sulfate","сорбифер","тардиферон"],products:[
  {n:"Ferrous sulfate",k:"МНН",c:"#8e5c50"},{n:"Сорбифер",k:"бренд",c:"#c76648"},{n:"Тардиферон",k:"бренд",c:"#5979b9"}]},
 alendronate:{inn:"Алендронат натрия",rx:"alendronate",aliases:["алендронат","алендронат натрия","alendronate","фосамакс","fosamax"],products:[
  {n:"Fosamax / Фосамакс",k:"оригинальный бренд",c:"#4678b4"},{n:"Алендронат",k:"дженерик",c:"#4b9a7e"},{n:"Alendronate",k:"дженерик",c:"#6b64c5"}]},
 antacid:{inn:"Магния/алюминия гидроксиды",rx:"aluminum hydroxide magnesium hydroxide",aliases:["антацид","магния гидроксид","алюминия гидроксид","маалокс","алмагель","antacid"],products:[
  {n:"Maalox / Маалокс",k:"бренд",c:"#4f7fc4"},{n:"Алмагель",k:"бренд",c:"#4d9b6e"},{n:"Antacid",k:"класс",c:"#7a66c5"}]},
 digoxin:{inn:"Дигоксин",rx:"digoxin",aliases:["дигоксин","digoxin","ланоксин","lanoxin"],products:[
  {n:"Lanoxin",k:"бренд",c:"#4e72b7"},{n:"Дигоксин",k:"дженерик",c:"#4d9a80"},{n:"Digoxin",k:"дженерик",c:"#7462c4"}]},
 amiodarone:{inn:"Амиодарон",rx:"amiodarone",aliases:["амиодарон","amiodarone","кордарон","cordarone"],products:[
  {n:"Cordarone / Кордарон",k:"бренд",c:"#4d75b3"},{n:"Амиодарон",k:"дженерик",c:"#4c9a7e"},{n:"Amiodarone",k:"дженерик",c:"#7464c6"}]},
 simvastatin:{inn:"Симвастатин",rx:"simvastatin",aliases:["симвастатин","simvastatin","зокор","zocor","вазилип"],products:[
  {n:"Zocor / Зокор",k:"оригинальный бренд",c:"#3d79b7"},{n:"Вазилип",k:"дженерик",c:"#4c987a"},{n:"Симвастатин",k:"дженерик",c:"#6f65c3"}]},
 clarithromycin:{inn:"Кларитромицин",rx:"clarithromycin",aliases:["кларитромицин","clarithromycin","клацид","klacid","кларитросин"],products:[
  {n:"Klacid / Клацид",k:"бренд",c:"#d05c52"},{n:"Кларитромицин",k:"дженерик",c:"#4c80bd"},{n:"Clarithromycin",k:"дженерик",c:"#6570c1"}]},
 azithromycin:{inn:"Азитромицин",rx:"azithromycin",aliases:["азитромицин","azithromycin","сумамед","sumamed","зитромакс","zithromax"],products:[
  {n:"Zithromax",k:"оригинальный бренд",c:"#3d76b6"},{n:"Сумамед",k:"бренд",c:"#4d9c7a"},{n:"Азитромицин",k:"дженерик",c:"#7163c2"}]},
 fluconazole:{inn:"Флуконазол",rx:"fluconazole",aliases:["флуконазол","fluconazole","дифлюкан","diflucan","флюкостат"],products:[
  {n:"Diflucan / Дифлюкан",k:"оригинальный бренд",c:"#4179b7"},{n:"Флюкостат",k:"дженерик/бренд",c:"#4b9a78"},{n:"Флуконазол",k:"дженерик",c:"#6c65c4"}]},
 apixaban:{inn:"Апиксабан",rx:"apixaban",aliases:["апиксабан","apixaban","эликвис","eliquis","апиксанта","апиклис"],products:[
  {n:"Eliquis / Эликвис",k:"оригинальный бренд",c:"#d46b3e"},{n:"Апиксанта",k:"дженерик",c:"#4c80bf"},{n:"Апиклис",k:"дженерик",c:"#4c9b7f"}]},
 ketoconazole:{inn:"Кетоконазол",rx:"ketoconazole",aliases:["кетоконазол","ketoconazole","низорал","nizoral"],products:[
  {n:"Nizoral / Низорал",k:"бренд",c:"#4e74b7"},{n:"Кетоконазол",k:"дженерик",c:"#4c987a"},{n:"Ketoconazole",k:"дженерик",c:"#7361c3"}]},
 venlafaxine:{inn:"Венлафаксин",rx:"venlafaxine",aliases:["венлафаксин","venlafaxine","эффексор","effexor","велаксин"],products:[
  {n:"Effexor",k:"оригинальный бренд",c:"#4578b7"},{n:"Велаксин",k:"бренд",c:"#4c9a7a"},{n:"Венлафаксин",k:"дженерик",c:"#6e64c2"}]},
 pantoprazole:{inn:"Пантопразол",rx:"pantoprazole",aliases:["пантопразол","pantoprazole","контролок","controloc","нольпаза"],products:[
  {n:"Controloc / Контролок",k:"бренд",c:"#4479b9"},{n:"Нольпаза",k:"дженерик/бренд",c:"#4e9a7d"},{n:"Пантопразол",k:"дженерик",c:"#6d64c2"}]},
 zolpidem:{inn:"Золпидем",rx:"zolpidem",aliases:["золпидем","zolpidem","амбиен","ambien","ивадал"],products:[
  {n:"Ambien",k:"оригинальный бренд",c:"#4d75b7"},{n:"Ивадал",k:"бренд",c:"#4c977b"},{n:"Zolpidem",k:"дженерик",c:"#6e63c4"}]},
 paracetamol:{inn:"Парацетамол",rx:"acetaminophen",aliases:["парацетамол","paracetamol","acetaminophen","панадол","panadol"],products:[
  {n:"Panadol / Панадол",k:"бренд",c:"#d75445"},{n:"Парацетамол",k:"дженерик",c:"#397bbd"},{n:"Acetaminophen",k:"МНН США",c:"#4d9a7b"}]},
 losartan:{inn:"Лозартан",rx:"losartan",aliases:["лозартан","losartan","лозап","лориста","козаар"],products:[{n:"Лозартан",k:"дженерик"},{n:"Лозап",k:"бренд"},{n:"Лориста",k:"бренд"}]},
 lisinopril:{inn:"Лизиноприл",rx:"lisinopril",aliases:["лизиноприл","lisinopril","диротон","лизинотон"],products:[{n:"Лизиноприл",k:"дженерик"},{n:"Диротон",k:"бренд"}]},
 hydrochlorothiazide:{inn:"Гидрохлоротиазид",rx:"hydrochlorothiazide",aliases:["гидрохлоротиазид","hydrochlorothiazide","гипотиазид"],products:[{n:"Гидрохлоротиазид",k:"дженерик"},{n:"Гипотиазид",k:"бренд"}]},
 bisoprolol:{inn:"Бисопролол",rx:"bisoprolol",aliases:["бисопролол","bisoprolol","конкор","коронал"],products:[{n:"Бисопролол",k:"дженерик"},{n:"Конкор",k:"бренд"}]},
 aspirin:{inn:"Ацетилсалициловая кислота",rx:"aspirin",aliases:["аспирин","ацетилсалициловая кислота","aspirin","кардиомагнил","тромбо асс"],products:[{n:"Ацетилсалициловая кислота",k:"дженерик"},{n:"Аспирин",k:"бренд"}]},
 diclofenac:{inn:"Диклофенак",rx:"diclofenac",aliases:["диклофенак","diclofenac","вольтарен","ортофен"],products:[{n:"Диклофенак",k:"дженерик"},{n:"Вольтарен",k:"бренд"}]},
 naproxen:{inn:"Напроксен",rx:"naproxen",aliases:["напроксен","naproxen","налгезин","алив"],products:[{n:"Напроксен",k:"дженерик"},{n:"Налгезин",k:"бренд"}]},
 amoxicillin:{inn:"Амоксициллин",rx:"amoxicillin",aliases:["амоксициллин","amoxicillin","флемоксин","оспамокс"],products:[{n:"Амоксициллин",k:"дженерик"},{n:"Флемоксин Солютаб",k:"бренд"}]},
 clavulanate:{inn:"Клавулановая кислота",rx:"clavulanate",aliases:["клавулановая кислота","клавуланат","clavulanate"],products:[{n:"Клавулановая кислота",k:"компонент комбинированных препаратов"}]},
 cetirizine:{inn:"Цетиризин",rx:"cetirizine",aliases:["цетиризин","cetirizine","зиртек","цетрин"],products:[{n:"Цетиризин",k:"дженерик"},{n:"Зиртек",k:"бренд"},{n:"Цетрин",k:"бренд"}]},
 loratadine:{inn:"Лоратадин",rx:"loratadine",aliases:["лоратадин","loratadine","кларитин","ломилан"],products:[{n:"Лоратадин",k:"дженерик"},{n:"Кларитин",k:"бренд"}]},
 dapagliflozin:{inn:"Дапаглифлозин",rx:"dapagliflozin",aliases:["дапаглифлозин","dapagliflozin","форсига","форсига"],products:[{n:"Дапаглифлозин",k:"дженерик/МНН"},{n:"Форсига",k:"бренд"}]},
 rosuvastatin:{inn:"Розувастатин",rx:"rosuvastatin",aliases:["розувастатин","rosuvastatin","крестор","роксера"],products:[{n:"Розувастатин",k:"дженерик"},{n:"Крестор",k:"бренд"},{n:"Роксера",k:"бренд"}]}

};

const drugDoses = {
 "levothyroxine": {
  "tablet": [
   "25 мкг",
   "50 мкг",
   "75 мкг",
   "88 мкг",
   "100 мкг",
   "112 мкг",
   "125 мкг",
   "150 мкг"
  ]
 },
 "calcium": {
  "tablet": [
   "500 мг",
   "1000 мг"
  ],
  "liquid": [
   "По конкретному препарату"
  ]
 },
 "sildenafil": {
  "tablet": [
   "25 мг",
   "50 мг",
   "100 мг"
  ]
 },
 "nitroglycerin": {
  "sublingual": [
   "0,5 мг"
  ],
  "spray": [
   "0,4 мг/доза"
  ],
  "infusion": [
   "Концентрация зависит от препарата"
  ]
 },
 "clopidogrel": {
  "tablet": [
   "75 мг",
   "300 мг"
  ]
 },
 "omeprazole": {
  "capsule": [
   "10 мг",
   "20 мг",
   "40 мг"
  ],
  "tablet": [
   "20 мг",
   "40 мг"
  ],
  "injection": [
   "40 мг"
  ]
 },
 "warfarin": {
  "tablet": [
   "2,5 мг"
  ]
 },
 "ibuprofen": {
  "tablet": [
   "200 мг",
   "400 мг"
  ],
  "liquid": [
   "100 мг/5 мл",
   "200 мг/5 мл"
  ],
  "topical": [
   "5%"
  ]
 },
 "amlodipine": {
  "tablet": [
   "5 мг",
   "10 мг"
  ]
 },
 "atorvastatin": {
  "tablet": [
   "10 мг",
   "20 мг",
   "40 мг",
   "80 мг"
  ]
 },
 "linezolid": {
  "tablet": [
   "600 мг"
  ],
  "infusion": [
   "2 мг/мл"
  ]
 },
 "sertraline": {
  "tablet": [
   "50 мг",
   "100 мг"
  ]
 },
 "metformin": {
  "tablet": [
   "500 мг",
   "850 мг",
   "1000 мг"
  ],
  "tablet_xr": [
   "500 мг",
   "750 мг",
   "1000 мг"
  ]
 },
 "ciprofloxacin": {
  "tablet": [
   "250 мг",
   "500 мг",
   "750 мг"
  ],
  "infusion": [
   "2 мг/мл"
  ],
  "drops": [
   "0,3%"
  ]
 },
 "doxycycline": {
  "capsule": [
   "100 мг",
   "200 мг"
  ]
 },
 "iron": {
  "tablet": [
   "По конкретной соли железа"
  ],
  "liquid": [
   "По конкретному препарату"
  ],
  "infusion": [
   "По конкретному препарату"
  ]
 },
 "alendronate": {
  "tablet": [
   "10 мг",
   "70 мг"
  ]
 },
 "antacid": {
  "chewable": [
   "По конкретному препарату"
  ],
  "liquid": [
   "По конкретному препарату"
  ]
 },
 "digoxin": {
  "tablet": [
   "0,125 мг",
   "0,25 мг"
  ],
  "injection": [
   "0,25 мг/мл"
  ]
 },
 "amiodarone": {
  "tablet": [
   "200 мг"
  ],
  "injection": [
   "50 мг/мл"
  ]
 },
 "simvastatin": {
  "tablet": [
   "10 мг",
   "20 мг",
   "40 мг"
  ]
 },
 "clarithromycin": {
  "tablet": [
   "250 мг",
   "500 мг"
  ],
  "tablet_xr": [
   "500 мг"
  ],
  "liquid": [
   "125 мг/5 мл",
   "250 мг/5 мл"
  ]
 },
 "azithromycin": {
  "tablet": [
   "250 мг",
   "500 мг"
  ],
  "liquid": [
   "100 мг/5 мл",
   "200 мг/5 мл"
  ],
  "infusion": [
   "500 мг"
  ]
 },
 "fluconazole": {
  "capsule": [
   "50 мг",
   "100 мг",
   "150 мг",
   "200 мг"
  ],
  "liquid": [
   "50 мг/5 мл"
  ],
  "infusion": [
   "2 мг/мл"
  ]
 },
 "apixaban": {
  "tablet": [
   "2,5 мг",
   "5 мг"
  ]
 },
 "ketoconazole": {
  "topical": [
   "2%"
  ],
  "shampoo": [
   "2%"
  ]
 },
 "venlafaxine": {
  "tablet": [
   "37,5 мг",
   "75 мг"
  ],
  "capsule_xr": [
   "37,5 мг",
   "75 мг",
   "150 мг"
  ]
 },
 "pantoprazole": {
  "tablet": [
   "20 мг",
   "40 мг"
  ],
  "injection": [
   "40 мг"
  ]
 },
 "zolpidem": {
  "tablet": [
   "5 мг",
   "10 мг"
  ]
 },
 "paracetamol": {
  "tablet": [
   "200 мг",
   "500 мг",
   "1000 мг"
  ],
  "liquid": [
   "120 мг/5 мл",
   "250 мг/5 мл"
  ],
  "suppository": [
   "100 мг",
   "250 мг",
   "500 мг"
  ],
  "infusion": [
   "10 мг/мл"
  ]
 },
 "losartan": {
  "tablet": [
   "25 мг",
   "50 мг",
   "100 мг"
  ]
 },
 "lisinopril": {
  "tablet": [
   "5 мг",
   "10 мг",
   "20 мг"
  ]
 },
 "hydrochlorothiazide": {
  "tablet": [
   "12,5 мг",
   "25 мг"
  ]
 },
 "bisoprolol": {
  "tablet": [
   "2,5 мг",
   "5 мг",
   "10 мг"
  ]
 },
 "aspirin": {
  "tablet": [
   "100 мг",
   "500 мг"
  ],
  "enteric": [
   "75 мг",
   "100 мг"
  ],
  "effervescent": [
   "500 мг"
  ]
 },
 "diclofenac": {
  "tablet": [
   "25 мг",
   "50 мг",
   "75 мг"
  ],
  "topical": [
   "1%",
   "2%",
   "5%"
  ],
  "suppository": [
   "50 мг",
   "100 мг"
  ],
  "injection": [
   "75 мг/3 мл"
  ]
 },
 "naproxen": {
  "tablet": [
   "250 мг",
   "500 мг"
  ]
 },
 "amoxicillin": {
  "tablet": [
   "250 мг",
   "500 мг",
   "1000 мг"
  ],
  "liquid": [
   "125 мг/5 мл",
   "250 мг/5 мл"
  ]
 },
 "clavulanate": {
  "tablet": [
   "500 мг + 125 мг",
   "875 мг + 125 мг"
  ],
  "liquid": [
   "125 мг + 31,25 мг/5 мл",
   "250 мг + 62,5 мг/5 мл",
   "400 мг + 57 мг/5 мл"
  ],
  "injection": [
   "1000 мг + 200 мг"
  ]
 },
 "cetirizine": {
  "tablet": [
   "10 мг"
  ],
  "drops": [
   "10 мг/мл"
  ]
 },
 "loratadine": {
  "tablet": [
   "10 мг"
  ],
  "liquid": [
   "1 мг/мл"
  ]
 },
 "dapagliflozin": {
  "tablet": [
   "5 мг",
   "10 мг"
  ]
 },
 "rosuvastatin": {
  "tablet": [
   "5 мг",
   "10 мг",
   "20 мг",
   "40 мг"
  ]
 }
};


const FORM_LABELS={
  tablet:"Таблетки",tablet_xr:"Пролонгированные таблетки",capsule:"Капсулы",capsule_xr:"Пролонгированные капсулы",
  liquid:"Раствор / суспензия",drops:"Капли",spray:"Спрей",injection:"Раствор для инъекций",infusion:"Раствор для инфузий",
  topical:"Наружная форма",shampoo:"Шампунь",suppository:"Суппозитории",chewable:"Жевательные таблетки",
  enteric:"Кишечнорастворимые таблетки",effervescent:"Шипучие таблетки",sublingual:"Сублингвальная форма"
};
const drugForms={};
for(const [key,byType] of Object.entries(drugDoses)){
  drugForms[key]=Object.keys(byType).map(type=>({
    type,
    label:FORM_LABELS[type]||"Лекарственная форма",
    advice:"Режим приема зависит от конкретного препарата, дозировки и инструкции по медицинскому применению.",
    rx:"Зависит от конкретного препарата"
  }));
}
