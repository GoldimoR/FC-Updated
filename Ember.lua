local RastaEm = {}
local myHero, myPlayer, myTeam, myMana, myFaction, attackRange, myPos, myBase, enemyBase, enemyPosition
local enemy
local comboHero
local q,w,e,r,f
local remnant_casted = false
local nextTick = 0
local nextTick2 = 0
local needTime = 0
local needTime2 = 0
local needAttack
local added = false
local ebladeCasted = {}
local x,y
local urn, soulring, vessel, hex, halberd, mjolnir, bkb, nullifier, solar, courage, force, pike, eul, orchid, bloodthorn, diffusal, armlet, lotus, satanic, blademail, blink, abyssal, eblade, phase, discord, shiva, refresher, manta, silver, midas, necro, silver, branch, mom, arcane
local time = 0
RastaEm.optionEmberEnable = Menu.AddOptionBool({"Hero by Rasta", "Hero Specific", "Ember Spirit"}, "Enable", false)
RastaEm.optionEmberAutoChain = Menu.AddOptionBool({"Hero by Rasta", "Hero Specific", "Ember Spirit"}, "Auto Cast Chains After Fist")
RastaEm.optionEmberComboKey = Menu.AddKeyOption({"Hero by Rasta", "Hero Specific", "Ember Spirit"}, "Combo Key", Enum.ButtonCode.KEY_F)
RastaEm.optionEmberComboRadius = Menu.AddOptionSlider({"Hero by Rasta", "Hero Specific", "Ember Spirit"}, "Combo Radius", 250, 1500, 1500)
RastaEm.optionEmberEnableChains = Menu.AddOptionBool({"Hero by Rasta", "Hero Specific", "Ember Spirit", "Skills"}, "Searing Chains", false)
RastaEm.optionEmberEnableFist = Menu.AddOptionBool({"Hero by Rasta", "Hero Specific", "Ember Spirit", "Skills"}, "Sleight of Fist", false)
RastaEm.optionEmberEnableFlame = Menu.AddOptionBool({"Hero by Rasta", "Hero Specific", "Ember Spirit", "Skills"}, "Flame Guard", false)
RastaEm.optionEmberEnableRemnant = Menu.AddOptionBool({"Hero by Rasta", "Hero Specific", "Ember Spirit", "Skills"}, "Fire Remnant", false)
RastaEm.optionEmberSaveRemnantCount = Menu.AddOptionSlider({"Hero by Rasta", "Hero Specific", "Ember Spirit", "Skills"}, "Fire Remnant Save Count", 0, 2, 0)
RastaEm.optionEmberEnableBkb = Menu.AddOptionBool({"Hero by Rasta", "Hero Specific", "Ember Spirit", "Items"}, "Black King Bar", false)
RastaEm.optionEmberEnableBlademail = Menu.AddOptionBool({"Hero by Rasta", "Hero Specific", "Ember Spirit", "Items"}, "Blademail", false)
RastaEm.optionEmberEnableBloodthorn = Menu.AddOptionBool({"Hero by Rasta", "Hero Specific", "Ember Spirit", "Items"}, "Bloodthorn", false)
RastaEm.optionEmberEnableDiscord = Menu.AddOptionBool({"Hero by Rasta", "Hero Specific", "Ember Spirit", "Items"}, "Veil of Discord", false)
RastaEm.optionEmberEnableOrchid = Menu.AddOptionBool({"Hero by Rasta", "Hero Specific", "Ember Spirit", "Items"}, "Orchid", false)
RastaEm.optionEmberEnableShiva = Menu.AddOptionBool({"Hero by Rasta", "Hero Specific", "Ember Spirit", "Items"}, "Shiva's Guard", false)
RastaEm.optionEnablePoopLinken = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Enable", false)
RastaEm.optionEnablePoopAbyssal = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Abyssal Blade", false)
RastaEm.optionEnablePoopBlood = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Bloodthorn", false)
RastaEm.optionEnablePoopDagon = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Dagon", false)
RastaEm.optionEnablePoopDiffusal = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Diffusal Blade", false)
RastaEm.optionEnablePoopEul = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Eul", false)
RastaEm.optionEnablePoopForce = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Force Staff", false)
RastaEm.optionEnablePoopHalberd = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Heavens Halberd", false)
RastaEm.optionEnablePoopHex = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Hex", false)
RastaEm.optionEnablePoopPike = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Hurricane Pike", false)
RastaEm.optionEnablePoopOrchid = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Orchid", false)


