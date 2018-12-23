local FAIO = {}
-- Menu Items
	-- general Menu
local log = function(msg) 
	Log.Write(tostring(msg))
end

function GetIconPath( name, ... )
	return 'panorama/images/heroes/icons/npc_dota_hero_' .. name .. '_png.vtex_c'
end


local OverallPath = {}
OverallPath[1] = { ".FAIO" }
OverallPath[2] = { ".FAIO", "Target selector" }
OverallPath[3] = { ".FAIO", "Target selector", "Target exclusions" }
OverallPath[6] = { ".FAIO", "Orbwalker" }
OverallPath[7] = { ".FAIO", "Orbwalker", "Orbwalk to enemy options" }
OverallPath[8] = { ".FAIO", "Orbwalker", "Orbwalk to mouse options" }
OverallPath[16] = { ".FAIO", "Item Usage", "Offensive items" }
OverallPath[17] = { ".FAIO", "Item Usage", "Offensive items", "Combo usage" }
OverallPath[18] = { ".FAIO", "Item Usage", "Offensive items", "Combo usage", "Items" }
OverallPath[19] = { ".FAIO", "Item Usage", "Offensive items", "Auto Usage", "Armlet" }
OverallPath[20] = { ".FAIO", "Item Usage", "Offensive items", "Auto Usage", "Hurricane Pike" }
OverallPath[21] = { ".FAIO", "Item Usage", "Offensive items", "Auto Usage", "Blade Mail" }
OverallPath[22] = { ".FAIO", "Item Usage", "Offensive items", "OnUnitOrder Usage" }
OverallPath[23] = { ".FAIO", "Item Usage", "Linkens breaker" }
OverallPath[24] = { ".FAIO", "Item Usage", "Utility Items" }
OverallPath[25] = { ".FAIO", "Item Usage", "Defensive Items" }
OverallPath[26] = { ".FAIO", "Item Usage", "Defensive Items", "BKB" }
OverallPath[43] = { ".FAIO", "Hero Scripts", "Strength heroes", "Pudge" }
OverallPath[45] = { ".FAIO", "Hero Scripts", "Strength heroes", "Pudge", "Hook helper" }
OverallPath[46] = { ".FAIO", "Hero Scripts", "Strength heroes", "Pudge", "Misc" }


FAIO.optionEnable = Menu.AddOptionBool(OverallPath[1], "Overall enabled {{overall}}", false)

FAIO.optionHeroPudge = Menu.AddOptionBool(OverallPath[43], "1. Pudge Combo", false)
FAIO.optionHeroPudgeBlink = Menu.AddOptionBool(OverallPath[43], "2. Use blink for initiation {{pudge}}", false)
FAIO.optionHeroPudgeBlinkMinRange = Menu.AddOptionSlider(OverallPath[43], "2.1 Blink min. range {{pudge}}",  250, 1000, 50)
FAIO.optionHeroPudgeStaff = Menu.AddOptionBool(OverallPath[43], "3. Use force staff for initiation {{pudge}}", false)
FAIO.optionHeroPudgeHookCombo = Menu.AddOptionBool(OverallPath[43], "4. Use hook in combo {{pudge}}", false)
FAIO.optionHeroPudgeHookComboMaxRange = Menu.AddOptionSlider(OverallPath[43], "4.1 Max hook range in combo {{pudge}}",  250, 1550, 1000)
FAIO.optionHeroPudgeHook = Menu.AddOptionBool(OverallPath[45], "1. Enable hook helper {{pudge hook}}", false)
FAIO.optionHeroPudgeHookKey = Menu.AddKeyOption(OverallPath[45], "1.1 Hook helper key {{pudge hook}}", Enum.ButtonCode.KEY_NONE)
FAIO.optionHeroPudgeHookAcquiRange = Menu.AddOptionSlider(OverallPath[45], "1.2 Target acquisition range {{pudge hook}}",  250, 1000, 50)
FAIO.optionHeroPudgeHookAllies = Menu.AddOptionBool(OverallPath[45], "2.1 Also target allies {{pudge hook}}", false)
FAIO.optionHeroPudgeHookStaff = Menu.AddOptionBool(OverallPath[45], "2.2 Use force staff to avoid collision {{pudge hook}}", false)
FAIO.optionHeroPudgeHookUlt = Menu.AddOptionBool(OverallPath[45], "3. Use dismember {{pudge hook}}", false)
FAIO.optionHeroPudgeHookRot = Menu.AddOptionBool(OverallPath[45], "4. Use rot {{pudge hook}}", false)
FAIO.optionHeroPudgeHookItems = Menu.AddOptionBool(OverallPath[45], "5. Use offensive items {{pudge hook}}", false)
FAIO.optionHeroPudgeHookJuke = Menu.AddOptionSlider(OverallPath[45], "6. Anti-juke-offset {{pudge hook}}",  0, 12, 2)
FAIO.optionHeroPudgeFarm = Menu.AddOptionBool(OverallPath[46], "1. Rot farm {{pudge misc}}", false)
FAIO.optionHeroPudgeFarmHP = Menu.AddOptionSlider(OverallPath[46], "1.1 Rot farm HP treshold {{pudge misc}}", 5, 75, 5)
FAIO.optionHeroPudgeSuicide = Menu.AddOptionBool(OverallPath[46], "2. Auto suicide {{pudge misc}}", false)


FAIO.optionComboKey = Menu.AddKeyOption(OverallPath[1], "overall combo key", Enum.ButtonCode.KEY_SPACE)
FAIO.optionTargetStyle = Menu.AddOptionCombo(OverallPath[2], "0. Targeting style {{overall targeting}}", {'locked target', 'free target'}, 1)
FAIO.optionTargetRange = Menu.AddOptionSlider(OverallPath[2], "1. Target acquisition range",  200, 1000, 400)
FAIO.optionMoveToCursor = Menu.AddOptionBool(OverallPath[2], "2. Move to Cursor Pos {{overall targeting}}", false)
FAIO.optionLockTargetIndicator = Menu.AddOptionBool(OverallPath[2], "3.1 Draw target indicator {{overall targeting}}", false)
FAIO.optionLockTargetParticle = Menu.AddOptionCombo(OverallPath[2], "3.2 Indicator style {{overall targeting}}", {'blinding light', 'blood bath', 'tower aggro'}, 1)
FAIO.optionTargetCheckAM = Menu.AddOptionBool(OverallPath[3], "Exclude AM with agha {{targetselect}}", false)
FAIO.optionTargetCheckLotus = Menu.AddOptionBool(OverallPath[3], "Exclude active lotus orb {{targetselect}}", false)
FAIO.optionTargetCheckBlademail = Menu.AddOptionBool(OverallPath[3], "Exclude blademail {{targetselect}}", false)
FAIO.optionTargetCheckNyx = Menu.AddOptionBool(OverallPath[3], "Exclude spiked carapace {{targetselect}}", false)
FAIO.optionTargetCheckUrsa = Menu.AddOptionBool(OverallPath[3], "Exclude enraged ursa {{targetselect}}", false)
FAIO.optionTargetCheckAbbadon = Menu.AddOptionBool(OverallPath[3], "Exclude abaddon ult {{targetselect}}", false)
FAIO.optionTargetCheckDazzle = Menu.AddOptionBool(OverallPath[3], "Exclude shallow grave {{targetselect}}", false)

local Wrap = require("scripts.modules.WrapUtility")


-- Items Menu
FAIO.optionItemEnable = Menu.AddOptionBool(OverallPath[16], "0. Enabled {{off items}}", false)
FAIO.optionItemStyle = Menu.AddOptionCombo(OverallPath[17], "Choose activation style", {'max speed, no order','ordered','smart ordered'}, 1)
FAIO.optionItemStack = Menu.AddOptionBool(OverallPath[17], "Stack hex and silence", false)
FAIO.optionItemSoulring = Menu.AddOptionBool(OverallPath[18], "Soulring", false)
FAIO.optionItemVeil = Menu.AddOptionSlider(OverallPath[18], "Use Item Veil Of Discord",  0, 18, 1)
FAIO.optionItemHex = Menu.AddOptionSlider(OverallPath[18], "Use Item Scythe Of Vyse",  0, 18, 1)
FAIO.optionItemBlood = Menu.AddOptionSlider(OverallPath[18], "Use Item Bloodthorn ",  0, 18, 1)
FAIO.optionItemeBlade = Menu.AddOptionSlider(OverallPath[18], "Use Item Ethereal Blade",  0, 18, 1)
FAIO.optionItemOrchid = Menu.AddOptionSlider(OverallPath[18], "Use Item Orchid Malevolence",  0, 18, 1)
FAIO.optionItemAtos = Menu.AddOptionSlider(OverallPath[18], "Use Item Rod Of Atos",  0, 18, 1)
FAIO.optionItemAbyssal = Menu.AddOptionSlider(OverallPath[18], "Use Item Abyssal Blade",  0, 18, 1)
FAIO.optionItemHalberd = Menu.AddOptionSlider(OverallPath[18], "Use Item Heavens Halbert",  0, 18, 1)
FAIO.optionItemShivas = Menu.AddOptionSlider(OverallPath[18], "Use Item Shivas Guard",  0, 18, 1)
FAIO.optionItemDagon = Menu.AddOptionSlider(OverallPath[18], "Use Item Dagon",  -1, 18, 1)
FAIO.optionItemUrn = Menu.AddOptionSlider(OverallPath[18], "Use Item Urn of shadows",  0, 18, 1)
FAIO.optionItemManta = Menu.AddOptionSlider(OverallPath[18], "Use Item Manta Style",  0, 18, 1)
FAIO.optionItemMjollnir = Menu.AddOptionSlider(OverallPath[18], "Use Item Mjollnir",  0, 18, 1)
FAIO.optionItemMedallion = Menu.AddOptionSlider(OverallPath[18], "Use Item Medallion of Courage",  0, 18, 1)
FAIO.optionItemCrest = Menu.AddOptionSlider(OverallPath[18], "Use Item Solar Crest",  0, 18, 1)
FAIO.optionItemSpirit = Menu.AddOptionSlider(OverallPath[18], "Use Item Spirit Vessel",  0, 18, 1)
FAIO.optionItemNull = Menu.AddOptionSlider(OverallPath[18], "Use Item Nullifier",  0, 18, 1)
FAIO.optionItemDiffusal = Menu.AddOptionSlider(OverallPath[18], "Use Item Diffusal Blade",  0, 18, 1)
FAIO.optionItemArmlet = Menu.AddOptionBool(OverallPath[19], "0. Enable {{armlet}}", false)
FAIO.optionItemArmletHPTreshold = Menu.AddOptionSlider(OverallPath[19], "1. HP threshold {{armlet}}", 100, 500, 50)
FAIO.optionItemArmletCombo = Menu.AddOptionBool(OverallPath[19], "2. Combo usage {{armlet}}", false)
FAIO.optionItemArmletRightClick = Menu.AddOptionBool(OverallPath[19], "3. Right click activation {{armlet}}", false)
FAIO.optionItemArmletRightClickStyle = Menu.AddOptionCombo(OverallPath[19], "3.1 Right click style {{armlet}}", {'single click', 'double click'}, 1)
FAIO.optionItemArmletIllusion = Menu.AddOptionBool(OverallPath[19], "4. Illusion activation {{armlet}}", false)
FAIO.optionItemArmletManuallyOverride = Menu.AddOptionBool(OverallPath[19], "5. Manual override {{armlet}}", false)
FAIO.optionItemHurricane = Menu.AddOptionBool(OverallPath[20], "0. Enable {{hurricane}}", false)
FAIO.optionItemHurricaneHP = Menu.AddOptionSlider(OverallPath[20], "1. HP treshold {{hurricane}}", 5 ,75, 5)
FAIO.optionItemBlademail = Menu.AddOptionBool(OverallPath[21], "0. Enable {{blade mail}}", false)
FAIO.optionItemSoulringManual = Menu.AddOptionBool(OverallPath[22], "Soulring {{onunitorder}}", false)
FAIO.optionItemVeilManual = Menu.AddOptionBool(OverallPath[22], "Veil of Discord {{onunitorder}}", false)


	-- Linkens Menu
FAIO.optionLinkensEnable = Menu.AddOptionBool(OverallPath[23], "0. Enabled {{linkens}}", false)
FAIO.optionLinkensManual = Menu.AddOptionBool(OverallPath[23], "1. Pop linkens when manually casting", false)
FAIO.optionLinkensForce = Menu.AddOptionSlider(OverallPath[23], "Use Force Staff",  0, 8, 1)
FAIO.optionLinkensEul = Menu.AddOptionSlider(OverallPath[23], "Use Eul",  0, 8, 1)
FAIO.optionLinkensHalberd = Menu.AddOptionSlider(OverallPath[23], "Use Halberd",  0, 8, 1)
FAIO.optionLinkensHex = Menu.AddOptionSlider(OverallPath[23], "Use Hex",  0, 8, 1)
FAIO.optionLinkensBlood = Menu.AddOptionSlider(OverallPath[23], "Use Bloodthorn",  0, 8, 1)
FAIO.optionLinkensOrchid = Menu.AddOptionSlider(OverallPath[23], "Use Orchid",  0, 8, 1)
FAIO.optionLinkensPike = Menu.AddOptionSlider(OverallPath[23], "Use Pike",  0, 8, 1)
FAIO.optionLinkensDiffusal = Menu.AddOptionSlider(OverallPath[23], "Use Diffusal",  0, 8, 1)

	-- Utility Items Menu
FAIO.optionUtilityEnable = Menu.AddOptionBool(OverallPath[24], "0. Enable auto usage {{util}}", false)
FAIO.optionUtilityMidas = Menu.AddOptionBool(OverallPath[24], "Auto Use Midas", false)
FAIO.optionUtilityStick = Menu.AddOptionBool(OverallPath[24], "Auto Use Stick/Wand/Cheese/Faerie", false)
FAIO.optionUtilityHealth = Menu.AddOptionSlider(OverallPath[24], "1. Treshold Hero Health", 5, 75, 5)
FAIO.optionUtilityMek = Menu.AddOptionBool(OverallPath[24], "Auto Use Mekansm", false)
FAIO.optionUtilityGreaves = Menu.AddOptionBool(OverallPath[24], "Auto Use Greaves", false)
FAIO.optionUtilityArcane = Menu.AddOptionBool(OverallPath[24], "Auto Use Arcane Boots", false)
FAIO.optionUtilityBottle = Menu.AddOptionBool(OverallPath[24], "Auto Use Bottle", false)

	-- Defensive Items Menu
