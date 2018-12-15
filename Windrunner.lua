local RastaWR = {}
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
local wrFont = Renderer.LoadFont("Tahoma", 15, Enum.FontWeight.EXTRABOLD)
local canBeShackled = {}
local urn, soulring, vessel, hex, halberd, mjolnir, bkb, nullifier, solar, courage, force, pike, eul, orchid, bloodthorn, diffusal, armlet, lotus, satanic, blademail, blink, abyssal, eblade, phase, discord, shiva, refresher, manta, silver, midas, necro, silver, branch, mom, arcane
local time = 0

RastaWR.optionWindrunnerEnable = Menu.AddOptionBool({"Hero by Rasta", "Hero Specific", "Windrunner"}, "Enable", false)
RastaWR.optionWindrunnerComboKey = Menu.AddKeyOption({"Hero by Rasta", "Hero Specific", "Windrunner"}, "Combo Key", Enum.ButtonCode.KEY_Z)
RastaWR.optionWindrunnerTargetStyle = Menu.AddOptionCombo({"Hero by Rasta", "Hero Specific", "Windrunner"}, "Target Style", {"Lock Target", "Free Target"}, 0)
RastaWR.optionWindrunnerDrawShackle = Menu.AddOptionBool({"Hero by Rasta", "Hero Specific", "Windrunner"}, "Draw when you can shackle", false)
RastaWR.optionWindrunnerDebuffUnstack = Menu.AddOptionBool({"Hero by Rasta", "Hero Specific", "Windrunner"}, "Debuff Unstack", true)
RastaWR.optionWindrunnerCheckBM = Menu.AddOptionBool({"Hero by Rasta", "Hero Specific", "Windrunner"}, "Check BM/Lotus", true)
RastaWR.optionWindrunnerEnableShackle = Menu.AddOptionBool({"Hero by Rasta", "Hero Specific", "Windrunner", "Skills"}, "Shackleshot", false)
RastaWR.optionWindrunnerEnableWindrun = Menu.AddOptionBool({"Hero by Rasta", "Hero Specific", "Windrunner", "Skills"}, "Windrun", false)
RastaWR.optionWindrunnerWindrunMinimumHeroAround = Menu.AddOptionSlider({"Hero by Rasta", "Hero Specific", "Windrunner", "Skills"}, "Minimum Heroes Around to use windrun", 1, 5, 1)
RastaWR.optionWindrunnerEnableFocusFire = Menu.AddOptionBool({"Hero by Rasta", "Hero Specific", "Windrunner", "Skills"}, "Focus Fire", false)
RastaWR.optionWindrunnerEnableBkb = Menu.AddOptionBool({"Hero by Rasta", "Hero Specific", "Windrunner", "Items"}, "Black King Bar", false)
RastaWR.optionWindrunnerEnableBlink = Menu.AddOptionBool({"Hero by Rasta", "Hero Specific", "Windrunner", "Items"}, "Blink Dagger", false)
RastaWR.optionWindrunnerEnableBlood = Menu.AddOptionBool({"Hero by Rasta", "Hero Specific", "Windrunner", "Items"}, "Bloodthorn", false)
RastaWR.optionWindrunnerEnableBranches = Menu.AddOptionBool({"Hero by Rasta", "Hero Specific", "Windrunner", "Items"}, "Branch-Blink Combo", false)
RastaWR.optionWindrunnerEnableDiffusal = Menu.AddOptionBool({"Hero by Rasta", "Hero Specific", "Windrunner", "Items"}, "Diffusal Blade", false)
RastaWR.optionWindrunnerEnableNullifier = Menu.AddOptionBool({"Hero by Rasta", "Hero Specific", "Windrunner", "Items"}, "Nullifier", false)
RastaWR.optionWindrunnerEnableOrchid = Menu.AddOptionBool({"Hero by Rasta", "Hero Specific", "Windrunner", "Items"}, "Orchid", false)
RastaWR.optionWindrunnerEnableHex = Menu.AddOptionBool({"Hero by Rasta", "Hero Specific", "Windrunner", "Items"}, "Scythe of Vyse", false)
RastaWR.optionEnablePoopLinken = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Enable", false)
RastaWR.optionEnablePoopAbyssal = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Abyssal Blade", false)
RastaWR.optionEnablePoopBlood = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Bloodthorn", false)
RastaWR.optionEnablePoopDagon = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Dagon", false)
RastaWR.optionEnablePoopDiffusal = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Diffusal Blade", false)
RastaWR.optionEnablePoopEul = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Eul", false)
RastaWR.optionEnablePoopForce = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Force Staff", false)
RastaWR.optionEnablePoopHalberd = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Heavens Halberd", false)
RastaWR.optionEnablePoopHex = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Hex", false)
RastaWR.optionEnablePoopPike = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Hurricane Pike", false)
RastaWR.optionEnablePoopOrchid = Menu.AddOptionBool({"Hero by Rasta", "Poop Linken"}, "Orchid", false)


