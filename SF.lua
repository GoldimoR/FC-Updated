local RastaSF = {}
local myHero, myPlayer, myTeam, myMana, myFaction, attackRange, myPos, myBase, enemyBase, enemyPosition
local enemy
local comboHero
local q,w,e,r,f
local razeShortPos, razeMidPos, razeLongPos
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
local cachedHeroIcons = {}
local cachedItemIcons = {}

RastaSF.optionSfEnable = Menu.AddOptionBool({"Hero by Rasta","Hero Specific", "Shadow Fiend"}, "Enable", false)
RastaSF.optionSfRazeKey = Menu.AddKeyOption({"Hero by Rasta","Hero Specific", "Shadow Fiend"}, "Auto Raze Key", Enum.ButtonCode.KEY_Z)
RastaSF.optionSfDrawRazePos = Menu.AddOptionBool({"Hero by Rasta","Hero Specific", "Shadow Fiend"}, "Draw Raze Position", false)
RastaSF.optionSfComboKey = Menu.AddKeyOption({"Hero by Rasta","Hero Specific", "Shadow Fiend"}, "Eul combo key", Enum.ButtonCode.KEY_F)
RastaSF.optionSfEnableBkb = Menu.AddOptionBool({"Hero by Rasta","Hero Specific", "Shadow Fiend", "Eul Combo"}, "Black King Bar", false)
RastaSF.optionSfEnableBlink = Menu.AddOptionBool({"Hero by Rasta","Hero Specific", "Shadow Fiend", "Eul Combo"}, "Blink", false)
RastaSF.optionSfEnableBlood = Menu.AddOptionBool({"Hero by Rasta","Hero Specific", "Shadow Fiend", "Eul Combo"}, "Bloodthorn", false)
RastaSF.optionSfEnableDagon = Menu.AddOptionBool({"Hero by Rasta","Hero Specific", "Shadow Fiend", "Eul Combo"}, "Dagon", false)
RastaSF.optionSfEnableEthereal = Menu.AddOptionBool({"Hero by Rasta","Hero Specific", "Shadow Fiend", "Eul Combo"}, "Ethereal blade", false)
RastaSF.optionSfEnableHex = Menu.AddOptionBool({"Hero by Rasta","Hero Specific", "Shadow Fiend", "Eul Combo"}, "Hex", false)
RastaSF.optionSfEnableOrchid = Menu.AddOptionBool({"Hero by Rasta","Hero Specific", "Shadow Fiend", "Eul Combo"}, "Orchid", false)
RastaSF.optionSfEnablePhase = Menu.AddOptionBool({"Hero by Rasta","Hero Specific", "Shadow Fiend", "Eul Combo"}, "Phase Boots", false)
RastaSF.optionEnablePoopLinken = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Enable", false)
RastaSF.optionEnablePoopAbyssal = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Abyssal Blade", false)
RastaSF.optionEnablePoopBlood = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Bloodthorn", false)
RastaSF.optionEnablePoopDagon = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Dagon", false)
RastaSF.optionEnablePoopDiffusal = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Diffusal Blade", false)
RastaSF.optionEnablePoopEul = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Eul", false)
RastaSF.optionEnablePoopForce = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Force Staff", false)
RastaSF.optionEnablePoopHalberd = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Heavens Halberd", false)
RastaSF.optionEnablePoopHex = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Hex", false)
RastaSF.optionEnablePoopPike = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Hurricane Pike", false)
RastaSF.optionEnablePoopOrchid = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Orchid", false)
function RastaSF.Init( ... )
	myHero = Heroes.GetLocal()
	nextTick = 0
	nextTick2 = 0
	needTime = 0
	needTime2 = 0
	time = 0
	added = false
	if not myHero then return end
        if NPC.GetUnitName(myHero) == "npc_dota_hero_nevermore" then
		comboHero = "SF"
		q = NPC.GetAbilityByIndex(myHero, 0)
		w = NPC.GetAbilityByIndex(myHero, 1)
		e = NPC.GetAbilityByIndex(myHero, 2)
		r = NPC.GetAbility(myHero, "nevermore_requiem")
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