FAIO.optionDefensiveItems = Menu.AddOptionBool(OverallPath[25], "0. Enable auto usage {{deff}}", false)
FAIO.optionDefensiveItemsGlimmer = Menu.AddOptionBool(OverallPath[25], "2. Glimmer Cape", false)
FAIO.optionDefensiveItemslotusOrb = Menu.AddOptionBool(OverallPath[25], "3. Lotus Orb", false)
FAIO.optionDefensiveItemsCrimson = Menu.AddOptionBool(OverallPath[25], "4. Crimson Guard", false)
FAIO.optionDefensiveItemsCrest = Menu.AddOptionBool(OverallPath[25], "5. Solar Crest", false)
FAIO.optionDefensiveItemsPipe = Menu.AddOptionBool(OverallPath[25], "6. Pipe", false)
FAIO.optionDefensiveItemsBKB = Menu.AddOptionBool(OverallPath[26], "0. Enabled {{bkb}}", false)
FAIO.optionDefensiveItemsBKBEnemies = Menu.AddOptionSlider(OverallPath[26], "1. Min. enemies around", 1, 5, 1)
FAIO.optionDefensiveItemsBKBRadius = Menu.AddOptionSlider(OverallPath[26], "2. Search radius", 500, 1000, 100)
FAIO.optionDefensiveItemsSatanic = Menu.AddOptionBool(OverallPath[25], "7. Satanic", false)
FAIO.optionDefensiveItemsThreshold = Menu.AddOptionSlider(OverallPath[25], "0.1 HP Threshold {{deff}}", 10, 50, 5)
FAIO.optionDefensiveItemsThresholdDisable = Menu.AddOptionSlider(OverallPath[25], "0.2 HP Threshold if disabled {{deff}}", 35, 100, 5)
FAIO.optionDefensiveItemsMedallion = Menu.AddOptionBool(OverallPath[25], "8. Medallion of Courage", false)
FAIO.optionDefensiveItemsGhost = Menu.AddOptionBool(OverallPath[25], "9. Ghost scepter", false)
FAIO.optionDefensiveItemsAlly = Menu.AddOptionBool(OverallPath[25], "0.3 Cast defensive items on allies {{deff}}", false)
FAIO.optionDefensiveItemsSaver = Menu.AddOptionBool(OverallPath[25], "0.4 Advanced lotus/glimmer ally saving {{deff}}", false)


FAIO.optionOrbwalkEnable = Menu.AddOptionBool(OverallPath[6], "0. Enabled {{orbwalker}}", false)



local CurentHero = nil
FAIO.LockedTarget = nil
FAIO.myUnitName = nil
FAIO.lastCastTime = 0
FAIO.lastCastTime2 = 0
FAIO.lastCastTime3 = 0
FAIO.lastTick = 0
FAIO.delay = 0
FAIO.itemDelay = 0
FAIO.lastItemCast = 0
FAIO.lastDefItemPop = 0
FAIO.lastItemTick = 0
FAIO.ItemCastStop = false
FAIO.isArmletManuallyToggled = false
FAIO.isArmletManuallyToggledTime = 0
FAIO.armletDelayer = 0
FAIO.ControlledUnitCastTime = 0
FAIO.ControlledUnitPauseTime = 0
FAIO.lastAttackTime = 0
FAIO.lastAttackTime2 = 0
FAIO.LastTarget = nil
FAIO.TempestInAttackBackswing = false
FAIO.TempestOrbwalkerDelay = 0
FAIO.ArcWardenEntityProjectileCreate = 0
FAIO.GenericUpValue = false
FAIO.lastPosition = Vector(0, 0, 0)
FAIO.Toggler = false
FAIO.TogglerTime = 0
FAIO.AttackProjectileCreate = 0
FAIO.AttackAnimationCreate = 0
FAIO.AttackParticleCreate = 0
FAIO.InAttackBackswing = false
FAIO.OrbwalkerDelay = 0
FAIO.TPParticleIndex = nil
FAIO.TPParticleTime = 0
FAIO.TPParticleUnit = nil
FAIO.TPParticlePosition = Vector()
FAIO.GlimpseParticleIndex = nil
FAIO.GlimpseParticleTime = 0
FAIO.GlimpseParticleUnit = nil
FAIO.GlimpseParticlePosition = Vector()
FAIO.GlimpseParticleIndexStart = nil
FAIO.GlimpseParticlePositionStart = Vector()
FAIO.particleNextTime = 0
FAIO.currentParticle = 0
FAIO.currentParticleTarget = nil
FAIO.PudgeRotComboActivation = false
FAIO.PudgeRotComboDeactivation = 0
FAIO.PudgeHookStartTimer = 0
FAIO.PudgeHookDelayer = 0
FAIO.PudgeHookRotDelayer = 0
FAIO.PudgeHookTarget = nil
FAIO.PudgeHookTargetedPos = nil
FAIO.PudgeHookHit = false
FAIO.PudgecurrentParticle = 0
FAIO.PudgecurrentParticleTarget = nil
FAIO.PudgeRotFarmToggled = false
FAIO.PudgeRotFarmToggledTime = 0


	-- global Tables
FAIO.LinkensBreakerItemOrder = {}
FAIO.ItemCastOrder = {}
FAIO.rotationTable = {}
FAIO.enemyHeroTable = {}
FAIO.dodgeItTable = {}
FAIO.dodgeItReadyTable = {}
FAIO.dodgeItSkillReady = {}
FAIO.wardDispenserCount = {}
FAIO.wardProcessingTable = {}
FAIO.lastHitCreepHPPrediction = {}
FAIO.lastHitCreepHPPredictionTime = {}
FAIO.creepAttackPointData = {}
FAIO.heroIconHandler = {}
FAIO.itemIconHandler = {}
FAIO.ControllableEntityTable = {}
FAIO.ControllableAttackTiming = {}
FAIO.TinkerJungleFarmPos = {}
FAIO.JungleTrackTable = {}
FAIO.ShrinePositionTable = {}

FAIO.heroList = { "npc_dota_hero_pudge"}
			
			
FAIO.dodgeItItems = { 
	{"item_manta", 1, "no target", 0.1}, 
	{"item_blink", 0, "position", 0.1}, 
	{"item_cyclone", 0, "target", 0.1},
	{"item_lotus_orb", 1, "target", 0.1},
	{"item_black_king_bar", 2, "no target", 0.1},
	{"item_blade_mail", 0, "no target", 0.1},
	{"item_glimmer_cape", 0, "target", 0.1}
		}


FAIO.attackPointTable = {
	npc_dota_hero_pudge = { 0.5, 1.17, 0 }}
	
FAIO.AbilityList = {
	{ "npc_dota_hero_pudge", "pudge_dismember", "disable", "target" , "0" },
	{ "npc_dota_hero_pudge", "pudge_flesh_heap", "utility", "0" , "0" },
	{ "npc_dota_hero_pudge", "pudge_meat_hook", "utility", "0" , "0" },
	{ "npc_dota_hero_pudge", "pudge_rot", "utility", "0" , "0" }}
	
	
FAIO.RawDamageAbilityEstimation = {	pudge_dismember = { "target", 0, 0, 75, 0, 0 },	pudge_meat_hook = { "position", 0, 100, 100, 1450, 0 }}

function FAIO.ResetGlobalVariables()
	CurentHero = nil
	FAIO.LockedTarget = nil
	FAIO.myUnitName = nil
	FAIO.lastCastTime = 0
	FAIO.lastCastTime2 = 0
	FAIO.lastCastTime3 = 0
	FAIO.lastTick = 0
	FAIO.delay = 0
	FAIO.itemDelay = 0
	FAIO.lastItemCast = 0
	FAIO.lastDefItemPop = 0
	FAIO.lastItemTick = 0
	FAIO.ItemCastStop = false
	FAIO.isArmletManuallyToggled = false
	FAIO.isArmletManuallyToggledTime = 0
	FAIO.armletDelayer = 0
	FAIO.ControlledUnitCastTime = 0
	FAIO.ControlledUnitPauseTime = 0
	FAIO.lastAttackTime = 0
	FAIO.lastAttackTime2 = 0
	FAIO.LastTarget = nil
	FAIO.LastTickManta1 = 0
	FAIO.LastTickManta2 = 0

	FAIO.TempestOrbwalkerDelay = 0

	FAIO.GenericUpValue = false
	FAIO.lastPosition = Vector(0, 0, 0)

	FAIO.Toggler = false
	FAIO.TogglerTime = 0

	FAIO.AttackProjectileCreate = 0
	FAIO.AttackAnimationCreate = 0
	FAIO.AttackParticleCreate = 0
	FAIO.InAttackBackswing = false
	FAIO.OrbwalkerDelay = 0
	FAIO.TPParticleIndex = nil
	FAIO.TPParticleTime = 0
	FAIO.TPParticleUnit = nil
	FAIO.TPParticlePosition = Vector()
	FAIO.GlimpseParticleIndex = nil
	FAIO.GlimpseParticleTime = 0
	FAIO.GlimpseParticleUnit = nil
	FAIO.GlimpseParticlePosition = Vector()
	FAIO.GlimpseParticleIndexStart = nil
	FAIO.GlimpseParticlePositionStart = Vector()
	FAIO.particleNextTime = 0
	FAIO.currentParticle = 0
	FAIO.currentParticleTarget = nil

	FAIO.dodgeTiming = 0
	FAIO.dodgerProjectileAdjustmentTick = 0
	FAIO.saverTiming = 0

	FAIO.PudgeRotComboActivation = false
	FAIO.PudgeRotComboDeactivation = 0
	FAIO.PudgeHookStartTimer = 0
	FAIO.PudgeHookDelayer = 0
	FAIO.PudgeHookRotDelayer = 0
	FAIO.PudgeHookTarget = nil
	FAIO.PudgeHookTargetedPos = nil
	FAIO.PudgeHookHit = false
	FAIO.PudgecurrentParticle = 0
	FAIO.PudgecurrentParticleTarget = nil
	FAIO.PudgeRotFarmToggled = false
	FAIO.PudgeRotFarmToggledTime = 0


	FAIO.ShrinePositionTable = {}

	FAIO.lastHitCreepHPPrediction = {}
	FAIO.lastHitCreepHPPredictionTime = {}
	FAIO.creepAttackPointData = {}
	FAIO.dodgeItTable = {}
	FAIO.dodgeItSkillReady = {}
	FAIO.dodgeItReadyTable = {}
	FAIO.LinkensBreakerItemOrder = {}
	FAIO.ItemCastOrder = {}
	FAIO.rotationTable = {}

	FAIO.enemyHeroTable = {}



	FAIO.heroIconHandler = {}
	FAIO.itemIconHandler = {}
	FAIO.ControllableEntityTable = {}
	FAIO.ControllableAttackTiming = {}

end

function FAIO.OnGameStart()
	
	FAIO.ResetGlobalVariables()

end

function FAIO.OnGameEnd()
	
	FAIO.ResetGlobalVariables()

end

function FAIO.OnUpdate()
	
	if not Menu.IsEnabled(FAIO.optionEnable) then return end

	if not Engine.IsInGame() then
		FAIO.ResetGlobalVariables()
	end
	
	if GameRules.GetGameState() < 4 then return end
	if GameRules.GetGameState() > 5 then return end

	local myHero = Heroes.GetLocal()
		if not myHero then return end
		if not Wrap.EIsAlive(myHero) then return end
		if FAIO.myUnitName == nil then
			FAIO.myUnitName = NPC.GetUnitName(myHero)
		end
			if next(FAIO.ItemCastOrder) == nil then
		FAIO.setOrderItem(false)
	end
 	if next(FAIO.LinkensBreakerItemOrder) == nil then
		FAIO.setOrderLinkens(false)
	end

	local isHeroSupported = FAIO.heroSupported(myHero)

	local enemy = FAIO.getComboTarget(myHero)

	if Menu.IsKeyDown(FAIO.optionComboKey) then
		if Menu.GetValue(FAIO.optionTargetStyle) < 1 then
			if FAIO.LockedTarget == nil then
				if enemy then
					FAIO.LockedTarget = enemy
				else
					FAIO.LockedTarget = nil
				end
			end
		else
			if enemy then
				FAIO.LockedTarget = enemy
			else
				FAIO.LockedTarget = nil
			end
		end
	else
		FAIO.LockedTarget = nil
	end

	if FAIO.LockedTarget ~= nil then
		if not Wrap.EIsAlive(FAIO.LockedTarget) then
			FAIO.LockedTarget = nil
		elseif Entity.IsDormant(FAIO.LockedTarget) then
			FAIO.LockedTarget = nil
		elseif not NPC.IsEntityInRange(myHero, FAIO.LockedTarget, 3000) then
			FAIO.LockedTarget = nil
		end
	end

	if Menu.IsEnabled(FAIO.optionLockTargetIndicator) then
		FAIO.TargetIndicator(myHero)
	end

	local comboTarget
		if FAIO.LockedTarget ~= nil then
			comboTarget = FAIO.LockedTarget
		else
			if not Menu.IsKeyDown(FAIO.optionComboKey) then
				comboTarget = enemy
			end
		end
			
	if FAIO.myUnitName == "npc_dota_hero_pudge" then
		FAIO.PudgeCombo(myHero, comboTarget)
	end
	
	
	if Menu.IsEnabled(FAIO.optionUtilityEnable) then
		FAIO.utilityItemUsage(myHero)
	    end
		
		if FAIO.LockedTarget == nil then
		if Menu.IsEnabled(FAIO.optionMoveToCursor) then
			if Menu.IsKeyDown(FAIO.optionComboKey) then
				FAIO.GenericMainAttack(myHero, "Enum.UnitOrder.DOTA_UNIT_ORDER_MOVE_TO_POSITION", nil, Input.GetWorldCursorPos())
				return
			end
     end 
end
end


