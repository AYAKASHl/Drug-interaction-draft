const brandRegistrationStatus={
  "ксанакс":{label:"Xanax",status:"Нет действующего РУ в РФ",note:"Регистрация торгового наименования Xanax отменена. МНН алпразолам зарегистрирован в РФ под другими торговыми наименованиями."},
  "xanax":{label:"Xanax",status:"Нет действующего РУ в РФ",note:"Регистрация торгового наименования Xanax отменена. МНН алпразолам зарегистрирован в РФ под другими торговыми наименованиями."},
  "вегови":{label:"Wegovy",status:"Нет действующего РУ в РФ",note:"Wegovy содержит семаглутид, но само торговое наименование не зарегистрировано в РФ."},
  "wegovy":{label:"Wegovy",status:"Нет действующего РУ в РФ",note:"Wegovy содержит семаглутид, но само торговое наименование не зарегистрировано в РФ."},
  "оземпик":{label:"Ozempic",status:"Есть действующее РУ в РФ",note:"У Ozempic есть действующее российское регистрационное удостоверение. Наличие в продаже может отличаться от регистрационного статуса."},
  "ozempic":{label:"Ozempic",status:"Есть действующее РУ в РФ",note:"У Ozempic есть действующее российское регистрационное удостоверение. Наличие в продаже может отличаться от регистрационного статуса."},
  "веллбутрин":{label:"Wellbutrin",status:"Нет действующего РУ в РФ",note:"Бупропион не представлен действующими регистрациями в РФ."},
  "wellbutrin":{label:"Wellbutrin",status:"Нет действующего РУ в РФ",note:"Бупропион не представлен действующими регистрациями в РФ."}
};
function brandRegistrationNotice(d){
  const info=brandRegistrationStatus[norm(d.queryInput||"")];
  if(!info)return "";
  return `<div class="brand-registration-note"><strong>${info.label}: ${info.status}</strong><span>${info.note}</span></div>`;
}

function norm(s){return (s||"").toLowerCase().trim().replace(/ё/g,"е").replace(/[–—]/g,"-")}
function getGrlsStore(){return window.GRLS_RU&&window.GRLS_RU.by_inn?window.GRLS_RU:{meta:{status:"not_loaded"},by_inn:{}}}
function grlsEntryByInn(inn){return getGrlsStore().by_inn[norm(inn)]||null}
function findDrug(q){
 q=norm(q); if(!q)return null;
 for(const [key,d] of Object.entries(drugs)) if(norm(d.inn)===q||d.aliases.some(x=>norm(x)===q)) return {key,...d};
 const store=getGrlsStore();
 for(const [innKey,g] of Object.entries(store.by_inn||{})){
   if(innKey===q || (g.trade_names||[]).some(x=>norm(x.name)===q)){
     const local=Object.entries(drugs).find(([k,d])=>norm(d.inn)===innKey);
     if(local) return {key:local[0],...local[1]};
   }
 }
 for(const [key,d] of Object.entries(drugs)) if(norm(d.inn).includes(q)||d.aliases.some(x=>norm(x).includes(q))) return {key,...d};
 for(const [innKey,g] of Object.entries(store.by_inn||{})){
   if(innKey.includes(q) || (g.trade_names||[]).some(x=>norm(x.name).includes(q))){
     const local=Object.entries(drugs).find(([k,d])=>norm(d.inn)===innKey);
     if(local) return {key:local[0],...local[1]};
   }
 }
 return null;
}
function pkey(a,b){return [a,b].sort().join("|")}