function RastaEm.Init( ... )
	myHero = Heroes.GetLocal()
	nextTick = 0
	nextTick2 = 0
	needTime = 0
	needTime2 = 0
	time = 0
	added = false
	if not myHero then return end
	if NPC.GetUnitName(myHero) == "npc_dota_hero_ember_spirit" then
		comboHero = "Ember"
		q = NPC.GetAbilityByIndex(myHero, 0)
		w = NPC.GetAbilityByIndex(myHero, 1)
		e = NPC.GetAbilityByIndex(myHero, 2)
		r = NPC.GetAbility(myHero, "ember_spirit_fire_remnant")
		f = NPC.GetAbility(myHero, "ember_spirit_activate_fire_remnant")
		else	
		myHero = nil
		return	
	end
	myTeam = Entity.GetTeamNum(myHero)
	if myTeam == 2 then -- radiant
		myBase = Vector(-7328.000000, -6816.000000, 512.000000)
		enemyBase = Vector(7141.750000, 6666.125000, 512.000000)
		myFaction = "radiant"
	else
		myBase = Vector(7141.750000, 6666.125000, 512.000000)
		enemyBase = Vector(-7328.000000, -6816.000000, 512.000000)
		myFaction = "dire"
	end
	myPlayer = Players.GetLocal()
end


function RastaEm.OnGameStart( ... )
	RastaEm.Init()
end


function RastaEm.ClearVar( ... )
	urn = nil
	vessel = nil 
	hex = nil
	halberd = nil 
	mjolnir = nil
	bkb = nil
	nullifier = nil 
	solar = nil 
	courage = nil 
	force = nil
	pike = nil
	eul = nil
	orchid = nil
	bloodthorn = nil
	diffusal = nil
	armlet = nil 
	lotus = nil 
	satanic = nil 
	blademail = nil
	blink = nil
	abyssal = nil
	discrd = nil
	phase = nil
	dagon = nil
	eblade = nil
	shiva = nil
	refresher = nil
	soulring = nil
	necro = nil
	manta = nil
	silver = nil
	branch = nil
	arcane = nil
	mom = nil
end


function RastaEm.OnUpdate( ... )
	if not myHero then return end
	myMana = NPC.GetMana(myHero)
	time = GameRules.GetGameTime()
	myPos = Entity.GetAbsOrigin(myHero)
	if comboHero == "Ember" and Menu.IsEnabled(RastaEm.optionEmberEnable) then
		if Menu.IsKeyDown(RastaEm.optionEmberComboKey) then
			if not enemy then
				enemy = Input.GetNearestHeroToCursor(myTeam, Enum.TeamType.TEAM_ENEMY)
			end
			if enemy and Entity.IsAlive(enemy) then
				enemyPosition = Entity.GetAbsOrigin(enemy)
				RastaEm.EmberCombo()
			end
		elseif Menu.IsEnabled(RastaEm.optionEmberAutoChain) then
			if NPC.HasModifier(myHero, "modifier_ember_spirit_sleight_of_fist_marker") or NPC.HasModifier(myHero, "modifier_ember_spirit_sleight_of_fist_caster") or NPC.HasModifier(myHero, "modifier_ember_spirit_sleight_of_fist_caster_invulnerability") then
				if not enemy then
					if Heroes.InRadius(myPos,150, myTeam, Enum.TeamType.TEAM_ENEMY) then
						for i, k in pairs(Heroes.InRadius(myPos,150, myTeam, Enum.TeamType.TEAM_ENEMY)) do
							enemy = k
							break
						end
					end
				end
				if enemy and Entity.IsAlive(enemy) then
					enemyPosition = Entity.GetAbsOrigin(enemy)
					if NPC.IsEntityInRange(myHero, enemy, 125) then
						if Ability.IsCastable(q,myMana) then
							Ability.CastNoTarget(q)
						end
					end
				end
			else
				if not Menu.IsKeyDown(RastaEm.optionEmberComboKey) then
					enemy = nil
				end	
			end
		else	
			enemy = nil	
		end
	end
		RastaEm.ClearVar()
	for i = 0, 5 do
		item = NPC.GetItemByIndex(myHero, i)
		if item and item ~= 0 then
			local name = Ability.GetName(item)
			if name == "item_urn_of_shadows" then
				urn = item
			elseif name == "item_spirit_vessel" then
				vessel = item
			elseif name == "item_sheepstick" then
				hex = item
			elseif name == "item_nullifier" then
				nullifier = item
			elseif name == "item_diffusal_blade" then
				diffusal = item
			elseif name == "item_mjollnir" then
				mjolnir = item
			elseif name == "item_heavens_halberd" then
				halberd = item
			elseif name == "item_abyssal_blade" then
				abyssal = item
			elseif name == "item_armlet" then
				armlet = item
			elseif name == "item_bloodthorn" then
				bloodthorn = item
			elseif name == "item_black_king_bar" then
				bkb = item
			elseif name == "item_medallion_of_courage" then
				courage = item
			elseif name == "item_solar_crest" then
				solar = item
			elseif name == "item_blink" then
				blink = item
			elseif name == "item_blade_mail" then
				blademail = item
			elseif name == "item_orchid" then
				orchid = item
			elseif name == "item_lotus_orb" then
				lotus = item
			elseif name == "item_cyclone" then
				eul = item
			elseif name == "item_satanic" then
				satanic = item
			elseif name == "item_force_staff" then
				force = item
			elseif name == "item_hurricane_pike" then
				pike = item 
			elseif name == "item_ethereal_blade" then
				eblade = item
			elseif name == "item_phase_boots" then
				phase = item
			elseif name == "item_dagon" or name == "item_dagon_2" or name == "item_dagon_3" or name == "item_dagon_4" or name == "item_dagon_5" then
				dagon = item
			elseif name == "item_veil_of_discord" then
				discord = item
			elseif name == "item_shivas_guard" then
				shiva = item
			elseif name == "item_refresher" then
				refresher = item
			elseif name == "item_soul_ring"	then
				soulring = item
			elseif name == "item_manta" then
				manta = item
			elseif name == "item_necronomicon" or name == "item_necronomicon_2" or name == "item_necronomicon_3" then
				necro = item
			elseif name == "item_silver_edge" then
				silver = item
			elseif name == "item_branches" then
				branch = item
			elseif name == "item_mask_of_madness" then
				mom = item
			elseif name == "item_arcane_boots" then
				arcane = item	
			end
		end
	end