function FAIO.utilityItemUsage(myHero)

	if not myHero then return end

	if FAIO.heroCanCastItems(myHero) == false then return end
	if FAIO.isHeroChannelling(myHero) == true then return end


	local stick = NPC.GetItem(myHero, "item_magic_stick", true)
	local wand = NPC.GetItem(myHero, "item_magic_wand", true)
	local mekansm = NPC.GetItem(myHero, "item_mekansm", true)
	local greaves = NPC.GetItem(myHero, "item_guardian_greaves", true)
	local arcane = NPC.GetItem(myHero, "item_arcane_boots", true)
	local midas = NPC.GetItem(myHero, "item_hand_of_midas", true)
	local cheese = NPC.GetItem(myHero, "item_cheese", true)
	local faerie = NPC.GetItem(myHero, "item_faerie_fire", true)
	local bottle = NPC.GetItem(myHero, "item_bottle", true)

	local myMana = NPC.GetMana(myHero)

	if (stick or wand or cheese or faerie) and Menu.IsEnabled(FAIO.optionUtilityStick) then
		FAIO.utilityItemStick(myHero, stick, wand, cheese, faerie)
	end
	if mekansm and Menu.IsEnabled(FAIO.optionUtilityMek) then
		FAIO.utilityItemMek(myHero, mekansm, myMana)
	end
	if greaves and Menu.IsEnabled(FAIO.optionUtilityGreaves) then
		FAIO.utilityItemGreaves(myHero, greaves)
	end
	if arcane and Menu.IsEnabled(FAIO.optionUtilityArcane) then
		FAIO.utilityItemArcane(myHero, arcane)
	end
	if midas and Menu.IsEnabled(FAIO.optionUtilityMidas) then
		FAIO.utilityItemMidas(myHero, midas)
	end
	if bottle and Menu.IsEnabled(FAIO.optionUtilityBottle) then
		FAIO.utilityItemBottle(myHero, bottle)
	end

end


function FAIO.heroCanCastItems(myHero)

	if not myHero then return false end
	if not Wrap.EIsAlive(myHero) then return false end

	if NPC.IsStunned(myHero) then return false end
	if NPC.HasModifier(myHero, "modifier_bashed") then return false end
	if NPC.HasState(myHero, Enum.ModifierState.MODIFIER_STATE_INVULNERABLE) then return false end	
	if NPC.HasModifier(myHero, "modifier_eul_cyclone") then return false end
	if NPC.HasModifier(myHero, "modifier_obsidian_destroyer_astral_imprisonment_prison") then return false end
	if NPC.HasModifier(myHero, "modifier_shadow_demon_disruption") then return false end	
	if NPC.HasModifier(myHero, "modifier_invoker_tornado") then return false end
	if NPC.HasState(myHero, Enum.ModifierState.MODIFIER_STATE_HEXED) then return false end
	if NPC.HasModifier(myHero, "modifier_legion_commander_duel") then return false end
	if NPC.HasModifier(myHero, "modifier_axe_berserkers_call") then return false end
	if NPC.HasModifier(myHero, "modifier_winter_wyvern_winters_curse") then return false end
	if NPC.HasModifier(myHero, "modifier_bane_fiends_grip") then return false end
	if NPC.HasModifier(myHero, "modifier_bane_nightmare") then return false end
	if NPC.HasModifier(myHero, "modifier_faceless_void_chronosphere_freeze") then return false end
	if NPC.HasModifier(myHero, "modifier_enigma_black_hole_pull") then return false end
	if NPC.HasModifier(myHero, "modifier_magnataur_reverse_polarity") then return false end
	if NPC.HasModifier(myHero, "modifier_pudge_dismember") then return false end
	if NPC.HasModifier(myHero, "modifier_shadow_shaman_shackles") then return false end
	if NPC.HasModifier(myHero, "modifier_techies_stasis_trap_stunned") then return false end
	if NPC.HasModifier(myHero, "modifier_storm_spirit_electric_vortex_pull") then return false end
	if NPC.HasModifier(myHero, "modifier_tidehunter_ravage") then return false end
	if NPC.HasModifier(myHero, "modifier_windrunner_shackle_shot") then return false end
	if NPC.HasModifier(myHero, "modifier_item_nullifier_mute") then return false end

	return true	

end


function FAIO.isHeroChannelling(myHero)

	if not myHero then return true end

	if NPC.IsChannellingAbility(myHero) then return true end
	if NPC.HasModifier(myHero, "modifier_teleporting") then return true end

	return false

end


local SkipTick = os.clock()

function FAIO.getComboTarget(myHero)

	if not myHero then return end

	local targetingRange = Menu.GetValue(FAIO.optionTargetRange)
	local mousePos = Input.GetWorldCursorPos()

	local enemyTable = Wrap.HInRadius(mousePos, targetingRange, Entity.GetTeamNum(myHero), Enum.TeamType.TEAM_ENEMY)
		if #enemyTable < 1 then return end

	local nearestTarget = nil
	local distance = 99999

	for i, v in ipairs(enemyTable) do
		if v and Entity.IsHero(v) then
			if FAIO.targetChecker(v) ~= nil then
				local enemyDist = (Entity.GetAbsOrigin(v) - mousePos):Length2D()
				if enemyDist < distance then
					nearestTarget = v
					distance = enemyDist
				end
			end
		end
	end

	return nearestTarget or nil

end

function FAIO.TargetIndicator(myHero)

	if not myHero then return end

	local curtime = GameRules.GetGameTime()	

	if Menu.GetValue(FAIO.optionLockTargetParticle) < 2 then
		if FAIO.LockedTarget ~= nil then
			if curtime > FAIO.particleNextTime then
				if FAIO.currentParticle > 0 then
					Particle.Destroy(FAIO.currentParticle)
					FAIO.currentParticle = 0
				end
	
				if Menu.GetValue(FAIO.optionLockTargetParticle) == 0 then
					local sparkParticle = Particle.Create("particles/items_fx/aegis_resspawn_flash.vpcf")
					FAIO.currentParticle = sparkParticle
			
					Particle.SetControlPoint(sparkParticle, 0, Entity.GetAbsOrigin(FAIO.LockedTarget))
				else
					local bloodParticle = Particle.Create("particles/items2_fx/soul_ring_blood.vpcf")
					FAIO.currentParticle = bloodParticle
					Particle.SetControlPoint(bloodParticle, 0, Entity.GetAbsOrigin(FAIO.LockedTarget))
				end

	      		FAIO.particleNextTime = curtime + 0.35
			end
		end
	else
		if (not FAIO.LockedTarget or FAIO.LockedTarget ~= FAIO.currentParticleTarget) and FAIO.currentParticle > 0 then
			Particle.Destroy(FAIO.currentParticle)			
			FAIO.currentParticle = 0
			FAIO.currentParticleTarget = FAIO.LockedTarget
		else
			if FAIO.currentParticle == 0 and FAIO.LockedTarget then
				local towerParticle = Particle.Create("particles/ui_mouseactions/range_finder_tower_aoe.vpcf", Enum.ParticleAttachment.PATTACH_INVALID, FAIO.LockedTarget)	
				FAIO.currentParticle = towerParticle
				FAIO.currentParticleTarget = FAIO.LockedTarget			
			end
			if FAIO.currentParticle > 0 then
				Particle.SetControlPoint(FAIO.currentParticle, 2, Entity.GetOrigin(myHero))
				Particle.SetControlPoint(FAIO.currentParticle, 6, Vector(1, 0, 0))
				Particle.SetControlPoint(FAIO.currentParticle, 7, Entity.GetOrigin(FAIO.currentParticleTarget))
			end
		end
	end

end

function FAIO.OnPrepareUnitOrders(orders)

	if not orders then return true end
	if orders.order == Enum.UnitOrder.DOTA_UNIT_ORDER_TRAIN_ABILITY then return true end

	local myHero = Heroes.GetLocal()
    		if not myHero then return true end
			
				if Menu.IsEnabled(FAIO.optionLinkensManual) then
		if orders.order == Enum.UnitOrder.DOTA_UNIT_ORDER_CAST_TARGET then
			if orders.target ~= nil and Entity.IsHero(orders.target) and not Entity.IsSameTeam(myHero, orders.target) then
				if NPC.IsLinkensProtected(orders.target) then
					if FAIO.LinkensBreakerNew(myHero) ~= nil then
						Ability.CastTarget(NPC.GetItem(myHero, FAIO.LinkensBreakerNew(myHero), true), orders.target)
						return true
					end
				end
			end
		end
	end
	if Menu.IsEnabled(FAIO.optionItemVeilManual) then
		local veil = NPC.GetItem(myHero, "item_veil_of_discord", true)
		if veil and Ability.IsReady(veil) then
			if orders.order == Enum.UnitOrder.DOTA_UNIT_ORDER_CAST_TARGET then
				if orders.ability ~= nil and Ability.IsReady(orders.ability) and not Ability.IsChannelling(orders.ability) then
					if not Ability.IsPassive(orders.ability) and Ability.GetCastPoint(orders.ability) > 0.05 then
						if orders.target ~= nil and not Entity.IsDormant(orders.target) and Wrap.EIsAlive(orders.target) and not NPC.IsIllusion(orders.target) then
							Ability.CastPosition(veil, Entity.GetAbsOrigin(orders.target))
							if not NPC.HasItem(myHero, "item_soul_ring", true) then
								return true
							end
						end
					end
				end
			elseif orders.order == Enum.UnitOrder.DOTA_UNIT_ORDER_CAST_POSITION then
				if orders.ability ~= nil and Ability.IsReady(orders.ability) and not Ability.IsChannelling(orders.ability) then
					if not Ability.IsPassive(orders.ability) and Ability.GetCastPoint(orders.ability) > 0.05 then
						local mousePos = Input.GetWorldCursorPos()
						local checkTarget = nil
							for _, v in ipairs(Wrap.HInRadius(mousePos, 600, Entity.GetTeamNum(myHero), Enum.TeamType.TEAM_ENEMY)) do
								if v and Entity.IsHero(v) and not Entity.IsDormant(v) and Wrap.EIsAlive(v) and not NPC.IsIllusion(v) then
									checkTarget = v
									break
								end
							end

						if checkTarget ~= nil then
							Ability.CastPosition(veil, Entity.GetAbsOrigin(checkTarget))
							if not NPC.HasItem(myHero, "item_soul_ring", true) then
								return true
							end
						end
					end
				end
			end						
		end
	end

	if Menu.IsEnabled(FAIO.optionItemSoulringManual) then
		local soulring = NPC.GetItem(myHero, "item_soul_ring", true)
		if soulring and Ability.IsReady(soulring) then
			if orders.order == Enum.UnitOrder.DOTA_UNIT_ORDER_CAST_POSITION or orders.order == Enum.UnitOrder.DOTA_UNIT_ORDER_CAST_TARGET or
			orders.order == Enum.UnitOrder.DOTA_UNIT_ORDER_CAST_NO_TARGET then
				if orders.ability ~= nil and Ability.IsReady(orders.ability) and not Ability.IsChannelling(orders.ability) then
					if not Ability.IsPassive(orders.ability) and Ability.GetManaCost(orders.ability) > 50 and Ability.GetCastPoint(orders.ability) > 0.05 then
						Ability.CastNoTarget(soulring)
						return true
					end
				end
			end
		end
	end

		if FAIO.myUnitName == "npc_dota_hero_pudge" then
		if orders.order == Enum.UnitOrder.DOTA_UNIT_ORDER_MOVE_TO_POSITION or orders.order == Enum.UnitOrder.DOTA_UNIT_ORDER_ATTACK_TARGET then
			if FAIO.PudgeHookHit then
				FAIO.PudgeHookHit = false
			end
		end
	end
	return true
end

function FAIO.utilityRoundNumber(number, digits)

	if not number then return end

  	local mult = 10^(digits or 0)
  	return math.floor(number * mult + 0.5) / mult

end

function FAIO.utilityGetTableLength(table)

	if not table then return 0 end
	if next(table) == nil then return 0 end

	local count = 0
	for i, v in pairs(table) do
		count = count + 1
	end

	return count

end

function FAIO.utilityIsInTable(table, arg)

	if not table then return false end
	if not arg then return false end
	if next(table) == nil then return false end

	for i, v in pairs(table) do
		if i == arg then
			return true
		end
		if type(v) ~= 'table' and v == arg then
			return true
		end
	end

	return false

end

function FAIO.heroSupported(myHero)

	if not myHero then return end
	local supportedHeroList = FAIO.heroList

	for _, heroName in pairs(supportedHeroList) do
		if heroName == NPC.GetUnitName(myHero) then
			return true
		end
	end
	return false
end

function FAIO.TimeToFacePosition(myHero, pos)

	if not myHero then return 0 end
	if not pos then return 0 end

	local myPos = Entity.GetAbsOrigin(myHero)
	local myRotation = Entity.GetRotation(myHero):GetForward():Normalized()

	local baseVec = (pos - myPos):Normalized()

	local tempProcessing = math.min(baseVec:Dot2D(myRotation) / (baseVec:Length2D() * myRotation:Length2D()), 1)	

	local checkAngleRad = math.acos(tempProcessing)
	local checkAngle = (180 / math.pi) * checkAngleRad

	local myTurnRate = NPC.GetTurnRate(myHero)

	local turnTime = FAIO.utilityRoundNumber(((0.033 * math.pi / myTurnRate) / 180) * checkAngle, 3)

	return turntime or 0

end