function fillDatalist(){
 const dl=document.getElementById("drugList"), set=new Set();
 Object.values(drugs).forEach(d=>{set.add(capDrugName(d.inn)); d.aliases.forEach(a=>set.add(capDrugName(a)))});
 const store=getGrlsStore();
 Object.values(store.by_inn||{}).forEach(g=>{set.add(capDrugName(g.inn||""));(g.trade_names||[]).forEach(t=>set.add(capDrugName(t.name)))});
 [...set].filter(Boolean).sort((a,b)=>a.localeCompare(b,"ru")).forEach(v=>{const o=document.createElement("option");o.value=v;dl.appendChild(o)})
}
function capDrugName(s){
 s=(s||"").trim();
 return s ? s.charAt(0).toLocaleUpperCase("ru-RU") + s.slice(1) : s;
}
const originalNames={};

function formIcon(type){
 const common='viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
 const map={
  tablet:`<svg ${common}><rect x="5" y="9" width="22" height="14" rx="7"/><path d="M16 10v12"/></svg>`,
  tablet_xr:`<svg ${common}><rect x="4" y="9" width="24" height="14" rx="7"/><path d="M10 16h12"/><path d="M23 7l2 2 2-2"/></svg>`,
  capsule:`<svg ${common}><path d="M9.2 22.8a6 6 0 010-8.5l5.1-5.1a6 6 0 018.5 8.5l-5.1 5.1a6 6 0 01-8.5 0z"/><path d="M12 11.5l8.5 8.5"/></svg>`,
  capsule_xr:`<svg ${common}><path d="M9.2 22.8a6 6 0 010-8.5l5.1-5.1a6 6 0 018.5 8.5l-5.1 5.1a6 6 0 01-8.5 0z"/><path d="M12 11.5l8.5 8.5"/><path d="M24 7v4m-2-2h4"/></svg>`,
  liquid:`<svg ${common}><path d="M11 5h10"/><path d="M12 5v5l-3 4v12h14V14l-3-4V5"/><path d="M10 18h12"/></svg>`,
  drops:`<svg ${common}><path d="M16 5s7 8 7 14a7 7 0 01-14 0c0-6 7-14 7-14z"/><path d="M12 21c1 2 3 3 5 3"/></svg>`,
  spray:`<svg ${common}><path d="M11 11h10l2 5v11H10V16z"/><path d="M14 11V7h8"/><path d="M22 7h5"/><path d="M27 7l2-2"/></svg>`,
  injection:`<svg ${common}><path d="M9 23l12-12"/><path d="M17 7l8 8"/><path d="M20 4l8 8"/><path d="M7 21l4 4"/><path d="M5 27l4-4"/></svg>`,
  infusion:`<svg ${common}><rect x="9" y="4" width="14" height="18" rx="3"/><path d="M12 9h8"/><path d="M16 22v6"/><path d="M16 13c-2 3-3 4-3 6a3 3 0 006 0c0-2-1-3-3-6z"/></svg>`,
  topical:`<svg ${common}><path d="M9 5h14l-2 21H11L9 5z"/><path d="M11 10h10"/><path d="M13 3h6"/></svg>`,
  shampoo:`<svg ${common}><path d="M12 8h9l2 6v13H9V14z"/><path d="M15 8V4h8"/><path d="M23 4h4"/></svg>`,
  suppository:`<svg ${common}><path d="M16 4c5 6 7 10 7 15a7 7 0 01-14 0c0-5 2-9 7-15z"/></svg>`,
  chewable:`<svg ${common}><circle cx="16" cy="16" r="10"/><path d="M9 16h14"/><path d="M16 9v14"/></svg>`,
  enteric:`<svg ${common}><rect x="5" y="9" width="22" height="14" rx="7"/><path d="M7 13c5-3 13-3 18 0"/></svg>`,
  effervescent:`<svg ${common}><circle cx="16" cy="16" r="10"/><circle cx="13" cy="15" r="1"/><circle cx="19" cy="11" r="1"/><circle cx="20" cy="19" r="1.3"/></svg>`,
  sublingual:`<svg ${common}><rect x="6" y="7" width="20" height="12" rx="6"/><path d="M10 25c4-3 8-3 12 0"/><path d="M13 22h6"/></svg>`
 };
 return `<span class="form-icon">${map[type]||map.tablet}</span>`;
}
function formStatusClass(text){
 const t=(text||"").toLowerCase();
 if(t.includes("по рецепту") && !t.includes("завис")) return "rx-strong";
 if(t.includes("без рецепта")) return "rx-otc";
 return "rx-mixed";
}
function defaultDrugForm(key){
 const list=drugForms[key]||[];
 return list[0]||{type:"tablet",label:"Лекарственная форма",advice:(drugMeta[key]||{}).take||"Следуйте инструкции конкретного препарата.",rx:(drugMeta[key]||{}).rxStatus||"Статус не указан"};
}
function primaryIntakeHtml(d){
 const f=defaultDrugForm(d.key);
 return `<div class="inline-intake-head">${formIcon(f.type)}<div><b>${capDrugName(d.inn)}</b><small>${f.label}</small></div></div><span>${f.advice}</span>`;
}

