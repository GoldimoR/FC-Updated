local RastaCL = {}
local myHero, myPlayer, myTeam, myMana, myFaction, attackRange, myPos, myBase, enemyBase, enemyPosition
local enemy
local comboHero
local q,w,e,r,f
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


RastaCL.optionClinkzEnable = Menu.AddOptionBool({"Hero by Rasta","Hero Specific", "Clinkz"}, "Enable", false)
RastaCL.optionClinkzComboKey = Menu.AddKeyOption({"Hero by Rasta","Hero Specific", "Clinkz"}, "Combo Key", Enum.ButtonCode.KEY_Z)
RastaCL.optionClinkzTargetStyle = Menu.AddOptionCombo({"Hero by Rasta", "Hero Specific", "Clinkz"}, "Target Style", {"Free Target", "Lock Target"}, 1)
RastaCL.optionClinkzEnableBkb = Menu.AddOptionBool({"Hero by Rasta","Hero Specific", "Clinkz", "Combo"}, "Black King Bar", false)
RastaCL.optionClinkzEnableBlood = Menu.AddOptionBool({"Hero by Rasta","Hero Specific", "Clinkz", "Combo"}, "Bloodthorn", false)
RastaCL.optionClinkzEnableCourage = Menu.AddOptionBool({"Hero by Rasta","Hero Specific", "Clinkz", "Combo"}, "Medallion of Courage", false)
RastaCL.optionClinkzEnableDiffusal = Menu.AddOptionBool({"Hero by Rasta","Hero Specific", "Clinkz", "Combo"}, "Diffusal Blade", false)
RastaCL.optionClinkzEnableHex = Menu.AddOptionBool({"Hero by Rasta","Hero Specific", "Clinkz", "Combo"}, "Hex", false)
RastaCL.optionClinkzEnableNullifier = Menu.AddOptionBool({"Hero by Rasta","Hero Specific", "Clinkz", "Combo"}, "Nullifier", false)
RastaCL.optionClinkzEnableOrchid = Menu.AddOptionBool({"Hero by Rasta","Hero Specific", "Clinkz", "Combo"}, "Orchid", false)
RastaCL.optionClinkzEnableSolar = Menu.AddOptionBool({"Hero by Rasta","Hero Specific", "Clinkz", "Combo"}, "Solar Crest", false)
RastaCL.optionClinkzEnableStack = Menu.AddOptionBool({"Hero by Rasta", "Hero Specific", "Clinkz"}, "Stack Hex/orchid+nullifier", false)
RastaCL.optionEnablePoopLinken = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Enable", false)
RastaCL.optionEnablePoopAbyssal = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Abyssal Blade", false)
RastaCL.optionEnablePoopBlood = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Bloodthorn", false)
RastaCL.optionEnablePoopDagon = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Dagon", false)
RastaCL.optionEnablePoopDiffusal = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Diffusal Blade", false)
RastaCL.optionEnablePoopEul = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Eul", false)
RastaCL.optionEnablePoopForce = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Force Staff", false)
RastaCL.optionEnablePoopHalberd = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Heavens Halberd", false)
RastaCL.optionEnablePoopHex = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Hex", false)
RastaCL.optionEnablePoopPike = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Hurricane Pike", false)
RastaCL.optionEnablePoopOrchid = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Orchid", false)



function RastaCL.Init( ... )
	myHero = Heroes.GetLocal()
	nextTick = 0
	nextTick2 = 0
	needTime = 0
	needTime2 = 0
	time = 0
	added = false
	spark_spam = nil
	if not myHero then return end
	if NPC.GetUnitName(myHero) == "npc_dota_hero_clinkz" then
		comboHero = "Clinkz"
		q = NPC.GetAbilityByIndex(myHero, 0)
		w = NPC.GetAbilityByIndex(myHero, 1)
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


function RastaCL.OnGameStart( ... )
	RastaCL.Init()
end


function RastaCL.ClearVar( ... )
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


function RastaCL.cloneClearVar( ... )
	clone_hex = nil
	clone_orchid = nil
	clone_blood = nil
	clone_nullifier = nil
	clone_silver = nil
	clone_mjolnir = nil
	clone_manta = nil
	clone_midas = nil
	clone_bkb = nil
	clone_diffusal = nil
	clone_satanic = nil
	clone_necro = nil
	clone_boots = nil
	clone_silver = nil
	clone_mom = nil
end