function FAIO.setOrderItem(printed)

	FAIO.ItemCastOrder = {
        	{Menu.GetValue(FAIO.optionItemVeil), "item_veil_of_discord", "position"},
        	{Menu.GetValue(FAIO.optionItemHex), "item_sheepstick", "target"},
        	{Menu.GetValue(FAIO.optionItemBlood), "item_bloodthorn", "target"},
        	{Menu.GetValue(FAIO.optionItemeBlade), "item_ethereal_blade", "target"},
        	{Menu.GetValue(FAIO.optionItemOrchid),"item_orchid", "target"},
        	{Menu.GetValue(FAIO.optionItemAtos),"item_rod_of_atos", "target"},
		{Menu.GetValue(FAIO.optionItemAbyssal),"item_abyssal_blade", "target"},
		{Menu.GetValue(FAIO.optionItemHalberd),"item_heavens_halberd", "target"},
		{Menu.GetValue(FAIO.optionItemShivas),"item_shivas_guard", "no target"},
		{Menu.GetValue(FAIO.optionItemDagon),"item_dagon", "target"},
		{Menu.GetValue(FAIO.optionItemDagon),"item_dagon_2", "target"},
		{Menu.GetValue(FAIO.optionItemDagon),"item_dagon_3", "target"},
		{Menu.GetValue(FAIO.optionItemDagon),"item_dagon_4", "target"},
		{Menu.GetValue(FAIO.optionItemDagon),"item_dagon_5", "target"},
		{Menu.GetValue(FAIO.optionItemUrn),"item_urn_of_shadows", "target"},
		{Menu.GetValue(FAIO.optionItemMedallion),"item_medallion_of_courage", "target"},
		{Menu.GetValue(FAIO.optionItemCrest),"item_solar_crest", "target"},
		{Menu.GetValue(FAIO.optionItemDiffusal),"item_diffusal_blade", "target"},
		{Menu.GetValue(FAIO.optionItemSpirit),"item_spirit_vessel", "target"},
		{Menu.GetValue(FAIO.optionItemNull),"item_nullifier", "target"},
    				}

    	table.sort(FAIO.ItemCastOrder, function(a, b)
        	return a[1] > b[1]
    	end)
	Log.Write(".....Item Cast Order....")
	local printed = false
		if not printed then
			for k,v in ipairs(FAIO.ItemCastOrder) do
			Log.Write(v[1]..':'..v[2])
			printed = true
			end
		end
end			

function FAIO.setOrderLinkens(printed)
	
	FAIO.LinkensBreakerItemOrder = {
        	{Menu.GetValue(FAIO.optionLinkensForce), "item_force_staff"},
        	{Menu.GetValue(FAIO.optionLinkensEul), "item_cyclone"},
        	{Menu.GetValue(FAIO.optionLinkensHalberd), "item_heavens_halberd"},
        	{Menu.GetValue(FAIO.optionLinkensHex), "item_sheepstick"},
        	{Menu.GetValue(FAIO.optionLinkensBlood),"item_bloodthorn"},
        	{Menu.GetValue(FAIO.optionLinkensOrchid),"item_orchid"},
		{Menu.GetValue(FAIO.optionLinkensDiffusal),"item_diffusal_blade", "target"},
		{Menu.GetValue(FAIO.optionLinkensPike),"item_hurricane_pike"}
    				}

    	table.sort(FAIO.LinkensBreakerItemOrder, function(a, b)
        	return a[1] > b[1]
    	end)
	Log.Write(".....Linkens Breaker Priorization Order....")
	local printed = false
		if not printed then
			for k,v in ipairs(FAIO.LinkensBreakerItemOrder) do
			Log.Write(v[1]..':'..v[2])
			printed = true
			end
		end			
	
end

function FAIO.OnMenuOptionChange(option, old, new)

    	if option == FAIO.optionItemVeil or
		option == FAIO.optionItemHex or
		option == FAIO.optionItemBlood or
		option == FAIO.optionItemeBlade or 
		option == FAIO.optionItemOrchid or 
		option == FAIO.optionItemAtos or 
		option == FAIO.optionItemAbyssal or 
		option == FAIO.optionItemHalberd or 
		option == FAIO.optionItemShivas or 
		option == FAIO.optionItemDagon or 
		option == FAIO.optionItemUrn or
		option == FAIO.optionItemManta or
		option == FAIO.optionItemMjollnir or
		option == FAIO.optionItemMedallion or
		option == FAIO.optionItemCrest or
		option == FAIO.optionItemDiffusal or
		option == FAIO.optionItemSpirit or
		option == FAIO.optionItemNull then
			FAIO.setOrderItem(false)
	end
	
	if option == FAIO.optionLinkensForce or
		option == FAIO.optionLinkensEul or
		option == FAIO.optionLinkensHalberd or
		option == FAIO.optionLinkensHex or
		option == FAIO.optionLinkensBlood or
		option == FAIO.optionLinkensOrchid or
		option == FAIO.optionLinkensDiffusal or
		option == FAIO.optionLinkensPike then
        		FAIO.setOrderLinkens(false)
    	end
end

function FAIO.targetChecker(genericEnemyEntity)

	local myHero = Heroes.GetLocal()
		if not myHero then return end

	if genericEnemyEntity and not Entity.IsDormant(genericEnemyEntity) and not NPC.IsIllusion(genericEnemyEntity) and Entity.GetHealth(genericEnemyEntity) > 0 then

		if Menu.IsEnabled(FAIO.optionTargetCheckAM) then
			if NPC.GetUnitName(genericEnemyEntity) == "npc_dota_hero_antimage" and NPC.HasItem(genericEnemyEntity, "item_ultimate_scepter", true) and NPC.HasModifier(genericEnemyEntity, "modifier_antimage_spell_shield") and Ability.IsReady(NPC.GetAbility(genericEnemyEntity, "antimage_spell_shield")) then
				return
			end
		end
		if Menu.IsEnabled(FAIO.optionTargetCheckLotus) then
			if NPC.HasModifier(genericEnemyEntity, "modifier_item_lotus_orb_active") then
				return
			end
		end
		if Menu.IsEnabled(FAIO.optionTargetCheckBlademail) then
			if NPC.HasModifier(genericEnemyEntity, "modifier_item_blade_mail_reflect") and Entity.GetHealth(Heroes.GetLocal()) <= 0.25 * Entity.GetMaxHealth(Heroes.GetLocal()) then
				return
			end
		end
		if Menu.IsEnabled(FAIO.optionTargetCheckNyx) then
			if NPC.HasModifier(genericEnemyEntity, "modifier_nyx_assassin_spiked_carapace") then
				return
			end
		end
		if Menu.IsEnabled(FAIO.optionTargetCheckUrsa) then
			if NPC.HasModifier(genericEnemyEntity, "modifier_ursa_enrage") then
				return
			end
		end
		if Menu.IsEnabled(FAIO.optionTargetCheckAbbadon) then
			if NPC.HasModifier(genericEnemyEntity, "modifier_abaddon_borrowed_time") then
				return
			end
		end
		if Menu.IsEnabled(FAIO.optionTargetCheckDazzle) then
			if NPC.HasModifier(genericEnemyEntity, "modifier_dazzle_shallow_grave") and NPC.GetUnitName(myHero) ~= "npc_dota_hero_axe" then
				return
			end
		end
		if NPC.HasModifier(genericEnemyEntity, "modifier_skeleton_king_reincarnation_scepter_active") then
			return
		end
		if NPC.HasModifier(genericEnemyEntity, "modifier_winter_wyvern_winters_curse") then
			return
		end

	return genericEnemyEntity
	end	
end

function FAIO.makeDelay(sec)

	FAIO.delay = sec + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING)
	FAIO.lastTick = os.clock()

end

function FAIO.noItemCastFor(sec)

	FAIO.itemDelay = sec
	FAIO.lastItemTick = os.clock()

end

function FAIO.SleepReady(sleep)

	if (os.clock() - FAIO.lastTick) >= sleep then
		return true
	end
	return false

end

function FAIO.ItemSleepReady(sleep)

	if (os.clock() - FAIO.lastItemCast) >= sleep then
		return true
	end
	return false

end

function FAIO.GetAvgLatency()

	local AVGlatency = NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING) * 2
	return AVGlatency

end

function FAIO.CastAnimationDelay(ability)

	if not ability then return end

	local abilityAnimation = Ability.GetCastPoint(ability) + FAIO.GetAvgLatency()

	return abilityAnimation

end
	
function FAIO.castLinearPrediction(myHero, enemy, adjustmentVariable)

	if not myHero then return end
	if not enemy then return end

	local enemyRotation = Entity.GetRotation(enemy):GetVectors()
		enemyRotation:SetZ(0)
    	local enemyOrigin = Entity.GetAbsOrigin(enemy)
		enemyOrigin:SetZ(0)


	local cosGamma = (Entity.GetAbsOrigin(myHero) - enemyOrigin):Dot2D(enemyRotation:Scaled(100)) / ((Entity.GetAbsOrigin(myHero) - enemyOrigin):Length2D() * enemyRotation:Scaled(100):Length2D())

		if enemyRotation and enemyOrigin then
			if not NPC.IsRunning(enemy) then
				return enemyOrigin
			else return enemyOrigin:__add(enemyRotation:Normalized():Scaled(FAIO.GetMoveSpeed(enemy) * adjustmentVariable * (1 - cosGamma)))
			end
		end
end

function FAIO.castPrediction(myHero, enemy, adjustmentVariable)

	if not myHero then return end
	if not enemy then return end

	local enemyRotation = Entity.GetRotation(enemy):GetVectors()
		enemyRotation:SetZ(0)
    	local enemyOrigin = Entity.GetAbsOrigin(enemy)
		enemyOrigin:SetZ(0)

	if enemyRotation and enemyOrigin then
			if not NPC.IsRunning(enemy) then
				return enemyOrigin
			else return enemyOrigin:__add(enemyRotation:Normalized():Scaled(FAIO.GetMoveSpeed(enemy) * adjustmentVariable))
			end
	end
end