function RastaWR.Init( ... )
	myHero = Heroes.GetLocal()
	nextTick = 0
	nextTick2 = 0
	needTime = 0
	needTime2 = 0
	time = 0
	added = false
	if not myHero then return end
	if NPC.GetUnitName(myHero) == "npc_dota_hero_windrunner" then
		comboHero = "Windrunner"
		q = NPC.GetAbilityByIndex(myHero, 0)
		e = NPC.GetAbilityByIndex(myHero, 2)
		r = NPC.GetAbility(myHero, "windrunner_focusfire")
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


function RastaWR.OnGameStart( ... )
	RastaWR.Init()
end


function RastaWR.ClearVar( ... )
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


function RastaWR.OnUpdate( ... )
	if not myHero then return end
	myMana = NPC.GetMana(myHero)
	time = GameRules.GetGameTime()
	myPos = Entity.GetAbsOrigin(myHero)
	if comboHero == "Windrunner" and Menu.IsEnabled(RastaWR.optionWindrunnerEnable) then
		if Menu.IsKeyDown(RastaWR.optionWindrunnerComboKey) then
			if Menu.GetValue(RastaWR.optionWindrunnerTargetStyle) == 1 and not enemy then
				enemy = Input.GetNearestHeroToCursor(myTeam, Enum.TeamType.TEAM_ENEMY)
			elseif Menu.GetValue(RastaWR.optionWindrunnerTargetStyle) == 0 then
				enemy = Input.GetNearestHeroToCursor(myTeam, Enum.TeamType.TEAM_ENEMY)
			end
			if enemy and Entity.IsAlive(enemy) then
				enemyPosition = Entity.GetAbsOrigin(enemy)
				RastaWR.WindrunnerCombo()
			end
		end
		if Ability.IsCastable(q, myMana) and Entity.GetHeroesInRadius(myHero, Ability.GetCastRange(q), Enum.TeamType.TEAM_ENEMY) and Menu.IsEnabled(RastaWR.optionWindrunnerDrawShackle) then
			RastaWR.WindrunnerDrawInfo(Entity.GetHeroesInRadius(myHero, Ability.GetCastRange(q), Enum.TeamType.TEAM_ENEMY))
		end
	end	
		RastaWR.ClearVar()
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


