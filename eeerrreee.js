/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Items.ts":
/*!**********************!*\
  !*** ./src/Items.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

let items = {};
var Items;
(function (Items) {
    Items.ScriptIsEnable = null;
    Items.neadRUUN = false;
    Items.neadCASTSUNSTRIKE = false;
    Items.neadHEEAL = false;
    Items.TPParticleIndex = null;
    Items.TPParticleTime = null;
    Items.TPParticleUnit = null;
    Items.TPParticlePosition = null;
    Items.pingTP = null;
    Items.autoMoveFeed = null;
    Items.SelectForestHero = null;
    Items.NeadDestoyKatku = null;
    Items.neadDestroyfoRestRetarD = null;
    Items.myHerofarmForest = null;
    Items.keyForAFKfarmForest = null;
    Items.myMousePos = null;
    Items.myCursorButton = null;
    Items.invKilSunStr = null;
    Items.invDrawLinePred = null;
    Items.invDrawIconPre = null;
    Items.invoAutoPrerSuns = null;
    Items.invAutmCamtoPos = null;
    Items.invAutPressUicon = null;
    Items.autoTornKil = null;
    Items.invAvtweweE = null;
    Items.invoAutoPrerTorn = null;
    Items.invoAutoPrerBlast = null;
    Items.invoTkils = null;
    Items.invoBkils = null;
    Items.invoKeySunstrike = null;
    Items.saveSelect = [];
    Items.saveChooseHero = Items.saveSelect.toString();
    Items.menuAutoSave = null;
    Items.enableAutoSave = null;
    Items.autoDodger = null;
    Items.msg_queue = [];
    Items.DELTA = 0.05;
    Items.ERROR = 0.2;
    Items.autoUseBottle = null;
    Items.optionTargetStyle = null;
    Items.LockedTarget = null;
    Items.FKIToption = null;
    Items.FKITtick = 9999999;
    Items.particleNextTime = null;
    Items.currentParticle = null;
    Items.currentParticleTarget = null;
    Items.optionLockTargetParticle = null;
    Items.optionLockTargetIndicator = null;
    Items.MineDestroyeroptionInvAttack = null;
    Items.Minedestr = null;
    Items.hitoptionEnable = null;
    Items.hitfontSize = null;
    Items.hitfontSave = 25;
    Items.hitfont = Renderer.LoadFont('Arial', 15, Enum.FontWeight.BOLD, Enum.FontFlags.NONE, 1);
    Items.getTeamHeroesname = [];
    Items.tree = null;
    Items.autodisconnect = null;
    Items.Additionaldelay = null;
    Items.playersList = null;
    Items.colors = null;
    Items.gap = null;
    Items.language = null;
    Items.button = null;
    //Mama
    Items.LaughEnablemama = null;
    Items.Laughsecond = null;
    Items.Laughcombostart = null;
    //Dazzle
    Items.dazzleScriptEnable = null;
    Items.dazzleSave = null;
    Items.dazzleSpell = null;
    Items.dazzleAutoWawe = null;
    Items.dazzleAutoGrave = null;
    //Morph
    Items.morphlingComboSelect = false;
    Items.morphlingTotalDMG = 0;
    Items.morphlingTotalDMGwoWave = 0;
    Items.MorphBalanceTimer = 0;
    Items.MorphBalanceSelectedHP = 0;
    Items.MorphBalanceSelected = 0;
    Items.MorphBalanceToggler = true;
    Items.Toggler = false;
    Items.font = Renderer.LoadFont("Tahoma", 22, Enum.FontWeight.EXTRABOLD);
    Items.shouldToggleAGI = false;
    Items.shouldToggleStr = false;
    Items.optionHeroMorphling = null;
    Items.optionHeroMorphlingKill = null;
    Items.optionHeroMorphHPBalance = null;
    Items.optionHeroMorphHPBalanceDeviation = null;
    Items.optionHeroMorphDrawBoard = null;
    Items.optionHeroMorphBoardToggleKey = null;
    Items.optionHeroMorphDrawBoardXPos = null;
    Items.optionHeroMorphDrawBoardYPos = null;
    Items.optionHeroMorphReplicate = null;
    Items.optionHeroMorphReplicateBack = null;
    Items.optionHeroMorphReplicateBackHP = null;
    Items.isEnabledOption = null;
    Items.AxeisEnabledOption = null;
    Items.rotationTable = [];
    ///PUdGEE
    Items.PudgeRotComboActivation = false;
    Items.PudgeRotComboDeactivation = 0;
    Items.PudgeHookStartTimer = 0;
    Items.PudgeHookDelayer = 0;
    Items.PudgeHookRotDelayer = 0;
    Items.PudgeHookTarget = null;
    Items.PudgeHookTargetedPos = null;
    Items.PudgeHookHit = false;
    Items.PudgecurrentParticle = null;
    Items.PudgecurrentParticleTarget = null;
    Items.PudgeRotFarmToggled = false;
    Items.PudgeRotFarmToggledTime = 0;
    Items.optionHeroPudgeFarm = null;
    Items.optionHeroPudgeHookJuke = null;
    Items.lastTick = 0;
    Items.optionHeroPudgeHookComboMaxRange = null;
    Items.optionHeroPudgeHookCombo = null;
    Items.cheakEnemies = false;
    Items.optionHeroPudgeBlink = null;
    Items.PudgeEnableCombo = null;
    Items.killableenemy = null;
    Items.PudgeKillstill = null;
    Items.PudgeCancelTP = null;
    Items.optionHeroPudgeStaff = null;
    Items.optionHeroPudgeHook = null;
    Items.optionHeroPudgeHookKey = null;
    Items.optionHeroPudgeHookAcquiRange = null;
    Items.optionHeroPudgeHookAllies = null;
    Items.optionHeroPudgeHookStaff = null;
    Items.optionHeroPudgeHookUlt = null;
    Items.optionHeroPudgeHookRot = null;
    Items.optionHeroPudgeHookItems = null;
    Items.optionHeroPudgeFarmHP = null;
    //Tinker
    Items.TinkeroptionTinkerFailSwitch = null;
    Items.optionTinkerSoulRearm = null;
    Items.tinkerBlinkPos = null;
    Items.abboutme = null;
    //AutoHarass
    Items.AutoHarasssinCombo = null;
    Items.predictCastPos = null;
    Items.GameStart = false;
    Items.GDMComboKey = null;
    // Items
    Items.itemBlink = null;
    Items.itemBladeMail = null;
    Items.itemEterial = null;
    Items.itemGhost = null;
    Items.itemMedal = null;
    Items.itemMagickStick = null;
    Items.itemsAutoSaveMyHeroe = null;
    //Auto Use
    Items.choodeDodgerItems = null;
    Items.choodeDodgerSkills = null;
    Items.itemMidas = null;
    // Skills Axe
    Items.berserkerCall = null;
    Items.battheHunger = null;
    Items.cullingBlade = null;
    Items.cullingBladeBlink = null;
    //Skills Clinkz
    Items.ClinkzfirstSkill = null;
    Items.ClinkzsecondSkill = null;
    Items.ClinkzultimateSkill = null;
    Items.ClinkzisEnabledOption = null;
    //Auto Save
    Items.thirdSkillAuto = null;
    //Auto Haras
    Items.enableHaras = null;
    Items.harasKey = null;
    //Lina
    Items.linaisEnabledOption = null;
    Items.linaenableKillSteal = null;
    Items.linaeulCombo = null;
    Items.linaeulComboKey = null;
    // Skills Phantom Assasin
    Items.firstSkill = null;
    Items.secondSkill = null;
    //Dager Kill Steal
    Items.dagerKillSteal = null;
    Items.PhantomisEnabledOption = null;
    //brewmaster
    Items.brewmasterisEnabledOption = null;
    Items.brewmasterfirstSkill = null;
    //bristleback
    Items.bristlebackisEnabledOption = null;
    Items.bristlebackfirstSkill = null;
    Items.bristlebackAutoSecond = null;
    //Centaur Warior
    Items.centaurisEnabledOption = null;
    Items.centaurfirstSkill = null;
    //chaosknigth
    Items.chaosknigthisEnabledOption = null;
    Items.chaosknigthfirstSkill = null;
    //dragonknigth
    Items.dragonknigthisEnabledOption = null;
    Items.dragonknigthfirstSkill = null;
    //earsthshaker
    Items.earsthshakerisEnabledOption = null;
    Items.earsthshakerfirstSkill = null;
    Items.safeStun = null;
    //legion
    Items.legionisEnabledOption = null;
    Items.legionInvis = null;
    Items.legionfirstSkill = null;
    Items.legionsecondSkill = null;
    Items.legionItems = null;
    //lifestealear
    Items.lifestealearisEnabledOption = null;
    Items.lifestealearfirstSkill = null;
    //lycan
    Items.lycanisEnabledOption = null;
    Items.lycanfirstSkill = null;
    //mars
    Items.marsisEnabledOption = null;
    Items.marsfirstSkill = null;
    Items.marssecondSkill = null;
    Items.marsultimateSkill = null;
    //nigthstalker
    Items.nigthstalkerisEnabledOption = null;
    Items.nigthstalkerfirstSkill = null;
    //slardar
    Items.slardarisEnabledOption = null;
    Items.slardarfirstSkill = null;
    //spiritbreaker
    Items.spiritbreakerisEnabledOption = null;
    Items.spiritbreakerfirstSkill = null;
    //sven
    Items.svenisEnabledOption = null;
    Items.svenfirstSkill = null;
    //tidehunter
    Items.tidehunterisEnabledOption = null;
    Items.tidehunterfirstSkill = null;
    //tiny
    Items.tinyisEnabledOption = null;
    Items.tinyfirstSkill = null;
    //undying
    Items.undyingisEnabledOption = null;
    Items.undyingfirstSkill = null;
    //wraithking
    Items.wraithkingisEnabledOption = null;
    Items.wraithkingfirstSkill = null;
    //antimage
    Items.antimageisEnabledOption = null;
    Items.antimagesecondSkill = null;
    Items.antimageultimateSkill = null;
    //bloodseeker
    Items.bloodseekerisEnabledOption = null;
    Items.bloodseekerfirstSkill = null;
    Items.bloodseekersecondSkill = null;
    Items.bloodseekerultimateSkill = null;
    Items.bloodseekerEulCombo = null;
    Items.bloodseekerautofirstM = null;
    Items.bloodseekerautofirstE = null;
    //bountyhunter
    Items.bountyhunterisEnabledOption = null;
    Items.bountyhunterfirstSkill = null;
    Items.bountyhunterthirdskill = null;
    Items.bountyhunterultimateSkill = null;
    Items.bountyhunterautoultimateSkill = null;
    //drowranger
    Items.drowrangerisEnabledOption = null;
    Items.drowrangerfirstSkill = null;
    Items.drowrangersecondSkill = null;
    Items.drowrangerthirdskill = null;
    Items.frostArrowKey = null;
    //void
    Items.voidisEnabledOption = null;
    Items.voidfirstSkill = null;
    Items.voidsecondSkill = null;
    Items.voidultimateSkill = null;
    Items.autoTimeWalk = null;
    //gyrocopter
    Items.gyrocopterisEnabledOption = null;
    Items.gyrocopterfirstSkill = null;
    Items.gyrocoptersecondSkill = null;
    Items.gyrocopterthirdskill = null;
    Items.gyrocopterultimateSkill = null;
    //juggernaut
    Items.juggernautisEnabledOption = null;
    Items.juggernautfirstSkill = null;
    Items.juggernautsecondSkill = null;
    Items.juggernautultimateSkill = null;
    //luna
    Items.lunaisEnabledOption = null;
    Items.lunafirstSkill = null;
    Items.lunaultimateSkill = null;
    //medusa
    Items.medusaisEnabledOption = null;
    Items.medusasecondSkill = null;
    Items.medusathirdskill = null;
    Items.medusaultimateSkill = null;
    //nagasiren
    Items.nagasirenisEnabledOption = null;
    Items.nagasirenfirstSkill = null;
    Items.nagasirensecondSkill = null;
    //export let nagasirenultimateSkill = null;
    Items.nagaMeteorCombo = null;
    //nyxassasin
    Items.nyxassasinisEnabledOption = null;
    Items.nyxassasinfirstSkill = null;
    Items.nyxassasinsecondSkill = null;
    Items.nyxassasinthirdskill = null;
    Items.nyxassasinAutoUltimate = null;
    //phantomlancer
    Items.phantomlancerisEnabledOption = null;
    Items.phantomlancerfirstSkill = null;
    Items.phantomlancersecondSkill = null;
    //razor
    Items.razorisEnabledOption = null;
    Items.razorfirstSkill = null;
    Items.razorsecondSkill = null;
    Items.razorultimateSkill = null;
    //shadowfiend
    Items.shadowfiendisEnabledOption = null;
    Items.shadowfiendfirstSkill = null;
    Items.shadowfiendsecondSkill = null;
    Items.shadowfiendenableKillSteal = null;
    Items.shadowfiendDragonKillSteal = null;
    Items.shadowfiendeulCombo = null;
    Items.shadowfiendLotarCombo = null;
    Items.shadowfiendEulComboKey = null;
    Items.shadowFiendsItems = null;
    Items.shadowFiendEulItems = null;
    //slark
    Items.slarkisEnabledOption = null;
    Items.slarkfirstSkill = null;
    Items.slarksecondSkill = null;
    Items.slarkultimateSkill = null;
    //sniper
    Items.sniperisEnabledOption = null;
    Items.sniperfirstSkill = null;
    Items.snipersecondSkill = null;
    Items.sniperultimateSkill = null;
    //spectre
    Items.spectreisEnabledOption = null;
    Items.spectrefirstSkill = null;
    Items.spectreultimateSkill = null;
    //terrorblade
    Items.terrorbladeisEnabledOption = null;
    Items.terrorbladefirstSkill = null;
    Items.terrorbladesecondSkill = null;
    Items.terrorbladethirdskill = null;
    Items.terrorbladeultimateSkill = null;
    //trollwarlord
    //export let trollwarlordisEnabledOption = null;
    //export let trollwarlordfirstSkill = null;
    //export let trollwarlordsecondSkill = null;
    //export let trollwarlordthirdskill = null;
    //export let trollwarlordultimateSkill = null;
    //ursa
    Items.ursaisEnabledOption = null;
    Items.ursafirstSkill = null;
    Items.ursasecondSkill = null;
    Items.ursaultimateSkill = null;
    //vendefulspirit
    Items.vendefulspiritisEnabledOption = null;
    Items.vendefulspiritfirstSkill = null;
    Items.vendefulspiritsecondSkill = null;
    //export let vendefulspiritultimateSkill = null;
    //venomancer
    Items.venomancerisEnabledOption = null;
    Items.venomancerfirstSkill = null;
    Items.venomancerthirdskill = null;
    Items.venomancerultimateSkill = null;
    //viper
    Items.viperisEnabledOption = null;
    Items.viperfirstSkill = null;
    Items.vipersecondSkill = null;
    Items.viperultimateSkill = null;
    //weaver
    Items.weaverisEnabledOption = null;
    Items.weaverfirstSkill = null;
    Items.weaversecondSkill = null;
    //export let weaverultimateSkill = null;
    Items.weaverAutoUltimate = null;
    //Intelligence
    //apparat
    Items.apparatisEnabledOption = null;
    Items.apparatfirstSkill = null;
    //bane
    Items.baneisEnabledOption = null;
    Items.banefirstSkill = null;
    Items.baneVampiric = null;
    //batrider
    Items.batriderisEnabledOption = null;
    Items.batriderfirstSkill = null;
    Items.batridersecondSkill = null;
    Items.batriderthirdskill = null;
    Items.batriderultimateSkill = null;
    //crystalmaiden
    Items.crystalmaidenisEnabledOption = null;
    Items.crystalmaidenfirstSkill = null;
    //darkseerk
    Items.darkseerkisEnabledOption = null;
    Items.darkseerkfirstSkill = null;
    //darkwillow
    Items.darkwillowisEnabledOption = null;
    Items.darkwillowfirstSkill = null;
    //deathprophet
    Items.deathprophetisEnabledOption = null;
    Items.deathprophetfirstSkill = null;
    //disuptor
    Items.disuptorisEnabledOption = null;
    Items.disuptorfirstSkill = null;
    Items.disuptorsecondSkill = null;
    Items.disuptorthirdskill = null;
    Items.disuptorultimateSkill = null;
    //enchantress
    Items.enchantressisEnabledOption = null;
    Items.enchantressfirstSkill = null;
    Items.AutoSaveEnchant = null;
    //enigma
    Items.enigmaisEnabledOption = null;
    Items.enigmafirstSkill = null;
    Items.enigmaRefresher = null;
    //grimm
    Items.grimmisEnabledOption = null;
    Items.grimmfirstSkill = null;
    //jakiro
    Items.jakiroisEnabledOption = null;
    Items.jakirofirstSkill = null;
    Items.jakirosecondSkill = null;
    Items.jakirothirdskill = null;
    Items.jakiroultimateSkill = null;
    //leshrack
    Items.leshrackisEnabledOption = null;
    Items.leshrackfirstSkill = null;
    Items.leshracksecondSkill = null;
    Items.leshrackthirdskill = null;
    Items.leshrackultimateSkill = null;
    //lich
    Items.lichisEnabledOption = null;
    Items.lichfirstSkill = null;
    Items.lichsecondSkill = null;
    Items.lichthirdskill = null;
    Items.lichultimateSkill = null;
    //lina
    Items.linafirstSkill = null;
    Items.linasecondSkill = null;
    Items.linathirdskill = null;
    Items.linaultimateSkill = null;
    //lion
    Items.lionisEnabledOption = null;
    Items.lionfirstSkill = null;
    Items.lionsecondSkill = null;
    Items.lionthirdskill = null;
    Items.lionultimateSkill = null;
    //necrophos
    Items.necrophosisEnabledOption = null;
    Items.necrophosfirstSkill = null;
    Items.necrophossecondSkill = null;
    Items.necrophosthirdskill = null;
    Items.necrophosultimateSkill = null;
    //ogremage
    Items.ogremageisEnabledOption = null;
    Items.ogremagefirstSkill = null;
    Items.ogremagesecondSkill = null;
    Items.ogremagethirdskill = null;
    Items.ogremageultimateSkill = null;
    //outword
    Items.outwordisEnabledOption = null;
    Items.outwordfirstSkill = null;
    Items.outwordsecondSkill = null;
    Items.outwordthirdskill = null;
    Items.outwordultimateSkill = null;
    //pugna
    Items.pugnaisEnabledOption = null;
    Items.pugnafirstSkill = null;
    Items.pugnasecondSkill = null;
    Items.pugnathirdskill = null;
    Items.pugnaultimateSkill = null;
    //shadowdemon
    Items.shadowdemonisEnabledOption = null;
    Items.shadowdemonfirstSkill = null;
    Items.shadowdemonsecondSkill = null;
    Items.shadowdemonultimateSkill = null;
    //shadowshaman
    Items.shadowshamanisEnabledOption = null;
    Items.shadowshamanfirstSkill = null;
    Items.shadowshamansecondSkill = null;
    Items.shadowshamanthirdskill = null;
    Items.shadowshamanultimateSkill = null;
    //silencer
    Items.silencerisEnabledOption = null;
    Items.silencerfirstSkill = null;
    Items.silencersecondSkill = null;
    Items.silencerthirdskill = null;
    Items.silencerultimateSkill = null;
    //stormspirit
    Items.stormspiritisEnabledOption = null;
    Items.stormspiritfirstSkill = null;
    Items.stormspiritsecondSkill = null;
    Items.stormspiritthirdskill = null;
    Items.stormspiritultimateSkill = null;
    //tinker
    Items.tinkerisEnabledOption = null;
    Items.tinkersecondSkill = null;
    Items.tinkerthirdskill = null;
    Items.tinkerultimateSkill = null;
    Items.tinkerfirstSkill = null;
    Items.tinkerEnableKillSteal = null;
    Items.tinkerKillSteal = null;
    Items.tinkerDefendKey = null;
    Items.tinkerDefendMode = null;
    Items.tinkerDefendSpells = null;
    Items.tinkerRocketKey = null;
    Items.tinkerRocketSpam = null;
    Items.tinkerRocketBlink = null;
    Items.optionTinketBlink = null;
    Items.tinkerItems = null;
    Items.tinkerMaxDMG = null;
    //warlock
    Items.warlockisEnabledOption = null;
    Items.warlockfirstSkill = null;
    Items.warlocksecondSkill = null;
    Items.warlockthirdskill = null;
    Items.warlockultimateSkill = null;
    //windrunner
    Items.windrunnerisEnabledOption = null;
    Items.windrunnerfirstSkill = null;
    Items.windranerAutoFirst = null;
    Items.windrunnersecondSkill = null;
    Items.windrunnerthirdskill = null;
    Items.windrunnerultimateSkill = null;
    Items.windranerbranchCombo = null;
    //winterwywern
    Items.winterwywernisEnabledOption = null;
    Items.winterwywernfirstSkill = null;
    Items.winterwywernsecondSkill = null;
    Items.winterwywernthirdskill = null;
    Items.winterwywernultimateSkill = null;
    //witchdoctor
    Items.witchdoctorisEnabledOption = null;
    Items.witchdoctorfirstSkill = null;
    Items.witchdoctorsecondSkill = null;
    Items.witchdoctorthirdskill = null;
    Items.witchdoctorultimateSkill = null;
    function Init() {
        if (GameRules.IsActiveGame()) {
            Items.GameStart = true;
        }
    }
    Items.Init = Init;
    //Linken Destroy
    Items.LinkenAtos = null;
    //SafeCast
    Items.noBlademail = null;
    Items.mamatext = [
        "помнишь как я твою мать ебал с своими друзьями?",
        "помнишь как мы ей порвали ротик своими хуями?",
        "мой хуй выбил страйк зубами твоей матери",
        "пойми) я тебя буду ебать под песню oxxymiron-детектор лжи",
        "нахуя ты ходил к моему хую и сдавал тест на наркотики?",
        "пойми) что мой хуй запрыгивает в пиздак твоей матери как тигр",
        "нахуя твоя мать пыталась развести мой хуй на деньги?",
        "ты зачем написал стих как я твою мать ебал?",
        "я твою мать ща буду ебать на снегу",
        "нахуя твоя мать маскируется за помощью моего хуя ?",
        "ты откуда взял информацию о моем хуе что он ебал твою мать ?",
        "мой хуй твою мать вытиранит своими яйцами когда она моестся",
        "я твою мать в твоем доме ебал хату разогревал",
        "ты понимаешь что твоя мамаша своими волосами мой хуй чешет блядь",
        "твоя мать как клещ,своим ртом к моему хую пpисосалась",
        "ты понимаешь то что мой хуй способен залить твое ебало спермой?",
        "ты понимаешь что твоя мамаша на мой хуй нарвалась",
        "ты понимаешь что моя залупа будет целовать твой лоб?",
        "ты кстати сосешь нежно как твоя мать ты понимаешь это?",
        "ты понимаешь что я твою мамашу хуем по пизде ебашу?",
        "ты понимаешь что у тебя после моего хуя началась картавая речь",
        "я не понимаю зачем ты будешь мой хуй в 7 утра,что бы отсосать?",
        "ты понимаешь что я тебя сейчас хуем разломаю как вафлера ебаного",
        "ты понимаешь что ты по дну лазил мой хуй искал?",
        "почему твоя мамаша свою пизду продает среди детских игрушек?",
        "почему твоя мать делает вид,что не любит мой хуй ??",
        "понимаешь что пизда твоей матери напала на мой хуй и поживала его",
        "ты что петух гриву свою на хую моем потерял чтоль?",
        "помнишь как я твою мать ебал с своими друзьями?",
        "помнишь как мы ей порвали ротик своими хуями?",
        "мой хуй выбил страйк зубами твоей матери",
        "пойми) я тебя буду ебать под песню oxxymiron-детектор лжи",
        "нахуя ты ходил к моему хую и сдавал тест на наркотики?",
        "пойми) что мой хуй запрыгивает в пиздак твоей матери как тигр",
        "нахуя твоя мать пыталась развести мой хуй на деньги?",
        "ты зачем написал стих как я твою мать ебал?",
        "я твою мать ща буду ебать на снегу",
        "нахуя твоя мать маскируется за помощью моего хуя ?",
        "ты откуда взял информацию о моем хуе что он ебал твою мать ?",
        "мой хуй твою мать вытиранит своими яйцами когда она моестся",
        "я твою мать в твоем доме ебал хату разогревал",
        "ты понимаешь что твоя мамаша своими волосами мой хуй чешет блядь",
        "твоя мать как клещ,своим ртом к моему хую пpисосалась",
        "ты понимаешь то что мой хуй способен залить твое ебало спермой?",
        "ты понимаешь что твоя мамаша на мой хуй нарвалась",
        "ты понимаешь что моя залупа будет целовать твой лоб?",
        "ты кстати сосешь нежно как твоя мать ты понимаешь это?",
        "ты понимаешь что я твою мамашу хуем по пизде ебашу?",
        "ты понимаешь что у тебя после моего хуя началась картавая речь",
        "я не понимаю зачем ты будешь мой хуй в 7 утра,что бы отсосать?",
        "ты понимаешь что я тебя сейчас хуем разломаю как вафлера ебаного",
        "ты понимаешь что ты по дну лазил мой хуй искал?",
        "почему твоя мамаша свою пизду продает среди детских игрушек?",
        "почему твоя мать делает вид,что не любит мой хуй ??",
        "понимаешь что пизда твоей матери напала на мой хуй и поживала его",
        "ты что петух гриву свою на хую моем потерял чтоль?",
        "ты по собственному желанию стал пидорасом",
        "ты уже трехлапая косолапая мохнатка прыгаешь на хуе как блоха",
        "я тебя ебашу как своего сынка ты вырос на моем хуе",
        "тебя лечить сука уже нельзя у тебя рак мозга в термиальной стадии",
        "твоя мать считает мой хуй своим идолом и поклоняется ему",
        "я ебал твою мамашку до ледникового периода еще",
        "я ебал твою мамашку до того,как адам выебал еву",
        "ты канделябр для хуев)) самый настоящий,еврейский",
        "я уже водолазом стал,заныриваю своим хуем в рот твоей матери,мр",
        "чмо – чурка мудаская обосранка,это про твою мамашку",
        "ты козлоёбище а твоя мать овцеминетит чот)) овца хуйня",
        "ты хули пиздаблошка пизделякаешь тут?)) ебал твою мат",
        "ты мудак сосихуйский я ж распиздошу твою мать полоумную",
        "ты как геркулес,только хуелес)) гандонолиз ебанный",
        "силен в сосаинии только,хуеглотище блт)) твоя мтаь пидорьша",
        "ах ты ж ебаный стос!!!иди на хуй отсюда терпак",
        "твоя мать - ебальный станок)) пидорас ебучий",
        "анусная капельница - твоя мамулька",
        "хули негры твою мать в позиции валет крышуют?",
        "ты вафлист )) и мамашу я твою взъебу на свой елдак:3",
        "твоя маманя дерганная пизда)) она еще и двужопая мутантка",
        "ты доскаеб)) твоя мамка такая плоская(( мразина неброская",
        "ты сдрыснешь ща сучка)) мое дуло твой рот продуло",
        "ща тебе ебавка прилетит в ебло в форме моего хуя",
        "ща я твою маму дуру загоню под шкуру)) да её любой заговнит",
        "твоя мать задница с ушами)) а ты глупенький задристышь",
        "да ты уже иван тоскун?)) у тебя боли в желудке от моей спермой",
        "ты тут пант бьешь,понятно)) а на деле ты порванная куртизанка",
        "ты вот пойми что мой хуй это друг лучший товей мамы?",
        "ты вот понимаешь что втой рот на моем хуе живет то?",
        "понимаешь что мой хуй рвет пиздак твоей матуху как прут ?",
        "понимаешь что я в пмзде твоей матери окопы делаю как в 41?) 0",
        "понимаешь что твоя мать на мой хуй рычит как бык ебанный?) 0",
        "ты понимешь что мой хуй подстривался к пизде твоей мамшки",
        "ты понимешь что мой хуй синомпик пиздака твоей мамшки",
        "ты понимешь что твоя мать читала стихи моему хую) 0",
        "ты понимешь что я ебюал твою мамашку на кресле при пиве",
        "ты понимшеь что мой хуй как маршел ебал твою мать на столе",
        "ты понимшь что мой хуй ебал твою мамашку как проосроченой шпроты",
        "ты понимшеь что мой хуй ебал втою мамашку капустой",
        "ты понимешь что мой хуй дорожит пиздой твоей мамашки",
        "ты понмиешьь что мой хуй ебал твою мат как биштекс?",
        "ты понимешь что мой хуй щашпаклефал пизду твоей ма",
        "ты понимешь что ты сосёшщь дудку под сасания моего хуя0",
        "ты понимшеь что твоя маь бегает по стадиону от моего хуя",
        "ты понимшеь что мой хуй ебал втою мать как эверест?(",
        "ты понимешь что мой хуй пиздил твою мать ка кпотсон с теплици",
        "ты понимешь что твоя мтаь пропала на моём хзую?",
        "ты понимешь что мой хуй поставил крест на горбу твоей мамшки",
        "ты понимешь что омй хуй поливает твою мамашку как сембиоз",
        "ты понимешь что твоя мтаь женилась на моём хую",
        "ты понимешь что твоя маь подмигивает моему хую))",
        "ты понимшеь что мой хуй ебал втою мамашку под тонкие тентакли",
        "ты пониешь что мой хуй ебал твою мать по полной жопе",
        "ты понимшеь что твоя мтаь галка ебаная с моего хуя рис пиздит",
        "ты понимешь что твоя мать устреца ебана я на моём хую спит?",
        "ты понимешь что твоя мамашка на мой хуй ллезет улитка ебаная",
        "ты понмиешь что мой хуй твою шею паганую разьебёт нахуй",
        "ты понимешь что я буду втой рот невелировать как хуесос",
        "бутка ебаная мне твой рот дрелью разьебать?",
        "я твою мать хуем в лесу зарою",
        "я тебе ноги в рот клал пидарас ты ебаный",
        "я твою мать хуем прострелил как с двух стволки",
        "в пизде твоей мамы можно розводить свиней нахуй",
        "ты вот понмиаешь чтов пизде твоей мамы погибнит мой хуй как герой",
        "почему ты нюхалл мою кончу то?) ??ты сука наркоман ебанй",
        "я по твоему ебалу хуем тормозил,и стер тормозные колодки",
        "слыш! ты олень ебанный) я тебе всегда буду рад дать пососать",
        "та зачем мою залупу во время минета покусываешь",
        "я ща через свой хуй пущу электро заряд тебе в мозг",
        "я пиздой твоей матери вкрутил лампочку",
        "твоя мать через мой хуй проливается как вода",
        "я твою мать ведром ебал",
        "я твою мать салатом ебал",
        "мать твою феном ебал",
        "мать твою картошкой ебал",
        "мать твою гречкой ебал",
        "мамка твоя твоему отцу с моим хуем изменяла",
        "мать твою в больнице ебал",
        "мать твою ебал у нее аж пизда задымилась",
        "моя конча заменяет кровь в твоем теле",
        "ты вкурсе что в очке твоего бати живут гномы?",
        "вот зачем ты так накидываешься на мой хуй как овчарка?",
        "нахуй ты проводил тест драйв на моем хуе ?",
        "пидор огнедыщащий иди сюда я тебя ебать буду",
        "ятвою мать ебал на морозе",
        "твоя мать была пьяная и скакала на моею хую",
        "я не понял твоя мать реально щас сосать мне будет",
        "твоя мать мне сосала не спрашивая",
        "я твою мать ебал со скоростью света",
        "я твою мать ебал, у нее аж пизда загорелась??",
        "я ща своим хуем проложу торговые пути к пиздаку твоей матери",
        "тебя ебали хачи когда твой отец массировал мне яица своей губой",
        "ты понимаешь что ты въезжаешь на мой хуй?",
        "ты будибилдер моего хуя ты знал?(",
        "я тебя буду ебать бомбуковой розей",
        "твоя мать колхозница ебаная на моём хую пялшет чечётку",
        "сосёт мой хуй под русский бит стаса мехайлова?",
        "ты мареонетка ебаная под мой хуй ходишь",
        "нахуй ты мой хуй кладешь себе в рот,тебе нравится вкус ?",
        "я твою мать сопагом ебал пойми",
        "твоя мать мне за просто так отдалась",
        "твоя мать мне сосала при луне",
        "я твою мать ебу понимаешь ?",
        "твоя мать сосет) я твою мать дошираком ебал",
        "твоя мать сосет) я твою мать спичками ебу",
        "я твою мать с хуя пускал",
        "я твою мать пылесосом ебал",
        "я твою мать с хуя через заборы перекидывал",
        "зачем ты ртом на хуй упал?",
        "твоя мамашка за барбариску хуй сосет на рынке",
        "вот у тебя явно пидорские наклонности(",
        "меня вдохнавляет твой рот напавший на мой хуй",
        "я твою мать хуем пиздил",
        "я твоей матери зубы хуем выбил, она так горько плакала",
        "я твоей матери хуем клизму сделаю",
        "я твоей матери хуем хребет ломаю",
        "я твоей матери хуем шею ломаю",
        "я твоей матери клитор с ноги выбивал",
        "я твоей матери кирпичи в ебло кидал",
        "я твою мать на чердаке ебал",
        "я твою мать на дверной ручке ебал",
        "я твою мать на калитке ебал",
        "я твою мать забориной ебал",
        "я твою мать качергой ебал",
        "я об пизду твоей матери бычки тушил",
        "ты свою сестру по моему согласию ебал",
        "я нождачкой хуярил по пизде твоей матери",
        "я тёркой тер ебло твоей матери",
        "я твою мать обоссал пока ты клитор сестре лизал",
        "твою мать осудили пожизенно за посиделки на моем хуе",
        "твоя мать на мой член с 5 этажа падала",
        "я твоей мамке хуем в глаз тыкал",
        "я твоей матери на ебло кончал пока ты хуй отца сосал",
        "ты свою мать учил хуй сосать",
        "я твоей матери хуем по губе давал",
        "я твоей матери хуем по щеке ударил , у нее челюсть сломалась",
        "я твоей матери залупой по лбу хуярил пока ты мне яйца лизал",
        "твоя мать блядь, а твой отец работает в гей клубе",
        "я розу впизду твоей матери тыкал",
        "твоя мать падала на мой член как засохший лист с дерева",
        "твоя мать плоскогрудная ебанашка сука",
        "я пизду твоей матери тебе на ебло натягивал",
        "я клитор твоей матери растягивал, он становился длиднный как змея",
        "я твою мать за половые губы к потолку прибивал и харкал ей в ебло",
        "я твою мать",
        "шампуром ебал",
        "я твоей матери за щеку за забором давал",
        "твоя мать пиздой картошку сортировать умеет",
        "я твою мать через прогиб ебал",
        "ты вкурсе что я щас твою мать членом отпиздил?",
        "твоя мать мне за хлеб сосала",
        "твоя мать мне за одежду сосала",
        "твоя мать мне за рубль отдалась",
        "я твою мать хуем прихлопнул",
        "я твоей матери членом последние зубы выбил",
        "ты облизываешь мне член после анального секса с твоей мамашей",
        "ты пизду своей матери хуем поливаешь как огород",
        "я твоей матери ебло об асфальт разъебал",
        "я твоей матери в ебло харнул",
        "твоя мать мне на ногах ногти грызет",
        "я горшок с говном на голову твоей матери одевал",
        "я твоей матери хуем подщечины давал",
        "я твоей матери хуем губу сломал",
        "я на ебло твоей матери мусорный пакет одевал",
        "я в тухлой пизде твоей матери опарышей разводил",
        "твоя мать своими гландами машонки щекочит",
        "я хуй полоскал в мо3гах твоей матери",
        "я хуй в горло твоей матери сувал , чтоб она у нее не шаталась",
        "я через мозг твоей матери мочу фильтровал",
        "я принимаю экзамены, а твоя мама даёт мне взятку натурой) .",
        "я рвал тебе целку твоей матери ржавой трубой :3",
        "ты своим языком вшей лобковых на пизде матери гонял",
        "ты своим ртом глистов из жопы матери вытаскивал",
        "ты понимаешь твой рот как вай фай) который принимает только хуи",
        "хуеглотина ты че на мой хуй раскудахталась?",
        "хули ты мой хуй игноришь конина ебаная?",
        "ты щас с моего хуя будешь крошки языком очищать) пылесос ебаный",
        "хуесос?) ты увидел пизду своей мамы испугался и съебался?",
        "я ебу твою мамку в поперечную кишку и она дохнит",
        "давай твоё очко закрутим на хуй? как сахарную вату на палочку?",
        "пока ты спала я кончала твоему бати в рот, а ты сквозь сна что?",
        "с какими слвоами тебе кончили в глаз?",
        "пока ты меня игноришь твой рот натягивают на пиздубомжихи",
        "ты понимаешь что твоя мать мне всю плеш проела как моль ебаная ?",
        "ты понимаешь что твоя мать без моего хуя не може прожить и дня ?",
        "ты понимаешь что я своим хуем очко твоей матери забетонировал ?",
        "ты понимаешь что я своим хуем твою мать оглушил как рыбу в воде ?",
        "ты понимаешь что я в очко твоей матери заселил племя юнги ?",
        "ты понимаешь что я своим хуем очко твоей матери окупировал ?",
        "ты понимаешь что я на пизде твоей матери выложил минное поле ?",
        "ты понимаешь что твоя мать моим хуем поперхнулась ?",
        "ты понимаешь что клитор твоей матери собрали древние атцтеки ?",
        "ты понимаешь что я на клиторе твоей матери продаю тако ?",
        "ты понимаешь что я своим хуем лоб твой матери шкварил ?",
        "ты понимаешь что клитор твоей матери это паздбище для хуев ?",
        "ты понимаешь что я твою мать вылечил от рака мозга своим хуем ?",
        "ты понимаешь что очко твоей матери давно порвано моим хуем ?",
        "ты понимаешь что мой хуй поглощает клитор твоей матери ?",
        "ты понимаешь что я твою мать ебал в двух колесной чехотке ?",
        "зачем твоя мать на своей клитор китайскую лапшу накручивает ?) /",
        "ты понимаешь что я в клитор твоей матери поместил свой хуй ?",
        "ты понимаешь что я в клитор твоей матери поместил свой хуй ?",
        "ты понимаешь,что когда твою мать ебу,то начинается звездопад!",
        "сюда иди,твою мать будем вместе ебать!) гондоны взять не забудь!",
        "ты понимаешь что твоя мать крутилась на моем хую как на шесте ?",
        "ты понимаешь что я клитор твоей матери измеряю валюту ?",
        "ты понимаешь что я клитор твоей матери продал за акции в nike ?",
        "ты понимаешь мой хуй решал ребусы на пизде твоей мамаши",
        "подушка моего хуя?) ты вкурсе что я твою мать ебу под лезгинку",
        "ты понимаешь что я твоей матери своим хуем зубы перещитывал ?",
        "ты понимаешь,что твою мать ебали хачи,под песню черные глаза?",
        "сука, ты хотя бы копируй нормально, выебанное ты убожество",
        "я маню твою мать своим хуем) водя перед ее ебалом) ??",
        "ы опездал блять северный) тебя блят ьпингвины в очко ебали",
        "слышь крч я щас тебе ебло череном разобью нахуй ????",
        "ты понимаешь что ты та блаха что бегает по меому хую часами",
        "ты вкурсе что я твою мать ебал",
        "але) гнидорас) ты хули мой хуй игноришь?",
        "не тот ли ты папуас который хочет мой хуй как собачка косточку?",
        "слышь пидарас ебаный мне твою мать выебать чтоле?) ??",
        "ты вкурсе что твоя анальная амеба прорвана моим хуем",
        "слышь чухан заросший ) я тебя хуем щас в 0 хуйну",
        "я твою мать на хуй посадил она там обосралась ??",
        "я щас твою мать выебу в китайском магазине",
        "але хуйланка) хули когда сосешь) то как тролль орешь??",
        "чет ебу твою мать) ыввыхвыхвыхвхывы",
        "ты чет так громко сосешь?соседи жаловатся щас начнут",
        "я твою пизду рвал своим хуем) ты помнишь?",
        "ты я смотрю все же всосал мой хуй и не отзываешься",
        "хули ты меня игноришь) ты чет зашкварный типок",
        "ответь наконец) баран сука обоссаный",
        "чет твоя пизда скользит по моему хую(",
        "ты где там) чукча обоссаная",
        "не игенорь мой хуй) чукча ебанная",
        "мне так и ебать твою мать,или ты все же сам начнешь?",
        "мне так и ебать твою мать,или ты уже поставишь баллы?",
        "але) гнида) ты че там уснул что-ли?",
        "ты че эт мой хуй игноришь то?) чепушок ты ебанный",
        "ты вкурсе что пиздак твоей мамаши как в игре завис на моем хую",
        "передай маме,так быстро ушла что забыла забрать насасонное",
        "ты хули опять на мой хуй сел и игноришь его?",
        "я случайно об твою пизду спотыкнулся своим хуем",
        "ебни по моему хую своей пиздой, сын зашкварной шалавы",
        "ты понимаешь что я хуем к тебе твою маманьку занесу",
        "так она отсосала уже один нигерский член,стрелочница ты ссаная",
        "а вот твое имя,это в честь моего хуя-короля александра 1?",
        "твоя фамилия в честь моего хуя или что ебать?",
        "ты щас будешь языком протирать мне хуй) долбоеб?",
        "ооо жирный пидр пришел и начал со строчкой ниже мне хуй сосать",
        "ты понимаешь что на пиздаке твоей мамаши рисавали узоры?",
        "ты понимаешь что твоя мать с моим хуем на свидание ходила?",
        "твоя мамаша блять на мой хуй прыгает нкак собака на косточку",
        "ты понимаешь что твоя мать ебаная афродита?? я ее кончал сука",
        "ты понимаешь что я своим хуем очко твоей матери окупировал ?",
        "ты понимаешь что я на пизде твоей матери выложил минное поле ?",
        "когда я ебал твой рот с каким вопросом или словами ты орал?",
        "с каким вопросом или словами ты держал хуй за щекой?",
        "когда твоя мать сосала твоим ртом , что ты орал зеркалу?",
        "с какими словами я твою мать ебал?",
        "с этой провокацией ты глотнул кончи отца и что ему сказал?",
        "с этими словами ты лизал мне яйца и что ты орал отцу?",
        "с этими словами ты глотал мою сперму, и что отцу орал ?",
        "с этими словами ты захлебывался кончей отца и что матери орал ?",
        "твоя мамашка за барбариску хуй сосет на рынке",
        "ты сосешь и балдеешь",
        "я на пизде твоей матери уроки хуем делал",
        "я твою мать под поез хуем кину щас",
        "я твою мать ебу спорим?",
        "ты мой член в покое не оставляешь ртом своим",
        "я твою мать ебу грубо",
        "я твою мать ебу в падике хуем погнул",
        "твоя мать на моем хую тащится",
        "твоя мать под моим хуем тебя высрала",
        "твоя мать как выскачка на моем хую",
        "я твою мать на люстре отъебу щас",
        "ты на моем хую извиваешься как змея",
        "я твою мать ебал как невминяемый",
        "я твою мать хуем расписал как диктант",
        "я тебе хуем мозгов добавлю щас",
        "ты мне сосешь когда небо звездное",
        "ты на корточках мой хуй сосешь",
        "ты к моему хую летишь как воробей",
        "ты нюни пустил когда мой хуй отпиздил тебя",
        "мой хуй тебя встретил без трусов на улице",
        "ты на моем хую заикатся начал",
        "ты под люстрой сосал мне",
        "ты мой хуй на руках своих носишь",
        "мой хуй воняет пизже чем твои духи",
        "я тебя хуем закручу щас как метель ебать",
        "ты к моему хую в жены набиваешься",
        "ты мою сперму к себе на половые губы мажешь",
        "пиздак твоей матери вырежу хуем",
        "твою мать с первого раза порвал как газету",
        "я твоей матери рак губы хуем лечил",
        "я твою мать хуем пиздил",
        "я твоей матери зубы хуем выбил, она так горько плакала",
        "я твою мать овсянкой ебал",
        "я твою мать ебал 2 года назад, когда в школе учился",
        "я твою мать заставил на мой хуй сесть",
        "твою мать ебут мои друзья",
        "твоя мать моим членом с детства питается",
        "я чет часто твою матуху в десна ебу",
        "ты же со своей мамашей по моему хую горишь",
        "я плотно твою мать в пизду ебу",
        "я еблом твоим по пизде твоей мамке ездил",
        "ты сосешь мне на переднем плане",
        "твою мать не останавить на моем хую",
        "твою мать ебал по пьяне на сценах",
        "ты перед моим хуем гнулась как институтка",
        "твой рот сосет мне как балабол",
        "я твою мать хуем на стреле пиздил",
        "я твою мать ебу когда ты не успеваешь бате сосать",
        "ты на мой хуй молишься как на икону",
        "ты под моим хуем прогинаешься",
        "ты моим хуем перебитый",
        "ты сосешь , а мой хуй не ценит этого",
        "твою мать от моего хуя прет",
        "я твою мать хуем перегнул как железо",
        "твоя мать мне сосет",
        "я твою мать промеж яиц зажал",
        "я тебе температуру хуем сбиваю",
        "я твою мать хуем прихуярил как муху",
        "ты под моими яйцами прячешься как под зонтиком",
        "мать твою в подвале ебу как хочу",
        "опракину твою мать с хуя своего щас",
        "ща твою мать хуем на дно тащить ща буду",
        "я твою мать хуем воспитывал",
        "твой рот мочей своей залью щас",
        "твоя мать проститутка моего хуя",
        "ты же мысленно засыпаешь с моим хуем",
        "я твою мать с хуя обоссал как со шланга",
        "твоя мать ждет очередь на мой хуй",
        "я твою мать хуем сотру",
        "твоя мать любит мой член",
        "ты учился сосать у своей матери",
        "зачем твой папаша пошел в педика?",
        "знаешь что я твою семью скрестил хуем?",
        "я твою мать хуем в жопу тыкал понимаешь?",
        "твоя мать мне сосет круче тебя",
        "твой рот не сосет лучше чем твой брат",
        "я же рот твоего отца хуем ебал",
        "я тебе ебло хуем ломаю",
        "ты мою кончу пил как воду",
        "я твою мать за сотку поебу щас",
        "я твою мать хуем в пизду ебал",
        "я твою мать из пизды хуем ебал",
        "я твою мать наоборот ебал",
        "твоя мать подтстилка конченная",
        "твоя мать хуем моим занята",
        "я твою мать через помехи ебу",
        "я твоей матери членом рот поколечил",
        "ебло твое хуем в лужу окуну щас",
        "твоя мать мой член губами шлепает",
        "я тебе в жопу литрами кончаю",
        "твоя мать мой хуй обожает",
        "твоя мать сосет как надо",
        "я твою мать быстро ебу",
        "я тебе хуем мозги пудрю",
        "я тебе хуй в жопу воткну щас",
        "твою мать хуем удовлетваряю по ночам",
        "я тебе череп хуем пробил как молотком",
        "ты от моего хуя сходишь с ума",
        "я об пизду твоей матери ноги вытираю",
        "пиздак твоей мамке хуем рву как тетради руками",
        "мой хуй переломал твою мать",
        "мой хуй твою семейку всю перетрахает",
        "ты мне сосешь как гордый",
        "твоя мать как принцесса на моем хую",
        "я тебе мочи налил литров пять, ты подумал пиво и хуярил",
        "я твою мать через одежду могу поебать щас",
        "я же хуем тебе очко подрываю",
        "нахуй ты мой член нюхаешь дура",
        "я твою мать туда сюда ебу",
        "твоя мать счастлива на моем хую",
        "твоя мать сосет мой член и давится",
        "ты моим хуем загоняешься чет",
        "я твою мать лайнером ебал",
        "я твоей матери в рот кончал ,пока ты спал",
        "тебя ебали петухи на ферме",
        "я обоссал твою семью с балкона",
        "твою мать на легке ебу",
        "я свой хуй сунул тебе в жопу как нож в печень",
        "твоя мать мой хуй нюхает",
        "твоя мать мой хуй хочет",
        "твоя мамаша тебе пример давала, когда сосала мне",
        "я твою мать на воздухe ебу",
        "я твою мать до дрожи ебу",
        "я твою мать пожизненно ебу",
        "я твою мать вверх вниз ебу",
        "я твою мать на вершине ебал",
        "я твою мать петухами ебал",
        "у твоей матери не пиздак а тундра ебаная",
        "я твою мать паштетом выебал",
        "я твою мать хуем ловлю на трассе",
        "я твою мать вприпрыжку ебу",
        "я твою мать на пенсии ебать буду",
        "я твою мать хуем в лес загнал",
        "твоя мамаша воевала с моим хуем",
        "ты от моего хуя сутками не спишь",
        "я твою мать ебу на самакате",
        "я твою мать в жару ебал",
        "ты на моем хую зубы свои теряешь",
        "я твою мать под пальмой ебал",
        "я твою мать еще ебал когда она была школьницей",
        "я твою мать в кабриолете ебал",
        "твоя голова забита мыслями о моем хую",
        "мой хуй забил на твою жалкую шлюху мать",
        "я твоей матери ключицу хуем сломал",
        "я твою мать турником ебал",
        "мой хуй случайно влюбил тебя в себя",
        "я твою мать брусьями ебал",
        "я твою мать по хуям бросаю как мяч",
        "я твою мать в карыте ебал",
        "я тебя в рот отъебал так что ты чет здох пидр бля",
        "я твою мать вешелкой ебал",
        "я тебе  почки хуем отбил , ты кровью ссался",
        "я твою мать булкой ебал",
        "ты на моем хую летаешь как на самолетах, туда сюда",
        "я твою мать снегом ебал",
        "я твоей мамкой на вокзале торугую",
        "твою мать хуем полощу как вещи",
        "я твою мать ебал на корабле",
        "ты у меня на хую сидишь и думаешь что ты в дворце",
        "у тебя любовь к моему хую с первого взгляда",
        "позитивно ебу твою мать",
        "ты сосешь как просто - филя",
        "я тебе за щеку нассал",
        "в пиздак твоей матери пельмени закидываю",
        "ты мои яйца кусал как грецкие орехи",
        "ты мой член пиздой своей замарал",
        "хуем щас порву вагину твою",
        "твою мамашу уже весь твой посёлок переебал",
        "ты пиздак свой подмывала, а серовно воняешь цыганка",
        "я твою мать на поляне ебал",
        "ты на мой хуй лаишь ,пес ебаный",
        "я твою мать на унитазе",
        "тебе чет на ебло насрал, клещ ты ебаный",
        "ты мне лизал яйца на трассе",
        "я твою мать ебал у собора",
        "ты же ссал против ветра и тебе все на ебло попало чет",
        "я тебе своим хуем десну снесу",
        "место учебы ебу твою мамашу",
        "ты на мой хуй падаешь как в яму",
        "я твою мать как собаку с хуя кормлю",
        "я твоей матери яйцом глаза выбил",
        "твоя мать собака облезлая",
        "я твою мать хуем крестил в церкве же",
        "твоя мать шалава ебаная",
        "я тебе глаза хуем затуманю, будешь как в лесу блять",
        "твоя мать блядина поношенная",
        "я твою мать через трусы ебал",
        "твоя мамаша шлюха пробитая",
        "я тебя на хуй насаживал, как цервя на крючек",
        "я тебе хуем по губе как помадой нахуй",
        "твоя мать самая лучшая хуесоска",
        "ты мой хуй своим ртом утомил когда сосал",
        "ебал твой пиздак так , что он закаптился как гриль",
        "твоя мать ебнутая дура",
        "ебу твою мать когда сру тебе в рот",
        "ты моему хую душу свою продал за то чтоб я ебал твой рот",
        "твоя мать хуеглотка тупая",
        "я же тебе хуем нервы испортил",
        "ты моими объедками питаешься, бомж сук",
        "я тебе хуем живот вспорол",
        "я тебя с хуя намочил как с ливня",
        "пиздой твоей редьку сажал",
        "хуем тебя поощраю за то что ты сосешь ничо так",
        "твоя мать выпердышь ебаный",
        "твой рот по самые гланды ебу",
        "я тебе на пизду кончу щас",
        "мой хуй в пизду твоей матери вонзается как пуля",
        "твоя мать выебанная моим хуем",
        "твоя мать ждет пока я ей за щеку хуй суну",
        "твою матуху в жопу без смазки ебу",
        "твой отец петух у которого нету хуя",
        "мой хуй тебя ебет и кормит",
        "твоя мать пытается мой хуй глотать как дым",
        "твоя мать выебанная барыга",
        "у тебя со рта спермак льется как ручеек",
        "я твою мать сыром ебал",
        "твою мать с хуя послал дважды",
        "я твою мать колбасой ебал",
        "я твой рот хуем зацепил как удочкой карягу",
        "я тебе хуем пломбу пробью",
        "у тебя сердцебиение повышено на моем хую",
        "я твою мать икрой ебал",
        "ты пиздаком мамки своей укрываешься как плащем в дожди",
        "твою мать на руkax ебу",
        "твою мать на калеhях трахал",
        "у тебя во рту моя конча блещит",
        "ты меня в жопу целуешь, жопализ ебаный",
        "я твою мать тарелкой ебал",
        "твою мать хуем закалять буду",
        "я твоей матери ебло об асфальт разъебал",
        "я твоей матери в ебло харнул",
        "тебя хуем по углам швырял, питон ты ебаный",
        "ты моим хуем тупо оттрахан",
        "твоя мать шалава триперная",
        "ты мне сосешь как дикарь ебаный",
        "ты понимаешь что тебя мамаша доит, корова ты ебаная",
        "твоя мать мне за хлеб сосала",
        "ты об мой хуй спотыкаешься как будто об бревно",
        "твоя мать моему хую за рубль отдается",
        "ты со своей мамкой из-за моего хуя ссоришься",
        "твоя мать мне за одежду сосала",
        "я твою мать ебал волосиком",
        "за секс с твоей мамкой даже денег не плачу",
        "хуем тебе пальцы отрублю сука",
        "ты под моим хуем ходишь как под защитой",
        "твоя мать мне за рубль отдалась",
        "ты же мой хуй своей губой привлекал",
        "я твою мать хуем прихлопнул",
        "твою мать в школе на парте отъебал в очко",
        "я твою мать на альпах ебал",
        "твоя мать сечется через мой хуй как вода",
        "твоя мать на пробежке ебал по утру",
        "рот твоей матери всегда с моим хуем",
        "мой хуй тебя ебет как нахал",
        "ты свою мамашу на мой хуй за копейки посадил",
        "я твою мать в печень ебал",
        "я твоей матери хуем клизму сделаю",
        "твою мать в тупиках хуем вылавливаю и ебу",
        "я твоей матери хуем хребет ломаю",
        "я твою мать хуем к вешелке приколотил, как пальтушку",
        "я твоей матери хуем шею ломаю",
        "твою мать ебал когда на душе тоска была",
        "что твоей мамке, что тебе , мой хуй поровну надо",
        "я своим хуем душил пизду твоей матери",
        "я твоей матери клитор с ноги выбивал",
        "в вены ебал твою мамашу нахуй",
        "твою мать хуем калечу",
        "ты об мой хуй грелся при морозах",
        "твой рот дальнобойщик хуев",
        "я на хую твой рот крчу как обруч",
        "ты мне сосал во сне и на яву",
        "я твоей матери кирпичи в ебло кидал",
        "я твою мать на чердаке ебал",
        "твоя мамаша моему хую пренадлежит понимаешь?",
        "я твою мать на дверной ручке ебал",
        "у твоей мамке крыша от моего хуя едит",
        "ты сосешь и взрослеешь",
        "хуем ебло тебе разбил в щи",
        "я твою мать на калитке ебал",
        "мать твою на лугу пасу",
        "твою мать хуем затрахаю",
        "отъебал твою мать так, что у нее даже пульс не прощупывался",
        "я твою мать гречкой ебал",
        "твою мать хуем залил",
        "я твою мать забориной ебал",
        "я своим хуем оглушил тваю мамашу",
        "твою мать сонную ебу, она еле оживает, как утка бля",
        "я твою мать алкоголем ебал",
        "твоя мать дрочит на меня",
        "я твою мать качергой ебал",
        "твой же рот мне на сцене сосал",
        "мой хуй с твоей губой развлекается",
        "я об пизду твоей матери бычки тушил",
        "твою мать хуем избаловал чет",
        "ты щеку потянул , когда мой хуй сосал",
        "ты свою мамку по моему согласию ебал",
        "я нождачкой хуярил по пизде твоей матери",
        "я тёркой тер пиздак твоей матери",
        "на ебло тебе ссу, карлик ты ебаный",
        "я твою мать обоссал пока ты клитор сестре лизал",
        "твою мать осудили пожизенно за гулянки с моим хуем",
        "твою мать ебу в парке на лавочке",
        "твоя мать на мой член с 5 этажа падала",
        "твой рот на свой хуй одену щас",
        "я твоей мамке хуем в глаз тыкал",
        "я твоей матери на ебло кончал пока ты хуй отца сосал",
        "хуем тебя на чистую правду выведу сука",
        "ты свою мать учил хуй сосать",
        "я твоей матери хуем по губе давал",
        "твою мать за клубом хуем драл",
        "ты на мой хуй трепещишь как скворец ебаный",
        "я тебе ебло обосрал, опарыш ты ебаный",
        "ты на мой хуй подсел как на спайс",
        "я твоей матери хуем по щеке ударил , у нее челюсть сломалась",
        "я твоей матери залупой по лбу хуярил пока ты мне яйца лизал",
        "я же с тебя шкуру хуем спущу, пес ты ебаный",
        "твоя мать блядь, а твой отец работает в гей клубе",
        "я розу в пизду твоей матери тыкал",
        "слышь мамашку твою ебал во все дыры",
        "твоя мать падала на мой член как засохший лист с дерева",
        "твоя мать плоскогрудная чуханка",
        "твой рот ебет мой хуй как бешенный",
        "твой рот на моем хую как гастайбайтер ебаный",
        "я пизду твоей матери тебе на ебло натягивал",
        "я твою мать шампуром ебал",
        "я твою мать ебал в жерле вулкана",
        "я твоей матери за щеку за забором давал",
        "твоя мать пиздаком кaptoшку coptиpobatь умeet",
        "я твою мать через прогиб ебал",
        "твою мать ебу когда ты у меня под яйцами сидишь",
        "ты вкурсе что я щас твою мать членом упиздохал?",
        "я твоей матери членом последние зубы выбил",
        "ты облизываешь мне член после анального секса с твоей мамашей",
        "ты пизду своей матери хуем поливаешь как огород",
        "твоя мать мне на ногах ногти грызет",
        "я горшок с говном на голову твоей матери одевал",
        "я твоей матери хуем подщечины давал",
        "я твоей матери хуем губу сломал",
        "я в тухлой пизде твоей матери опарышей разводил",
        "твоя мать своими гландами машонки щекочит",
        "я хуй полоскал в мо3гах твоей матери",
        "я хуй в горло твоей матери сувал , чтоб она у нее не шаталась",
        "я через мозг твоей матери мочу фильтровал",
        "я принимаю экзамены, а твоя мама даёт мне взятку натурой) .",
        "я рвал тебе целку твоей матери ржавой трубой",
        "ты своим языком вшей лобковых на пизде матери гонял",
        "ты своим ртом глистов из жопы матери вытаскивал",
        "ты понимаешь твой рот как вай фай, который принимает только хуи",
        "твоя мать запомнила мой член навсегда",
        "мой хуй твою мать каждую ночь после ебли бросал",
        "я своим хуем дверь выбил когда на еблю к твоей матери шел",
        "твоя мамаша твоему отцу изменяет с моим хуем",
        "твоя мать не может забыть что у ней было с моим хуем",
        "я твою мать ебал до такой степени что у нее пизда задымилась",
        "я твою мать ебал при - минус 49 сука",
        "твоя мать на моем хую двигается в ритме минуса",
        "твоя мать пизда глупая, которая влюбилась в мой хуй",
        "твоя мать своим ртот ласкает мой хуй",
        "своим хуем влавствую в пиздаке твоей матери",
        "твоя мать на моем хую танцует своим ртом",
        "я твою мать в рот долбил, у нее аж голова оторвалась",
        "твоя мамаша дается мне без проблем",
        "я твою мать шишками ебал в лесу",
        "я твою мать с хуя в космос отправил",
        "я твою мать раздуплил хуем своим, пока ты сообщение писал",
        "я твою мать хуем так ебал , что она даже обосралась",
        "твою мать шлюху мой хуй украшает понимаешь?",
        "твоя мать как халк прыгнула на 1 км и попала на мой хуй",
        "я твою мать ебал на тебе и случайно мы тебе сломали хребет",
        "мой хуй пинал твою мать как грушу",
        "твоя мать за моим хуем бегает как ребенок за сладостями",
        "я твою мать ебал , она даже обоссалась",
        "я твоей матери в кружку нассал, она подумала что это пиво",
        "твоя мать мне хуй отсосала, я ей оскар дал",
        "я твою мать на хую верчу как сталин в гробу",
        "во рту твоей матери хуи пропадают как в бермудском треугольнике",
        "ты понимаешь что твой язык по моим яйцам как клюшка по льду?",
        "ты нахуй к моему хую ртом своим приплыл как катер к берегу",
        "почему твоя мать заботится об моем хуе больше чем о тебе?",
        "вот чо делать если мой хуй не вылазиет из твоего пробитого очка?",
        "убирай свою мать от моего хуя, она уже заебала там грется",
        "твоя мамаша путает бефидок с моей кончей и хуярит его на завтрак",
        "нахуя ты поставил мой хуй в рамку и молился ему?",
        "вспомни как твой рот сосал мне как бешенный",
        "твоя мать ставила фото моего хуя вместо твоего выпускного",
        "скажи зачем ты сосешь и даришь моему хую розы?",
        "помнишь как ты мне минет по утрам делал?",
        "моя конча заменяет кровь в твоем теле",
        "скажи почему твоя девушка ушла к моему хую?",
        "когда ты будешь идти я собью тебя своим хуем",
        "у тебя рот как пылесос ,всасывает хуи стремительно",
        "я твоей мамке на пизду сгущенку лил, а ты слизывала языком своим",
        "я тваю мамашу на олипеаде кидал своим хуём на дальность",
        "ты нахуй мой хуй нюхал когда я с твоей мамкой ебался?",
        "ты после моего члена захотел добавку соснуть?",
        "я своим хуём тваю мать кидал как на скакалке",
        "слышь пёс ты чё грыз свой член?",
        "я в будущем увидел тваю мать обконченою мною",
        "так мне может рот твоей мамтери своим хуем забить в твой пиздак?",
        "твоя мамшка сосет за кг соли или сахара ,слышь олух блять ебаный",
        "я твоим ебалом мусаравозы блять подтирал",
        "мой хуй тебя часто блять угнитает когда ты его сосешь?",
        "я своим хуём разгонял деманов из пизды твоей мамаше",
        "я твоей матери сука обручальное кольцо в загсе хуем надевать буду",
        "я тебе воздух фильтровать хуем своим буду, сын блудной пизды",
        "я твой рот сравнил с уровнем пoeca и заставил сосать дико",
        "нахуй твоя мать мне хуй сосет как королева ебаный красоты ?",
        "нахуй твоя мать мне сосет как лох ебаный",
        "твой рот для моего хуя 3oлotaя жила",
        "ты мне сосал как ебаная дичь понимаешь?",
        "я пиздой твоей матери проехался по асфальту",
        "твоя мать мне сосет как мусорка ебаная",
        "я твою мать под шконкой ебал, даун ебаный",
        "я же тебе залупу на язык ложу как таблетку",
        "твоя мать мой член своим ртом до оргазма пытается довести",
        "нахуй твоя мать мне сосет как дура ебана?",
        "нахуй твоя мать мой хуй любит ?",
        "нахуй твоя мать мой хуй в сп звала?",
        "я же ебал твою мать как твоё очко",
        "так нахуй ты мне сосал как гадроспер пидор?",
        "я твою мать с самолета нахуй послал",
        "я же твое очко ебал ,слиток ты ебаный",
        "ты нахуй щяс подохнишь, как птица ебаная",
        "ты нахуй за моим хуем садик строил?",
        "я хуем выловил твою мать из аквариума",
        "твоя мать на моем хую танцевала дичь",
        "я пришел ебать твою мать хуем в жопу наоборот",
        "твоя мать мне сосала как 3oлotой рунец",
        "ты понимаешь что твою мать бичи хуем ебали?",
        "ты моему хую улыбался как лох ебаный",
        "твоя мамаша страхует мой хуй когда на него нападают телки",
        "твоя мать заезженная шалава которая ебется во все дырки",
        "твоя мать гналась за моим хуем , как собака за косточкой",
        "как думаешь твоя мамаша будет ждать мой хуй из армии?",
        "твоя мать отдала свою пизду за пачку сигарет",
        "помнишь как ты думал что мой хуй это чупачупс и сосал его?",
        "я твою мать ебал ебал пока ты еще уроки делал",
        "твоя мамаша молилась моему хую",
        "нахуй ты мой хуй называешь великий господин?",
        "мой хуй ездит по пизде твоей мамаши как машина по трассе",
        "я твоей мамаше на своем хуе проводил экскурсию по городу",
        "мой хуй пригласил твою мамашу на танец и она упала пиздой на него",
        "твоя мамаша заебанная шлюха ,которая берет в рот за медь",
        "мой хуй танцевал с пиздой твоей мамаши балет",
        "помнишь как ты свою мамашу отдал мне в рабство  и я ее выебал",
        "я тебе в ебло насрал ,и твою мать бомжам продал",
        "у тебя гланды как кегля от боулинга после моей залупы",
        "ты сын блудный пизды, но мой член серовно ебал твою щеку",
        "ты понимаешь что твоя мать выебабанная",
        "ты понимаешь что твоя мать каза сраная на мой хуй нарывается",
        "давай твоя мамашка мне для хуя семенар запоёт",
        "ты понимаешь что твоя мать срёт кончёй?",
        "ты понимаешь что твоя мать на мой хуй садится как на кресло?",
        "мне тебя что уебать об батарею как яйца в смятку?",
        "ты понимаешь что твоя мать читает стихи моему хую",
        "ты понимаешь что твоя мать спит на моём хую в палатке?",
        "ты понимаешь что твоя мать уёбаная?",
        "ты понимаешь что мать твою ебу хачи в переходе на вокзале?",
        "ты понимаешь что твоя мать сосёт мне хуй за шаурму",
        "ты понимашь что я твою мамашку выебал в квартале красных фоннарей",
        "ты понимаешь что твоя мамашка мне стрептиз танцевала в ветриен?",
        "ты понимаешь что я твою мамашку на озоте подстрлил как утку сука",
        "ты понимаешь что твоя мать на мой хуй набивается?",
        "ты чо ушёл сосать мой хуй под аливье?",
        "ты понимаешь что твоя мать мой хуй к себе в карман кладёт?",
        "ты понимаешь что я на чердаке твою бабулю повесил своим хуем",
        "ты понимаешь что я об лобок твоей маамшки своим хуем орехи колю",
        "мать твоя стонет под скрипы гитары от моего хуя",
        "мне твою щеку что ли потереть как люстру?",
        "почему ты прячешь мой хуй у себя во рту, любишь чтоле?",
        "я могу ебать твою мать на неведомом отстрове",
        "твоя мамаша когда сдохла хули ты мне в хуй ныл?",
        "ебал твою мать в жопу пока ты мне хуй сосал",
        "сын собаки слышь долбанутая иди отсюда и мамку свою прихвати",
        "ты понимаешь что я выбил своим хуем гланды твоей мамашки?",
        "слыш) бревно ты ебаное) мамашу твою на сеновале ебал",
        "я твою мамашу пас своим хуем на майдане",
        "я пиздой твоей матери вкрутил лампочку",
        "я ща через свой хуй пущу электро заряд тебе в мозг",
        "пидор огнедыщащий иди сюда я тебя ебать буду",
        "нахуй ты проводил тест драйв на моем хуе",
        "твоя мать на моем хуе ездит покупать моему хую украшения",
        "твоя мать зачем хвастается моим хуем перед подружками",
        "твоя мать моим хуем убила сталина",
        "твоя мать моим хуем умеет останавливать пули",
        "твоя мать мою сперму пила как водку",
        "твоя мать стирала тебе одежду моей спермой",
        "твоя мать построила одежный завод в виде моего хуя",
        "зачем твоя мать на моем хуе поставила светильник ?",
        "я на пизде твоей матери устраивал скачки на конях",
        "я тебе ша глаз протикну своим хуем как шампур шашлык",
        "мой хуй посадил яблоню на пизде твоей матеи",
        "мой хуй построил кондитерскую фабрику",
        "пизда твоей матери сняла номер на моем хуе",
        "твоя мать готовит на моем хуе овсянку и дает тебе кушать",
        "в пизде твоей матери летают теродактели",
        "мой хуй выиграл первое место по бегу на пизде твоей матери",
        "пизда твоей матери падает на мой хуй со скоростью света",
        "я на пизде твоей матери устраивал уличные гонки",
        "я на пизде твоей матери снимал форсаж 7",
        "по пизде твоей матери ходил слон и у неё пизда стала плоской",
        "я же туссу хуев устраивал на пизде твоей матери",
        "твоя мать с моего хуя построила легосити",
        "пизда твоей матери помовлена с моим хуем,ты это знал ?",
        "твоя мать своим очком умеет дороги строить",
        "я из пизды твоей матери выкачивают тонну нефти",
        "я ща своим хуем перевешу целку твоей матери тебе на губу",
        "я твою мать ебал когда черная дыра засасывала землю",
        "из пизды твоей матери вытащили самого редкого скорпиона",
        "я в пизде твоей матери устраивал звездные войны",
        "твоя мать сделала одиколон по запаху моего хуя",
        "пизда твоей матери это как беговая дорожка для моего хуя",
        "твоя мать обнимала мой хуй как свою детскую игрушку",
        "твоя мать прыгает а моем хуе как кингуру",
        "мой хуй в пизде твоей мамки как воробей",
        "у твоей матери пиздак после моего хуя как океан",
        "ты зачем ща моим хуем бьешь свою мать по клитору",
        "я на пизде твоей матери вафли делал",
        "твоя мать мерила отрезки по моему хую , когда училась в школе",
        "твоя мать осминог ебаный) своей пиздой присосалась к моему хую",
        "я в пиздак твоей матери огурцы закидывал и мариновал их потом",
        "я пиздак твоей матери перекидывал через весь атлантический океан",
        "твоя мамаша по ночам скачет на моем хую как кабылы на скачках",
        "твоя мать всегда ходит с моим хуем гулять",
        "на пизде твоей мамаши вальс танцуют школьники ебаные",
        "мой хуй танцевал танго на пизде твоей матери",
        "почему твоя мать каждую ночь выбирает мой хуй, а не твоего отца?",
        "почему твоя мать бегает искать смазки после моего хуя?",
        "слышь) рукаблуд ебаный) я твою мать ебал в марштрутке прилюдно",
        "слышь) олух ебаный) ты понимаешь что я твою мать ебал в метро",
        "почему твоя мамаша свою пизду продает среди детских игрушек?",
        "я из пизды твоей матери уже могу спокойно шубу сделать",
        "я из пизды твоей матери единорога вытащил",
        "я твою мать ебал твоей косяской, когда ты вней срался сука",
        "твоя мать радуется моему хую, как старики пенсии",
        "я твою мать ебал будкой, в которой ты прятался от своего отца",
        "я твоей матери пиздак хуем отбил, он у нее опух чет",
        "я на пизде твоей матери хуем вожу как клюшкой по льду",
        "на пизде твоей матери будет проводится евро 2017",
        "твоя мать сосет мой хуй так же аппетитно , как сосучки",
        "я пиздак твоей матери чере3 друшлак промывал",
        "ты ко мне со своей мамашой ходил на уроки по ебле",
        "твоя мать своей пиздой бомбардирует мой хуй",
        "я в пиздак твоей матери хуем захожу как люди в супермаркет",
        "твоя мать моему хую калыбельную поет перед сном",
        "твоя мать мой хуй крышует, как мусора точки",
        "я своим хуем выловил пздак твой матери из озера",
        "твоя мать мой хуй охронят как инкосаторы деньги",
        "твоя мать въебанная моим хуем",
        "я твою мать верхногами ебал сука",
        "твоя мать на моем хую как простреленная лодка",
        "твоя мать как цветок цветет, когда мой хуй сосет",
        "ща пиздак твоей матери станет банкротом после моего хуя",
        "пиздак твоей матери это как сейф,я потом ограблю её нахуй",
        "ты блять голубоглазый даун) я тебе ща хуем цвет глаз поменяй",
        "ты блять знал что твоя мать стала белой от моей спермы",
        "твоя мать сейчас уберается на моем хуе после вчерашнего дня",
        "ты понимаешь что мой хуй подкинул идею сделать мультик смурфик",
        "я ща пиздак твоей матери прижму дверью и буду ебать её вечно",
        "ты блять понимаешь что я твою мать чешу своим хуем как кота ?",
        "ты блять понимаешь что твоя мать пируэты танцует на моем хуе",
        "ты блять понимаешь что твоя мать пируэты танцует на моем хуе",
        "твоя мать в джунглях вместо тарзанки использует мой хуй",
        "твоя блядомамаша продается моему хую за просто так",
        "твоя мать благодаря моему хую нашла дорогу с леса",
        "мой хуй это генерал пизды твоей матери",
        "твоя мать нахуй надела уши дьявола на мой хуй?",
        "я ща твою мать спущу со своего хуя как детей с горки",
        "твоя мать своим пиздаком спамит мой хуй",
        "твоя мать нахуй в мой хуй дунула как в флейту ?",
        "твоя мать сука вызывает вместо скорой мой хуй",
        "я твою мать так ебал что у неё пизда взлетела в воздух",
        "я твою мать сука на горах ебал потом её скинул с горы как колобка",
        "твоя мать своим пиздаком спамит мой хуй",
        "твоя мать сука страус ебаный который прячется в моем хуе",
        "твоя мать убегала от моего хуя как колобок от бабушки и дедушки",
        "пиздак твоей матери это как радио вышка для моего хуя",
        "ты понимаешь что я щас хуем трясану твоя мать проснется?",
        "когда мой хуй вошел в рот твоей матери, она даже онемела нахуй",
        "ты понимаешь что твоя мать моим хуем пиздак свой подтирает?",
        "я твою мать щас растреляю с хуя спермаком",
        "почему когда я доебываю твою мать она травит твой рот на мой хуй?",
        "твоя мать моим хуем затягивается, прям как твой отец сигаретами",
        "я твою мать хуем избивал за то что она плохо сосала",
        "я твою мать своим хуем с того света вытащил",
        "я твою мать хуем переверну щас как катлеты",
        "я пиздак твоей матери так разогрел что там жарить яйца можно было",
        "я твою мать в кишку 12 перстную выебу щас",
        "ты понимаешь что я щас твою щеку хуем протораню?",
        "я твою мать ебал ,у нее пизда квакала как жаба ебаная",
        "мне твой рот пробомбить хуем как митиаритом чтоле?",
        "ты же мой хуй своим ртом тараном брал блять",
        "почему твоя мать ухлестывает за моим хуем как пионер ебаный?",
        "я же пиздак твоей матери хуем оперировал",
        "я твоей матери хуем шрамы на пизде буду делать",
        "я твоей матери хуем по носу дал ,у нее кровить начало",
        "твоя мать попадает под мою мочу ради того чтоб искупаться",
        "я твоей матери спермак свой ей по венам пускаю",
        "ты на моем хую таешь как мороженное",
        "слышь олух ебаный) ты зачем написал стих как я твою мать ебал ?",
        "давай пиздак твоей матери отправим к моему хую,кондуктор ебаный",
        "нахуя ты ходил к моему хую и сдавал тест на наркотики ?",
        "ты понимаешь что я твою мать на хую как диск крутить буду?",
        "я щас тупо разъебу тебе нос хуем) и будешь ты грузин ебаный",
        "я же тебя хуем осаживал как приору ебаную",
        "ты понимаешь что мой спермак для твоей матери как бальзам?",
        "ты понимаешь что мой хуй уничтожает твой рот как граната?",
        "помнишь как я достал свой член а ты упал от страха?",
        "ты понимаешь что я ебал твою мать и кончил ей в рот?",
        "помнишь как я твой рот ебал со свистом, что аж искры полетели",
        "я тебя хуем качаю как ветер листья понимаешь, дрищ ты ебаный",
        "тыпонимаешь что я тебе в очке сделал дыру как в бубликах?",
        "я же тебе хуем кодык выбил понимаешь , хуесос ты ебаный",
        "я же на тебя ссал с твоего дома ты думал что это ливинь хуярит",
        "ты хуелес ебаный, как геркулес только сосать хуй силен?",
        "я как ярило свечу хуем в пиздак твоей мамки тебе нравится?",
        "мать твою ебал, потом выбросил ее как ненужный мусор",
        "да твоя мать барбос ебательный моим хуем карательный",
        "этой ночью я реально твою мамашу наебашу своим хуем",
        "твоя мать активно ищет мой хуй пиздос",
        "твоя мамаша на столько унылая что к моему хую цепляется?",
        "твоя анальная мамаша в мой хуй дует , ебаная пи3да",
        "я анальную вагину твоей матери захуярил понимаешь",
        "я твою мамашу как кукла ебал понимаешь это гондон ебанутый",
        "мой хуй ебет твою мамашу как сычеву понимаешь?",
        "мой хуй каждый день идет втвою мать как ты в школу",
        "я же пиздак твоей матери хуем проработал как трактор поле",
        "ты понимаешь что ты на моем хую качаешься как штангой",
        "ты понимаешь что я твою мать хуем прикрываю когда ей холодно",
        "я же тебя хуем разберу на части, хуесос приборычный",
        "ты же понимаешь что ты даже сосешь мне когда у тебя сил нет",
        "ты понимаешь что я твоя мать мне сосет через гондон?",
        "ты понимаешь что ты как истребитель вылетаешь на мой хуй",
        "ты понимаешь что ты бьешься об мой хуй как утка ебаная сука",
        "ты понимаешь что я твою мать буду хуем подкидывать как блинчики?",
        "ты понимаешь что ты даже головой не думаешь когда сосешь мне член",
        "я своим хуем твоей мамке стрелки буду подводить",
        "ты понимаешь что ты годами будешь щипать волосы с моего лобка",
        "ты к моему хую двигаешься к цели, тип как арабы к терактам",
        "я же пиздак твоей матери на мясо уебал крч , иди катлеты ебашь",
        "ты как карабль тонешь когда я ссу на тебя",
        "ты понимаешь что я тебе ноги переломаю своим хуем) инвалид ебаный",
        "я твою мать постепенно ебу, пока мой хуй не погубит ее пиздак",
        "я по пиздаку твоей матери хуем ебашу как по барабану",
        "ты понимаешь что ты под водой даже мне сосал, карась ебаный",
        "у тебя же еще до сих пор чувства не остыли к моему хую я прав?"
    ];
    /*
    export function SaveHeroSelect() {


            let heroesList = EntitySystem.GetHeroesList();
            let myHero = EntitySystem.GetLocalHero();




                    for (let i = 0; i < heroesList.length; i++) {
                        let entity = heroesList[i];

                        if (entity && entity.IsSameTeam(myHero)) {

                            if (saveSelect.length < 5) {

                                let selectHeroForSave = entity.GetUnitName();
                                saveSelect.unshift('panorama/images/heroes/icons/'+selectHeroForSave+'_png.vtex_c');
                            }
                        }
                    }

                if(Engine.OnceAt(9999999)) {
                   if(myHero.GetUnitName() === 'npc_dota_hero_dazzle') {
                       Items.enableAutoSave = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Dazzle'], 'Enable Auto Save', true)
                       Items.menuAutoSave = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Интеллект', 'Dazzle'], 'Choose Heroe', Items.saveSelect, true)
                   }
                }

    }




    export function AutoSaveAlly(myHero){

        if(Items.enableAutoSave === true) {

            if(Menu.GetMultiSelectValue(Items.menuAutoSave,0) === true){
                let bb1 = Items.saveSelect[0]
            console.log(bb1)
            }

            if(Menu.GetMultiSelectValue(Items.menuAutoSave,1) === true){
                let bb11 = Items.saveSelect[1]
                console.log(bb11)
            }

            if(Menu.GetMultiSelectValue(Items.menuAutoSave,2) === true){
                let bb12 = Items.saveSelect[2]
                console.log(bb12)
            }

            if(Menu.GetMultiSelectValue(Items.menuAutoSave,3) === true){
                let bb13 = Items.saveSelect[3]
                console.log(bb13)
            }

            if(Menu.GetMultiSelectValue(Items.menuAutoSave,4) === true){
                let bb14 = Items.saveSelect[4]
                console.log(bb14)
            }


            for (let i = 0; i < saveSelect.length; i++) {
                let entity = saveSelect[i];

            }

        }
    }
*/
    function DodgeTaskManagement(myHero) {
        if (!Items.msg_queue || Items.msg_queue.length <= 0) {
            return;
        }
        let info = Items.msg_queue.shift();
        if (!info) {
            return;
        }
        let currentTime = GameRules.GetGameTime();
        let diff = info.delay - Items.ERROR;
        let executeTime = info.time + Math.max(diff, 0);
        if (currentTime > executeTime + Items.DELTA) {
            return;
        }
        if (currentTime < executeTime - Items.DELTA) {
            Items.DodgeUpdate(info);
            return;
        }
        Items.DodgeDefend(myHero, info);
    }
    Items.DodgeTaskManagement = DodgeTaskManagement;
    function LaughEmama() {
        if (Menu.GetValue(Items.LaughEnablemama) === true) {
            let GGWP = Items.mamatext[Math.floor(Math.random() * Items.mamatext.length)];
            if (Menu.IsKeyDownOnce(Items.Laughcombostart)) {
                let command = 'say' + GGWP.toString();
                Engine.ExecuteCommand(command);
            }
            if (Menu.IsKeyDownOnce(Items.Laughsecond)) {
                let command = 'say_team' + GGWP.toString();
                Engine.ExecuteCommand(command);
            }
        }
    }
    Items.LaughEmama = LaughEmama;
    function autoBottle(myHero) {
        if (!Menu.GetValue(Items.autoUseBottle) === true) {
            return;
        }
        if (myHero.IsChannellingAbility()) {
            return;
        }
        let BB = myHero.GetItem('item_bottle', true);
        let myHealth = myHero.GetMaxHealth() - 200;
        let myMana = myHero.GetMaxMana() - 200;
        if (BB && myHero.HasModifier('modifier_fountain_aura_buff')) {
            if (myHero.GetHealth() < myHealth || myHero.GetMana() < myMana) {
                if (!myHero.HasModifier('modifier_bottle_regeneration') && !myHero.IsChannellingAbility()) {
                    BB.CastNoTarget();
                }
            }
        }
    }
    Items.autoBottle = autoBottle;
    /*    export function makeid(length) {
        var result           = '';
        var characters       = Items.mamatext;
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }*/
    function targetIndicator(myHero, enemyHero) {
        if (!myHero) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        let curtime = GameRules.GetGameTime();
        if (Menu.GetValue(Items.optionLockTargetParticle) === 0) {
            if (enemyHero !== null) {
                if (curtime > Items.particleNextTime) {
                    if (Items.currentParticle > 0) {
                        Items.currentParticle.Destroy();
                        Items.currentParticle = 0;
                    }
                }
                if (Engine.OnceAt(0.25)) {
                    let sparkParticle = Particle.Create("particles/items_fx/aegis_resspawn_flash.vpcf", Enum.ParticleAttachment.PATTACH_INVALID, enemyHero);
                    Items.currentParticle = sparkParticle;
                    sparkParticle.SetControl(0, enemyHero.GetAbsOrigin());
                }
            }
            Items.particleNextTime = curtime + 2;
        }
        if (Menu.GetValue(Items.optionLockTargetParticle) === 1) {
            if (enemyHero !== null) {
                if (curtime > Items.particleNextTime) {
                    if (Items.currentParticle > 0) {
                        Items.currentParticle.Destroy();
                        Items.currentParticle = 0;
                    }
                }
                if (Engine.OnceAt(0.25)) {
                    let bloodParticle = Particle.Create("particles/items2_fx/soul_ring_blood.vpcf", Enum.ParticleAttachment.PATTACH_INVALID, enemyHero);
                    Items.currentParticle = bloodParticle;
                    bloodParticle.SetControl(0, enemyHero.GetAbsOrigin());
                }
            }
            Items.particleNextTime = curtime + 2;
        }
    }
    Items.targetIndicator = targetIndicator;
    function getComboTarget(myHero) {
        if (!myHero) {
            return;
        }
        let menuVal = parseInt(Menu.GetValue(optionTargetRange).toString());
        let targetingRange = menuVal;
        let mousePos = Input.GetWorldCursorPos();
        let enemyTable = Input.GetNearestHeroToCursor(Enum.TeamType.TEAM_ENEMY);
        if (!enemyTable) {
            return;
        }
        let enemyDist = (enemyTable.GetAbsOrigin().sub(mousePos)).Length2D();
        let nearestTarget = enemyTable;
        if (enemyDist >= targetingRange) {
            nearestTarget = null;
        }
        return nearestTarget;
    }
    Items.getComboTarget = getComboTarget;
    function MineDestroyer(myHero) {
        if (!myHero) {
            return;
        }
        if (!myHero.IsAlive()) {
            return;
        }
        let radius = myHero.GetAttackRange();
        if (radius < 430) {
            radius = 430;
        }
        let npcs = myHero.GetUnitsInRadius(radius, Enum.TeamType.TEAM_ENEMY);
        if (!npcs || npcs < 1) {
            return;
        }
        for (let index = 0; index < npcs.length; index++) {
            const npc = npcs[index];
            if (npc && !myHero.IsSameTeam(npc)) {
                let name = npc.GetUnitName();
                if (name && name == "npc_dota_techies_land_mine") {
                    if (Menu.GetMultiSelectValue(Items.Minedestr, 0) === true) {
                        Items.MineDestroyerAttack(myHero, npc);
                    }
                }
                if (name && name == "npc_dota_techies_remote_mine") {
                    if (Menu.GetMultiSelectValue(Items.Minedestr, 1) === true) {
                        Items.MineDestroyerAttack(myHero, npc);
                    }
                }
                if (name && name == "npc_dota_techies_stasis_trap") {
                    if (Menu.GetMultiSelectValue(Items.Minedestr, 2) === true) {
                        Items.MineDestroyerAttack(myHero, npc);
                    }
                }
            }
        }
    }
    Items.MineDestroyer = MineDestroyer;
    function getBestPosition(unitsAround) {
        if (!unitsAround || unitsAround < 1) {
            return;
        }
        let countEnemies = unitsAround;
        if (countEnemies == 1) {
            return unitsAround[1].GetAbsOrigin();
        }
        return Items.getMidPoint(unitsAround);
    }
    Items.getBestPosition = getBestPosition;
    function getMidPoint(entityList) {
        if (!entityList) {
            return;
        }
        if (entityList < 1) {
            return;
        }
        let pts = [];
        for (let i = 1; i < entityList.length; i++) {
            let npcs = entityList[i];
            if (npcs) {
                let pos = npcs.GetAbsOrigin();
                let posX = npcs.GetAbsOrigin().x;
                let posY = npcs.GetAbsOrigin().y;
                //console.log(posX)
                //console.log(posY)
                pts.push(npcs, [posX, posY]);
            }
        }
        console.log(pts);
        let x = 0;
        let y = 0;
        let c = pts.length;
        for (let i = 1; i < pts.length; i++) {
            let bossrrr = pts[i];
            let g = x + bossrrr.posX;
            let h = y + bossrrr.posY;
            console.log(new Vector(g / c, h / c, 0));
            return new Vector(g / c, h / c, 0);
        }
    }
    Items.getMidPoint = getMidPoint;
    function MorphBalaceHP(myHero, myMana) {
        if (!myHero) {
            return;
        }
        if (!Items.MorphBalanceToggler) {
            return;
        }
        if (GameRules.GetGameTime() - Items.MorphBalanceTimer < 0.1) {
            return;
        }
        if (myHero.IsSilenced()) {
            return;
        }
        if (myHero.IsStunned()) {
            return;
        }
        let targetHP = null;
        if (Items.MorphBalanceSelectedHP > 0) {
            targetHP = Items.MorphBalanceSelectedHP;
        }
        if (!targetHP) {
            return;
        }
        let morphAGI = myHero.GetAbility("morphling_morph_agi");
        let morphSTR = myHero.GetAbility("morphling_morph_str");
        if (!morphAGI || !morphSTR) {
            return;
        }
        if (morphAGI.GetLevel() < 1) {
            return;
        }
        if (myHero.HasModifier("modifier_morphling_replicate")) {
            return;
        }
        let myHP = myHero.GetHealth();
        let myMAXHP = myHero.GetMaxHealth();
        let shouldToggleAGI = false;
        let shouldToggleStr = false;
        let allowedDeviation = null;
        if (Menu.GetValue(Items.optionHeroMorphHPBalanceDeviation) === true) {
            allowedDeviation = true;
        }
        if (Menu.GetValue(Items.optionHeroMorphHPBalanceDeviation) === false) {
            allowedDeviation = false;
        }
        if (!myHero.HasModifier("modifier_fountain_aura_buff")) {
            if (targetHP - myHP >= allowedDeviation) {
                if (myHero.GetAgility() > 1) {
                    shouldToggleStr = true;
                }
                if (myHero.GetAgility() < 1) {
                    shouldToggleStr = false;
                }
                if (myMAXHP - targetHP >= allowedDeviation && (myHP - targetHP) >= allowedDeviation) {
                    if (myHero.GetStrength() > 1) {
                        shouldToggleAGI = true;
                    }
                }
                if (myMAXHP - myHP <= 50) {
                    if (myMAXHP - targetHP >= 50) {
                        shouldToggleAGI = true;
                    }
                    else if (targetHP - myHP >= 50) {
                        shouldToggleStr = true;
                    }
                    else
                        shouldToggleAGI = false;
                    shouldToggleStr = false;
                }
            }
            if (shouldToggleStr) {
                if (!morphSTR.GetToggleState()) {
                    morphSTR.Toggle();
                    Items.MorphBalanceTimer = GameRules.GetGameTime();
                    return;
                }
                else if (morphSTR.GetToggleState()) {
                    morphSTR.Toggle();
                    Items.MorphBalanceTimer = GameRules.GetGameTime();
                    return;
                }
            }
        }
    }
    Items.MorphBalaceHP = MorphBalaceHP;
    function MorphDrawBalanceBoard(myHero) {
        if (!myHero) {
            return;
        }
        if (Items.optionHeroMorphDrawBoard === true) {
            return;
        }
        let maxMorphAGI = Math.floor(myHero.GetAgility());
        let maxMorphSTR = Math.floor(myHero.GetStrength());
        let currentMAXHP = myHero.GetMaxHealth();
        let minHP = currentMAXHP - maxMorphSTR * 20;
        let maxHP = currentMAXHP + maxMorphAGI * 20;
        let w, h = Renderer.GetScreenSize();
        Renderer.SetDrawColor(255, 255, 255, 0);
        let toX = parseInt(Menu.GetValue(Items.optionHeroMorphDrawBoardXPos).toString());
        let toY = parseInt(Menu.GetValue(Items.optionHeroMorphDrawBoardYPos).toString());
        let startX = 300 - toX;
        let startY = 300 + toY;
        if (Menu.IsKeyDownOnce(Items.optionHeroMorphBoardToggleKey)) {
            Items.Toggler = !Items.Toggler;
        }
        if (!Items.Toggler) {
            return;
        }
        Renderer.SetDrawColor(0, 0, 0, 150);
        Renderer.DrawFilledRect(startX - 1, startY, 202, 25);
        Renderer.SetDrawColor(0, 0, 0, 255);
        Renderer.DrawOutlineRect(startX - 1, startY, 202, 25);
        Renderer.SetDrawColor(0, 255, 0, 150);
        let font1 = Renderer.LoadFont("Tahoma", 22, Enum.FontWeight.EXTRABOLD);
        let minHPstring = minHP.toString();
        let maxHPstring = maxHP.toString();
        Renderer.DrawText(font1, startX - 25, startY - 25, minHPstring, 0);
        Renderer.SetDrawColor(255, 0, 0, 150);
        Renderer.DrawText(font1, startX + 175, startY - 25, maxHPstring, 0);
        let i;
        for (i = 1; i < 20; i++) {
            Renderer.SetDrawColor(25 + i * 10, 230 - i * 10, 0, 150);
            Renderer.DrawFilledRect(startX + (i - 1) * 10, startY + 1, 10, 23);
        }
        let hoveringTable = [];
        if (hoveringTable === null) {
            for (i = 1; i < 20; i++) {
                hoveringTable[i] = Input.IsCursorInRect(startX + (i - 1) * 10, startY + 1, 10, 23);
            }
        }
        Renderer.SetDrawColor(0, 0, 0, 255);
        Renderer.DrawOutlineRect(startX + 75, startY - 25, 50, 20);
        Renderer.SetDrawColor(0, 0, 0, 150);
        Renderer.DrawFilledRect(startX + 75, startY - 25, 50, 20);
        let togglerHovering = Input.IsCursorInRect(startX + 75, startY - 25, 50, 20);
        if (togglerHovering && Input.IsKeyDownOnce(Enum.ButtonCode.MOUSE_LEFT)) {
            Items.MorphBalanceToggler = !Items.MorphBalanceToggler;
        }
        if (Items.MorphBalanceToggler === true) {
            Renderer.SetDrawColor(0, 255, 0, 150);
            Renderer.DrawTextCentered(Items.font, startX + 100, startY - 27, "ON", 0);
        }
        if (Items.MorphBalanceToggler === false) {
            Renderer.SetDrawColor(255, 0, 0, 150);
            Renderer.DrawTextCentered(Items.font, startX + 100, startY - 27, "OFF", 0);
        }
        let HPsteps = Math.floor((maxHP - minHP) / 20);
        if (Input.IsKeyDownOnce(Enum.ButtonCode.MOUSE_LEFT)) {
            /*               for (let index = 1; index < hoveringTable.length; i++) {

                               if (hoveringTable[1] === true){
                                   if (hoveringTable[1] === true) {
                                       Items.MorphBalanceSelectedHP = minHP;
                                       Items.MorphBalanceSelected = 1}

                                       else if (hoveringTable[20] === true) {
                                           Items.MorphBalanceSelectedHP = maxHP;
                                           Items.MorphBalanceSelected = 20}
               /!*                        else
                                           if(index === true) {
                                               Items.MorphBalanceSelectedHP = minHP + HPsteps*i;
                                               Items.MorphBalanceSelected = i
                                           }*!/
                                       }
                                   }*/
        }
        if (Items.MorphBalanceSelected > 0) {
            Renderer.SetDrawColor(0, 0, 0, 200);
            Renderer.DrawFilledRect(startX + 3 + 10 * (Items.MorphBalanceSelected - 1), startY, 4, 30);
            let morpBalance = Items.MorphBalanceSelectedHP.toString();
            Renderer.DrawTextCentered(Items.font, startX + 3 + 10 * (Items.MorphBalanceSelected - 1), startY + 30, morpBalance, 0);
        }
    }
    Items.MorphDrawBalanceBoard = MorphDrawBalanceBoard;
    function MorphSelectCombo(myHero, enemy) {
        if (!myHero) {
            return;
        }
        ;
        if (!enemy) {
            return;
        }
        ;
        let adaptiveStrike = myHero.GetAbilityByIndex(1);
        let GetOriginMin = myHero.GetAbsOrigin().sub(enemy.GetAbsOrigin());
        if (adaptiveStrike && adaptiveStrike.SecondsSinceLastUse() > -1 && (adaptiveStrike.SecondsSinceLastUse() < GetOriginMin.Length2D() / 1150)) {
            Items.morphlingComboSelect = false;
            return;
        }
        ;
        if (enemy.GetHealth() >= Items.morphlingTotalDMGwoWave) {
            Items.morphlingComboSelect = true;
        }
        else
            Items.morphlingComboSelect = false;
        return;
    }
    Items.MorphSelectCombo = MorphSelectCombo;
    function drawMorphlingKillIndicator(myHero) {
        if (!myHero) {
            return;
        }
        ;
        if (Items.morphlingTotalDMG === 0) {
            return;
        }
        ;
        let enemy = Input.GetNearestHeroToCursor(Enum.TeamType.TEAM_ENEMY);
        if (!enemy) {
            return;
        }
        ;
        if (!enemy.IsPositionInRange(Input.GetWorldCursorPos(), 500, 0)) {
            return;
        }
        ;
        let pos = enemy.GetAbsOrigin();
        let posY = enemy.GetHealthBarOffset();
        let x, y, visible = Renderer.WorldToScreen(pos);
        if (Items.morphlingTotalDMG > 0) {
            if (visible) {
                if (enemy.GetHealth() > Items.morphlingTotalDMG) {
                    Renderer.SetDrawColor(255, 102, 102, 255);
                }
                else
                    Renderer.SetDrawColor(50, 205, 50, 255);
            }
            Renderer.DrawText(Items.font, x - 50, y - 70, "Shotgun DMG:" + Math.floor(Items.morphlingTotalDMG), 0);
        }
    }
    Items.drawMorphlingKillIndicator = drawMorphlingKillIndicator;
    function MineDestroyerAttack(myHero, target) {
        if (!myHero || !target) {
            return;
        }
        if (Menu.GetValue(Items.MineDestroyeroptionInvAttack) === true) {
            if (myHero.IsChannellingAbility()) {
                return;
            }
            if (target !== null) {
                let localPlayer = EntitySystem.GetLocalPlayer();
                localPlayer.AttackTarget(myHero, target);
            }
        }
    }
    Items.MineDestroyerAttack = MineDestroyerAttack;
    function DodgeUpdate(info) {
        if (!info) {
            return;
        }
        let myHero = EntitySystem.GetLocalHero();
        if (!myHero) {
            return;
        }
        if (!myHero.IsAlive()) {
            Items.msg_queue = [];
        }
        if (!myHero.IsAlive()) {
            return;
        }
        let enemyHero = Input.GetNearestHeroToCursor(Enum.TeamType.TEAM_ENEMY);
        if (myHero && enemyHero && !myHero.IsEntityInRange(enemyHero, 1200)) {
            return;
        }
        if (myHero.GetUnitName() === 'npc_dota_hero_invoker') {
            info.delay = 0;
        }
        if (myHero.GetUnitName() === 'npc_dota_hero_obsidian_destroyer') {
            info.delay = info.delay - 0.25;
        }
        Items.msg_queue.unshift(info);
    }
    Items.DodgeUpdate = DodgeUpdate;
    function DodgeDefend(myHero, info) {
        if (!myHero) {
            return;
        }
        let myMana = myHero.GetMana();
        let eule = myHero.GetItem('item_cyclone', true);
        if (eule && eule.IsCastable(myMana) && !eule.GetCooldown() && Menu.GetMultiSelectValue(Items.choodeDodgerItems, 0)) {
            eule.CastTarget(myHero);
        }
        let pipip = myHero.GetItem('item_pipe', true);
        if (pipip && pipip.IsCastable(myMana) && !pipip.GetCooldown() && Menu.GetMultiSelectValue(Items.choodeDodgerItems, 1)) {
            pipip.CastNoTarget();
        }
        let hoojdooj = myHero.GetItem('item_hood_of_defiance', true);
        if (hoojdooj && hoojdooj.IsCastable(myMana) && !hoojdooj.GetCooldown() && Menu.GetMultiSelectValue(Items.choodeDodgerItems, 2)) {
            hoojdooj.CastNoTarget();
        }
        let lotusMotus = myHero.GetItem('item_lotus_orb', true);
        if (lotusMotus && lotusMotus.IsCastable(myMana) && !lotusMotus.GetCooldown() && Menu.GetMultiSelectValue(Items.choodeDodgerItems, 3)) {
            lotusMotus.CastTarget();
        }
        let bladedodge = myHero.GetItem('item_blade_mail', true);
        if (bladedodge && bladedodge.IsCastable(myMana) && !bladedodge.GetCooldown() && Menu.GetMultiSelectValue(Items.choodeDodgerItems, 4)) {
            bladedodge.CastNoTarget();
        }
        let bkbDodge = myHero.GetItem('item_black_king_bar', true);
        if (bkbDodge && bkbDodge.IsCastable(myMana) && !bkbDodge.GetCooldown() && Menu.GetMultiSelectValue(Items.choodeDodgerItems, 5)) {
            bkbDodge.CastNoTarget();
        }
        if (myHero.IsSilenced()) {
            return;
        }
        if (myHero.GetUnitName() === 'npc_dota_hero_antimage' && Menu.GetMultiSelectValue(Items.choodeDodgerSkills, 0)) {
            let ant = myHero.GetAbilityByIndex(2);
            if (ant && ant.IsCastable(myMana)) {
                ant.CastNoTarget();
            }
        }
        if (myHero.GetUnitName() === 'npc_dota_hero_life_stealer' && Menu.GetMultiSelectValue(Items.choodeDodgerSkills, 1)) {
            let ant = myHero.GetAbilityByIndex(0);
            if (ant && ant.IsCastable(myMana)) {
                ant.CastNoTarget();
            }
        }
        if (myHero.GetUnitName() === 'npc_dota_hero_juggernaut' && Menu.GetMultiSelectValue(Items.choodeDodgerSkills, 2)) {
            let ant = myHero.GetAbilityByIndex(0);
            if (ant && ant.IsCastable(myMana)) {
                ant.CastNoTarget();
            }
        }
        if (myHero.GetUnitName() === 'npc_dota_hero_puck' && Menu.GetMultiSelectValue(Items.choodeDodgerSkills, 3)) {
            let ant = myHero.GetAbilityByIndex(2);
            if (ant && ant.IsCastable(myMana)) {
                ant.CastNoTarget();
            }
        }
        if (myHero.GetUnitName() === 'npc_dota_hero_omniknight' && Menu.GetMultiSelectValue(Items.choodeDodgerSkills, 4)) {
            let ant = myHero.GetAbilityByIndex(1);
            if (ant && ant.IsCastable(myMana)) {
                ant.CastTarget(myHero);
            }
        }
        if (myHero.GetUnitName() === 'npc_dota_hero_nyx_assassin' && Menu.GetMultiSelectValue(Items.choodeDodgerSkills, 5)) {
            let ant = myHero.GetAbilityByIndex(2);
            if (ant && ant.IsCastable(myMana)) {
                ant.CastTarget(myHero);
            }
        }
    }
    Items.DodgeDefend = DodgeDefend;
    function TinkerChecker(myHero, myMana, SecondSkill, ThirdSkill, FirstSkill) {
        if (!myHero) {
            return;
        }
        if (myHero.IsStunned()) {
            return false;
        }
        if (myHero.IsSilenced()) {
            return false;
        }
        let neadToRearm = true;
        if (Menu.IsKeyDown(Items.tinkerDefendKey) && Menu.GetValue(Items.tinkerDefendMode) === true) {
            if (Menu.GetMultiSelectValue(Items.tinkerDefendSpells, 2) && SecondSkill && SecondSkill.IsCastable(myMana)) {
                neadToRearm = false;
            }
            if (Menu.GetMultiSelectValue(Items.tinkerDefendSpells, 3) && ThirdSkill && ThirdSkill.IsCastable(myMana)) {
                neadToRearm = false;
            }
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.TinkeroptionTinkerFailSwitch) === true) {
            let itemsEterial = myHero.GetItem('item_ethereal_blade', true);
            let itemsVeil = myHero.GetItem('item_veil_of_discord', true);
            let itemsHex = myHero.GetItem('item_sheepstick', true);
            let itemsNufflier = myHero.GetItem('item_nullifier', true);
            let itemsShiva = myHero.GetItem('item_shivas_guard', true);
            let itemsAtos = myHero.GetItem('item_rod_of_atos', true);
            let itemsDagon = myHero.GetItem(`item_dagon`, true);
            for (let i = 2; i <= 5 && !itemsDagon; i++) {
                itemsDagon = myHero.GetItem(`item_dagon_${i}`, true);
            }
            let itemsLotus = myHero.GetItem('item_lotus_orb', true);
            let itemsBkb = myHero.GetItem('item_black_king_bar', true);
            if (Menu.GetMultiSelectValue(Items.tinkerItems, 9) && itemsLotus && itemsLotus.IsCastable(myMana) && myMana >= itemsLotus.GetManaCost()) {
                neadToRearm = false;
            }
            if (Menu.GetMultiSelectValue(Items.tinkerItems, 0) && itemsBkb && itemsBkb.IsCastable(myMana) && myMana >= itemsBkb.GetManaCost()) {
                neadToRearm = false;
            }
            if (Menu.GetMultiSelectValue(Items.tinkerItems, 2) && itemsHex && itemsHex.IsCastable(myMana) && myMana >= itemsHex.GetManaCost()) {
                neadToRearm = false;
            }
            if (Menu.GetMultiSelectValue(Items.tinkerItems, 3) && itemsEterial && itemsEterial.IsCastable(myMana) && myMana >= itemsEterial.GetManaCost()) {
                neadToRearm = false;
            }
            if (Menu.GetMultiSelectValue(Items.tinkerItems, 4) && itemsVeil && itemsVeil.IsCastable(myMana) && myMana >= itemsVeil.GetManaCost()) {
                neadToRearm = false;
            }
            if (Menu.GetMultiSelectValue(Items.tinkerItems, 5) && itemsShiva && itemsShiva.IsCastable(myMana) && myMana >= itemsShiva.GetManaCost()) {
                neadToRearm = false;
            }
            if (Menu.GetMultiSelectValue(Items.tinkerItems, 6) && itemsNufflier && itemsNufflier.IsCastable(myMana) && myMana >= itemsNufflier.GetManaCost()) {
                neadToRearm = false;
            }
            if (Menu.GetMultiSelectValue(Items.tinkerItems, 7) && itemsDagon && itemsDagon.IsCastable(myMana) && myMana >= itemsDagon.GetManaCost()) {
                neadToRearm = false;
            }
            if (Menu.GetMultiSelectValue(Items.tinkerItems, 8) && itemsAtos && itemsAtos.IsCastable(myMana) && myMana >= itemsAtos.GetManaCost()) {
                neadToRearm = false;
            }
            //Skills
            if (Menu.GetMultiSelectValue(Items.tinkerfirstSkill, 0) && FirstSkill && FirstSkill.IsCastable(myMana) && myMana >= FirstSkill.GetManaCost()) {
                neadToRearm = false;
            }
            if (Menu.GetMultiSelectValue(Items.tinkerfirstSkill, 1) && SecondSkill && SecondSkill.IsCastable(myMana) && myMana >= SecondSkill.GetManaCost()) {
                neadToRearm = false;
            }
            if (Menu.GetMultiSelectValue(Items.tinkerfirstSkill, 2) && ThirdSkill && ThirdSkill.IsCastable(myMana) && myMana >= ThirdSkill.GetManaCost()) {
                neadToRearm = false;
            }
        }
        return neadToRearm;
    }
    Items.TinkerChecker = TinkerChecker;
    function AmIFacingPos(myHero, pos, allowedDeviation) {
        if (!myHero) {
            return false;
        }
        let myRotation = myHero.GetRotation().GetForward().Normalized();
        let myPos = myHero.GetAbsOrigin();
        let baseVec = pos.sub(myPos).Normalized();
        let tempProcessing = baseVec.Dot2D(myRotation) / (baseVec.Length2D() * myRotation.Length2D());
        if (tempProcessing > 1) {
            tempProcessing = 1;
        }
        let checkAngleRad = Math.acos(tempProcessing);
        let checkAngle = (180 / Math.PI) * checkAngleRad;
        if (checkAngle <= allowedDeviation) {
            console.log(true);
            return true;
        }
        console.log(false);
        return false;
    }
    Items.AmIFacingPos = AmIFacingPos;
    function OnChatEvent(chatEvent) {
        let myHero = EntitySystem.GetLocalHero();
        if (!myHero) {
            return;
        }
        if (!myHero.IsAlive()) {
            return;
        }
        if (chatEvent.type == 0 && chatEvent.players[2] == myHero.GetPlayerID()) {
            Items.FKITtick = GameRules.GetGameTime() + 0.5;
        }
    }
    Items.OnChatEvent = OnChatEvent;
    function GetPredictedPosition(npc, delay) {
        let position = npc.GetAbsOrigin();
        if (Menu.GetValue(Items.predictCastPos) === 0) {
            return position;
        }
        if (Menu.GetValue(Items.predictCastPos) === 1) {
            if (!npc.IsRunning()) {
                return position;
            }
            else if (npc.IsRunning()) {
                let dir = npc.GetRotation().GetForward().Normalized();
                let speed = npc.GetMoveSpeed();
                return position.add(dir.Scaled(speed * delay));
            }
        }
    }
    Items.GetPredictedPosition = GetPredictedPosition;
    function castPrediction(myHero, enemy, adjustmentVariable) {
        if (!myHero) {
            return;
        }
        if (!enemy) {
            return;
        }
        let enemyRotation = enemy.GetRotation();
        let enemyOrigin = enemy.GetAbsOrigin();
        if (!enemy.IsRunning()) {
            return enemyOrigin;
        }
        else if (enemy.IsRunning()) {
            let dir = enemy.GetRotation().GetForward().Normalized();
            let speed = enemy.GetMoveSpeed();
            return enemyOrigin.add(dir.Scaled(speed * adjustmentVariable));
        }
    }
    Items.castPrediction = castPrediction;
    function TimeToFacePosition(myHero, pos) {
        if (!myHero) {
            return 0;
        }
        if (!pos) {
            return 0;
        }
        let myRotation = myHero.GetRotation().GetForward().Normalized();
        let myPos = myHero.GetAbsOrigin();
        let baseVec = pos.sub(myPos).Normalized();
        let tempProcessing = Math.min(baseVec.Dot2D(myRotation) / (baseVec.Length2D() * myRotation.Length2D()), 1);
        let checkAngleRad = Math.acos(tempProcessing);
        let checkAngle = (180 / Math.PI) * checkAngleRad;
        let myTurnRate = myHero.GetTurnRate();
        let turnTime = Items.utilityRoundNumber(((0.033 * Math.PI / myTurnRate) / 180) * checkAngle, 3);
        return turnTime;
    }
    Items.TimeToFacePosition = TimeToFacePosition;
    function utilityRoundNumber(number, digits) {
        if (!number) {
            return;
        }
        let mult = 10 ^ (digits || 0);
        return Math.floor(number * mult + 0.5) / mult;
    }
    Items.utilityRoundNumber = utilityRoundNumber;
    function ItemUsage(myHero, enemyHero, myPos, myMana) {
        if (Menu.IsKeyDown(Items.GDMComboKey) || myHero.GetUnitName() === 'npc_dota_hero_pudge' && Items.PudgeHookHit === true) {
            if (Engine.OnceAt(0.25)) {
                // Если противник мёртв ИЛИ если он не герой ИЛИ если он иллюзия, не выполняем код
                if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                    return;
                }
                //Items
                let ItemsBladeMail = myHero.GetItem('item_blade_mail', true);
                let ItemsBkb = myHero.GetItem('item_black_king_bar', true);
                let itemsMjolnir = myHero.GetItem('item_mjollnir', true);
                let itemsPipe = myHero.GetItem('item_pipe', true);
                let itemsCrimson = myHero.GetItem('item_crimson_guard', true);
                let itemsLotus = myHero.GetItem('item_lotus_orb', true);
                let itemsShiva = myHero.GetItem('item_shivas_guard', true);
                //Blink
                let enemyPos = enemyHero.GetAbsOrigin();
                let ItemsBlink = myHero.GetItem('item_blink', true);
                let menuVal = parseInt(Menu.GetValue(optionRangeToBlink).toString());
                let predictedPos = (myPos.sub(enemyPos).Normalized().Scaled(menuVal));
                let blinkPos = enemyPos.add(predictedPos);
                let minDistanceToBlink = parseInt(Menu.GetValue(optionBlinkMin).toString());
                //Magical
                let itemsEterial = myHero.GetItem('item_ethereal_blade', true);
                let itemsAtos = myHero.GetItem('item_rod_of_atos', true);
                let itemsVeil = myHero.GetItem('item_veil_of_discord', true);
                let itemsHex = myHero.GetItem('item_sheepstick', true);
                let itemsNufflier = myHero.GetItem('item_nullifier', true);
                let itemsDagon = myHero.GetItem(`item_dagon`, true);
                for (let i = 2; i <= 5 && !itemsDagon; i++) {
                    itemsDagon = myHero.GetItem(`item_dagon_${i}`, true);
                }
                let itemsBloodhorn = myHero.GetItem(`item_bloodthorn`, true);
                let itemsOrchid = myHero.GetItem(`item_orchid`, true);
                //Defend Items
                let itemsGlimmer = myHero.GetItem('item_glimmer_cape', true);
                let itemsGhost = myHero.GetItem('item_ghost', true);
                let itemsHurikan = myHero.GetItem('item_hurricane_pike', true);
                //Other Items
                let itemsDiffusal = myHero.GetItem(`item_diffusal_blade`, true);
                let itemsAbbysal = myHero.GetItem(`item_abyssal_blade`, true);
                let itemsSoulRing = myHero.GetItem(`item_soul_ring`, true);
                let itemsNecronomicon = myHero.GetItem(`item_necronomicon`, true);
                let itemsNecronomicon2 = myHero.GetItem(`item_necronomicon_2`, true);
                let itemsNecronomicon3 = myHero.GetItem(`item_necronomicon_3`, true);
                let itemsMedalion = myHero.GetItem('item_medallion_of_courage', true);
                let itemsSolarCrest = myHero.GetItem('item_solar_crest', true);
                let itemsManta = myHero.GetItem(`item_manta`, true);
                let itemsHood = myHero.GetItem(`item_hood_of_defiance`, true);
                let itemsHavensHalebard = myHero.GetItem(`item_heavens_halberd`, true);
                //Use Items
                //Blink
                if (Menu.GetMultiSelectValue(Items.itemBlink, 0) && ItemsBlink && !ItemsBlink.GetCooldown() && !myHero.IsEntityInRange(enemyHero, minDistanceToBlink)) {
                    if (enemyHero.IsEntityInRange(myHero, 1200)) {
                        ItemsBlink.CastPosition(blinkPos);
                        return;
                    }
                }
                if (Menu.GetMultiSelectValue(Items.itemMedal, 2) && itemsSoulRing && !itemsSoulRing.GetCooldown() && myMana >= itemsSoulRing.GetManaCost()) {
                    itemsSoulRing.CastNoTarget();
                    return;
                }
                //Linken Destroy
                if (enemyHero.IsLinkensProtected()) {
                    if (Menu.GetMultiSelectValue(Items.LinkenAtos, 4) && itemsNufflier && !itemsNufflier.GetCooldown() && myMana >= itemsNufflier.GetManaCost()) {
                        itemsNufflier.CastTarget(enemyHero);
                        return;
                    }
                    if (Menu.GetMultiSelectValue(Items.LinkenAtos, 1) && itemsHex && !itemsHex.GetCooldown() && myMana >= itemsHex.GetManaCost()) {
                        itemsHex.CastTarget(enemyHero);
                        return;
                    }
                    if (Menu.GetMultiSelectValue(Items.LinkenAtos, 0) && itemsAtos && !itemsAtos.GetCooldown() && myMana >= itemsAtos.GetManaCost()) {
                        itemsAtos.CastTarget(enemyHero);
                        return;
                    }
                    if (Menu.GetMultiSelectValue(Items.LinkenAtos, 2) && itemsBloodhorn && !itemsBloodhorn.GetCooldown() && myMana >= itemsBloodhorn.GetManaCost()) {
                        itemsBloodhorn.CastTarget(enemyHero);
                        return;
                    }
                    if (Menu.GetMultiSelectValue(Items.LinkenAtos, 3) && itemsOrchid && !itemsOrchid.GetCooldown() && myMana >= itemsOrchid.GetManaCost()) {
                        itemsOrchid.CastTarget(enemyHero);
                        return;
                    }
                }
                //Necro controll
                //Defend Items
                if (Menu.GetMultiSelectValue(Items.itemBladeMail, 0) === true && ItemsBladeMail && !ItemsBladeMail.GetCooldown() && myMana >= 25 && enemyHero.IsEntityInRange(myHero, 600)) {
                    ItemsBladeMail.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.itemBladeMail, 1) === true && itemsHood && !itemsHood.GetCooldown() && myMana >= 75 && enemyHero.IsEntityInRange(myHero, 600)) {
                    itemsHood.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.itemBladeMail, 2) === true && ItemsBkb && !ItemsBkb.GetCooldown() && enemyHero.IsEntityInRange(myHero, 700)) {
                    ItemsBkb.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.itemBladeMail, 3) === true && itemsMjolnir && !itemsMjolnir.GetCooldown() && myMana >= 50 && enemyHero.IsEntityInRange(myHero, 1200)) {
                    itemsMjolnir.CastTarget(myHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.itemBladeMail, 4) === true && itemsPipe && !itemsPipe.GetCooldown() && myMana >= 100 && enemyHero.IsEntityInRange(myHero, 1200)) {
                    itemsPipe.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.itemBladeMail, 5) === true && itemsLotus && !itemsLotus.GetCooldown() && myMana >= 75 && enemyHero.IsEntityInRange(myHero, 1200)) {
                    itemsLotus.CastTarget(myHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.itemBladeMail, 6) === true && itemsShiva && !itemsShiva.GetCooldown() && myMana >= 100 && enemyHero.IsEntityInRange(myHero, 600)) {
                    itemsShiva.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.itemBladeMail, 7) === true && itemsCrimson && !itemsCrimson.GetCooldown() && enemyHero.IsEntityInRange(myHero, 1200)) {
                    itemsCrimson.CastNoTarget();
                    return;
                }
                //Escape items
                if (Menu.GetMultiSelectValue(Items.itemGhost, 1) === true && itemsGlimmer && !itemsGlimmer.GetCooldown() && myMana >= itemsGlimmer.GetManaCost()) {
                    itemsGlimmer.CastTarget(myHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.itemGhost, 0) === true && itemsGhost && !itemsGhost.GetCooldown() && myMana >= itemsGhost.GetManaCost()) {
                    itemsGhost.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.itemEterial, 0) === true && itemsHurikan && !itemsHurikan.GetCooldown() && enemyHero.IsEntityInRange(myHero, 400)) {
                    itemsHurikan.CastTarget(enemyHero);
                    return;
                }
                //Magical Items
                if (Menu.GetMultiSelectValue(Items.itemEterial, 4) === true && itemsNufflier && !itemsNufflier.GetCooldown() && myMana >= itemsNufflier.GetManaCost() && enemyHero.IsEntityInRange(myHero, 600)) {
                    itemsNufflier.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.itemEterial, 3) === true && itemsHex && !itemsHex.GetCooldown() && myMana >= itemsHex.GetManaCost() && enemyHero.IsEntityInRange(myHero, 800)) {
                    itemsHex.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.itemEterial, 0) === true && itemsEterial && !itemsEterial.GetCooldown() && myMana >= itemsEterial.GetManaCost() && enemyHero.IsEntityInRange(myHero, 800)) {
                    itemsEterial.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.itemEterial, 5) === true && itemsDagon && !itemsDagon.GetCooldown() && myMana >= itemsDagon.GetManaCost() && enemyHero.IsEntityInRange(myHero, 600)) {
                    itemsDagon.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.itemEterial, 2) === true && itemsAtos && !itemsAtos.GetCooldown() && myMana >= itemsAtos.GetManaCost() && enemyHero.IsEntityInRange(myHero, 1100)) {
                    itemsAtos.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.itemEterial, 1) === true && itemsVeil && !itemsVeil.GetCooldown() && myMana >= itemsVeil.GetManaCost() && enemyHero.IsEntityInRange(myHero, 1000)) {
                    itemsVeil.CastPosition(enemyPos);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.itemEterial, 7) === true && itemsOrchid && !itemsOrchid.GetCooldown() && myMana >= itemsOrchid.GetManaCost() && enemyHero.IsEntityInRange(myHero, 900)) {
                    itemsOrchid.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.itemEterial, 6) === true && itemsBloodhorn && !itemsBloodhorn.GetCooldown() && myMana >= itemsBloodhorn.GetManaCost() && enemyHero.IsEntityInRange(myHero, 600)) {
                    itemsBloodhorn.CastTarget(enemyHero);
                    return;
                }
                //Other Items
                if (Menu.GetMultiSelectValue(Items.itemMedal, 0) && itemsMedalion && !itemsMedalion.GetCooldown() && myMana >= itemsMedalion.GetManaCost() && enemyHero.IsEntityInRange(myHero, 1000)) {
                    itemsMedalion.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.itemMedal, 1) && itemsSolarCrest && !itemsSolarCrest.GetCooldown() && myMana >= itemsSolarCrest.GetManaCost() && enemyHero.IsEntityInRange(myHero, 1000)) {
                    itemsSolarCrest.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.itemMedal, 7) && itemsAbbysal && !itemsAbbysal.GetCooldown() && myMana >= itemsAbbysal.GetManaCost() && enemyHero.IsEntityInRange(myHero, 300)) {
                    itemsAbbysal.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.itemMedal, 4) && itemsDiffusal && !itemsDiffusal.GetCooldown() && myMana >= itemsDiffusal.GetManaCost() && enemyHero.IsEntityInRange(myHero, 600)) {
                    itemsDiffusal.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.itemMedal, 3) && itemsNecronomicon && !itemsNecronomicon.GetCooldown() && myHero.IsEntityInRange(myHero, 700)) {
                    itemsNecronomicon.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.itemMedal, 3) && itemsNecronomicon2 && !itemsNecronomicon2.GetCooldown() && myHero.IsEntityInRange(myHero, 700)) {
                    itemsNecronomicon2.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.itemMedal, 3) && itemsNecronomicon3 && !itemsNecronomicon3.GetCooldown() && myHero.IsEntityInRange(myHero, 700)) {
                    itemsNecronomicon3.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.itemMedal, 5) && itemsManta && !itemsManta.GetCooldown() && enemyHero.IsEntityInRange(myHero, 300)) {
                    itemsManta.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.itemMedal, 6) && itemsHavensHalebard && !itemsHavensHalebard.GetCooldown() && myMana >= itemsHavensHalebard.GetManaCost() && enemyHero.IsEntityInRange(myHero, 600)) {
                    itemsHavensHalebard.CastTarget(enemyHero);
                    return;
                }
            }
        }
    }
    Items.ItemUsage = ItemUsage;
    //Agillity
    function Antimage(myHero, enemyHero, myPos, myMana, enemyPos) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_antimage') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        let UltimateSkill = myHero.GetAbility('antimage_mana_void');
        if (Menu.GetMultiSelectValue(Items.antimageultimateSkill, 0) && enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 6000)) {
            let enemyHP = enemyHero.GetHealth();
            let enemyMaxMp = enemyHero.GetMaxMana();
            let enemyMana = enemyHero.GetMana();
            let damageLvl = UltimateSkill.GetLevelSpecialValueFor('mana_void_damage_per_mana');
            let noMana = enemyMaxMp - enemyMana;
            let ultiDamage = (noMana * damageLvl) * enemyHero.GetMagicalArmorDamageMultiplier();
            if (enemyHP <= ultiDamage) {
                UltimateSkill.CastTarget(enemyHero);
            }
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.antimageisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            //Skills
            let SecondSkill = myHero.GetAbility('antimage_blink');
            let ThirdSkill = myHero.GetAbility('antimage_counterspell');
            Items.ItemUsage(myHero, enemyHero, myPos, myMana);
            if (Engine.OnceAt(0.25)) {
                if (Menu.GetMultiSelectValue(Items.antimagesecondSkill, 0) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 950) && !enemyHero.IsEntityInRange(myHero, 500)) {
                    SecondSkill.CastPosition(enemyPos);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.antimagesecondSkill, 1) && enemyHero && ThirdSkill && !ThirdSkill.GetCooldown() && myMana >= ThirdSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 500)) {
                    ThirdSkill.CastNoTarget();
                    return;
                }
            }
            return;
        }
    }
    Items.Antimage = Antimage;
    //Bloodseeker
    function Bloodseeker(myHero, enemyHero, myPos, myMana, enemyPos) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_bloodseeker') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (Menu.GetValue(Items.bloodseekerautofirstM) === true) {
            let FirstSill = myHero.GetAbility('bloodseeker_bloodrage');
            if (myHero && myHero.IsAttacking() && !myHero.HasModifier('modifier_bloodseeker_bloodrage') && !FirstSill.GetCooldown()) {
                FirstSill.CastTarget(myHero);
            }
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.bloodseekerisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            //Skills
            let FirstSkill = myHero.GetAbility('bloodseeker_bloodrage');
            let SecondSkill = myHero.GetAbility('bloodseeker_blood_bath');
            let UltimateSkill = myHero.GetAbility('bloodseeker_rupture');
            let itemsEul = myHero.GetItem('item_cyclone', true);
            if (Menu.GetValue(Items.bloodseekerautofirstE) === true) {
                let FirstSill = myHero.GetAbility('bloodseeker_bloodrage');
                if (enemyHero && !enemyHero.HasModifier('modifier_bloodseeker_bloodrage') && !FirstSill.GetCooldown()) {
                    FirstSill.CastTarget(enemyHero);
                }
            }
            if (Menu.GetValue(Items.bloodseekerEulCombo) === true && itemsEul && SecondSkill && !SecondSkill.GetCooldown()) {
                if (itemsEul && !itemsEul.GetCooldown() && myMana >= itemsEul.GetManaCost() && enemyHero.IsEntityInRange(myHero, 550)) {
                    itemsEul.CastTarget(enemyHero);
                    return;
                }
                if (SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && itemsEul && itemsEul.GetCooldown() <= 22.6) {
                    SecondSkill.CastPosition(enemyPos);
                    return;
                }
            }
            Items.ItemUsage(myHero, enemyHero, myPos, myMana);
            if (Engine.OnceAt(0.25)) {
                if (Menu.GetMultiSelectValue(Items.bloodseekerfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost()) {
                    FirstSkill.CastTarget(myHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.bloodseekerfirstSkill, 1) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost()) {
                    let distBetween = (myPos.sub(enemyPos).Length2D());
                    //let neadtoTest = FirstSkill.GetLevelSpecialValueFor('projectile_speed');
                    let timeToHit = distBetween / 1500;
                    let TimeToHit = 2.5 + timeToHit;
                    SecondSkill.CastPosition(GetPredictedPosition(enemyHero, TimeToHit));
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.bloodseekerfirstSkill, 2) && enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost()) {
                    UltimateSkill.CastTarget(enemyHero);
                    return;
                }
            }
            return;
        }
    }
    Items.Bloodseeker = Bloodseeker;
    function Bountyhunter(myHero, enemyHero, myPos, myMana) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_bounty_hunter') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.GetValue(Items.bountyhunterautoultimateSkill) === true) {
            let UltimateSkill = myHero.GetAbility('bounty_hunter_track');
            let rangeUltimate = UltimateSkill.GetCastRange();
            if (enemyHero && UltimateSkill && UltimateSkill.GetLevel() >= 1 && !UltimateSkill.GetCooldown() && !enemyHero.HasModifier('modifier_bounty_hunter_track') && myMana >= UltimateSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, rangeUltimate)) {
                UltimateSkill.CastTarget(enemyHero);
            }
        }
        if (Menu.GetValue(Items.bountyhunterthirdskill) === true) {
            let FirstSave = myHero.GetAbility('bounty_hunter_wind_walk');
            let myCurHp = myHero.GetHealth();
            let myHP = myHero.GetMaxHealth();
            let hpFromMenu = parseInt(Menu.GetValue(bountyHunterHpPrs).toString());
            let persentHP = hpFromMenu / 100 * myHP;
            if (myCurHp <= persentHP && FirstSave) {
                if (FirstSave && !FirstSave.GetCooldown() && myMana >= FirstSave.GetManaCost()) {
                    FirstSave.CastNoTarget();
                    return;
                }
            }
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.bountyhunterisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('bounty_hunter_shuriken_toss');
                //let ThirdSkill = myHero.GetAbility('');
                let UltimateSkill = myHero.GetAbility('bounty_hunter_track');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.bountyhunterfirstSkill, 1) && enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 1000) && !enemyHero.HasModifier('modifier_bounty_hunter_track')) {
                    UltimateSkill.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.bountyhunterfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 800)) {
                    FirstSkill.CastTarget(enemyHero);
                    return;
                }
            }
            return;
        }
    }
    Items.Bountyhunter = Bountyhunter;
    function Drowranger(myHero, enemyHero, myPos, myMana, enemyPos) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_drow_ranger') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        let ThirdSkill = myHero.GetAbility('drow_ranger_trueshot');
        //Auto Haras
        if (Menu.GetValue(Items.drowrangersecondSkill) === true && Menu.IsKeyDown(Items.frostArrowKey)) {
            let SecondSkill = myHero.GetAbility('drow_ranger_frost_arrows');
            if (SecondSkill && myMana >= SecondSkill.GetManaCost()) {
                SecondSkill.CastTarget(enemyHero);
                return;
            }
        }
        if (Menu.GetValue(Items.drowrangerthirdskill) === true && ThirdSkill) {
            if (ThirdSkill && ThirdSkill.GetLevel() >= 1 && !ThirdSkill.GetCooldown() && myMana >= ThirdSkill.GetManaCost()) {
                ThirdSkill.CastNoTarget();
                return;
            }
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.drowrangerisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('drow_ranger_frost_arrows');
                let SecondSkill = myHero.GetAbility('drow_ranger_wave_of_silence');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.drowrangerfirstSkill, 1) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost()) {
                    let distBetween = (myPos.sub(enemyPos).Length2D());
                    let timeToHit = distBetween / 2000;
                    let TimeToHit = 0.25 + timeToHit;
                    SecondSkill.CastPosition(GetPredictedPosition(enemyHero, TimeToHit));
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.drowrangerfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost()) {
                    FirstSkill.CastTarget(enemyHero);
                    return;
                }
            }
            return;
        }
    }
    Items.Drowranger = Drowranger;
    function Void(myHero, enemyHero, myPos, myMana, enemyPos) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_faceless_void') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        //Auto Save
        if (Menu.GetValue(Items.autoTimeWalk) === true) {
            let SaveBlink = myHero.GetAbility('faceless_void_time_walk');
            let myCurHp = myHero.GetHealth();
            let myHP = myHero.GetMaxHealth();
            let hpFromMenu = parseInt(Menu.GetValue(optionVoidHpSave).toString());
            let persentHP = hpFromMenu / 100 * myHP;
            if (myCurHp <= persentHP) {
                if (SaveBlink && !SaveBlink.GetCooldown() && myMana >= SaveBlink.GetManaCost()) {
                    SaveBlink.CastPosition(myPos);
                    return;
                }
            }
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.voidisEnabledOption) === true) {
            if (Engine.OnceAt(0.25)) {
                if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                    return;
                }
                //Skills
                let FirstSkill = myHero.GetAbility('faceless_void_time_walk');
                let SecondSkill = myHero.GetAbility('faceless_void_time_dilation');
                let UltimateSkill = myHero.GetAbility('faceless_void_chronosphere');
                //Use skills
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.voidfirstSkill, 0) && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && enemyHero.IsEntityInRange(myHero, 675)) {
                    let distBetween = (myPos.sub(enemyPos).Length2D());
                    let spelldistance = FirstSkill.GetLevelSpecialValueFor('range');
                    let totalDistance = myHero.GetCastRangeBonus();
                    let mell = spelldistance + totalDistance;
                    let timeToHit = distBetween / spelldistance;
                    let TimeToHit = 0.4 + timeToHit;
                    FirstSkill.CastPosition(GetPredictedPosition(enemyHero, TimeToHit));
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.voidfirstSkill, 1) && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && enemyHero.IsEntityInRange(myHero, 600)) {
                    SecondSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.voidfirstSkill, 2) && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost() && enemyHero.IsEntityInRange(myHero, 500)) {
                    let distBetween = (myPos.sub(enemyPos).Length2D());
                    let timeToHit = distBetween / 600;
                    let TimeToHit = 0.4 + timeToHit;
                    UltimateSkill.CastPosition(GetPredictedPosition(enemyHero, TimeToHit));
                    return;
                }
            }
            return;
        }
    }
    Items.Void = Void;
    function Gyrocopter(myHero, enemyHero, myPos, myMana, enemyPos) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_gyrocopter') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.gyrocopterisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('gyrocopter_rocket_barrage');
                let SecondSkill = myHero.GetAbility('gyrocopter_homing_missile');
                let ThirdSkill = myHero.GetAbility('gyrocopter_flak_cannon');
                let UltimateSkill = myHero.GetAbility('gyrocopter_call_down');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.gyrocopterfirstSkill, 1) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 800)) {
                    SecondSkill.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.gyrocopterfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 380)) {
                    FirstSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.gyrocopterfirstSkill, 2) && enemyHero && ThirdSkill && !ThirdSkill.GetCooldown() && myMana >= ThirdSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 1000)) {
                    ThirdSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.gyrocopterfirstSkill, 3) && enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost()) {
                    let distBetween = (myPos.sub(enemyPos).Length2D());
                    let neadtoTest = FirstSkill.GetLevelSpecialValueFor('projectile_speed');
                    let timeToHit = distBetween / 1000;
                    let TimeToHit = 0.3 + timeToHit;
                    UltimateSkill.CastPosition(GetPredictedPosition(enemyHero, TimeToHit));
                    return;
                }
            }
            return;
        }
    }
    Items.Gyrocopter = Gyrocopter;
    function Juggernaut(myHero, enemyHero, myPos, myMana, enemyPos) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_juggernaut') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.juggernautisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('juggernaut_blade_fury');
                let SecondSkill = myHero.GetAbility('juggernaut_healing_ward');
                let UltimateSkill = myHero.GetAbility('juggernaut_omni_slash');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.juggernautfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 250)) {
                    FirstSkill.CastNoTarget();
                    return;
                }
                if (myHero.HasModifier('modifier_juggernaut_blade_fury') && enemyHero && !myHero.IsEntityInRange(enemyHero, 250)) {
                    myHero.MoveTo(enemyPos, true, false);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.juggernautfirstSkill, 1) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && !myHero.IsEntityInRange(enemyHero, 650)) {
                    SecondSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.juggernautfirstSkill, 2) && enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 350)) {
                    UltimateSkill.CastTarget(enemyHero);
                    return;
                }
            }
            return;
        }
    }
    Items.Juggernaut = Juggernaut;
    function Luna(myHero, enemyHero, myPos, myMana) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_luna') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.lunaisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('luna_lucent_beam');
                let UltimateSkill = myHero.GetAbility('luna_eclipse');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.lunafirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 800)) {
                    FirstSkill.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.lunafirstSkill, 1) && enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 600)) {
                    if (!myHero.HasAghanimScepter()) {
                        UltimateSkill.CastNoTarget();
                    }
                    if (myHero.HasAghanimScepter()) {
                        UltimateSkill.CastPosition(myPos);
                    }
                    return;
                }
            }
            return;
        }
    }
    Items.Luna = Luna;
    function Medusa(myHero, enemyHero, myPos, myMana) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_medusa') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.medusaisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let SecondSkill = myHero.GetAbility('medusa_mystic_snake');
                let ThirdSkill = myHero.GetAbility('medusa_mana_shield');
                let UltimateSkill = myHero.GetAbility('medusa_stone_gaze');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.medusasecondSkill, 2) && enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 900)) {
                    UltimateSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.medusasecondSkill, 1) && enemyHero && ThirdSkill && !ThirdSkill.GetCooldown() && myMana >= ThirdSkill.GetManaCost() && !myHero.HasModifier('modifier_medusa_mana_shield')) {
                    ThirdSkill.Toggle();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.medusasecondSkill, 0) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 650)) {
                    SecondSkill.CastTarget(enemyHero);
                    return;
                }
            }
            return;
        }
    }
    Items.Medusa = Medusa;
    function Nagasiren(myHero, enemyHero, myPos, myMana) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_naga_siren') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.GetValue(Items.nagaMeteorCombo) === true) {
            let modifierSong = enemyHero.GetModifier('modifier_naga_siren_song_of_the_siren');
            let hammer = myHero.GetItem('item_meteor_hammer', true);
            let proba2 = myHero.GetAbility('naga_siren_song_of_the_siren');
            if (enemyHero.HasModifier('modifier_naga_siren_song_of_the_siren') && hammer) {
                let meteorusetimings = 300;
                let MeteorEnemy = enemyHero.GetAbsOrigin();
                //console.log(proba2.SecondsSinceLastUse());
                if (proba2.SecondsSinceLastUse() >= 4.60 && enemyHero.IsEntityInRange(myHero, 600)) {
                    hammer.CastPosition(MeteorEnemy);
                    return;
                }
            }
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.nagasirenisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('naga_siren_mirror_image');
                let SecondSkill = myHero.GetAbility('naga_siren_ensnare');
                //let UltimateSkill = myHero.GetAbility('');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.nagasirenfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 400)) {
                    FirstSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.nagasirenfirstSkill, 1) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 650)) {
                    SecondSkill.CastTarget(enemyHero);
                    return;
                }
            }
            return;
        }
    }
    Items.Nagasiren = Nagasiren;
    function Nyxassasin(myHero, enemyHero, myPos, myMana, enemyPos) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_nyx_assassin') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.GetValue(Items.nyxassasinAutoUltimate) === true) {
            let ThirdSkill = myHero.GetAbility('nyx_assassin_vendetta');
            let myCurHp = myHero.GetHealth();
            let myHP = myHero.GetMaxHealth();
            let hpFromMenu = parseInt(Menu.GetValue(nyxassasinHpForUlti).toString());
            let persentHP = hpFromMenu / 100 * myHP;
            // console.log('autoinviz 1');
            if (myCurHp <= persentHP) {
                //console.log('autoinviz 2');
                if (ThirdSkill && !ThirdSkill.GetCooldown() && myMana >= ThirdSkill.GetManaCost()) {
                    ThirdSkill.CastNoTarget();
                    return;
                }
            }
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.nyxassasinisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('nyx_assassin_impale');
                let SecondSkill = myHero.GetAbility('nyx_assassin_mana_burn');
                let ThirdSkill = myHero.GetAbility('nyx_assassin_spiked_carapace');
                //let UltimateSkill = myHero.GetAbility('nyx_assassin_vendetta');
                if (myHero.HasModifier('modifier_nyx_assassin_vendetta')) {
                    let localPlayer = EntitySystem.GetLocalPlayer();
                    localPlayer.AttackTarget(myHero, enemyHero);
                }
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.nyxassasinfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 650)) {
                    let distBetween = (myPos.sub(enemyPos).Length2D());
                    let neadtoTest = FirstSkill.GetLevelSpecialValueFor('projectile_speed');
                    let timeToHit = distBetween / 1600;
                    let TimeToHit = 0.4 + timeToHit;
                    FirstSkill.CastPosition(GetPredictedPosition(enemyHero, TimeToHit));
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.nyxassasinfirstSkill, 1) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 550)) {
                    SecondSkill.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.nyxassasinfirstSkill, 2) && enemyHero && ThirdSkill && !ThirdSkill.GetCooldown() && myMana >= ThirdSkill.GetManaCost() && !enemyHero.IsStunned() && myHero.IsEntityInRange(enemyHero, 500)) {
                    ThirdSkill.CastNoTarget();
                    return;
                }
            }
            return;
        }
    }
    Items.Nyxassasin = Nyxassasin;
    function Phantomlancer(myHero, enemyHero, myPos, myMana, enemyPos) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_phantom_lancer') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.phantomlancerisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('phantom_lancer_spirit_lance');
                let SecondSkill = myHero.GetAbility('phantom_lancer_doppelwalk');
                let FIrstSkillCastRange = FirstSkill.GetCastRange();
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.phantomlancerfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, FIrstSkillCastRange)) {
                    FirstSkill.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.phantomlancerfirstSkill, 1) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 600)) {
                    let distBetween = (myPos.sub(enemyPos).Length2D());
                    let neadtoTest = FirstSkill.GetLevelSpecialValueFor('projectile_speed');
                    let timeToHit = distBetween / 600;
                    let TimeToHit = 0.2 + timeToHit;
                    SecondSkill.CastPosition(GetPredictedPosition(enemyHero, TimeToHit));
                    return;
                }
            }
            return;
        }
    }
    Items.Phantomlancer = Phantomlancer;
    function Razor(myHero, enemyHero, myPos, myMana) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_razor') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.razorisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('razor_plasma_field');
                let SecondSkill = myHero.GetAbility('razor_static_link');
                let UltimateSkill = myHero.GetAbility('razor_eye_of_the_storm');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.razorfirstSkill, 2) && enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 450)) {
                    UltimateSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.razorfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 650)) {
                    FirstSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.razorfirstSkill, 1) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 500)) {
                    SecondSkill.CastTarget(enemyHero);
                    return;
                }
            }
            return;
        }
    }
    Items.Razor = Razor;
    function Slark(myHero, enemyHero, myPos, myMana, enemyPos) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_slark') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.GetValue(Items.slarkultimateSkill) === true && enemyHero) {
            let UltimateSkill = myHero.GetAbility('slark_shadow_dance');
            let myCurHp = myHero.GetHealth();
            let myHP = myHero.GetMaxHealth();
            let hpFromMenu = parseInt(Menu.GetValue(optionHpSlark).toString());
            let persentHP = hpFromMenu / 100 * myHP;
            if (myCurHp <= persentHP) {
                if (UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost()) {
                    UltimateSkill.CastNoTarget();
                    return;
                }
            }
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.slarkisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('slark_dark_pact');
                let SecondSkill = myHero.GetAbility('slark_pounce');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.slarkfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 350)) {
                    FirstSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.slarkfirstSkill, 1) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 500)) {
                    if (myHero.GetTimeToFace(enemyHero) >= 0.03) {
                        myHero.MoveTo(enemyPos);
                        return;
                    }
                    SecondSkill.CastNoTarget();
                    return;
                }
            }
            return;
        }
    }
    Items.Slark = Slark;
    function Sniper(myHero, enemyHero, myPos, myMana, enemyPos) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_sniper') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.GetValue(Items.sniperultimateSkill) === true && enemyHero && myHero.IsEntityInRange(enemyHero, 2500) && !Menu.IsKeyDown(Items.GDMComboKey)) {
            let UltimateSkill = myHero.GetAbility('sniper_assassinate');
            let CurrentUltiDamage = UltimateSkill.GetDamage() * enemyHero.GetMagicalArmorDamageMultiplier();
            let EnemyHeroHelthRegen = enemyHero.GetHealthRegen() * 2;
            let totallDamage = CurrentUltiDamage - EnemyHeroHelthRegen;
            if (enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost() && enemyHero.GetHealth() <= totallDamage) {
                UltimateSkill.CastTarget(enemyHero);
                return;
            }
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.sniperisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('sniper_shrapnel');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Engine.OnceAt(1)) {
                    if (Menu.GetMultiSelectValue(Items.sniperfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && !enemyHero.HasModifier('modifier_sniper_shrapnel_slow')) {
                        let distBetween = (myPos.sub(enemyPos).Length2D());
                        let neadtoTest = FirstSkill.GetLevelSpecialValueFor('projectile_speed');
                        let timeToHit = distBetween / 1800;
                        let TimeToHit = 0.4 + timeToHit;
                        FirstSkill.CastPosition(GetPredictedPosition(enemyHero, TimeToHit));
                        return;
                    }
                }
            }
            return;
        }
    }
    Items.Sniper = Sniper;
    function Spectre(myHero, enemyHero, myPos, myMana, enemyPos) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_spectre') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.spectreisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('spectre_spectral_dagger');
                let HantMove = myHero.GetAbility('spectre_haunt_single');
                let UltimateSkill = myHero.GetAbility('spectre_haunt');
                let menuVal = parseInt(Menu.GetValue(optionRangeUseHaunt).toString());
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.spectrefirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost()) {
                    FirstSkill.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.spectrefirstSkill, 1) && enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost()) {
                    if (!myHero.IsEntityInRange(enemyHero, menuVal)) {
                        UltimateSkill.CastNoTarget();
                        return;
                    }
                }
                if (Menu.GetMultiSelectValue(Items.spectrefirstSkill, 1) && enemyHero && HantMove && !HantMove.GetCooldown() && myMana >= HantMove.GetManaCost()) {
                    HantMove.CastPosition(enemyPos);
                    return;
                }
            }
            return;
        }
    }
    Items.Spectre = Spectre;
    function Terrorblade(myHero, enemyHero, myPos, myMana) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_terrorblade') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        let myCurHp = myHero.GetHealth();
        let myHP = myHero.GetMaxHealth();
        let hpFromMenu = parseInt(Menu.GetValue(optionHpTerrorblade).toString());
        let persentHP = hpFromMenu / 100 * myHP;
        if (Menu.GetMultiSelectValue(Items.terrorbladefirstSkill, 3) && enemyHero && myCurHp <= persentHP) {
            let UltimateSkill = myHero.GetAbility('terrorblade_sunder');
            let npcs = myHero.GetHeroesInRadius(470, Enum.TeamType.TEAM_ENEMY);
            for (let index = 0; index < npcs.length; index++) {
                const npc = npcs[index];
                let myHealthSunder = myHero.GetHealth() / myHero.GetMaxHealth();
                let enemySunderHealth = npc.GetHealth() / npc.GetMaxHealth();
                if (npc && npc.IsAlive() && npc.IsHero() && npc.IsEntityInRange(myHero, 470) && enemySunderHealth > myHealthSunder) {
                    UltimateSkill.CastTarget(npc);
                    return;
                }
            }
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.terrorbladeisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('terrorblade_reflection');
                let SecondSkill = myHero.GetAbility('terrorblade_conjure_image');
                let ThirdSkill = myHero.GetAbility('terrorblade_metamorphosis');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.terrorbladefirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 800)) {
                    FirstSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.terrorbladefirstSkill, 1) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 800)) {
                    SecondSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.terrorbladefirstSkill, 2) && enemyHero && ThirdSkill && !ThirdSkill.GetCooldown() && myMana >= ThirdSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 800)) {
                    ThirdSkill.CastNoTarget();
                    return;
                }
            }
            return;
        }
    }
    Items.Terrorblade = Terrorblade;
    function Ursa(myHero, enemyHero, myPos, myMana) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_ursa') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.ursaisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('ursa_earthshock');
                let SecondSkill = myHero.GetAbility('ursa_overpower');
                let UltimateSkill = myHero.GetAbility('ursa_enrage');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.ursafirstSkill, 1) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 1300)) {
                    SecondSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.ursafirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 350)) {
                    FirstSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.ursafirstSkill, 2) && enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 300)) {
                    UltimateSkill.CastNoTarget();
                    return;
                }
            }
            return;
        }
    }
    Items.Ursa = Ursa;
    function Vendeful(myHero, enemyHero, myPos, myMana, enemyPos) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_vengefulspirit') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.vendefulspiritisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('vengefulspirit_magic_missile');
                let SecondSkill = myHero.GetAbility('vengefulspirit_wave_of_terror');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.vendefulspiritfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost()) {
                    FirstSkill.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.vendefulspiritfirstSkill, 1) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost()) {
                    let distBetween = (myPos.sub(enemyPos).Length2D());
                    let neadtoTest = FirstSkill.GetLevelSpecialValueFor('projectile_speed');
                    let timeToHit = distBetween / 2000;
                    let TimeToHit = 0.4 + timeToHit;
                    SecondSkill.CastPosition(GetPredictedPosition(enemyHero, TimeToHit));
                    return;
                }
            }
            return;
        }
    }
    Items.Vendeful = Vendeful;
    function Venomancer(myHero, enemyHero, myPos, myMana, enemyPos) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_venomancer') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.venomancerisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('venomancer_venomous_gale');
                let ThirdSkill = myHero.GetAbility('venomancer_plague_ward');
                let UltimateSkill = myHero.GetAbility('venomancer_poison_nova');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.venomancerfirstSkill, 2) && enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 750)) {
                    UltimateSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.venomancerfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 700)) {
                    let distBetween = (myPos.sub(enemyPos).Length2D());
                    let neadtoTest = FirstSkill.GetLevelSpecialValueFor('projectile_speed');
                    let timeToHit = distBetween / 1200;
                    let TimeToHit = 0.1 + timeToHit;
                    FirstSkill.CastPosition(GetPredictedPosition(enemyHero, TimeToHit));
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.venomancerfirstSkill, 1) && enemyHero && ThirdSkill && !ThirdSkill.GetCooldown() && myMana >= ThirdSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 800)) {
                    ThirdSkill.CastPosition(enemyPos);
                    return;
                }
                let vards = myHero.GetUnitsInRadius(900, Enum.TeamType.TEAM_FRIEND);
                let localPlayer = EntitySystem.GetLocalPlayer();
                for (let index = 0; index < vards.length; index++) {
                    const npc = vards[index];
                    if (npc && npc.IsAlive() && npc.IsEntityInRange(myHero, 1200) && npc.GetUnitName() === 'npc_dota_venomancer_plague_ward_4') {
                        localPlayer.AttackTarget(npc, enemyHero);
                        return;
                    }
                }
            }
            return;
        }
    }
    Items.Venomancer = Venomancer;
    function Viper(myHero, enemyHero, myPos, myMana, enemyPos) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_viper') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.viperisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                if (enemyHero && enemyHero.IsEntityInRange(myHero, 900) && !enemyHero.IsEntityInRange(myHero, 500)) {
                    if (Engine.OnceAt(1)) {
                        myHero.MoveTo(enemyPos);
                        return;
                    }
                }
                //Skills
                let FirstSkill = myHero.GetAbility('viper_poison_attack');
                let SecondSkill = myHero.GetAbility('viper_nethertoxin');
                let UltimateSkill = myHero.GetAbility('viper_viper_strike');
                let viperAttackRange = myHero.GetAttackRange();
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.viperfirstSkill, 0) && enemyHero && Engine.OnceAt(0.4) && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, viperAttackRange) && !enemyHero.HasModifier('modifier_viper_poison_attack_slow')) {
                    FirstSkill.CastTarget(enemyHero);
                    return;
                }
                if (enemyHero && !myHero.IsEntityInRange(enemyHero, 500)) {
                    myHero.MoveTo(enemyPos, true, false);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.viperfirstSkill, 2) && enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 500)) {
                    UltimateSkill.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.viperfirstSkill, 0) && enemyHero && Engine.OnceAt(0.4) && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, viperAttackRange)) {
                    FirstSkill.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.viperfirstSkill, 1) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 900)) {
                    let distBetween = (myPos.sub(enemyPos).Length2D());
                    let neadtoTest = FirstSkill.GetLevelSpecialValueFor('projectile_speed');
                    let timeToHit = distBetween / 900;
                    let TimeToHit = 0.2 + timeToHit;
                    SecondSkill.CastPosition(GetPredictedPosition(enemyHero, TimeToHit));
                    return;
                }
            }
            return;
        }
    }
    Items.Viper = Viper;
    function Weaver(myHero, enemyHero, myPos, myMana, enemyPos) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_weaver') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.GetValue(Items.weaverAutoUltimate) === true) {
            let ThirdSkill = myHero.GetAbility('weaver_time_lapse');
            let myCurHp = myHero.GetHealth();
            let myHP = myHero.GetMaxHealth();
            let hpFromMenu = parseInt(Menu.GetValue(weaverHpForUlti).toString());
            let persentHP = hpFromMenu / 100 * myHP;
            // console.log('autoinviz 1');
            if (myCurHp <= persentHP) {
                //console.log('autoinviz 2');
                if (ThirdSkill && !ThirdSkill.GetCooldown() && myMana >= ThirdSkill.GetManaCost()) {
                    ThirdSkill.CastNoTarget();
                    return;
                }
            }
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.weaverisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('weaver_the_swarm');
                let SecondSkill = myHero.GetAbility('weaver_shukuchi');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.weaverfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost()) {
                    let distBetween = (myPos.sub(enemyPos).Length2D());
                    let neadtoTest = FirstSkill.GetLevelSpecialValueFor('projectile_speed');
                    let timeToHit = distBetween / 600;
                    let TimeToHit = 0.3 + timeToHit;
                    FirstSkill.CastPosition(GetPredictedPosition(enemyHero, TimeToHit));
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.weaverfirstSkill, 1) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost()) {
                    SecondSkill.CastNoTarget();
                    return;
                }
            }
            return;
        }
    }
    Items.Weaver = Weaver;
    function Clincz(myHero, enemyHero, myPos, myMana, enemyPos) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_clinkz') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        //Auto Haras
        if (Menu.GetValue(Items.enableHaras) === true && Menu.IsKeyDown(Items.harasKey)) {
            let SecondSkill = myHero.GetAbility('clinkz_searing_arrows');
            if (SecondSkill && myMana >= SecondSkill.GetManaCost()) {
                SecondSkill.CastTarget(enemyHero);
                return;
            }
        }
        //Auto Save
        if (Menu.GetValue(Items.thirdSkillAuto) === true) {
            let ThirdSkill = myHero.GetAbility('clinkz_wind_walk');
            let myCurHp = myHero.GetHealth();
            let myHP = myHero.GetMaxHealth();
            let hpFromMenu = parseInt(Menu.GetValue(optionHpClincz).toString());
            let persentHP = hpFromMenu / 100 * myHP;
            // console.log('autoinviz 1');
            if (myCurHp <= persentHP) {
                //console.log('autoinviz 2');
                if (ThirdSkill && !ThirdSkill.GetCooldown() && myMana >= ThirdSkill.GetManaCost()) {
                    ThirdSkill.CastNoTarget();
                    return;
                }
            }
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.ClinkzisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('clinkz_strafe');
                let SecondSkill = myHero.GetAbility('clinkz_searing_arrows');
                let UltimateSkill = myHero.GetAbility('clinkz_burning_army');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.ClinkzfirstSkill, 2) && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost()) {
                    UltimateSkill.CastPosition(enemyPos);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.ClinkzfirstSkill, 0) && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost()) {
                    FirstSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.ClinkzfirstSkill, 1) && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost()) {
                    SecondSkill.CastTarget(enemyHero);
                    return;
                }
            }
            return;
        }
    }
    Items.Clincz = Clincz;
    function Phantom(myHero, enemyHero, myPos, myMana) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_phantom_assassin') {
            return;
        }
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        //Dager Kill Steal
        if (Menu.GetValue(Items.dagerKillSteal) === true) {
            let FirstSkill = myHero.GetAbility('phantom_assassin_stifling_dagger');
            let RangeFirstSkill = FirstSkill.GetCastRange();
            let enemyHPrehen = enemyHero.GetHealthRegen() * 2;
            let enemyHP = enemyHero.GetHealth() + enemyHPrehen;
            let daggerDamage = FirstSkill.GetLevelSpecialValueFor('attack_factor_tooltip');
            let heroDamage = myHero.GetTrueDamage();
            let totalDamage = (heroDamage * daggerDamage) / 100 + 65;
            if (enemyHP <= totalDamage) {
                if (FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && enemyHero.IsEntityInRange(myHero, RangeFirstSkill))
                    FirstSkill.CastTarget(enemyHero);
                return;
            }
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.PhantomisEnabledOption) === true) {
            if (Engine.OnceAt(0.25)) {
                let FirstSkill = myHero.GetAbility('phantom_assassin_stifling_dagger');
                let SecondSkill = myHero.GetAbility('phantom_assassin_phantom_strike');
                let itemsMom = myHero.GetItem(`item_mask_of_madness`, true);
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.firstSkill, 0) && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost()) {
                    FirstSkill.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.firstSkill, 1) && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost()) {
                    SecondSkill.CastTarget(enemyHero);
                    return;
                }
                if (itemsMom && !itemsMom.GetCooldown() && myMana >= itemsMom.GetManaCost()) {
                    itemsMom.CastNoTarget();
                    return;
                }
            }
            return;
        }
    }
    Items.Phantom = Phantom;
    /*
    export function Dazzle(myHero,enemyHero,myPos,myMana) {

        if (!Items.GameStart) {
            return;
        }

        if (myHero.GetUnitName() !== 'npc_dota_hero_dazzle') {
            return;
        }

        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }

        if (!enemyHero) {
            return;
        }

        //Dager Kill Steal
/!*        if (Menu.GetValue(Items.dazzleSave) === true) {

            Items.AutoSaveAlly(myHero);

        }*!/


        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.PhantomisEnabledOption) === true) {

            if (Engine.OnceAt(0.25)) {

                let FirstSkill = myHero.GetAbility('dazzle_poison_touch');
                let SecondSkill = myHero.GetAbility('dazzle_shallow_grave');
                let ThirdSkill = myHero.GetAbility(`dazzle_shadow_wave`);

                Items.ItemUsage(myHero, enemyHero, myPos, myMana);

                if (Menu.GetMultiSelectValue(Items.firstSkill, 0) && FirstSkill && !FirstSkill.GetCooldown() && enemyHero && myMana >= FirstSkill.GetManaCost()) {
                    FirstSkill.CastTarget(enemyHero, true);
                    return;
                }

                if (Menu.GetMultiSelectValue(Items.firstSkill, 1) && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost()) {
                    SecondSkill.CastTarget(enemyHero, true);
                    return;
                }

            }
            return;
        }
    }









*/
    //Strength
    function Beastmaster(myHero, enemyHero, myPos, myMana, enemyPos) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_beastmaster') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.brewmasterisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('beastmaster_wild_axes');
                let SecondSkill = myHero.GetAbility('beastmaster_call_of_the_wild_boar');
                let UltimateSkill = myHero.GetAbility('beastmaster_primal_roar');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.brewmasterfirstSkill, 0) && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 900)) {
                    let distBetween = (myPos.sub(enemyPos).Length2D());
                    let neadtoTest = FirstSkill.GetLevelSpecialValueFor('projectile_speed');
                    let timeToHit = distBetween / 1500;
                    let TimeToHit = 0.82 + timeToHit;
                    FirstSkill.CastPosition(GetPredictedPosition(enemyHero, TimeToHit));
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.brewmasterfirstSkill, 1) && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 900)) {
                    SecondSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.brewmasterfirstSkill, 2) && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 600)) {
                    UltimateSkill.CastTarget(enemyHero);
                    return;
                }
            }
            return;
        }
    }
    Items.Beastmaster = Beastmaster;
    function Bristleback(myHero, enemyHero, myPos, myMana) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_bristleback') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.GetValue(Items.bristlebackAutoSecond) === true) {
            let SecondSkill = myHero.GetAbility('bristleback_quill_spray');
            if (SecondSkill && SecondSkill.GetLevel() >= 1 && enemyHero && enemyHero.IsEntityInRange(myHero, 600) && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost()) {
                SecondSkill.CastNoTarget();
                return;
            }
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.bristlebackisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('bristleback_viscous_nasal_goo');
                let SecondSkill = myHero.GetAbility('bristleback_quill_spray');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.bristlebackfirstSkill, 0) && FirstSkill && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && enemyHero.IsEntityInRange(myHero, 600)) {
                    FirstSkill.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.bristlebackfirstSkill, 1) && SecondSkill && enemyHero && enemyHero.IsEntityInRange(myHero, 600) && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost()) {
                    SecondSkill.CastNoTarget();
                    return;
                }
            }
            return;
        }
    }
    Items.Bristleback = Bristleback;
    function Centaurwarior(myHero, enemyHero, myPos, myMana) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_centaur') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.centaurisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('centaur_hoof_stomp');
                let SecondSkill = myHero.GetAbility('centaur_double_edge');
                let ThirdSkill = myHero.GetAbility('centaur_return');
                let UltimateSkill = myHero.GetAbility('centaur_stampede');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.centaurfirstSkill, 2) && enemyHero && ThirdSkill && !ThirdSkill.GetCooldown() && myMana >= ThirdSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 600)) {
                    ThirdSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.centaurfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && enemyHero.IsEntityInRange(myHero, 300)) {
                    FirstSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.centaurfirstSkill, 1) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && enemyHero.IsEntityInRange(myHero, 300)) {
                    SecondSkill.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.centaurfirstSkill, 3) && enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 800)) {
                    UltimateSkill.CastNoTarget();
                    return;
                }
            }
            return;
        }
    }
    Items.Centaurwarior = Centaurwarior;
    function Chaosknigth(myHero, enemyHero, myPos, myMana) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_chaos_knight') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.chaosknigthisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('chaos_knight_chaos_bolt');
                let SecondSkill = myHero.GetAbility('chaos_knight_reality_rift');
                let UltimateSkill = myHero.GetAbility('chaos_knight_phantasm');
                let RangeReallity = SecondSkill.GetCastRange();
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.chaosknigthfirstSkill, 2) && enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 1200)) {
                    UltimateSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.chaosknigthfirstSkill, 1) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, RangeReallity)) {
                    SecondSkill.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.chaosknigthfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 500)) {
                    FirstSkill.CastTarget(enemyHero);
                    return;
                }
            }
            return;
        }
    }
    Items.Chaosknigth = Chaosknigth;
    function Dragonknigth(myHero, enemyHero, myPos, myMana, enemyPos) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_dragon_knight') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.dragonknigthisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('dragon_knight_breathe_fire');
                let SecondSkill = myHero.GetAbility('dragon_knight_dragon_tail');
                let UltimateSkill = myHero.GetAbility('dragon_knight_elder_dragon_form');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.dragonknigthfirstSkill, 2) && enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 1200)) {
                    UltimateSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.dragonknigthfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 600)) {
                    let distBetween = (myPos.sub(enemyPos).Length2D());
                    let neadtoTest = FirstSkill.GetLevelSpecialValueFor('projectile_speed');
                    let timeToHit = distBetween / 2400;
                    let TimeToHit = 0.82 + timeToHit;
                    FirstSkill.CastPosition(GetPredictedPosition(enemyHero, TimeToHit));
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.dragonknigthfirstSkill, 1) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost()) {
                    SecondSkill.CastTarget(enemyHero);
                    return;
                }
            }
            return;
        }
    }
    Items.Dragonknigth = Dragonknigth;
    function Earshaker(myHero, enemyHero, myPos, myMana, enemyPos) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_earthshaker') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.GetValue(Items.safeStun) === true) {
            if (enemyHero.IsStunned()) {
                return;
            }
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.earsthshakerisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('earthshaker_fissure');
                let SecondSkill = myHero.GetAbility('earthshaker_enchant_totem');
                let UltimateSkill = myHero.GetAbility('earthshaker_echo_slam');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.earsthshakerfirstSkill, 2) && enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost() && enemyHero.IsEntityInRange(myHero, 400)) {
                    UltimateSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.earsthshakerfirstSkill, 1) && !myHero.HasAghanimScepter() && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 1250)) {
                    SecondSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.earsthshakerfirstSkill, 1) && myHero.HasAghanimScepter() && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 1150)) {
                    let distBetween = (myPos.sub(enemyPos).Length2D());
                    let neadtoTest = FirstSkill.GetLevelSpecialValueFor('projectile_speed');
                    let timeToHit = distBetween / 1100;
                    let TimeToHit = 0.75 + timeToHit;
                    SecondSkill.CastPosition(GetPredictedPosition(enemyHero, TimeToHit));
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.earsthshakerfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 800)) {
                    let distBetween = (myPos.sub(enemyPos).Length2D());
                    let neadtoTest = FirstSkill.GetLevelSpecialValueFor('projectile_speed');
                    let timeToHit = distBetween / 1100;
                    let TimeToHit = 0.70 + timeToHit;
                    FirstSkill.CastPosition(GetPredictedPosition(enemyHero, TimeToHit));
                    return;
                }
            }
            return;
        }
    }
    Items.Earshaker = Earshaker;
    function Legioncommander(myHero, enemyHero, myPos, myMana, enemyPos) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_legion_commander') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        enemyHero = Input.GetNearestHeroToCursor(Enum.TeamType.TEAM_ENEMY);
        if (!enemyHero) {
            return;
        }
        if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.legionisEnabledOption) === true) {
            if (Menu.GetValue(Items.legionInvis) === true && myHero.HasModifier('modifier_item_invisibility_edge_windwalk') || myHero.HasModifier('modifier_item_silver_edge_windwalk')) {
                if (myPos.Distance(enemyPos) >= 300) {
                    myHero.MoveTo(enemyPos);
                    return;
                }
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('legion_commander_overwhelming_odds');
                let UltimateSkill = myHero.GetAbility('legion_commander_duel');
                let SecondSkill = myHero.GetAbility('legion_commander_press_the_attack');
                let ItemsBladeMail = myHero.GetItem('item_blade_mail', true);
                let ItemsBkb = myHero.GetItem('item_black_king_bar', true);
                let itemsMjolnir = myHero.GetItem('item_mjollnir', true);
                let itemsPipe = myHero.GetItem('item_pipe', true);
                let itemsCrimson = myHero.GetItem('item_crimson_guard', true);
                let itemsHurikan = myHero.GetItem('item_heavens_halberd', true);
                let itemsLotus = myHero.GetItem('item_lotus_orb', true);
                let itemsShiva = myHero.GetItem('item_shivas_guard', true);
                let ItemsBlink = myHero.GetItem('item_blink', true);
                if (Menu.GetMultiSelectValue(Items.legionfirstSkill, 0) && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && !myHero.HasModifier('modifier_item_invisibility_edge_windwalk') && !myHero.HasModifier('modifier_item_silver_edge_windwalk')) {
                    if (enemyHero.IsEntityInRange(myHero, 1000)) {
                        let distBetween = (myPos.sub(enemyPos).Length2D());
                        let neadtoTest = FirstSkill.GetLevelSpecialValueFor('projectile_speed');
                        let timeToHit = distBetween / 3500;
                        let TimeToHit = 0.3 + timeToHit;
                        FirstSkill.CastPosition(GetPredictedPosition(enemyHero, TimeToHit));
                        return;
                    }
                }
                if (Menu.GetMultiSelectValue(Items.legionfirstSkill, 1) && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && !myHero.HasModifier('modifier_item_invisibility_edge_windwalk') && !myHero.HasModifier('modifier_item_silver_edge_windwalk')) {
                    SecondSkill.CastTarget(myHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.legionItems, 1) && ItemsBladeMail && !ItemsBladeMail.GetCooldown() && !myHero.HasModifier('modifier_item_invisibility_edge_windwalk') && !myHero.HasModifier('modifier_item_silver_edge_windwalk')) {
                    ItemsBladeMail.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.legionItems, 3) && itemsMjolnir && !itemsMjolnir.GetCooldown() && !myHero.HasModifier('modifier_item_invisibility_edge_windwalk') && !myHero.HasModifier('modifier_item_silver_edge_windwalk')) {
                    itemsMjolnir.CastTarget(myHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.legionItems, 4) && itemsPipe && !itemsPipe.GetCooldown() && !myHero.HasModifier('modifier_item_invisibility_edge_windwalk') && !myHero.HasModifier('modifier_item_silver_edge_windwalk')) {
                    itemsPipe.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.legionItems, 5) && itemsCrimson && !itemsCrimson.GetCooldown() && !myHero.HasModifier('modifier_item_invisibility_edge_windwalk') && !myHero.HasModifier('modifier_item_silver_edge_windwalk')) {
                    itemsCrimson.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.legionItems, 7) && itemsLotus && !itemsLotus.GetCooldown() && !myHero.HasModifier('modifier_item_invisibility_edge_windwalk') && !myHero.HasModifier('modifier_item_silver_edge_windwalk')) {
                    itemsLotus.CastTarget(myHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.legionItems, 8) && itemsShiva && !itemsShiva.GetCooldown() && !myHero.HasModifier('modifier_item_invisibility_edge_windwalk') && !myHero.HasModifier('modifier_item_silver_edge_windwalk')) {
                    itemsShiva.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.legionItems, 6) && itemsHurikan && !itemsHurikan.GetCooldown() && !myHero.HasModifier('modifier_item_invisibility_edge_windwalk') && !myHero.HasModifier('modifier_item_silver_edge_windwalk') && enemyHero.IsEntityInRange(myHero, 600)) {
                    itemsHurikan.CastTarget(enemyHero);
                    return;
                }
                //Skills Before Blink
                if (Menu.GetMultiSelectValue(Items.legionItems, 2) && ItemsBkb && !ItemsBkb.GetCooldown() && !myHero.HasModifier('modifier_item_invisibility_edge_windwalk') && !myHero.HasModifier('modifier_item_silver_edge_windwalk')) {
                    ItemsBkb.CastNoTarget();
                    return;
                }
                //Use Blink
                if (Menu.GetMultiSelectValue(Items.legionItems, 0) && ItemsBlink && !ItemsBlink.GetCooldown() && myHero.IsEntityInRange(enemyHero, 1200)) {
                    ItemsBlink.CastPosition(enemyPos);
                    return;
                }
                //Use Ulti
                if (Menu.GetMultiSelectValue(Items.legionfirstSkill, 2) && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 300)) {
                    UltimateSkill.CastTarget(enemyHero);
                    return;
                }
            }
            return;
        }
    }
    Items.Legioncommander = Legioncommander;
    function Lifestealer(myHero, enemyHero, myPos, myMana) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_life_stealer') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.lifestealearisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('life_stealer_rage');
                let ThirdSkill = myHero.GetAbility('life_stealer_open_wounds');
                //let UltimateSkill = myHero.GetAbility('life_stealer_infest');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.lifestealearfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && enemyHero.IsEntityInRange(myHero, 500)) {
                    FirstSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.lifestealearfirstSkill, 1) && enemyHero && ThirdSkill && !ThirdSkill.GetCooldown() && myMana >= ThirdSkill.GetManaCost()) {
                    ThirdSkill.CastTarget(enemyHero);
                    return;
                }
            }
            return;
        }
    }
    Items.Lifestealer = Lifestealer;
    function Lycan(myHero, enemyHero, myPos, myMana) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_lycan') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.lycanisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('lycan_summon_wolves');
                let SecondSkill = myHero.GetAbility('lycan_howl');
                let UltimateSkill = myHero.GetAbility('lycan_shapeshift');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.lycanfirstSkill, 2) && enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 800)) {
                    UltimateSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.lycanfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 800)) {
                    FirstSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.lycanfirstSkill, 1) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 800)) {
                    SecondSkill.CastNoTarget();
                    return;
                }
            }
            return;
        }
    }
    Items.Lycan = Lycan;
    function Mars(myHero, enemyHero, myPos, myMana) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_mars') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.marsisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('mars_spear');
                let SecondSkill = myHero.GetAbility('mars_gods_rebuke');
                let UltimateSkill = myHero.GetAbility('mars_arena_of_blood');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetValue(Items.marsultimateSkill) === true && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 400)) {
                    SecondSkill.CastPosition(enemyHero);
                    return;
                }
                if (Menu.GetValue(Items.marsfirstSkill) === true && enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 350)) {
                    UltimateSkill.CastPosition(enemyHero);
                    return;
                }
                if (Menu.GetValue(Items.marssecondSkill) === true && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 350)) {
                    FirstSkill.CastPosition(enemyHero);
                    return;
                }
            }
            return;
        }
    }
    Items.Mars = Mars;
    function Nigthstalker(myHero, enemyHero, myPos, myMana) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_night_stalker') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.nigthstalkerisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('night_stalker_void');
                let SecondSkill = myHero.GetAbility('night_stalker_crippling_fear');
                let UltimateSkill = myHero.GetAbility('night_stalker_darkness');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.nigthstalkerfirstSkill, 2) && enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost()) {
                    UltimateSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.nigthstalkerfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost()) {
                    FirstSkill.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.nigthstalkerfirstSkill, 1) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 400)) {
                    SecondSkill.CastNoTarget();
                    return;
                }
            }
            return;
        }
    }
    Items.Nigthstalker = Nigthstalker;
    function Slardar(myHero, enemyHero, myPos, myMana) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_slardar') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.slardarisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('slardar_sprint');
                let SecondSkill = myHero.GetAbility('slardar_slithereen_crush');
                let UltimateSkill = myHero.GetAbility('slardar_amplify_damage');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.slardarfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost()) {
                    FirstSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.slardarfirstSkill, 2) && enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 700)) {
                    UltimateSkill.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.slardarfirstSkill, 1) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 350)) {
                    SecondSkill.CastNoTarget();
                    return;
                }
            }
            return;
        }
    }
    Items.Slardar = Slardar;
    function Spiritbreaker(myHero, enemyHero, myPos, myMana) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_spirit_breaker') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.spiritbreakerisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('spirit_breaker_charge_of_darkness');
                let SecondSkill = myHero.GetAbility('spirit_breaker_bulldoze');
                let UltimateSkill = myHero.GetAbility('spirit_breaker_nether_strike');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.spiritbreakerfirstSkill, 1) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost()) {
                    SecondSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.spiritbreakerfirstSkill, 2) && enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 700)) {
                    UltimateSkill.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.spiritbreakerfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost()) {
                    FirstSkill.CastTarget(enemyHero);
                    return;
                }
            }
            return;
        }
    }
    Items.Spiritbreaker = Spiritbreaker;
    function Sven(myHero, enemyHero, myPos, myMana) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_sven') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.svenisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('sven_storm_bolt');
                let ThirdSkill = myHero.GetAbility('sven_warcry');
                let UltimateSkill = myHero.GetAbility('sven_gods_strength');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.svenfirstSkill, 1) && enemyHero && ThirdSkill && !ThirdSkill.GetCooldown() && myMana >= ThirdSkill.GetManaCost()) {
                    ThirdSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.svenfirstSkill, 2) && enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost()) {
                    UltimateSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.svenfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 600)) {
                    FirstSkill.CastTarget(enemyHero);
                    return;
                }
            }
            return;
        }
    }
    Items.Sven = Sven;
    function Tidehunter(myHero, enemyHero, myPos, myMana) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_tidehunter') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.tidehunterisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('tidehunter_gush');
                let ThirdSkill = myHero.GetAbility('tidehunter_anchor_smash');
                let UltimateSkill = myHero.GetAbility('tidehunter_ravage');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.tidehunterfirstSkill, 2) && enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 600)) {
                    UltimateSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.tidehunterfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost()) {
                    FirstSkill.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.tidehunterfirstSkill, 1) && enemyHero && ThirdSkill && !ThirdSkill.GetCooldown() && myMana >= ThirdSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 350)) {
                    ThirdSkill.CastNoTarget();
                    return;
                }
            }
            return;
        }
    }
    Items.Tidehunter = Tidehunter;
    function Tiny(myHero, enemyHero, myPos, myMana, enemyPos) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_tiny') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.tinyisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('tiny_avalanche');
                let SecondSkill = myHero.GetAbility('tiny_toss');
                // let ThirdSkill = myHero.GetAbility('tiny_toss_tree');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                //           if (Menu.GetValue(Items.tinythirdskill) === true && enemyHero && ThirdSkill && !ThirdSkill.GetCooldown() && myMana >= ThirdSkill.GetManaCost()) {
                //              ThirdSkill.CastTarget(enemyHero,true);
                //              console.log('1');
                //             return;
                //         }
                if (Menu.GetMultiSelectValue(Items.tinyfirstSkill, 1) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 275)) {
                    SecondSkill.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.tinyfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 400) && SecondSkill.SecondsSinceLastUse() >= 0.2) {
                    let distBetween = (myPos.sub(enemyPos).Length2D());
                    let neadtoTest = FirstSkill.GetLevelSpecialValueFor('projectile_speed');
                    let timeToHit = distBetween / 2400;
                    let TimeToHit = 0.2 + timeToHit;
                    FirstSkill.CastPosition(GetPredictedPosition(enemyHero, TimeToHit));
                    return;
                }
            }
            return;
        }
    }
    Items.Tiny = Tiny;
    function Undying(myHero, enemyHero, myPos, myMana, enemyPos) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_undying') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.undyingisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('undying_decay');
                let SecondSkill = myHero.GetAbility('undying_soul_rip');
                let ThirdSkill = myHero.GetAbility('undying_tombstone');
                let UltimateSkill = myHero.GetAbility('undying_flesh_golem');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.undyingfirstSkill, 3) && enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost()) {
                    UltimateSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.undyingfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost()) {
                    FirstSkill.CastPosition(GetPredictedPosition(enemyHero, 0.45));
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.undyingfirstSkill, 1) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost()) {
                    SecondSkill.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.undyingfirstSkill, 2) && enemyHero && ThirdSkill && !ThirdSkill.GetCooldown() && myMana >= ThirdSkill.GetManaCost()) {
                    ThirdSkill.CastPosition(enemyPos);
                    return;
                }
            }
            return;
        }
    }
    Items.Undying = Undying;
    function Wraithking(myHero, enemyHero, myPos, myMana) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_skeleton_king') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.wraithkingisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('skeleton_king_hellfire_blast');
                let ThirdSkill = myHero.GetAbility('skeleton_king_mortal_strike');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.wraithkingfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 600)) {
                    FirstSkill.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.wraithkingfirstSkill, 1) && enemyHero && ThirdSkill && !ThirdSkill.GetCooldown() && myMana >= ThirdSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 400)) {
                    ThirdSkill.CastNoTarget();
                    return;
                }
            }
            return;
        }
    }
    Items.Wraithking = Wraithking;
    function Axe(myHero, enemyHero, myPos, myMana, enemyPos, enemyHealth) {
        if (myHero.GetUnitName() === 'npc_dota_hero_axe') {
            if (!Items.GameStart) {
                return;
            }
            if (myHero.GetUnitName() !== 'npc_dota_hero_axe') {
                return;
            }
            // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
            if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
                return;
            }
            if (!enemyHero) {
                return;
            }
            //For Ulti
            let AxeUltimate = myHero.GetAbility('axe_culling_blade');
            let ItemsBlink = myHero.GetItem('item_blink', true);
            let currentUltiDmg = AxeUltimate.GetLevelSpecialValueFor('kill_threshold');
            if (Menu.GetMultiSelectValue(Items.berserkerCall, 0) && AxeUltimate && !AxeUltimate.GetCooldown() && myMana >= AxeUltimate.GetManaCost() && enemyHero.IsEntityInRange(myHero, 1200)) {
                if (enemyHero.IsEntityInRange(myHero, 300) && enemyHealth <= currentUltiDmg) {
                    AxeUltimate.CastTarget(enemyHero);
                    return;
                }
                else if (myPos.Distance(enemyPos) >= 500 && myPos.Distance(enemyPos) <= 1200 && enemyHealth <= currentUltiDmg) {
                    if (Menu.GetMultiSelectValue(Items.berserkerCall, 1) && ItemsBlink && !ItemsBlink.GetCooldown() && enemyHero.IsEntityInRange(myHero, 1200)) {
                        ItemsBlink.CastPosition(enemyPos);
                        return;
                    }
                    AxeUltimate.CastTarget(enemyHero);
                    return;
                }
            }
            if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.isEnabledOption) === true) {
                // Если противник мёртв ИЛИ если он не герой ИЛИ если он иллюзия, не выполняем код
                if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                    return;
                }
                if (Engine.OnceAt(0.25)) {
                    //Skills
                    let FirstAxe = myHero.GetAbility('axe_berserkers_call');
                    let SecondAxe = myHero.GetAbility('axe_battle_hunger');
                    Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                    //Use Skills
                    if (Menu.GetMultiSelectValue(Items.berserkerCall, 0) && FirstAxe && !FirstAxe.GetCooldown() && myMana >= FirstAxe.GetManaCost()) {
                        if (enemyHero.IsEntityInRange(myHero, 300)) {
                            FirstAxe.CastNoTarget();
                            return;
                        }
                    }
                    if (Menu.GetMultiSelectValue(Items.berserkerCall, 1) === true && SecondAxe && !SecondAxe.GetCooldown() && myMana >= FirstAxe.GetManaCost() && enemyHero.IsEntityInRange(myHero, 600)) {
                        SecondAxe.CastTarget(enemyHero);
                        return;
                    }
                }
                return;
            }
        }
    }
    Items.Axe = Axe;
    function Apparat(myHero, enemyHero, myPos, myMana, enemyPos) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_ancient_apparition') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.apparatisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('ancient_apparition_cold_feet');
                let SecondSkill = myHero.GetAbility('ancient_apparition_ice_vortex');
                let ThirdSkill = myHero.GetAbility('ancient_apparition_chilling_touch');
                //let UltimateSkill = myHero.GetAbility('ancient_apparition_ice_blast');
                //let ReleaseUltimate = myHero.GetAbility('ancient_apparition_ice_blast_release');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.apparatfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 700)) {
                    FirstSkill.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.apparatfirstSkill, 1) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 1500)) {
                    let distBetween = (myPos.sub(enemyPos).Length2D());
                    let neadtoTest = FirstSkill.GetLevelSpecialValueFor('projectile_speed');
                    let timeToHit = distBetween / 2400;
                    let TimeToHit = 0.82 + timeToHit;
                    SecondSkill.CastPosition(GetPredictedPosition(enemyHero, 0.2));
                    return;
                }
                let attackRangeApparat = myHero.GetAttackRange();
                if (Menu.GetMultiSelectValue(Items.apparatfirstSkill, 2) && enemyHero && ThirdSkill && !ThirdSkill.GetCooldown() && myMana >= ThirdSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, attackRangeApparat)) {
                    ThirdSkill.CastTarget(enemyHero);
                    return;
                }
            }
            // if (Menu.GetMultiSelectValue(Items.apparatfirstSkill,3) && enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost()) {
            //     UltimateSkill.CastPosition(enemyPos, true);
            //    return;
            //  }
            return;
        }
    }
    Items.Apparat = Apparat;
    function Bane(myHero, enemyHero, myPos, myMana) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_bane') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (myHero.IsChannellingAbility()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.GetValue(Items.baneVampiric) === true) {
            let FirstSave = myHero.GetAbility('bane_enfeeble');
            let myCurHp = myHero.GetHealth();
            let myHP = myHero.GetMaxHealth();
            let hpFromMenu = parseInt(Menu.GetValue(baneVampiricc).toString());
            let persentHP = hpFromMenu / 100 * myHP;
            if (myCurHp <= persentHP && FirstSave) {
                if (FirstSave && !FirstSave.GetCooldown() && myMana >= FirstSave.GetManaCost()) {
                    FirstSave.CastTarget(enemyHero);
                    return;
                }
            }
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.baneisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('bane_enfeeble');
                let SecondSkill = myHero.GetAbility('bane_brain_sap');
                let ThirdSkill = myHero.GetAbility('bane_nightmare');
                let UltimateSkill = myHero.GetAbility('bane_fiends_grip');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.banefirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 950)) {
                    FirstSkill.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.banefirstSkill, 1) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 600)) {
                    SecondSkill.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.banefirstSkill, 2) && enemyHero && ThirdSkill && !ThirdSkill.GetCooldown() && myMana >= ThirdSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 625)) {
                    ThirdSkill.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.banefirstSkill, 3) && enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 625)) {
                    UltimateSkill.CastTarget(enemyHero);
                    return;
                }
            }
            return;
        }
    }
    Items.Bane = Bane;
    function Crystal(myHero, enemyHero, myPos, myMana, enemyPos) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_crystal_maiden') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.crystalmaidenisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('crystal_maiden_crystal_nova');
                let SecondSkill = myHero.GetAbility('crystal_maiden_frostbite');
                let UltimateSkill = myHero.GetAbility('crystal_maiden_freezing_field');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.crystalmaidenfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 700) && !myHero.IsChannellingAbility()) {
                    FirstSkill.CastPosition(GetPredictedPosition(enemyHero, 0.3));
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.crystalmaidenfirstSkill, 1) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 550) && !myHero.IsChannellingAbility()) {
                    SecondSkill.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.crystalmaidenfirstSkill, 2) && enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 400)) {
                    UltimateSkill.CastNoTarget();
                    return;
                }
            }
            return;
        }
    }
    Items.Crystal = Crystal;
    function Darkseer(myHero, enemyHero, myPos, myMana, enemyPos) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_dark_seer') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.darkseerkisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('dark_seer_vacuum');
                let SecondSkill = myHero.GetAbility('dark_seer_ion_shell');
                let ThirdSkill = myHero.GetAbility('dark_seer_surge');
                let UltimateSkill = myHero.GetAbility('dark_seer_wall_of_replica');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.darkseerkfirstSkill, 1) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 950)) {
                    SecondSkill.CastTarget(myHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.darkseerkfirstSkill, 2) && enemyHero && ThirdSkill && !ThirdSkill.GetCooldown() && myMana >= ThirdSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 950)) {
                    ThirdSkill.CastTarget(myHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.darkseerkfirstSkill, 3) && enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 950)) {
                    UltimateSkill.CastPosition(GetPredictedPosition(enemyHero, 0.4));
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.darkseerkfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 950)) {
                    FirstSkill.CastPosition(GetPredictedPosition(enemyHero, 0.2));
                    return;
                }
            }
            return;
        }
    }
    Items.Darkseer = Darkseer;
    function Darkvillow(myHero, enemyHero, myPos, myMana, enemyPos) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_dark_willow') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.darkwillowisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('dark_willow_bramble_maze');
                let SecondSkill = myHero.GetAbility('dark_willow_shadow_realm');
                let ThirdSkill = myHero.GetAbility('dark_willow_cursed_crown');
                let FirthSkill = myHero.GetAbility('dark_willow_bedlam');
                let UltimateSkill = myHero.GetAbility('dark_willow_terrorize');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.darkwillowfirstSkill, 2) && enemyHero && ThirdSkill && !ThirdSkill.GetCooldown() && myMana >= ThirdSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 650)) {
                    ThirdSkill.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.darkwillowfirstSkill, 1) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 350)) {
                    SecondSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.darkwillowfirstSkill, 3) && enemyHero && FirthSkill && !FirthSkill.GetCooldown() && myMana >= FirthSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 600)) {
                    FirthSkill.CastNoTarget();
                    return;
                }
                if (enemyHero && FirthSkill.SecondsSinceLastUse() > 0.3 && FirthSkill.SecondsSinceLastUse() < 3 && !myHero.IsEntityInRange(enemyHero, 300)) {
                    myHero.MoveTo(enemyPos, true, false);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.darkwillowfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 1200)) {
                    FirstSkill.CastPosition(GetPredictedPosition(enemyHero, 1));
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.darkwillowfirstSkill, 4) && enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 950)) {
                    let distBetween = (myPos.sub(enemyPos).Length2D());
                    let neadtoTest = FirstSkill.GetLevelSpecialValueFor('projectile_speed');
                    let timeToHit = distBetween / 2000;
                    let TimeToHit = 1.3 + timeToHit;
                    UltimateSkill.CastPosition(GetPredictedPosition(enemyHero, TimeToHit));
                    return;
                }
            }
            return;
        }
    }
    Items.Darkvillow = Darkvillow;
    function Deathprophet(myHero, enemyHero, myPos, myMana, enemyPos) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_death_prophet') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.deathprophetisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('death_prophet_carrion_swarm');
                let SecondSkill = myHero.GetAbility('death_prophet_silence');
                let ThirdSkill = myHero.GetAbility('death_prophet_spirit_siphon');
                let UltimateSkill = myHero.GetAbility('death_prophet_exorcism');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.deathprophetfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 600)) {
                    let distBetween = (myPos.sub(enemyPos).Length2D());
                    let neadtoTest = FirstSkill.GetLevelSpecialValueFor('projectile_speed');
                    let timeToHit = distBetween / 1100;
                    let TimeToHit = 0.5 + timeToHit;
                    FirstSkill.CastPosition(GetPredictedPosition(enemyHero, TimeToHit));
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.deathprophetfirstSkill, 1) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 900)) {
                    SecondSkill.CastPosition(GetPredictedPosition(enemyHero, 0.5));
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.deathprophetfirstSkill, 3) && enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 700)) {
                    UltimateSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.deathprophetfirstSkill, 2) && enemyHero && ThirdSkill && !ThirdSkill.GetCooldown() && myMana >= ThirdSkill.GetManaCost()) {
                    if (!myHero.IsEntityInRange(enemyHero, 500)) {
                        myHero.MoveTo(enemyPos, true, false);
                        return;
                    }
                    ThirdSkill.CastTarget(enemyHero);
                    return;
                }
            }
            return;
        }
    }
    Items.Deathprophet = Deathprophet;
    function Enchantress(myHero, enemyHero, myPos, myMana) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_enchantress') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        //Auto Save
        if (Menu.GetValue(Items.AutoSaveEnchant) === true) {
            let FirstSave = myHero.GetAbility('enchantress_natures_attendants');
            let myCurHp = myHero.GetHealth();
            let myHP = myHero.GetMaxHealth();
            let hpFromMenu = parseInt(Menu.GetValue(enchantressHpChange).toString());
            let persentHP = hpFromMenu / 100 * myHP;
            if (myCurHp <= persentHP && FirstSave) {
                if (FirstSave && !FirstSave.GetCooldown() && myMana >= FirstSave.GetManaCost()) {
                    FirstSave.CastNoTarget();
                    return;
                }
            }
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.enchantressisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let SecondSkill = myHero.GetAbility('enchantress_enchant');
                let UltimateSkill = myHero.GetAbility('enchantress_impetus');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.enchantressfirstSkill, 0) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 700)) {
                    SecondSkill.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.enchantressfirstSkill, 1) && enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost()) {
                    UltimateSkill.CastTarget(enemyHero);
                    return;
                }
            }
            return;
        }
    }
    Items.Enchantress = Enchantress;
    function Enigma(myHero, enemyHero, myPos, myMana, enemyPos) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_enigma') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (myHero.IsChannellingAbility()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.enigmaisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('enigma_malefice');
                let ThirdSkill = myHero.GetAbility('enigma_midnight_pulse');
                let UltimateSkill = myHero.GetAbility('enigma_black_hole');
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.enigmafirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 600)) {
                    FirstSkill.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.enigmafirstSkill, 1) && enemyHero && ThirdSkill && !ThirdSkill.GetCooldown() && myMana >= ThirdSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 700)) {
                    ThirdSkill.CastPosition(enemyPos);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.enigmafirstSkill, 2) && enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 275)) {
                    let bestPos = Items.getBestPosition(enemyHero.GetHeroesInRadius(300, Enum.TeamType.TEAM_ENEMY));
                    UltimateSkill.CastPosition(bestPos);
                    return;
                }
                let neadfirstmana = UltimateSkill.GetManaCost();
                let neadsecondmana = 375 + neadfirstmana;
                if (Menu.GetValue(Items.enigmaRefresher) === true && UltimateSkill.GetCooldown() && myMana >= neadsecondmana) {
                    let Refresher = myHero.GetItem('item_refresher', true);
                    if (Refresher) {
                        Refresher.CastNoTarget();
                    }
                    if (enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 300)) {
                        UltimateSkill.CastPosition(enemyPos);
                        return;
                    }
                }
            }
            return;
        }
    }
    Items.Enigma = Enigma;
    function hitgetHitNumbers(myHero, enemy) {
        if (!myHero || !enemy) {
            return;
        }
        let trueDamage = myHero.GetDamageMultiplierVersus(enemy) * (myHero.GetTrueDamage() * enemy.GetArmorDamageMultiplier());
        let pos = enemy.GetAbsOrigin();
        let x, y, visible = Renderer.WorldToScreen(pos);
        let healthLeft = enemy.GetHealth();
        //let fontNow = parseInt(Menu.GetValue(Items.hitfontSize).toString());
        let hitCount = Math.ceil(healthLeft / trueDamage).toString();
        if (visible) {
            Renderer.SetDrawColor(255, 255, 0, 255);
            Renderer.DrawTextCentered(Items.hitfont, x, y, hitCount, 1);
        }
    }
    Items.hitgetHitNumbers = hitgetHitNumbers;
    function Grimm(myHero, enemyHero, myPos, myMana, enemyPos) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_grimstroke') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.grimmisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            let UltimateSkill = myHero.GetAbility('grimstroke_soul_chain');
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('grimstroke_dark_artistry');
                let SecondSkill = myHero.GetAbility('grimstroke_ink_creature');
                let ThirdSkill = myHero.GetAbility('grimstroke_spirit_walk');
                if (Menu.GetMultiSelectValue(Items.grimmfirstSkill, 3) && enemyHero && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 700)) {
                    UltimateSkill.CastTarget(enemyHero);
                    return;
                }
                if (enemyHero.IsEntityInRange(myHero, 600) && UltimateSkill && UltimateSkill.GetCooldown() >= 2) {
                    Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.grimmfirstSkill, 1) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 900)) {
                    SecondSkill.CastTarget(enemyHero);
                    return;
                }
                let distBetween = (myPos.sub(enemyPos).Length2D());
                let neadtoTest = FirstSkill.GetLevelSpecialValueFor('projectile_speed');
                let timeToHit = distBetween / 2400;
                let TimeToHit = 0.82 + timeToHit;
                if (Menu.GetMultiSelectValue(Items.grimmfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 1400)) {
                    FirstSkill.CastPosition(GetPredictedPosition(enemyHero, TimeToHit));
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.grimmfirstSkill, 2) && enemyHero && ThirdSkill && !ThirdSkill.GetCooldown() && myMana >= ThirdSkill.GetManaCost()) {
                    ThirdSkill.CastTarget(myHero, true);
                    if (myHero.HasModifier('modifier_grimstroke_spirit_walk_buff') && enemyHero && !enemyHero.IsEntityInRange(myHero, 400)) {
                        myHero.MoveTo(enemyPos, true, false);
                    }
                    return;
                }
            }
            Items.ItemUsage(myHero, enemyHero, myPos, myMana);
            return;
        }
    }
    Items.Grimm = Grimm;
    function Tinkers(myHero, enemyHero, myPos, myMana) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_tinker') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        let UltimateSkill = myHero.GetAbility('tinker_rearm');
        if (UltimateSkill.IsChannelling()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        let time = GameRules.GetGameTime();
        let nextTick = 0;
        let enemyHealth = enemyHero.GetHealth();
        let enemyRegen = enemyHero.GetHealthRegen() * 2;
        let enemyPos = enemyHero.GetAbsOrigin();
        let cursorPos = Input.GetWorldCursorPos();
        let menuVal = parseInt(Menu.GetValue(optionTinkerBlink).toString());
        let neadToBlink = parseInt(Menu.GetValue(optionTinkerBlinkMin).toString());
        let predictedPos = (myPos.sub(enemyPos).Normalized().Scaled(menuVal));
        let blinkPos = enemyPos.add(predictedPos);
        let ItemsBlink = myHero.GetItem('item_blink', true);
        let mustBlinkHere = null;
        if (Menu.GetValue(Items.tinkerBlinkPos) === 0) {
            mustBlinkHere = blinkPos;
        }
        if (Menu.GetValue(Items.tinkerBlinkPos) === 1) {
            mustBlinkHere = cursorPos;
            neadToBlink = 100;
        }
        //Skills
        let FirstSkill = myHero.GetAbility('tinker_laser');
        let SecondSkill = myHero.GetAbility('tinker_heat_seeking_missile');
        let ThirdSkill = myHero.GetAbility('tinker_march_of_the_machines');
        let TimeToRearm = 0;
        let lvlultimate = UltimateSkill.GetLevel();
        if (lvlultimate === 1) {
            TimeToRearm = 4;
        }
        if (lvlultimate === 2) {
            TimeToRearm = 2;
        }
        if (lvlultimate === 3) {
            TimeToRearm = 1;
        }
        //Kill steal
        if (Menu.GetValue(Items.tinkerEnableKillSteal) === true) {
            let currentLaserDmg = FirstSkill.GetLevelSpecialValueFor('laser_damage');
            let currentSecondGmg = SecondSkill.GetLevelSpecialValueFor('damage');
            let totalDmg = currentLaserDmg + currentSecondGmg;
            let totalMana = FirstSkill.GetManaCost() + SecondSkill.GetManaCost();
            let castRangeLaser = FirstSkill.GetCastRange();
            if (Menu.GetMultiSelectValue(Items.tinkerKillSteal, 0) && Menu.GetMultiSelectValue(Items.tinkerKillSteal, 1) && SecondSkill && !SecondSkill.GetCooldown() && FirstSkill && !FirstSkill.GetCooldown() && myMana >= totalMana && (enemyHealth + enemyRegen) <= totalDmg && enemyHero.IsEntityInRange(myHero, castRangeLaser)) {
                SecondSkill.CastNoTarget();
                FirstSkill.CastTarget(enemyHero);
            }
            if (Menu.GetMultiSelectValue(Items.tinkerKillSteal, 0) && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && (enemyHealth + enemyRegen) <= currentLaserDmg && enemyHero.IsEntityInRange(myHero, castRangeLaser)) {
                FirstSkill.CastTarget(enemyHero);
                return;
            }
            if (Menu.GetMultiSelectValue(Items.tinkerKillSteal, 1) && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && (enemyHealth + enemyRegen) <= currentSecondGmg && enemyHero.IsEntityInRange(myHero, 2000)) {
                SecondSkill.CastNoTarget();
                return;
            }
        }
        let itemsSoulRing = myHero.GetItem(`item_soul_ring`, true);
        //Def Mode
        if (Menu.IsKeyDown(Items.tinkerDefendKey) && Menu.GetValue(Items.tinkerDefendMode) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Menu.GetMultiSelectValue(Items.tinkerDefendSpells, 0) && ItemsBlink && !ItemsBlink.GetCooldown() && !myHero.IsEntityInRange(enemyHero, neadToBlink)) {
                ItemsBlink.CastPosition(mustBlinkHere);
                return;
            }
            if (Menu.GetMultiSelectValue(Items.tinkerDefendSpells, 2) && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost()) {
                SecondSkill.CastNoTarget();
                return;
            }
            if (Menu.GetMultiSelectValue(Items.tinkerDefendSpells, 3) && ThirdSkill && !ThirdSkill.GetCooldown() && myMana >= ThirdSkill.GetManaCost()) {
                ThirdSkill.CastPosition(myPos);
                return;
            }
            if (Engine.OnceAt(TimeToRearm)) {
                if (UltimateSkill && myMana >= UltimateSkill.GetManaCost() && !UltimateSkill.IsChannelling() && time >= nextTick) {
                    if (Items.TinkerChecker(myHero, myMana, SecondSkill, ThirdSkill, FirstSkill)) {
                        UltimateSkill.CastNoTarget();
                        nextTick = time + TimeToRearm;
                        return;
                    }
                }
            }
        }
        //Rocket Spam
        if (Menu.IsKeyDown(Items.tinkerRocketKey) && Menu.GetValue(Items.tinkerRocketSpam) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Menu.GetMultiSelectValue(Items.tinkerRocketBlink, 0) && ItemsBlink && !ItemsBlink.GetCooldown()) {
                ItemsBlink.CastPosition(mustBlinkHere);
                return;
            }
            if (SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost()) {
                SecondSkill.CastNoTarget();
                return;
            }
            if (Engine.OnceAt(TimeToRearm)) {
                if (UltimateSkill && myMana >= UltimateSkill.GetManaCost() && !UltimateSkill.IsChannelling() && time >= nextTick) {
                    if (Items.TinkerChecker(myHero, myMana, SecondSkill, ThirdSkill, FirstSkill)) {
                        UltimateSkill.CastNoTarget();
                        nextTick = time + TimeToRearm;
                        return;
                    }
                }
            }
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.tinkerisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                let itemsBlink = myHero.GetItem('item_blink', true);
                let itemsEterial = myHero.GetItem('item_ethereal_blade', true);
                let itemsVeil = myHero.GetItem('item_veil_of_discord', true);
                let itemsHex = myHero.GetItem('item_sheepstick', true);
                let itemsNufflier = myHero.GetItem('item_nullifier', true);
                let itemsShiva = myHero.GetItem('item_shivas_guard', true);
                let itemsAtos = myHero.GetItem('item_rod_of_atos', true);
                let itemsDagon = myHero.GetItem(`item_dagon`, true);
                for (let i = 2; i <= 5 && !itemsDagon; i++) {
                    itemsDagon = myHero.GetItem(`item_dagon_${i}`, true);
                }
                let itemsLotus = myHero.GetItem('item_lotus_orb', true);
                let itemsBkb = myHero.GetItem('item_black_king_bar', true);
                if (Menu.GetValue(Items.tinkerMaxDMG) === true) {
                    if (Menu.GetMultiSelectValue(Items.tinkerItems, 2) && itemsHex && !itemsHex.GetCooldown() && myMana >= itemsHex.GetManaCost()) {
                        itemsHex.CastTarget(enemyHero);
                        return;
                    }
                    if (Menu.GetMultiSelectValue(Items.tinkerItems, 3) && itemsEterial && !itemsEterial.GetCooldown() && myMana >= itemsEterial.GetManaCost()) {
                        itemsEterial.CastTarget(enemyHero);
                        return;
                    }
                }
                if (Menu.GetValue(Items.tinkerMaxDMG) === true) {
                    if (enemyHero && itemsEterial && itemsEterial.GetCooldown() && !enemyHero.HasModifier('modifier_item_ethereal_blade_slow')) {
                        myHero.HoldPosition();
                        return;
                    }
                }
                if (Menu.GetMultiSelectValue(Items.tinkerItems, 9) && itemsLotus && !itemsLotus.GetCooldown() && myMana >= itemsLotus.GetManaCost()) {
                    itemsLotus.CastTarget(myHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.tinkerItems, 0) && itemsBkb && !itemsBkb.GetCooldown() && myMana >= itemsBkb.GetManaCost()) {
                    itemsBkb.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.tinkerItems, 1) && itemsBlink && !itemsBlink.GetCooldown() && myHero.IsEntityInRange(enemyHero, 2500) && !myHero.IsEntityInRange(enemyHero, neadToBlink)) {
                    itemsBlink.CastPosition(mustBlinkHere);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.tinkerItems, 2) && itemsHex && !itemsHex.GetCooldown() && myMana >= itemsHex.GetManaCost() && myHero.IsEntityInRange(enemyHero, 800)) {
                    itemsHex.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.tinkerItems, 3) && itemsEterial && !itemsEterial.GetCooldown() && myMana >= itemsEterial.GetManaCost() && myHero.IsEntityInRange(enemyHero, 800)) {
                    itemsEterial.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.tinkerItems, 4) && itemsVeil && !itemsVeil.GetCooldown() && myMana >= itemsVeil.GetManaCost()) {
                    itemsVeil.CastPosition(enemyPos);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.tinkerItems, 5) && itemsShiva && !itemsShiva.GetCooldown() && myMana >= itemsShiva.GetManaCost() && myHero.IsEntityInRange(enemyHero, 900)) {
                    itemsShiva.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.tinkerItems, 6) && itemsNufflier && !itemsNufflier.GetCooldown() && myMana >= itemsNufflier.GetManaCost() && myHero.IsEntityInRange(enemyHero, 600)) {
                    itemsNufflier.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.tinkerItems, 7) && itemsDagon && !itemsDagon.GetCooldown() && myMana >= itemsDagon.GetManaCost() && myHero.IsEntityInRange(enemyHero, 700)) {
                    itemsDagon.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.tinkerItems, 8) && itemsAtos && !itemsAtos.GetCooldown() && myMana >= itemsAtos.GetManaCost()) {
                    itemsAtos.CastTarget(enemyHero);
                    return;
                }
                let tinkerBonus = myHero.GetAbility('special_bonus_cast_range_125');
                let RangeFirst = FirstSkill.GetCastRange();
                let RangeSecond = SecondSkill.GetCastRange();
                let linza = myHero.GetItem(`item_aether_lens`, true);
                if (tinkerBonus) {
                    RangeFirst = RangeFirst + 125;
                }
                if (FirstSkill && linza) {
                    RangeFirst = RangeFirst + 250;
                }
                //Skills
                if (Menu.GetMultiSelectValue(Items.tinkerfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, RangeFirst)) {
                    FirstSkill.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.tinkerfirstSkill, 1) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 2000)) {
                    SecondSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.tinkerfirstSkill, 2) && enemyHero && ThirdSkill && !ThirdSkill.GetCooldown() && myMana >= ThirdSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 950)) {
                    ThirdSkill.CastPosition(myPos);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.tinkerfirstSkill, 4) && itemsSoulRing && !itemsSoulRing.GetCooldown() && myMana >= itemsSoulRing.GetManaCost()) {
                    itemsSoulRing.CastNoTarget();
                    return;
                }
                if (Engine.OnceAt(TimeToRearm)) {
                    if (UltimateSkill && myMana >= UltimateSkill.GetManaCost() && !UltimateSkill.IsChannelling() && time >= nextTick) {
                        if (Items.TinkerChecker(myHero, myMana, SecondSkill, ThirdSkill, FirstSkill)) {
                            UltimateSkill.CastNoTarget();
                            nextTick = time + TimeToRearm;
                            return;
                        }
                    }
                }
            }
        }
    }
    Items.Tinkers = Tinkers;
    function Windrunner(myHero, enemyHero, myPos, myMana, enemyPos) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_windrunner') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        if (Menu.GetValue(Items.windranerAutoFirst) === true) {
            let FirstSave = myHero.GetAbility('windrunner_windrun');
            let myCurHp = myHero.GetHealth();
            let myHP = myHero.GetMaxHealth();
            let hpFromMenu = parseInt(Menu.GetValue(windrunHpChange).toString());
            let persentHP = hpFromMenu / 100 * myHP;
            if (myCurHp <= persentHP && FirstSave) {
                if (FirstSave && !FirstSave.GetCooldown() && myMana >= FirstSave.GetManaCost()) {
                    FirstSave.CastNoTarget();
                    return;
                }
            }
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.windrunnerisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (Engine.OnceAt(0.25)) {
                //Skills
                let FirstSkill = myHero.GetAbility('windrunner_shackleshot');
                let ThirdSkill = myHero.GetAbility('windrunner_windrun');
                let UltimateSkill = myHero.GetAbility('windrunner_focusfire');
                let itemsBlink = myHero.GetItem('item_blink', true);
                //Branch Combo
                let itemBranch = myHero.GetItem('item_branches', true);
                if (Menu.GetValue(Items.windranerbranchCombo) === true && itemBranch) {
                    if (itemsBlink && !itemsBlink.GetCooldown() && enemyHero.IsEntityInRange(myHero, 1400)) {
                        itemsBlink.CastPosition(enemyPos);
                        return;
                    }
                    if (ThirdSkill && !ThirdSkill.GetCooldown() && enemyHero.IsEntityInRange(myHero, 900)) {
                        ThirdSkill.CastNoTarget();
                        return;
                    }
                    let myPos = myHero.GetAbsOrigin();
                    //let menuVal = ;
                    let predictedPos = (myPos.sub(enemyPos).Normalized().Scaled(-100));
                    let blinkPos = enemyPos.add(predictedPos);
                    if (itemBranch && enemyHero.IsEntityInRange(myHero, 350)) {
                        itemBranch.CastPosition(blinkPos);
                    }
                    if (FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost()) {
                        FirstSkill.CastTarget(enemyHero);
                        return;
                    }
                }
                Items.ItemUsage(myHero, enemyHero, myPos, myMana);
                if (Menu.GetMultiSelectValue(Items.windrunnerfirstSkill, 1) && enemyHero && ThirdSkill && myMana >= ThirdSkill.GetManaCost() && !ThirdSkill.GetCooldown() && myHero.IsEntityInRange(enemyHero, 950)) {
                    ThirdSkill.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.windrunnerfirstSkill, 2) && enemyHero && UltimateSkill && myMana >= UltimateSkill.GetManaCost() && !UltimateSkill.GetCooldown() && myHero.IsEntityInRange(enemyHero, 950)) {
                    UltimateSkill.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.windrunnerfirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 950)) {
                    FirstSkill.CastTarget(enemyHero);
                    return;
                }
                return;
            }
        }
    }
    Items.Windrunner = Windrunner;
    function Linacombo(myHero, enemyHero, myPos, myMana, enemyPos) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_lina') {
            return;
        }
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        //Skills
        let FirstSkill = myHero.GetAbility('lina_dragon_slave');
        let SecondSkill = myHero.GetAbility('lina_light_strike_array');
        let UltimateSkill = myHero.GetAbility('lina_laguna_blade');
        //Range Skills
        let RangeFirst = FirstSkill.GetCastRange();
        let RangeSecond = FirstSkill.GetCastRange();
        //Range Eul
        let RangeEusl = 575;
        //Health
        let enemyHealth = enemyHero.GetHealth();
        let enemyRegen = enemyHero.GetHealthRegen() * 2;
        //Kill Steal
        if (Menu.GetMultiSelectValue(Items.linaenableKillSteal, 0) || Menu.GetMultiSelectValue(Items.linaenableKillSteal, 1)) {
            let currentDragonDamage = FirstSkill.GetDamage() * enemyHero.GetMagicalArmorDamageMultiplier();
            let currentUltiDamage = UltimateSkill.GetLevelSpecialValueFor('damage') * enemyHero.GetMagicalArmorDamageMultiplier();
            //console.log(RangeFirst);
            if (myHero.HasAghanimScepter() === true) {
                currentUltiDamage = UltimateSkill.GetLevelSpecialValueFor('damage');
            }
            if (Menu.GetMultiSelectValue(Items.linaenableKillSteal, 0) && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && (enemyHealth + enemyRegen) <= currentDragonDamage && enemyHero.IsEntityInRange(myHero, RangeFirst)) {
                FirstSkill.CastPosition(enemyPos);
                return;
            }
            if (Menu.GetMultiSelectValue(Items.linaenableKillSteal, 1) && UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost() && (enemyHealth + enemyRegen) <= currentUltiDamage && enemyHero.IsEntityInRange(myHero, RangeSecond)) {
                UltimateSkill.CastTarget(enemyHero);
                return;
            }
        }
        //Euls Combo
        if (Menu.GetValue(Items.linaeulCombo) === true) {
            if (Menu.IsKeyDown(Items.linaeulComboKey)) {
                let itemsEul = myHero.GetItem('item_cyclone', true);
                if (itemsEul && !itemsEul.GetCooldown() && myMana >= itemsEul.GetManaCost() && enemyHero.IsEntityInRange(myHero, RangeEusl)) {
                    itemsEul.CastTarget(enemyHero);
                    return;
                }
                if (SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && itemsEul && itemsEul.SecondsSinceLastUse() >= 1.7 && itemsEul.SecondsSinceLastUse() <= 1.8) {
                    SecondSkill.CastPosition(enemyPos);
                    return;
                }
            }
        }
        if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.linaisEnabledOption) === true) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            //Skills
            if (Menu.GetMultiSelectValue(Items.linafirstSkill, 0) && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 950) && !enemyHero.HasModifier('modifier_eul_cyclone')) {
                FirstSkill.CastPosition(enemyPos);
                return;
            }
            if (Menu.GetMultiSelectValue(Items.linafirstSkill, 1) && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && myHero.IsEntityInRange(enemyHero, 950) && !enemyHero.HasModifier('modifier_eul_cyclone')) {
                SecondSkill.CastPosition(enemyPos);
                return;
            }
        }
    }
    Items.Linacombo = Linacombo;
    function PudgeCombo(myHero, enemyHero, myPos, myMana) {
        if (!myHero) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_pudge') {
            return;
        }
        if (!Menu.GetValue(Items.PudgeEnableCombo) === true) {
            return;
        }
        //let fontNoww = parseInt(Menu.GetValue(optionHeroPudgeBlinkMinRange).toString());
        let Q = myHero.GetAbilityByIndex(0);
        let W = myHero.GetAbilityByIndex(1);
        let ult = myHero.GetAbility('pudge_dismember');
        let blink = myHero.GetItem('item_blink', true);
        let force = myHero.GetItem('item_force_staff', true);
        let maxInitRange = 0;
        let enemy = enemyHero;
        if (Menu.GetMultiSelectValue(Items.optionHeroPudgeHookCombo, 0)) {
            //let hookPredictions = Q.GetCastPoint() + myHero.GetTimeToFace(enemy) + (enemy.GetAbsOrigin().sub(myHero.GetAbsOrigin().Length2D() / 1450)) + (NetChannel.GetAvgLatencyMs(Enum.Flow.FLOW_OUTGOING) * 2);
            let enemyPos = enemy.GetAbsOrigin();
            let newCastPoint = Q.GetCastPoint();
            let newTimeToFace = myHero.GetTimeToFace(enemy);
            let firstSecondTrird = newCastPoint + newTimeToFace;
            let distBetween = (myPos.sub(enemyPos).Length2D());
            //let neadtoTest = FirstSkill.GetLevelSpecialValueFor('projectile_speed');
            let timeToHit = distBetween / 1450;
            let hookPredictions = firstSecondTrird + timeToHit;
            let sdfsdcvd = Items.GetPredictedPosition(enemy, hookPredictions);
            Renderer.DrawWorldLine(enemyPos, sdfsdcvd, 0);
        }
        /*       if (Menu.GetValue(Items.PudgeKillstill) === true) {
           Items.PudgeKillstilll(myHero, myMana, enemy, Q)
       }

       if (Menu.GetValue(Items.PudgeCancelTP) === true) {
           Items.PudgeCancelTPP(myHero, myMana, enemy, Q)
       }*/
        if (Menu.GetValue(Items.optionHeroPudgeFarm) === true) {
            Items.PudgeAutoFarm(myHero, myMana, enemy, W);
        }
        //Items.ItemUsage(myHero, enemyHero, myPos, myMana);
        /*       Items.PudgeHookTargetIndicatorDel(myHero);*/
        if (blink && !blink.GetCooldown()) {
            maxInitRange = maxInitRange + 1200;
        }
        if (force && !force.IsCastable(myMana)) {
            maxInitRange = maxInitRange + 600;
        }
        if (enemy) {
            if (enemy.HasModifier('modifier_pudge_meat_hook')) {
                maxInitRange = 0;
            }
        }
        if (Q && Q.SecondsSinceLastUse() > -1 && Q.SecondsSinceLastUse() < 0.5) {
            maxInitRange = 0;
        }
        /*        if (Items.PudgeRotComboActivation && !Menu.IsKeyDown(Items.GDMComboKey)) {
                    if (W.GetToggleState()) {
                        let checkEnemies = false;


                        let npcs = myHero.GetHeroesInRadius(500, Enum.TeamType.TEAM_ENEMY);
                        for (let index = 0; index < npcs.length; index++) {
                            const npc = npcs[index];

                            if (npc && npc.IsHero() && npc.IsAlive() && !npc.IsIllusion()) {
                                cheakEnemies = true;
                                break
                            }
                        }

                        if (myHero.GetHealth() / myHero.GetMaxHealth() < 0.2) {
                            checkEnemies = false
                        }

                        if (!checkEnemies) {
                            if (GameRules.GetGameTime() > Items.PudgeRotComboDeactivation) {
                                W.Toggle();
                                Items.PudgeRotComboActivation = false;
                                Items.PudgeRotComboDeactivation = GameRules.GetGameTime() + NetChannel.GetAvgLatencyMs(Enum.Flow.FLOW_OUTGOING) + NetChannel.GetAvgLatencyMs(Enum.Flow.FLOW_INCOMING) + 0.25;
                                return
                            }
                        }
                    }
                }*/
        Items.PudgeHookTarget = enemy;
        Items.PudgeHookHit = false;
        if (Menu.GetValue(Items.optionHeroPudgeHook) === true) {
            if (Menu.IsKeyDown(Items.optionHeroPudgeHookKey)) {
                Items.PudgeHookCombo(myHero, myMana, enemy, Q, W, ult, enemyHero, myPos);
            }
        }
        if (enemy && myHero.IsEntityInRange(enemy, 3000)) {
            if (Menu.IsKeyDown(Items.GDMComboKey) && enemy.IsAlive()) {
                //let fontNoww = parseInt(Menu.GetValue(optionHeroPudgeBlinkMinRange).toString());
                if (maxInitRange > 1200) {
                    if (!myHero.IsEntityInRange(enemy, 1200)) {
                        if (myHero.IsEntityInRange(enemy, 1750)) {
                            let pred = 600 / 1500 + (NetChannel.GetAvgLatencyMs(Enum.Flow.FLOW_OUTGOING) * 2);
                            let predPos = Items.GetPredictedPosition(enemy, pred);
                            if (Items.AmIFacingPos(myHero, predPos, 10) === true) {
                                if (force && !force.GetCooldown()) {
                                    force.CastTarget(myHero);
                                    return;
                                }
                            }
                        }
                        if (blink && !blink.GetCooldown() && !myHero.HasModifier('modifier_item_forcestaff_active') && !enemy.HasModifier('modifier_pudge_meat_hook')) {
                            blink.CastPosition(enemy.GetAbsOrigin());
                        }
                        else if (blink && !blink.GetCooldown()) {
                            if (!myHero.HasModifier('modifier_item_forcestaff_active') && !enemy.HasModifier('modifier_pudge_meat_hook')) {
                                blink.CastPosition(enemy.GetAbsOrigin());
                                Items.lastTick = GameRules.GetGameTime() + NetChannel.GetAvgLatencyMs(Enum.Flow.FLOW_INCOMING);
                                return;
                            }
                        }
                    }
                }
                if (maxInitRange == 1200) {
                    if (myHero.IsEntityInRange(enemy, 1200)) {
                        if (blink && !blink.GetCooldown() && !myHero.HasModifier('modifier_item_forcestaff_active') && !enemy.HasModifier('modifier_pudge_meat_hook')) {
                            blink.CastPosition(enemy.GetAbsOrigin());
                            Items.lastTick = GameRules.GetGameTime() + NetChannel.GetAvgLatencyMs(Enum.Flow.FLOW_INCOMING);
                            return;
                        }
                    }
                }
                if (maxInitRange == 800) {
                    if (myHero.IsEntityInRange(enemy, 800)) {
                        let pred = 600 / 1500 + (NetChannel.GetAvgLatencyMs(Enum.Flow.FLOW_OUTGOING) * 2);
                        let predPos = Items.GetPredictedPosition(enemy, pred);
                        if (Items.AmIFacingPos(myHero, predPos, 5)) {
                            force.CastTarget(myHero);
                            Items.lastTick = GameRules.GetGameTime() + 600 / 1500 + NetChannel.GetAvgLatencyMs(Enum.Flow.FLOW_OUTGOING);
                            return;
                        }
                    }
                }
                let ethereal = myHero.GetItem('item_ethereal_blade', true);
                if (enemy && ethereal && !ethereal.GetCooldown() && ethereal.IsCastable(myMana)) {
                    ethereal.CastTarget(enemy);
                    return;
                }
                if (W && myHero.IsEntityInRange(enemy, 350) && !W.GetToggleState()) {
                    if (GameRules.GetGameTime() > Items.PudgeHookRotDelayer) {
                        W.Toggle();
                        Items.PudgeRotComboActivation = true;
                        Items.PudgeHookRotDelayer = GameRules.GetGameTime() + 0.2;
                        return;
                    }
                }
                let soulring = myHero.GetItem('item_soul_ring', true);
                if (soulring && !soulring.GetCooldown() && soulring.IsCastable(myMana)) {
                    soulring.CastNoTarget();
                    return;
                }
                if (ult && ult.IsCastable(myMana)) {
                    if (!enemy.HasState(Enum.ModifierState.MODIFIER_STATE_HEXED) && !enemy.HasState(Enum.ModifierState.MODIFIER_STATE_STUNNED)) {
                        ult.CastTarget(enemy);
                        Items.lastTick = GameRules.GetGameTime() + 0.5;
                        return;
                    }
                }
                /*                if (Items.PudgeHookCanceller(myHero, enemy)) {
                                    let hubabuba = EntitySystem.GetLocalPlayer();
                                    hubabuba.HoldPosition(myHero);
                                    Items.PudgeHookStartTimer = 0;
                                    Items.lastTick = 0;
                                    Items.PudgeHookTargetedPos = null;
                                    return
                                }*/
                let stringComboMaxRange = parseInt(Menu.GetValue(Items.optionHeroPudgeHookComboMaxRange).toString());
                if (Menu.GetMultiSelectValue(Items.optionHeroPudgeHookCombo, 0) && ult.SecondsSinceLastUse() > 3 && !myHero.HasModifier('modifier_item_forcestaff_active')) {
                    if (Q && Q.IsCastable(myMana) && myHero.IsEntityInRange(enemy, stringComboMaxRange) && !myHero.IsChannellingAbility()) {
                        if (Items.PudgeHookCollisionChecker(myHero, enemy) && !Items.PudgeHookJukingChecker(myHero, enemy)) {
                            //let hookPrediction = Q.GetCastPoint() + myHero.GetTimeToFace(enemy) + (enemy.GetAbsOrigin().sub(myHero.GetAbsOrigin().Length2D() / 1450)) + (NetChannel.GetAvgLatencyMs(Enum.Flow.FLOW_OUTGOING) * 2);
                            let enemyPos = enemy.GetAbsOrigin();
                            let newCastPoint = Q.GetCastPoint();
                            let newTimeToFace = myHero.GetTimeToFace(enemy);
                            let firstSecondTrird = newCastPoint + newTimeToFace;
                            let distBetween = (myPos.sub(enemyPos).Length2D());
                            let timeToHit = distBetween / 1450;
                            let hookPredictions = firstSecondTrird + timeToHit;
                            let hookPredictedPos = Items.GetPredictedPosition(enemy, hookPredictions);
                            Q.CastPosition(myHero.GetAbsOrigin().add(hookPredictedPos.sub(myHero.GetAbsOrigin().Normalized().Scaled(500))));
                            Items.PudgeHookStartTimer = GameRules.GetGameTime() + NetChannel.GetAvgLatencyMs(Enum.Flow.FLOW_OUTGOING) + Items.TimeToFacePosition(myHero, hookPredictedPos);
                            Items.PudgeHookTargetedPos = hookPredictedPos;
                            Items.lastTick = GameRules.GetGameTime() + 0.3;
                            return;
                        }
                    }
                }
                let check = false;
                if (maxInitRange >= 600) {
                    if (myHero.IsEntityInRange(enemy, 725)) {
                        if (!myHero.IsEntityInRange(enemy, 550)) {
                            check = true;
                        }
                    }
                }
                if (ult && ult.IsCastable(myMana)) {
                    if (force && force.SecondsSinceLastUse() > -1 && force.SecondsSinceLastUse() < 1) {
                        check = true;
                    }
                    if (blink && blink.SecondsSinceLastUse() > -1 && blink.SecondsSinceLastUse() < 0.5) {
                        check = true;
                    }
                }
                let attCheck = false;
                if (ult && ult.IsCastable(myMana)) {
                    if (force && force.SecondsSinceLastUse() > -1 && force.SecondsSinceLastUse() < 1) {
                        check = true;
                    }
                    if (blink && blink.SecondsSinceLastUse() > -1 && blink.SecondsSinceLastUse() < 0.5) {
                        check = true;
                    }
                }
            }
        }
    }
    Items.PudgeCombo = PudgeCombo;
    function PudgeAutoFarm(myHero, myMana, enemy, W) {
        if (myHero.GetUnitName() !== 'npc_dota_hero_pudge') {
            return;
        }
        if (!myHero) {
            return;
        }
        ;
        if (!W) {
            return;
        }
        ;
        if (W.GetLevel() < 1) {
            return;
        }
        ;
        if (myHero.HasState(Enum.ModifierState.MODIFIER_STATE_INVISIBLE)) {
            return;
        }
        if (myHero.IsChannellingAbility()) {
            return;
        }
        if (GameRules.GetGameTime() < Items.PudgeRotFarmToggledTime) {
            return;
        }
        if (Items.PudgeRotFarmToggled && !W.GetToggleState()) {
            Items.PudgeRotFarmToggled = false;
            return;
        }
        ;
        let nowWeNow = parseInt(Menu.GetValue(Items.optionHeroPudgeFarmHP).toString());
        if (myHero.GetHealth() / myHero.GetMaxHealth() < nowWeNow / 100) {
            if (W.GetToggleState() && Items.PudgeRotFarmToggled) {
                W.Toggle();
                Items.PudgeRotFarmToggled = false;
                Items.PudgeRotFarmToggledTime = GameRules.GetGameTime() + 0.2 + NetChannel.GetAvgLatencyMs(Enum.Flow.FLOW_OUTGOING);
                return;
            }
            else
                return;
        }
        let rotDamage = W.GetLevelSpecialValueFor("rot_damage");
        let BonusAbillity = myHero.GetAbility("special_bonus_unique_pudge_2");
        if (myHero.HasAbility("special_bonus_unique_pudge_2")) {
            if (BonusAbillity.GetLevel() > 0) {
                rotDamage = rotDamage + 35;
            }
        }
        if (myHero.GetUnitsInRadius(240, Enum.TeamType.TEAM_ENEMY) < 1) {
            if (W.GetToggleState() && Items.PudgeRotFarmToggled) {
                W.Toggle();
                Items.PudgeRotFarmToggled = false;
                Items.PudgeRotFarmToggledTime = GameRules.GetGameTime() + 0.2 + NetChannel.GetAvgLatencyMs(Enum.Flow.FLOW_OUTGOING);
                return;
            }
            ;
        }
        ;
        let creepsArround = myHero.GetUnitsInRadius(240, Enum.TeamType.TEAM_ENEMY);
        for (let i = 1; creepsArround.length; i++) {
            let creeps = creepsArround[i];
            if (creeps && creeps.IsNPC() && !creeps.IsHero() && creeps.IsAlive() && creeps.IsDormant() && !creeps.IsWaitingToSpawn() && creeps.GetUnitName() !== "npc_dota_neutral_caster" && creeps.IsCreep() && creeps.GetUnitName() !== null && creeps.IsKillable()) {
                let rotTrueDamage = ((1 - creeps.GetMagicalArmorValue()) * rotDamage + rotDamage * (myHero.GetIntellectTotal() / 14 / 100)) / 4;
                if (creeps.GetHealth() < rotTrueDamage) {
                    if (W.GetToggleState()) {
                        W.Toggle();
                        Items.PudgeRotFarmToggled = true;
                        Items.PudgeRotFarmToggledTime = GameRules.GetGameTime() + 0.2 + NetChannel.GetAvgLatencyMs(Enum.Flow.FLOW_OUTGOING);
                        return;
                    }
                    else if (W.GetToggleState() && Items.PudgeRotFarmToggled) {
                        W.Toggle();
                        Items.PudgeRotFarmToggled = false;
                        Items.PudgeRotFarmToggledTime = GameRules.GetGameTime() + 0.2 + NetChannel.GetAvgLatencyMs(Enum.Flow.FLOW_OUTGOING);
                        return;
                    }
                }
                else if (W.GetToggleState() && Items.PudgeRotFarmToggled) {
                    W.Toggle();
                    Items.PudgeRotFarmToggled = false;
                    Items.PudgeRotFarmToggledTime = GameRules.GetGameTime() + 0.2 + NetChannel.GetAvgLatencyMs(Enum.Flow.FLOW_OUTGOING);
                    return;
                }
            }
        }
        return;
    }
    Items.PudgeAutoFarm = PudgeAutoFarm;
    function PudgeHookCombo(myHero, myMana, enemy, Q, W, ult, enemyHero, myPos) {
        if (myHero.GetUnitName() !== 'npc_dota_hero_pudge') {
            return;
        }
        if (!myHero) {
            return;
        }
        if (!Q) {
            return;
        }
        if (Q.GetLevel() < 1) {
            return;
        }
        Items.PudgeHookHitTracker(myHero, Q);
        let soulring = myHero.GetItem("item_soul_ring", true);
        if (soulring && soulring.IsReady() && soulring.IsCastable(myMana)) {
            soulring.CastNoTarget();
            return;
        }
        if (Items.PudgeHookTarget) {
            if (Q.SecondsSinceLastUse() >= 3) {
                Items.PudgeHookHit = false;
            }
            if (Items.PudgeHookTarget.HasModifier('modifier_pudge_meat_hook')) {
                Items.PudgeHookHit = true;
            }
        }
        if (Items.PudgeHookHit === true) {
            Items.ItemUsage(myHero, enemyHero, myPos, myMana);
        }
        let hookRange = Q.GetCastRange();
        //let pred = Q.GetCastPoint() + myHero.GetTimeToFace(enemy) + (enemy.GetAbsOrigin().sub(myHero.GetAbsOrigin()).Length2D() / 1450) + (NetChannel.GetAvgLatencyMs(Enum.Flow.FLOW_OUTGOING) * 2)
        let enemyPos = enemy.GetAbsOrigin();
        let newCastPoint = Q.GetCastPoint();
        let newTimeToFace = myHero.GetTimeToFace(enemy);
        let firstSecondTrird = newCastPoint + newTimeToFace;
        let distBetween = (myPos.sub(enemyPos).Length2D());
        let timeToHit = distBetween / 1450;
        let pred = firstSecondTrird + timeToHit;
        let predPos = Items.GetPredictedPosition(enemy, pred);
        if (!myHero.IsPositionInRange(predPos, hookRange + 100, 20)) {
            return;
        }
        let atos = myHero.GetItem('item_rod_of_atos', true);
        if (Q && Q.IsCastable(myMana) && !myHero.IsChannellingAbility()) {
            if (Items.PudgeHookCanceller(myHero, enemy) === true) {
                let hubabuba = EntitySystem.GetLocalPlayer();
                hubabuba.HoldPosition(myHero, false);
                Items.PudgeHookTarget = null;
                Items.PudgeHookStartTimer = 0;
                Items.PudgeHookDelayer = 0;
                Items.PudgeHookTargetedPos = null;
                return;
            }
            if (!Items.PudgeHookJukingChecker(myHero, enemy)) {
                if (Items.PudgeHookCollisionChecker(myHero, enemy)) {
                    if (Items.PudgeHookTiming(myHero, enemy) > 0) {
                        let modTiming = Items.PudgeHookTiming(myHero, enemy) + 0.1;
                        //let hookTiming = Q.GetCastPoint() + myHero.GetTimeToFace(enemy) + ((enemy.GetAbsOrigin().sub(myHero.GetAbsOrigin()).Length2D() - 125) / 1450) + NetChannel.GetAvgLatencyMs(Enum.Flow.FLOW_OUTGOING)
                        if (GameRules.GetGameTime() >= modTiming - pred) {
                            Q.CastPosition(predPos);
                            Items.PudgeHookStartTimer = GameRules.GetGameTime() + NetChannel.GetAvgLatencyMs(Enum.Flow.FLOW_OUTGOING) + Items.TimeToFacePosition(myHero, predPos);
                            Items.PudgeHookDelayer = GameRules.GetGameTime() + 0.35 + NetChannel.GetAvgLatencyMs(Enum.Flow.FLOW_OUTGOING) + Items.TimeToFacePosition(myHero, predPos);
                            return;
                        }
                    }
                    if (atos && atos.IsCastable(myMana) && myHero.IsEntityInRange(enemy, 1150) && !enemy.HasState(Enum.ModifierState.MODIFIER_STATE_MAGIC_IMMUNE) && !enemy.IsLinkensProtected()) {
                        atos.CastTarget(enemy);
                        Items.PudgeHookTarget = enemy;
                        return;
                    }
                    if (atos && atos.SecondsSinceLastUse() > -1 && atos.SecondsSinceLastUse() < (myHero.GetAbsOrigin().sub(enemy.GetAbsOrigin()).Length2D() / 1500) + 0.55) {
                        let atosTiming = GameRules.GetGameTime() - Math.max(atos.SecondsSinceLastUse(), 0) + (myHero.GetAbsOrigin().sub(enemy.GetAbsOrigin()).Length2D() / 1500) + NetChannel.GetAvgLatencyMs(Enum.Flow.FLOW_OUTGOING) - 0.1;
                        if (GameRules.GetGameTime() >= atosTiming) {
                            Q.CastPosition(enemy.GetAbsOrigin());
                            Items.PudgeHookStartTimer = GameRules.GetGameTime() + NetChannel.GetAvgLatencyMs(Enum.Flow.FLOW_OUTGOING) + Items.TimeToFacePosition(myHero, predPos);
                            Items.PudgeHookDelayer = GameRules.GetGameTime() + 0.35 + NetChannel.GetAvgLatencyMs(Enum.Flow.FLOW_OUTGOING) + Items.TimeToFacePosition(myHero, predPos);
                            return;
                        }
                    }
                    Q.CastPosition(predPos);
                    Items.PudgeHookStartTimer = GameRules.GetGameTime() + NetChannel.GetAvgLatencyMs(Enum.Flow.FLOW_OUTGOING) + Items.TimeToFacePosition(myHero, predPos);
                    Items.PudgeHookDelayer = GameRules.GetGameTime() + 0.35 + NetChannel.GetAvgLatencyMs(Enum.Flow.FLOW_OUTGOING) + Items.TimeToFacePosition(myHero, predPos);
                    Items.PudgeHookTargetedPos = predPos;
                }
            }
        }
        /*
                    if (Items.PudgeHookForceStaffFun(myHero, myMana, enemy, enemyHero, Q) === true) {


                        let targetRotation = enemy.GetRotation().GetForward();
                        let targetForcedPos = enemy.GetAbsOrigin().add(targetRotation).Normalized().Scaled(600);
                        let itemForceFuuun = myHero.GetItem('item_force_staff', true);
                        itemForceFuuun.CastTarget(enemy);
                        Items.PudgeHookTarget = enemy;
                        Q.CastPosition(myHero.GetAbsOrigin().add(targetForcedPos - myHero.GetAbsOrigin()).Normalized().Scaled(500));
                        Items.PudgeHookStartTimer = GameRules.GetGameTime() + NetChannel.GetAvgLatencyMs(Enum.Flow.FLOW_OUTGOING) + Items.TimeToFacePosition(myHero, targetForcedPos);
                        Items.PudgeHookDelayer = GameRules.GetGameTime() + 0.35 + NetChannel.GetAvgLatencyMs(Enum.Flow.FLOW_OUTGOING) + Items.TimeToFacePosition(myHero, targetForcedPos);
                        return

                    }


                if (!myHero.IsSameTeam(enemy)) {
                    if (ult && ult.IsCastable(myMana) && Menu.GetValue(Items.optionHeroPudgeHookUlt) === true) {
                        if (!enemy.HasState(Enum.ModifierState.MODIFIER_STATE_HEXED) && !enemy.HasState(Enum.ModifierState.MODIFIER_STATE_STUNNED)) {
                            /!*                    if (GameRules.GetGameTime() > Items.PudgeHookDelayer) {*!/
                            if (myHero.IsEntityInRange(enemy, ult.GetCastRange())) {
                                ult.CastTarget(enemy);
                                Items.PudgeHookDelayer = GameRules.GetGameTime() + 0.3;
                                return
                            }

                        }
                    }
                }


                if (W && W.IsReady() && myHero.IsEntityInRange(enemy, 250) && !W.GetToggleState() && Menu.GetValue(Items.optionHeroPudgeHookRot) === true) {
                    if (GameRules.GetGameTime() > Items.PudgeHookRotDelayer) {
                        W.Toggle();
                        Items.PudgeHookRotDelayer = GameRules.GetGameTime() + 0.25;
                        return
                    }
                }*/
    }
    Items.PudgeHookCombo = PudgeHookCombo;
    function PudgeHookTiming(myHero, target) {
        if (myHero.GetUnitName() !== 'npc_dota_hero_pudge') {
            return;
        }
        ;
        if (!myHero) {
            return 0;
        }
        ;
        if (!target) {
            return 0;
        }
        ;
        let invulnerabilityList = [
            "modifier_eul_cyclone",
            "modifier_obsidian_destroyer_astral_imprisonment_prison",
            "modifier_shadow_demon_disruption",
            "modifier_invoker_tornado"
        ];
        let searchMod = null;
        for (let i of invulnerabilityList) {
            if (target.HasModifier(i)) {
                searchMod = target.GetModifier(i);
                break;
            }
        }
        if (!searchMod) {
            return 0;
        }
        let timing = 0;
        if (searchMod) {
            let dieTime = searchMod.GetDieTime();
            timing = dieTime;
        }
        ;
        return timing;
    }
    Items.PudgeHookTiming = PudgeHookTiming;
    function PudgeHookForceStaffFun(myHero, myMana, enemy, enemyHero, Q) {
        if (myHero.GetUnitName() !== 'npc_dota_hero_pudge') {
            return;
        }
        ;
        if (!myHero) {
            return false;
        }
        ;
        if (!enemy) {
            return false;
        }
        ;
        if (enemy.HasState(Enum.ModifierState.MODIFIER_STATE_MAGIC_IMMUNE)) {
            return false;
        }
        ;
        if (Menu.GetValue(Items.optionHeroPudgeHookStaff) === true) {
            return false;
        }
        ;
        if (!Q) {
            return false;
        }
        ;
        if (myHero.IsChannelling() === true) {
            return false;
        }
        ;
        if (!myHero.IsEntityInRange(enemy, 750)) {
            return false;
        }
        if (Items.PudgeHookJukingChecker(myHero, enemy) === true) {
            return false;
        }
        let force = myHero.GetItem('item_force_staff', true);
        if (!force) {
            return false;
        }
        if (force.IsCastable(myMana)) {
            return false;
        }
        let targetTurnTime90 = (0.03 * Math.PI) / enemy.GetTurnRate() / 3.5;
        if (enemy.GetTimeToFace(myHero) > targetTurnTime90) {
            return false;
        }
        ;
        let targetRotation = enemy.GetRotation().GetForward();
        let targetForcedPos = enemy.GetAbsOrigin().sub(targetRotation).Normalized().Scaled(600);
        if (Items.PudgeHookCollisionCheckerPosition(myHero, targetForcedPos, enemy) === true) {
            return false;
        }
        let hookRange = Q.GetCastRange();
        if (myHero.GetAbsOrigin().sub(targetForcedPos).Length2D() > hookRange) {
            return false;
        }
        return true;
    }
    Items.PudgeHookForceStaffFun = PudgeHookForceStaffFun;
    function PudgeHookCollisionCheckerPosition(myHero, pos, enemy) {
        if (myHero.GetUnitName() !== 'npc_dota_hero_pudge') {
            return;
        }
        if (!myHero) {
            return false;
        }
        if (!pos) {
            return false;
        }
        let searchRadius = 100;
        let distance = myHero.GetAbsOrigin().sub(pos).Length2D();
        for (let i = 1; Math.floor(distance / searchRadius); i++) {
            let checkVec = pos.sub(myHero.GetAbsOrigin()).Normalized();
            let checkPos = myHero.GetAbsOrigin().add(checkVec).Scaled(i * searchRadius);
            let unitsAround = checkPos.GetUnitsInRadius(searchRadius, Enum.TeamType.TEAM_BOTH);
            let check = false;
            for (let i = 1; unitsAround.length; i++) {
                let npcs = unitsAround[i];
                if (npcs && npcs.IsNPC() && npcs !== enemy && npcs !== myHero && npcs.IsAlive() && !npcs.IsDormant() && !npcs.IsStructure() && !npcs.IsBarracks() && !npcs.IsWaitingToSpawn() && npcs.GetUnitName() !== "npc_dota_neutral_caster" && npcs.GetUnitName() !== null) {
                    check = true;
                    break;
                }
            }
            if (check) {
                return false;
            }
            return true;
        }
    }
    Items.PudgeHookCollisionCheckerPosition = PudgeHookCollisionCheckerPosition;
    function PudgeHookHitTracker(myHero, Q) {
        if (myHero.GetUnitName() === 'npc_dota_hero_pudge') {
            return;
        }
        if (!myHero) {
            return;
        }
        if (!Q) {
            return;
        }
        if (Q.SecondsSinceLastUse() <= 2 && Items.PudgeHookHit) {
            Items.PudgeHookHit = false;
        }
        if (Items.PudgeHookTarget) {
            if (Items.PudgeHookTarget.HasModifier('modifier_pudge_meat_hook')) {
                Items.PudgeHookHit = true;
            }
        }
        return;
    }
    Items.PudgeHookHitTracker = PudgeHookHitTracker;
    function PudgeHookJukingChecker(myHero, target) {
        if (myHero.GetUnitName() !== 'npc_dota_hero_pudge') {
            return;
        }
        if (!myHero) {
            return false;
        }
        if (!target) {
            return false;
        }
        if (!target.IsRunning()) {
            return false;
        }
        let turning = target.IsTurning();
        let check = false;
        if (target.IsRunning()) {
            if (target.IsRunning()) {
                Items.rotationTable.unshift(turning);
                if (Items.rotationTable.length > Menu.GetValue(Items.optionHeroPudgeHookJuke)) {
                    Items.rotationTable.pop();
                }
            }
        }
        if (Items.rotationTable.length < Menu.GetValue(Items.optionHeroPudgeHookJuke)) {
            return true;
        }
        else
            for (let i = 1; Items.rotationTable.length; i++) {
                if (Items.rotationTable[i] === true) {
                    check = true;
                    break;
                }
            }
        if (check) {
            return true;
        }
        return;
    }
    Items.PudgeHookJukingChecker = PudgeHookJukingChecker;
    function PudgeHookCollisionChecker(myHero, target) {
        if (myHero.GetUnitName() !== 'npc_dota_hero_pudge') {
            return;
        }
        if (!myHero) {
            return false;
        }
        if (!target) {
            return false;
        }
        let myPos = myHero.GetAbsOrigin();
        let enemyPos = target.GetAbsOrigin();
        let newCastPoint = 0.3;
        let newTimeToFace = myHero.GetTimeToFace(target);
        let firstSecondTrird = newCastPoint + newTimeToFace;
        let distBetween = (myPos.sub(enemyPos).Length2D());
        let timeToHit = distBetween / 1450;
        let hookPredictions = firstSecondTrird + timeToHit;
        let predPos = Items.GetPredictedPosition(target, hookPredictions);
        let searchRadius = 125;
        let distance = myHero.GetAbsOrigin().sub(predPos).Length2D();
        let bbqqbbqq = distance / searchRadius;
        let checkVec = predPos.sub(myHero.GetAbsOrigin()).Normalized();
        let checkPos = myHero.GetAbsOrigin().add(checkVec.Scaled(bbqqbbqq * searchRadius));
        let unitsAround = myHero.GetUnitsInRadius(1500, Enum.TeamType.TEAM_BOTH);
        let check = false;
        for (let unit = 0; unit < unitsAround.length; unit++) {
            let npc = unitsAround[unit];
            if (npc && npc.IsAlive() && npc.IsCreep() && !npc.IsIllusion() && npc !== target && npc !== myHero && npc.IsAlive() && !npc.IsDormant() && !npc.IsStructure() && !npc.IsWaitingToSpawn() && npc.GetUnitName() !== null) {
                let trgDister = target.GetAbsOrigin();
                let p0 = npc.GetAbsOrigin();
                let p1 = myHero.GetAbsOrigin();
                let p2 = predPos;
                let npcPos = npc.GetAbsOrigin();
                let enemyFacePos = target.GetAbsOrigin().add(myHero.GetRotation().GetForward().Normalized().Scaled(100));
                let distanceTHpos = trgDister.Distance(predPos);
                if (npcPos.Distance(enemyPos) < distanceTHpos) {
                    check = true;
                    console.log(4);
                }
                if (npcPos.Distance(enemyFacePos) < 150) {
                    check = true;
                    console.log(1);
                }
                if (p2.Distance(npcPos) < 150) {
                    check = true;
                    console.log(2);
                }
                if (p1.Distance(npcPos) < 150) {
                    check = true;
                    console.log(3);
                }
            }
        }
        /*

                            if(npc && npc.IsPositionInRange(myFacepos,100,130) || npc.IsPositionInRange(enemyFacePos,100,130) ){
                                //if (npc && npc.IsPositionInRange(checkPos,distance,searchRadius)){



                                    if (npc && npc.IsCreep() && npc !== target && npc !== myHero && npc.IsAlive() && !npc.IsDormant() && !npc.IsStructure() && !npc.IsWaitingToSpawn() && npc.GetUnitName() !== null ) {
                                        check = true;
                                        break
                                    }


                                       if(npc !== target && npc !== myHero){
                                            console.log(npc.GetUnitName());
                                            console.log(npc.IsPositionInRange(checkPos,distance,searchRadius))
                                            let npcOrg = npc.GetAbsOrigin();
                                            Renderer.DrawWorldLine(enemyPos,npcOrg,1)

                                        }

                                    }*/
        if (check === true) {
            return false;
        }
        return true;
    }
    Items.PudgeHookCollisionChecker = PudgeHookCollisionChecker;
    function PudgeHookCanceller(myHero, target) {
        if (myHero.GetUnitName() !== 'npc_dota_hero_pudge') {
            return;
        }
        if (!myHero) {
            return false;
        }
        if (!target) {
            return false;
        }
        let hook = myHero.GetAbilityByIndex(0);
        if (!hook) {
            return false;
        }
        if (hook.GetLevel() < 1) {
            return false;
        }
        let hookRange = hook.GetCastRange();
        if (Items.PudgeHookTargetedPos === null) {
            return false;
        }
        if (GameRules.GetGameTime() > Items.PudgeHookStartTimer + 0.3) {
            return false;
        }
        if (GameRules.GetGameTime() < Items.PudgeHookStartTimer + 0.06 + NetChannel.GetAvgLatencyMs(Enum.Flow.FLOW_OUTGOING)) {
            return false;
        }
        let timePassed = Math.min(GameRules.GetGameTime() - Items.PudgeHookStartTimer, 0.3);
        //let pred = (0.3 - timePassed) + (target.GetAbsOrigin().sub(myHero.GetAbsOrigin()).Length2D() / 1450) + (NetChannel.GetAvgLatencyMs(Enum.Flow.FLOW_OUTGOING) * 2);
        let myPos = myHero.GetAbsOrigin();
        let enemyPos = target.GetAbsOrigin();
        let newCastPoint = hook.GetCastPoint();
        //let newTimeToFace = myHero.GetTimeToFace(target);
        let firstSecondTrird = timePassed - newCastPoint;
        let distBetween = (myPos.sub(enemyPos).Length2D());
        let timeToHit = distBetween / 1450;
        let pred = firstSecondTrird + timeToHit;
        let predPos = Items.GetPredictedPosition(target, pred);
        if (predPos.sub(myHero.GetAbsOrigin()).Length2D() > hookRange + 80) {
            return true;
        }
        let searchRadius = 80;
        let distance = myHero.GetAbsOrigin().sub(predPos).Length2D();
        let check = false;
        for (let i = 1; Math.ceil(distance / searchRadius); i++) {
            let checkVec = Items.PudgeHookTargetedPos.sub(myHero.GetAbsOrigin()).Normalized();
            let checkPos = myHero.GetAbsOrigin().add(checkVec.Scaled(i * searchRadius));
            if (checkPos.sub(predPos).Length2D() < searchRadius) {
                check = true;
                break;
            }
        }
        if (!check) {
            return true;
        }
        return false;
    }
    Items.PudgeHookCanceller = PudgeHookCanceller;
    function KillableByHoock(myHero, enemy) {
        if (myHero.GetUnitName() !== 'npc_dota_hero_pudge') {
            return false;
        }
        if (!myHero) {
            return false;
        }
        if (!enemy) {
            return false;
        }
        if (!enemy.IsAlive()) {
            return false;
        }
        let range = 1200;
        let hook = myHero.GetAbilityByIndex(0);
        if (hook.GetLevel() < 1) {
            return false;
        }
        let enemies = myHero.GetHeroesInRadius(range, Enum.TeamType.TEAM_ENEMY);
        if (!enemies || enemies <= 0) {
            return false;
        }
        for (let index = 1; index < enemies.length; index++) {
            const npc = enemies[index];
            let enemyHPregen = npc.GetHealthRegen() * 2;
            let TargetIsKillable = hook.GetDamage() - enemyHPregen;
            if (npc.GetHealth() <= TargetIsKillable) {
                Items.killableenemy = index;
            }
            return Items.killableenemy;
        }
        return false;
    }
    Items.KillableByHoock = KillableByHoock;
    function InvoHaveSpell(myHero) {
        let firstSpell = myHero.GetAbilityByIndex(3);
        let firstname = firstSpell.GetName();
        let secondspell = myHero.GetAbilityByIndex(4);
        let secondname = secondspell.GetName();
        if (firstname || secondname === "invoker_sun_strike") {
            return true;
        }
        return false;
    }
    Items.InvoHaveSpell = InvoHaveSpell;
    function InvoPressKey(myHero, keys) {
        if (!myHero || !keys) {
            return false;
        }
        if (Items.GetInstances(myHero) == keys) {
            return true;
        }
        let Q = myHero.GetAbility('invoker_quas');
        let W = myHero.GetAbility('invoker_wex');
        let E = myHero.GetAbility('invoker_exort');
        let R = myHero.GetAbility('invoker_invoke');
        for (let i = 1; i < keys.length; i++) {
            let key = keys[i];
            if (key == "E" && !E) {
                return false;
            }
            if (key == "W" && !W) {
                return false;
            }
            if (key == "Q" && !Q) {
                return false;
            }
            if (key == "R" && !R) {
                return false;
            }
        }
        if (Engine.OnceAt(0.20)) {
            for (let i = 1; i < keys.length; i++) {
                let key = keys[i];
                if (key == "Q") {
                    Q.CastNoTarget();
                }
                if (key == "W") {
                    W.CastNoTarget();
                }
                if (key == "E") {
                    E.CastNoTarget();
                }
                if (key == "R" && Items.GetInstances(myHero) === true) {
                    R.CastNoTarget();
                }
            }
        }
        let timer = GameRules.GetGameTime();
        return true;
    }
    Items.InvoPressKey = InvoPressKey;
    function GetInstances(myHero) {
        let modTable = myHero.GetModifiers();
        let Q_num = 0;
        let W_num = 0;
        let E_num = 0;
        for (let i = 0; i < modTable.length; i++) {
            let mod = modTable[i];
            if (mod.GetName() == "modifier_invoker_quas_instance") {
                Q_num = Q_num + 1;
            }
            if (mod.GetName() == "modifier_invoker_wex_instance") {
                W_num = W_num + 1;
            }
            if (mod.GetName() == "modifier_invoker_exort_instance") {
                E_num = E_num + 1;
            }
        }
        //let timeToUse = E_num = 3;
        if (Items.neadCASTSUNSTRIKE =  true && E_num == 3) {
            return true;
        }
        if (Items.neadRUUN == true && myHero.IsRunning() && !myHero.IsAttacking()) {
            if (W_num == 3) {
                return true;
            }
        }
        let myCurHp = myHero.GetHealth();
        let myHP = myHero.GetMaxHealth();
        let persentHP = 70 / 100 * myHP;
        let enemyHero = Input.GetNearestHeroToCursor(Enum.TeamType.TEAM_ENEMY);
        if (myCurHp <= persentHP && !myHero.IsAttacking() && !myHero.IsChannellingAbility()) {
            if (Q_num == 3) {
                return true;
            }
        }
        return false;
    }
    Items.GetInstances = GetInstances;
    function InvoSunStrikeKiller(myHero, myMana) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_invoker') {
            return;
        }
        if (!myHero.IsAlive()) {
            return;
        }
        let exort = myHero.GetAbility('invoker_exort');
        let invoke = myHero.GetAbility('invoker_invoke');
        let aghanims = myHero.GetItem('item_ultimate_scepter', true);
        let sunStrike = myHero.GetAbility('invoker_sun_strike');
        let sunStrikeDMG = 37.5 + (62.5 * exort.GetLevel());
        if (aghanims || myHero.HasModifier('modifier_item_ultimate_scepter_consumed')) {
            sunStrikeDMG = 37.5 + (62.5 * (exort.GetLevel() + 1));
        }
        ;
        if (!sunStrike) {
            return;
        }
        if (!sunStrike.IsCastable(myMana)) {
            return;
        }
        let enemy = myHero.GetHeroesInRadius(99999, 0);
        if (!enemy || enemy <= 0) {
            return;
        }
        for (let index = 1; index < enemy.length; index++) {
            const npc = enemy[index];
            let enemyHP = npc.GetHealth();
            let enemyHPregen = npc.GetHealthRegen() * 2;
            let totalHP = enemyHP + enemyHPregen;
            if (npc && npc.IsAlive() && totalHP <= sunStrikeDMG && exort && myMana >= 175) {
                let firstSpell = myHero.GetAbilityByIndex(3);
                let firstname = firstSpell.GetName();
                let secondspell = myHero.GetAbilityByIndex(4);
                let secondname = secondspell.GetName();
                let neadcastSunstrike = "E,E,E,R";
                if (Menu.GetValue(Items.invoAutoPrerSuns) === true) {
                    if (firstname !== "invoker_sun_strike") {
                        if (secondname !== "invoker_sun_strike") {
                            Items.InvoPressKey(myHero, neadcastSunstrike);
                        }
                    }
                }
                if (firstname || secondname === "invoker_sun_strike") {
                    let enemyPos = npc.GetAbsOrigin();
                    let TimeToHit = 1.7;
                    let getPosSuns = Items.GetPredictedPosition(npc, TimeToHit);
                    let getX = Input.GetWorldCursorPos();
                    if (Menu.GetValue(Items.invDrawLinePred) === true) {
                        Renderer.DrawWorldLine(enemyPos, getPosSuns, 0);
                    }
                    ;
                    let imageHandle = Renderer.LoadImage(`panorama/images/spellicons/invoker_sun_strike_png.vtex_c`);
                    if (Menu.GetValue(Items.invDrawIconPre) === true) {
                        Renderer.DrawWorldImage(imageHandle, getPosSuns, 30, 30, 0);
                    }
                    ;
                    if (Menu.GetValue(Items.invAutmCamtoPos) === true) {
                        Engine.ExecuteCommand("dota_camera_set_lookatpos" + getPosSuns.x + " " + getPosSuns.y + " " + getPosSuns.z);
                    }
                    ;
                    if (Menu.GetValue(Items.invAutPressUicon) === true) {
                        if (getX.Distance(getPosSuns) < 150) {
                            if (Input.IsKeyDownOnce(Enum.ButtonCode.MOUSE_LEFT)) {
                                sunStrike.CastPosition(getPosSuns, true);
                            }
                        }
                    }
                }
            }
        }
    }
    Items.InvoSunStrikeKiller = InvoSunStrikeKiller;
    function InvoBorW(myHero, myMana) {
        if (!myHero.IsAlive()) {
            return;
        }
        if (myHero.IsStunned()) {
            return;
        }
        let qwas = myHero.GetAbility('invoker_quas');
        let wex = myHero.GetAbility('invoker_wex');
        let exort = myHero.GetAbility('invoker_exort');
        let invoke = myHero.GetAbility('invoker_invoke');
        let aghanims = myHero.GetItem('item_ultimate_scepter', true);
        let bast = myHero.GetAbility('invoker_deafening_blast');
        let nado = myHero.GetAbility('invoker_tornado');
        let tordmg = 37.5 + (45 * wex.GetLevel());
        let balastdmg = 37.5 + (40 * exort.GetLevel());
        let enemy = myHero.GetHeroesInRadius(2000, 0);
        if (!enemy || enemy <= 0) {
            return;
        }
        let multiplier = enemy.GetMagicalArmorDamageMultiplier();
        let dis = (myHero.GetAbsOrigin().sub(enemy.GetAbsOrigin())).Length();
        for (let index = 1; index < enemy.length; index++) {
            const npc = enemy[index];
            let enemyHP = npc.GetHealth();
            if (Menu.GetValue(Items.invoTkils) === true) {
                if (enemyHP <= tordmg * multiplier) {
                    let speed = 1000;
                    let delay = dis / (speed + 1);
                    let pos = Items.GetPredictedPosition(enemy, delay);
                    Items.CastTornado(myHero, pos);
                    nado.CastPosition(pos);
                }
            }
            if (Menu.GetValue(Items.invoBkils) === true) {
                if (enemyHP <= balastdmg * multiplier) {
                    let speed = 1100;
                    let delay = dis / (speed + 1);
                    let pos = Items.GetPredictedPosition(enemy, delay);
                    Items.CastBlast(myHero, pos);
                    bast.CastPosition(pos);
                }
            }
        }
    }
    Items.InvoBorW = InvoBorW;
    function CastTornado(myHero, pos) {
        if (!myHero || !pos) {
            return false;
        }
        let invoke = myHero.GetAbility('invoker_invoke');
        let aghanims = myHero.GetItem('item_ultimate_scepter', true);
        if (!invoke) {
            return false;
        }
        let nado = myHero.GetAbility('invoker_tornado');
        if (!nado || !nado.IsCastable(myHero.GetMana() - nado.GetManaCost())) {
            return false;
        }
        let W = myHero.GetAbility("invoker_wex");
        if (!W || !W.IsCastable()) {
            return false;
        }
        let level = W.GetLevel();
        let range = 2000;
        let travel_distance = 800 + 400 * (level - 1);
        let dir = pos.sub(myHero.GetAbsOrigin());
        let dis = dir.Length();
        if (dis > travel_distance) {
            return false;
        }
        if (dis > range) {
            pos = myHero.GetAbsOrigin().add(dir.Scaled(range / dis));
        }
        let firstSpell = myHero.GetAbilityByIndex(3);
        let firstname = firstSpell.GetName();
        let secondspell = myHero.GetAbilityByIndex(4);
        let secondname = secondspell.GetName();
        let neadcastTornado = "Q,W,W,R";
        if (Menu.GetValue(Items.invoAutoPrerTorn) === true) {
            if (firstname !== "invoker_tornado") {
                if (secondname !== "invoker_tornado") {
                    Items.InvoPressKey(myHero, neadcastTornado);
                }
            }
            return true;
        }
        return false;
    }
    Items.CastTornado = CastTornado;
    function CastBlast(myHero, pos) {
        if (!myHero || !pos) {
            return false;
        }
        let invoke = myHero.GetAbility('invoker_invoke');
        let aghanims = myHero.GetItem('item_ultimate_scepter', true);
        if (!invoke) {
            return false;
        }
        let nado = myHero.GetAbility('invoker_deafening_blast');
        if (!nado || !nado.IsCastable(myHero.GetMana() - nado.GetManaCost())) {
            return false;
        }
        let W = myHero.GetAbility("invoker_wex");
        if (!W || !W.IsCastable()) {
            return false;
        }
        let level = W.GetLevel();
        let range = 1000;
        let dis = myHero.GetAbsOrigin().sub(pos).Length();
        if (dis > range) {
            return false;
        }
        let firstSpell = myHero.GetAbilityByIndex(3);
        let firstname = firstSpell.GetName();
        let secondspell = myHero.GetAbilityByIndex(4);
        let secondname = secondspell.GetName();
        let neadcastTornado = "Q,W,E,R";
        if (Menu.GetValue(Items.invoAutoPrerBlast) === true) {
            if (firstname !== "invoker_tornado") {
                if (secondname !== "invoker_tornado") {
                    Items.InvoPressKey(myHero, neadcastTornado);
                }
            }
            return true;
        }
        return false;
    }
    Items.CastBlast = CastBlast;
    function InvokerAutoQWE(myHero) {
        if (!myHero.IsAlive()) {
            return;
        }
        if (myHero.IsStunned()) {
            return;
        }
        let NoHil = false;
        if (myHero.IsRunning()) {
            NoHil = true;
        }
        if (Engine.OnceAt(2)) {
            if (myHero.IsRunning() && !myHero.IsAttacking()) {
                NoHil = true;
                let neadRUUUN = "W,W,W,W";
                Items.neadRUUN = true;
                Items.InvoPressKey(myHero, neadRUUUN);
            }
        }
        if (Engine.OnceAt(2)) {
            let myCurHp = myHero.GetHealth();
            let myHP = myHero.GetMaxHealth();
            let persentHP = 70 / 100 * myHP;
            let enemyHero = Input.GetNearestHeroToCursor(Enum.TeamType.TEAM_ENEMY);
            if (myCurHp <= persentHP && !myHero.IsAttacking() && !myHero.IsChannellingAbility() && NoHil == false && !myHero.IsRunning()) {
                let neadHeeeal = "Q,Q,Q,Q";
                Items.InvoPressKey(myHero, neadHeeeal);
            }
        }
    }
    Items.InvokerAutoQWE = InvokerAutoQWE;
    function Invoker(myHero, myMana) {
        if (!Items.GameStart) {
            return;
        }
        if (myHero.GetUnitName() !== 'npc_dota_hero_invoker') {
            return;
        }
        let exort = myHero.GetAbility('invoker_exort');
        let invoke = myHero.GetAbility('invoker_invoke');
        let aghanims = myHero.GetItem('item_ultimate_scepter', true);
        let sunStrike = myHero.GetAbility('invoker_sun_strike');
        let sunStrikeDMG = 37.5 + (62.5 * exort.GetLevel());
        if (aghanims || myHero.HasModifier('modifier_item_ultimate_scepter_consumed')) {
            sunStrikeDMG = 37.5 + (62.5 * (exort.GetLevel() + 1));
        }
        if (Menu.GetValue(Items.invKilSunStr) === true) {
            Items.InvoSunStrikeKiller(myHero, myMana);
        }
        if (Menu.GetValue(Items.autoTornKil) === true) {
            InvoBorW(myHero, myMana);
        }
        if (Menu.GetValue(Items.invAvtweweE) === true) {
            Items.InvokerAutoQWE(myHero);
        }
    }
    Items.Invoker = Invoker;
    function antiLes(myHero) {
        if (!myHero) {
            return;
        }
        let heroesList = EntitySystem.GetHeroesList();
        let bobCat = null;
        if (Menu.GetValue(Items.NeadDestoyKatku) === true) {
            if (Menu.IsKeyDownOnce(Items.SelectForestHero)) {
                bobCat = Input.GetNearestHeroToCursor(1);
            }
            if (bobCat && bobCat.IsAlive() && bobCat.IsHero()) {
                if (!bobCat.IsEntityInRange(myHero, 300)) {
                    let heroBoBe = bobCat.GetAbsOrigin();
                    myHero.MoveTo(heroBoBe, true, false);
                }
            }
        }
        if (Menu.GetValue(Items.neadDestroyfoRestRetarD) === true) {
            if (Menu.IsKeyDownOnce(Items.SelectForestHero)) {
                bobCat = Input.GetNearestHeroToCursor(1);
            }
            if (bobCat && bobCat.IsAlive() && bobCat.IsHero()) {
                if (!bobCat.IsEntityInRange(myHero, 300)) {
                    let heroBoBe = bobCat.GetAbsOrigin();
                    myHero.MoveTo(heroBoBe, true, false);
                }
            }
            let myDmG = myHero.GetDamage();
            let allCreap = myHero.GetUnitsInRadius(500, 0);
            for (let i = 0; i < allCreap.length; i++) {
                let creep = allCreap[i];
                if (creep && creep.IsAttacking()) {
                    if (myDmG >= creep.GetHealth()) {
                        let localPlayer = EntitySystem.GetLocalPlayer();
                        localPlayer.AttackTarget(myHero, creep);
                    }
                }
            }
        }
    }
    Items.antiLes = antiLes;
    function autoPingTP() {
        if (Menu.GetValue(Items.pingTP) === true) {
            if (Items.TPParticleTime >= 0) {
                MiniMap.Ping(Items.TPParticlePosition, 4, true);
            }
        }
    }
    Items.autoPingTP = autoPingTP;
    function autoFarmForest(myHero) {
        if (Menu.GetValue(Items.myHerofarmForest) === true) {
            if (Menu.IsKeyDownOnce(Items.keyForAFKfarmForest)) {
                //if(myHero.GetFountainPosition())
            }
        }
    }
    Items.autoFarmForest = autoFarmForest;
    function getCoordinatebyKey(myHero) {
        if (Menu.GetValue(Items.myMousePos) === true) {
            if (Menu.IsKeyDown(Items.myCursorButton)) {
                console.log(Input.GetCursorPos());
            }
        }
    }
    Items.getCoordinatebyKey = getCoordinatebyKey;
})(Items || (Items = {}));
function Shadowfiend(myHero, enemyHero, myPos, myMana, enemyPos) {
    if (!Items.GameStart) {
        return;
    }
    if (myHero.GetUnitName() !== 'npc_dota_hero_nevermore') {
        return;
    }
    if (Menu.GetValue(Items.shadowfiendisEnabledOption) === true) {
        // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
        if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
            return;
        }
        if (!enemyHero) {
            return;
        }
        //Skills
        let FirstSkill = myHero.GetAbility('nevermore_shadowraze1');
        let SecondSkill = myHero.GetAbility('nevermore_shadowraze2');
        let ThirdSkill = myHero.GetAbility('nevermore_shadowraze3');
        //Range Skills
        let RangeFirst = FirstSkill.GetCastRange();
        let RangeSecond = SecondSkill.GetCastRange();
        let RangeThird = ThirdSkill.GetCastRange();
        //Range Eul
        let RangeEusl = 550;
        let RangeBlink = 1200;
        //Helth Regen
        let enemyHealth = enemyHero.GetHealth();
        let enemyRegen = enemyHero.GetHealthRegen() * 2;
        //Kill Steal
        if (Menu.GetValue(Items.shadowfiendenableKillSteal) === true && enemyHero) {
            let currentDragonDamage = FirstSkill.GetLevelSpecialValueFor('shadowraze_damage') * enemyHero.GetMagicalArmorDamageMultiplier();
            if (Menu.GetValue(Items.shadowfiendDragonKillSteal) === true && enemyHero && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && (enemyHealth + enemyRegen) <= currentDragonDamage && enemyHero.IsEntityInRange(myHero, RangeFirst) <= 300 && enemyHero.IsEntityInRange(myHero, RangeFirst) >= 100) {
                if (myHero.GetTimeToFace(enemyHero) >= 0.01) {
                    myHero.MoveTo(enemyPos);
                    return;
                }
                else
                    FirstSkill.CastNoTarget();
                return;
            }
            if (Menu.GetValue(Items.shadowfiendDragonKillSteal) === true && enemyHero && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && (enemyHealth + enemyRegen) <= currentDragonDamage && enemyHero.IsEntityInRange(myHero, RangeSecond) <= 550 && enemyHero.IsEntityInRange(myHero, RangeSecond) >= 350) {
                if (myHero.GetTimeToFace(enemyHero) >= 0.01) {
                    myHero.MoveTo(enemyPos);
                    return;
                }
                else
                    SecondSkill.CastNoTarget();
                return;
            }
            if (Menu.GetValue(Items.shadowfiendDragonKillSteal) === true && enemyHero && ThirdSkill && !ThirdSkill.GetCooldown() && myMana >= ThirdSkill.GetManaCost() && (enemyHealth + enemyRegen) <= currentDragonDamage && enemyHero.IsEntityInRange(myHero, RangeThird) <= 800 && enemyHero.IsEntityInRange(myHero, RangeThird) >= 600) {
                if (myHero.GetTimeToFace(enemyHero) >= 0.01) {
                    myHero.MoveTo(enemyPos);
                    return;
                }
                else
                    ThirdSkill.CastNoTarget();
                return;
            }
        }
        let UltimateSkill = myHero.GetAbility('nevermore_requiem');
        let itemsEul = myHero.GetItem('item_cyclone', true);
        let itemsBlink = myHero.GetItem('item_blink', true);
        let itemsEterial = myHero.GetItem('item_ethereal_blade', true);
        let itemsVeil = myHero.GetItem('item_veil_of_discord', true);
        let itemsHex = myHero.GetItem('item_sheepstick', true);
        let itemsNufflier = myHero.GetItem('item_nullifier', true);
        let itemsBkb = myHero.GetItem('item_black_king_bar', true);
        //Lotar Combo
        if (Menu.GetValue(Items.shadowfiendLotarCombo) === true && !UltimateSkill.GetCooldown() && enemyHero && Menu.IsKeyDown(Items.shadowfiendEulComboKey)) {
            if (myHero.HasModifier('modifier_item_invisibility_edge_windwalk') || myHero.HasModifier('modifier_item_silver_edge_windwalk')) {
                if (!enemyHero.IsEntityInRange(myHero, 85)) {
                    myHero.MoveTo(enemyPos);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.shadowFiendsItems, 0) && itemsBkb && !itemsBkb.GetCooldown() && myMana >= itemsBkb.GetManaCost()) {
                    itemsBkb.CastNoTarget();
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.shadowFiendsItems, 2) && itemsHex && !itemsHex.GetCooldown() && myMana >= itemsHex.GetManaCost()) {
                    itemsHex.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.shadowFiendsItems, 3) && itemsEterial && !itemsEterial.GetCooldown() && myMana >= itemsEterial.GetManaCost()) {
                    itemsEterial.CastTarget(enemyHero);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.shadowFiendsItems, 4) && itemsVeil && !itemsVeil.GetCooldown() && myMana >= itemsVeil.GetManaCost()) {
                    itemsVeil.CastPosition(enemyPos);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.shadowFiendsItems, 5) && itemsNufflier && !itemsNufflier.GetCooldown() && myMana >= itemsNufflier.GetManaCost()) {
                    itemsNufflier.CastTarget(enemyHero);
                    return;
                }
                if (itemsEul && !itemsEul.GetCooldown() && myMana >= itemsEul.GetManaCost() && enemyHero.IsEntityInRange(myHero, 300) && !UltimateSkill.GetCooldown()) {
                    itemsEul.CastTarget(enemyHero);
                    return;
                }
                if (UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost() && itemsEul && itemsEul.SecondsSinceLastUse() >= 0.75) {
                    UltimateSkill.CastNoTarget();
                    return;
                }
            }
        }
        //Euls Combo
        if (Menu.GetValue(Items.shadowfiendeulCombo) === true && enemyHero && Menu.IsKeyDown(Items.shadowfiendEulComboKey)) {
            if (Engine.OnceAt(0.08)) {
                if (Menu.GetMultiSelectValue(Items.shadowFiendEulItems, 0) && itemsBkb && !itemsBkb.GetCooldown() && myMana >= itemsBkb.GetManaCost()) {
                    itemsBkb.CastNoTarget();
                    console.log(1);
                    return;
                }
                if (itemsBlink && !itemsBlink.GetCooldown() && enemyHero.IsEntityInRange(myHero, RangeBlink)) {
                    itemsBlink.CastPosition(enemyPos);
                    console.log(2);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.shadowFiendEulItems, 1) && itemsHex && !itemsHex.GetCooldown() && myMana >= itemsHex.GetManaCost()) {
                    itemsHex.CastTarget(enemyHero);
                    console.log(3);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.shadowFiendEulItems, 2) && itemsEterial && !itemsEterial.GetCooldown() && myMana >= itemsEterial.GetManaCost()) {
                    itemsEterial.CastTarget(enemyHero);
                    console.log(4);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.shadowFiendEulItems, 3) && itemsVeil && !itemsVeil.GetCooldown() && myMana >= itemsVeil.GetManaCost()) {
                    itemsVeil.CastPosition(enemyPos);
                    console.log(5);
                    return;
                }
                if (Menu.GetMultiSelectValue(Items.shadowFiendEulItems, 4) && itemsNufflier && !itemsNufflier.GetCooldown() && myMana >= itemsNufflier.GetManaCost()) {
                    itemsNufflier.CastTarget(enemyHero);
                    console.log(6);
                    return;
                }
                if (itemsEul && !itemsEul.GetCooldown() && myMana >= 380 && enemyHero.IsEntityInRange(myHero, RangeEusl) && !UltimateSkill.GetCooldown()) {
                    itemsEul.CastTarget(enemyHero);
                    console.log(7);
                    return;
                }
                if (enemyHero.HasModifier('modifier_eul_cyclone') && !enemyHero.IsEntityInRange(myHero, 80)) {
                    myHero.MoveTo(enemyPos);
                    console.log(8);
                    return;
                }
                if (UltimateSkill && !UltimateSkill.GetCooldown() && myMana >= UltimateSkill.GetManaCost() && itemsEul && itemsEul.SecondsSinceLastUse() >= 0.75) {
                    UltimateSkill.CastNoTarget();
                    console.log(9);
                    return;
                }
            }
        }
        if (Menu.IsKeyDown(Items.GDMComboKey)) {
            if (!enemyHero.IsAlive() || !enemyHero.IsHero() || enemyHero.IsIllusion()) {
                return;
            }
            if (!enemyHero) {
                return;
            }
            let menuVal = parseInt(Menu.GetValue(optionSFBlink).toString());
            let predictedPos = (myPos.sub(enemyPos).Normalized().Scaled(menuVal));
            let blinkPos = enemyPos.add(predictedPos);
            //Skills
            let FirstSkill = myHero.GetAbility('nevermore_shadowraze1');
            let SecondSkill = myHero.GetAbility('nevermore_shadowraze2');
            let ThirdSkill = myHero.GetAbility('nevermore_shadowraze3');
            if (Menu.GetMultiSelectValue(Items.shadowFiendsItems, 1) && itemsBlink && !itemsBlink.GetCooldown()) {
                itemsBlink.CastPosition(blinkPos);
                return;
            }
            if (Menu.GetMultiSelectValue(Items.shadowFiendsItems, 2) && itemsHex && !itemsHex.GetCooldown() && myMana >= itemsHex.GetManaCost()) {
                itemsHex.CastTarget(enemyHero);
                return;
            }
            if (Menu.GetMultiSelectValue(Items.shadowFiendsItems, 3) && itemsEterial && !itemsEterial.GetCooldown() && myMana >= itemsEterial.GetManaCost()) {
                itemsEterial.CastTarget(enemyHero);
                return;
            }
            if (Menu.GetMultiSelectValue(Items.shadowFiendsItems, 4) && itemsVeil && !itemsVeil.GetCooldown() && myMana >= itemsVeil.GetManaCost()) {
                itemsVeil.CastPosition(enemyPos);
                return;
            }
            if (Menu.GetMultiSelectValue(Items.shadowFiendsItems, 5) && itemsNufflier && !itemsNufflier.GetCooldown() && myMana >= itemsNufflier.GetManaCost()) {
                itemsNufflier.CastTarget(enemyHero);
                return;
            }
            if (Menu.GetMultiSelectValue(Items.shadowFiendsItems, 0) && itemsBkb && !itemsBkb.GetCooldown() && myMana >= itemsBkb.GetManaCost()) {
                itemsBkb.CastNoTarget();
                return;
            }
            //Skills
            if (Menu.GetMultiSelectValue(Items.shadowfiendfirstSkill, 0) && FirstSkill && !FirstSkill.GetCooldown() && myMana >= FirstSkill.GetManaCost() && enemyHero.IsEntityInRange(myHero, RangeFirst) <= 300 && enemyHero.IsEntityInRange(myHero, RangeFirst) <= 100 && !enemyHero.HasModifier('modifier_eul_cyclone') && !myHero.HasModifier('modifier_item_invisibility_edge_windwalk') && !myHero.HasModifier('modifier_item_silver_edge_windwalk')) {
                let RazePos = myHero.GetAbsOrigin().add(myHero.GetRotation().GetForward().Normalized().Scaled(200));
                let disRazePOSpredictedPOS = RazePos.sub(enemyPos).Length2D();
                if (myHero.GetTimeToFace(enemyHero) >= 0.05) {
                    myHero.MoveTo(enemyPos);
                    return;
                }
                else if (disRazePOSpredictedPOS <= 200 && !enemyHero.HasModifier('modifier_eul_cyclone')) {
                    FirstSkill.CastNoTarget();
                    return;
                }
                else if (!itemsEul) {
                    if (myHero.GetTimeToFace(enemyHero) >= 0.05) {
                        myHero.MoveTo(enemyPos);
                        return;
                    }
                    else if (disRazePOSpredictedPOS <= 200 && !enemyHero.HasModifier('modifier_eul_cyclone')) {
                        FirstSkill.CastNoTarget();
                        return;
                    }
                }
            }
            if (Menu.GetMultiSelectValue(Items.shadowfiendfirstSkill, 0) && SecondSkill && !SecondSkill.GetCooldown() && myMana >= SecondSkill.GetManaCost() && enemyHero.IsEntityInRange(myHero, RangeSecond) <= 550 && enemyHero.IsEntityInRange(myHero, RangeSecond) <= 350 && !enemyHero.HasModifier('modifier_eul_cyclone') && !myHero.HasModifier('modifier_item_invisibility_edge_windwalk') && !myHero.HasModifier('modifier_item_silver_edge_windwalk')) {
                let RazePos = myHero.GetAbsOrigin().add(myHero.GetRotation().GetForward().Normalized().Scaled(450));
                let disRazePOSpredictedPOS = RazePos.sub(enemyPos).Length2D();
                if (myHero.GetTimeToFace(enemyHero) >= 0.05) {
                    myHero.MoveTo(enemyPos);
                    return;
                }
                else if (disRazePOSpredictedPOS <= 200 && !enemyHero.HasModifier('modifier_eul_cyclone')) {
                    SecondSkill.CastNoTarget();
                    return;
                }
            }
            if (Menu.GetMultiSelectValue(Items.shadowfiendfirstSkill, 0) && ThirdSkill && !ThirdSkill.GetCooldown() && myMana >= ThirdSkill.GetManaCost() && enemyHero.IsEntityInRange(myHero, RangeThird) <= 800 && enemyHero.IsEntityInRange(myHero, RangeThird) <= 600 && !enemyHero.HasModifier('modifier_eul_cyclone') && !myHero.HasModifier('modifier_item_invisibility_edge_windwalk') && !myHero.HasModifier('modifier_item_silver_edge_windwalk')) {
                let RazePos = myHero.GetAbsOrigin().add(myHero.GetRotation().GetForward().Normalized().Scaled(700));
                let disRazePOSpredictedPOS = RazePos.sub(enemyPos).Length2D();
                if (myHero.GetTimeToFace(enemyHero) >= 0.05) {
                    myHero.MoveTo(enemyPos);
                    return;
                }
                else if (disRazePOSpredictedPOS <= 200 && !enemyHero.HasModifier('modifier_eul_cyclone')) {
                    ThirdSkill.CastNoTarget();
                    return;
                }
            }
        }
    }
}
//Script function
Items.ScriptIsEnable = Menu.AddToggle(['GDM'], 'Включить скрипт', false);
Menu.SetImage(['GDM'], "panorama/images/heroes/icons/npc_dota_hero_pudge_alt2_png.vtex_c");
Items.GDMComboKey = Menu.AddKeyBind(['GDM'], 'Клавиша для комбо', Enum.ButtonCode.KEY_NONE);
Items.isEnabledOption = Menu.AddToggle(['GDM', 'Вещи для комбо'], 'Включить вещи в комбо', false);
Items.AutoHarasssinCombo = Menu.AddToggle(['GDM', 'Настройка комбо'], 'Атаковать героев с руки', false);
let optionTargetRange = Menu.AddSlider(['GDM', 'Настройка комбо'], 'Настройка дистанции к цели', 1, 1200, 300, 1);
//Items.optionTargetStyle = Menu.AddComboBox(['GDM', 'Combo Setting'],'Created By',['Locked target','Free target'],1);
Items.predictCastPos = Menu.AddComboBox(['GDM', 'Настройка комбо'], 'Вариант каста способности', ['Позиция героя', 'На предикшн'], 1);
//Safe Cast
Items.noBlademail = Menu.AddMultiSelect(['GDM', 'Настройка комбо'], 'Стоп каста при еффекте', ["panorama/images/items/blade_mail_png.vtex_c", "panorama/images/items/lotus_orb_png.vtex_c", "panorama/images/spellicons/abaddon_borrowed_time_png.vtex_c", "panorama/images/spellicons/dazzle_shallow_grave_png.vtex_c"], false);
Items.optionLockTargetIndicator = Menu.AddToggle(['GDM', 'Настройка комбо'], 'Индикатор цели', true);
Items.optionLockTargetParticle = Menu.AddComboBox(['GDM', 'Настройка комбо'], 'Индикатор цели', ['Мигающий свет', 'Кровавая баня'], 0);
//Intellect
Items.dazzleScriptEnable = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Dazzle'], 'Включить скрипт', false);
Items.dazzleSpell = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Интеллект', 'Dazzle'], 'Способности для комбо', ["panorama/images/spellicons/dazzle_poison_touch_png.vtex_c", "panorama/images/spellicons/dazzle_shadow_wave_png.vtex_c"], false);
Items.dazzleAutoWawe = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Dazzle'], 'Авто 3 спелл при лоу HP%', false);
let dazzleUseWave = Menu.AddSlider(['GDM', 'Герои для комбо', 'Интеллект', 'Dazzle'], 'HP% Для 3 спела', 1, 100, 40, 1);
Items.apparatisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Acient Apparation'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Интеллект', 'Acient Apparation'], "panorama/images/heroes/icons/npc_dota_hero_ancient_apparition_png.vtex_c");
Items.apparatfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Интеллект', 'Acient Apparation'], 'Способности для комбо', ["panorama/images/spellicons/ancient_apparition_cold_feet_png.vtex_c", "panorama/images/spellicons/ancient_apparition_ice_vortex_png.vtex_c", "panorama/images/spellicons/ancient_apparition_chilling_touch_png.vtex_c"], false);
Items.baneisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Bane'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Интеллект', 'Bane'], "panorama/images/heroes/icons/npc_dota_hero_bane_png.vtex_c");
Items.banefirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Интеллект', 'Bane'], 'Способности для комбо', ["panorama/images/spellicons/bane_enfeeble_png.vtex_c", "panorama/images/spellicons/bane_brain_sap_png.vtex_c", "panorama/images/spellicons/bane_nightmare_png.vtex_c", "panorama/images/spellicons/bane_fiends_grip_png.vtex_c"], false);
Items.baneVampiric = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Bane'], 'Авто 2 спел', false);
let baneVampiricc = Menu.AddSlider(['GDM', 'Герои для комбо', 'Интеллект', 'Bane'], 'ХП% для востановление', 1, 100, 40, 1);
Items.crystalmaidenisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Crystal Maiden'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Интеллект', 'Crystal Maiden'], "panorama/images/heroes/icons/npc_dota_hero_crystal_maiden_alt1_png.vtex_c");
Items.crystalmaidenfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Интеллект', 'Crystal Maiden'], 'Способности для комбо', ["panorama/images/spellicons/crystal_maiden_crystal_nova_png.vtex_c", "panorama/images/spellicons/crystal_maiden_frostbite_png.vtex_c", "panorama/images/spellicons/crystal_maiden_freezing_field_png.vtex_c"], false);
Items.darkseerkisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Dark Seer'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Интеллект', 'Dark Seer'], "panorama/images/heroes/icons/npc_dota_hero_dark_seer_png.vtex_c");
Items.darkseerkfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Интеллект', 'Dark Seer'], 'Способности для комбо', ["panorama/images/spellicons/dark_seer_vacuum_png.vtex_c", "panorama/images/spellicons/dark_seer_ion_shell_png.vtex_c", "panorama/images/spellicons/dark_seer_surge_png.vtex_c", "panorama/images/spellicons/dark_seer_wall_of_replica_png.vtex_c"], false);
Items.deathprophetisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Death Prophet'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Интеллект', 'Death Prophet'], "panorama/images/heroes/icons/npc_dota_hero_death_prophet_png.vtex_c");
Items.deathprophetfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Интеллект', 'Death Prophet'], 'Способности для комбо', ["panorama/images/spellicons/death_prophet_carrion_swarm_png.vtex_c", "panorama/images/spellicons/death_prophet_silence_png.vtex_c", "panorama/images/spellicons/death_prophet_spirit_siphon_png.vtex_c", "panorama/images/spellicons/death_prophet_exorcism_png.vtex_c"], false);
Items.enchantressisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Enchantres'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Интеллект', 'Enchantres'], "panorama/images/heroes/icons/npc_dota_hero_enchantress_png.vtex_c");
Items.enchantressfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Интеллект', 'Enchantres'], 'Способности для комбо', ["panorama/images/spellicons/enchantress_enchant_png.vtex_c", "panorama/images/spellicons/enchantress_impetus_png.vtex_c"], false);
Items.AutoSaveEnchant = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Enchantres'], 'Авто отхил', false);
let enchantressHpChange = Menu.AddSlider(['GDM', 'Герои для комбо', 'Интеллект', 'Enchantres'], 'HP% для авто отхила', 1, 100, 40, 1);
Items.enigmaisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Enigma'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Интеллект', 'Enigma'], "panorama/images/heroes/icons/npc_dota_hero_enigma_png.vtex_c");
Items.enigmafirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Интеллект', 'Enigma'], 'Способности для комбо', ["panorama/images/spellicons/enigma_malefice_png.vtex_c", "panorama/images/spellicons/enigma_midnight_pulse_png.vtex_c", "panorama/images/spellicons/enigma_black_hole_png.vtex_c"], false);
Items.enigmaRefresher = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Enigma'], 'Включить рефрешер комбо', false);
Items.darkwillowisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Dark Willow'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Интеллект', 'Dark Willow'], "panorama/images/heroes/icons/npc_dota_hero_dark_willow_png.vtex_c");
Items.darkwillowfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Интеллект', 'Dark Willow'], 'Способности для комбо', ["panorama/images/spellicons/dark_willow_bramble_maze_png.vtex_c", "panorama/images/spellicons/dark_willow_shadow_realm_png.vtex_c", "panorama/images/spellicons/dark_willow_cursed_crown_png.vtex_c", "panorama/images/spellicons/dark_willow_bedlam_png.vtex_c", "panorama/images/spellicons/dark_willow_terrorize_png.vtex_c"], false);
Items.grimmisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Grimstroke'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Интеллект', 'Grimstroke'], "panorama/images/heroes/icons/npc_dota_hero_grimstroke_png.vtex_c");
Items.grimmfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Интеллект', 'Grimstroke'], 'Способности для комбо', ["panorama/images/spellicons/grimstroke_dark_artistry_png.vtex_c", "panorama/images/spellicons/grimstroke_ink_creature_png.vtex_c", "panorama/images/spellicons/grimstroke_spirit_walk_png.vtex_c", "panorama/images/spellicons/grimstroke_soul_chain_png.vtex_c"], false);
Items.linaisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Lina'], 'Включить скрипт', false);
Items.linaeulCombo = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Lina'], 'Включить Еул комбо', false);
Items.linaeulComboKey = Menu.AddKeyBind(['GDM', 'Герои для комбо', 'Интеллект', 'Lina'], 'Клавиша для Еул комбо', Enum.ButtonCode.KEY_NONE);
Items.linafirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Интеллект', 'Lina'], 'Способности для комбо Procast', ["panorama/images/spellicons/lina_dragon_slave_png.vtex_c", "panorama/images/spellicons/lina_light_strike_array_png.vtex_c", "panorama/images/spellicons/lina_laguna_blade_png.vtex_c"], false);
Items.linaenableKillSteal = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Интеллект', 'Lina'], 'Авто добитие способностью', ["panorama/images/spellicons/lina_dragon_slave_png.vtex_c", "panorama/images/spellicons/lina_laguna_blade_png.vtex_c"], false);
Items.windrunnerisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Windruner'], 'Включить скрипт', false);
Items.windranerbranchCombo = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Windruner'], 'Включить комбо с веточкой', false);
Items.windrunnerfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Интеллект', 'Windruner'], 'Способности для комбо', ["panorama/images/spellicons/windrunner_shackleshot_png.vtex_c", "panorama/images/spellicons/windrunner_windrun_sylvan_png.vtex_c", "panorama/images/spellicons/windrunner_focusfire_png.vtex_c"], false);
Items.windranerAutoFirst = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Windruner'], 'Авто 3 спелл при малом ХП%', false);
let windrunHpChange = Menu.AddSlider(['GDM', 'Герои для комбо', 'Интеллект', 'Windruner'], 'HP% Для использование 3 способности', 1, 100, 30, 1);
Items.tinkerisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Tinker'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Интеллект', 'Tinker'], "panorama/images/heroes/icons/npc_dota_hero_tinker_png.vtex_c");
Items.tinkerfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Интеллект', 'Tinker'], 'Способности для комбо Procast', ["panorama/images/spellicons/tinker_laser_png.vtex_c", "panorama/images/spellicons/tinker_heat_seeking_missile_png.vtex_c", "panorama/images/spellicons/tinker_march_of_the_machines_png.vtex_c", "panorama/images/spellicons/tinker_rearm_png.vtex_c", "panorama/images/items/soul_ring_png.vtex_c"], false);
Items.tinkerItems = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Интеллект', 'Tinker'], 'Items Procast', ["panorama/images/items/black_king_bar_png.vtex_c", "panorama/images/items/blink_png.vtex_c", "panorama/images/items/sheepstick_png.vtex_c", "panorama/images/items/ethereal_blade_png.vtex_c", "panorama/images/items/veil_of_discord_png.vtex_c", "panorama/images/items/shivas_guard_png.vtex_c", "panorama/images/items/nullifier_png.vtex_c", "panorama/images/items/dagon_5_png.vtex_c", "panorama/images/items/rod_of_atos_png.vtex_c", "panorama/images/items/lotus_orb_png.vtex_c"], false);
Items.tinkerBlinkPos = Menu.AddComboBox(['GDM', 'Герои для комбо', 'Интеллект', 'Tinker', 'Blink Setting'], 'Pos', ['Hero pos', 'Cursor Pos'], 1);
let optionTinkerBlink = Menu.AddSlider(['GDM', 'Герои для комбо', 'Интеллект', 'Tinker', 'Blink Setting'], 'Blink Distance', 1, 1200, 300, 1);
let optionTinkerBlinkMin = Menu.AddSlider(['GDM', 'Герои для комбо', 'Интеллект', 'Tinker', 'Blink Setting'], 'Min distance to use Blink ', 1, 1200, 300, 1);
Items.tinkerRocketBlink = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Интеллект', 'Tinker'], 'Rocket Spam Mode', ["panorama/images/items/blink_png.vtex_c", "panorama/images/items/soul_ring_png.vtex_c"], false);
Items.TinkeroptionTinkerFailSwitch = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Tinker'], 'Enable check for Full Procast', false);
Items.tinkerEnableKillSteal = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Tinker'], 'Enable Kill Steal', false);
Items.tinkerKillSteal = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Интеллект', 'Tinker'], 'Kill Steal', ["panorama/images/spellicons/tinker_laser_png.vtex_c", "panorama/images/spellicons/tinker_heat_seeking_missile_png.vtex_c"], false);
Items.tinkerDefendMode = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Tinker'], 'Enable Defend Mode', false);
Items.tinkerDefendKey = Menu.AddKeyBind(['GDM', 'Герои для комбо', 'Интеллект', 'Tinker'], 'Defend mode Key', Enum.ButtonCode.KEY_NONE);
Items.tinkerDefendSpells = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Интеллект', 'Tinker'], 'Defend Mode', ["panorama/images/items/blink_png.vtex_c", "panorama/images/items/soul_ring_png.vtex_c", "panorama/images/spellicons/tinker_heat_seeking_missile_png.vtex_c", "panorama/images/spellicons/tinker_march_of_the_machines_png.vtex_c"], false);
Items.tinkerRocketSpam = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Tinker'], 'Enable Rocket Spam Mode', false);
Items.tinkerRocketKey = Menu.AddKeyBind(['GDM', 'Герои для комбо', 'Интеллект', 'Tinker'], 'Rocket mode Key', Enum.ButtonCode.KEY_NONE);
Items.tinkerMaxDMG = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Tinker'], 'Max DMG mode', false);
Items.optionTinkerSoulRearm = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Tinker'], 'Auto Soulring before Ultimate', false);
//Agillity Heroes
Items.antimageisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Anti Mage'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Agillity', 'Anti Mage'], "panorama/images/heroes/icons/npc_dota_hero_antimage_png.vtex_c");
Items.antimagesecondSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Agillity', 'Anti Mage'], 'Способности для комбо', ["panorama/images/spellicons/antimage_blink_png.vtex_c", "panorama/images/spellicons/antimage_spell_shield_png.vtex_c"], false);
Items.antimageultimateSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Agillity', 'Anti Mage'], 'Enable Kill Steal', ["panorama/images/spellicons/antimage_mana_void_png.vtex_c"], false);
//Axe combo
Items.AxeisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'Axe'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Strength', 'Axe'], "panorama/images/heroes/icons/npc_dota_hero_axe_png.vtex_c");
Items.berserkerCall = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Strength', 'Axe'], 'Способности для комбо', ["panorama/images/spellicons/axe_berserkers_call_png.vtex_c", "panorama/images/spellicons/axe_battle_hunger_png.vtex_c"], false);
Items.cullingBlade = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Strength', 'Axe'], 'Enable Kill Steal', ["panorama/images/spellicons/axe_culling_blade_png.vtex_c", "panorama/images/items/blink_png.vtex_c"], false);
//beastmaster
Items.brewmasterisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'Beast Master'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Strength', 'Beast Master'], "panorama/images/heroes/icons/npc_dota_hero_beastmaster_png.vtex_c");
Items.brewmasterfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Strength', 'Beast Master'], 'Способности для комбо', ["panorama/images/spellicons/beastmaster_wild_axes_png.vtex_c", "panorama/images/spellicons/beastmaster_call_of_the_wild_png.vtex_c", "panorama/images/spellicons/beastmaster_primal_roar_png.vtex_c",], false);
//Bristleback
Items.bristlebackisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'Bristleback'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Strength', 'Bristleback'], "panorama/images/heroes/icons/npc_dota_hero_bristleback_png.vtex_c");
Items.bristlebackfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Strength', 'Bristleback'], 'Способности для комбо', ["panorama/images/spellicons/bristleback_viscous_nasal_goo_png.vtex_c", "panorama/images/spellicons/bristleback_quill_spray_png.vtex_c"], false);
Items.bristlebackAutoSecond = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'Bristleback'], 'Enable Auto 2 spell if enemy in radius 600', false);
//Centaur
Items.centaurisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'Centaur Warruner'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Strength', 'Centaur Warruner'], "panorama/images/heroes/icons/npc_dota_hero_centaur_png.vtex_c");
Items.centaurfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Strength', 'Centaur Warruner'], 'Способности для комбо', ["panorama/images/spellicons/centaur_hoof_stomp_png.vtex_c", "panorama/images/spellicons/centaur_double_edge_png.vtex_c", "panorama/images/spellicons/centaur_return_png.vtex_c", "panorama/images/spellicons/centaur_stampede_png.vtex_c"], false);
//Chaos Knigth
Items.chaosknigthisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'Chaos Knigth'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Strength', 'Chaos Knigth'], "panorama/images/heroes/icons/npc_dota_hero_chaos_knight_png.vtex_c");
Items.chaosknigthfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Strength', 'Chaos Knigth'], 'Способности для комбо', ["panorama/images/spellicons/chaos_knight_chaos_bolt_png.vtex_c", "panorama/images/spellicons/chaos_knight_reality_rift_png.vtex_c", "panorama/images/spellicons/chaos_knight_phantasm_png.vtex_c"], false);
//Dragon Knigth
Items.dragonknigthisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'Dragon Knigth'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Strength', 'Dragon Knigth'], "panorama/images/heroes/icons/npc_dota_hero_dragon_knight_png.vtex_c");
Items.dragonknigthfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Strength', 'Dragon Knigth'], 'Способности для комбо', ["panorama/images/spellicons/dragon_knight_breathe_fire_png.vtex_c", "panorama/images/spellicons/dragon_knight_dragon_tail_png.vtex_c", "panorama/images/spellicons/dragon_knight_elder_dragon_form_png.vtex_c"], false);
//EarthShakere
Items.earsthshakerisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'EarthShaker'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Strength', 'EarthShaker'], "panorama/images/heroes/icons/npc_dota_hero_earthshaker_png.vtex_c");
Items.earsthshakerfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Strength', 'EarthShaker'], 'Способности для комбо', ["panorama/images/spellicons/earthshaker_fissure_png.vtex_c", "panorama/images/spellicons/earthshaker_enchant_totem_png.vtex_c", "panorama/images/spellicons/greevil_echo_slam_png.vtex_c"], false);
Items.safeStun = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'EarthShaker'], 'Stop cast in stunned hero', false);
//Legion
Items.legionisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'Legion Commander'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Strength', 'Legion Commander'], "panorama/images/heroes/icons/npc_dota_hero_legion_commander_alt1_png.vtex_c");
Items.legionInvis = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'Legion Commander'], 'Enable Invis Combo', false);
Items.legionfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Strength', 'Legion Commander'], 'Способности для комбо', ["panorama/images/spellicons/legion_commander_overwhelming_odds_png.vtex_c", "panorama/images/spellicons/legion_commander_press_the_attack_png.vtex_c", "panorama/images/spellicons/legion_commander_duel_png.vtex_c"], false);
Items.legionItems = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Strength', 'Legion Commander'], 'Items', ["panorama/images/items/blink_png.vtex_c", "panorama/images/items/blade_mail_png.vtex_c", "panorama/images/items/black_king_bar_png.vtex_c", "panorama/images/items/mjollnir_png.vtex_c", "panorama/images/items/pipe_png.vtex_c", "panorama/images/items/crimson_guard_png.vtex_c", "panorama/images/items/heavens_halberd_png.vtex_c", "panorama/images/items/lotus_orb_png.vtex_c", "panorama/images/items/shivas_guard_png.vtex_c"], false);
//Lifestealer
Items.lifestealearisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'Lifestealer'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Strength', 'Lifestealer'], "panorama/images/heroes/icons/npc_dota_hero_life_stealer_png.vtex_c");
Items.lifestealearfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Strength', 'Lifestealer'], 'Способности для комбо', ["panorama/images/spellicons/life_stealer_rage_png.vtex_c", "panorama/images/spellicons/life_stealer_open_wounds_png.vtex_c"], false);
//lycan
Items.lycanisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'Lycan'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Strength', 'Lycan'], "panorama/images/heroes/icons/npc_dota_hero_lycan_png.vtex_c");
Items.lycanfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Strength', 'Lycan'], 'Способности для комбо', ["panorama/images/spellicons/lycan_summon_wolves_png.vtex_c", "panorama/images/spellicons/lycan_howl_png.vtex_c", "panorama/images/spellicons/lycan_shapeshift_png.vtex_c"], false);
//mars
Items.marsisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'Mars'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Strength', 'Mars'], "panorama/images/heroes/icons/npc_dota_hero_mars_png.vtex_c");
Items.marsfirstSkill = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'Mars', 'Способности для комбо'], 'Enable Spear of Mars', false);
Items.marssecondSkill = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'Mars', 'Способности для комбо'], 'Enable Gods Rebuke', false);
Items.marsultimateSkill = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'Mars', 'Способности для комбо'], 'Enable Arena of Blood', false);
//nigthstalker
Items.nigthstalkerisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'Nigth Stalker'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Strength', 'Nigth Stalker'], "panorama/images/heroes/icons/npc_dota_hero_night_stalker_png.vtex_c");
Items.nigthstalkerfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Strength', 'Nigth Stalker'], 'Способности для комбо', ["panorama/images/spellicons/night_stalker_void_png.vtex_c", "panorama/images/spellicons/night_stalker_crippling_fear_png.vtex_c", "panorama/images/spellicons/night_stalker_darkness_png.vtex_c"], false);
//slardar
Items.slardarisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'Slardar'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Strength', 'Slardar'], "panorama/images/heroes/icons/npc_dota_hero_slardar_png.vtex_c");
Items.slardarfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Strength', 'Slardar'], 'Способности для комбо', ["panorama/images/spellicons/slardar_sprint_png.vtex_c", "panorama/images/spellicons/slardar_slithereen_crush_png.vtex_c", "panorama/images/spellicons/slardar_amplify_damage_png.vtex_c"], false);
//Spirit Breaker
Items.spiritbreakerisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'Spirit Breaker'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Strength', 'Spirit Breaker'], "panorama/images/heroes/icons/npc_dota_hero_spirit_breaker_png.vtex_c");
Items.spiritbreakerfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Strength', 'Spirit Breaker'], 'Способности для комбо', ["panorama/images/spellicons/spirit_breaker_charge_of_darkness_png.vtex_c", "panorama/images/spellicons/spirit_breaker_empowering_haste_png.vtex_c", "panorama/images/spellicons/spirit_breaker_nether_strike_png.vtex_c"], false);
//sven
Items.svenisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'Sven'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Strength', 'Sven'], "panorama/images/heroes/icons/npc_dota_hero_sven_png.vtex_c");
Items.svenfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Strength', 'Sven'], 'Способности для комбо', ["panorama/images/spellicons/sven_storm_bolt_png.vtex_c", "panorama/images/spellicons/sven_warcry_png.vtex_c", "panorama/images/spellicons/sven_gods_strength_png.vtex_c"], false);
//Tidehunter
Items.tidehunterisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'Tidehunter'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Strength', 'Tidehunter'], "panorama/images/heroes/icons/npc_dota_hero_tidehunter_png.vtex_c");
Items.tidehunterfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Strength', 'Tidehunter'], 'Способности для комбо', ["panorama/images/spellicons/tidehunter_gush_png.vtex_c", "panorama/images/spellicons/tidehunter_anchor_smash_png.vtex_c", "panorama/images/spellicons/tidehunter_ravage_png.vtex_c"], false);
//tiny
Items.tinyisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'Tiny'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Strength', 'Tiny'], "panorama/images/heroes/icons/npc_dota_hero_tiny_png.vtex_c");
Items.tinyfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Strength', 'Tiny'], 'Способности для комбо', ["panorama/images/spellicons/tiny_avalanche_png.vtex_c", "panorama/images/spellicons/tiny_toss_png.vtex_c"], false);
//Undying
Items.undyingisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'Undying'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Strength', 'Undying'], "panorama/images/heroes/icons/npc_dota_hero_undying_png.vtex_c");
Items.undyingfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Strength', 'Undying'], 'Способности для комбо', ["panorama/images/spellicons/undying_decay_png.vtex_c", "panorama/images/spellicons/undying_soul_rip_png.vtex_c", "panorama/images/spellicons/undying_tombstone_png.vtex_c", "panorama/images/spellicons/undying_flesh_golem_png.vtex_c"], false);
//Wraith King
Items.wraithkingisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'Wraith King'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Strength', 'Wraith King'], "panorama/images/heroes/icons/npc_dota_hero_skeleton_king_png.vtex_c");
Items.wraithkingfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Strength', 'Wraith King'], 'Способности для комбо', ["panorama/images/spellicons/skeleton_king_hellfire_blast_png.vtex_c", "panorama/images/spellicons/skeleton_king_mortal_strike_png.vtex_c"], false);
//Items.PudgeEnableCombo = Menu.AddToggle(['GDM','Герои для комбо','Strength','Pudge'], 'Включить скрипт', false);
//Menu.SetImage(['GDM','Герои для комбо','Strength','Pudge'],"panorama/images/heroes/icons/npc_dota_hero_ancient_apparition_png.vtex_c");
//let optionHeroPudgeBlinkMinRange = Menu.AddSlider(['GDM','Герои для комбо','Strength','Pudge','Items'], 'Min Distance to use Blink', 1,1200,30,1);
//Items.optionHeroPudgeBlink = Menu.AddMultiSelect(['GDM','Герои для комбо','Strength','Pudge'], 'Items', ["panorama/images/items/blink_png.vtex_c","panorama/images/items/force_staff_png.vtex_c"],false);
Items.PudgeEnableCombo = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'Pudge'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Strength', 'Pudge'], "panorama/images/heroes/icons/npc_dota_hero_pudge_alt2_png.vtex_c");
Items.optionHeroPudgeHookItems = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'Pudge'], 'Использовать вещи', false);
//Items.optionHeroPudgeBlink = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Strength', 'Pudge'], 'Использовать вещи в комбо', ["panorama/images/items/blink_png.vtex_c", "panorama/images/items/force_staff_png.vtex_c"], false);
//let optionHeroPudgeBlinkMinRange = Menu.AddSlider(['GDM', 'Герои для комбо', 'Strength', 'Pudge'], 'Мин дистанция для блинка', 250, 1200, 50);
Items.optionHeroPudgeHookCombo = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Strength', 'Pudge'], 'Cпособности для комбо', ["panorama/images/spellicons/pudge_meat_hook_png.vtex_c", "panorama/images/spellicons/pudge_rot_png.vtex_c", "panorama/images/spellicons/pudge_dismember_png.vtex_c"], false);
Items.optionHeroPudgeHook = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'Pudge'], 'Включить помошник для хука', false);
Items.optionHeroPudgeHookKey = Menu.AddKeyBind(['GDM', 'Герои для комбо', 'Strength', 'Pudge'], 'Кнопка для хука', Enum.ButtonCode.KEY_NONE);
Items.optionHeroPudgeHookAllies = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'Pudge'], 'Хукать союзников', false);
Items.optionHeroPudgeHookStaff = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'Pudge'], 'Использовать форстаф если герой за крипами', false);
Items.optionHeroPudgeHookComboMaxRange = Menu.AddSlider(['GDM', 'Герои для комбо', 'Strength', 'Pudge'], 'Макс дистанция хука', 250, 1550, 1000);
Items.optionHeroPudgeHookAcquiRange = Menu.AddSlider(['GDM', 'Герои для комбо', 'Strength', 'Pudge'], 'Радиус для поиска цели', 250, 1000, 50);
//Items.optionHeroPudgeHookUlt = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'Pudge'], 'Использовать ульт', false);
//Items.optionHeroPudgeHookRot = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'Pudge'], 'Использовать ROOT', false);
Items.optionHeroPudgeHookJuke = Menu.AddSlider(['GDM', 'Герои для комбо', 'Strength', 'Pudge'], 'Точность хука', 0, 12, 2);
Items.PudgeCancelTP = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'Pudge'], 'Сбитие ТП если враг в тумане', false);
Items.PudgeKillstill = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'Pudge'], 'Килстил хуком', false);
Items.optionHeroPudgeFarm = Menu.AddToggle(['GDM', 'Герои для комбо', 'Strength', 'Pudge'], 'Добивать ROOT крипов', false);
Items.optionHeroPudgeFarmHP = Menu.AddSlider(['GDM', 'Герои для комбо', 'Strength', 'Pudge'], 'ХП для добивание вонючкой', 5, 75, 5);
//Agillity Heroes
//Bloodseeker
Items.bloodseekerisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Bloodseeker'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Agillity', 'Bloodseeker'], "panorama/images/heroes/icons/npc_dota_hero_bloodseeker_png.vtex_c");
Items.bloodseekerEulCombo = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Bloodseeker'], 'Enable Euls Combo', false);
Items.bloodseekerautofirstM = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Bloodseeker'], 'Enable Auto BloodRage on my hero', false);
Items.bloodseekerautofirstE = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Bloodseeker'], 'Auto BloodRage on Enemy in Combo', false);
Items.bloodseekerfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Agillity', 'Bloodseeker'], 'Способности для комбо', ["panorama/images/spellicons/bloodseeker_bloodrage_png.vtex_c", "panorama/images/spellicons/bloodseeker_blood_bath_png.vtex_c", "panorama/images/spellicons/bloodseeker_rupture_png.vtex_c"], false);
//Bounty Hunter
Items.bountyhunterisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Bounty Hunter'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Agillity', 'Bounty Hunter'], "panorama/images/heroes/icons/npc_dota_hero_bounty_hunter_png.vtex_c");
Items.bountyhunterautoultimateSkill = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Bounty Hunter'], 'Enable Auto Track', false);
Items.bountyhunterthirdskill = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Bounty Hunter'], 'Enable Auto Invis in low HP', false);
let bountyHunterHpPrs = Menu.AddSlider(['GDM', 'Герои для комбо', 'Agillity', 'Bounty Hunter'], 'HP% to use Invis', 1, 100, 30, 1);
Items.bountyhunterfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Agillity', 'Bounty Hunter'], 'Способности для комбо', ["panorama/images/spellicons/bounty_hunter_shuriken_toss_png.vtex_c", "panorama/images/spellicons/bounty_hunter_wind_walk_png.vtex_c", "panorama/images/spellicons/bounty_hunter_track_png.vtex_c"], false);
//Drow Ranger
Items.drowrangerisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Drow Ranger'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Agillity', 'Drow Ranger'], "panorama/images/heroes/icons/npc_dota_hero_drow_ranger_png.vtex_c");
Items.drowrangerthirdskill = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Drow Ranger'], 'Enable Auto Use True  Shoot ', false);
Items.drowrangerfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Agillity', 'Drow Ranger'], 'Способности для комбо', ["panorama/images/spellicons/drow_ranger_frost_arrows_png.vtex_c", "panorama/images/spellicons/drow_ranger_wave_of_silence_png.vtex_c"], false);
Items.drowrangersecondSkill = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Drow Ranger'], 'Haras Frost Arrow ', false);
Items.frostArrowKey = Menu.AddKeyBind(['GDM', 'Герои для комбо', 'Agillity', 'Drow Ranger'], 'Harass Key', Enum.ButtonCode.KEY_NONE);
//Void
Items.voidisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Void'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Agillity', 'Void'], "panorama/images/heroes/icons/npc_dota_hero_faceless_void_png.vtex_c");
Items.autoTimeWalk = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Void'], 'Enable Auto Time Walk', false);
let optionVoidHpSave = Menu.AddSlider(['GDM', 'Герои для комбо', 'Agillity', 'Void'], 'Auto Time Walk HP%', 1, 100, 30, 1);
Items.voidfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Agillity', 'Void'], 'Способности для комбо', ["panorama/images/spellicons/faceless_void_time_walk_png.vtex_c", "panorama/images/spellicons/faceless_void_time_dilation_png.vtex_c", "panorama/images/spellicons/faceless_void_chronosphere_png.vtex_c"], false);
//Gyrocopter
Items.gyrocopterisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Gyrocopter'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Agillity', 'Gyrocopter'], "panorama/images/heroes/icons/npc_dota_hero_gyrocopter_png.vtex_c");
Items.gyrocopterfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Agillity', 'Gyrocopter'], 'Способности для комбо', ["panorama/images/spellicons/gyrocopter_rocket_barrage_png.vtex_c", "panorama/images/spellicons/gyrocopter_homing_missile_png.vtex_c", "panorama/images/spellicons/gyrocopter_flak_cannon_png.vtex_c", "panorama/images/spellicons/gyrocopter_call_down_png.vtex_c"], false);
//Juggernaut
Items.juggernautisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Juggernaut'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Agillity', 'Juggernaut'], "panorama/images/heroes/icons/npc_dota_hero_juggernaut_png.vtex_c");
Items.juggernautfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Agillity', 'Juggernaut'], 'Способности для комбо', ["panorama/images/spellicons/juggernaut_blade_fury_png.vtex_c", "panorama/images/spellicons/juggernaut_healing_ward_png.vtex_c", "panorama/images/spellicons/juggernaut_omni_slash_png.vtex_c"], false);
//Luna
Items.lunaisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Luna'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Agillity', 'Luna'], "panorama/images/heroes/icons/npc_dota_hero_luna_png.vtex_c");
Items.lunafirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Agillity', 'Luna'], 'Способности для комбо', ["panorama/images/spellicons/luna_lucent_beam_png.vtex_c", "panorama/images/spellicons/luna_eclipse_png.vtex_c"], false);
//Medusa
Items.medusaisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Medusa'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Agillity', 'Medusa'], "panorama/images/heroes/icons/npc_dota_hero_medusa_png.vtex_c");
Items.medusasecondSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Agillity', 'Medusa'], 'Способности для комбо', ["panorama/images/spellicons/medusa_mystic_snake_png.vtex_c", "panorama/images/spellicons/medusa_mana_shield_png.vtex_c", "panorama/images/spellicons/medusa_stone_gaze_png.vtex_c"], false);
//Nagasiren
Items.nagasirenisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Naga Siren'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Agillity', 'Naga Siren'], "panorama/images/heroes/icons/npc_dota_hero_naga_siren_png.vtex_c");
Items.nagaMeteorCombo = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Naga Siren'], 'Enable Meteor Combo', false);
Items.nagasirenfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Agillity', 'Naga Siren'], 'Способности для комбо', ["panorama/images/spellicons/naga_siren_mirror_image_png.vtex_c", "panorama/images/spellicons/naga_siren_ensnare_png.vtex_c"], false);
//Nyx Assasin
Items.nyxassasinisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Nyx Assasin'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Agillity', 'Nyx Assasin'], "panorama/images/heroes/icons/npc_dota_hero_nyx_assassin_png.vtex_c");
Items.nyxassasinfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Agillity', 'Nyx Assasin'], 'Способности для комбо', ["panorama/images/spellicons/nyx_assassin_impale_png.vtex_c", "panorama/images/spellicons/nyx_assassin_mana_burn_png.vtex_c", "panorama/images/spellicons/nyx_assassin_spiked_carapace_png.vtex_c"], false);
Items.nyxassasinAutoUltimate = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Nyx Assasin'], 'Enable auto Ultimate', false);
let nyxassasinHpForUlti = Menu.AddSlider(['GDM', 'Герои для комбо', 'Agillity', 'Nyx Assasin'], 'Ultimate HP%', 1, 100, 30, 1);
//Phantom Lancer
Items.phantomlancerisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Phantom Lancer'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Agillity', 'Phantom Lancer'], "panorama/images/heroes/icons/npc_dota_hero_phantom_lancer_png.vtex_c");
Items.phantomlancerfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Agillity', 'Phantom Lancer'], 'Способности для комбо', ["panorama/images/spellicons/phantom_lancer_spirit_lance_png.vtex_c", "panorama/images/spellicons/phantom_lancer_doppelwalk_png.vtex_c"], false);
//Razor
Items.razorisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Razor'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Agillity', 'Razor'], "panorama/images/heroes/icons/npc_dota_hero_razor_png.vtex_c");
Items.razorfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Agillity', 'Razor'], 'Способности для комбо', ["panorama/images/spellicons/razor_plasma_field_png.vtex_c", "panorama/images/spellicons/razor_static_link_alt_png.vtex_c", "panorama/images/spellicons/razor_eye_of_the_storm_png.vtex_c"], false);
//Shadow Fiend
Items.shadowfiendisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Shadow Fiend'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Agillity', 'Shadow Fiend'], "panorama/images/heroes/icons/npc_dota_hero_nevermore_alt1_png.vtex_c");
Items.shadowfiendfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Agillity', 'Shadow Fiend'], 'Способности для комбо', ["panorama/images/spellicons/nevermore_shadowraze3_png.vtex_c", "panorama/images/spellicons/nevermore_requiem_png.vtex_c"], false);
Items.shadowFiendsItems = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Agillity', 'Shadow Fiend'], 'Items', ["panorama/images/items/black_king_bar_png.vtex_c", "panorama/images/items/blink_png.vtex_c", "panorama/images/items/sheepstick_png.vtex_c", "panorama/images/items/ethereal_blade_png.vtex_c", "panorama/images/items/veil_of_discord_png.vtex_c", "panorama/images/items/nullifier_png.vtex_c"], false);
let optionSFBlink = Menu.AddSlider(['GDM', 'Герои для комбо', 'Agillity', 'Shadow Fiend'], 'Blink Distance', 1, 1200, 30, 1);
Items.shadowfiendenableKillSteal = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Shadow Fiend'], 'Enable Kill Steal', false);
Items.shadowfiendDragonKillSteal = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Shadow Fiend'], 'Enable Kill Steal by Shadowraze', false);
Items.shadowfiendeulCombo = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Shadow Fiend'], 'Enable Eul Combo', false);
Items.shadowfiendEulComboKey = Menu.AddKeyBind(['GDM', 'Герои для комбо', 'Agillity', 'Shadow Fiend'], 'Enable Eul Combo Key', Enum.ButtonCode.KEY_NONE);
Items.shadowFiendEulItems = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Agillity', 'Shadow Fiend'], 'Items Eul Combo Key', ["panorama/images/items/black_king_bar_png.vtex_c", "panorama/images/items/sheepstick_png.vtex_c", "panorama/images/items/ethereal_blade_png.vtex_c", "panorama/images/items/veil_of_discord_png.vtex_c", "panorama/images/items/nullifier_png.vtex_c"], false);
Items.shadowfiendLotarCombo = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Shadow Fiend', 'Способности для комбо'], 'Enable Lotar Combo', false);
//Slark
Items.slarkisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Slark'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Agillity', 'Slark'], "panorama/images/heroes/icons/npc_dota_hero_slark_png.vtex_c");
Items.slarkfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Agillity', 'Slark'], 'Способности для комбо', ["panorama/images/spellicons/slark_dark_pact_png.vtex_c", "panorama/images/spellicons/slark_pounce_png.vtex_c"], false);
Items.slarkultimateSkill = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Slark'], 'Enable Auto Ultimate', false);
let optionHpSlark = Menu.AddSlider(['GDM', 'Герои для комбо', 'Agillity', 'Slark'], 'Shadow Dance HP%', 1, 100, 30, 1);
//Sniper
Items.sniperisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Sniper'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Agillity', 'Sniper'], "panorama/images/heroes/icons/npc_dota_hero_sniper_png.vtex_c");
Items.sniperfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Agillity', 'Sniper'], 'Способности для комбо', ["panorama/images/spellicons/sniper_shrapnel_png.vtex_c"], false);
Items.sniperultimateSkill = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Sniper'], 'Enable Auto Ultimate', false);
Items.snipersecondSkill = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Sniper'], 'Dont use Ultimate if Combo Key is Pressed', false);
//Spectre
Items.spectreisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Spectre'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Agillity', 'Spectre'], "panorama/images/heroes/icons/npc_dota_hero_spectre_png.vtex_c");
Items.spectrefirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Agillity', 'Spectre'], 'Способности для комбо', ["panorama/images/spellicons/spectre_spectral_dagger_png.vtex_c", "panorama/images/spellicons/spectre_haunt_png.vtex_c"], false);
let optionRangeUseHaunt = Menu.AddSlider(['GDM', 'Герои для комбо', 'Agillity', 'Spectre', 'Способности для комбо'], 'Min Distance to use Ultimate', 1, 1000, 30, 1);
//Terrorblade
Items.terrorbladeisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Terrorblade'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Agillity', 'Terrorblade'], "panorama/images/heroes/icons/npc_dota_hero_terrorblade_png.vtex_c");
Items.terrorbladefirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Agillity', 'Terrorblade'], 'Способности для комбо', ["panorama/images/spellicons/terrorblade_reflection_png.vtex_c", "panorama/images/spellicons/terrorblade_conjure_image_png.vtex_c", "panorama/images/spellicons/terrorblade_metamorphosis_png.vtex_c", "panorama/images/spellicons/terrorblade_sunder_png.vtex_c"], false);
let optionHpTerrorblade = Menu.AddSlider(['GDM', 'Герои для комбо', 'Agillity', 'Terrorblade'], 'HP% to use Ultimate', 1, 100, 30, 1);
//Ursa
Items.ursaisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Ursa'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Agillity', 'Ursa'], "panorama/images/heroes/icons/npc_dota_hero_ursa_png.vtex_c");
Items.ursafirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Agillity', 'Ursa'], 'Способности для комбо', ["panorama/images/spellicons/ursa_earthshock_png.vtex_c", "panorama/images/spellicons/ursa_overpower_png.vtex_c", "panorama/images/spellicons/ursa_enrage_png.vtex_c"], false);
//Vengeful Spirit
Items.vendefulspiritisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Vengeful Spirit'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Agillity', 'Vengeful Spirit'], "panorama/images/heroes/icons/npc_dota_hero_vengefulspirit_png.vtex_c");
Items.vendefulspiritfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Agillity', 'Vengeful Spirit'], 'Способности для комбо', ["panorama/images/spellicons/vengefulspirit_magic_missile_png.vtex_c", "panorama/images/spellicons/vengefulspirit_wave_of_terror_png.vtex_c"], false);
//Venomancer
Items.venomancerisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Venomancer'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Agillity', 'Venomancer'], "panorama/images/heroes/icons/npc_dota_hero_venomancer_png.vtex_c");
Items.venomancerfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Agillity', 'Venomancer'], 'Способности для комбо', ["panorama/images/spellicons/venomancer_venomous_gale_png.vtex_c", "panorama/images/spellicons/venomancer_plague_ward_png.vtex_c", "panorama/images/spellicons/venomancer_poison_nova_png.vtex_c"], false);
//Viper
Items.viperisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Viper'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Agillity', 'Viper'], "panorama/images/heroes/icons/npc_dota_hero_viper_png.vtex_c");
Items.viperfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Agillity', 'Viper'], 'Способности для комбо', ["panorama/images/spellicons/viper_poison_attack_png.vtex_c", "panorama/images/spellicons/viper_nethertoxin_png.vtex_c", "panorama/images/spellicons/viper_viper_strike_png.vtex_c"], false);
//Skills Clincz
Items.ClinkzisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Clinkz'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Agillity', 'Clinkz'], "panorama/images/heroes/icons/npc_dota_hero_clinkz_png.vtex_c");
Items.thirdSkillAuto = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Clinkz'], 'Auto Skeleton Walk', false);
let optionHpClincz = Menu.AddSlider(['GDM', 'Герои для комбо', 'Agillity', 'Clinkz'], 'Skeleton Walk HP%', 1, 100, 30, 1);
Items.enableHaras = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Clinkz'], 'Enable Haras', false);
Items.harasKey = Menu.AddKeyBind(['GDM', 'Герои для комбо', 'Agillity', 'Clinkz'], 'Haras Key', Enum.ButtonCode.KEY_NONE);
//Skills
Items.ClinkzfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Agillity', 'Clinkz'], 'Способности для комбо', ["panorama/images/spellicons/clinkz_strafe_png.vtex_c", "panorama/images/spellicons/clinkz_searing_arrows_png.vtex_c", "panorama/images/spellicons/clinkz_death_pact_png.vtex_c"], false);
//Phantom Combo
Items.PhantomisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Phantom Assasin'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Agillity', 'Phantom Assasin'], "panorama/images/heroes/icons/npc_dota_hero_phantom_assassin_png.vtex_c");
Items.dagerKillSteal = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Phantom Assasin'], 'Dagger Kill Steal', false);
//Способности для комбо
Items.firstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Agillity', 'Phantom Assasin'], 'Способности для комбо', ["panorama/images/spellicons/phantom_assassin_stifling_dagger_png.vtex_c", "panorama/images/spellicons/phantom_assassin_phantom_strike_png.vtex_c"], false);
//Weawer
Items.weaverisEnabledOption = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Weaver'], 'Включить скрипт', false);
Menu.SetImage(['GDM', 'Герои для комбо', 'Agillity', 'Weaver'], "panorama/images/heroes/icons/npc_dota_hero_weaver_png.vtex_c");
Items.weaverAutoUltimate = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Weaver'], 'Enable auto Ultimate', false);
let weaverHpForUlti = Menu.AddSlider(['GDM', 'Герои для комбо', 'Agillity', 'Weaver'], 'Ultimate HP%', 1, 100, 30, 1);
Items.weaverfirstSkill = Menu.AddMultiSelect(['GDM', 'Герои для комбо', 'Agillity', 'Weaver'], 'Способности для комбо', ["panorama/images/spellicons/weaver_the_swarm_png.vtex_c", "panorama/images/spellicons/weaver_shukuchi_png.vtex_c"], false);
//morphling
Items.optionHeroMorphling = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Morphling'], 'Включить комбо Морфинга', false);
Items.optionHeroMorphlingKill = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Morphling'], 'Отображать индикатор урона', false);
Items.optionHeroMorphHPBalance = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Morphling'], 'Авто баланс ХП', false);
Items.optionHeroMorphHPBalanceDeviation = Menu.AddSlider(['GDM', 'Герои для комбо', 'Agillity', 'Morphling'], 'Разрешить отклонение ХМ от выбраного в размере', 1, 250, 50, 10);
Items.optionHeroMorphDrawBoard = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Morphling'], 'Включить табличку для баланса ХП', false);
Items.optionHeroMorphBoardToggleKey = Menu.AddKeyBind(['GDM', 'Герои для комбо', 'Agillity', 'Morphling'], 'Кнопка для включение таблички баланса', Enum.ButtonCode.KEY_P);
Items.optionHeroMorphDrawBoardXPos = Menu.AddSlider(['GDM', 'Герои для комбо', 'Agillity', 'Morphling'], 'X-Координата таблички', 1, 1500, 500, 1);
Items.optionHeroMorphDrawBoardYPos = Menu.AddSlider(['GDM', 'Герои для комбо', 'Agillity', 'Morphling'], 'Y-Координата таблички', 1, 1500, 500, 1);
Items.optionHeroMorphReplicate = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Morphling'], 'Включить Replicate комбо если оно поддерживаеться', false);
Items.optionHeroMorphReplicateBack = Menu.AddToggle(['GDM', 'Герои для комбо', 'Agillity', 'Morphling'], 'Авто возвращение в форму морфинга при малом ХП', false);
Items.optionHeroMorphReplicateBackHP = Menu.AddSlider(['GDM', 'Герои для комбо', 'Agillity', 'Morphling'], 'Процент ХП для возврата', 1, 100, 50, 5);
//Auto Use
Items.itemMidas = Menu.AddMultiSelect(['GDM', 'Вещи для комбо', 'Авто использование'], 'Авто использование', ["panorama/images/items/hand_of_midas_png.vtex_c", "panorama/images/items/satanic_png.vtex_c", "panorama/images/items/manta_png.vtex_c", "panorama/images/items/arcane_boots_png.vtex_c", "panorama/images/items/phase_boots_png.vtex_c"], false);
let HpSatanicChange = Menu.AddSlider(['GDM', 'Вещи для комбо', 'Авто использование'], 'HP% для Сатаника', 1, 100, 20, 1);
let ArcaneBootsMP = Menu.AddSlider(['GDM', 'Вещи для комбо', 'Авто использование'], 'MP% для Аркан', 1, 100, 20, 1);
//Auto Save My Hero
Items.itemsAutoSaveMyHeroe = Menu.AddToggle(['GDM', 'Вещи для комбо', 'Авто сейв героя'], 'Авто сейв героя', false);
Items.itemMagickStick = Menu.AddMultiSelect(['GDM', 'Вещи для комбо', 'Авто сейв героя'], 'Авто сейв героя', ["panorama/images/items/magic_stick_png.vtex_c", "panorama/images/items/faerie_fire_png.vtex_c", "panorama/images/items/magic_wand_png.vtex_c", "panorama/images/items/bottle_png.vtex_c"], false);
let optionAutoSaveMyHeroe = Menu.AddSlider(['GDM', 'Вещи для комбо', 'Авто сейв героя'], 'HP% для сейва', 1, 100, 400, 1);
//Items
Items.itemBlink = Menu.AddMultiSelect(['GDM', 'Вещи для комбо'], 'Включить блинк', ["panorama/images/items/blink_png.vtex_c"], true);
let optionRangeToBlink = Menu.AddSlider(['GDM', 'Вещи для комбо'], 'Макс дистанция блинка', 1, 1000, 400, 1);
let optionBlinkMin = Menu.AddSlider(['GDM', 'Вещи для комбо'], 'Мин дистанция блинка ', 1, 1200, 300, 1);
//let windrunHpChange =
// Menu.AddSlider(['GDM','Heroes','Intellect','Windrunner'], 'HP% To windrun', 1,100,30,1);
//Defend Item
Items.itemBladeMail = Menu.AddMultiSelect(['GDM', 'Вещи для комбо'], 'Защитные вещи', ["panorama/images/items/blade_mail_png.vtex_c", "panorama/images/items/black_king_bar_png.vtex_c", "panorama/images/items/mjollnir_png.vtex_c", "panorama/images/items/pipe_png.vtex_c", "panorama/images/items/crimson_guard_png.vtex_c", "panorama/images/items/lotus_orb_png.vtex_c", "panorama/images/items/shivas_guard_png.vtex_c", "panorama/images/items/hood_of_defiance_png.vtex_c"], false);
//Magical
Items.itemEterial = Menu.AddMultiSelect(['GDM', 'Вещи для комбо'], 'Магические вещи', ["panorama/images/items/ethereal_blade_png.vtex_c", "panorama/images/items/veil_of_discord_png.vtex_c", "panorama/images/items/rod_of_atos_png.vtex_c", "panorama/images/items/sheepstick_png.vtex_c", "panorama/images/items/nullifier_png.vtex_c", "panorama/images/items/dagon_5_png.vtex_c", "panorama/images/items/bloodthorn_png.vtex_c", "panorama/images/items/orchid_png.vtex_c"], false);
//SaveItem
Items.itemGhost = Menu.AddMultiSelect(['GDM', 'Вещи для комбо'], 'Ескейп вещи', ["panorama/images/items/ghost_scepter_png.vtex_c", "panorama/images/items/glimmer_cape_png.vtex_c", "panorama/images/items/hurricane_pike_png.vtex_c"], true);
//Other items
Items.itemMedal = Menu.AddMultiSelect(['GDM', 'Вещи для комбо'], 'Прочие вещи', ["panorama/images/items/medallion_of_courage_png.vtex_c", "panorama/images/items/solar_crest_png.vtex_c", "panorama/images/items/soul_ring_png.vtex_c", "panorama/images/items/necronomicon_3_png.vtex_c", "panorama/images/items/diffusal_blade_png.vtex_c", "panorama/images/items/manta_png.vtex_c", "panorama/images/items/heavens_halberd_png.vtex_c", "panorama/images/items/abyssal_blade_png.vtex_c"], false);
//Linken Destroy
Items.LinkenAtos = Menu.AddMultiSelect(['GDM', 'Вещи для комбо'], 'Снятие линки', ["panorama/images/items/rod_of_atos_png.vtex_c", "panorama/images/items/sheepstick_png.vtex_c", "panorama/images/items/bloodthorn_png.vtex_c", "panorama/images/items/orchid_png.vtex_c", "panorama/images/items/nullifier_png.vtex_c"], true);
Items.autoDodger = Menu.AddToggle(['GDM', 'Доп функции', 'Доджер'], 'Авто использование доджера', false);
Items.choodeDodgerItems = Menu.AddMultiSelect(['GDM', 'Доп функции', 'Доджер'], 'Вещи', ["panorama/images/items/cyclone_png.vtex_c", "panorama/images/items/pipe_png.vtex_c", "panorama/images/items/hood_of_defiance_png.vtex_c", "panorama/images/items/lotus_orb_png.vtex_c", "panorama/images/items/blade_mail_png.vtex_c", "panorama/images/items/black_king_bar_png.vtex_c"], false);
Items.choodeDodgerSkills = Menu.AddMultiSelect(['GDM', 'Доп функции', 'Доджер'], 'Способности', ["panorama/images/spellicons/antimage_spell_shield_png.vtex_c", "panorama/images/spellicons/life_stealer_rage_png.vtex_c", "panorama/images/spellicons/juggernaut_blade_fury_png.vtex_c", "panorama/images/spellicons/puck_phase_shift_png.vtex_c", "panorama/images/spellicons/omniknight_repel_png.vtex_c", "panorama/images/spellicons/nyx_assassin_spiked_carapace_png.vtex_c"], false);
Items.MineDestroyeroptionInvAttack = Menu.AddToggle(['GDM', 'Доп функции', 'Авто уничтожение мин'], 'Авто атака', false);
Items.Minedestr = Menu.AddMultiSelect(['GDM', 'Доп функции', 'Авто уничтожение мин'], 'ВЫбрать тим мины', ["panorama/images/spellicons/techies_land_mines_png.vtex_c", "panorama/images/spellicons/techies_stasis_trap_png.vtex_c", "panorama/images/spellicons/techies_remote_mines_png.vtex_c"], true);
//AbboutMe
Items.abboutme = Menu.AddComboBox(['GDM', 'Abbout Me'], 'Created By', ['Goldimor', 'vk.com/script_gdm'], 1);
Items.LaughEnablemama = Menu.AddToggle(['GDM', 'Доп функции', 'Мамоеб 3000'], "Включить MAMOEБ 3000", false);
Items.Laughcombostart = Menu.AddKeyBind(['GDM', 'Доп функции', 'Мамоеб 3000'], "Отправить в общий", Enum.ButtonCode.KEY_NONE);
Items.Laughsecond = Menu.AddKeyBind(['GDM', 'Доп функции', 'Мамоеб 3000'], "Отправить своим", Enum.ButtonCode.KEY_NONE);
Items.autoUseBottle = Menu.AddToggle(['GDM', 'Доп функции', 'Авто ботл на базе'], "Включить авто ботл", false);
Items.invKilSunStr = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Invoker'], "Включить килстил санстрайком", false);
Items.invDrawLinePred = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Invoker'], "Рисовать линию предикшина для санстрайка", false);
Items.invDrawIconPre = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Invoker'], "Рисовать иконку способности", false);
Items.invoAutoPrerSuns = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Invoker'], "Авто подготовка санстрайка", false);
Items.invAutmCamtoPos = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Invoker'], "Смотреть в место санстрайка", false);
Items.invAutPressUicon = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Invoker'], "Санстрайк по нажатию на картинку", false);
Items.invoKeySunstrike = Menu.AddKeyBind(['GDM', 'Герои для комбо', 'Интеллект', 'Invoker'], "Клавиша мышки для Авто санстрайка", Enum.ButtonCode.MOUSE_LEFT);
Items.autoTornKil = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Invoker'], "Килстил Торнадо - Бластом", false);
Items.invoTkils = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Invoker'], "Включить килстил Торнадо", false);
Items.invoBkils = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Invoker'], "Включить килстил Бластом", false);
Items.invoAutoPrerTorn = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Invoker'], "Авто подготовка торнадо", false);
Items.invoAutoPrerBlast = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Invoker'], "Авто подготовка бласта", false);
Items.invAvtweweE = Menu.AddToggle(['GDM', 'Герои для комбо', 'Интеллект', 'Invoker'], "Включить Авто смену Q W для бега хила", false);
/*
Items.tree = Menu.AddToggle(['GDM','Utility','Bait leave'], 'Auto Disconnect' , false),
//Items.autodisconnect = Menu.AddToggle("Auto Disconnect"),
Items.Additionaldelay = Menu.AddSlider(['GDM','Utility','Bait leave'],'Once At', 1, 10, 10,1);
Items.playersList = Menu.AddComboBox(['GDM','Utility','Bait leave'], 'Select Player' ,["Player 1", "Player 2", "Player 3", "Player 4", "Player 5", "Player 6", "Player 7", "Player 8", "Player 9", "Player 10"],1 );
Items.language = Menu.AddComboBox(['GDM','Utility','Bait leave'],"Language", ["Russian", "English"],1);
Items.button = Menu.AddKeyBind(['GDM','Utility','Bait leave'],'Key bind' ,Enum.ButtonCode.KEY_NONE);
*/
Items.autoMoveFeed = Menu.AddToggle(['GDM', 'Доп функции', 'Авто мув'], "Функция достать персонажа", false);
Items.NeadDestoyKatku = Menu.AddToggle(['GDM', 'Доп функции', 'Авто мув'], "Бегать за выбраным персонажем", false);
Items.SelectForestHero = Menu.AddKeyBind(['GDM', 'Доп функции', 'Авто мув'], "Клавиша для выбора персонажа для бега", Enum.ButtonCode.KEY_NONE);
Items.neadDestroyfoRestRetarD = Menu.AddToggle(['GDM', 'Доп функции', 'Авто мув'], "Добивать его крипов", false);
Items.pingTP = Menu.AddToggle(['GDM', 'Доп функции', 'Пинговать на ТП'], "Пинговать на ТП в тумане войны", false);
Items.myHerofarmForest = Menu.AddToggle(['GDM', 'Доп функции', 'Афто фарм леса героем'], "Включить авто фарм леса героем", false);
Items.keyForAFKfarmForest = Menu.AddKeyBind(['GDM', 'Доп функции', 'Афто фарм леса героем'], "Клавиша для старта фарма", Enum.ButtonCode.KEY_NONE);
Items.myMousePos = Menu.AddToggle(['GDM', 'Доп функции', 'Для разработки', 'Получить координаты курсора'], "Включить в лог координаты", false);
Items.myCursorButton = Menu.AddKeyBind(['GDM', 'Доп функции', 'Для разработки', 'Получить координаты курсора'], "Клавиша для получение координат", Enum.ButtonCode.KEY_NONE);
items.OnScriptLoad = items.OnGameStart = Items.Init;
items.OnPrepareUnitOrders = (order) => {
    let myHero = EntitySystem.GetLocalHero();
    if (!myHero) {
        return;
    }
    if (!order || !order.ability) {
        return;
    }
    if (order.ability.GetName() === 'tinker_rearm') {
        let soulring = myHero.GetItem('item_soul_ring', true);
        if (soulring && soulring.IsCastable(0) && !soulring.GetCooldown() && Menu.GetValue(Items.optionTinkerSoulRearm) === true) {
            soulring.CastNoTarget();
        }
    }
};
items.OnProjectile = (projectile) => {
    if (Menu.GetValue(Items.autoDodger) === true) {
        if (!projectile || !projectile.source || !projectile.target) {
            return;
        }
        if (!projectile.dodgeable) {
            return;
        }
        if (!projectile.source.IsHero()) {
            return;
        }
        if (projectile.isAttack) {
            return;
        }
        let myHero = EntitySystem.GetLocalHero();
        if (!myHero) {
            return;
        }
        if (projectile.target !== myHero) {
            return;
        }
        if (projectile.source.IsSameTeam(projectile.target)) {
            return;
        }
        if (projectile.source.GetTimeToFace(myHero) >= 0.06) {
            return;
        }
        let projectile_collision_size = 150;
        let hero_collision_size = 24;
        let vec1 = projectile.source.GetAbsOrigin().Length();
        let vec2 = projectile.target.GetAbsOrigin().Length();
        let totalvec = vec1 - vec2;
        let dis = totalvec - projectile_collision_size - hero_collision_size;
        let delay = dis / (projectile.moveSpeed + 1);
        let time = GameRules.GetGameTime();
        let desc = "";
        let source = projectile.source;
        Items.DodgeUpdate([time, delay, desc, source]);
    }
};
items.OnDraw = () => {
    /*
if (Menu.GetValue(Items.hitoptionEnable) === true) {
    let fontSave = 0;
    let myHero = EntitySystem.GetLocalHero();
    let enemy = Input.GetNearestHeroToCursor(Enum.TeamType.TEAM_ENEMY);
    Items.hitgetHitNumbers(myHero,enemy);
    Items.hitgetHitNumbers(enemy,myHero);
    let fontNow = parseInt(Menu.GetValue(Items.hitfontSize).toString());
}
*/
};
items.OnLinearProjectileCreate = (projectile) => {
    if (Menu.GetValue(Items.autoDodger) === true) {
        let myHero = EntitySystem.GetLocalHero();
        if (!projectile || !projectile.origin || !projectile.velocity) {
            return;
        }
        if (!myHero) {
            return;
        }
        if (projectile.source.IsSameTeam(myHero)) {
            return;
        }
        /*   let projectcreate = projectile.source;


if (projectile.source && projectile.source.GetTimeToFacePosition(myHero)){
    return
}*/
        //cos_theta = vec1:Dot(vec2) / (vec1:Length() * vec2:Length())
        let pos = myHero.GetAbsOrigin();
        let vec1 = pos.sub(projectile.origin);
        let vec2 = projectile.velocity;
        let firstar = vec1.mul(vec2);
        let secondar = vec1.Length() * vec2.Length();
        let cos_theta = firstar.Scale(secondar);
        // let test = cos_theta - 1;
        // if (Math.abs() >= 0.05)  {return}
        let projectile_collision_size = 150;
        let hero_collision_size = 24;
        let dis = vec1.Length() - projectile_collision_size - hero_collision_size;
        let speed = projectile.velocity.Length();
        let delay = (dis) / (speed + 1);
        let time = GameRules.GetGameTime();
        let desc = "";
        let source = projectile.source;
        Items.DodgeUpdate([time, delay, desc, source]);
    }
};
items.OnUnitAnimation = (animation) => {
    if (Menu.GetValue(Items.autoDodger) === true) {
        if (!animation || !animation.unit) {
            return;
        }
        let myHero = EntitySystem.GetLocalHero();
        let myHeroPos = myHero.GetAbsOrigin();
        if (!myHero) {
            return;
        }
        if (animation.unit && myHero.IsSameTeam(animation.unit)) {
            return;
        }
        if (!myHero.IsAlive()) {
            return;
        }
        if (animation.unit.GetTimeToFacePosition(myHeroPos) >= 0.05) {
            return;
        }
        if (!animation.unit.IsEntityInRange(myHero, 1200)) {
            return;
        }
        if (!myHero.IsAlive()) {
            Items.msg_queue = [];
        }
        let morg = myHero.GetAbsOrigin().Length();
        let worg = animation.unit.GetAbsOrigin().Length();
        let distance = morg - worg - 24;
        if (animation.unit.GetUnitName() === 'npc_dota_hero_bloodseeker') {
            let radius = 1052;
            if (animation.sequenceName === 'cast4_rupture_anim' && myHero.IsEntityInRange(animation.unit, radius)) {
                let time = GameRules.GetGameTime();
                let delay = animation.castpoint;
                let desc = "";
                let source = animation.unit;
                Items.DodgeUpdate([time, delay, desc, source]);
            }
        }
        if (animation.unit.GetUnitName() === 'npc_dota_hero_crystal_maiden') {
            let radius = 702;
            if (animation.sequenceName === 'frostbite_anim' && myHero.IsEntityInRange(animation.unit, radius)) {
                let time = GameRules.GetGameTime();
                let delay = animation.castpoint;
                let desc = "";
                let source = animation.unit;
                Items.DodgeUpdate([time, delay, desc, source]);
            }
        }
        if (animation.unit.GetUnitName() === 'npc_dota_hero_juggernaut') {
            let radius = 350 + 425;
            if (animation.sequenceName === 'attack_omni_cast' && myHero.IsEntityInRange(animation.unit, radius)) {
                let time = GameRules.GetGameTime();
                let delay = animation.castpoint;
                let desc = "";
                let source = animation.unit;
                Items.DodgeUpdate([time, delay, desc, source]);
            }
        }
        if (animation.unit.GetUnitName() === 'npc_dota_hero_lina') {
            let radius = 725;
            if (animation.sequenceName === 'laguna_blade_anim' && myHero.IsEntityInRange(animation.unit, radius)) {
                let time = GameRules.GetGameTime();
                let delay = animation.castpoint;
                let desc = "";
                let source = animation.unit;
                Items.DodgeUpdate([time, delay, desc, source]);
            }
        }
        if (animation.unit.GetUnitName() === 'npc_dota_hero_lion') {
            let radius1 = 902;
            if (animation.sequenceName === 'impale_anim' && myHero.IsEntityInRange(animation.unit, radius1)) {
                let time = GameRules.GetGameTime();
                let delay = animation.castpoint;
                let desc = "";
                let source = animation.unit;
                Items.DodgeUpdate([time, delay, desc, source]);
            }
            let radius2 = 952;
            if (animation.sequenceName === 'finger_anim' && myHero.IsEntityInRange(animation.unit, radius2)) {
                let time = GameRules.GetGameTime();
                let delay = animation.castpoint;
                let desc = "";
                let source = animation.unit;
                Items.DodgeUpdate([time, delay, desc, source]);
            }
        }
        if (animation.unit.GetUnitName() === 'npc_dota_hero_luna') {
            let radius = 852;
            if (animation.sequenceName === 'moonfall_cast1_lucent_beam_anim' && myHero.IsEntityInRange(animation.unit, radius)) {
                let time = GameRules.GetGameTime();
                let delay = animation.castpoint;
                let desc = "";
                let source = animation.unit;
                Items.DodgeUpdate([time, delay, desc, source]);
            }
        }
        if (animation.unit.GetUnitName() === 'npc_dota_hero_necrolyte') {
            let radius = 702;
            if (animation.sequenceName === 'cast_ult_anim' && myHero.IsEntityInRange(animation.unit, radius)) {
                let time = GameRules.GetGameTime();
                let delay = animation.castpoint;
                let desc = "";
                let source = animation.unit;
                Items.DodgeUpdate([time, delay, desc, source]);
            }
        }
        if (animation.unit.GetUnitName() === 'npc_dota_hero_ogre_magi') {
            let radius = 600;
            if (animation.sequenceName === 'cast1_fireblast_anim' && myHero.IsEntityInRange(animation.unit, radius)) {
                let time = GameRules.GetGameTime();
                let delay = animation.castpoint;
                let desc = "";
                let source = animation.unit;
                Items.DodgeUpdate([time, delay, desc, source]);
            }
        }
        if (animation.unit.GetUnitName() === 'npc_dota_hero_pudge') {
            let radius = 250;
            if (animation.sequenceName === 'pudge_dismember_start' && myHero.IsEntityInRange(animation.unit, radius)) {
                let time = GameRules.GetGameTime();
                let delay = animation.castpoint;
                let desc = "";
                let source = animation.unit;
                Items.DodgeUpdate([time, delay, desc, source]);
            }
        }
        if (animation.unit.GetUnitName() === 'npc_dota_hero_rubick') {
            let radius = 1052;
            if (animation.sequenceName === 'rubick_cast_telekinesis_anim' && myHero.IsEntityInRange(animation.unit, radius)) {
                let time = GameRules.GetGameTime();
                let delay = animation.castpoint;
                let desc = "";
                let source = animation.unit;
                Items.DodgeUpdate([time, delay, desc, source]);
            }
        }
        if (animation.unit.GetUnitName() === 'npc_dota_hero_shadow_shaman') {
            let radius = 500;
            if (animation.sequenceName === 'cast_channel_shackles_anim' && myHero.IsEntityInRange(animation.unit, radius)) {
                let time = GameRules.GetGameTime();
                let delay = animation.castpoint;
                let desc = "";
                let source = animation.unit;
                Items.DodgeUpdate([time, delay, desc, source]);
            }
        }
        if (animation.unit.GetUnitName() === 'npc_dota_hero_tinker') {
            let radius = 725 + 220;
            if (animation.sequenceName === 'laser_anim' && myHero.IsEntityInRange(animation.unit, radius)) {
                let time = GameRules.GetGameTime();
                let delay = animation.castpoint;
                let desc = "";
                let source = animation.unit;
                Items.DodgeUpdate([time, delay, desc, source]);
            }
        }
        if (animation.unit.GetUnitName() === 'npc_dota_hero_vengefulspirit') {
            let radius = 560;
            if (animation.sequenceName === 'magic_missile_anim' && myHero.IsEntityInRange(animation.unit, radius)) {
                let time = GameRules.GetGameTime();
                let delay = animation.castpoint;
                let desc = "";
                let source = animation.unit;
                Items.DodgeUpdate([time, delay, desc, source]);
            }
        }
        if (animation.unit.GetUnitName() === 'npc_dota_hero_winter_wyvern') {
            let radius = 1052;
            if (animation.sequenceName === 'cast04_winters_curse_flying_low_anim' && myHero.IsEntityInRange(animation.unit, radius)) {
                let time = GameRules.GetGameTime();
                let delay = animation.castpoint;
                let desc = "";
                let source = animation.unit;
                Items.DodgeUpdate([time, delay, desc, source]);
            }
        }
        if (animation.unit.GetUnitName() === 'npc_dota_hero_skeleton_king') {
            let radius = 1052;
            if (animation.sequenceName === 'cast1_hellfire_blast' && myHero.IsEntityInRange(animation.unit, radius)) {
                let time = GameRules.GetGameTime();
                let delay = animation.castpoint;
                let desc = "";
                let source = animation.unit;
                Items.DodgeUpdate([time, delay, desc, source]);
            }
        }
        if (animation.unit.GetUnitName() === 'npc_dota_hero_zuus') {
            let radius = 1052;
            if (animation.sequenceName === 'zeus_cast2_lightning_bolt' && myHero.IsEntityInRange(animation.unit, radius)) {
                let time = GameRules.GetGameTime();
                let delay = animation.castpoint;
                let desc = "";
                let source = animation.unit;
                Items.DodgeUpdate([time, delay, desc, source]);
            }
            if (animation.sequenceName === 'zeus_cast4_thundergods_wrath') {
                let time = GameRules.GetGameTime();
                let delay = animation.castpoint;
                let desc = "";
                let source = animation.unit;
                Items.DodgeUpdate([time, delay, desc, source]);
            }
        }
        if (animation.unit.GetUnitName() === 'npc_dota_hero_silencer') {
            let radius = 952;
            if (animation.sequenceName === 'cast_LW_anim' && myHero.IsEntityInRange(animation.unit, radius)) {
                let time = GameRules.GetGameTime();
                let delay = animation.castpoint;
                let desc = "";
                let source = animation.unit;
                Items.DodgeUpdate([time, delay, desc, source]);
            }
        }
        if (animation.unit.GetUnitName() === 'npc_dota_hero_bane') {
            let radius = 1052;
            if (animation.sequenceName === 'fiends_grip_cast_anim' && myHero.IsEntityInRange(animation.unit, radius)) {
                let time = GameRules.GetGameTime();
                let delay = animation.castpoint;
                let desc = "";
                let source = animation.unit;
                Items.DodgeUpdate([time, delay, desc, source]);
            }
        }
        if (animation.unit.GetUnitName() === 'npc_dota_hero_lich') {
            let radius = 1052;
            if (animation.sequenceName === 'frost_nova_anim' && myHero.IsEntityInRange(animation.unit, radius)) {
                let time = GameRules.GetGameTime();
                let delay = animation.castpoint;
                let desc = "";
                let source = animation.unit;
                Items.DodgeUpdate([time, delay, desc, source]);
            }
        }
        if (animation.unit.GetUnitName() === 'npc_dota_hero_sven') {
            let radius = 650;
            if (animation.sequenceName === 'shield_storm_bolt' && myHero.IsEntityInRange(animation.unit, radius)) {
                let time = GameRules.GetGameTime();
                let delay = animation.castpoint;
                let desc = "";
                let source = animation.unit;
                Items.DodgeUpdate([time, delay, desc, source]);
            }
        }
        if (animation.unit.GetUnitName() === 'npc_dota_hero_spirit_breaker') {
            let radius = 1052;
            if (animation.sequenceName === 'ultimate_anim' && myHero.IsEntityInRange(animation.unit, radius)) {
                let time = GameRules.GetGameTime();
                let delay = animation.castpoint;
                let desc = "";
                let source = animation.unit;
                Items.DodgeUpdate([time, delay, desc, source]);
            }
        }
        if (animation.unit.GetUnitName() === 'npc_dota_hero_axe') {
            let radius = 1052;
            if (animation.sequenceName == 'culling_blade_anim' && myHero.IsEntityInRange(animation.unit, radius)) {
                let time = GameRules.GetGameTime();
                let delay = animation.castpoint;
                let desc = "";
                let source = animation.unit;
                Items.DodgeUpdate([time, delay, desc, source]);
            }
        }
    }
};
/*
let heroes = {
npc_dota_hero_queenofpain: "Queen of Pain",
npc_dota_hero_antimage: "Anti-Mage",
npc_dota_hero_kunkka: "Kunkka",
npc_dota_hero_lina: "Lina",
npc_dota_hero_mirana: "Mirana",
npc_dota_hero_windrunner: "Windranger",
npc_dota_hero_slardar: "Slardar",
npc_dota_hero_lion: "Lion",
npc_dota_hero_phantom_assassin: "Phantom Assassin",
npc_dota_hero_tidehunter: "Tidehunter",
npc_dota_hero_witch_doctor: "Witch Doctor",
npc_dota_hero_vengefulspirit: "Vengeful Spirit",
npc_dota_hero_juggernaut: "Juggernaut",
npc_dota_hero_earthshaker: "Earthshaker",
npc_dota_hero_pudge: "Pudge",
npc_dota_hero_bane: "Bane",
npc_dota_hero_crystal_maiden: "Crystal Maiden",
npc_dota_hero_sven: "Sven",
npc_dota_hero_skeleton_king: "Wraith King",
npc_dota_hero_storm_spirit: "Storm Spirit",
npc_dota_hero_sand_king: "Sand King",
npc_dota_hero_nevermore: "Shadow Fiend",
npc_dota_hero_drow_ranger: "Drow Ranger",
npc_dota_hero_axe: "Axe",
npc_dota_hero_bloodseeker: "Bloodseeker",
npc_dota_hero_phantom_lancer: "Phantom Lancer",
npc_dota_hero_razor: "Razor",
npc_dota_hero_morphling: "Morphling",
npc_dota_hero_zuus: "Zeus",
npc_dota_hero_tiny: "Tiny",
npc_dota_hero_puck: "Puck",
npc_dota_hero_lich: "Lich",
npc_dota_hero_shadow_shaman: "Shadow Shaman",
npc_dota_hero_riki: "Riki",
npc_dota_hero_enigma: "Enigma",
npc_dota_hero_tinker: "Tinker",
npc_dota_hero_sniper: "Sniper",
npc_dota_hero_necrolyte: "Necrophos",
npc_dota_hero_warlock: "Warlock",
npc_dota_hero_beastmaster: "Beastmaster",
npc_dota_hero_venomancer: "Venomancer",
npc_dota_hero_faceless_void: "Faceless Void",
npc_dota_hero_death_prophet: "Death Prophet",
npc_dota_hero_pugna: "Pugna",
npc_dota_hero_templar_assassin: "Templar Assassin",
npc_dota_hero_viper: "Viper",
npc_dota_hero_luna: "Luna",
npc_dota_hero_dragon_knight: "Dragon Knight",
npc_dota_hero_dazzle: "Dazzle",
npc_dota_hero_rattletrap: "Clockwerk",
npc_dota_hero_leshrac: "Leshrac",
npc_dota_hero_furion: "Nature's Prophet",
npc_dota_hero_life_stealer: "Lifestealer",
npc_dota_hero_dark_seer: "Dark Seer",
npc_dota_hero_clinkz: "Clinkz",
npc_dota_hero_omniknight: "Omniknight",
npc_dota_hero_enchantress: "Enchantress",
npc_dota_hero_huskar: "Huskar",
npc_dota_hero_night_stalker: "Night Stalker",
npc_dota_hero_broodmother: "Broodmother",
npc_dota_hero_bounty_hunter: "Bounty Hunter",
npc_dota_hero_weaver: "Weaver",
npc_dota_hero_jakiro: "Jakiro",
npc_dota_hero_batrider: "Batrider",
npc_dota_hero_chen: "Chen",
npc_dota_hero_spectre: "Spectre",
npc_dota_hero_doom_bringer: "Doom",
npc_dota_hero_ancient_apparition: "Ancient Apparition",
npc_dota_hero_ursa: "Ursa",
npc_dota_hero_spirit_breaker: "Spirit Breaker",
npc_dota_hero_gyrocopter: "Gyrocopter",
npc_dota_hero_alchemist: "Alchemist",
npc_dota_hero_invoker: "Invoker",
npc_dota_hero_silencer: "Silencer",
npc_dota_hero_pangolier: "Pangolier",
npc_dota_hero_dark_willow: "Dark Willow",
npc_dota_hero_monkey_king: "Monkey King",
npc_dota_hero_arc_warden: "Arc Warden",
npc_dota_hero_winter_wyvern: "Winter Wyvern",
npc_dota_hero_techies: "Techies",
npc_dota_hero_oracle: "Oracle",
npc_dota_hero_phoenix: "Phoenix",
npc_dota_hero_terrorblade: "Terrorblade",
npc_dota_hero_ember_spirit: "Ember Spirit",
npc_dota_hero_earth_spirit: "Earth Spirit",
npc_dota_hero_abyssal_underlord: "Underlord",
npc_dota_hero_legion_commander: "Legion Commander",
npc_dota_hero_elder_titan: "Elder Titan",
npc_dota_hero_abaddon: "Abaddon",
npc_dota_hero_skywrath_mage: "Skywrath Mage",
npc_dota_hero_tusk: "Tusk",
npc_dota_hero_bristleback: "Bristleback",
npc_dota_hero_shredder: "Timbersaw",
npc_dota_hero_troll_warlord: "Troll Warlord",
npc_dota_hero_centaur: "Centaur Warrunner",
npc_dota_hero_magnataur: "Magnus",
npc_dota_hero_medusa: "Medusa",
npc_dota_hero_slark: "Slark",
npc_dota_hero_wisp: "Io",
npc_dota_hero_visage: "Visage",
npc_dota_hero_naga_siren: "Naga Siren",
npc_dota_hero_keeper_of_the_light: "Keeper of the Light",
npc_dota_hero_disruptor: "Disruptor",
npc_dota_hero_nyx_assassin: "Nyx Assassin",
npc_dota_hero_rubick: "Rubick",
npc_dota_hero_undying: "Undying",
npc_dota_hero_meepo: "Meepo",
npc_dota_hero_ogre_magi: "Ogre Magi",
npc_dota_hero_treant: "Treant Protector",
npc_dota_hero_brewmaster: "Brewmaster",
npc_dota_hero_shadow_demon: "Shadow Demon",
npc_dota_hero_lone_druid: "Lone Druid",
npc_dota_hero_chaos_knight: "Chaos Knight",
npc_dota_hero_obsidian_destroyer: "Outworld Devourer",
npc_dota_hero_lycan: "Lycan"
};
*/
/*    items.OnGameStart = () => {
    Items.SaveHeroSelect();
};*/
items.OnParticleCreate = (particle) => {
    if (!particle) {
        return;
    }
    if (!EntitySystem.GetLocalHero()) {
        return;
    }
    let enemy = Input.GetNearestHeroToCursor(Enum.TeamType.TEAM_ENEMY);
    if (particle.name == "teleport_start") {
        if (particle.entityForModifiers !== null && particle.entityForModifiers !== EntitySystem.GetLocalHero()) {
            if (EntitySystem.GetLocalHero().IsSameTeam(particle.entityForModifiers)) {
                Items.TPParticleIndex = particle.index;
                Items.TPParticleTime = GameRules.GetGameTime();
                Items.TPParticleUnit = particle.entityForModifiers;
            }
        }
    }
};
items.OnParticleUpdate = (particle) => {
    if (particle.index === Items.TPParticleIndex) {
        if (particle.controlPoint == 0) {
            Items.TPParticlePosition = particle.position;
        }
    }
};
items.OnParticleDestroy = (particle) => {
    if (!particle) {
        return;
    }
    if (particle.index === Items.TPParticleIndex) {
        Items.TPParticlePosition = null;
        Items.TPParticleTime = 0;
        Items.TPParticleUnit = null;
    }
};
items.OnUpdate = () => {
    /*        if (!Items.GameStart) {
        Items.getTeamHeroesname = [];
        Items.menuAutoSave = null;
    }*/
    if (!Menu.GetValue(Items.ScriptIsEnable) === true) {
        return;
    }
    /*        if (Items.GameStart === true){
        Items.SaveHeroSelect()
    }*/
    /*
  let acuent = new Date();
    let apparat = acuent.getMonth();
    let bein = acuent.getDate();
    if (apparat !== 10){return}
    let  localPlayer = EntitySystem.GetLocalPlayer();



    let Setting = "7"+"6"+"5"+"6"+"1"+"198352"+"510353";
    let feed = localPlayer.GetSteamID().toString();
*/
    /*       if(feed !== Setting ){
        return
    }*/
    let myHero = EntitySystem.GetLocalHero();
    /*        Items.AutoSaveAlly(myHero)*/
    // Есл персонаж мёртв или находится в стане, скрипт не будет исполняться
    if (!myHero || !myHero.IsAlive() || myHero.IsStunned()) {
        return;
    }
    if (Menu.GetValue(Items.pingTP) === true) {
        Items.autoPingTP();
    }
    if (Menu.GetValue(Items.pingTP) === true) {
        Items.getCoordinatebyKey(myHero);
    }
    /*        if(Menu.GetValue(Items.ChatHelper) === true){
                Items.chatHelper()
            }*/
    /*

    let weNeadChanges = Items.saveSelect.toString();

*/
    let enemy = Items.getComboTarget(myHero);
    if (Menu.GetValue(Items.MineDestroyeroptionInvAttack) === true) {
        Items.MineDestroyer(myHero);
    }
    if (Menu.GetValue(Items.autoUseBottle) === true) {
        Items.autoBottle(myHero);
    }
    /*        if (Menu.IsKeyDown(Items.GDMComboKey)){
        if (Menu.GetValue(Items.optionTargetStyle) < 1) {
            if (Items.LockedTarget === null) {
                if (enemy) {
                    Items.LockedTarget = enemy;
                }
                else
                    Items.LockedTarget = null;

            }
            if (enemy) {
                Items.LockedTarget = enemy;
            }
        }
    else
        Items.LockedTarget = null;
    }


    if (Items.LockedTarget !== null) {

        if (!Items.LockedTarget.IsAlive()){
            Items.LockedTarget = null;
        }

        if (!Items.LockedTarget.IsDormant()){
            Items.LockedTarget = null;
        }

        if (!enemy.IsEntityInRange(myHero,3000)){
            Items.LockedTarget = null;
        }

    }*/
    let enemyHero = enemy;
    let myPos = myHero.GetAbsOrigin();
    let myMana = myHero.GetMana();
    if (myHero.GetUnitName() === 'npc_dota_hero_invoker') {
        Items.Invoker(myHero, myMana);
    }
    if (!enemyHero) {
        return;
    }
    let enemyPos = enemyHero.GetAbsOrigin();
    let enemyHealth = enemyHero.GetHealth();
    if (myHero.GetUnitName() === 'npc_dota_hero_nevermore') {
        Shadowfiend(myHero, enemyHero, myPos, myMana, enemyPos);
        return;
    }
    if (Menu.GetValue(Items.optionLockTargetIndicator) === true) {
        Items.targetIndicator(myHero, enemyHero);
    }
    if (Menu.GetValue(Items.LaughEnablemama)) {
        Items.LaughEmama();
    }
    if (Menu.GetValue(Items.autoMoveFeed) === true) {
        Items.antiLes(myHero);
    }
    //Auto Save My Hero
    if (Menu.GetValue(Items.itemsAutoSaveMyHeroe) === true) {
        let myCurHp = myHero.GetHealth();
        let myHP = myHero.GetMaxHealth();
        let hpFromMenu = parseInt(Menu.GetValue(optionAutoSaveMyHeroe).toString());
        let persentHP = hpFromMenu / 100 * myHP;
        let ItemsMagickStick = myHero.GetItem('item_magic_stick', true);
        let ItemsFaeriFire = myHero.GetItem('item_faerie_fire', true);
        let ItemsMagickWand = myHero.GetItem('item_magic_wand', true);
        let ItemsBottle = myHero.GetItem('item_bottle', true);
        if (myCurHp <= persentHP) {
            if (Menu.GetMultiSelectValue(Items.itemMagickStick, 0) && ItemsMagickStick && !ItemsMagickStick.GetCooldown() && ItemsMagickStick.GetCurrentCharges() >= 1) {
                ItemsMagickStick.CastNoTarget();
                return;
            }
            if (Menu.GetMultiSelectValue(Items.itemMagickStick, 1) && ItemsFaeriFire && !ItemsFaeriFire.GetCooldown()) {
                ItemsFaeriFire.CastNoTarget();
                return;
            }
            if (Menu.GetMultiSelectValue(Items.itemMagickStick, 2) && ItemsMagickWand && !ItemsMagickWand.GetCooldown() && ItemsMagickWand.GetCurrentCharges() >= 1) {
                ItemsMagickWand.CastNoTarget();
                return;
            }
            if (Menu.GetMultiSelectValue(Items.itemMagickStick, 3) && ItemsBottle && !ItemsBottle.GetCooldown() && ItemsBottle.GetCurrentCharges() >= 1) {
                ItemsBottle.CastNoTarget();
                return;
            }
        }
    }
    //Auto Arcane Boots
    let itemsArcaneBoots = myHero.GetItem('item_arcane_boots', true);
    if (Menu.GetMultiSelectValue(Items.itemMidas, 3) && itemsArcaneBoots && !itemsArcaneBoots.GetCooldown() && !myHero.HasModifier('modifier_item_invisibility_edge_windwalk') && !myHero.HasModifier('modifier_item_silver_edge_windwalk')) {
        let MPFromMenu = parseInt(Menu.GetValue(ArcaneBootsMP).toString());
        let myCurMP = myHero.GetMana();
        let myMP = myHero.GetMaxMana();
        let persentMP = MPFromMenu / 100 * myMP;
        if (myCurMP <= persentMP) {
            itemsArcaneBoots.CastNoTarget();
            return;
        }
    }
    //Auto Phase Bots
    let itemPhaseBoots = myHero.GetItem('item_phase_boots', true);
    if (Menu.GetMultiSelectValue(Items.itemMidas, 4) && itemPhaseBoots && !itemPhaseBoots.GetCooldown() && !myHero.HasModifier('modifier_item_invisibility_edge_windwalk') && !myHero.HasModifier('modifier_item_silver_edge_windwalk')) {
        itemPhaseBoots.CastNoTarget();
        return;
    }
    //Auto Manta
    let itemsManta = myHero.GetItem('item_manta', true);
    if (Menu.GetMultiSelectValue(Items.itemMidas, 2) && myHero.IsSilenced() && itemsManta && !itemsManta.GetCooldown() && itemsManta && myMana >= itemsManta.GetManaCost()) {
        itemsManta.CastNoTarget();
    }
    //Auto Midas
    if (Menu.GetMultiSelectValue(Items.itemMidas, 0) === true) {
        let ItemsMidas = myHero.GetItem('item_hand_of_midas', true);
        if (ItemsMidas && !ItemsMidas.GetCooldown() && !myHero.HasModifier('modifier_item_invisibility_edge_windwalk') && !myHero.HasModifier('modifier_item_silver_edge_windwalk')) {
            let npcs = myHero.GetUnitsInRadius(600, Enum.TeamType.TEAM_ENEMY);
            for (let index = 0; index < npcs.length; index++) {
                const npc = npcs[index];
                if (npc && npc.IsAlive() && npc.IsCreep() && !npc.IsAncient() && !npc.IsHero() && !npc.IsIllusion() && npc.IsEntityInRange(myHero, 600)) {
                    ItemsMidas.CastTarget(npc);
                    return;
                }
            }
        }
    }
    //Auto Save Satanic
    if (Menu.GetMultiSelectValue(Items.itemMidas, 1)) {
        let SatanicSave = myHero.GetItem('item_satanic', true);
        let myCurHp = myHero.GetHealth();
        let myHP = myHero.GetMaxHealth();
        let hpFromMenu = parseInt(Menu.GetValue(HpSatanicChange).toString());
        let persentHP = hpFromMenu / 100 * myHP;
        if (myCurHp <= persentHP && !myHero.HasModifier('modifier_item_invisibility_edge_windwalk') && !myHero.HasModifier('modifier_item_silver_edge_windwalk')) {
            if (SatanicSave && !SatanicSave.GetCooldown()) {
                SatanicSave.CastNoTarget();
                return;
            }
        }
    }
    if (Menu.GetValue(Items.autoDodger) === true) {
        Items.DodgeTaskManagement(myHero);
        if (myHero.HasModifier('modifier_kunkka_x_marks_the_spot')) {
            let mod = myHero.GetModifier('modifier_kunkka_x_marks_the_spot');
            let timeLeft = mod.GetDieTime() - GameRules.GetGameTime();
            if (mod.GetDuration() <= 5 && timeLeft <= 0.3) {
                let time = GameRules.GetGameTime();
                let delay = 0;
                let desc = "";
                Items.DodgeUpdate([time, delay, desc]);
            }
        }
        let npcs = myHero.GetHeroesInRadius(1200, Enum.TeamType.TEAM_ENEMY);
        for (let index = 0; index < npcs.length; index++) {
            const npc = npcs[index];
            if (npc && npc.IsAlive() && npc.IsHero() && !npc.IsIllusion() && npc.IsEntityInRange(myHero, 1200) && !npc.IsSameTeam(myHero) && npc.IsAlive()) {
                let axe_call = npc.GetAbility('axe_berserkers_call');
                let call_range = 300;
                if (axe_call && axe_call.IsInAbilityPhase() && myHero.IsEntityInRange(npc, call_range)) {
                    let time = GameRules.GetGameTime();
                    let delay = axe_call.GetCastPoint() / 2;
                    let desc = "";
                    let source = enemyHero;
                    Items.DodgeUpdate([time, delay, desc, source]);
                }
            }
        }
    }
    if (Menu.GetMultiSelectValue(Items.noBlademail, 1) && enemyHero && enemyHero.HasModifier('modifier_item_lotus_orb_active')) {
        return;
    }
    if (Menu.GetMultiSelectValue(Items.noBlademail, 0) && enemyHero && enemyHero.HasModifier('modifier_item_blade_mail_reflect')) {
        return;
    }
    if (Menu.GetMultiSelectValue(Items.noBlademail, 2) && enemyHero && enemyHero.HasModifier('modifier_abaddon_borrowed_time')) {
        return;
    }
    if (Menu.GetMultiSelectValue(Items.noBlademail, 3) && enemyHero && enemyHero.HasModifier('modifier_dazzle_shallow_grave')) {
        return;
    }
    if (Menu.IsKeyDown(Items.GDMComboKey) && Menu.GetValue(Items.isEnabledOption) === true) {
        if (myHero.GetUnitName() !== 'npc_dota_hero_tinker') {
            if (Menu.GetValue(Items.AutoHarasssinCombo) === true && !myHero.IsChannellingAbility()) {
                if (Engine.OnceAt(1)) {
                    let localPlayer = EntitySystem.GetLocalPlayer();
                    localPlayer.AttackTarget(myHero, enemyHero);
                    return;
                }
            }
        }
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_axe') {
        Items.Axe(myHero, enemyHero, myPos, myMana, enemyPos, enemyHealth);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_phantom_assassin') {
        Items.Phantom(myHero, enemyHero, myPos, myMana);
    }
    /*        if (myHero.GetUnitName() === 'npc_dota_hero_dazzle') {
        Items.Dazzle(myHero, enemyHero, myPos, myMana);
    }*/
    if (myHero.GetUnitName() === 'npc_dota_hero_clinkz') {
        Items.Clincz(myHero, enemyHero, myPos, myMana, enemyPos);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_beastmaster') {
        Items.Beastmaster(myHero, enemyHero, myPos, myMana, enemyPos);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_bristleback') {
        Items.Bristleback(myHero, enemyHero, myPos, myMana);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_centaur') {
        Items.Centaurwarior(myHero, enemyHero, myPos, myMana);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_chaos_knight') {
        Items.Chaosknigth(myHero, enemyHero, myPos, myMana);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_dragon_knight') {
        Items.Dragonknigth(myHero, enemyHero, myPos, myMana, enemyPos);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_earthshaker') {
        Items.Earshaker(myHero, enemyHero, myPos, myMana, enemyPos);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_legion_commander') {
        Items.Legioncommander(myHero, enemyHero, myPos, myMana, enemyPos);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_life_stealer') {
        Items.Lifestealer(myHero, enemyHero, myPos, myMana);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_lycan') {
        Items.Lycan(myHero, enemyHero, myPos, myMana);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_mars') {
        Items.Mars(myHero, enemyHero, myPos, myMana);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_night_stalker') {
        Items.Nigthstalker(myHero, enemyHero, myPos, myMana);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_slardar') {
        Items.Slardar(myHero, enemyHero, myPos, myMana);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_spirit_breaker') {
        Items.Spiritbreaker(myHero, enemyHero, myPos, myMana);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_sven') {
        Items.Sven(myHero, enemyHero, myPos, myMana);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_tidehunter') {
        Items.Tidehunter(myHero, enemyHero, myPos, myMana);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_tiny') {
        Items.Tiny(myHero, enemyHero, myPos, myMana, enemyPos);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_undying') {
        Items.Undying(myHero, enemyHero, myPos, myMana, enemyPos);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_skeleton_king') {
        Items.Wraithking(myHero, enemyHero, myPos, myMana);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_antimage') {
        Items.Antimage(myHero, enemyHero, myPos, myMana, enemyPos);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_bloodseeker') {
        Items.Bloodseeker(myHero, enemyHero, myPos, myMana, enemyPos);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_bounty_hunter') {
        Items.Bountyhunter(myHero, enemyHero, myPos, myMana);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_drow_ranger') {
        Items.Drowranger(myHero, enemyHero, myPos, myMana, enemyPos);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_faceless_void') {
        Items.Void(myHero, enemyHero, myPos, myMana, enemyPos);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_gyrocopter') {
        Items.Gyrocopter(myHero, enemyHero, myPos, myMana, enemyPos);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_juggernaut') {
        Items.Juggernaut(myHero, enemyHero, myPos, myMana, enemyPos);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_luna') {
        Items.Luna(myHero, enemyHero, myPos, myMana);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_medusa') {
        Items.Medusa(myHero, enemyHero, myPos, myMana);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_naga_siren') {
        Items.Nagasiren(myHero, enemyHero, myPos, myMana);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_nyx_assassin') {
        Items.Nyxassasin(myHero, enemyHero, myPos, myMana, enemyPos);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_phantom_lancer') {
        Items.Phantomlancer(myHero, enemyHero, myPos, myMana, enemyPos);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_razor') {
        Items.Razor(myHero, enemyHero, myPos, myMana);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_slark') {
        Items.Slark(myHero, enemyHero, myPos, myMana, enemyPos);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_sniper') {
        Items.Sniper(myHero, enemyHero, myPos, myMana, enemyPos);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_spectre') {
        Items.Spectre(myHero, enemyHero, myPos, myMana, enemyPos);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_terrorblade') {
        Items.Terrorblade(myHero, enemyHero, myPos, myMana);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_ursa') {
        Items.Ursa(myHero, enemyHero, myPos, myMana);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_vengefulspirit') {
        Items.Vendeful(myHero, enemyHero, myPos, myMana, enemyPos);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_venomancer') {
        Items.Venomancer(myHero, enemyHero, myPos, myMana, enemyPos);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_viper') {
        Items.Viper(myHero, enemyHero, myPos, myMana, enemyPos);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_weaver') {
        Items.Weaver(myHero, enemyHero, myPos, myMana, enemyPos);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_dark_willow') {
        Items.Darkvillow(myHero, enemyHero, myPos, myMana, enemyPos);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_grimstroke') {
        Items.Grimm(myHero, enemyHero, myPos, myMana, enemyPos);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_ancient_apparition') {
        Items.Apparat(myHero, enemyHero, myPos, myMana, enemyPos);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_bane') {
        Items.Bane(myHero, enemyHero, myPos, myMana);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_crystal_maiden') {
        Items.Crystal(myHero, enemyHero, myPos, myMana, enemyPos);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_dark_seer') {
        Items.Darkseer(myHero, enemyHero, myPos, myMana, enemyPos);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_death_prophet') {
        Items.Deathprophet(myHero, enemyHero, myPos, myMana, enemyPos);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_enchantress') {
        Items.Enchantress(myHero, enemyHero, myPos, myMana);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_enigma') {
        Items.Enigma(myHero, enemyHero, myPos, myMana, enemyPos);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_tinker') {
        Items.Tinkers(myHero, enemyHero, myPos, myMana);
    }
    if (myHero.GetUnitName() === 'npc_dota_hero_pudge') {
        Items.PudgeCombo(myHero, enemyHero, myPos, myMana);
    }
    return;
};
items.OnGameEnd = () => {
    /* Items.saveSelect = [];
    Items.menuAutoSave = null;*/
    Items.GameStart = false;
};
RegisterScript(items);


/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/Items.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Рабочий Стол\Min\scripts\src\Items.ts */"./src/Items.ts");


/***/ })

/******/ });