function FAIO.isEnemyTurning(enemy)

	if enemy == nil then return true end
	if not NPC.IsRunning(enemy) then return true end
	if NPC.IsTurning(enemy) then return true else return false end
	--local rotationSpeed = Entity.GetAngVelocity(enemy):Length2D()
	
	if NPC.IsRunning(enemy) then
		table.insert(FAIO.rotationTable, rotationSpeed)
			if #FAIO.rotationTable > (Menu.GetValue(FAIO.optionKillStealInvokerTurn) + 1) then
				table.remove(FAIO.rotationTable, 1)
			end
	end
	
	if #FAIO.rotationTable < Menu.GetValue(FAIO.optionKillStealInvokerTurn) then 
		return true
	else
		local rotationSpeedCounter = 0
		i = 1
		repeat
			rotationSpeedCounter = rotationSpeedCounter + FAIO.rotationTable[#FAIO.rotationTable + 1 - i]
			i = i + 1
		until i > Menu.GetValue(FAIO.optionKillStealInvokerTurn)

		if rotationSpeedCounter / Menu.GetValue(FAIO.optionKillStealInvokerTurn) <= 10 then
			return false
		else
			return true
		end
	end

end

function FAIO.GetMoveSpeed(enemy)

	if not enemy then return end

	local base_speed = NPC.GetBaseSpeed(enemy)
	local bonus_speed = NPC.GetMoveSpeed(enemy) - NPC.GetBaseSpeed(enemy)
	local modifierHex
    	local modSheep = NPC.GetModifier(enemy, "modifier_sheepstick_debuff")
    	local modLionVoodoo = NPC.GetModifier(enemy, "modifier_lion_voodoo")
    	local modShamanVoodoo = NPC.GetModifier(enemy, "modifier_shadow_shaman_voodoo")

	if modSheep then
		modifierHex = modSheep
	end
	if modLionVoodoo then
		modifierHex = modLionVoodoo
	end
	if modShamanVoodoo then
		modifierHex = modShamanVoodoo
	end

	if modifierHex then
		if math.max(Modifier.GetDieTime(modifierHex) - GameRules.GetGameTime(), 0) > 0 then
			return 140 + bonus_speed
		end
	end

    	if NPC.HasModifier(enemy, "modifier_invoker_ice_wall_slow_debuff") then 
		return 100 
	end

	if NPC.HasModifier(enemy, "modifier_invoker_cold_snap_freeze") or NPC.HasModifier(enemy, "modifier_invoker_cold_snap") then
		return (base_speed + bonus_speed) * 0.5
	end

	if NPC.HasModifier(enemy, "modifier_spirit_breaker_charge_of_darkness") then
		local chargeAbility = NPC.GetAbility(enemy, "spirit_breaker_charge_of_darkness")
		if chargeAbility then
			local specialAbility = NPC.GetAbility(enemy, "special_bonus_unique_spirit_breaker_2")
			if specialAbility then
				 if Ability.GetLevel(specialAbility) < 1 then
					return Ability.GetLevel(chargeAbility) * 50 + 550
				else
					return Ability.GetLevel(chargeAbility) * 50 + 1050
				end
			end
		end
	end
			
    	return base_speed + bonus_speed
end






function FAIO.IsInAbilityPhase(myHero)

	if not myHero then return false end

	local myAbilities = {}

	for i= 0, 10 do
		local ability = NPC.GetAbilityByIndex(myHero, i)
		if ability and Entity.IsAbility(ability) and Ability.GetLevel(ability) > 0 then
			table.insert(myAbilities, ability)
		end
	end

	if #myAbilities < 1 then return false end

	for _, v in ipairs(myAbilities) do
		if v then
			if Ability.IsInAbilityPhase(v) then
				return true
			end
		end
	end

	return false

end



function FAIO.GenericMainAttack(myHero, attackType, target, position)
	
	if not myHero then return end
	if not target and not position then return end

	if FAIO.isHeroChannelling(myHero) == true then return end
	if FAIO.heroCanCastItems(myHero) == false then return end
	if FAIO.IsInAbilityPhase(myHero) == true then return end

end



function FAIO.itemUsage(myHero, enemy)

	if not myHero then return end
	if not enemy then return end

	if not Menu.IsEnabled(FAIO.optionItemEnable) then return end
	if (os.clock() - FAIO.lastItemTick) < FAIO.itemDelay then return end
	if FAIO.ItemCastStop then return end

	if FAIO.heroCanCastItems(myHero) == false then return end
	if FAIO.isHeroChannelling(myHero) == true then return end
	if FAIO.IsHeroInvisible(myHero) == true then return end

	if Menu.GetValue(FAIO.optionItemStyle) == 0 then 
		FAIO.itemUsageNoOrder(myHero, enemy)
	elseif Menu.GetValue(FAIO.optionItemStyle) == 1 then
		FAIO.itemUsageOrder(myHero, enemy)
	elseif Menu.GetValue(FAIO.optionItemStyle) == 2 then
		FAIO.itemUsageSmartOrder(myHero, enemy)
	end

end

function FAIO.itemUsageSmartOrder(myHero, enemy, activation)

	if not myHero then return end
	if not enemy then return end

	if FAIO.heroCanCastItems(myHero) == false then return end
	if FAIO.isHeroChannelling(myHero) == true then return end
	if FAIO.IsHeroInvisible(myHero) == true then return end

	local alternateActivation
	if activation == nil then
		alternateActivation = false
	else alternateActivation = activation
	end
	
	local myMana = NPC.GetMana(myHero)

	local soulring = NPC.GetItem(myHero, "item_soul_ring", true)
	local mjollnir = NPC.GetItem(myHero, "item_mjollnir", true)
	local manta = NPC.GetItem(myHero, "item_manta", true)
	local dagon = NPC.GetItem(myHero, "item_dagon", true)
		if not dagon then
			for i = 2, 5 do
				dagon = NPC.GetItem(myHero, "item_dagon_" .. i, true)
				if dagon then break end
			end
		end

	if (Menu.IsKeyDown(FAIO.optionComboKey) or alternateActivation) then
		
		if FAIO.ItemSleepReady(0.05) and soulring and Ability.IsReady(soulring) and Menu.IsEnabled(FAIO.optionItemSoulring) then
			Ability.CastNoTarget(soulring)
			FAIO.lastItemCast = os.clock()
			return
		end

		if NPC.IsLinkensProtected(enemy) then
			if FAIO.ItemSleepReady(0.05) and FAIO.LinkensBreakerNew(myHero) ~= nil then
				Ability.CastTarget(NPC.GetItem(myHero, FAIO.LinkensBreakerNew(myHero), true), enemy)
				FAIO.lastItemCast = os.clock()
				return
			end
		end

		if Menu.GetValue(FAIO.optionItemDagon) == -1 then

			if FAIO.ItemSleepReady(0.05) and dagon and NPC.IsEntityInRange(myHero, enemy, Ability.GetCastRange(dagon) + NPC.GetCastRangeBonus(myHero)) and Ability.IsCastable(dagon, myMana) then
				local dagonDMG = (1 - NPC.GetMagicalArmorValue(enemy)) * (Ability.GetLevelSpecialValueFor(dagon, "damage") + (Ability.GetLevelSpecialValueFor(dagon, "damage") * (Hero.GetIntellectTotal(myHero) / 14 / 100)))
				local eBladeAMP = 0
					if NPC.HasModifier(enemy, "modifier_item_ethereal_blade_ethereal") then
						eBladeAMP = 0.4
					end
				local necroUltDMG = 0
					if NPC.HasAbility(myHero, "necrolyte_reapers_scythe") then
						if Ability.IsCastable(NPC.GetAbility(myHero, "necrolyte_reapers_scythe"), myMana - Ability.GetManaCost(dagon)) then
							local necroUlt = (Entity.GetMaxHealth(enemy) - Entity.GetHealth(enemy)) * Ability.GetLevelSpecialValueForFloat(NPC.GetAbility(myHero, "necrolyte_reapers_scythe"), "damage_per_health")
							necroUltDMG = (1 - NPC.GetMagicalArmorValue(enemy)) * (1 + eBladeAMP) * (necroUlt + necroUlt * (Hero.GetIntellectTotal(myHero) / 14 / 100))
						end
					end
				local dagonTrueDMG = (1 + eBladeAMP) * dagonDMG + necroUltDMG
				if Entity.GetHealth(enemy) <= dagonTrueDMG and not NPC.IsLinkensProtected(enemy) then
					if not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_MAGIC_IMMUNE) and not NPC.HasModifier(enemy, "modifier_item_aeon_disk_buff") then
						Ability.CastTarget(dagon, enemy)
						FAIO.lastItemCast = os.clock()
						return
					end
				end
			end
		end

		local orderItem
		local customOrder = 0
		local itemActivation

		for k, v in ipairs(FAIO.ItemCastOrder) do

			local skipItem = 0

			if NPC.HasModifier(enemy, "modifier_black_king_bar_immune") then
				if v[2] == "item_veil_of_discord" or v[2] == "item_sheepstick" or v[2] == "item_bloodthorn" or
					v[2] == "item_ethereal_blade" or v[2] == "item_orchid" or v[2] == "item_rod_of_atos" or
					v[2] == "item_heavens_halberd" or v[2] == "item_urn_of_shadows" or v[2] == "item_dagon"
					or v[2] == "item_dagon_2" or v[2] == "item_dagon_3" or v[2] == "item_dagon_4" 
					or v[2] == "item_dagon_5" or v[2] == "item_medallion_of_courage" or v[2] == "item_solar_crest"
					or v[2] == "item_spirit_vessel" or v[2] == "item_nullifier" or v[2] == "item_diffusal_blade" then
						skipItem = v[1]
				end
			end

			if NPC.HasModifier(enemy, "modifier_item_aeon_disk_buff") then
				if v[2] ~= "item_nullifier" then
					skipItem = v[1]
				end
			end

			if NPC.HasItem(myHero, v[2], true) then
				if v[2] == "item_spirit_vessel" or v[2] == "item_urn_of_shadows" then
					if Item.GetCurrentCharges(NPC.GetItem(myHero, v[2], true)) <= 2 then
						skipItem = v[1]
					end
				end
			end

			if NPC.HasModifier(enemy, "modifier_bashed") then
				if v[2] == "item_abyssal_blade" or v[2] == "item_sheepstick" or v[2] == "item_bloodthorn" or v[2] == "item_orchid" or v[2] == "item_nullifier" or v[2] == "item_diffusal_blade" then
					skipItem = v[1]
				end
			end

			if NPC.HasModifier(enemy, "modifier_stunned") then
				local dieTime = Modifier.GetDieTime(NPC.GetModifier(enemy, "modifier_stunned"))
				if GameRules.GetGameTime() <= dieTime - 0.1 then
					if v[2] == "item_abyssal_blade" or v[2] == "item_sheepstick" or v[2] == "item_bloodthorn" or v[2] == "item_orchid" or v[2] == "item_heavens_halberd" or v[2] == "item_nullifier" or v[2] == "item_diffusal_blade" then
						skipItem = v[1]
					end
				end
			end

			if NPC.HasModifier(enemy, "modifier_sheepstick_debuff") then
				local dieTime = Modifier.GetDieTime(NPC.GetModifier(enemy, "modifier_sheepstick_debuff"))
				if Menu.IsEnabled(FAIO.optionItemStack) then
					if GameRules.GetGameTime() <= dieTime - 0.1 then
						if v[2] == "item_abyssal_blade" or v[2] == "item_sheepstick" or v[2] == "item_heavens_halberd" or v[2] == "item_nullifier" or v[2] == "item_diffusal_blade" then
							skipItem = v[1]
						end
					end
				else
					if GameRules.GetGameTime() <= dieTime - 0.1 then
						if v[2] == "item_abyssal_blade" or v[2] == "item_sheepstick" or v[2] == "item_bloodthorn" or v[2] == "item_orchid" or v[2] == "item_heavens_halberd" or v[2] == "item_nullifier" or v[2] == "item_diffusal_blade" then
							skipItem = v[1]
						end
					end
				end
			end

			if NPC.HasItem(myHero, "item_sheepstick", true) and Ability.SecondsSinceLastUse(NPC.GetItem(myHero, "item_sheepstick",true)) > -1 and Ability.SecondsSinceLastUse(NPC.GetItem(myHero, "item_sheepstick",true)) < 0.5 then
				if Menu.IsEnabled(FAIO.optionItemStack) then
					if v[2] == "item_abyssal_blade" or v[2] == "item_sheepstick" or v[2] == "item_heavens_halberd" or v[2] == "item_nullifier" or v[2] == "item_diffusal_blade" then
						skipItem = v[1]
					end
				else
					if v[2] == "item_abyssal_blade" or v[2] == "item_sheepstick" or v[2] == "item_bloodthorn" or v[2] == "item_orchid" or v[2] == "item_heavens_halberd" or v[2] == "item_nullifier" or v[2] == "item_diffusal_blade" then
						skipItem = v[1]
					end
				end
			end

			if NPC.IsSilenced(enemy) then
				if NPC.HasModifier(enemy, "modifier_bloodthorn_debuff") then
					local dieTime = Modifier.GetDieTime(NPC.GetModifier(enemy, "modifier_bloodthorn_debuff"))
					if GameRules.GetGameTime() <= dieTime - 0.1 then
						if v[2] == "item_bloodthorn" or v[2] == "item_orchid" then
							skipItem = v[1]
						end
					end
				elseif NPC.HasModifier(enemy, "modifier_orchid_malevolence_debuff") then
					local dieTime = Modifier.GetDieTime(NPC.GetModifier(enemy, "modifier_orchid_malevolence_debuff"))
					if GameRules.GetGameTime() <= dieTime - 0.1 then
						if v[2] == "item_bloodthorn" or v[2] == "item_orchid" then
							skipItem = v[1]
						end
					end
				elseif NPC.HasModifier(enemy, "modifier_silence") then
					local dieTime = Modifier.GetDieTime(NPC.GetModifier(enemy, "modifier_silence"))
					if GameRules.GetGameTime() <= dieTime - 0.1 then
						if v[2] == "item_bloodthorn" or v[2] == "item_orchid" then
							skipItem = v[1]
						end
					end
				end
			end

			if NPC.HasModifier(myHero, "modifier_item_nullifier") and Ability.SecondsSinceLastUse(NPC.GetItem(myHero, "item_nullifier", true)) > -1 and
				Ability.SecondsSinceLastUse(NPC.GetItem(myHero, "item_nullifier", true)) < ((Entity.GetAbsOrigin(myHero) - Entity.GetAbsOrigin(enemy)):Length2D() / 1200) + 0.25 then
				if v[2] == "item_abyssal_blade" or v[2] == "item_sheepstick" or v[2] == "item_bloodthorn" or v[2] == "item_orchid" or v[2] == "item_heavens_halberd" or v[2] == "item_nullifier" or v[2] == "item_diffusal_blade" then
					skipItem = v[1]
				end
			end

			if NPC.HasModifier(enemy, "modifier_item_nullifier_mute") then
				local dieTime = Modifier.GetDieTime(NPC.GetModifier(enemy, "modifier_item_nullifier_mute"))
				if GameRules.GetGameTime() <= dieTime - 0.1 then
					if  v[2] == "item_nullifier" or v[2] == "item_diffusal_blade" then
						skipItem = v[1]
					end
				end
			end

			if NPC.HasModifier(enemy, "modifier_item_diffusal_blade_slow") then
				local dieTime = Modifier.GetDieTime(NPC.GetModifier(enemy, "modifier_item_diffusal_blade_slow"))
				if GameRules.GetGameTime() <= dieTime - 0.1 then
					if v[2] == "item_abyssal_blade" or v[2] == "item_sheepstick" or v[2] == "item_heavens_halberd" or v[2] == "item_nullifier" or v[2] == "item_diffusal_blade" then
						skipItem = v[1]
					end
				end
			end

			if NPC.HasItem(myHero, "item_diffusal_blade", true) and Ability.SecondsSinceLastUse(NPC.GetItem(myHero, "item_diffusal_blade", true)) > -1 and Ability.SecondsSinceLastUse(NPC.GetItem(myHero, "item_diffusal_blade", true)) < 0.5 then
				if v[2] == "item_abyssal_blade" or v[2] == "item_sheepstick" or v[2] == "item_heavens_halberd" or v[2] == "item_nullifier" or v[2] == "item_diffusal_blade" then
					skipItem = v[1]
				end
			end

			if NPC.HasModifier(myHero, "modifier_item_ethereal_blade") and Ability.SecondsSinceLastUse(NPC.GetItem(myHero, "item_ethereal_blade", true)) > -1 and
				Ability.SecondsSinceLastUse(NPC.GetItem(myHero, "item_ethereal_blade", true)) < ((Entity.GetAbsOrigin(myHero) - Entity.GetAbsOrigin(enemy)):Length2D() / 1275) + 0.25 then
				if v[2] == "item_dagon" or v[2] == "item_dagon_2" or v[2] == "item_dagon_3" or v[2] == "item_dagon_4" 
					or v[2] == "item_dagon_5" then
					skipItem = v[1]
				end
			end

			if NPC.HasModifier(enemy, "modifier_item_veil_of_discord_debuff") then
				if v[2] == "item_veil_of_discord" then
					skipItem = v[1]
				end
			end		

			if NPC.HasAbility(myHero, "skywrath_mage_ancient_seal") then
				if Ability.SecondsSinceLastUse(NPC.GetAbility(myHero, "skywrath_mage_ancient_seal")) <= 0.15 then
					if v[2] == "item_dagon" or v[2] == "item_dagon_2" or v[2] == "item_dagon_3" or v[2] == "item_dagon_4" or v[2] == "item_dagon_5" then
						skipItem = v[1]
					end
				end
			end

			if NPC.HasAbility(myHero, "witch_doctor_maledict") then
				if Ability.SecondsSinceLastUse(NPC.GetAbility(myHero, "witch_doctor_maledict")) <= 0.15 then
					if v[2] == "item_dagon" or v[2] == "item_dagon_2" or v[2] == "item_dagon_3" or v[2] == "item_dagon_4" or v[2] == "item_dagon_5" then
						skipItem = v[1]
					end
				end
			end

			if NPC.HasAbility(myHero, "pugna_decrepify") then
				if Ability.SecondsSinceLastUse(NPC.GetAbility(myHero, "pugna_decrepify")) <= 0.15 then
					if v[2] == "item_dagon" or v[2] == "item_dagon_2" or v[2] == "item_dagon_3" or v[2] == "item_dagon_4" or v[2] == "item_dagon_5" then
						skipItem = v[1]
					end
				end
			end

			if NPC.HasItem(enemy, "item_aeon_disk", true) then
				if Ability.SecondsSinceLastUse(NPC.GetItem(enemy, "item_aeon_disk", true)) < 0 then
					if Entity.GetHealth(enemy) >= 0.85 * Entity.GetMaxHealth(enemy) then
						if v[2] == "item_nullifier" then
							skipItem = v[1]
						end
					end
				end
				if Ability.SecondsSinceLastUse(NPC.GetItem(enemy, "item_aeon_disk", true)) <= 2.55 then
					if not NPC.HasModifier(enemy, "modifier_item_aeon_disk_buff") then
						if v[2] == "item_nullifier" then
							skipItem = v[1]
						end
					end
				end
			end

			if FAIO.myUnitName == "npc_dota_hero_tinker" then
				if NPC.IsLinkensProtected(enemy) then
					if v[2] == "item_sheepstick" then
						skipItem = v[1]
					end
				end
			end

			if NPC.HasModifier(enemy, "modifier_pudge_meat_hook") then
				if v[2] == "item_rod_of_atos" then
					skipItem = v[1]
				end
			end

			if NPC.HasItem(myHero, v[2], true) then
				if Ability.IsCastable(NPC.GetItem(myHero, v[2], true), myMana) and (v[1] - skipItem) > customOrder then
					orderItem = NPC.GetItem(myHero, v[2], true)
					customOrder = v[1]
					itemActivation = v[3]
				end
			end	
		end
		
			if FAIO.ItemSleepReady(0.05) and customOrder > 0 then
				if NPC.IsEntityInRange(myHero, enemy, Ability.GetCastRange(orderItem)) then
					if itemActivation == "target" then
						Ability.CastTarget(orderItem, enemy)
						FAIO.lastItemCast = os.clock()
						customOrder = 0
						return
					end
					if itemActivation == "no target" then
						Ability.CastNoTarget(orderItem)
						FAIO.lastItemCast = os.clock()
						customOrder = 0
						return
					end
					if itemActivation == "position" then
						Ability.CastPosition(orderItem, Entity.GetAbsOrigin(enemy))
						FAIO.lastItemCast = os.clock()
						customOrder = 0
						return
					end
				end
			end

		if FAIO.ItemSleepReady(0.05) and mjollnir and NPC.IsEntityInRange(myHero, enemy, NPC.GetAttackRange(myHero)) and Ability.IsCastable(mjollnir, myMana) and Menu.GetValue(FAIO.optionItemMjollnir) > 0 then
			Ability.CastTarget(mjollnir, myHero)
			FAIO.lastItemCast = os.clock()
			return
		end

		if FAIO.ItemSleepReady(0.05) and manta and NPC.IsEntityInRange(myHero, enemy, NPC.GetAttackRange(myHero)) and Ability.IsCastable(manta, myMana) and Menu.GetValue(FAIO.optionItemManta) > 0 then
			Ability.CastNoTarget(manta)
			FAIO.lastItemCast = os.clock()
			return
		end
	end