function RastaWR.WindrunnerCombo( ... )
	if not enemy or not NPC.IsEntityInRange(myHero, enemy, 3000) then
		enemy = nil
		return
	end
	if Menu.IsEnabled(RastaWR.optionWindrunnerCheckBM) and (NPC.HasModifier(enemy, "modifier_item_blade_mail_reflect") or NPC.HasModifier(enemy, "modifier_item_lotus_orb_active")) then
		return
	end
	if RastaWR.IsLinkensProtected(enemy) and Menu.IsEnabled(RastaWR.optionEnablePoopLinken) then
		RastaWR.PoopLinken()
	end
	if Ability.IsCastable(q, myMana) and Menu.IsEnabled(RastaWR.optionWindrunnerEnableShackle) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_MAGIC_IMMUNE) then
		if RastaWR.getEnemyBeShackledWithNPC(enemy) then
			Ability.CastTarget(q, RastaWR.getEnemyBeShackledWithNPC(enemy))
			return
		elseif RastaWR.canEnemyBeShackledWithTree(enemy) then
			Ability.CastTarget(q, enemy)
			return
		else
			if RastaWR.getEnemyShackledBestPosition(enemy, 750):__tostring() ~= Vector(0,0,0):__tostring() then
				if blink and Ability.IsCastable(blink, 0) and Menu.IsEnabled(RastaWR.optionWindrunnerEnableBlink) then
					Ability.CastPosition(blink, RastaWR.getEnemyShackledBestPosition(enemy, 1150))
					return
				end	
			end
		end
	end
	if not RastaWR.getEnemyBeShackledWithNPC(enemy) and not RastaWR.canEnemyBeShackledWithTree(enemy) and RastaWR.getEnemyShackledBestPosition(enemy, 750):__tostring() == Vector(0,0,0):__tostring() then
		if Menu.IsEnabled(RastaWR.optionWindrunnerEnableBranches) then
			if branch and NPC.IsEntityInRange(myHero, enemy, 750) then
				if blink and Ability.IsCastable(blink, 0) then
					if q and Ability.IsCastable(q, myMana) then
						Ability.CastTarget(q, enemy)
						return
					end
					if not Ability.IsReady(q) then
						Ability.CastPosition(blink, enemyPosition + (enemyPosition - myPos):Rotated(45):Normalized():Scaled(200))
						Ability.CastPosition(branch, enemyPosition + (enemyPosition - myPos):Normalized():Scaled(150))
						return
					end
				end
			end
		end	
	end
	if bkb and Ability.IsCastable(bkb, 0) and Menu.IsEnabled(RastaWR.optionWindrunnerEnableBkb) and not NPC.HasState(myHero, Enum.ModifierState.MODIFIER_STATE_MAGIC_IMMUNE) and time >= nextTick then
		Ability.CastNoTarget(bkb)
		nextTick = time + 0.05
		return
	end
	if hex and Ability.IsCastable(hex, myMana) and time >= nextTick and Menu.IsEnabled(RastaWR.optionWindrunnerEnableHex) and NPC.IsEntityInRange(myHero, enemy, Ability.GetCastRange(hex)) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_MAGIC_IMMUNE) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_INVULNERABLE) then
		if Menu.IsEnabled(RastaWR.optionWindrunnerDebuffUnstack) then
			if NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_HEXED) then
				local modHex = NPC.GetModifier(enemy, "modifier_sheepstick_debuff")
				if not modHex then
					modHex = NPC.GetModifier(enemy, "modifier_shadow_shaman_voodoo")
				end
				if not modHex then
					modHex = NPC.GetModifier(enemy, "modifier_lion_voodoo")
				end
				if modHex then
					local dieTime = Modifier.GetDieTime(modHex)
					if dieTime - time <= 0.85 then
						Ability.CastTarget(hex,enemy)
						nextTick = time + 0.05 + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING)
						return
					end
				end
			else	
				Ability.CastTarget(hex, enemy)
				nextTick = time + 0.1 + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING)
				return
			end
		else
			Ability.CastTarget(hex, enemy)
			nextTick = time + 0.05
			return
		end	
	end
	if nullifier and Ability.IsCastable(nullifier, myMana) and time >= nextTick and Menu.IsEnabled(RastaWR.optionWindrunnerEnableNullifier) and NPC.IsEntityInRange(myHero, enemy, Ability.GetCastRange(nullifier)) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_MAGIC_IMMUNE) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_INVULNERABLE) then
		if NPC.GetItem(enemy, "item_aeon_disk", true) then
			if NPC.HasModifier(enemy, "modifier_item_aeon_disk_buff") or not Ability.IsReady(NPC.GetItem(enemy, "item_aeon_disk", true)) then
				Ability.CastTarget(nullifier,enemy)
				needTime = time + 0.1 + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING)
				return
			end
		else
			if NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_HEXED) and Menu.IsEnabled(RastaWR.optionArcDebuffUnstack) then
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
						nextTick = time + 0.1 + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING)
						return
					end
				end
			elseif Menu.IsEnabled(RastaWR.optionWindrunnerDebuffUnstack) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_HEXED) then
				Ability.CastTarget(nullifier, enemy)
				nextTick = time + 0.1 + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING)
				return	
			elseif not Menu.IsEnabled(RastaWR.optionWindrunnerDebuffUnstack) then
				Ability.CastTarget(nullifier, enemy)
				nextTick = time + 0.1 + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING)
				return
			end
		end
	end
	if bloodthorn and Ability.IsCastable(bloodthorn, myMana) and time >= nextTick and Menu.IsEnabled(RastaWR.optionWindrunnerEnableBlood) and NPC.IsEntityInRange(myHero, enemy, Ability.GetCastRange(bloodthorn)) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_MAGIC_IMMUNE) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_INVULNERABLE) then
		if Menu.IsEnabled(RastaWR.optionWindrunnerDebuffUnstack) then
			if not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_SILENCED) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_HEXED) then
				Ability.CastTarget(bloodthorn, enemy)
				nextTick = time + 0.05
				return
			end
		else	
			Ability.CastTarget(bloodthorn, enemy)
			nextTick = time + 0.05
			return
		end
	end
	if orchid and Ability.IsCastable(orchid, myMana) and time >= nextTick and Menu.IsEnabled(RastaWR.optionWindrunnerEnableOrchid) and NPC.IsEntityInRange(myHero, enemy, Ability.GetCastRange(orchid)) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_MAGIC_IMMUNE) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_INVULNERABLE) then
		if Menu.IsEnabled(RastaWR.optionWindrunnerDebuffUnstack) then
			if not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_SILENCED) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_HEXED) then
				Ability.CastTarget(orchid, enemy)
				nextTick = time + 0.05
				return
			end
		else	
			Ability.CastTarget(orchid, enemy)
			nextTick = time + 0.05
			return
		end
	end
	if diffusal and time >= nextTick and Menu.IsEnabled(RastaWR.optionWindrunnerEnableDiffusal) and Ability.IsCastable(diffusal, 0) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_MAGIC_IMMUNE) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_INVULNERABLE) then
		if Menu.IsEnabled(RastaWR.optionWindrunnerDebuffUnstack) and not NPC.HasModifier(enemy, "modifier_item_diffusal_blade_slow") and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_HEXED) then
			Ability.CastTarget(diffusal, enemy)
			nextTick = time + 0.1 + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING)
			return
		elseif not Menu.IsEnabled(RastaWR.optionWindrunnerDebuffUnstack) then
			Ability.CastTarget(diffusal, enemy)
			nextTick = time + 0.1 + NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING)
			return
		end	
	end
	if e and Ability.IsCastable(e, myMana) and Menu.IsEnabled(RastaWR.optionWindrunnerEnableWindrun) then
		local count
		local tempTable = Entity.GetHeroesInRadius(myHero, 600, Enum.TeamType.TEAM_ENEMY)
		if tempTable then
			count = #tempTable
		else
			count = 0
		end	
		if count >= Menu.GetValue(RastaWR.optionWindrunnerWindrunMinimumHeroAround) then
			Ability.CastNoTarget(e)
			nextTick = time + 0.05
			return
		end
	end
	if Ability.IsCastable(r, myMana) and not RastaWR.IsLinkensProtected(enemy) and Menu.IsEnabled(RastaWR.optionWindrunnerEnableFocusFire) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_INVULNERABLE) and not NPC.HasState(enemy, Enum.ModifierState.MODIFIER_STATE_ATTACK_IMMUNE) then
		Ability.CastTarget(r, enemy)
		nextTick = time + 0.05
		return
	end
	if time >= needTime then
		Player.AttackTarget(myPlayer, myHero, enemy)
		needTime = time + 0.275
	end