function RastaSF.OnGameStart( ... )
	RastaSF.Init()
end


function RastaSF.ClearVar( ... )
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

function RastaSF.OnUpdate( ... )
	if not myHero then return end
	myMana = NPC.GetMana(myHero)
	time = GameRules.GetGameTime()
	myPos = Entity.GetAbsOrigin(myHero)
	if comboHero == "SF" and Menu.IsEnabled(RastaSF.optionSfEnable) then
		if Menu.IsKeyDown(RastaSF.optionSfComboKey) then
			if not enemy then
				enemy = Input.GetNearestHeroToCursor(myTeam, Enum.TeamType.TEAM_ENEMY)
			end
			if enemy and Entity.IsAlive(enemy) then
				enemyPosition = Entity.GetAbsOrigin(enemy)
				RastaSF.SfCombo(eul)
			end
		else
			enemy = nil
		end
		RastaSF.SfAutoRaze()
		end
		
RastaSF.ClearVar()
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

function RastaSF.SfCombo( ... )
	if NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_MAGIC_IMMUNE) then
		enemy = nil
		return
	end
	if r and Ability.IsCastable(r, myMana) then
		if RastaSF.IsLinkensProtected(enemy) and Menu.IsEnabled(RastaSF.optionEnablePoopLinken) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_MAGIC_IMMUNE) then
			RastaSF.PoopLinken(eul)
		end
		local possibleRange = NPC.GetMoveSpeed(myHero) * 0.8
		if not NPC.IsEntityInRange(myHero, enemy, possibleRange) then
			if blink and Menu.IsEnabled(RastaSF.optionSfEnableBlink) and Ability.IsCastable(blink,0) and NPC.IsEntityInRange(myHero, enemy, 1175 + 0.75 * possibleRange) then
				Ability.CastPosition(blink, (enemyPosition + (myPos - enemyPosition):Normalized():Scaled(0.75 * possibleRange)))
				return
			else
				Player.PrepareUnitOrders(myPlayer, Enum.UnitOrder.DOTA_UNIT_ORDER_MOVE_TO_TARGET, enemy, Vector(0,0,0), nil, Enum.PlayerOrderIssuer.DOTA_ORDER_ISSUER_PASSED_UNIT_ONLY, myHero)	
			end
		end
		if eblade and Menu.IsEnabled(RastaSF.optionSfEnableEthereal) and Ability.IsCastable(eblade, myMana) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_INVULNERABLE) then
			Ability.CastTarget(eblade, enemy)
			ebladeCasted[enemy] = true
			return
		end
		if dagon and Menu.IsEnabled(RastaSF.optionSfEnableDagon) and Ability.IsCastable(dagon, myMana) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_MAGIC_IMMUNE) then
			Ability.CastTarget(dagon, enemy)
			return
		end
		if hex and Menu.IsEnabled(RastaSF.optionSfEnableHex) and Ability.IsCastable(hex, myMana) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_INVULNERABLE) then
			Ability.CastTarget(hex, enemy)
			return
		end
		if bkb and Menu.IsEnabled(RastaSF.optionSfEnableBkb) and Ability.IsCastable(bkb, 0) and not NPC.HasState(myHero, Enum.ModifierState.MODIFIER_STATE_MAGIC_IMMUNE) then
			Ability.CastNoTarget(bkb)
			return
		end
		if orchid and Menu.IsEnabled(RastaSF.optionSfEnableOrchid) and Ability.IsCastable(orchid, myMana) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_INVULNERABLE) then
			Ability.CastTarget(orchid, enemy)
			return
		end
		if bloodthorn and Menu.IsEnabled(RastaSF.optionSfEnableBlood) and Ability.IsCastable(bloodthorn, myMana) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_INVULNERABLE) then
			Ability.CastTarget(bloodthorn, enemy)
			return
		end
		if phase and Menu.IsEnabled(RastaSF.optionSfEnablePhase) and Ability.IsCastable(phase, 0) then
			Ability.CastNoTarget(phase)
		end
		if eul and Ability.IsCastable(eul, myMana) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_INVULNERABLE) and not RastaSF.IsLinkensProtected(enemy) then
			if Menu.IsEnabled(RastaSF.optionSfEnableEthereal) and ebladeCasted[enemy] and eblade and Ability.SecondsSinceLastUse(eblade) < 3 then
				if NPC.HasModifier(enemy, "modifier_item_ethereal_blade_ethereal") then
					Ability.CastTarget(eul, enemy)
					ebladeCasted[enemy] = nil
				end
			else
				Ability.CastTarget(eul, enemy)
				ebladeCasted[enemy] = nil
			end
			return
		end	
		if NPC.HasModifier(enemy, "modifier_eul_cyclone") then
			local cycloneDieTime = Modifier.GetDieTime(NPC.GetModifier(enemy, "modifier_eul_cyclone"))
			if not NPC.IsEntityInRange(myHero, enemy, 65) then
				Player.PrepareUnitOrders(myPlayer, Enum.UnitOrder.DOTA_UNIT_ORDER_MOVE_TO_POSITION, nil, enemyPosition, nil, Enum.PlayerOrderIssuer.DOTA_ORDER_ISSUER_PASSED_UNIT_ONLY, myHero)
			else
				if cycloneDieTime - time <= 1.67 + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING) then
					Ability.CastNoTarget(r)
					return
				end
			end

		end
	end