end

function FAIO.PudgeHookTargetIndicatorDel(myHero)

	if not myHero then return end

	local curtime = GameRules.GetGameTime()

	if not Menu.IsKeyDown(FAIO.optionHeroPudgeHookKey) or FAIO.PudgeHookTarget == nil then
		if FAIO.PudgecurrentParticle > 0 then
			Particle.Destroy(FAIO.PudgecurrentParticle)			
			FAIO.PudgecurrentParticle = 0
		end
	end

	return

end

function FAIO.AmIFacingPos(myHero, pos, allowedDeviation)

	if not myHero then return false end

	local myPos = Entity.GetAbsOrigin(myHero)
	local myRotation = Entity.GetRotation(myHero):GetForward():Normalized()

	local baseVec = (pos - myPos):Normalized()

	local tempProcessing = baseVec:Dot2D(myRotation) / (baseVec:Length2D() * myRotation:Length2D())
		if tempProcessing > 1 then
			tempProcessing = 1
		end	

	local checkAngleRad = math.acos(tempProcessing)
	local checkAngle = (180 / math.pi) * checkAngleRad

	if checkAngle < allowedDeviation then
		return true
	end

	return false

end

function FAIO.PudgeCombo(myHero, enemy)

	if not Menu.IsEnabled(FAIO.optionHeroPudge) then return end

	local Q = NPC.GetAbilityByIndex(myHero, 0)
 	local W = NPC.GetAbilityByIndex(myHero, 1)
	local ult = NPC.GetAbility(myHero, "pudge_dismember")

	local blink = NPC.GetItem(myHero, "item_blink", true)
	local force = NPC.GetItem(myHero, "item_force_staff", true)

	local myMana = NPC.GetMana(myHero)

	FAIO.itemUsage(myHero, enemy)
	FAIO.PudgeHookTargetIndicatorDel(myHero)

	local maxInitRange = 0
		if blink and Ability.IsReady(blink) and Menu.IsEnabled(FAIO.optionHeroPudgeBlink) then
			maxInitRange = maxInitRange + 1200
		end
		if force and Ability.IsCastable(force, myMana) and Menu.IsEnabled(FAIO.optionHeroPudgeStaff) then
			maxInitRange = maxInitRange + 600
		end
		if enemy then
			if NPC.HasModifier(enemy, "modifier_pudge_meat_hook") then
				maxInitRange = 0
			end
		end
		if Q and Ability.SecondsSinceLastUse(Q) > -1 and Ability.SecondsSinceLastUse(Q) < 0.5 then
			maxInitRange = 0
		end

	if FAIO.PudgeRotComboActivation and not Menu.IsKeyDown(FAIO.optionComboKey) then
		if Ability.GetToggleState(W) then
			local checkEnemies = false
				for i, v in ipairs(Wrap.HeroesInRadius(myHero, 250, Enum.TeamType.TEAM_ENEMY)) do
					if v and Entity.IsHero(v) and Wrap.EIsAlive(v) and not NPC.IsIllusion(v) then
						checkEnemies = true
						break
					end
				end

				if Entity.GetHealth(myHero) / Entity.GetMaxHealth(myHero) < 0.2 then
					checkEnemies = false
				end

			if not checkEnemies then		
				if os.clock() > FAIO.PudgeRotComboDeactivation then
					Ability.Toggle(W)
					FAIO.PudgeRotComboActivation = false
					FAIO.PudgeRotComboDeactivation = os.clock() + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING) + NetChannel.GetAvgLatency(Enum.Flow.FLOW_INCOMING) + 0.05
					return
				end
			end
		end
	end

	if Menu.IsEnabled(FAIO.optionHeroPudgeHook) then
		if Menu.IsKeyDown(FAIO.optionHeroPudgeHookKey) then
			local target = FAIO.PudgeHookGetTarget(myHero)
			if FAIO.PudgeHookTarget == nil then
				FAIO.PudgeHookTarget = target
			end
			if FAIO.PudgeHookTarget ~= nil then
				if Entity.IsHero(FAIO.PudgeHookTarget) and Wrap.EIsAlive(FAIO.PudgeHookTarget) then
					FAIO.PudgeHookCombo(myHero, myMana, FAIO.PudgeHookTarget, Q, W, ult)
				else
					FAIO.PudgeHookTarget = nil
				end	
			end
		else
			if FAIO.PudgeHookTarget ~= nil then
				FAIO.PudgeHookTarget = nil
			end
		end
	end					

	if enemy and NPC.IsEntityInRange(myHero, enemy, 3000) then
		if Menu.IsKeyDown(FAIO.optionComboKey) and Wrap.EIsAlive(enemy) then
 			if FAIO.heroCanCastSpells(myHero, enemy) == true then
				if maxInitRange > 1200 then
					if not NPC.IsEntityInRange(myHero, enemy, 1200) then
						if NPC.IsEntityInRange(myHero, enemy, 1750) then
							local pred = 600/1500 + (NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING) * 2)
							local predPos = FAIO.castPrediction(myHero, enemy, pred)
							if FAIO.AmIFacingPos(myHero, predPos, 10) then
								Ability.CastTarget(force, myHero)
								return
							else
								FAIO.GenericMainAttack(myHero, "Enum.UnitOrder.DOTA_UNIT_ORDER_MOVE_TO_POSITION", nil, predPos)
								return
							end
						end
					else
						if not NPC.IsEntityInRange(myHero, enemy, Menu.GetValue(FAIO.optionHeroPudgeBlinkMinRange)) then
							if not NPC.HasModifier(myHero, "modifier_item_forcestaff_active") then
								Ability.CastPosition(blink, (Entity.GetAbsOrigin(enemy) + (Entity.GetAbsOrigin(myHero) - Entity.GetAbsOrigin(enemy)):Normalized():Scaled(75)))
								FAIO.lastTick = os.clock() + NetChannel.GetAvgLatency(Enum.Flow.FLOW_INCOMING)
								return
							end
						end
					end
				end
				if maxInitRange == 1200 then
					if NPC.IsEntityInRange(myHero, enemy, 1200) then
						if not NPC.IsEntityInRange(myHero, enemy, Menu.GetValue(FAIO.optionHeroPudgeBlinkMinRange)) then
							if not NPC.HasModifier(myHero, "modifier_item_forcestaff_active") then
								Ability.CastPosition(blink, (Entity.GetAbsOrigin(enemy) + (Entity.GetAbsOrigin(myHero) - Entity.GetAbsOrigin(enemy)):Normalized():Scaled(75)))
								FAIO.lastTick = os.clock() + NetChannel.GetAvgLatency(Enum.Flow.FLOW_INCOMING)
								return
							end
						end
					end
				end
				if maxInitRange == 600 then
					if NPC.IsEntityInRange(myHero, enemy, 725) then
						if not NPC.IsEntityInRange(myHero, enemy, 550) then
							local pred = 600/1500 + (NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING) * 2)
							local predPos = FAIO.castPrediction(myHero, enemy, pred)
							if FAIO.AmIFacingPos(myHero, predPos, 5) then
								Ability.CastTarget(force, myHero)
								FAIO.lastTick = os.clock() + 600/1500 + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING)
								return
							else
								FAIO.GenericMainAttack(myHero, "Enum.UnitOrder.DOTA_UNIT_ORDER_MOVE_TO_POSITION", nil, predPos)
								return
							end
						end
					end
				end

				if FAIO.PudgeHookCanceller(myHero, enemy) then
					Player.HoldPosition(Players.GetLocal(), myHero, false)
					FAIO.PudgeHookStartTimer = 0
					FAIO.lastTick = 0
					FAIO.PudgeHookTargetedPos = nil
					return
				end	

				if W and Ability.IsReady(W) and NPC.IsEntityInRange(myHero, enemy, 245) and not Ability.GetToggleState(W) then
					if os.clock() > FAIO.PudgeHookRotDelayer then	
						Ability.Toggle(W)
						FAIO.PudgeRotComboActivation = true
						FAIO.PudgeHookRotDelayer = os.clock() + 0.2
						return
					end
				end
	
				if os.clock() > FAIO.lastTick then

					if ult and Ability.IsCastable(ult, myMana) then
						if NPC.IsEntityInRange(myHero, enemy, Ability.GetCastRange(ult)) then
							if not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_HEXED) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_STUNNED) then
								Ability.CastTarget(ult, enemy)
								FAIO.lastTick = os.clock() + 0.5
								return
							end
						end	
					end

					local check = false
						if maxInitRange == 600 then
							if NPC.IsEntityInRange(myHero, enemy, 725) then
								if not NPC.IsEntityInRange(myHero, enemy, 550) then
									check = true
								end
							end
						end
						if ult and Ability.IsCastable(ult, myMana) then
							if force and Ability.SecondsSinceLastUse(force) > -1 and Ability.SecondsSinceLastUse(force) < 1 then
								check = true
							end
							if blink and Ability.SecondsSinceLastUse(blink) > -1 and Ability.SecondsSinceLastUse(blink) < 0.5 then
								check = true
							end
						end

					if Menu.IsEnabled(FAIO.optionHeroPudgeHookCombo) and not check and not NPC.HasModifier(myHero, "modifier_item_forcestaff_active") then
						if Q and Ability.IsCastable(Q, myMana) and NPC.IsEntityInRange(myHero, enemy, Menu.GetValue(FAIO.optionHeroPudgeHookComboMaxRange)) and not NPC.IsChannellingAbility(myHero) then
							if FAIO.PudgeHookCollisionChecker(myHero, enemy) and not FAIO.PudgeHookJukingChecker(myHero, enemy) then
								local hookPrediction = Ability.GetCastPoint(Q) + NPC.GetTimeToFace(myHero, enemy) + (Entity.GetAbsOrigin(enemy):__sub(Entity.GetAbsOrigin(myHero)):Length2D() / 1450) + (NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING) * 2)
								local hookPredictedPos = FAIO.castPrediction(myHero, enemy, hookPrediction)
								Ability.CastPosition(Q, Entity.GetAbsOrigin(myHero) + (hookPredictedPos - Entity.GetAbsOrigin(myHero)):Normalized():Scaled(500))
								FAIO.PudgeHookStartTimer = os.clock() + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING) + FAIO.TimeToFacePosition(myHero, hookPredictedPos)
								FAIO.PudgeHookTargetedPos = hookPredictedPos
								FAIO.lastTick = os.clock() + 0.3
								return
							end
						end
					end
				end
			end

			local attCheck = false
				if ult and Ability.IsCastable(ult, myMana) then
					if force and Ability.SecondsSinceLastUse(force) > -1 and Ability.SecondsSinceLastUse(force) < 1 then
						check = true
					end
					if blink and Ability.SecondsSinceLastUse(blink) > -1 and Ability.SecondsSinceLastUse(blink) < 0.5 then
						check = true
					end
				end

			if not NPC.HasModifier(enemy, "modifier_pudge_meat_hook") and not attCheck then
				FAIO.GenericMainAttack(myHero, "Enum.UnitOrder.DOTA_UNIT_ORDER_ATTACK_TARGET", enemy, nil)
				return
			end
		end
	end

	if Menu.IsEnabled(FAIO.optionHeroPudgeFarm) then
		FAIO.PudgeAutoFarm(myHero, myMana, W)
	end

	if Menu.IsEnabled(FAIO.optionHeroPudgeSuicide) then
		FAIO.PudgeAutoSuicide(myHero, myMana, W)
	end

	return

end