function RastaCL.OnUpdate( ... )
	if not myHero then return end
	myMana = NPC.GetMana(myHero)
	time = GameRules.GetGameTime()
	myPos = Entity.GetAbsOrigin(myHero)
	if comboHero == "Clinkz" and Menu.IsEnabled(RastaCL.optionClinkzEnable) then
		if Menu.IsKeyDown(RastaCL.optionClinkzComboKey) then
			if Menu.GetValue(RastaCL.optionClinkzTargetStyle) == 1 and not enemy then
				enemy = Input.GetNearestHeroToCursor(myTeam, Enum.TeamType.TEAM_ENEMY)
			elseif Menu.GetValue(RastaCL.optionClinkzTargetStyle) == 0 then
				enemy = Input.GetNearestHeroToCursor(myTeam, Enum.TeamType.TEAM_ENEMY)
			end
			if enemy and Entity.IsAlive(enemy) then
				enemyPosition = Entity.GetAbsOrigin(enemy)
				RastaCL.ClinkzCombo()
			end
		else
			enemy = nil
		end
	end
			RastaCL.ClearVar()
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


function RastaCL.ClinkzCombo( ... )
	if NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_INVULNERABLE) or NPC.HasModifier(enemy, "modifier_dark_willow_shadow_realm_buff") then
		enemy = nil
		return
	end
	if attackRange ~= NPC.GetAttackRange(myHero) then
		attackRange = NPC.GetAttackRange(myHero)
	end
	if NPC.IsEntityInRange(myHero, enemy, attackRange) then
		if q and RastaCL.AbilityIsCastable(q, myMana) then
			Ability.CastNoTarget(q)
			return
		end
		if not Ability.GetAutoCastState(w) and RastaCL.AbilityIsCastable(w, myMana) and time >= nextTick then
			Ability.ToggleMod(w)
			nextTick = time + 0.1 + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING)
		end
		if RastaCL.IsLinkensProtected(enemy) and Menu.IsEnabled(RastaCL.optionEnablePoopLinken) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_MAGIC_IMMUNE) then
			RastaCL.PoopLinken()
		end
		if hex and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_HEXED) and Menu.IsEnabled(RastaCL.optionClinkzEnableHex) and RastaCL.ItemIsCastable(hex, myMana) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_MAGIC_IMMUNE) then
			Ability.CastTarget(hex, enemy)
			return
		end		
		if nullifier and not NPC.HasModifier(enemy, "modifier_item_nullifier_mute") and Menu.IsEnabled(RastaCL.optionClinkzEnableNullifier) and RastaCL.ItemIsCastable(nullifier, myMana) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_MAGIC_IMMUNE) then
			if NPC.GetItem(enemy, "item_aeon_disk", true) then
				if NPC.HasModifier(enemy, "modifier_item_aeon_disk_buff") and not Ability.IsReady(NPC.GetItem(enemy, "item_aeon_disk", true)) then
					Ability.CastTarget(nullifier,enemy)
				end
			else
				if NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_HEXED) and not Menu.IsEnabled(RastaCL.optionClinkzEnableStack) then
					local modHex = NPC.GetModifier(enemy, "modifier_sheepstick_debuff")
					if not modHex then
						modHex = NPC.GetModifier(enemy, "modifier_shadow_shaman_voodoo")
					end
					if not modHex then
						modHex = NPC.GetModifier(enemy, "modifier_lion_voodoo")
					end
					if modHex then
						local dieTime = Modifier.GetDieTime(modHex)
						if dieTime - time <= (enemyPosition-myPos):Length()/750 + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING) then
							Ability.CastTarget(nullifier,enemy)
						end
					end
				else
					Ability.CastTarget(nullifier, enemy)
				end
			end
			return
		end		
		if diffusal and not NPC.HasModifier(enemy, "modifier_item_diffusal_blade_slow") and Menu.IsEnabled(RastaCL.optionClinkzEnableDiffusal) and RastaCL.ItemIsCastable(diffusal,0) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_MAGIC_IMMUNE) then
			Ability.CastTarget(diffusal, enemy)
			return
		end
		if orchid and not NPC.HasModifier(enemy, "modifier_orchid_malevolence_debuff") and Menu.IsEnabled(RastaCL.optionClinkzEnableOrchid) and RastaCL.ItemIsCastable(orchid, myMana) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_MAGIC_IMMUNE) then
			if Menu.IsEnabled(RastaCL.optionClinkzEnableStack) and NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_HEXED)then
				Ability.CastTarget(orchid, enemy)
			elseif not Menu.IsEnabled(RastaCL.optionClinkzEnableStack) and NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_HEXED) then
			
			else
				Ability.CastTarget(orchid, enemy)	
			end
			return
		end
		if bloodthorn and not NPC.HasModifier(enemy, "modifier_bloodthorn_debuff") and Menu.IsEnabled(RastaCL.optionClinkzEnableBlood) and RastaCL.ItemIsCastable(bloodthorn, myMana) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_MAGIC_IMMUNE) then
			if Menu.IsEnabled(RastaCL.optionClinkzEnableStack) and NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_HEXED) then
				Ability.CastTarget(bloodthorn, enemy)
			elseif not Menu.IsEnabled(RastaCL.optionClinkzEnableStack) and NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_HEXED) then
			
			else
				Ability.CastTarget(bloodthorn, enemy)	
			end
			return
		end
		if courage and not NPC.HasModifier(enemy, "modifier_item_medallion_of_courage_armor_reduction") and Menu.IsEnabled(RastaCL.optionClinkzEnableCourage) and RastaCL.ItemIsCastable(courage, 0) then
			Ability.CastTarget(courage, enemy)
			return
		end
		if solar and not NPC.HasModifier(enemy, "modifier_item_solar_crest_armor_reduction") and Menu.IsEnabled(RastaCL.optionClinkzEnableSolar) and RastaCL.ItemIsCastable(solar, 0) then
			Ability.CastTarget(solar, enemy)
			return
		end
		if bkb and not NPC.HasState(myHero, Enum.ModifierState.MODIFIER_STATE_MAGIC_IMMUNE) and Menu.IsEnabled(RastaCL.optionClinkzEnableBkb) and RastaCL.ItemIsCastable(bkb, 0) then
			Ability.CastNoTarget(bkb)
			return
		end
	end
	Player.AttackTarget(myPlayer, myHero, enemy)
