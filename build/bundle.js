!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=9)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.changeHealth1=function(e,t){var r=n.health-e,o=setInterval(function(){if(n.health<=r)clearInterval(o);else{if(n.health>0)return n.health--,t.style.width=n.health+"%",t.innerHTML=1*n.health,n.health===e&&(n.isAlive=!1),n.health;clearInterval(o)}},260)},t.changeHealth2=function(e,t){var r=o.health-e,n=setInterval(function(){if(o.health<=r)clearInterval(n);else{if(o.health>0)return o.health--,t.style.width=o.health+"%",t.innerHTML=1*o.health,o.health===e&&(o.isAlive=!1),o.health;clearInterval(n)}},260)};var n={health:100},o={health:100}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.nextRound=function(){u.value="",l.value="",n.hidden=!0,i.hidden=!1,a.hidden=!1,o.hidden=!0};var n=document.querySelector("#congratulations"),o=document.querySelector("#lose"),a=document.querySelector("#start"),i=document.querySelector("#modal"),u=document.querySelector("#result1"),l=document.querySelector("#result2")},function(e){e.exports={action:"действие",angry:"сердитый",calm:"спокойствие",ceiling:"потолок",cell:"ячейка",conversation:"разговор",counter:"противостоять",crawl:"ползти",cup:"чашка",dig:"копать, рыть",dust:"пыль",excuse:"оправдание",fix:"исправить",frown:"нахмуриться",grant:"дарить",hat:"шляпа",judge:"судья",king:"король",load:"нагрузка",major:"основной",mask:"маска",mention:"упомянуть",monitor:"монитор",narrow:"узкий",path:"путь",perfect:"совершенный",planet:"планета",prepare:"подготовить",private:"частный",recognize:"узнавать",serious:"серьезный",sharp:"острый",sheet:"лист",sick:"больной",snow:"снег",square:"площадь",steal:"украсть",steel:"сталь",tank:"бак",thought:"мысль",toss:"жеребьевка",travel:"путешествие",uniform:"форменная одежда",wet:"мокрый",whether:"ли",whose:"которых",wipe:"протирать",wrap:"обертка",buddy:"приятель",command:"команда",dear:"дорогой",double:"двойной",entire:"целый",entrance:"вход",fit:"соответствовать",flame:"пламя",glow:"свечение",match:"совпадать",memory:"память",rip:"рвать",scene:"сцена",screen:"экран",sudden:"внезапный",tower:"башня",tunnel:"туннель",wild:"дикий",worse:"хуже",anybody:"кто-нибудь",army:"армия",beer:"пиво",bird:"птица",bullet:"пуля",cat:"кот",cheek:"щека",cloud:"облако",completely:"полностью",crew:"экипаж",daughter:"дочь",detective:"детектив",doubt:"сомнения",dozen:"дюжина",escape:"побег",expression:"выражение",flat:"квартира",gather:"собирать",gently:"нежно",gesture:"жест",gold:"золото",grip:"захват",hallway:"прихожая",however:"однако",husband:"муж",wife:"жена",imagine:"воображать",inch:"дюйм",mountain:"гора",hill:"холм",nearly:"почти",nurse:"медсестра",pair:"пара",pilot:"пилот",pop:"хлопнуть",pound:"фунт",present:"подарок",rear:"задний",roar:"рев",roof:"крыша",settle:"поселиться",shoe:"ботинок",simple:"простой",sister:"сестра",spread:"распространять",stretch:"растягиваться",sweat:"вспотеть",switch:"переключатель",themselves:"себя",thin:"тонкий",warm:"теплый",yellow:"желтый",base:"основа",burst:"взрыв",Christ:"Христос",club:"клуб",colonel:"полковник",creature:"существо",dinner:"обед",grace:"грация",leap:"прыжок",manage:"управлять",master:"мастер",message:"сообщение",photo:"фотография",sell:"продавать",sergeant:"сержант",special:"специальный",type:"тип",wire:"провод",agree:"соглашаться",allow:"позволять",among:"среди",attack:"нападение",beach:"пляж",bend:"гнуть",bite:"укусать",bone:"кость",bottom:"дно",brain:"мозг",bridge:"мост",button:"кнопка",certainly:"конечно",circle:"круг",coat:"пальто",concern:"озабоченность",consider:"рассматривать",cool:"прохладный",drag:"перетащить",dry:"сухой",during:"во время",fish:"рыба",gaze:"пристальный взгляд",general:"общий",grand:"великий",hospital:"больница",immediately:"немедленно",instead:"вместо",jacket:"куртка",law:"закон",level:"уровень",marry:"жениться",pour:"литься",promise:"обещание",river:"река",service:"обслуживание",sing:"петь",single:"одиночный",sink:"утонуть",size:"размер",soft:"мягкий",struggle:"борьба",surface:"поверхность",tall:"высокий",thick:"толстый",tiny:"крошечный",twist:"изгиб",wood:"дерево",yell:"кричать",chief:"начальник",count:"считать",desert:"пустыня",doorway:"дверной проем",elevator:"лифт",flight:"полет",gotta:"должен",information:"информация",Jesus:"Иисус",lawer:"юрист",page:"страница",remote:"удаленный",scare:"пугать",secret:"тайна",shop:"магазин",slightly:"слегка",system:"система",team:"команда",trust:"доверие",one:"один",two:"два",three:"три",four:"четыре",five:"пять",six:"шесть",seven:"семь",eight:"восемь",nine:"девять",ten:"десять",eleven:"одиннадцать",twelve:"двенадцать",thirteen:"тринадцать",fourteen:"четырнадцать",fifteen:"пятнадцать",sixteen:"шестнадцать",seventeen:"семнадцать",eighteen:"восемнадцать",nineteen:"девятнадцать",twenty:"двадцать",thirty:"тридцать",forty:"сорок",fifty:"пятьдесят",sixty:"шестьдесят",seventy:"семьдесят",eighty:"восемьдесят",ninety:"девяносто",hundred:"сто",thousand:"тысяча",million:"миллион",north:"север",south:"юг",west:"запад",east:"восток",disposable:"доступный",cause:"причина",equivalent:"эквивалент",receiver:"получатель",provider:"поставщик",invoke:"просить",simplify:"упрощать",duplicate:"копия",split:"разделять",unused:"неиспользуемый",extract:"извлекать",expressed:"выраженный",observer:"наблюдатель",subject:"субъект",object:"объект",smart:"умный",pointer:"указатель",reference:"ссылка",raw:"сырой",concrete:"бетон",queue:"очередь",determines:"определять границы",branch:"ветвь",possible:"возможный",placeholder:"заполнитель",explicit:"ясный",algorithm:"алгоритм",less:"меньше",greater:"больше",weak:"слабый",shared:"общий",scope:"граница",language:"язык",trait:"черта",coroutine:"сопрограмма",improvement:"улучшение",sequence:"последовательность",template:"шаблон",rather:"лучше",january:"январь",february:"февраль",march:"март",april:"апрель",may:"май",june:"июнь",july:"июль",august:"август",september:"сентябрь",october:"октябрь",november:"ноябрь",december:"декабрь",monday:"понедельник",tuesday:"вторник",wednesday:"среда",thursday:"четверг",friday:"пятница",saturday:"суббота",sunday:"воскресенье",weekend:"выходные",expect:"ждать",actual:"фактический"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return new Promise(function(e){var t=document.querySelector(".task2");t.hidden=!1;var r=Object.keys(a.default),n={};for(var o in a.default)Object.prototype.hasOwnProperty.call(a.default,o)&&(n[o]=a.default[o]);var l=r[Math.floor(Math.random()*r.length)],s=n[l],c=s;u.innerHTML=l,i.appendChild(u),e(c)})};var n,o=r(2),a=(n=o)&&n.__esModule?n:{default:n};var i=document.querySelector(".word"),u=document.createElement("p")},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=task1;var expression=document.querySelector(".expression"),fieldExpression=document.createElement("p");function task1(){return new Promise(function(resolve){var operation=["+","-","*","/"],num1=Math.floor(100*Math.random()+1),num2=Math.floor(10*Math.random()+1),operator=Math.floor(Math.random()*operation.length),fieldTask1=document.querySelector(".task1");fieldTask1.hidden=!1,fieldExpression.innerHTML=num1+operation[operator]+num2,expression.appendChild(fieldExpression),resolve(eval(num1+operation[operator]+num2))})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.chooseTasks=function(){var e=document.querySelector("#modal"),t=document.querySelector("#congratulations"),r=document.querySelector("#lose"),u=document.querySelector("#myBar1"),l=document.querySelector("#myBar2");e.hidden=!0;var s=[n.default,o.default];s[Math.floor(Math.random()*s.length)]===n.default?(0,n.default)().then(function(e){var n=document.querySelector("#result1_btn");n.addEventListener("click",function(){var n=document.querySelector("#result1").value,o=document.querySelector("#field_task1");o.hidden=!0,e===parseInt(n,10)?((0,i.changeHealth2)(20,l),t.hidden=!1,setTimeout(a.nextRound,4e3)):((0,i.changeHealth1)(20,u),r.hidden=!1,setTimeout(a.nextRound,4e3))})}):(0,o.default)().then(function(e){var n=document.querySelector("#result2_btn"),o=document.querySelector("#result2");n.addEventListener("click",function(){var n=document.querySelector("#field_task2");n.hidden=!0;var s=o.value;e===s?((0,i.changeHealth2)(20,l),t.hidden=!1,setTimeout(a.nextRound,4e3)):((0,i.changeHealth1)(20,u),r.hidden=!1,setTimeout(a.nextRound,4e3))})})};var n=u(r(4)),o=u(r(3)),a=r(1),i=r(0);function u(e){return e&&e.__esModule?e:{default:e}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createModal=function(){n.hidden=!1,window.onclick=function(e){e.target===n&&(n.hidden=!0)}};var n=document.querySelector("#modal")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadImage=function(e){return new Promise(function(t){var r=new Image;r.addEventListener("load",function(){t(r)}),r.src=e})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var o=function(){function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.image=t,this.width=r,this.height=n,this.tiles=new Map}return n(e,[{key:"define",value:function(e,t,r){var n=document.createElement("canvas");n.width=this.width,n.height=this.height,n.getContext("2d").drawImage(this.image,t,r,this.width,this.height,0,0,this.width,this.height),this.tiles.set(e,n)}},{key:"draw",value:function(e,t,r,n){var o=this.tiles.get(e);t.drawImage(o,r,n)}},{key:"drawTile",value:function(e,t,r,n){this.draw(e,t,r*this.width,n*this.height)}}]),e}();t.default=o},function(e,t,r){"use strict";var n,o=r(8),a=(n=o)&&n.__esModule?n:{default:n},i=r(7),u=r(6),l=r(5);var s=document.querySelector("#screen").getContext("2d");(0,i.loadImage)("./images/tile.jpg").then(function(e){var t=new a.default(e,16,16);t.define("ground",120,75),t.define("bg",150,110);for(var r=0;r<100;++r)for(var n=0;n<50;++n)t.drawTile("bg",s,r,n);for(var o=0;o<100;++o)for(var i=30;i<40;++i)t.drawTile("ground",s,o,i)}),(0,i.loadImage)("./images/hero.png").then(function(e){var t=new a.default(e,200,250);t.define("hero",1,1),t.draw("hero",s,0,255)}),(0,i.loadImage)("./images/monster.png").then(function(e){var t=new a.default(e,200,250);t.define("hero",1,1),t.draw("hero",s,750,235)}).then(setTimeout(u.createModal,3e3)),document.querySelector("#start").addEventListener("click",l.chooseTasks)}]);