end


function RastaEm.EmberCombo( ... )
	if not enemy or NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_MAGIC_IMMUNE) or NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_INVULNERABLE) or not NPC.IsEntityInRange(myHero, enemy, Menu.GetValue(RastaEm.optionEmberComboRadius)) then
		enemy = nil
		return
	end
	local enemyPos = enemyPosition
	local remnant_count = Modifier.GetStackCount(NPC.GetModifier(myHero, "modifier_ember_spirit_fire_remnant_charge_counter")) - Menu.GetValue(RastaEm.optionEmberSaveRemnantCount)
	if discord and Menu.IsEnabled(RastaEm.optionEmberEnableDiscord) and Ability.IsCastable(discord, myMana) then
		Ability.CastPosition(discord, RastaEm.castPrediction(enemy,1))
	end
	if bkb and Menu.IsEnabled(RastaEm.optionEmberEnableBkb) and Ability.IsCastable(bkb,0) then
		Ability.CastNoTarget(bkb)
		return
	end
	if r and Ability.IsCastable(f,myMana) and Menu.IsEnabled(RastaEm.optionEmberEnableRemnant) and remnant_count > 0 and time >= nextTick then
		for i = 1, remnant_count do
			Ability.CastPosition(r, RastaEm.castPrediction(enemy,1))
			remnant_casted = true
		end
		needTime = time + ((myPos:__sub(enemyPos)):Length() - 350)/(RastaEm.GetMoveSpeed(myHero)*2.5)
		nextTick = time + 0.1 + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING)
		return
	end
	if RastaEm.IsLinkensProtected(enemy) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_MAGIC_IMMUNE) then
		RastaEm.PoopLinken()
	end
	if f and Ability.IsCastable(f,myMana) and remnant_casted and time >= needTime then
		Ability.CastPosition(f, enemyPos)
		remnant_casted = false
		return
	end
	if shiva and Menu.IsEnabled(RastaEm.optionEmberEnableShiva) and Ability.IsCastable(shiva, myMana) then
		Ability.CastNoTarget(shiva)
		return
	end
	if blademail and Menu.IsEnabled(RastaEm.optionEmberEnableBlademail) and Ability.IsCastable(blademail, myMana) then
		Ability.CastNoTarget(blademail)
		return
	end
	if orchid and Menu.IsEnabled(RastaEm.optionEmberEnableOrchid) and Ability.IsCastable(orchid, myMana) then
		Ability.CastTarget(orchid, enemy)
		return
	end
	if bloodthorn and Menu.IsEnabled(RastaEm.optionEmberEnableBloodthorn) and Ability.IsCastable(bloodthorn, myMana) then
		Ability.CastTarget(bloodthorn, enemy)
		return
	end
	if q and Menu.IsEnabled(RastaEm.optionEmberEnableChains) and Ability.IsCastable(q, myMana) and NPC.IsEntityInRange(myHero, enemy, 200) then
		Ability.CastNoTarget(q)
		return
	end
	if w and Menu.IsEnabled(RastaEm.optionEmberEnableFist) and Ability.IsCastable(w, myMana) and time > needTime+0.25 then
		Ability.CastPosition(w, enemyPos)
		return
	end
	if e and Menu.IsEnabled(RastaEm.optionEmberEnableFlame) and Ability.IsCastable(e, myMana) then
		Ability.CastNoTarget(e)
		return
	end
	Player.AttackTarget(myPlayer, myHero, enemy)