end


function RastaCL.IsLinkensProtected(npc)
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


function RastaCL.PoopLinken(exception)
	if abyssal and Menu.IsEnabled(RastaCL.optionEnablePoopAbyssal) and Ability.IsCastable(abyssal, myMana) then
		Ability.CastTarget(abyssal, enemy)
		return
	end
	if bloodthorn and Menu.IsEnabled(RastaCL.optionEnablePoopBlood) and Ability.IsCastable(bloodthorn, myMana) then
		Ability.CastTarget(bloodthorn, enemy)
		return
	end
	if dagon and Menu.IsEnabled(RastaCL.optionEnablePoopDagon) and Ability.IsCastable(dagon, myMana) then
		Ability.CastTarget(dagon, enemy)
		return
	end
	if diffusal and Menu.IsEnabled(RastaCL.optionEnablePoopDiffusal) and Ability.IsCastable(diffusal, 0) then
		Ability.CastTarget(diffusal, enemy)
		return
	end
	if eul and Menu.IsEnabled(RastaCL.optionEnablePoopEul) and Ability.IsCastable(eul, myMana) and eul ~= exception then
		Ability.CastTarget(eul, enemy)
		return
	end
	if force and Menu.IsEnabled(RastaCL.optionEnablePoopForce) and Ability.IsCastable(force, myMana) then
		Ability.CastTarget(force, enemy)
		return
	end
	if halberd and Menu.IsEnabled(RastaCL.optionEnablePoopHalberd) and Ability.IsCastable(halberd, myMana) then
		Ability.CastTarget(halberd, enemy)
		return
	end
	if hex and Menu.IsEnabled(RastaCL.optionEnablePoopHex) and Ability.IsCastable(hex, myMana) then
		Ability.CastTarget(hex, enemy)
		return
	end
	if pike and Menu.IsEnabled(RastaCL.optionEnablePoopPike) and Ability.IsCastable(pike, myMana) then
		Ability.CastTarget(pike, enemy)
		return
	end
	if orchid and Menu.IsEnabled(RastaCL.optionEnablePoopOrchid) and Ability.IsCastable(orchid, myMana) then
		Ability.CastTarget(orchid, enemy)
		return
	end
end


function RastaCL.AbilityIsCastable(ability, myMana)
	if not Entity.IsAlive(myHero) then return false end
	if myMana >= Ability.GetManaCost(ability) and Ability.IsReady(ability) then
		if not NPC.IsSilenced(myHero) and not NPC.IsStunned(myHero) and not NPC.HasState(myHero, Enum.ModifierState.MODIFIER_STATE_HEXED) and not NPC.HasState(myHero, Enum.ModifierState.MODIFIER_STATE_INVULNERABLE) then
			return true
		end
	end
	return false
end


function RastaCL.ItemIsCastable(ability, myMana)
	if not Entity.IsAlive(myHero) then return false end
	if myMana >= Ability.GetManaCost(ability) and Ability.IsReady(ability) then
		if not NPC.IsStunned(myHero) and not NPC.HasState(myHero, Enum.ModifierState.MODIFIER_STATE_HEXED) and not NPC.HasState(myHero, Enum.ModifierState.MODIFIER_STATE_INVULNERABLE) and not NPC.HasModifier(myHero, "modifier_doom_bringer_doom") and not NPC.HasModifier(myHero, "modifier_item_nullifier_mute") then
			return true
		end
	end
	return false
end

RastaCL.Init()

return RastaCL