end


function RastaWR.WindrunnerDrawInfo(heroTable) 
	if not myHero or not Entity.IsAlive(myHero) or not heroTable then
		return
	end
	for i, k in pairs(heroTable) do
		if k and not NPC.HasState(k, Enum.ModifierState.MODIFIER_STATE_MAGIC_IMMUNE) then
			if RastaWR.getEnemyBeShackledWithNPC(k) or RastaWR.canEnemyBeShackledWithTree(k) then
				canBeShackled[k] = true
			else
				canBeShackled[k] = false	
			end
		end
	end
end


function RastaWR.getEnemyShackledBestPosition(enemy, dist)
	if not dist then return Vector() end
	local shackleSearchRange = 575
	local shackleCastRange = 785
	local enemyPos1 = RastaWR.castPrediction(enemy, 0.15 + (NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING) * 2))
	local directLineVector = enemyPos1 + (enemyPos1 - Entity.GetAbsOrigin(myHero)):Normalized():Scaled(shackleSearchRange)
	local shacklePos = Vector(0,0,0)
	local minDis = 99999
	local minCreepDis = 99999
	if not RastaWR.canEnemyBeShackledWithTree(enemy) and not RastaWR.getEnemyBeShackledWithNPC(enemy) then
		local npcs = Entity.GetUnitsInRadius(enemy, shackleSearchRange, Enum.TeamType.TEAM_FRIEND)
		if npcs then
			for _, targetNPC in ipairs(npcs) do
				if targetNPC then
					local myDisToEnemy = (Entity.GetAbsOrigin(myHero) - enemyPos1):Length2D()
					local myDisToNPC = (Entity.GetAbsOrigin(myHero) - Entity.GetAbsOrigin(targetNPC)):Length2D()
					local enemyDisToNPC = (enemyPos1 - Entity.GetAbsOrigin(targetNPC)):Length2D()
					
					if myDisToEnemy < myDisToNPC then
						local vectorNPCtoEnemy = enemyPos1 - Entity.GetAbsOrigin(targetNPC)
						local searchVec = Entity.GetAbsOrigin(targetNPC) + vectorNPCtoEnemy:Normalized():Scaled(vectorNPCtoEnemy:Length2D() + 250)
						local myDisToSearchPos = (searchVec - Entity.GetAbsOrigin(myHero)):Length2D()
						if not Trees.InRadius(searchVec, 300, true) and not Heroes.InRadius(searchVec, 150, myTeam, Enum.TeamType.TEAM_ENEMY) then
							if myDisToSearchPos < minDis then
								shacklePos = searchVec
								minDis = myDisToSearchPos
							end
						end
					else
						local vectorEnemyToNPC = Entity.GetAbsOrigin(targetNPC) - enemyPos1
						local searchVec = enemyPos1 + vectorEnemyToNPC:Normalized():Scaled(vectorEnemyToNPC:Length2D() + 250)
						local myDisToSearchPos = (searchVec - Entity.GetAbsOrigin(myHero)):Length2D()
						if not Trees.InRadius(searchVec, 300, true) and not Heroes.InRadius(searchVec, 150, myTeam, Enum.TeamType.TEAM_ENEMY) then
							if myDisToSearchPos < minDis and vectorEnemyToNPC:Length2D() < minCreepDis then
								shacklePos = searchVec
								minDis = myDisToSearchPos
								minCreepDis = vectorEnemyToNPC:Length2D()
							end
						end
					end
				end
			end
		end
		if shacklePos:__tostring() == Vector(0,0,0):__tostring() then
			if next(RastaWR.getEnemyShackleTrees(enemy)) then
				for _, targetTree in ipairs(RastaWR.getEnemyShackleTrees(enemy)) do
					if targetTree then
						local vectorTreeToEnemy = enemyPos1 - Entity.GetAbsOrigin(targetTree)
						local searchVec = Entity.GetAbsOrigin(targetTree) + vectorTreeToEnemy:Normalized():Scaled(vectorTreeToEnemy:Length2D() + 350)
						local myDisToSearchPos = (searchVec - Entity.GetAbsOrigin(myHero)):Length2D()
						if not Trees.InRadius(searchVec, 300, true) and not Heroes.InRadius(searchVec, 300, myTeam, Enum.TeamType.TEAM_ENEMY) then
							if myDisToSearchPos < minDis then
								shacklePos = searchVec
								minDis = myDisToSearchPos
							end
						end
					end
				end
			end	
		end
	end
	if shacklePos:__tostring() ~= Vector():__tostring() and minDis < dist then
		return shacklePos
	end
	return Vector(0,0,0)