function FAIO.PudgeAutoSuicide(myHero, myMana, rot)

	if not myHero then return end
	if not rot then return end

	if FAIO.heroCanCastItems(myHero) == false then return end
	if FAIO.isHeroChannelling(myHero) == true then return end
	if FAIO.IsHeroInvisible(myHero) == true then return end

	if os.clock() < FAIO.PudgeRotFarmToggledTime then return end

	if NPC.HasItem(myHero, "item_armlet", true) then return end

	local rotDamage = Ability.GetLevelSpecialValueFor(rot, "rot_damage")
		if NPC.HasAbility(myHero, "special_bonus_unique_pudge_2") then
			if Ability.GetLevel(NPC.GetAbility(myHero, "special_bonus_unique_pudge_2")) > 0 then
				rotDamage = rotDamage + 35
			end
		end

	rotDamage = ((1 - NPC.GetMagicalArmorValue(myHero)) * rotDamage + rotDamage * (Hero.GetIntellectTotal(myHero) / 14 / 100)) / 4

	local soulRing = NPC.GetItem(myHero, "item_soul_ring", true)
		if soulRing and Ability.IsReady(soulRing) and FAIO.heroCanCastItems(myHero) then
			rotDamage = rotDamage + 150
		end

	local myHP = Entity.GetHealth(myHero)

	if myHP <= rotDamage then
		for _, v in ipairs(Wrap.HeroesInRadius(myHero, 800, Enum.TeamType.TEAM_ENEMY)) do
			if v and Entity.IsHero(v) and not Entity.IsDormant(v) and not NPC.IsIllusion(v) then
				if NPC.IsAttacking(v) then
					if NPC.IsEntityInRange(myHero, v, NPC.GetAttackRange(v) + 140) then
						if NPC.FindFacingNPC(v) == myHero then
							if soulRing and Ability.IsReady(soulRing) and FAIO.heroCanCastItems(myHero) then
								Ability.CastNoTarget(soulRing)
								if not Ability.GetToggleState(rot) then
									Ability.Toggle(rot)
								end
								FAIO.PudgeRotFarmToggledTime = os.clock() + 0.2 + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING)
								break
								return
							else
								if not Ability.GetToggleState(rot) then
									Ability.Toggle(rot)
								end
								FAIO.PudgeRotFarmToggledTime = os.clock() + 0.2 + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING)
								break
								return
							end		
						end
					end
				end
				for ability, info in pairs(FAIO.RawDamageAbilityEstimation) do
					if NPC.HasAbility(v, ability) and Ability.IsInAbilityPhase(NPC.GetAbility(v, ability)) then
						local abilityRange = math.max(Ability.GetCastRange(NPC.GetAbility(v, ability)), info[2])
						local abilityRadius = info[3]
						if FAIO.dodgeIsTargetMe(myHero, v, abilityRadius, abilityRange) then
							if next(FAIO.dodgeItTable) == nil then
								if soulRing and Ability.IsReady(soulRing) and FAIO.heroCanCastItems(myHero) then
									Ability.CastNoTarget(soulRing)
									if not Ability.GetToggleState(rot) then
										Ability.Toggle(rot)
									end
									FAIO.PudgeRotFarmToggledTime = os.clock() + 0.2 + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING)
									break
									return
								else
									if not Ability.GetToggleState(rot) then
										Ability.Toggle(rot)
									end
									FAIO.PudgeRotFarmToggledTime = os.clock() + 0.2 + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING)
									break
									return
								end
							end
						end
					end
				end
			end	
		end
	end

	return	

end

function FAIO.IsHeroInvisible(myHero)

	if not myHero then return false end
	if not Wrap.EIsAlive(myHero) then return false end

	if NPC.HasState(myHero, Enum.ModifierState.MODIFIER_STATE_INVISIBLE) then return true end
	if NPC.HasModifier(myHero, "modifier_invoker_ghost_walk_self") then return true end
	if NPC.HasAbility(myHero, "invoker_ghost_walk") then
		if Ability.SecondsSinceLastUse(NPC.GetAbility(myHero, "invoker_ghost_walk")) > -1 and Ability.SecondsSinceLastUse(NPC.GetAbility(myHero, "invoker_ghost_walk")) < 1 then 
			return true
		end
	end

	if NPC.HasItem(myHero, "item_invis_sword", true) then
		if Ability.SecondsSinceLastUse(NPC.GetItem(myHero, "item_invis_sword", true)) > -1 and Ability.SecondsSinceLastUse(NPC.GetItem(myHero, "item_invis_sword", true)) < 1 then 
			return true
		end
	end
	if NPC.HasItem(myHero, "item_silver_edge", true) then
		if Ability.SecondsSinceLastUse(NPC.GetItem(myHero, "item_silver_edge", true)) > -1 and Ability.SecondsSinceLastUse(NPC.GetItem(myHero, "item_silver_edge", true)) < 1 then 
			return true
		end
	end

	return false
		
end

function FAIO.PudgeAutoFarm(myHero, myMana, rot)

	if not myHero then return end
	if not rot then return end

	if FAIO.heroCanCastItems(myHero) == false then return end
	if FAIO.isHeroChannelling(myHero) == true then return end
	if FAIO.IsHeroInvisible(myHero) == true then return end

	if os.clock() < FAIO.PudgeRotFarmToggledTime then return end

	if FAIO.PudgeRotFarmToggled and not Ability.GetToggleState(rot) then
		FAIO.PudgeRotFarmToggled = false
		return
	end

	if Entity.GetHealth(myHero) / Entity.GetMaxHealth(myHero) < Menu.GetValue(FAIO.optionHeroPudgeFarmHP) / 100 then
		if Ability.GetToggleState(rot) and FAIO.PudgeRotFarmToggled then
			Ability.Toggle(rot)
			FAIO.PudgeRotFarmToggled = false
			FAIO.PudgeRotFarmToggledTime = os.clock() + 0.2 + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING)
			return
		else
			return
		end
	end

	local rotDamage = Ability.GetLevelSpecialValueFor(rot, "rot_damage")
		if NPC.HasAbility(myHero, "special_bonus_unique_pudge_2") then
			if Ability.GetLevel(NPC.GetAbility(myHero, "special_bonus_unique_pudge_2")) > 0 then
				rotDamage = rotDamage + 35
			end
		end

	if #Wrap.UnitsInRadius(myHero, 240, Enum.TeamType.TEAM_ENEMY) < 1 then
		if Ability.GetToggleState(rot) and FAIO.PudgeRotFarmToggled then
			Ability.Toggle(rot)
			FAIO.PudgeRotFarmToggled = false
			FAIO.PudgeRotFarmToggledTime = os.clock() + 0.2 + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING)
			return
		end
	end	

	
	for _, creeps in ipairs(Wrap.UnitsInRadius(myHero, 240, Enum.TeamType.TEAM_ENEMY)) do
		if creeps and Wrap.EIsNPC(creeps) and not Entity.IsHero(creeps) and Wrap.EIsAlive(creeps) and not Entity.IsDormant(creeps) and not NPC.IsWaitingToSpawn(creeps) and NPC.GetUnitName(creeps) ~= "npc_dota_neutral_caster" and NPC.IsCreep(creeps) and NPC.GetUnitName(creeps) ~= nil and NPC.IsKillable(creeps) then
			local rotTrueDamage = ((1 - NPC.GetMagicalArmorValue(creeps)) * rotDamage + rotDamage * (Hero.GetIntellectTotal(myHero) / 14 / 100)) / 4
			if Entity.GetHealth(creeps) < rotTrueDamage then
				if not Ability.GetToggleState(rot) then
					Ability.Toggle(rot)
					FAIO.PudgeRotFarmToggled = true
					FAIO.PudgeRotFarmToggledTime = os.clock() + 0.2 + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING)
					return
				end
			else
				if Ability.GetToggleState(rot) and FAIO.PudgeRotFarmToggled then
					Ability.Toggle(rot)
					FAIO.PudgeRotFarmToggled = false
					FAIO.PudgeRotFarmToggledTime = os.clock() + 0.2 + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING)
					return
				end
			end
		else
			if Ability.GetToggleState(rot) and FAIO.PudgeRotFarmToggled then
				Ability.Toggle(rot)
				FAIO.PudgeRotFarmToggled = false
				FAIO.PudgeRotFarmToggledTime = os.clock() + 0.2 + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING)
				return
			end
		end
	end
	
	return
		
end

function FAIO.PudgeHookCombo(myHero, myMana, npc, hook, rot, ult)

	if not myHero then return end
	if not npc then return end

	if not hook then return end
		if Ability.GetLevel(hook) < 1 then return end

	FAIO.PudgeHookTargetIndicator(myHero, npc)
	FAIO.PudgeHookHitTracker(myHero, hook)

	if not Entity.IsSameTeam(myHero, npc) then
		if ult and Ability.IsCastable(ult, myMana) and Menu.IsEnabled(FAIO.optionHeroPudgeHookUlt) then
			if not NPC.HasState(npc, Enum.ModifierState.MODIFIER_STATE_HEXED) and not NPC.HasState(npc, Enum.ModifierState.MODIFIER_STATE_STUNNED) then
				if os.clock() > FAIO.PudgeHookDelayer then
					if NPC.IsEntityInRange(myHero, FAIO.PudgeHookTarget, Ability.GetCastRange(ult)) then
						Ability.CastTarget(ult, FAIO.PudgeHookTarget)
						FAIO.PudgeHookDelayer = os.clock() + 0.3
						return
					end
				end
			end
		end

		if rot and Ability.IsReady(rot) and NPC.IsEntityInRange(myHero, FAIO.PudgeHookTarget, 250) and not Ability.GetToggleState(rot) and Menu.IsEnabled(FAIO.optionHeroPudgeHookRot) then
			if os.clock() > FAIO.PudgeHookRotDelayer then
				Ability.Toggle(rot)
				FAIO.PudgeHookRotDelayer = os.clock() + 0.25
				return
			end
		end

		if FAIO.PudgeHookHit then
			if Menu.IsEnabled(FAIO.optionHeroPudgeHookItems) then
				FAIO.itemUsageSmartOrder(myHero, npc, true)
			end
			if not NPC.HasModifier(npc, "modifier_pudge_meat_hook") then
				FAIO.GenericMainAttack(myHero, "Enum.UnitOrder.DOTA_UNIT_ORDER_ATTACK_TARGET", npc, nil)
			end
		end	
	end

	local hookRange = Ability.GetCastRange(hook)
	local pred = Ability.GetCastPoint(hook) + NPC.GetTimeToFace(myHero, npc) + (Entity.GetAbsOrigin(npc):__sub(Entity.GetAbsOrigin(myHero)):Length2D() / 1450) + (NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING) * 2)
	local predPos = FAIO.castPrediction(myHero, npc, pred)

	if not NPC.IsPositionInRange(myHero, predPos, hookRange + 100, 20) then return end

	local atos = NPC.GetItem(myHero, "item_rod_of_atos", true)

	if hook and Ability.IsCastable(hook, myMana) and not NPC.IsChannellingAbility(myHero) then

		if FAIO.PudgeHookCanceller(myHero, npc) then
			Player.HoldPosition(Players.GetLocal(), myHero, false)
			FAIO.PudgeHookTarget = nil
			FAIO.PudgeHookStartTimer = 0
			FAIO.PudgeHookDelayer = 0
			FAIO.PudgeHookTargetedPos = nil
			return
		end
			
		if os.clock() > FAIO.PudgeHookDelayer then
			if not FAIO.PudgeHookJukingChecker(myHero, npc) then
				if FAIO.PudgeHookCollisionChecker(myHero, npc) then
					if FAIO.PudgeHookTiming(myHero, npc) > 0 then
						local modTiming = FAIO.PudgeHookTiming(myHero, npc) + 0.1
						local hookTiming = Ability.GetCastPoint(hook) + NPC.GetTimeToFace(myHero, npc) + ((Entity.GetAbsOrigin(npc):__sub(Entity.GetAbsOrigin(myHero)):Length2D() - 125) / 1450) + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING)
						if GameRules.GetGameTime() > modTiming - hookTiming then
							Ability.CastPosition(hook, Entity.GetAbsOrigin(myHero) + (predPos - Entity.GetAbsOrigin(myHero)):Normalized():Scaled(500))
							FAIO.PudgeHookStartTimer = os.clock() + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING) + FAIO.TimeToFacePosition(myHero, predPos)
							FAIO.PudgeHookDelayer = os.clock() + 0.35 + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING) + FAIO.TimeToFacePosition(myHero, predPos)
							return	
						end
					else
						if atos and Ability.IsCastable(atos, myMana) and NPC.IsEntityInRange(myHero, npc, 1150) and not NPC.HasState(npc, Enum.ModifierState.MODIFIER_STATE_MAGIC_IMMUNE) and not NPC.IsLinkensProtected(npc) then
							Ability.CastTarget(atos, npc)
							FAIO.PudgeHookTarget = npc
							return
						else
							if atos and Ability.SecondsSinceLastUse(atos) > -1 and Ability.SecondsSinceLastUse(atos) < ((Entity.GetAbsOrigin(myHero) - Entity.GetAbsOrigin(npc)):Length2D() / 1500) + 0.55 then
								local atosTiming = GameRules.GetGameTime() - math.max(Ability.SecondsSinceLastUse(atos), 0) + ((Entity.GetAbsOrigin(myHero) - Entity.GetAbsOrigin(npc)):Length2D() / 1500) + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING) - 0.1
								if GameRules.GetGameTime() >= atosTiming then
									Ability.CastPosition(hook, Entity.GetAbsOrigin(npc))
									FAIO.PudgeHookStartTimer = os.clock() + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING) + FAIO.TimeToFacePosition(myHero, predPos)
									FAIO.PudgeHookDelayer = os.clock() + 0.35 + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING) + FAIO.TimeToFacePosition(myHero, predPos)
									return
								end	
							else
								Ability.CastPosition(hook, Entity.GetAbsOrigin(myHero) + (predPos - Entity.GetAbsOrigin(myHero)):Normalized():Scaled(500))
								FAIO.PudgeHookStartTimer = os.clock() + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING) + FAIO.TimeToFacePosition(myHero, predPos)
								FAIO.PudgeHookDelayer = os.clock() + 0.35 + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING) + FAIO.TimeToFacePosition(myHero, predPos)
								FAIO.PudgeHookTargetedPos = predPos
								return
							end
						end
					end
				else
					if FAIO.PudgeHookForceStaffFun(myHero, myMana, npc, hook) then
						local targetRotation = Entity.GetRotation(npc):GetForward()
						local targetForcedPos = Entity.GetAbsOrigin(npc) + targetRotation:Normalized():Scaled(600)
						Ability.CastTarget(NPC.GetItem(myHero, "item_force_staff", true), npc)
						FAIO.PudgeHookTarget = npc
						Ability.CastPosition(hook, Entity.GetAbsOrigin(myHero) + (targetForcedPos - Entity.GetAbsOrigin(myHero)):Normalized():Scaled(500), true)
						FAIO.PudgeHookStartTimer = os.clock() + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING) + FAIO.TimeToFacePosition(myHero, targetForcedPos)
						FAIO.PudgeHookDelayer = os.clock() + 0.35 + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING) + FAIO.TimeToFacePosition(myHero, targetForcedPos)
						return	
					end
				end
							
			end
		end

	end