end
function RastaSF.SfAutoRaze( ... )
	razeShortPos = myPos + Entity.GetRotation(myHero):GetForward():Normalized():Scaled(200)
	razeMidPos = myPos + Entity.GetRotation(myHero):GetForward():Normalized():Scaled(450)
	razeLongPos = myPos + Entity.GetRotation(myHero):GetForward():Normalized():Scaled(700)
	if Menu.IsKeyDown(RastaSF.optionSfRazeKey) then
		if not enemy then
			enemy = Input.GetNearestHeroToCursor(myTeam, Enum.TeamType.TEAM_ENEMY)
		end
	else
		if not Menu.IsKeyDown(RastaSF.optionSfComboKey) then
			enemy = nil
		end
		return
	end
	local razePrediction = 0.55 + 0.1 + (NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING) * 2)
	if not enemy or not Entity.IsAlive(enemy) then return end
	local predictPos = RastaSF.castPrediction(enemy,razePrediction)
	if q and Ability.IsCastable(q, myMana) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_MAGIC_IMMUNE) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_INVULNERABLE) then
		local disRazePOSpredictedPOS = (razeShortPos - predictPos):Length2D()
		if disRazePOSpredictedPOS <= 200 and not NPC.IsTurning(myHero) then
			Ability.CastNoTarget(q)
			return
		end
	end
	if w and Ability.IsCastable(w, myMana) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_MAGIC_IMMUNE) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_INVULNERABLE) then
		local disRazePOSpredictedPOS = (razeMidPos - predictPos):Length2D()
		if disRazePOSpredictedPOS <= 200 and not NPC.IsTurning(myHero) then
			Ability.CastNoTarget(w)
			return
		end
	end
	if e and Ability.IsCastable(e, myMana) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_MAGIC_IMMUNE) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_INVULNERABLE) then
		local disRazePOSpredictedPOS = (razeLongPos - predictPos):Length2D()
		if disRazePOSpredictedPOS <= 200 and not NPC.IsTurning(myHero) then
			Ability.CastNoTarget(e)
			return
		end
	end
end