function doseOptionsFor(key,type){
 const byDrug=drugDoses[key]||{};
 const list=byDrug[type]||["По конкретному препарату"];
 return Array.isArray(list)&&list.length?list:["По конкретному препарату"];
}
function doseSelectHtml(key,type){
 const doses=doseOptionsFor(key,type);
 return `<div class="dose-row">
   <label for="dose-${key}">Дозировка</label>
   <select class="dose-select" id="dose-${key}" onchange="updateSelectedDose(this)">
     ${doses.map((x,i)=>`<option value="${x}" ${i===0?"selected":""}>${x}</option>`).join("")}
   </select>
 </div>`;
}
function updateSelectedDose(select){
 const section=select.closest(".form-section");
 if(!section)return;
 const out=section.querySelector(".selected-strength");
 if(out)out.textContent=select.value;
}
function clinicalHtml(d){
 const c=clinicalInfo[d.key]||{ind:["Показания зависят от конкретной лекарственной формы и инструкции."],contra:["Противопоказания зависят от конкретной лекарственной формы и инструкции."]};
 const li=a=>(a||[]).map(x=>`<li>${x}</li>`).join("");
 return `<section class="clinical-details">
   <details>
     <summary>Показания</summary>
     <div class="clinical-note">Указаны основные показания. Полный перечень зависит от конкретного препарата, формы и дозировки.</div>
     <ul class="clinical-list">${li(c.ind)}</ul>
   </details>
   <details>
     <summary>Противопоказания</summary>
     <div class="clinical-note">Это краткий перечень ключевых ограничений, а не замена официальной инструкции.</div>
     <ul class="clinical-list">${li(c.contra)}</ul>
   </details>
 </section>`;
}

function formSelectorHtml(d,m){
 const list=drugForms[d.key]||[defaultDrugForm(d.key)];
 const buttons=list.map((f,i)=>`<button type="button" class="form-chip ${i===0?"active":""}" data-index="${i}" onclick="selectDrugForm(this)">${formIcon(f.type)}<span>${f.label}</span></button>`).join("");
 const f=list[0];
 const doses=doseOptionsFor(d.key,f.type);
 return `<section class="form-section" data-drug-key="${d.key}">
   <h4>Форма выпуска</h4>
   <div class="form-tabs">${buttons}</div>
   <div class="form-advice">
     <div class="form-advice-head">${formIcon(f.type)}<strong>${f.label}</strong><span class="selected-strength">${doses[0]}</span></div>
     <p>${f.advice}</p>
     <span class="form-rx ${formStatusClass(f.rx||m.rxStatus)}">${f.rx||m.rxStatus}</span>
     ${doseSelectHtml(d.key,f.type)}
   </div>
 </section>`;
}
function selectDrugForm(btn){
 const section=btn.closest(".form-section");
 if(!section)return;
 const key=section.dataset.drugKey;
 const list=drugForms[key]||[];
 const f=list[Number(btn.dataset.index)]||list[0];
 if(!f)return;
 section.querySelectorAll(".form-chip").forEach(x=>x.classList.toggle("active",x===btn));
 const doses=doseOptionsFor(key,f.type);
 const box=section.querySelector(".form-advice");
 box.innerHTML=`<div class="form-advice-head">${formIcon(f.type)}<strong>${f.label}</strong><span class="selected-strength">${doses[0]}</span></div><p>${f.advice}</p><span class="form-rx ${formStatusClass(f.rx)}">${f.rx}</span>${doseSelectHtml(key,f.type)}`;
}