end

function FAIO.PudgeHookCollisionChecker(myHero, target)

	if not myHero then return false end
	if not target then return false end

	local pred = 0.3 + NPC.GetTimeToFace(myHero, target) + (Entity.GetAbsOrigin(target):__sub(Entity.GetAbsOrigin(myHero)):Length2D() / 1450) + (NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING) * 2)
	local predPos = FAIO.castPrediction(myHero, target, pred)

	local searchRadius = 125
	local distance = (Entity.GetAbsOrigin(myHero) - predPos):Length2D()

	for i = 1, math.floor(distance / searchRadius) do
		local checkVec = (predPos - Entity.GetAbsOrigin(myHero)):Normalized()
		local checkPos = Entity.GetAbsOrigin(myHero) + checkVec:Scaled(i * searchRadius)
		local unitsAround = Wrap.NInRadius(checkPos, searchRadius, Entity.GetTeamNum(myHero), Enum.TeamType.TEAM_BOTH)
		local check = false
			for _, unit in ipairs(unitsAround) do
				if unit and Wrap.EIsNPC(unit) and unit ~= target and unit ~= myHero and Wrap.EIsAlive(unit) and not Entity.IsDormant(unit) and not NPC.IsStructure(unit) and not NPC.IsBarracks(unit) and not NPC.IsWaitingToSpawn(unit) and NPC.GetUnitName(unit) ~= "npc_dota_neutral_caster" and NPC.GetUnitName(unit) ~= nil then
					check = true
					break
				end
			end

		if check then
			return false
		end	

	end

	return true

end

function FAIO.PudgeHookCanceller(myHero, target)

	if not myHero then return false end
	if not target then return false end

	local hook = NPC.GetAbilityByIndex(myHero, 0)
		if not hook then return false end
			if Ability.GetLevel(hook) < 1 then return false end

	local hookRange = Ability.GetCastRange(hook)

	if FAIO.PudgeHookTargetedPos == nil then return false end

	if os.clock() > FAIO.PudgeHookStartTimer + 0.3 then return false end
	if os.clock() < FAIO.PudgeHookStartTimer + 0.1 + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING) then return false end

	local timePassed = math.min(os.clock() - FAIO.PudgeHookStartTimer, 0.3)

	local pred = (0.3 - timePassed) + (Entity.GetAbsOrigin(target):__sub(Entity.GetAbsOrigin(myHero)):Length2D() / 1450) + (NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING) * 2)
	local predPos = FAIO.castPrediction(myHero, target, pred)
	
	if (predPos - Entity.GetAbsOrigin(myHero)):Length2D() > hookRange + 100 then return true end

	local searchRadius = 120
	local distance = (Entity.GetAbsOrigin(myHero) - predPos):Length2D()

	local check = false
		for i = 1, math.ceil(distance / searchRadius) do
			local checkVec = (FAIO.PudgeHookTargetedPos - Entity.GetAbsOrigin(myHero)):Normalized()
			local checkPos = Entity.GetAbsOrigin(myHero) + checkVec:Scaled(i * searchRadius)
			if (checkPos - predPos):Length2D() < searchRadius then
				check = true
				break
			end
		end

	if not check then
		return true
	end

	return false

end

function FAIO.PudgeHookJukingChecker(myHero, target)

	if not myHero then return false end
	if not target then return false end

	if not NPC.IsRunning(target) then return false end

	local turning = NPC.IsTurning(target)

	if NPC.IsRunning(target) then
		if NPC.IsRunning(target) then
			table.insert(FAIO.rotationTable, turning)
			if #FAIO.rotationTable > Menu.GetValue(FAIO.optionHeroPudgeHookJuke) then
				table.remove(FAIO.rotationTable, 1)
			end
		end
	end

	if #FAIO.rotationTable < Menu.GetValue(FAIO.optionHeroPudgeHookJuke) then 
		return true
	else
		local check = false
		for i = 1, #FAIO.rotationTable do
			if FAIO.rotationTable[i] == true then
				check = true
				break
			end
		end

		if check then
			return true
		end
	end

	return false
 
end

function FAIO.PudgeHookGetTarget(myHero)

	if not myHero then return end

	local targetingRange = Menu.GetValue(FAIO.optionHeroPudgeHookAcquiRange)
	local mousePos = Input.GetWorldCursorPos()

	
	local enemyTable = Wrap.HInRadius(mousePos, targetingRange, Entity.GetTeamNum(myHero), Enum.TeamType.TEAM_ENEMY)
		if Menu.IsEnabled(FAIO.optionHeroPudgeHookAllies) then
			enemyTable = Wrap.HInRadius(mousePos, targetingRange, Entity.GetTeamNum(myHero), Enum.TeamType.TEAM_BOTH)
		end
		if #enemyTable < 1 then return end

	local nearestTarget = nil
	local distance = 99999

	for i, v in ipairs(enemyTable) do
		if v and Entity.IsHero(v) and Wrap.EIsAlive(v) and v ~= myHero then
			if FAIO.targetChecker(v) ~= nil then
				local enemyDist = (Entity.GetAbsOrigin(v) - mousePos):Length2D()
				if enemyDist < distance then
					nearestTarget = v
					distance = enemyDist
				end
			end
		end
	end

	return nearestTarget or nil

end

function FAIO.PudgeHookTiming(myHero, target)

	if not myHero then return 0 end
	if not target then return 0 end

	local invulnerabilityList = {
		"modifier_eul_cyclone",
		"modifier_obsidian_destroyer_astral_imprisonment_prison",
		"modifier_shadow_demon_disruption",
		"modifier_invoker_tornado"
			}
	
	local searchMod
	for _, modifier in ipairs(invulnerabilityList) do
		if NPC.HasModifier(target, modifier) then
			searchMod = NPC.GetModifier(target, modifier)
			break
		end
	end

	if not searchMod then return 0 end

	local timing = 0
	if searchMod then
		local dieTime = Modifier.GetDieTime(searchMod)
		timing = dieTime
	end

	return timing

end

function FAIO.PudgeHookHitTracker(myHero, hook)

	if not myHero then return end
	if not hook then return end

	if Ability.SecondsSinceLastUse(hook) == -1 and FAIO.PudgeHookHit then
		FAIO.PudgeHookHit = false
	end

	if FAIO.PudgeHookTarget == nil and FAIO.PudgeHookHit then
		FAIO.PudgeHookHit = false
	end

	if FAIO.PudgeHookTarget then
		if NPC.HasModifier(FAIO.PudgeHookTarget, "modifier_pudge_meat_hook") then
			FAIO.PudgeHookHit = true
		end
	end
	
	return

end

function FAIO.heroCanCastSpells(myHero, enemy)

	if not myHero then return false end
	if not Wrap.EIsAlive(myHero) then return false end

	if NPC.IsSilenced(myHero) then return false end 
	if NPC.IsStunned(myHero) then return false end
	if NPC.HasModifier(myHero, "modifier_bashed") then return false end
	if NPC.HasState(myHero, Enum.ModifierState.MODIFIER_STATE_INVULNERABLE) then return false end	
	if NPC.HasModifier(myHero, "modifier_eul_cyclone") then return false end
	if NPC.HasModifier(myHero, "modifier_obsidian_destroyer_astral_imprisonment_prison") then return false end
	if NPC.HasModifier(myHero, "modifier_shadow_demon_disruption") then return false end	
	if NPC.HasModifier(myHero, "modifier_invoker_tornado") then return false end
	if NPC.HasState(myHero, Enum.ModifierState.MODIFIER_STATE_HEXED) then return false end
	if NPC.HasModifier(myHero, "modifier_legion_commander_duel") then return false end
	if NPC.HasModifier(myHero, "modifier_axe_berserkers_call") then return false end
	if NPC.HasModifier(myHero, "modifier_winter_wyvern_winters_curse") then return false end
	if NPC.HasModifier(myHero, "modifier_bane_fiends_grip") then return false end
	if NPC.HasModifier(myHero, "modifier_bane_nightmare") then return false end
	if NPC.HasModifier(myHero, "modifier_faceless_void_chronosphere_freeze") then return false end
	if NPC.HasModifier(myHero, "modifier_enigma_black_hole_pull") then return false end
	if NPC.HasModifier(myHero, "modifier_magnataur_reverse_polarity") then return false end
	if NPC.HasModifier(myHero, "modifier_pudge_dismember") then return false end
	if NPC.HasModifier(myHero, "modifier_shadow_shaman_shackles") then return false end
	if NPC.HasModifier(myHero, "modifier_techies_stasis_trap_stunned") then return false end
	if NPC.HasModifier(myHero, "modifier_storm_spirit_electric_vortex_pull") then return false end
	if NPC.HasModifier(myHero, "modifier_tidehunter_ravage") then return false end
	if NPC.HasModifier(myHero, "modifier_windrunner_shackle_shot") then return false end
	if NPC.HasModifier(myHero, "modifier_item_nullifier_mute") then return false end

	if enemy then
		if NPC.HasModifier(enemy, "modifier_item_aeon_disk_buff") then return false end
	end

	return true	

end


function FAIO.PudgeHookForceStaffFun(myHero, myMana, target, hook)

	if not myHero then return false end
	if not target then return false end
		if NPC.HasState(target, Enum.ModifierState.MODIFIER_STATE_MAGIC_IMMUNE) then return false end

	if not Menu.IsEnabled(FAIO.optionHeroPudgeHookStaff) then return false end
	if not hook then return false end

	if FAIO.heroCanCastSpells(myHero, enemy) == false then return false end
	if FAIO.isHeroChannelling(myHero) == true then return false end 

	if not NPC.IsEntityInRange(myHero, target, 750) then return false end
	if FAIO.PudgeHookJukingChecker(myHero, target) then return false end

	local force = NPC.GetItem(myHero, "item_force_staff", true)
		if not force then return false end
		if not Ability.IsCastable(force, myMana) then return false end

	local targetTurnTime90 = (0.03 * math.pi) / NPC.GetTurnRate(target) / 3.5
	if NPC.GetTimeToFace(target, myHero) > targetTurnTime90 then return false end

	local targetRotation = Entity.GetRotation(target):GetForward()
	local targetForcedPos = Entity.GetAbsOrigin(target) + targetRotation:Normalized():Scaled(600)

	if not FAIO.PudgeHookCollisionCheckerPosition(myHero, targetForcedPos) then return false end
	local hookRange = Ability.GetCastRange(hook)
		if (Entity.GetAbsOrigin(myHero) - targetForcedPos):Length2D() > hookRange then return false end

	return true

end

function FAIO.PudgeHookCollisionCheckerPosition(myHero, pos)

	if not myHero then return false end
	if not pos then return false end

	local searchRadius = 125
	local distance = (Entity.GetAbsOrigin(myHero) - pos):Length2D()

	for i = 1, math.floor(distance / searchRadius) do
		local checkVec = (pos - Entity.GetAbsOrigin(myHero)):Normalized()
		local checkPos = Entity.GetAbsOrigin(myHero) + checkVec:Scaled(i * searchRadius)
		local unitsAround = Wrap.NInRadius(checkPos, searchRadius, Entity.GetTeamNum(myHero), Enum.TeamType.TEAM_BOTH)
		local check = false
			for _, unit in ipairs(unitsAround) do
				if unit and Wrap.EIsNPC(unit) and unit ~= target and unit ~= myHero and Wrap.EIsAlive(unit) and not Entity.IsDormant(unit) and not NPC.IsStructure(unit) and not NPC.IsBarracks(unit) and not NPC.IsWaitingToSpawn(unit) and NPC.GetUnitName(unit) ~= "npc_dota_neutral_caster" and NPC.GetUnitName(unit) ~= nil then
					check = true
					break
				end
			end

		if check then
			return false
		end	

	end

	return true

end
			
function FAIO.PudgeHookTargetIndicatorDel(myHero)

	if not myHero then return end

	local curtime = GameRules.GetGameTime()

	if not Menu.IsKeyDown(FAIO.optionHeroPudgeHookKey) or FAIO.PudgeHookTarget == nil then
		if FAIO.PudgecurrentParticle > 0 then
			Particle.Destroy(FAIO.PudgecurrentParticle)			
			FAIO.PudgecurrentParticle = 0
		end
	end

	return

end


function FAIO.PudgeHookTargetIndicator(myHero, target)

	if not myHero then return end
	if not Menu.IsEnabled(FAIO.optionHeroPudgeHook) then return end

	local curtime = GameRules.GetGameTime()
		
	if (not target or target ~= FAIO.PudgecurrentParticleTarget) and FAIO.PudgecurrentParticle > 0 then
		Particle.Destroy(FAIO.PudgecurrentParticle)			
		FAIO.PudgecurrentParticle = 0
		FAIO.PudgecurrentParticleTarget = target
	else
		if FAIO.PudgecurrentParticle == 0 and target then
			local Particle = Particle.Create("particles/ui_mouseactions/range_finder_tower_aoe.vpcf", Enum.ParticleAttachment.PATTACH_INVALID, target)	
			FAIO.PudgecurrentParticle = Particle
			FAIO.PudgecurrentParticleTarget = target			
		end
		if FAIO.PudgecurrentParticle > 0 then
			Particle.SetControlPoint(FAIO.PudgecurrentParticle, 2, Entity.GetOrigin(myHero))
			Particle.SetControlPoint(FAIO.PudgecurrentParticle, 6, Vector(1, 0, 0))
			Particle.SetControlPoint(FAIO.PudgecurrentParticle, 7, Entity.GetOrigin(FAIO.PudgecurrentParticleTarget))
		end
	end

end

return FAIO
			