function RastaSF.FindBestOrderPosition(tempTable, radius)
	if not tempTable then
		return
	end
	local enemyCount = #tempTable
	if enemyCount == 1 then
		return Entity.GetAbsOrigin(tempTable[1])
	end
	local count = 0
	local coord = {}
	for i, k in pairs(tempTable) do
		if NPC.IsEntityInRange(k, tempTable[1], radius) then
			local origin = Entity.GetAbsOrigin(k)
			local originX = origin:GetX()
			local originY = origin:GetY()
			table.insert(coord, {x = originX, y = originY})
			count = count + 1
		end
	end 
	local x = 0
	local y = 0
	for i = 1, count do
		x = x + coord[i].x
		y = y + coord[i].y
	end
	x = x/count
	y = y/count
	return Vector(x,y,0)
end

function RastaSF.OnDraw( ... )
	if not myHero then return end
	if comboHero == "SF" and Menu.IsEnabled(RastaSF.optionSfDrawRazePos) and Ability.GetLevel(q) >= 1 then
		if not razeShortPos or not razeMidPos or not razeLongPos then
			return
		end
		local x,y,vis = Renderer.WorldToScreen(razeShortPos)
		if vis and Ability.IsReady(q) then
			if Heroes.InRadius(razeShortPos,250,myTeam,Enum.TeamType.TEAM_ENEMY) then
				Renderer.SetDrawColor(255,0,0)
			else
				Renderer.SetDrawColor(0,255,100)	
			end
			Renderer.DrawOutlineRect(x,y,15,15)
		end
		local x1,y1,vis1 = Renderer.WorldToScreen(razeMidPos)
		if vis1 and Ability.IsReady(w) then
			if Heroes.InRadius(razeMidPos,250,myTeam,Enum.TeamType.TEAM_ENEMY)then
				Renderer.SetDrawColor(255,0,0)
			else
				Renderer.SetDrawColor(0,255,100)
			end
			Renderer.DrawOutlineRect(x1,y1,15,15)
		end
		local x2,y2,vis2 = Renderer.WorldToScreen(razeLongPos)
		if vis2 and Ability.IsReady(e) then
			if Heroes.InRadius(razeLongPos,250,myTeam,Enum.TeamType.TEAM_ENEMY) then
				Renderer.SetDrawColor(255,0,0)
			else
				Renderer.SetDrawColor(0,255,100)
			end
			Renderer.DrawOutlineRect(x2,y2,15,15)
		end
	end
end

function RastaSF.GetMoveSpeed(ent)
	local baseSpeed = NPC.GetBaseSpeed(ent)
	local bonusSpeed = NPC.GetMoveSpeed(ent) - baseSpeed
	local modHex
	if NPC.HasModifier(ent, "modifier_sheepstick_debuff") or NPC.HasModifier(ent, "modifier_lion_voodoo") or NPC.HasModifier(ent, "modifier_shadow_shaman_voodoo") then
		return 140 + bonusSpeed
	end
	if NPC.HasModifier(ent, "modifier_invoker_cold_snap_freeze") or NPC.HasModifier(ent, "modifier_invoker_cold_snap") then
		return NPC.GetMoveSpeed(ent) * 0.5
	end
	return baseSpeed + bonusSpeed
end
function RastaSF.castPrediction(enemy,adjVar, keyValue)
	local enemyRotation = Entity.GetRotation(enemy):GetVectors()
	enemyRotation:SetZ(0)
	local enemyOrigin = Entity.GetAbsOrigin(enemy)
	enemyOrigin:SetZ(0)
	if enemyRotation and enemyOrigin then
		if not NPC.IsRunning(enemy) then
			return enemyOrigin
		else
			if keyValue == 1 then --lion
				enemyRotation = Entity.GetRotation(enemy)
				local enemyPos = enemyOrigin+enemyRotation:GetForward():Normalized():Scaled(RastaSF.GetMoveSpeed(enemy)*adjVar)
				if NPC.IsPositionInRange(myHero, enemyPos, 600) then
					return enemyOrigin
				else
					return enemyOrigin+enemyRotation:GetVectors():Scaled(RastaSF.GetMoveSpeed(enemy))	
				end
			else
				return enemyOrigin:__add(enemyRotation:Normalized():Scaled(RastaSF.GetMoveSpeed(enemy) * adjVar))
			end
		end
	end