end


function RastaWR.getEnemyShackleTrees(enemy)
	local shackleSearchRange = 575
	local enemyPos1 = RastaWR.castPrediction(enemy, 0.15 + (NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING) * 2))

	local trees = Trees.InRadius(enemyPos1, shackleSearchRange, true)
	local returnTrees = {}
	if trees then
		for _, targetTree in ipairs(trees) do		
			if targetTree then
				table.insert(returnTrees, targetTree)
			end
		end
	else
		return {}
	end	

	if next(returnTrees) ~= nil then
		return returnTrees
	end
	return {}

end


function RastaWR.getEnemyBeShackledWithNPC(npc)
	local shackleSearchRange = 575
	local shackleCastRange = 785
	local enemyPos1 = RastaWR.castPrediction(npc, 0.15 + (NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING) * 2))
	local directLineVector = enemyPos1 + (enemyPos1 - Entity.GetAbsOrigin(myHero)):Normalized():Scaled(shackleSearchRange)
	local npcs = Entity.GetUnitsInRadius(npc, shackleSearchRange, Enum.TeamType.TEAM_FRIEND)
	local shackleNPC
	local minAngle = 180
	local minRange = 99999	
	if npcs then
		for _, targetNPC in ipairs(npcs) do
			if targetNPC then
				local myDisToEnemy = (Entity.GetAbsOrigin(myHero) - enemyPos1):Length2D()
				local myDisToNPC = (Entity.GetAbsOrigin(myHero) - Entity.GetAbsOrigin(targetNPC)):Length2D()
				local enemyDisToNPC = (enemyPos1 - Entity.GetAbsOrigin(targetNPC)):Length2D()
				if myDisToEnemy < myDisToNPC then
					if myDisToEnemy < shackleCastRange then
						local vectorEnemyToNPC = Entity.GetAbsOrigin(targetNPC) - enemyPos1
						local vectormyHerotoEnemy = enemyPos1 - Entity.GetAbsOrigin(myHero)
						local tempProcessing = vectormyHerotoEnemy:Dot2D(vectorEnemyToNPC) / (vectormyHerotoEnemy:Length2D() * vectorEnemyToNPC:Length2D())
							if tempProcessing > 1 then
								tempProcessing = 1
							end	
						local searchAngleRad = math.acos(tempProcessing)
						local searchAngle = (180 / math.pi) * searchAngleRad
						if searchAngle < minAngle then
							shackleNPC = npc
							minAngle = searchAngle
						end
					end
				else
					if myDisToNPC < shackleCastRange then
						local vectorNPCToEnemy = enemyPos1 - Entity.GetAbsOrigin(targetNPC)
						local vectormyHerotoNPC = Entity.GetAbsOrigin(targetNPC) - Entity.GetAbsOrigin(myHero)
						local tempProcessing = vectormyHerotoNPC:Dot2D(vectorNPCToEnemy) / (vectormyHerotoNPC:Length2D() * vectorNPCToEnemy:Length2D())
							if tempProcessing > 1 then
								tempProcessing = 1
							end	
						local searchAngleRad = math.acos(tempProcessing)
						local searchAngle = (180 / math.pi) * searchAngleRad
						if searchAngle < minAngle and vectorNPCToEnemy:Length2D() < minRange then
							shackleNPC = targetNPC
							minAngle = searchAngle
							minRange = vectorNPCToEnemy:Length2D()
						end
					end
				end
			end
		end
		if shackleNPC and minAngle < 23 then
			return shackleNPC
		end
	end	
	return false
