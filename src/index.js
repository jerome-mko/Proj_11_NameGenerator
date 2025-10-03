// English Boys (30 names, A→Z)
let engBoysName = [
  "Adam", "Ahmad", "Ali", "Anthony", "Bilal",
  "Christopher", "Daniel", "David", "Elijah", "Ethan",
  "Hassan", "Ibrahim", "Ismail", "Jacob", "James",
  "John", "Joseph", "Joshua", "Khalid", "Matthew",
  "Michael", "Mohammed", "Mustafa", "Noah", "Omar",
  "Samuel", "Tariq", "William", "Yusuf", "Zayd"
];

// English Girls (30 names, A→Z)
let engGirlsName = [
  "Abigail", "Ai", "Aisha", "Amara", "Amelia", "Amira",
  "Charlotte", "Chloe", "Elizabeth", "Ella", "Emily",
  "Fatima", "Grace", "Hana", "Huda", "Isabella",
  "Khadija", "Layla", "Lily", "Mariam", "Mary",
  "Nadia", "Noor", "Olivia", "Salma", "Sarah",
  "Sophia", "Sumaya", "Yasmin", "Zainab"
];

// Japanese Boys (30 names, hiragana order, romaji included)
let jpBoysName = [
  "あおい (Aoi)", "あさひ (Asahi)", "あんり (Anri)", "けい (Kei)", "けいた (Keita)",
  "けんじ (Kenji)", "けんた (Kenta)", "こうが (Kouga)", "こうた (Kouta)", "こうたろう (Koutarou)",
  "しゅん (Shun)", "しんじ (Shinji)", "たくみ (Takumi)", "たいが (Taiga)", "たいち (Taichi)",
  "たろう (Tarou)", "ともき (Tomoki)", "ともや (Tomoya)", "なおき (Naoki)", "はると (Haruto)",
  "はるひこ (Haruhiko)", "ひかる (Hikaru)", "ひろし (Hiroshi)", "ゆうき (Yuuki)", "ゆうすけ (Yuusuke)",
  "ゆうと (Yuuto)", "りく (Riku)", "りゅうま (Ryuma)", "じんや (Jinya)", "まさと (Masato)"
];

// Japanese Girls (30 names, hiragana order, romaji included)
let jpGirlsName = [
  "あい (Ai)", "あかね (Akane)", "あど (Ado)", "あんり (Anri)", "あすか (Asuka)", "あすか (Aska)", "えみ (Emi)",
  "かおる (Kaoru)", "きらり (Kirari)", "きほ (Kiho)", "かな (Kana)", "ちえこ (Chieko)",
  "ちさ (Chisa)", "しおり (Shiori)", "さくら (Sakura)", "そらね (Sorane)", "なぎさ (Nagisa)",
  "ななは (Nanaha)", "ななみ (Nanami)", "なつこ (Natsuko)", "なお (Nao)", "ひなた (Hinata)",
  "ひな (Hina)", "ひかる (Hikaru)", "まい (Mai)", "まりな (Marina)", "みさき (Misaki)",
  "みどり (Midori)", "ゆい (Yui)", "りえ (Rie)", "りり (Riri)", "ゆうな (Yuina)"
];

const enBoyCheckboxEl = document.getElementById("boy-checkbox-el");
const enGirlCheckboxEl = document.getElementById("girl-checkbox-el");
let generateNameEl = document.getElementById("generate-el");
let nameEl = document.getElementById("name-el");
const japaneseLanguageEl = document.getElementById("language__japanese");
const englishLanguageEl = document.getElementById("language__english");
let HeadingEl = document.getElementById("hero-heading-el");
let subheadingEl = document.getElementById("hero-subheading-el");
let labelBoyEl = document.getElementById("label-boys-el");
let labelGirlEl = document.getElementById("label-girls-el");
let copyEl = document.getElementById("copy-el");
let enNamePool = [];
let generatedName = "";

// HOME SCREEN (ENG LANGUAGE)
function generateEnName(){
    
    enNamePool = enNamePool.concat(engBoysName);
    // if (enBoyCheckboxEl.checked){
    //     enNamePool = enNamePool.concat(engBoysName);
    // }
    if (enGirlCheckboxEl.checked){
        enNamePool = [];
        enNamePool = enNamePool.concat(engGirlsName);
    }

    let randomIndex = Math.floor(Math.random() * enNamePool.length);
    generatedName = enNamePool[randomIndex];

    nameEl.textContent = generatedName;
}


// JAPANESE LANGUAGE CHANGER 

function generateJpName() {
    let jpNamePool = [];
    jpNamePool = jpNamePool.concat(jpBoysName);

    if (enGirlCheckboxEl.checked){
        jpNamePool = [];
        jpNamePool = jpNamePool.concat(jpGirlsName);
    }

    let randomJpIndex = Math.floor(Math.random() * jpNamePool.length);
    generatedName = jpNamePool[randomJpIndex];

    nameEl.textContent = generatedName
}

function jpLanguage(){
    jpGeneratorDisplay()

    copyEl.innerHTML = `コピー`;
    generateNameEl.innerHTML = `おなまえガチャ`;
    labelBoyEl.innerHTML = `僕の名`
    labelGirlEl.innerHTML = `私の名`

    generateNameEl.onclick = jpRenderName;

    subheadingEl.classList.add("japanese-text");
    subheadingEl.classList.remove("english-text");

    englishLanguageEl.classList.remove("active-language");
    japaneseLanguageEl.classList.add("active-language");
}

function jpGeneratorDisplay(){
    HeadingEl.innerHTML = `<a href="index.html"><span class="special-char">ぷち</span>ネーム</a>`;
    subheadingEl.innerHTML = `おなまえの安産。。。 保証します！`

}

function jpRenderName(){
    generateJpName()
}

// ENGLISH LANGUAGE CHANGER 

function enLanguage(){
    enGeneratorDisplay()

    copyEl.innerHTML = `Copy to Clipboard`;
    generateNameEl.innerHTML = `Generate Name`;
    labelBoyEl.innerHTML = `Boy Names`
    labelGirlEl.innerHTML = `Girl Names`

    generateNameEl.onclick = enRenderName;

    subheadingEl.classList.add("english-text");
    subheadingEl.classList.remove("japanese-text");

    japaneseLanguageEl.classList.remove("active-language");
    englishLanguageEl.classList.add("active-language");    
}

function enGeneratorDisplay(){
    HeadingEl.innerHTML = `<a href="index.html"><span class="special-char">Lil'</span> Labels</a>`;
    subheadingEl.innerHTML = `Delivering lil' names in less than 9 months.`
    
}

function enRenderName(){
    generateEnName()
}

function setupCopyButton(copyEL){
    copyEl.addEventListener("click", function(){
        navigator.clipboard.writeText(nameEl.textContent)
            .then(() => {
                copyEl.textContent = `Copied!`
                setTimeout(() => copyEl.textContent = `Copy to Clipboard`, 2000);
            }).catch(err => {
                copyEl.textContent = `Failed!`;
                });            
    });
}
setupCopyButton()