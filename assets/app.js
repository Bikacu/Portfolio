(function(){
const P=window.PROJECTS||[],PR=window.PROFILE||{};
const T={
en:{"nav.projects":"Projects","nav.about":"About","nav.skills":"Skills","nav.contact":"Contact",
"hero.title":"Turning shop-floor data into decisions",
"hero.lead":"I am a Process Engineer in Planar Lightwave Circuit (PLC) Splitter manufacturing, moving into data analytics. This portfolio collects 34 projects: from yield and defect tracking on the production line to public datasets in retail, energy, and the job market.",
"hero.cta1":"Browse projects","hero.cta2":"GitHub profile",
"st.total":"projects","st.mfg":"manufacturing projects","st.ready":"published","st.prog":"in progress or designed",
"proj.title":"Projects","proj.sub":"Every project has its own repository and GitHub Pages site. Each one starts from a business question, then shows the data, analysis, and recommendation.",
"f.search":"Search","f.ph":"Search title, tool, or question","f.all":"All","f.empty":"No project matches the filter.",
"s.no":"Order: project number","s.status":"Order: most complete first","s.level":"Order: easiest first","s.skill":"Order: most matching skills",
"f.skill":"Filter by skill","f.skillh":"pick one or more; projects using more of them come first","f.clear":"Clear skills","f.match":(a,b)=>`${a} of ${b} skills`,
"g.db":"Database & SQL","g.py":"Python","g.bi":"BI & dashboard","g.eng":"Engineering & AI",
"count":(n,t)=>`Showing ${n} of ${t} projects`,
"status.planned":"Planned","status.design":"Design ready","status.in-progress":"In progress","status.done":"Published",
"lg.planned":"not started yet","lg.design":"project design published","lg.in-progress":"being built","lg.done":"finished, with live results",
"level.easy":"Easy","level.medium":"Medium","level.hard":"Hard",
"cat.manufacturing":"Manufacturing","cat.retail":"E-commerce & Retail","cat.tech":"Tech & Energy","cat.weather":"Weather & Environment","cat.property":"Property & Economy","cat.media":"Media & Social","cat.career":"Job Market & Career","cat.aviation":"Aviation & Compliance",
"btn.live":"View project","btn.code":"Code","btn.soon":"Coming soon",
"about.title":"About",
"about.p1":"I work on the production line of fiber-optic PLC Splitters: monitoring output, yield, rework, and defects, training new operators, and building small tools in Excel and Python to make reporting faster and more reliable.",
"about.p2":"These projects show how I approach data: define the business question first, clean and validate the data, use SQL and statistics only where they answer the question, and finish with a clear recommendation and an estimated impact.",
"about.h3":"How to read each project",
"about.l1":"<b>Problem</b>: the business question.","about.l2":"<b>Data</b>: source, size, and cleaning steps.","about.l3":"<b>Analysis</b>: method, code, and findings.","about.l4":"<b>Recommendation</b>: actions based on findings.","about.l5":"<b>Impact</b>: formula with explicit assumptions.",
"about.note":"Manufacturing projects use simulated or anonymized data because factory data is confidential. Impact numbers are labeled \"estimated\" or \"simulated\".",
"skills.title":"Skills",
"sk":[["SQL","DuckDB, SQLite, PostgreSQL, BigQuery. CTE, window functions, views, data tests."],["Python","pandas, NumPy, Polars, Plotly, scikit-learn, scripts and notebooks."],["Statistics","Hypothesis tests, confidence intervals, SPC and control charts, Cp/Cpk, A/B testing."],["Excel","Formulas, data validation, sheet protection, Power Query, cross-checking results."],["Dashboards","Streamlit, Looker Studio, Power BI. KPI design for non-technical readers."],["Data pipelines","ETL, parsing messy files, GitHub Actions scheduling, dbt."],["AI for analytics","LLM classification and extraction, natural-language-to-SQL with evaluation."],["Manufacturing domain","Yield, rework, defect Pareto, cycle time, QCC, operator training."]],
"contact.title":"Contact","contact.sub":"Open to Data Analyst roles in Indonesia and abroad.",
"foot":"Built with plain HTML, CSS, and JavaScript. Hosted on GitHub Pages."},
id:{"nav.projects":"Project","nav.about":"Tentang","nav.skills":"Keahlian","nav.contact":"Kontak",
"hero.title":"Mengubah data lantai produksi menjadi keputusan",
"hero.lead":"Saya Process Engineer di manufaktur Planar Lightwave Circuit (PLC) Splitter yang sedang beralih ke bidang data analytics. Portofolio ini berisi 34 project: dari pelacakan yield dan defect di lini produksi sampai dataset publik di bidang retail, energi, dan pasar kerja.",
"hero.cta1":"Lihat project","hero.cta2":"Profil GitHub",
"st.total":"project","st.mfg":"project manufaktur","st.ready":"sudah terbit","st.prog":"sedang dikerjakan atau sudah dirancang",
"proj.title":"Project","proj.sub":"Setiap project punya repository dan situs GitHub Pages sendiri. Semua dimulai dari pertanyaan bisnis, lalu menampilkan data, analisis, dan rekomendasi.",
"f.search":"Cari","f.ph":"Cari judul, tools, atau pertanyaan","f.all":"Semua","f.empty":"Tidak ada project yang cocok dengan filter.",
"s.no":"Urutan: nomor project","s.status":"Urutan: paling lengkap dulu","s.level":"Urutan: termudah dulu","s.skill":"Urutan: skill paling cocok",
"f.skill":"Filter berdasarkan skill","f.skillh":"pilih satu atau lebih; project yang memakai lebih banyak skill tampil lebih dulu","f.clear":"Hapus pilihan skill","f.match":(a,b)=>`${a} dari ${b} skill`,
"g.db":"Database & SQL","g.py":"Python","g.bi":"BI & dashboard","g.eng":"Engineering & AI",
"count":(n,t)=>`Menampilkan ${n} dari ${t} project`,
"status.planned":"Direncanakan","status.design":"Rancangan siap","status.in-progress":"Dikerjakan","status.done":"Terbit",
"lg.planned":"belum dimulai","lg.design":"rancangan project sudah terbit","lg.in-progress":"sedang dibangun","lg.done":"selesai, hasil bisa dibuka",
"level.easy":"Mudah","level.medium":"Sedang","level.hard":"Sulit",
"cat.manufacturing":"Manufaktur","cat.retail":"E-commerce & Retail","cat.tech":"Teknologi & Energi","cat.weather":"Cuaca & Lingkungan","cat.property":"Properti & Ekonomi","cat.media":"Media & Sosial","cat.career":"Pasar Kerja & Karier","cat.aviation":"Penerbangan & Compliance",
"btn.live":"Buka project","btn.code":"Kode","btn.soon":"Segera hadir",
"about.title":"Tentang",
"about.p1":"Saya bekerja di lini produksi PLC Splitter fiber optik: memantau output, yield, rework, dan defect, melatih operator baru, serta membuat alat bantu di Excel dan Python agar pelaporan lebih cepat dan andal.",
"about.p2":"Project-project ini menunjukkan cara saya mengolah data: menetapkan pertanyaan bisnis lebih dulu, membersihkan dan memvalidasi data, memakai SQL dan statistik hanya jika menjawab pertanyaan, lalu menutup dengan rekomendasi yang jelas dan estimasi dampak.",
"about.h3":"Cara membaca setiap project",
"about.l1":"<b>Problem</b>: pertanyaan bisnis.","about.l2":"<b>Data</b>: sumber, ukuran, dan langkah cleaning.","about.l3":"<b>Analysis</b>: metode, kode, dan temuan.","about.l4":"<b>Recommendation</b>: tindakan berdasarkan temuan.","about.l5":"<b>Impact</b>: rumus dengan asumsi yang tertulis jelas.",
"about.note":"Project manufaktur memakai data simulasi atau data yang dianonimkan karena data pabrik bersifat rahasia. Angka dampak diberi label \"estimated\" atau \"simulated\".",
"skills.title":"Keahlian",
"sk":[["SQL","DuckDB, SQLite, PostgreSQL, BigQuery. CTE, window function, view, data test."],["Python","pandas, NumPy, Polars, Plotly, scikit-learn, skrip dan notebook."],["Statistik","Uji hipotesis, confidence interval, SPC dan control chart, Cp/Cpk, A/B testing."],["Excel","Rumus, data validation, proteksi sheet, Power Query, cek silang hasil."],["Dashboard","Streamlit, Looker Studio, Power BI. Desain KPI untuk pembaca non-teknis."],["Data pipeline","ETL, parsing file berantakan, penjadwalan GitHub Actions, dbt."],["AI untuk analitik","Klasifikasi dan ekstraksi dengan LLM, natural language to SQL beserta evaluasinya."],["Domain manufaktur","Yield, rework, Pareto defect, cycle time, QCC, pelatihan operator."]],
"contact.title":"Kontak","contact.sub":"Terbuka untuk posisi Data Analyst di Indonesia maupun luar negeri.",
"foot":"Dibuat dengan HTML, CSS, dan JavaScript murni. Di-hosting di GitHub Pages."}};
const CATH={manufacturing:"--navyH",retail:"--roseH",tech:"--plumH",weather:"--tealH",property:"--amberH",media:"--roseH",career:"--skyH",aviation:"--plumH"};
const LVC={easy:"var(--green)",medium:"var(--amberH)",hard:"var(--roseH)"};
const STO={done:0,"in-progress":1,design:2,planned:3},LVO={easy:0,medium:1,hard:2};
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const gh=PR.github||"";
const liveURL=p=>p.live||`https://${gh}.github.io/${p.slug}/`,repoURL=p=>p.repo||`https://github.com/${gh}/${p.slug}`;
const hasLink=p=>p.status!=="planned";
// Skill taxonomy: derived from the free-text "tools" field. A project may also set "skills": [...] to override.
const SK=[["db","SQL",/\bSQL\b|DuckDB|SQLite|PostgreSQL|BigQuery|dbt/i],["db","DuckDB",/DuckDB/i],["db","SQLite",/SQLite/i],["db","PostgreSQL",/PostgreSQL/i],["db","BigQuery",/BigQuery/i],["db","dbt",/\bdbt/i],
["py","Python",/Python/i],["py","pandas",/pandas/i],["py","Polars",/Polars/i],["py","SciPy",/SciPy/i],["py","statsmodels",/statsmodels/i],["py","scikit-learn",/scikit-learn/i],["py","Plotly",/plotly/i],["py","matplotlib",/matplotlib/i],["py","Jupyter",/Jupyter/i],["py","pytest",/pytest/i],
["bi","Streamlit",/Streamlit/i],["bi","Power BI",/Power BI/i],["bi","Looker Studio",/Looker/i],["bi","Excel",/Excel/i],["bi","Power Query",/Power Query/i],["bi","HTML dashboard",/dashboard HTML|HTML dashboard/i],
["eng","GitHub Actions",/GitHub Actions/i],["eng","Docker",/Docker/i],["eng","LLM",/LLM|Claude|Gemini|LangChain|LangGraph/i],["eng","NLP",/NLP|sentiment/i],["eng","Web scraping",/Playwright|requests|scraping/i]];
P.forEach(p=>{p._sk=Array.isArray(p.skills)?p.skills:SK.filter(([, ,re])=>re.test(p.tools)).map(([,n])=>n)});
const SKC=n=>P.filter(p=>p._sk.includes(n)).length;
const SKG=["db","py","bi","eng"];

let lang="en";
try{const u=new URLSearchParams(location.search).get("lang");lang=(u==="id"||u==="en")?u:(localStorage.getItem("lang")||((navigator.language||"").startsWith("id")?"id":"en"))}catch(e){}
const S={q:"",category:"*",level:"*",status:"*",sort:"no",skills:[]};
try{const u=new URLSearchParams(location.search).get("skill");if(u){S.skills=u.split(",").map(x=>x.trim()).filter(x=>SK.some(s=>s[1].toLowerCase()===x.toLowerCase())).map(x=>SK.find(s=>s[1].toLowerCase()===x.toLowerCase())[1]);if(S.skills.length)S.sort="skill"}}catch(e){}
const hit=p=>S.skills.filter(s=>p._sk.includes(s)).length;
function toggleSkill(n){const i=S.skills.indexOf(n);i<0?S.skills.push(n):S.skills.splice(i,1);if(S.skills.length&&S.sort==="no")S.sort="skill";if(!S.skills.length&&S.sort==="skill")S.sort="no";
 syncURL();render()}
function syncURL(){try{const u=new URL(location.href);S.skills.length?u.searchParams.set("skill",S.skills.join(",")):u.searchParams.delete("skill");history.replaceState(null,"",u)}catch(e){}}
const t=k=>T[lang][k]??T.en[k]??k;

function chips(el,key,vals,labelFn){
 el.innerHTML=[["*",t("f.all"),P.length]].concat(vals.map(v=>[v,labelFn(v),P.filter(p=>p[key]===v).length])).map(([v,l,n])=>`<button type="button" class="chipb" data-v="${v}" aria-pressed="${S[key]===v}">${esc(l)}<i>${n}</i></button>`).join("");
 el.onclick=e=>{const b=e.target.closest(".chipb");if(!b)return;S[key]=b.dataset.v;render()};
}
function uniq(k,order){const s=[...new Set(P.map(p=>p[k]))];return order?s.sort((a,b)=>order[a]-order[b]):s.sort((a,b)=>P.filter(p=>p[k]===b).length-P.filter(p=>p[k]===a).length)}

function render(){
 document.documentElement.lang=lang;
 document.querySelectorAll("[data-i]").forEach(el=>{const v=t(el.dataset.i);if(typeof v==="string")el.innerHTML=v});
 document.querySelectorAll("[data-ph]").forEach(el=>el.placeholder=t(el.dataset.ph));
 document.querySelectorAll(".lang button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.lang===lang));
 $("role").textContent=(PR.role&&PR.role[lang])||"";
 $("brand").textContent=PR.name||"";
 const n=s=>P.filter(p=>s.includes(p.status)).length;
 $("stats").innerHTML=[[P.length,"st.total","--navyH"],[P.filter(p=>p.category==="manufacturing").length,"st.mfg","--tealH"],[n(["done"]),"st.ready","--amberH"],[n(["in-progress","design"]),"st.prog","--plumH"]]
  .map(([v,k,h])=>`<div class="stat" style="--h:var(${h})"><b>${v}</b><span>${t(k)}</span></div>`).join("");
 $("legend").innerHTML=["done","in-progress","design","planned"].map(s=>`<span><span class="badge st-${s}">${t("status."+s)}</span>${t("lg."+s)}</span>`).join("");
 $("fSkill").innerHTML=`<div class="sh"><b>${t("f.skill")}</b><span>${t("f.skillh")}</span>${S.skills.length?`<button type="button" class="clr">${t("f.clear")}</button>`:""}</div>`+
  SKG.map(g=>`<div class="row"><span class="gl">${t("g."+g)}</span>${SK.filter(s=>s[0]===g&&SKC(s[1])).map(s=>`<button type="button" class="chipb sk" data-sk="${esc(s[1])}" aria-pressed="${S.skills.includes(s[1])}">${esc(s[1])}<i>${SKC(s[1])}</i></button>`).join("")}</div>`).join("");
 chips($("fCat"),"category",uniq("category"),v=>t("cat."+v));
 chips($("fLevel"),"level",uniq("level",LVO),v=>t("level."+v));
 chips($("fStatus"),"status",uniq("status",STO),v=>t("status."+v));
 const q=S.q.trim().toLowerCase();
 let L=P.filter(p=>(S.category==="*"||p.category===S.category)&&(S.level==="*"||p.level===S.level)&&(S.status==="*"||p.status===S.status)&&(!S.skills.length||hit(p)>0)&&
  (!q||[p.title,p.tools,p.question.en,p.question.id,t("cat."+p.category),"#"+p.no].join(" ").toLowerCase().includes(q)));
 L.sort((a,b)=>S.sort==="skill"?hit(b)-hit(a)||a.no-b.no:S.sort==="status"?STO[a.status]-STO[b.status]||a.no-b.no:S.sort==="level"?LVO[a.level]-LVO[b.level]||a.no-b.no:a.no-b.no);
 $("count").textContent=T[lang].count(L.length,P.length);
 $("empty").hidden=L.length>0;
 $("grid").innerHTML=L.map(p=>`<article class="pc" style="--h:var(${CATH[p.category]||"--navyH"})" id="p${p.no}">
  <div class="hd"><span class="no">#${String(p.no).padStart(2,"0")}</span><span class="cat">${esc(t("cat."+p.category))}</span></div>
  <h3>${esc(p.title)}</h3>
  <p class="qq">${esc(p.question[lang]||p.question.en)}</p>
  <div class="tools" title="${esc(p.tools)}">${p._sk.map(s=>`<button type="button" data-sk="${esc(s)}" class="${S.skills.includes(s)?"on":""}" aria-pressed="${S.skills.includes(s)}">${esc(s)}</button>`).join("")}</div>
  ${S.skills.length?`<span class="mt">${T[lang]["f.match"](hit(p),S.skills.length)}</span>`:""}
  <div class="meta"><span class="badge st-${p.status}">${t("status."+p.status)}</span><span class="lv" style="--lvc:${LVC[p.level]}">${t("level."+p.level)}</span></div>
  <div class="links">${hasLink(p)?`<a class="live" href="${liveURL(p)}" target="_blank" rel="noopener">${t("btn.live")}</a><a class="code" href="${repoURL(p)}" target="_blank" rel="noopener">${t("btn.code")}</a>`:`<span>${t("btn.soon")}</span>`}</div>
 </article>`).join("");
 $("skillGrid").innerHTML=t("sk").map(([h,d])=>`<div class="card"><h3>${esc(h)}</h3><p>${esc(d)}</p></div>`).join("");
 const c=[];if(gh)c.push(`<a class="btn pri" href="https://github.com/${gh}" target="_blank" rel="noopener">GitHub</a>`);
 if(PR.linkedin)c.push(`<a class="btn" href="${esc(PR.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`);
 if(PR.email)c.push(`<a class="btn" href="mailto:${esc(PR.email)}">Email</a>`);
 $("contactLinks").innerHTML=c.join("");
 $("ghLink").href=`https://github.com/${gh}`;
 $("sort").value=S.sort;
}
document.querySelector(".lang").onclick=e=>{const b=e.target.closest("button");if(!b)return;lang=b.dataset.lang;try{localStorage.setItem("lang",lang)}catch(x){}render()};
$("q").oninput=e=>{S.q=e.target.value;render()};
document.addEventListener("click",e=>{const b=e.target.closest("[data-sk]");if(b){toggleSkill(b.dataset.sk);return}if(e.target.closest("#fSkill .clr")){S.skills=[];if(S.sort==="skill")S.sort="no";syncURL();render()}});
$("sort").onchange=e=>{S.sort=e.target.value;render()};
$("year").textContent="© "+new Date().getFullYear()+" "+(PR.name||"");
render();
})();