end


function RastaWR.canEnemyBeShackledWithTree(npc)
	local shackleSearchRange = 575
	local shackleCastRange = 785
	local enemyPos1 = RastaWR.castPrediction(npc, 0.15 + (NetChannel.GetAvgLatency(Enum.Flow.FLOW_OUTGOING) * 2))
	local directLineVector = enemyPos1 + (enemyPos1 - Entity.GetAbsOrigin(myHero)):Normalized():Scaled(shackleSearchRange)
	local trees = Trees.InRadius(directLineVector, shackleSearchRange, true)
	local shackleTree
	local minAngle = 180
	if trees then
		for _, targetTree in ipairs(trees) do		
			if targetTree then
				local myDisToEnemy = (myPos - enemyPos1):Length2D()
				local enemyDisToTree = (enemyPos1 - Entity.GetAbsOrigin(targetTree)):Length2D()
				if myDisToEnemy < shackleCastRange then
					if enemyDisToTree < shackleSearchRange then
						if targetTree ~= nil then
							local vectorEnemyToTree = Entity.GetAbsOrigin(targetTree) - enemyPos1
							local vectormyHerotoEnemy = enemyPos1 - myPos
							local tempProcessing = vectormyHerotoEnemy:Dot2D(vectorEnemyToTree) / (vectormyHerotoEnemy:Length2D() * vectorEnemyToTree:Length2D())
							if tempProcessing > 1 then
								tempProcessing = 1
							end
							local searchAngleRad = math.acos(tempProcessing)
							local searchAngle = (180 / math.pi) * searchAngleRad
							if searchAngle < minAngle then
								shackleTree = targetTree
								minAngle = searchAngle
							end
						end
					end
				end
			end
		end
		if shackleTree and minAngle < 23 then
			return true
		end
	end
	return false