end


function RastaEm.IsLinkensProtected(npc)
	if NPC.IsLinkensProtected(npc) then
		return true
	end
	if NPC.GetUnitName(npc) == "npc_dota_hero_antimage" then
		if (NPC.HasItem(npc, "item_ultimate_scepter") or NPC.HasModifier(npc, "modifier_item_ultimate_scepter_consumed")) and Ability.IsReady(NPC.GetAbility(npc, "antimage_spell_shield")) and not NPC.HasModifierState(npc, Enum.ModifierState.MODIFIER_STATE_PASSIVES_DISABLED) then
			return true
		end
	end
	return false
end
function RastaEm.PoopLinken(exception)
	if abyssal and Menu.IsEnabled(RastaEm.optionEnablePoopAbyssal) and Ability.IsCastable(abyssal, myMana) then
		Ability.CastTarget(abyssal, enemy)
		return
	end
	if bloodthorn and Menu.IsEnabled(RastaEm.optionEnablePoopBlood) and Ability.IsCastable(bloodthorn, myMana) then
		Ability.CastTarget(bloodthorn, enemy)
		return
	end
	if dagon and Menu.IsEnabled(RastaEm.optionEnablePoopDagon) and Ability.IsCastable(dagon, myMana) then
		Ability.CastTarget(dagon, enemy)
		return
	end
	if diffusal and Menu.IsEnabled(RastaEm.optionEnablePoopDiffusal) and Ability.IsCastable(diffusal, 0) then
		Ability.CastTarget(diffusal, enemy)
		return
	end
	if eul and Menu.IsEnabled(RastaEm.optionEnablePoopEul) and Ability.IsCastable(eul, myMana) and eul ~= exception then
		Ability.CastTarget(eul, enemy)
		return
	end
	if force and Menu.IsEnabled(RastaEm.optionEnablePoopForce) and Ability.IsCastable(force, myMana) then
		Ability.CastTarget(force, enemy)
		return
	end
	if halberd and Menu.IsEnabled(RastaEm.optionEnablePoopHalberd) and Ability.IsCastable(halberd, myMana) then
		Ability.CastTarget(halberd, enemy)
		return
	end
	if hex and Menu.IsEnabled(RastaEm.optionEnablePoopHex) and Ability.IsCastable(hex, myMana) then
		Ability.CastTarget(hex, enemy)
		return
	end
	if pike and Menu.IsEnabled(RastaEm.optionEnablePoopPike) and Ability.IsCastable(pike, myMana) then
		Ability.CastTarget(pike, enemy)
		return
	end
	if orchid and Menu.IsEnabled(RastaEm.optionEnablePoopOrchid) and Ability.IsCastable(orchid, myMana) then
		Ability.CastTarget(orchid, enemy)
		return
	end
end


function RastaEm.AbilityIsCastable(ability, myMana)
	if not Entity.IsAlive(myHero) then return false end
	if myMana >= Ability.GetManaCost(ability) and Ability.IsReady(ability) then
		if not NPC.IsSilenced(myHero) and not NPC.IsStunned(myHero) and not NPC.HasState(myHero, Enum.ModifierState.MODIFIER_STATE_HEXED) and not NPC.HasState(myHero, Enum.ModifierState.MODIFIER_STATE_INVULNERABLE) then
			return true
		end
	end
	return false
end


function RastaEm.ItemIsCastable(ability, myMana)
	if not Entity.IsAlive(myHero) then return false end
	if myMana >= Ability.GetManaCost(ability) and Ability.IsReady(ability) then
		if not NPC.IsStunned(myHero) and not NPC.HasState(myHero, Enum.ModifierState.MODIFIER_STATE_HEXED) and not NPC.HasState(myHero, Enum.ModifierState.MODIFIER_STATE_INVULNERABLE) and not NPC.HasModifier(myHero, "modifier_doom_bringer_doom") and not NPC.HasModifier(myHero, "modifier_item_nullifier_mute") then
			return true
		end
	end
	return false
end


RastaEm.Init()


return RastaEm