end

function RastaSF.IsLinkensProtected(npc)
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
function RastaSF.PoopLinken(exception)
	if abyssal and Menu.IsEnabled(RastaSF.optionEnablePoopAbyssal) and Ability.IsCastable(abyssal, myMana) then
		Ability.CastTarget(abyssal, enemy)
		return
	end
	if bloodthorn and Menu.IsEnabled(RastaSF.optionEnablePoopBlood) and Ability.IsCastable(bloodthorn, myMana) then
		Ability.CastTarget(bloodthorn, enemy)
		return
	end
	if dagon and Menu.IsEnabled(RastaSF.optionEnablePoopDagon) and Ability.IsCastable(dagon, myMana) then
		Ability.CastTarget(dagon, enemy)
		return
	end
	if diffusal and Menu.IsEnabled(RastaSF.optionEnablePoopDiffusal) and Ability.IsCastable(diffusal, 0) then
		Ability.CastTarget(diffusal, enemy)
		return
	end
	if eul and Menu.IsEnabled(RastaSF.optionEnablePoopEul) and Ability.IsCastable(eul, myMana) and eul ~= exception then
		Ability.CastTarget(eul, enemy)
		return
	end
	if force and Menu.IsEnabled(RastaSF.optionEnablePoopForce) and Ability.IsCastable(force, myMana) then
		Ability.CastTarget(force, enemy)
		return
	end
	if halberd and Menu.IsEnabled(RastaSF.optionEnablePoopHalberd) and Ability.IsCastable(halberd, myMana) then
		Ability.CastTarget(halberd, enemy)
		return
	end
	if hex and Menu.IsEnabled(RastaSF.optionEnablePoopHex) and Ability.IsCastable(hex, myMana) then
		Ability.CastTarget(hex, enemy)
		return
	end
	if pike and Menu.IsEnabled(RastaSF.optionEnablePoopPike) and Ability.IsCastable(pike, myMana) then
		Ability.CastTarget(pike, enemy)
		return
	end
	if orchid and Menu.IsEnabled(RastaSF.optionEnablePoopOrchid) and Ability.IsCastable(orchid, myMana) then
		Ability.CastTarget(orchid, enemy)
		return
	end
end

function RastaSF.AbilityIsCastable(ability, myMana)
	if not Entity.IsAlive(myHero) then return false end
	if myMana >= Ability.GetManaCost(ability) and Ability.IsReady(ability) then
		if not NPC.IsSilenced(myHero) and not NPC.IsStunned(myHero) and not NPC.HasState(myHero, Enum.ModifierState.MODIFIER_STATE_HEXED) and not NPC.HasState(myHero, Enum.ModifierState.MODIFIER_STATE_INVULNERABLE) then
			return true
		end
	end
	return false
end

function RastaSF.ItemIsCastable(ability, myMana)
	if not Entity.IsAlive(myHero) then return false end
	if myMana >= Ability.GetManaCost(ability) and Ability.IsReady(ability) then
		if not NPC.IsStunned(myHero) and not NPC.HasState(myHero, Enum.ModifierState.MODIFIER_STATE_HEXED) and not NPC.HasState(myHero, Enum.ModifierState.MODIFIER_STATE_INVULNERABLE) and not NPC.HasModifier(myHero, "modifier_doom_bringer_doom") and not NPC.HasModifier(myHero, "modifier_item_nullifier_mute") then
			return true
		end
	end
	return false
end

RastaSF.Init()

return RastaSF