end


function RastaWR.IsLinkensProtected(npc)
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


function RastaWR.PoopLinken(exception)
	if abyssal and Menu.IsEnabled(RastaWR.optionEnablePoopAbyssal) and Ability.IsCastable(abyssal, myMana) then
		Ability.CastTarget(abyssal, enemy)
		return
	end
	if bloodthorn and Menu.IsEnabled(RastaWR.optionEnablePoopBlood) and Ability.IsCastable(bloodthorn, myMana) then
		Ability.CastTarget(bloodthorn, enemy)
		return
	end
	if dagon and Menu.IsEnabled(RastaWR.optionEnablePoopDagon) and Ability.IsCastable(dagon, myMana) then
		Ability.CastTarget(dagon, enemy)
		return
	end
	if diffusal and Menu.IsEnabled(RastaWR.optionEnablePoopDiffusal) and Ability.IsCastable(diffusal, 0) then
		Ability.CastTarget(diffusal, enemy)
		return
	end
	if eul and Menu.IsEnabled(RastaWR.optionEnablePoopEul) and Ability.IsCastable(eul, myMana) and eul ~= exception then
		Ability.CastTarget(eul, enemy)
		return
	end
	if force and Menu.IsEnabled(RastaWR.optionEnablePoopForce) and Ability.IsCastable(force, myMana) then
		Ability.CastTarget(force, enemy)
		return
	end
	if halberd and Menu.IsEnabled(RastaWR.optionEnablePoopHalberd) and Ability.IsCastable(halberd, myMana) then
		Ability.CastTarget(halberd, enemy)
		return
	end
	if hex and Menu.IsEnabled(RastaWR.optionEnablePoopHex) and Ability.IsCastable(hex, myMana) then
		Ability.CastTarget(hex, enemy)
		return
	end
	if pike and Menu.IsEnabled(RastaWR.optionEnablePoopPike) and Ability.IsCastable(pike, myMana) then
		Ability.CastTarget(pike, enemy)
		return
	end
	if orchid and Menu.IsEnabled(RastaWR.optionEnablePoopOrchid) and Ability.IsCastable(orchid, myMana) then
		Ability.CastTarget(orchid, enemy)
		return
	end
end



function RastaWR.AbilityIsCastable(ability, myMana)
	if not Entity.IsAlive(myHero) then return false end
	if myMana >= Ability.GetManaCost(ability) and Ability.IsReady(ability) then
		if not NPC.IsSilenced(myHero) and not NPC.IsStunned(myHero) and not NPC.HasState(myHero, Enum.ModifierState.MODIFIER_STATE_HEXED) and not NPC.HasState(myHero, Enum.ModifierState.MODIFIER_STATE_INVULNERABLE) then
			return true
		end
	end
	return false
end


function RastaWR.ItemIsCastable(ability, myMana)
	if not Entity.IsAlive(myHero) then return false end
	if myMana >= Ability.GetManaCost(ability) and Ability.IsReady(ability) then
		if not NPC.IsStunned(myHero) and not NPC.HasState(myHero, Enum.ModifierState.MODIFIER_STATE_HEXED) and not NPC.HasState(myHero, Enum.ModifierState.MODIFIER_STATE_INVULNERABLE) and not NPC.HasModifier(myHero, "modifier_doom_bringer_doom") and not NPC.HasModifier(myHero, "modifier_item_nullifier_mute") then
			return true
		end
	end
	return false
end


RastaWR.Init()


return RastaWR