function getOriginalProduct(d){
 const g=grlsEntryByInn(d.inn);
 if(g&&g.reference&&g.reference.name) return {n:g.reference.name,ru:g.reference.ru||"",verified:true};
 return null;
}
function getRuMedicines(d){
 const g=grlsEntryByInn(d.inn);
 return g&&Array.isArray(g.trade_names)?g.trade_names:[];
}
function shortRxStatus(text){
 text=(text||"").toLowerCase();
 if(text.includes("по рецепту") && !text.includes("без рецепта") && !text.includes("завис")) return "По рецепту";
 if(text.includes("без рецепта") && !text.includes("по рецепту")) return "Без рецепта";
 if(text.includes("завис") || (text.includes("по рецепту") && text.includes("без рецепта"))) return "Зависит от формы и дозировки";
 return capDrugName((text||"Статус отпуска не указан").replace(/\.$/,""));
}
function grlsSourceLine(){
 const meta=getGrlsStore().meta||{};
 if(meta.status==="ok"){
   const date=meta.source_date||meta.generated_at||"";
   return `<div class="grls-source"><span class="grls-dot ok"></span><strong>ГРЛС Минздрава России</strong><span>${date?`данные: ${date}`:"актуальная выгрузка"}</span></div>`;
 }
 return `<div class="grls-source"><span class="grls-dot warn"></span><strong>ГРЛС</strong><span>актуальная выгрузка еще не загружена</span></div>`;
}


function openEmias(){
  window.open("https://www.gosuslugi.ru/10700/","_blank","noopener,noreferrer");
}

function transliterateInnForZdravcity(text){
 const map={
  "а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ё":"e","ж":"zh","з":"z","и":"i","й":"j",
  "к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f",
  "х":"h","ц":"c","ч":"ch","ш":"sh","щ":"shh","ы":"y","э":"e","ю":"ju","я":"ja","ь":"","ъ":""
 };
 return String(text||"").toLowerCase()
   .split("").map(ch=>map[ch]!==undefined?map[ch]:ch).join("")
   .replace(/[^a-z0-9]+/g,"-")
   .replace(/^-+|-+$/g,"")
   .replace(/-+/g,"-");
}
function pharmacyLinksHtml(d){
 const inn=capDrugName(d.inn);
 const zdravSlug=transliterateInnForZdravcity(d.inn);
 const zdravUrl=`https://zdravcity.ru/analogs/${zdravSlug}/`;
 const aptekaUrl=`https://apteka.ru/search/?q=${encodeURIComponent(d.inn)}`;
 const bagIcon=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 8h12l1 12H5L6 8z"/><path d="M9 9V6a3 3 0 016 0v3"/></svg>`;
 return `<div class="pharmacy-links">
   <a class="pharmacy-link zdravcity" href="${zdravUrl}" target="_blank" rel="noopener noreferrer" aria-label="Найти ${inn} на Здравсити">${bagIcon}<span>Найти на Здравсити</span></a>
   <a class="pharmacy-link apteka" href="${aptekaUrl}" target="_blank" rel="noopener noreferrer" aria-label="Найти ${inn} на Apteka.ru">${bagIcon}<span>Найти на Apteka.ru</span></a>
   <p class="pharmacy-hint">Откроется поиск препаратов по МНН. Наличие, цена и возможность заказа зависят от региона и конкретной лекарственной формы.</p>
 </div>`;
}

function medicineRows(list, originalName){
 const refNorm=norm(originalName||"");
 const filtered=list.filter(x=>!refNorm||norm(x.name)!==refNorm);
 if(!filtered.length) return `<div class="grls-empty compact-empty">Другие зарегистрированные препараты не найдены.</div>`;
 const rows=filtered.map((p,i)=>`<div class="medicine-item grls-med ${i>=2?"extra-med":""}" ${i>=2?'style="display:none"':''}><div class="medicine-name"><strong>${capDrugName(p.name)}</strong><small>${p.form?capDrugName(p.form):""}${p.holder?`${p.form?" · ":""}${capDrugName(p.holder)}`:""}</small>${p.ru?`<small class="ru-number">РУ: ${p.ru}</small>`:""}</div><span class="med-tag">ГРЛС</span></div>`).join("");
 const more=filtered.length>2?`<button class="more-meds" type="button" onclick="this.closest('.medicine-section').querySelectorAll('.extra-med').forEach(x=>x.style.display='flex');this.remove()">Показать все (${filtered.length})</button>`:"";
 return `<div class="medicine-list compact-medicine-list">${rows}</div>${more}`;
}
function drugHtml(d){
 const m=drugMeta[d.key]||{ru:"Статус в РФ не заполнен",rxStatus:"Не указан",take:"Режим приема определяется инструкцией и назначением врача.",moa:"Механизм не заполнен"};
 const g=grlsEntryByInn(d.inn);
 const meds=getRuMedicines(d);
 const snapshotOk=(getGrlsStore().meta||{}).status==="ok";
 const hasRu=!!(g&&meds.length);
 const original=getOriginalProduct(d);
 const originalText=original?capDrugName(original.n):"Не определён";
 const originalSmall=original?(original.ru?`РУ: ${original.ru}`:"Референтный / оригинальный препарат"):"Нет подтверждённых данных в текущем источнике.";
 const rxShort=shortRxStatus(m.rxStatus);
 const rxClass=formStatusClass(m.rxStatus);
 const statusText=snapshotOk?(hasRu?"Есть действующие РУ в ГРЛС":"Действующие РУ не найдены"):"Ожидается выгрузка ГРЛС";
 return `<article class="drugcard">
  <div class="dhead"><div><h3>${capDrugName(d.inn)}</h3><p>Международное непатентованное наименование</p></div><span class="inn">МНН</span></div>
  <div class="drug-status"><span class="status-chip ${hasRu?"good":snapshotOk?"bad":""}">${statusText}</span><span class="status-chip ${rxClass}">${rxShort}</span></div>
  ${brandRegistrationNotice(d)}
  ${grlsSourceLine()}
  ${formSelectorHtml(d,m)}

  <section class="medicine-section compact-mnn-section">
    <div class="medicine-section-title compact-title">Препараты с этим МНН</div>

    ${pharmacyLinksHtml(d)}

    <div class="reference-mini">
      <span class="reference-label">Референтный / оригинальный</span>
      <div class="medicine-item original-item compact-original">
        <div class="medicine-name"><strong>${originalText}</strong><small>${originalSmall}</small></div>
        <span class="med-tag">Оригинал</span>
      </div>
    </div>

    <div class="registered-mini-title">Зарегистрированы в России</div>
    ${snapshotOk?medicineRows(meds,original&&original.n):`<div class="grls-empty compact-empty">Актуальный список появится после загрузки данных ГРЛС.</div>`}
    <div class="grls-note compact-grls-note">Наличие в аптеках зависит от региона.</div>
  </section>

  ${clinicalHtml(d)}
  <details class="drug-details"><summary>Механизм действия</summary><p>${m.moa}</p></details>
 </article>`
}

function intervalBadgeText(it){
  if(!it || it.badge!=="Нужен интервал") return it ? it.badge : "";
  const text=(it.interval||"").toLowerCase();
  if(text.includes("2 часа до") && text.includes("6 часов после")) return "Интервал: 2 ч до / 6 ч после";
  if(text.includes("4 часа")) return "Интервал: 4 часа";
  if(text.includes("30 минут")) return "Интервал: 30 минут";
  const hours=text.match(/(\d+)\s*час/);
  if(hours) return `Интервал: ${hours[1]} ч`;
  const mins=text.match(/(\d+)\s*минут/);
  if(mins) return `Интервал: ${mins[1]} мин`;
  return "Раздельный прием";
}

function renderNow(){
 const aInput=document.getElementById("a").value, bInput=document.getElementById("b").value;
 const a=findDrug(aInput), b=findDrug(bInput);
 if(a)a.queryInput=aInput; if(b)b.queryInput=bInput;
 const res=document.getElementById("result"), emp=document.getElementById("empty");
 if(!a||!b){res.style.display="none";emp.style.display="block";return}
 emp.style.display="none";res.style.display="block";
 const it=interactions[pkey(a.key,b.key)];
 document.getElementById("pairLabel").textContent=`${capDrugName(a.inn)} + ${capDrugName(b.inn)}`;
 const card=document.getElementById("resultCard");
 if(it){
  card.className=`result-card s-${it.s}`;
  document.getElementById("statusIcon").textContent=it.icon;
  document.getElementById("badge").textContent=intervalBadgeText(it);
  document.getElementById("title").textContent=it.title;
  document.getElementById("summary").textContent=it.summary;
  document.getElementById("interval").innerHTML=`<div class="intake-plan"><div class="intake-row">${primaryIntakeHtml(a)}</div><div class="intake-row">${primaryIntakeHtml(b)}</div><div class="intake-row interval-highlight"><b>Интервал между приёмами ${capDrugName(a.inn)} и ${capDrugName(b.inn)}</b><span>${it.interval}</span></div></div>`;
document.getElementById("sources").innerHTML=it.src.map(s=>`<a href="${s[1]}" target="_blank" rel="noopener">${s[0]} ↗</a>`).join("");
  saveHistory(a,b,it.badge);
 }else{
  card.className="result-card s-none";
  document.getElementById("statusIcon").textContent="?";
  document.getElementById("badge").textContent="Нет данных";
  document.getElementById("title").textContent="Для этой пары недостаточно проверенных данных";
  document.getElementById("summary").textContent="Это не означает, что препараты совместимы. Для определения клинической совместимости требуется дополнительная проверка по актуальным инструкциям и профессиональным справочникам.";
  document.getElementById("interval").innerHTML=`<div class="intake-plan"><div class="intake-row">${primaryIntakeHtml(a)}</div><div class="intake-row">${primaryIntakeHtml(b)}</div><div class="intake-row interval-highlight"><b>Интервал между приёмами ${capDrugName(a.inn)} и ${capDrugName(b.inn)}</b><span>Не установлен: по этой паре недостаточно проверенных данных.</span></div></div>`;
document.getElementById("sources").innerHTML="";
  saveHistory(a,b,"Нет данных");
 }
 document.getElementById("cards").innerHTML=drugHtml(a)+drugHtml(b);
 res.scrollIntoView({behavior:"smooth",block:"start"});
}

let searching=false;
async function render(){
 if(searching) return;
 const aa=findDrug(document.getElementById("a").value), bb=findDrug(document.getElementById("b").value);
 if(!aa||!bb){ renderNow(); return; }
 searching=true;
 const loader=document.getElementById("searchLoader");
 const loaderText=document.getElementById("searchLoaderText");
 if(loader){loader.classList.add("show");}
 const texts=["Сопоставляем МНН и торговые названия...","Проверяем взаимодействие...","Уточняем интервал и формы выпуска...","Сверяем режим отпуска и рекомендации по приему..."];
 let i=0;
 if(loaderText) loaderText.textContent=texts[0];
 const timer=setInterval(()=>{i=(i+1)%texts.length;if(loaderText)loaderText.textContent=texts[i]},800);
 await new Promise(r=>setTimeout(r,4800));
 clearInterval(timer);
 renderNow();
 if(loader){loader.classList.remove("show");}
 searching=false;
}

function saveHistory(a,b,status){
 let h=JSON.parse(localStorage.getItem("drugcheck_history")||"[]");
 h.unshift({a:a.inn,b:b.inn,status,t:new Date().toLocaleString("ru-RU")}); h=h.slice(0,8);
 localStorage.setItem("drugcheck_history",JSON.stringify(h)); renderHistory();
}
function renderHistory(){
 const h=JSON.parse(localStorage.getItem("drugcheck_history")||"[]"), el=document.getElementById("history");
 el.innerHTML=h.length?h.map(x=>`<div class="historyitem"><div><strong>${x.a} + ${x.b}</strong><br><span>${x.status}</span></div><span>${x.t}</span></div>`).join(""):`<div class="empty" style="display:block">История пока пуста. Выполните первую проверку.</div>`;
}
function renderDb(filter=""){
 const q=norm(filter), rows=Object.entries(drugs).filter(([k,d])=>{
   const g=grlsEntryByInn(d.inn); const names=(g&&g.trade_names?g.trade_names.map(x=>x.name):[]);
   return !q||norm(d.inn+" "+d.aliases.join(" ")+" "+names.join(" ")).includes(q)
 });
 const snapshotOk=(getGrlsStore().meta||{}).status==="ok";
 document.getElementById("dbBody").innerHTML=rows.map(([k,d])=>{
   const g=grlsEntryByInn(d.inn), meds=g&&g.trade_names?g.trade_names:[];
   const names=meds.slice(0,5).map(x=>capDrugName(x.name)).join(", ")||"—";
   return `<tr><td><b>${capDrugName(d.inn)}</b></td><td>${names}</td><td>${snapshotOk?(meds.length?`Есть РУ (${meds.length})`:"Нет в активной выгрузке"):"Данные не загружены"}</td><td>${(drugMeta[k]||{}).rxStatus||"—"}</td></tr>`
 }).join("");
}


document.querySelectorAll(".tab").forEach(t=>t.addEventListener("click",()=>{
 document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));document.querySelectorAll(".panel").forEach(x=>x.classList.remove("active"));
 t.classList.add("active");document.getElementById(t.dataset.tab).classList.add("active");
}));
document.getElementById("checkBtn").addEventListener("click",render);
["a","b"].forEach(id=>document.getElementById(id).addEventListener("keydown",e=>{if(e.key==="Enter")render()}));
document.getElementById("swap").addEventListener("click",()=>{const a=document.getElementById("a"),b=document.getElementById("b");[a.value,b.value]=[b.value,a.value]});
document.querySelectorAll(".quick button").forEach(btn=>btn.addEventListener("click",()=>{document.getElementById("a").value=btn.dataset.a;document.getElementById("b").value=btn.dataset.b;render()}));
document.getElementById("dbSearch").addEventListener("input",e=>renderDb(e.target.value));
document.getElementById("theme").addEventListener("click",()=>{const root=document.documentElement;const dark=root.dataset.theme==="dark";root.dataset.theme=dark?"light":"dark";localStorage.setItem("drugcheck_theme",root.dataset.theme)});
document.documentElement.dataset.theme=localStorage.getItem("drugcheck_theme")||"light";
document.querySelectorAll(".quick button").forEach(btn=>{if(btn.dataset.a&&btn.dataset.b)btn.textContent=`${capDrugName(btn.dataset.a)} + ${capDrugName(btn.dataset.b)}${btn.textContent.includes("данных мало")?" · данных мало":""}`});

fillDatalist();renderDb();renderHistory();