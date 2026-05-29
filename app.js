const TRACKED_BUFFS = new Set([
  "Death Wish",
  "Power Infusion",
  "Combustion",
  "Recklessness",
  "Adrenaline Rush",
  "Rapid Fire",
  "Blade Flurry"
]);

const BUFF_DISPLAY_ORDER = new Map([
  ["Power Infusion", 0],
  ["Combustion", 1],
  ["Death Wish", 2],
  ["Recklessness", 3],
  ["Rapid Fire", 4],
  ["Adrenaline Rush", 5],
  ["Blade Flurry", 6]
]);

const DEBUFF_DISPLAY_ORDER = new Map([
  ["Sunder Armor", 0],
  ["Expose Armor", 1],
  ["Curse of Elements", 2],
  ["Curse of Shadow", 3],
  ["Curse of Recklessness", 4],
  ["Faerie Fire", 5],
  ["Winter's Chill", 6],
  ["Shadow Weaving", 7],
  ["Improved Scorch", 8],
  ["Demoralizing Shout", 9],
  ["Thunder Clap", 10]
]);

const SPELL_NAME_ALIASES = new Map([
  ["Curse of the Elements", "Curse of Elements"],
  ["Curse of Shadows", "Curse of Shadow"],
  ["Mighty Rage", "Mighty Rage Potion"],
  ["Unstable Power", "Zandalarian Hero Charm"]
]);

const MAX_AURA_DURATIONS = new Map([
  ["Power Infusion", 15],
  ["Death Wish", 30],
  ["Recklessness", 15],
  ["Rapid Fire", 15],
  ["Adrenaline Rush", 15],
  ["Blade Flurry", 15],
  ["Badge of the Swarmguard", 30],
  ["Diamond Flask", 60],
  ["Earthstrike", 20],
  ["Jom Gabbar", 20],
  ["Kiss of the Spider", 15],
  ["Mark of the Champion", 30],
  ["Mind Quickening", 20],
  ["Mind Quickening Gem", 20],
  ["Restrained Essence of Sapphiron", 20],
  ["Seal of the Dawn", 30],
  ["Slayer's Crest", 20],
  ["Talisman of Ascendance", 20],
  ["Talisman of Ephemeral Power", 15],
  ["Zandalarian Hero Charm", 20],
  ["Zandalarian Hero Medallion", 20],
  ["Zandalarian Hero Badge", 20],
  ["Greater Stoneshield", 120],
  ["Mighty Rage Potion", 20]
]);

const TRACKED_TRINKETS = new Set([
  "Badge of the Swarmguard",
  "Diamond Flask",
  "Earthstrike",
  "Jom Gabbar",
  "Kiss of the Spider",
  "Mark of the Champion",
  "Mind Quickening",
  "Mind Quickening Gem",
  "Restrained Essence of Sapphiron",
  "Seal of the Dawn",
  "Slayer's Crest",
  "Talisman of Ascendance",
  "Talisman of Ephemeral Power",
  "Zandalarian Hero Charm",
  "Zandalarian Hero Medallion",
  "Zandalarian Hero Badge"
]);

const TRACKED_CONSUMABLES = new Set([
  "Greater Stoneshield",
  "Mighty Rage Potion"
]);

const TRACKED_USE_CONSUMABLES = new Set([
  "Dark Rune",
  "Demon Rune",
  "Demonic Rune",
  "Major Mana Potion"
]);

const TANK_PHYSICAL_BOSS_ABILITIES = new Set([
  "Hateful Strike"
]);

const UNDEAD_ONLY_TRINKETS = new Set([
  "Mark of the Champion",
  "Seal of the Dawn"
]);

const UNDEAD_BOSSES = new Set([
  "Baron Rivendare",
  "Gluth",
  "Gothik the Harvester",
  "Heigan the Unclean",
  "Kel'Thuzad",
  "Loatheb",
  "Noth the Plaguebringer",
  "Patchwerk",
  "Razuvious",
  "Sapphiron",
  "Thaddius"
]);

const TRACKED_DEBUFFS = new Set([
  "Sunder Armor",
  "Expose Armor",
  "Faerie Fire",
  "Curse of Recklessness",
  "Curse of Elements",
  "Curse of the Elements",
  "Curse of Shadow",
  "Curse of Shadows",
  "Winter's Chill",
  "Shadow Weaving",
  "Judgement of Wisdom",
  "Judgement of Light",
  "Demoralizing Shout",
  "Thunder Clap",
  "Improved Scorch",
  "Ignite"
]);

const WARRIOR_IDENTIFYING_CASTS = new Set([
  "Sunder Armor",
  "Battle Shout",
  "Bloodthirst",
  "Shield Slam",
  "Mortal Strike",
  "Heroic Strike",
  "Cleave",
  "Revenge",
  "Shield Block",
  "Death Wish",
  "Recklessness"
]);

const ROGUE_IDENTIFYING_CASTS = new Set([
  "Adrenaline Rush",
  "Backstab",
  "Blade Flurry",
  "Eviscerate",
  "Feint",
  "Kick",
  "Sinister Strike",
  "Slice and Dice"
]);

const HUNTER_IDENTIFYING_CASTS = new Set([
  "Aimed Shot",
  "Call Pet",
  "Multi-Shot",
  "Rapid Fire",
  "Trueshot Aura"
]);

const MAGE_IDENTIFYING_CASTS = new Set([
  "Arcane Missiles",
  "Combustion",
  "Fire Blast",
  "Fireball",
  "Frostbolt",
  "Pyroblast",
  "Scorch"
]);

const PRIEST_IDENTIFYING_CASTS = new Set([
  "Flash Heal",
  "Greater Heal",
  "Heal",
  "Mind Blast",
  "Power Infusion",
  "Prayer of Healing",
  "Renew",
  "Shadow Word: Pain"
]);

const WARLOCK_IDENTIFYING_CASTS = new Set([
  "Corruption",
  "Curse of Agony",
  "Curse of Doom",
  "Curse of Elements",
  "Curse of Recklessness",
  "Curse of Shadow",
  "Drain Life",
  "Life Tap",
  "Shadow Bolt"
]);

const DRUID_IDENTIFYING_CASTS = new Set([
  "Healing Touch",
  "Innervate",
  "Moonfire",
  "Rejuvenation",
  "Regrowth",
  "Starfire",
  "Wrath"
]);

const PALADIN_IDENTIFYING_CASTS = new Set([
  "Blessing of Kings",
  "Blessing of Might",
  "Blessing of Salvation",
  "Blessing of Wisdom",
  "Flash of Light",
  "Holy Light",
  "Judgement"
]);

const SHAMAN_IDENTIFYING_CASTS = new Set([
  "Chain Heal",
  "Earth Shock",
  "Healing Wave",
  "Lesser Healing Wave",
  "Lightning Bolt",
  "Windfury Totem"
]);

const EXPECTED_CLASS_BUFFS = {
  warrior: ["Death Wish"],
  rogue: ["Adrenaline Rush", "Blade Flurry"],
  hunter: ["Rapid Fire"],
  mage: ["Combustion"],
  priest: ["Power Infusion"]
};

const MANA_USER_CLASSES = ["mage", "priest", "warlock", "druid", "paladin", "shaman"];

const DAMAGE_EVENTS = new Set(["SWING_DAMAGE", "RANGE_DAMAGE", "SPELL_DAMAGE", "SPELL_PERIODIC_DAMAGE", "DAMAGE_SHIELD"]);
const HEAL_EVENTS = new Set(["SPELL_HEAL", "SPELL_PERIODIC_HEAL"]);
const AURA_APPLY_EVENTS = new Set(["SPELL_AURA_APPLIED", "SPELL_AURA_APPLIED_DOSE"]);
const AURA_REFRESH_EVENTS = new Set(["SPELL_AURA_REFRESH", "SPELL_AURA_REMOVED_DOSE"]);
const AURA_REMOVE_EVENTS = new Set(["SPELL_AURA_REMOVED", "SPELL_AURA_BROKEN", "SPELL_AURA_BROKEN_SPELL"]);
const COMBAT_EVENTS = new Set([...DAMAGE_EVENTS, ...HEAL_EVENTS, ...AURA_APPLY_EVENTS, ...AURA_REFRESH_EVENTS, ...AURA_REMOVE_EVENTS, "SPELL_CAST_START", "SPELL_CAST_SUCCESS", "UNIT_DIED"]);
const WOW_EVENT_NAME = /^(?:[A-Z]+_)+[A-Z0-9]+$/;
const TRASH_SEGMENT_GAP_SECONDS = 90;
const BOSS_AURA_LOOKBACK_SECONDS = 30;
const BOSS_CONSUMABLE_LOOKBACK_SECONDS = 120;
const WINDFURY_TOTEM_DURATION = 120;
const WINDFURY_TOTEM_PREPULL_SECONDS = 30;
const DEBUFF_CAP_WITH_IGNITE = 16;
const IGNITE_END_GRACE_SECONDS = 5;
const LOW_ACTIVITY_CAST_RATIO = 0.4;
const LOW_ACTIVITY_GCD_SECONDS = 1.5;
const MAX_CAST_TIME_SECONDS = 10;
const RAID_ROSTER_CAST_FLOOR = 10;
const TANK_BOSS_DAMAGE_THRESHOLD = 15000;

const state = {
  report: null,
  selectedFight: 0
};

const els = {
  file: document.querySelector("#logFile"),
  sampleBtn: document.querySelector("#sampleBtn"),
  fightSelect: document.querySelector("#fightSelect"),
  reportTitle: document.querySelector("#reportTitle"),
  empty: document.querySelector("#emptyState"),
  status: document.querySelector("#statusPanel"),
  statusTitle: document.querySelector("#statusTitle"),
  statusText: document.querySelector("#statusText"),
  dashboard: document.querySelector("#dashboard"),
  summary: document.querySelector("#summaryGrid"),
  sunderRows: document.querySelector("#sunderRows"),
  armorTitle: document.querySelector("#armorTitle"),
  sunderHealth: document.querySelector("#sunderHealth"),
  dpsRows: document.querySelector("#dpsRows"),
  healerRows: document.querySelector("#healerRows"),
  castRows: document.querySelector("#castRows"),
  buffRows: document.querySelector("#buffRows"),
  debuffRows: document.querySelector("#debuffRows"),
  trinketRows: document.querySelector("#trinketRows"),
  consumableRows: document.querySelector("#consumableRows"),
  windfuryPanel: document.querySelector("#windfuryPanel"),
  windfuryRows: document.querySelector("#windfuryRows"),
  igniteRows: document.querySelector("#igniteRows"),
  igniteHealth: document.querySelector("#igniteHealth"),
  deathRows: document.querySelector("#deathRows"),
  activityRows: document.querySelector("#activityRows")
};

els.file.addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;
  await loadUploadedFile(file);
});

els.sampleBtn.addEventListener("click", () => {
  loadReport(buildSampleLog(), "sample-molten-core.log");
});

els.fightSelect.addEventListener("change", () => {
  state.selectedFight = Number(els.fightSelect.value);
  render();
});

async function loadUploadedFile(file) {
  try {
    showStatus("Reading log", `${file.name} (${formatBytes(file.size)})`);
    await nextFrame();
    const text = await file.text();

    showStatus("Parsing combat events", "This can take a few seconds for a full raid night.");
    await nextFrame();
    loadReport(text, file.name);
  } catch (error) {
    showError("Could not read that log", error.message || String(error));
  } finally {
    els.file.value = "";
  }
}

function loadReport(text, name) {
  try {
    state.report = analyzeLog(text, name);
    state.selectedFight = 0;
    renderFightOptions();
    render();
  } catch (error) {
    showError("Could not parse that log", error.message || String(error));
  }
}

function analyzeLog(text, name) {
  const lines = text.split(/\r\n|\n|\r/);
  const events = [];
  let timestampedLines = 0;
  let csvLikeTimestampedLines = 0;
  const examples = [];

  for (const line of lines) {
    const cleanLine = stripBom(line).trim();
    if (examples.length < 3 && cleanLine) examples.push(cleanLine.slice(0, 180));
    const timestamped = parseTimestampedLine(cleanLine);
    if (timestamped) {
      timestampedLines += 1;
      if (timestamped.payload.includes(",")) csvLikeTimestampedLines += 1;
    }
    const event = parseLine(line);
    if (event) events.push(event);
  }

  events.sort((a, b) => a.time - b.time);

  if (!events.length) {
    const detail = examples.length ? ` First lines seen: ${examples.join(" | ")}` : "";
    throw new Error(timestampedLines
      ? `The file has ${timestampedLines.toLocaleString()} timestamped line${timestampedLines === 1 ? "" : "s"}, but ${csvLikeTimestampedLines.toLocaleString()} look like WoW CSV combat-event rows. Upload the raw WoWCombatLog.txt file, not the in-game chat/combat text export.${detail}`
      : `No WoW combat-log timestamp lines were found. Upload the raw WoWCombatLog.txt file from your Logs folder.${detail}`);
  }

  const fights = splitFights(events);
  const warriors = detectWarriors(events);
  const classPlayers = detectClassPlayers(events, warriors);
  const raidPlayers = detectRaidPlayers(fights);
  return {
    name,
    lineCount: lines.length,
    events,
    raidPlayers,
    warriors,
    classPlayers,
    fights: fights.map((fight, index) => analyzeFight(fight, index, warriors, raidPlayers, classPlayers))
  };
}

function parseLine(line) {
  const trimmed = stripBom(line).trim();
  const timestamped = parseTimestampedLine(trimmed);
  if (!timestamped) return null;

  const { month, day, hour, minute, second, ms, payload } = timestamped;
  const fields = parseCsv(payload);
  const event = cleanEventName(fields[0]);
  if (!event || !isWowCsvEvent(event, fields)) return null;

  const time = Number(month) * 31 * 86400 + Number(day) * 86400 + Number(hour) * 3600 + Number(minute) * 60 + Number(second) + Number(ms.padEnd(3, "0")) / 1000;
  const base = {
    raw: trimmed,
    time,
    clock: `${month}/${day} ${hour}:${minute}:${second}`,
    event,
    sourceGuid: fields[1],
    sourceName: cleanName(fields[2]),
    sourceFlags: fields[3],
    destGuid: fields[5],
    destName: cleanName(fields[6]),
    destFlags: fields[7],
    spellId: null,
    spellName: "",
    auraType: "",
    amount: null,
    overkill: null,
    overheal: null,
    deathType: null
  };

  if (event === "ENCOUNTER_START" || event === "ENCOUNTER_END") {
    base.encounterId = fields[1];
    base.encounterName = cleanName(fields[2]);
    return base;
  }

  if (event.startsWith("SWING")) {
    base.amount = numberOrNull(fields[27]) ?? numberOrNull(fields[9]);
    base.overkill = numberOrNull(fields[29]) ?? numberOrNull(fields[10]);
  } else if (event === "UNIT_DIED" || event === "PARTY_KILL") {
    base.spellName = "";
    base.deathType = numberOrNull(fields[9]);
  } else {
    base.spellId = fields[9];
    base.spellName = normalizeSpellName(cleanName(fields[10]));
    base.auraType = cleanEventName(fields[12]);
    base.amount = numberOrNull(fields[30]) ?? numberOrNull(fields[12]);
    base.overkill = numberOrNull(fields[32]) ?? numberOrNull(fields[13]);
    if (HEAL_EVENTS.has(event)) base.overheal = numberOrNull(fields[32]) ?? 0;
  }

  return base;
}

function parseTimestampedLine(line) {
  if (!line) return null;
  const match = line.match(/^\[?(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?\s+(\d{1,2}):(\d{2}):(\d{2})(?:[.:](\d{1,3})(?:[+-]\d{1,2})?)?\]?\s+(.+)$/);
  if (!match) return null;
  const [, month, day, , hour, minute, second, ms = "0", payload] = match;
  return { month, day, hour, minute, second, ms, payload };
}

function isWowCsvEvent(event, fields) {
  if (event === "COMBAT_LOG_VERSION" || event === "COMBATANT_INFO" || event === "ENCOUNTER_START" || event === "ENCOUNTER_END") return true;
  if (WOW_EVENT_NAME.test(event) && fields.length >= 8) return true;
  return false;
}

function cleanEventName(value = "") {
  return stripBom(value).replace(/^"|"$/g, "").trim();
}

function parseCsv(input) {
  const fields = [];
  let field = "";
  let quoted = false;

  for (let i = 0; i < input.length; i += 1) {
    const char = input[i];
    const next = input[i + 1];
    if (char === '"' && next === '"') {
      field += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      fields.push(field);
      field = "";
    } else {
      field += char;
    }
  }

  fields.push(field);
  return fields.map((value) => value.trim());
}

function splitFights(events) {
  const bossFights = [];
  const trashEvents = [];
  let activeBoss = null;
  let hasEncounterMarkers = false;
  let recentBossLookbackEvents = [];

  for (const event of events) {
    if (event.event === "ENCOUNTER_START") {
      hasEncounterMarkers = true;
      if (activeBoss?.events.length) bossFights.push(activeBoss);
      recentBossLookbackEvents = recentBossLookbackEvents.filter((lookbackEvent) => isBossLookbackEventRelevant(lookbackEvent, event.time));
      activeBoss = {
        type: "boss",
        name: event.encounterName || event.sourceName || "Boss",
        startTime: event.time,
        events: [...recentBossLookbackEvents, event]
      };
      continue;
    }

    if (activeBoss) {
      activeBoss.events.push(event);
      if (event.event === "ENCOUNTER_END") {
        activeBoss.endTime = event.time;
        bossFights.push(activeBoss);
        activeBoss = null;
      }
      continue;
    }

    if (event.event === "ENCOUNTER_END") continue;
    if (COMBAT_EVENTS.has(event.event)) trashEvents.push(event);
    if (isBossLookbackEvent(event)) {
      recentBossLookbackEvents.push(event);
      while (
        recentBossLookbackEvents.length
        && event.time - recentBossLookbackEvents[0].time > BOSS_CONSUMABLE_LOOKBACK_SECONDS
      ) {
        recentBossLookbackEvents.shift();
      }
    }
  }

  if (activeBoss?.events.length) bossFights.push(activeBoss);
  if (hasEncounterMarkers) {
    return [
      ...bossFights,
      ...(trashEvents.length ? [{ type: "trash", name: "Trash", events: trashEvents, activeWindows: buildActiveWindows(trashEvents, TRASH_SEGMENT_GAP_SECONDS, bossFights) }] : [])
    ];
  }

  const fights = [];
  let current = [];
  let lastCombat = null;

  for (const event of events) {
    if (event.event === "ENCOUNTER_START") {
      if (current.length) fights.push({ type: "fight", name: `Fight ${fights.length + 1}`, events: current });
      current = [event];
      lastCombat = event.time;
      continue;
    }

    if (event.event === "ENCOUNTER_END") {
      current.push(event);
      fights.push({ type: "fight", name: event.encounterName || `Fight ${fights.length + 1}`, events: current });
      current = [];
      lastCombat = null;
      continue;
    }

    if (!COMBAT_EVENTS.has(event.event)) continue;
    if (lastCombat !== null && event.time - lastCombat > 120 && current.length) {
      fights.push({ type: "fight", name: `Fight ${fights.length + 1}`, events: current });
      current = [];
    }
    current.push(event);
    lastCombat = event.time;
  }

  if (current.length) fights.push({ type: "fight", name: `Fight ${fights.length + 1}`, events: current });
  return fights.length ? fights : [{ type: "fight", name: "Fight 1", events }];
}

function buildActiveWindows(events, maxGap, excludedWindows = []) {
  if (!events.length) return [];
  const windows = [];
  let start = events[0].time;
  let last = events[0].time;
  for (const event of events.slice(1)) {
    if (event.time - last > maxGap || crossesExcludedWindow(last, event.time, excludedWindows)) {
      windows.push({ start, end: last });
      start = event.time;
    }
    last = event.time;
  }
  windows.push({ start, end: last });
  return windows.filter((window) => window.end > window.start);
}

function crossesExcludedWindow(start, end, excludedWindows) {
  return excludedWindows.some((window) => window.startTime < end && window.endTime > start);
}

function isRealPlayerDeath(event) {
  return event.event === "UNIT_DIED"
    && event.destName
    && isPlayerGuid(event.destGuid)
    && event.deathType !== 1;
}

function detectWarriors(events) {
  const warriors = new Set();
  for (const event of events) {
    if (event.event === "SPELL_CAST_SUCCESS" && isPlayerGuid(event.sourceGuid) && WARRIOR_IDENTIFYING_CASTS.has(event.spellName)) {
      warriors.add(event.sourceName);
    }
  }
  return [...warriors].sort();
}

function detectClassPlayers(events, warriors) {
  const classPlayers = {
    warrior: new Set(warriors),
    rogue: new Set(),
    hunter: new Set(),
    mage: new Set(),
    priest: new Set(),
    warlock: new Set(),
    druid: new Set(),
    paladin: new Set(),
    shaman: new Set()
  };

  for (const event of events) {
    if (event.event !== "SPELL_CAST_SUCCESS" || !isPlayerGuid(event.sourceGuid) || !isValidPlayerName(event.sourceName)) continue;
    if (ROGUE_IDENTIFYING_CASTS.has(event.spellName)) classPlayers.rogue.add(event.sourceName);
    if (HUNTER_IDENTIFYING_CASTS.has(event.spellName)) classPlayers.hunter.add(event.sourceName);
    if (MAGE_IDENTIFYING_CASTS.has(event.spellName)) classPlayers.mage.add(event.sourceName);
    if (PRIEST_IDENTIFYING_CASTS.has(event.spellName)) classPlayers.priest.add(event.sourceName);
    if (WARLOCK_IDENTIFYING_CASTS.has(event.spellName)) classPlayers.warlock.add(event.sourceName);
    if (DRUID_IDENTIFYING_CASTS.has(event.spellName)) classPlayers.druid.add(event.sourceName);
    if (PALADIN_IDENTIFYING_CASTS.has(event.spellName)) classPlayers.paladin.add(event.sourceName);
    if (SHAMAN_IDENTIFYING_CASTS.has(event.spellName)) classPlayers.shaman.add(event.sourceName);
  }

  return Object.fromEntries(Object.entries(classPlayers).map(([klass, players]) => [klass, [...players].sort()]));
}

function detectRaidPlayers(fights) {
  const players = new Set();
  const castCounts = new Map();

  for (const fight of fights) {
    const start = fight.startTime ?? fight.events[0]?.time ?? -Infinity;
    const end = fight.endTime ?? fight.events.at(-1)?.time ?? Infinity;

    for (const event of fight.events) {
      if (event.time < start || event.time > end) continue;

      if (DAMAGE_EVENTS.has(event.event) && isPlayerGuid(event.sourceGuid) && isValidPlayerName(event.sourceName) && !isPlayerGuid(event.destGuid)) {
        players.add(event.sourceName);
      }

      if (HEAL_EVENTS.has(event.event) && isPlayerGuid(event.sourceGuid) && isValidPlayerName(event.sourceName) && isPlayerGuid(event.destGuid)) {
        players.add(event.sourceName);
      }

      if (event.event === "SPELL_CAST_SUCCESS" && isPlayerGuid(event.sourceGuid) && isValidPlayerName(event.sourceName)) {
        addAmount(castCounts, event.sourceName, 1);
      }
    }
  }

  for (const [name, total] of castCounts.entries()) {
    if (total >= RAID_ROSTER_CAST_FLOOR) players.add(name);
  }

  return [...players].sort();
}

function isValidPlayerName(name) {
  return Boolean(name && name !== "0" && /[A-Za-z]/.test(name));
}

function isAuraContextEvent(event) {
  return (AURA_APPLY_EVENTS.has(event.event) || AURA_REFRESH_EVENTS.has(event.event))
    && (TRACKED_BUFFS.has(event.spellName) || TRACKED_TRINKETS.has(event.spellName) || TRACKED_CONSUMABLES.has(event.spellName) || TRACKED_DEBUFFS.has(event.spellName));
}

function isBossLookbackEvent(event) {
  if (isAuraContextEvent(event)) return true;
  if (event.event === "SPELL_CAST_SUCCESS" && TRACKED_USE_CONSUMABLES.has(event.spellName) && isPlayerGuid(event.sourceGuid)) return true;
  return event.event === "SPELL_CAST_SUCCESS" && event.spellName === "Windfury Totem" && isPlayerGuid(event.sourceGuid);
}

function isBossLookbackEventRelevant(event, bossStart) {
  const lookback = event.spellName === "Windfury Totem"
    ? WINDFURY_TOTEM_PREPULL_SECONDS
    : TRACKED_CONSUMABLES.has(event.spellName) || TRACKED_USE_CONSUMABLES.has(event.spellName) ? BOSS_CONSUMABLE_LOOKBACK_SECONDS : BOSS_AURA_LOOKBACK_SECONDS;
  return bossStart - event.time <= lookback;
}

function analyzeFight(segment, index, warriors, allPlayers = [], classPlayers = {}) {
  const events = segment.events;
  const start = segment.startTime ?? events[0]?.time ?? 0;
  const end = segment.endTime ?? events.at(-1)?.time ?? start;
  const duration = Math.max(1, end - start);
  const activeWindows = segment.activeWindows?.length ? segment.activeWindows : [{ start, end }];
  const activeDuration = Math.max(1, activeWindows.reduce((sum, window) => sum + Math.max(0, window.end - window.start), 0));
  const players = new Set();
  const damageTakenByTarget = new Map();
  const sunder = new Map();
  const expose = new Map();
  const deaths = [];
  const recentEventsByDest = new Map();
  const buffIntervals = new Map();
  const debuffIntervals = new Map();
  const trinketIntervals = new Map();
  const consumableIntervals = new Map();
  const consumableUses = new Map();
  const activeAuras = new Map();
  const igniteWarnings = [];
  const activeIgnites = new Map();
  const activeDebuffs = new Map();
  const damageDone = new Map();
  const bossDamageTakenByPlayer = new Map();
  const healingDone = new Map();
  const casts = new Map();
  const activeCastTime = new Map();
  const activeCastStarts = new Map();
  const windfuryCasts = new Map();
  let previousEvent = null;

  for (const event of events) {
    if (segment.type === "trash" && previousEvent && event.time - previousEvent.time > TRASH_SEGMENT_GAP_SECONDS) {
      closeActiveAuras(activeAuras, previousEvent.time, start);
    }
    previousEvent = event;

    if (isPlayerGuid(event.sourceGuid) && isValidPlayerName(event.sourceName)) players.add(event.sourceName);
    if (isPlayerGuid(event.destGuid) && isValidPlayerName(event.destName)) players.add(event.destName);
    if (DAMAGE_EVENTS.has(event.event) && event.destName && !isPlayerGuid(event.destGuid)) {
      damageTakenByTarget.set(event.destName, (damageTakenByTarget.get(event.destName) ?? 0) + (event.amount ?? 0));
    }

    if (DAMAGE_EVENTS.has(event.event) && isPlayerGuid(event.sourceGuid) && event.sourceName && !isPlayerGuid(event.destGuid)) {
      addAmount(damageDone, event.sourceName, Math.max(0, event.amount ?? 0));
    }

    if (
      segment.type === "boss"
      && DAMAGE_EVENTS.has(event.event)
      && event.sourceName === segment.name
      && isTankRelevantBossHit(event)
      && isPlayerGuid(event.destGuid)
      && event.destName
    ) {
      addAmount(bossDamageTakenByPlayer, event.destName, Math.max(0, event.amount ?? 0));
    }

    if (HEAL_EVENTS.has(event.event) && isPlayerGuid(event.sourceGuid) && event.sourceName && isPlayerGuid(event.destGuid)) {
      const amount = Math.max(0, event.amount ?? 0);
      const overheal = Math.max(0, event.overheal ?? 0);
      const record = healingDone.get(event.sourceName) ?? { name: event.sourceName, total: 0, overheal: 0 };
      record.total += amount;
      record.overheal += overheal;
      healingDone.set(event.sourceName, record);
    }

    if (event.event === "SPELL_CAST_START" && isPlayerGuid(event.sourceGuid) && isValidPlayerName(event.sourceName)) {
      activeCastStarts.set(castStartKey(event), event);
    }

    if (event.event === "SPELL_CAST_SUCCESS" && isPlayerGuid(event.sourceGuid) && event.sourceName) {
      if (event.time >= start) addAmount(casts, event.sourceName, 1);
      addCastActivity(activeCastTime, activeCastStarts, event);
      if (event.spellName === "Windfury Totem") addWindfuryCast(windfuryCasts, event);
      if (event.time >= start && TRACKED_USE_CONSUMABLES.has(event.spellName)) addConsumableUse(consumableUses, event);
    }

    if (event.destName) {
      const recent = recentEventsByDest.get(event.destName) ?? [];
      if (DAMAGE_EVENTS.has(event.event) || HEAL_EVENTS.has(event.event) || event.event === "SPELL_AURA_APPLIED") {
        recent.push(event);
        while (recent.length > 8) recent.shift();
        recentEventsByDest.set(event.destName, recent);
      }
    }

    if ((AURA_APPLY_EVENTS.has(event.event) || AURA_REFRESH_EVENTS.has(event.event) || AURA_REMOVE_EVENTS.has(event.event)) && event.spellName) {
      const targetKey = `${event.destGuid || event.destName}|${event.spellName}`;
      updateActiveDebuffs(activeDebuffs, event);
      const group = TRACKED_CONSUMABLES.has(event.spellName)
        ? consumableIntervals
        : TRACKED_TRINKETS.has(event.spellName) ? trinketIntervals : TRACKED_BUFFS.has(event.spellName) ? buffIntervals : debuffIntervals;
      const trackedBuff = TRACKED_BUFFS.has(event.spellName) && isFriendlyPlayerTarget(event) && isFriendlySource(event);
      const trackedTrinket = TRACKED_TRINKETS.has(event.spellName) && isFriendlyPlayerTarget(event) && isFriendlySource(event);
      const trackedConsumable = TRACKED_CONSUMABLES.has(event.spellName) && isFriendlyPlayerTarget(event) && isFriendlySource(event);
      const trackedDebuff = TRACKED_DEBUFFS.has(event.spellName) && isEnemyGuid(event.destGuid);
      const tracked = trackedBuff || trackedTrinket || trackedConsumable || trackedDebuff;

      if (tracked && (AURA_APPLY_EVENTS.has(event.event) || AURA_REFRESH_EVENTS.has(event.event))) {
        const active = activeAuras.get(targetKey);
        if (active) {
          addInterval(active.group, active.spell, active.target, active.targetGuid, active.source, active.start, event.time, "refreshed", start);
        }
        activeAuras.set(targetKey, { start: event.time, spell: event.spellName, target: event.destName, targetGuid: event.destGuid, source: event.sourceName, group, clock: event.clock });
      }

      if (tracked && AURA_REMOVE_EVENTS.has(event.event)) {
        const active = activeAuras.get(targetKey);
        if (active) {
          addInterval(active.group, active.spell, active.target, active.targetGuid, active.source, active.start, event.time, "removed", start);
          activeAuras.delete(targetKey);
        }
      }
    }

    if (event.event === "SPELL_CAST_SUCCESS" && event.spellName === "Sunder Armor") {
      addArmorEvent(sunder, event, "cast");
    }

    if (event.event === "SPELL_CAST_SUCCESS" && event.spellName === "Expose Armor") {
      addArmorEvent(expose, event, "cast");
    }

    if (segment.type !== "trash" && (AURA_APPLY_EVENTS.has(event.event) || AURA_REFRESH_EVENTS.has(event.event)) && event.spellName === "Ignite") {
      const key = event.destGuid || event.destName;
      const active = activeIgnites.get(key);
      if (active) {
        active.refreshes += 1;
        active.lastRefresh = event.time;
        active.source = event.sourceName || active.source;
        active.sources.add(event.sourceName || "Unknown");
        continue;
      }
      activeIgnites.set(key, {
        target: event.destName,
        targetGuid: event.destGuid,
        source: event.sourceName,
        sources: new Set([event.sourceName || "Unknown"]),
        start: event.time,
        startClock: event.clock,
        lastRefresh: event.time,
        refreshes: 0,
        ticks: 0,
        lastTick: null
      });
    }

    if (segment.type !== "trash" && event.event === "SPELL_PERIODIC_DAMAGE" && event.spellName === "Ignite") {
      const active = activeIgnites.get(event.destGuid || event.destName);
      if (active) {
        active.ticks += 1;
        active.lastTick = event.time;
      }
    }

    if (segment.type !== "trash" && AURA_REMOVE_EVENTS.has(event.event) && event.spellName === "Ignite") {
      const key = event.destGuid || event.destName;
      const active = activeIgnites.get(key);
      if (active) {
        const warning = buildIgniteWindow(active, event.time, event.clock, "removed", activeDebuffs.get(key));
        if (end - event.time > IGNITE_END_GRACE_SECONDS) igniteWarnings.push(warning);
      }
      activeIgnites.delete(key);
    }

    if (isRealPlayerDeath(event)) {
      const lastEvents = [...(recentEventsByDest.get(event.destName) ?? [])].reverse();
      deaths.push({
        name: event.destName,
        clock: event.clock,
        killingBlow: lastEvents.find((recent) => DAMAGE_EVENTS.has(recent.event)) || null
      });
    }
  }

  for (const active of activeAuras.values()) {
    addInterval(active.group, active.spell, active.target, active.targetGuid, active.source, active.start, end, "fightEnd", start);
  }

  for (const active of activeIgnites.values()) {
    igniteWarnings.push(buildIgniteWindow(active, end, events.at(-1)?.clock || active.startClock, "active at end", activeDebuffs.get(active.targetGuid || active.target)));
  }

  const bossTargets = [...damageTakenByTarget.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([name]) => name);
  const tankCandidates = summarizeTankCandidates(bossDamageTakenByPlayer, segment.type, warriors);

  return {
    index,
    type: segment.type,
    name: segment.name,
    events,
    start,
    end,
    duration,
    players: [...players].sort(),
    warriors,
    classPlayers,
    bossTargets,
    sunder: [...sunder.values()].sort((a, b) => b.applications - a.applications),
    expose: [...expose.values()].sort((a, b) => b.applications - a.applications),
    buffs: summarizeIntervals(buffIntervals, duration, true, start),
    debuffs: summarizeIntervals(debuffIntervals, duration, false, start),
    trinkets: summarizeTrinkets(trinketIntervals, duration, segment.name, start),
    consumables: summarizeConsumables(consumableIntervals, consumableUses, duration, start, tankCandidates, warriors, classPlayers, players, segment.type),
    windfury: summarizeWindfury(windfuryCasts, segment.type === "trash" ? activeDuration : duration, start, end, activeWindows),
    dps: summarizeDamage(damageDone, duration),
    healers: summarizeHealing(healingDone),
    casts: summarizeCasts(casts),
    lowActivity: summarizeLowActivity(allPlayers, activeCastTime, duration),
    igniteWarnings,
    deaths
  };
}

function addArmorEvent(store, event, kind) {
  if (!isPlayerGuid(event.sourceGuid)) return;
  const source = event.sourceName || "Unknown";
  const record = store.get(source) ?? { player: source, applications: 0, refreshes: 0, targets: new Set(), auraApplications: 0 };
  if (kind === "cast") record.applications += 1;
  if (kind === "refresh") record.refreshes += 1;
  if (kind === "apply") record.auraApplications += 1;
  if (event.destName) record.targets.add(event.destName);
  store.set(source, record);
}

function addAmount(store, name, amount) {
  store.set(name, (store.get(name) ?? 0) + amount);
}

function castStartKey(event) {
  return `${event.sourceGuid || event.sourceName}|${event.spellId || event.spellName}`;
}

function addCastActivity(activeCastTime, activeCastStarts, event) {
  if (!isValidPlayerName(event.sourceName)) return;
  const key = castStartKey(event);
  const start = activeCastStarts.get(key);
  const castTime = start
    ? Math.max(LOW_ACTIVITY_GCD_SECONDS, Math.min(MAX_CAST_TIME_SECONDS, event.time - start.time))
    : LOW_ACTIVITY_GCD_SECONDS;
  addAmount(activeCastTime, event.sourceName, castTime);
  activeCastStarts.delete(key);
}

function isTankRelevantBossHit(event) {
  return event.event === "SWING_DAMAGE" || TANK_PHYSICAL_BOSS_ABILITIES.has(event.spellName);
}

function updateActiveDebuffs(activeDebuffs, event) {
  if (event.auraType !== "DEBUFF" || !isEnemyGuid(event.destGuid)) return;
  const targetKey = event.destGuid || event.destName;
  const spellKey = event.spellName;
  const targetDebuffs = activeDebuffs.get(targetKey) ?? new Map();
  if (AURA_REMOVE_EVENTS.has(event.event)) {
    targetDebuffs.delete(spellKey);
  } else if (AURA_APPLY_EVENTS.has(event.event) || AURA_REFRESH_EVENTS.has(event.event)) {
    targetDebuffs.set(spellKey, {
      spell: event.spellName,
      source: event.sourceName,
      time: event.time
    });
  }
  activeDebuffs.set(targetKey, targetDebuffs);
}

function addWindfuryCast(store, event) {
  const source = event.sourceName || "Unknown";
  const record = store.get(source) ?? { name: source, casts: 0, windows: [], firstDrop: event.time };
  const previous = record.windows.at(-1);
  if (previous && previous.end > event.time) previous.end = event.time;
  record.casts += 1;
  record.firstDrop = Math.min(record.firstDrop, event.time);
  record.windows.push({ start: event.time, end: event.time + WINDFURY_TOTEM_DURATION });
  store.set(source, record);
}

function addConsumableUse(store, event) {
  if (!isValidPlayerName(event.sourceName)) return;
  const key = `${event.spellName}|${event.sourceGuid || event.sourceName}`;
  const record = store.get(key) ?? { spell: event.spellName, target: event.sourceName, targetGuid: event.sourceGuid, uses: 0, times: [] };
  record.uses += 1;
  record.times.push(event.time);
  store.set(key, record);
}

function summarizeWindfury(store, fightDuration, fightStart, fightEnd, activeWindows = [{ start: fightStart, end: fightEnd }]) {
  return [...store.values()].map((record) => {
    const clipped = clipWindowsToActiveWindows(record.windows, activeWindows);
    const seconds = clipped.reduce((sum, window) => sum + window.end - window.start, 0);
    const firstDropDelay = Math.max(0, record.firstDrop - fightStart);
    const missed = Math.max(0, fightDuration - seconds);
    const warning = [
      firstDropDelay > 3 ? `First drop was ${formatDuration(firstDropDelay)} into the fight.` : "",
      missed > 5 ? `Coverage missed ${formatDuration(missed)} of the fight.` : ""
    ].filter(Boolean).join(" ");
    return {
      spell: "Windfury Totem",
      target: record.name,
      sources: [],
      seconds,
      uptime: Math.min(100, (seconds / fightDuration) * 100),
      windows: activeWindows.length > 1 ? normalizeWindowsAcrossActiveWindows(clipped, activeWindows, fightDuration) : normalizeWindows(clipped, fightStart, fightDuration),
      warning,
      note: `${record.casts} drop${record.casts === 1 ? "" : "s"}`
    };
  }).filter((row) => row.seconds > 0).sort((a, b) => b.uptime - a.uptime || a.target.localeCompare(b.target));
}

function clipWindowsToActiveWindows(windows, activeWindows) {
  const clipped = [];
  for (const window of windows) {
    for (const active of activeWindows) {
      const start = Math.max(window.start, active.start);
      const end = Math.min(window.end, active.end);
      if (end > start) clipped.push({ start, end });
    }
  }
  return clipped;
}

function normalizeWindowsAcrossActiveWindows(windows, activeWindows, totalDuration) {
  const offsets = [];
  let offset = 0;
  for (const active of activeWindows) {
    offsets.push({ ...active, offset });
    offset += Math.max(0, active.end - active.start);
  }

  return windows.flatMap((window) => offsets.map((active) => {
    const start = Math.max(window.start, active.start);
    const end = Math.min(window.end, active.end);
    if (end <= start) return null;
    const compressedStart = active.offset + (start - active.start);
    return {
      left: (compressedStart / totalDuration) * 100,
      width: ((end - start) / totalDuration) * 100
    };
  }).filter(Boolean)).filter((window) => window.width > 0);
}

function summarizeDamage(store, fightDuration) {
  return [...store.entries()]
    .map(([name, total]) => ({ name, total, dps: total / Math.max(1, fightDuration) }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 5);
}

function summarizeHealing(store) {
  return [...store.values()]
    .sort((a, b) => b.total - a.total)
    .slice(0, 5);
}

function summarizeCasts(store) {
  return [...store.entries()]
    .map(([name, total]) => ({ name, total }))
    .sort((a, b) => b.total - a.total || a.name.localeCompare(b.name))
    .slice(0, 5);
}

function summarizeTankCandidates(damageTakenByPlayer, fightType, warriors = []) {
  if (fightType === "trash") return [];
  const warriorSet = new Set(warriors);
  return [...damageTakenByPlayer.entries()]
    .filter(([name, total]) => warriorSet.has(name) && total >= TANK_BOSS_DAMAGE_THRESHOLD)
    .map(([name, total]) => ({ name, total }))
    .sort((a, b) => b.total - a.total || a.name.localeCompare(b.name))
    .slice(0, 5);
}

function summarizeLowActivity(allPlayers, activeCastTime, fightDuration) {
  const threshold = Math.max(1, fightDuration * LOW_ACTIVITY_CAST_RATIO);
  return allPlayers
    .map((name) => {
      const total = activeCastTime.get(name) ?? 0;
      return {
        name,
        total,
        percent: Math.round((total / fightDuration) * 100),
        threshold
      };
    })
    .filter((row) => row.total < threshold)
    .sort((a, b) => a.total - b.total || a.name.localeCompare(b.name))
    .slice(0, 12);
}

function buildIgniteWindow(active, end, endClock, reason, activeDebuffMap) {
  const duration = Math.max(0, end - active.start);
  const sinceRefresh = Math.max(0, end - active.lastRefresh);
  const short = sinceRefresh < 3.8;
  const activeDebuffs = [...(activeDebuffMap?.values() ?? [])].filter((debuff) => debuff.spell !== "Ignite");
  const possiblePushers = activeDebuffs
    .sort((a, b) => b.time - a.time)
    .slice(0, 3)
    .map((debuff) => debuff.spell);
  const highDebuffPressure = activeDebuffs.length >= DEBUFF_CAP_WITH_IGNITE - 1;
  const likelyPushedOff = short && (highDebuffPressure || possiblePushers.length > 0);
  return {
    target: active.target,
    source: [...active.sources].sort().join(", "),
    clock: active.startClock,
    endClock,
    age: duration,
    sinceRefresh,
    refreshes: active.refreshes,
    ticks: active.ticks,
    short,
    likelyPushedOff,
    possiblePushers,
    reason,
    note: likelyPushedOff
      ? `${highDebuffPressure ? `Likely debuff push-off at ${activeDebuffs.length + 1}+ debuffs.` : "Possible debuff push-off."} Recent debuffs: ${possiblePushers.join(", ") || "unknown"}.`
      : short
      ? `Removed ${sinceRefresh.toFixed(1)}s after the last application or refresh. Review for early drop or debuff pressure.`
      : `Ignite ${reason} after ${active.ticks} tick${active.ticks === 1 ? "" : "s"} and ${active.refreshes} refresh${active.refreshes === 1 ? "" : "es"}.`
  };
}

function closeActiveAuras(activeAuras, end, clipStart = -Infinity) {
  for (const active of activeAuras.values()) {
    addInterval(active.group, active.spell, active.target, active.targetGuid, active.source, active.start, end, "gap", clipStart);
  }
  activeAuras.clear();
}

function addInterval(store, spell, target, targetGuid, source, start, end, reason = "removed", clipStart = -Infinity) {
  const maxDuration = MAX_AURA_DURATIONS.get(spell);
  const cappedEnd = Math.min(end, start + (maxDuration ?? Infinity));
  const visibleStart = Math.max(start, clipStart);
  const duration = Math.max(0, cappedEnd - visibleStart);
  if (!spell || !target || duration <= 0) return;
  const key = `${spell}|${targetGuid || target}`;
  const record = store.get(key) ?? { spell, target, targetGuid, sources: new Set(), duration: 0, windows: [], lostSeconds: 0 };
  record.duration += duration;
  record.windows.push({ start: visibleStart, end: cappedEnd });
  if (reason === "fightEnd" && maxDuration && duration < maxDuration - 2) {
    record.lostSeconds += maxDuration - duration;
  }
  if (source) record.sources.add(source);
  store.set(key, record);
}

function summarizeIntervals(store, fightDuration, friendly, fightStart = 0) {
  return [...store.values()]
    .map((record) => ({
      spell: record.spell,
      target: record.target,
      targetGuid: record.targetGuid,
      sources: [...record.sources].sort(),
      uptime: Math.min(100, (record.duration / fightDuration) * 100),
      seconds: record.duration,
      windows: normalizeWindows(record.windows, fightStart, fightDuration),
      lostSeconds: record.lostSeconds ?? 0,
      friendly
    }))
    .sort((a, b) => b.uptime - a.uptime || a.spell.localeCompare(b.spell));
}

function normalizeWindows(windows = [], fightStart, fightDuration) {
  return windows
    .map((window) => {
      const start = Math.max(0, Math.min(fightDuration, window.start - fightStart));
      const end = Math.max(0, Math.min(fightDuration, window.end - fightStart));
      const width = Math.max(0, end - start);
      return {
        left: (start / fightDuration) * 100,
        width: (width / fightDuration) * 100
      };
    })
    .filter((window) => window.width > 0);
}

function summarizeTrinkets(store, fightDuration, fightName, fightStart = 0) {
  return summarizeIntervals(store, fightDuration, true, fightStart)
    .map((row) => {
      const badUndeadUse = UNDEAD_ONLY_TRINKETS.has(row.spell) && !UNDEAD_BOSSES.has(fightName);
      const lateUse = row.lostSeconds >= 3 && (row.windows?.length ?? 0) <= 1;
      return {
        ...row,
        warning: [
          badUndeadUse ? `${row.spell} is undead-only; ${fightName} is not marked undead.` : "",
          lateUse ? `Late use: missed ${formatDuration(row.lostSeconds)} of the expected ${formatDuration(MAX_AURA_DURATIONS.get(row.spell))} duration.` : ""
        ].filter(Boolean).join(" ")
      };
    })
    .sort((a, b) => Number(Boolean(b.warning)) - Number(Boolean(a.warning)) || b.uptime - a.uptime || a.spell.localeCompare(b.spell));
}

function summarizeConsumables(store, useStore, fightDuration, fightStart = 0, tankCandidates = [], warriors = [], classPlayers = {}, fightPlayers = new Set(), fightType = "boss") {
  const warriorSet = new Set(warriors);
  const fightPlayerSet = fightPlayers instanceof Set ? fightPlayers : new Set(fightPlayers);
  const manaUsers = getManaUsers(classPlayers);
  const rows = summarizeIntervals(store, fightDuration, true, fightStart)
    .filter((row) => {
      if (row.spell === "Greater Stoneshield" || row.spell === "Mighty Rage Potion") return warriorSet.has(row.target);
      return true;
    })
    .map((row) => ({
      ...row,
      kind: row.spell === "Mighty Rage Potion" ? "usage" : undefined,
      uses: row.spell === "Mighty Rage Potion" ? Math.max(1, row.windows?.length ?? 1) : undefined,
      note: row.spell === "Mighty Rage Potion"
        ? `${Math.max(1, row.windows?.length ?? 1)} use${Math.max(1, row.windows?.length ?? 1) === 1 ? "" : "s"}; ${formatDuration(row.seconds)} coverage`
        : `${row.spell} coverage`,
      warning: row.spell === "Greater Stoneshield" && row.uptime < 50 ? "Low mitigation coverage." : ""
    }));

  const stoneshieldSeen = new Set(rows.filter((row) => row.spell === "Greater Stoneshield").map((row) => row.target));
  const mightyRageSeen = new Set(rows.filter((row) => row.spell === "Mighty Rage Potion").map((row) => row.target));
  for (const tank of tankCandidates) {
    if (stoneshieldSeen.has(tank.name)) continue;
    rows.push({
      spell: "Greater Stoneshield",
      target: tank.name,
      sources: [],
      seconds: 0,
      uptime: 0,
      windows: [],
      warning: `Possible tank took ${tank.total.toLocaleString()} damage with no Greater Stoneshield detected.`
    });
  }

  if (fightType === "boss") {
    for (const warrior of warriors) {
      if (!fightPlayerSet.has(warrior) || mightyRageSeen.has(warrior)) continue;
      rows.push({
        spell: "Mighty Rage Potion",
        target: warrior,
        sources: [],
        seconds: 0,
        uptime: 0,
        windows: [],
        kind: "usage",
        uses: 0,
        warning: "No Mighty Rage Potion detected.",
        note: "not used"
      });
    }
  }

  rows.push(...summarizeConsumableUses(useStore, fightDuration, fightStart)
    .filter((row) => manaUsers.has(row.target)));

  return rows.sort((a, b) => Number(Boolean(b.warning)) - Number(Boolean(a.warning)) || b.uptime - a.uptime || a.target.localeCompare(b.target));
}

function getManaUsers(classPlayers = {}) {
  const names = new Set();
  for (const klass of MANA_USER_CLASSES) {
    for (const player of classPlayers[klass] ?? []) names.add(player);
  }
  return names;
}

function summarizeConsumableUses(store, fightDuration, fightStart = 0) {
  return [...store.values()].map((record) => ({
    spell: record.spell,
    target: record.target,
    targetGuid: record.targetGuid,
    sources: [],
    seconds: 0,
    uptime: record.uses,
    windows: record.times.map((time) => {
      const left = ((Math.max(0, Math.min(fightDuration, time - fightStart))) / fightDuration) * 100;
      return { left, width: 1.25 };
    }),
    lostSeconds: 0,
    friendly: true,
    kind: "usage",
    uses: record.uses,
    note: `${record.uses} use${record.uses === 1 ? "" : "s"}`
  }));
}

function renderFightOptions() {
  els.fightSelect.innerHTML = "";
  const fights = state.report?.fights ?? [];
  fights.forEach((fight, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `${fight.name || `Fight ${index + 1}`} - ${formatDuration(fight.duration)} - ${fight.events.length.toLocaleString()} events`;
    els.fightSelect.append(option);
  });
  els.fightSelect.disabled = fights.length === 0;
}

function render() {
  const report = state.report;
  const fight = report?.fights[state.selectedFight];
  els.empty.hidden = Boolean(fight);
  els.dashboard.hidden = !fight;
  els.status.hidden = true;

  if (!fight) {
    els.reportTitle.textContent = "Waiting for a log";
    return;
  }

  els.reportTitle.textContent = `${report.name} - ${fight.name || `Fight ${fight.index + 1}`}`;
  renderSummary(fight);
  renderQuickStats(fight);
  renderArmor(fight);
  renderMetrics(els.buffRows, getFriendlyBuffRows(fight), "No tracked friendly buff windows found.");
  renderMetrics(els.debuffRows, getBossPressureRows(fight), "No tracked enemy debuff windows found.");
  renderTrinkets(fight);
  renderConsumables(fight);
  renderWindfury(fight);
  renderIgnite(fight);
  renderDeaths(fight);
  renderLowActivity(fight);
}

function showStatus(title, text) {
  els.reportTitle.textContent = title;
  els.statusTitle.textContent = title;
  els.statusText.textContent = text;
  els.status.className = "status status--loading";
  els.status.hidden = false;
  els.empty.hidden = true;
  els.dashboard.hidden = true;
  els.fightSelect.disabled = true;
}

function showError(title, text) {
  state.report = null;
  state.selectedFight = 0;
  els.reportTitle.textContent = title;
  els.statusTitle.textContent = title;
  els.statusText.textContent = text;
  els.status.className = "status bad";
  els.status.hidden = false;
  els.empty.hidden = true;
  els.dashboard.hidden = true;
  els.fightSelect.innerHTML = "<option>No fights loaded</option>";
  els.fightSelect.disabled = true;
}

function nextFrame() {
  return new Promise((resolve) => requestAnimationFrame(() => resolve()));
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function renderSummary(fight) {
  const stats = [
    [formatDuration(fight.duration), fight.type === "trash" ? "Trash duration" : "Fight length"]
  ];

  els.summary.innerHTML = stats.map(([value, label]) => `
    <article class="stat">
      <strong>${escapeHtml(value)}</strong>
      <span>${escapeHtml(label)}</span>
    </article>
  `).join("");
}

function renderQuickStats(fight) {
  renderRankList(els.dpsRows, fight.dps, "No player damage found.", (row) => `
    <strong>${row.total.toLocaleString()}</strong>
    <span>${Math.round(row.dps).toLocaleString()} DPS</span>
  `);

  renderRankList(els.healerRows, fight.healers, "No player healing found.", (row) => {
    const effective = Math.max(0, row.total - row.overheal);
    const overhealPct = row.total ? Math.round((row.overheal / row.total) * 100) : 0;
    return `
      <strong>${effective.toLocaleString()}</strong>
      <span>${row.overheal.toLocaleString()} OH (${overhealPct}%)</span>
    `;
  });

  renderRankList(els.castRows, fight.casts, "No casts found.", (row) => `
    <strong>${row.total.toLocaleString()}</strong>
    <span>casts</span>
  `);
}

function renderRankList(container, rows, emptyText, metaRenderer) {
  container.innerHTML = rows.map((row, index) => `
    <article class="rank-row">
      <span class="rank-row__index">${index + 1}</span>
      <span class="rank-row__name">${escapeHtml(row.name)}</span>
      <span class="rank-row__meta">${metaRenderer(row)}</span>
    </article>
  `).join("") || `<article class="rank-row muted">${emptyText}</article>`;
}

function renderArmor(fight) {
  if (fight.expose.length) {
    renderExposeArmor(fight);
    return;
  }

  els.armorTitle.textContent = "Sunder Armor";
  const raidWarriors = fight.warriors ?? [];
  const sunderPlayers = new Set(fight.sunder.map((record) => record.player));
  const missing = raidWarriors.filter((name) => !sunderPlayers.has(name));

  els.sunderHealth.textContent = missing.length ? `${missing.length} warrior missing` : "Coverage found";
  els.sunderHealth.className = `pill ${missing.length ? "warn" : ""}`;

  const rows = fight.sunder.map((record) => {
    const casts = record.applications;
    return `
      <tr>
        <td>${escapeHtml(record.player)}</td>
        <td>${casts}</td>
        <td>${escapeHtml([...record.targets].slice(0, 3).join(", ") || "Unknown")}</td>
      </tr>
    `;
  });

  for (const player of missing) {
    rows.push(`
      <tr class="row--warn">
        <td>${escapeHtml(player)}</td>
        <td>0</td>
        <td class="muted">None</td>
      </tr>
    `);
  }

  els.sunderRows.innerHTML = rows.join("") || `<tr><td colspan="3" class="muted">No Sunder Armor casts found in this fight.</td></tr>`;
}

function renderExposeArmor(fight) {
  els.armorTitle.textContent = "Expose + Sunder Armor";
  const exposeUptimes = fight.debuffs.filter((item) => item.spell === "Expose Armor").map((item) => item.uptime);
  const bestUptime = exposeUptimes.length ? Math.round(Math.max(...exposeUptimes)) : 0;
  els.sunderHealth.textContent = `Expose ${bestUptime}%`;
  els.sunderHealth.className = `pill ${bestUptime >= 80 ? "" : "warn"}`;

  const exposeRows = fight.expose.map((record) => {
    const casts = record.applications;
    return `
      <tr>
        <td>${escapeHtml(record.player)}</td>
        <td>${casts}</td>
        <td>${escapeHtml([...record.targets].slice(0, 3).join(", ") || "Unknown")}</td>
      </tr>
    `;
  }).join("") || `<tr><td colspan="3" class="muted">Expose Armor was detected, but no source rows were available.</td></tr>`;

  const sunderRows = fight.sunder.map((record) => {
    const casts = record.applications;
    return `
      <tr>
        <td>${escapeHtml(record.player)}</td>
        <td>${casts}</td>
        <td>${escapeHtml([...record.targets].slice(0, 3).join(", ") || "Unknown")}</td>
      </tr>
    `;
  }).join("") || `<tr><td colspan="3" class="muted">No Sunder Armor casts found while Expose Armor was active on this fight.</td></tr>`;

  els.sunderRows.innerHTML = `
    <tr class="table-section"><td colspan="3">Expose Armor</td></tr>
    ${exposeRows}
    <tr class="table-section table-section--secondary"><td colspan="3">Sunder Armor casts on same fight</td></tr>
    ${sunderRows}
  `;
}

function renderMetrics(container, rows, emptyText) {
  renderMetricGroups(container, rows, emptyText, "tracked");
}

function getFriendlyBuffRows(fight) {
  const rows = aggregateMetricRows(fight.buffs, new Set())
    .map((row) => {
      const warning = row.lostSeconds >= 3 && (row.windows?.length ?? 0) <= 1
        ? `Late use: missed ${formatDuration(row.lostSeconds)} of the expected ${formatDuration(MAX_AURA_DURATIONS.get(row.spell))} duration.`
        : "";
      if (row.spell !== "Power Infusion") return { ...row, warning };
      return {
        ...row,
        note: "PI uptime",
        target: `${row.target} recipient`,
        warning
      };
    })
  return [...rows, ...getMissingExpectedBuffRows(fight)].sort(sortFriendlyBuffRows);
}

function getMissingExpectedBuffRows(fight) {
  if (fight.type !== "boss") return [];
  const fightPlayers = new Set(fight.players);
  const used = new Set(fight.buffs.map((row) => `${row.spell}|${row.target}`));
  const powerInfusionCasters = new Set(fight.buffs
    .filter((row) => row.spell === "Power Infusion")
    .flatMap((row) => row.sources ?? []));
  const rows = [];

  for (const [klass, spells] of Object.entries(EXPECTED_CLASS_BUFFS)) {
    for (const player of fight.classPlayers?.[klass] ?? []) {
      if (!fightPlayers.has(player)) continue;
      for (const spell of spells) {
        if (spell === "Power Infusion") {
          if (powerInfusionCasters.has(player)) continue;
          rows.push({
            spell,
            target: `${player} caster`,
            sources: [],
            seconds: 0,
            uptime: 0,
            windows: [],
            lostSeconds: 0,
            warning: "Missing Power Infusion cast.",
            note: "not cast"
          });
          continue;
        }

        if (used.has(`${spell}|${player}`)) continue;
        rows.push({
          spell,
          target: player,
          sources: [],
          seconds: 0,
          uptime: 0,
          windows: [],
          lostSeconds: 0,
          warning: `Missing ${spell} use.`,
          note: "not used"
        });
      }
    }
  }

  return rows;
}

function getBossPressureRows(fight) {
  const rows = fight.debuffs.filter((item) => item.spell !== "Ignite" && item.seconds >= 1);
  if (fight.type !== "boss") return aggregateCumulativeMetricRows(rows, fight.duration).sort(sortDebuffRows);

  const preferredTargets = new Set([fight.name, fight.bossTargets[0]].filter(Boolean));
  const bossRows = rows.filter((item) => preferredTargets.has(item.target));
  return aggregateMetricRows(bossRows.length ? bossRows : rows, new Set(["Demoralizing Shout"])).sort(sortDebuffRows);
}

function renderTrinkets(fight) {
  renderMetricGroups(els.trinketRows, fight.trinkets, "No tracked on-use trinkets found.", "active");
}

function renderConsumables(fight) {
  renderMetricGroups(els.consumableRows, fight.consumables, "No tracked consumable usage found.", "active");
}

function renderWindfury(fight) {
  const hasShaman = (fight.classPlayers?.shaman?.length ?? 0) > 0;
  els.windfuryPanel.hidden = !hasShaman;
  if (!hasShaman) {
    els.windfuryRows.innerHTML = "";
    return;
  }
  renderMetrics(els.windfuryRows, fight.windfury, "No Windfury Totem casts found.");
}

function renderMetricGroups(container, rows, emptyText, stateLabel) {
  if (!rows.length) {
    container.innerHTML = `<article class="metric muted">${emptyText}</article>`;
    return;
  }

  const groups = groupMetricRows(rows);
  const singleGroup = groups.length === 1;
  container.innerHTML = groups.map((group, index) => `
    <details class="metric-group ${singleGroup ? "metric-group--single" : ""}" ${shouldOpenMetricGroup(group, index) ? "open" : ""}>
      <summary class="metric-group__head">
        <strong>${escapeHtml(group.spell)}</strong>
        <span>${group.rows.length} ${group.rows.length === 1 ? "entry" : "entries"}</span>
      </summary>
      <div class="metric-group__rows">
        ${group.rows.map((row) => renderMetricRow(row, stateLabel)).join("")}
      </div>
    </details>
  `).join("");
}

function renderMetricRow(row, stateLabel) {
  const value = row.kind === "usage" ? `${row.uses ?? 0}x` : `${Math.round(row.uptime)}%`;
  const meta = row.kind === "usage"
    ? row.note
    : `${formatDuration(row.seconds)} ${row.note || stateLabel}`;
  return `
    <article class="metric ${row.warning ? "metric--warn" : ""}">
      <div class="metric__top">
        <span class="metric__title">${escapeHtml(row.target)}</span>
        <strong>${escapeHtml(value)}</strong>
      </div>
      ${renderTimelineBar(row)}
      <p class="metric__meta">${escapeHtml(meta)}${row.sources.length ? ` - ${escapeHtml(row.sources.join(", "))}` : ""}${row.warning ? `<br>${escapeHtml(row.warning)}` : ""}</p>
    </article>
  `;
}

function groupMetricRows(rows) {
  const groups = new Map();
  for (const row of rows) {
    const group = groups.get(row.spell) ?? { spell: row.spell, rows: [] };
    group.rows.push(row);
    groups.set(row.spell, group);
  }
  return [...groups.values()].map((group) => ({
    ...group,
    rows: group.rows.sort((a, b) => Number(Boolean(b.warning)) - Number(Boolean(a.warning)) || b.seconds - a.seconds || a.target.localeCompare(b.target))
  }));
}

function shouldOpenMetricGroup(group, index) {
  return index === 0
    || group.spell === "Power Infusion"
    || group.spell === "Curse of Elements"
    || group.spell === "Curse of Shadow"
    || group.rows.some((row) => row.warning);
}

function renderTimelineBar(row) {
  if (row.kind === "usage" && !row.windows?.length) {
    return `<div class="bar bar--timeline" aria-hidden="true"></div>`;
  }
  const windows = row.windows?.length
    ? row.windows
    : [{ left: 0, width: Math.min(100, Math.max(1, row.uptime)) }];
  return `
    <div class="bar bar--timeline" aria-hidden="true">
      ${windows.map((window) => `
        <span style="left:${clampPercent(window.left)}%;width:${clampPercent(window.width)}%"></span>
      `).join("")}
    </div>
  `;
}

function aggregateMetricRows(rows, spellsToCombine) {
  const output = [];
  const grouped = new Map();

  for (const row of rows) {
    if (!spellsToCombine.has(row.spell)) {
      output.push(row);
      continue;
    }

    const group = grouped.get(row.spell) ?? {
      spell: row.spell,
      sources: new Set(),
      targetKeys: new Set(),
      seconds: 0,
      uptimeTotal: 0,
      lostSeconds: 0
    };
    group.targetKeys.add(row.targetGuid || row.target);
    group.seconds += row.seconds;
    group.uptimeTotal += row.uptime;
    group.windows ??= [];
    group.windows.push(...(row.windows ?? []));
    group.lostSeconds += row.lostSeconds ?? 0;
    for (const source of row.sources) group.sources.add(source);
    grouped.set(row.spell, group);
  }

  for (const group of grouped.values()) {
    const targetCount = Math.max(1, group.targetKeys.size);
    output.push({
      spell: group.spell,
      target: `${targetCount} target${targetCount === 1 ? "" : "s"} combined`,
      sources: [...group.sources].sort(),
      seconds: group.seconds / targetCount,
      uptime: Math.min(100, group.uptimeTotal / targetCount),
      windows: group.windows,
      lostSeconds: group.lostSeconds,
      note: "avg uptime"
    });
  }

  return output.sort((a, b) => b.uptime - a.uptime || a.spell.localeCompare(b.spell));
}

function aggregateCumulativeMetricRows(rows, fightDuration) {
  const grouped = new Map();

  for (const row of rows) {
    const group = grouped.get(row.spell) ?? {
      spell: row.spell,
      sources: new Set(),
      seconds: 0,
      windows: []
    };
    group.seconds += row.seconds;
    group.windows.push(...(row.windows ?? []));
    for (const source of row.sources) group.sources.add(source);
    grouped.set(row.spell, group);
  }

  return [...grouped.values()]
    .map((group) => ({
      spell: group.spell,
      target: "Trash combined",
      sources: [...group.sources].sort(),
      seconds: group.seconds,
      uptime: (group.seconds / Math.max(1, fightDuration)) * 100,
      windows: group.windows ?? [],
      note: "cumulative uptime"
    }))
    .sort((a, b) => b.seconds - a.seconds || a.spell.localeCompare(b.spell));
}

function sortFriendlyBuffRows(a, b) {
  const aRank = BUFF_DISPLAY_ORDER.get(a.spell) ?? 99;
  const bRank = BUFF_DISPLAY_ORDER.get(b.spell) ?? 99;
  return aRank - bRank || b.uptime - a.uptime || a.target.localeCompare(b.target);
}

function sortDebuffRows(a, b) {
  const aRank = DEBUFF_DISPLAY_ORDER.get(a.spell) ?? 99;
  const bRank = DEBUFF_DISPLAY_ORDER.get(b.spell) ?? 99;
  return aRank - bRank || b.uptime - a.uptime || a.target.localeCompare(b.target);
}

function clampPercent(value) {
  return Math.max(0, Math.min(100, Number(value) || 0));
}

function renderIgnite(fight) {
  const shortWindows = fight.igniteWarnings.filter((warning) => warning.short).length;
  const pushedOff = fight.igniteWarnings.filter((warning) => warning.likelyPushedOff).length;
  els.igniteHealth.textContent = fight.igniteWarnings.length
    ? pushedOff ? `${shortWindows} short / ${pushedOff} pushed off` : `${shortWindows} short / ${fight.igniteWarnings.length} total`
    : "No Ignite";
  els.igniteHealth.className = `pill ${pushedOff || shortWindows ? "bad" : ""}`;
  els.igniteRows.innerHTML = fight.igniteWarnings.map((warning) => `
    <article class="event ${warning.likelyPushedOff ? "event--bad" : ""}">
      <div class="event__top">
        <span class="event__title">${escapeHtml(warning.target || "Unknown target")}</span>
        <strong>${warning.age.toFixed(1)}s</strong>
      </div>
      <p class="event__meta">${escapeHtml(warning.clock)} - ${escapeHtml(warning.source || "Unknown source")} - ${warning.ticks} tick${warning.ticks === 1 ? "" : "s"} - ${escapeHtml(warning.note)}</p>
    </article>
  `).join("") || `<article class="event muted">No Ignite windows detected in this fight.</article>`;
}

function renderDeaths(fight) {
  els.deathRows.innerHTML = fight.deaths.map((death) => `
    <article class="event">
      <div class="event__top">
        <span class="event__title">${escapeHtml(death.name)}</span>
        <strong>${escapeHtml(death.clock)}</strong>
      </div>
      <p class="event__meta">${death.killingBlow ? formatDeathEvent(death.killingBlow) : "No killing blow found."}</p>
    </article>
  `).join("") || `<article class="event muted">No deaths found in this fight.</article>`;
}

function renderLowActivity(fight) {
  els.activityRows.innerHTML = fight.lowActivity.map((row) => `
    <article class="event ${row.total === 0 ? "event--bad" : ""}">
      <div class="event__top">
        <span class="event__title">${escapeHtml(row.name)}</span>
        <strong>${formatDuration(row.total)} / ${formatDuration(row.threshold)}</strong>
      </div>
      <p class="event__meta">Below expected minimum of ${formatDuration(row.threshold)} active casting time for this fight.</p>
    </article>
  `).join("") || `<article class="event muted">No low activity players found.</article>`;
}

function formatDeathEvent(event) {
  const actor = event.sourceName || "Unknown";
  const spell = event.spellName || event.event.replaceAll("_", " ");
  const amount = event.amount ? ` for ${event.amount.toLocaleString()}` : "";
  return `${escapeHtml(event.clock)} - ${escapeHtml(actor)} ${escapeHtml(spell)}${amount}`;
}

function isPlayerGuid(guid = "") {
  return guid.startsWith("Player-") || guid.startsWith("0x0");
}

function isEnemyGuid(guid = "") {
  return Boolean(guid) && !guid.startsWith("Player-") && !guid.startsWith("Pet-") && guid !== "0000000000000000";
}

function isFriendlyActorGuid(guid = "") {
  return guid.startsWith("Player-") || guid.startsWith("Pet-") || guid.startsWith("0x0");
}

function isFriendlySource(event) {
  return isFriendlyActorGuid(event.sourceGuid) && !hasHostileReaction(event.sourceFlags);
}

function isFriendlyPlayerTarget(event) {
  return isPlayerGuid(event.destGuid) && !hasHostileReaction(event.destFlags);
}

function hasHostileReaction(flags = "") {
  const value = parseObjectFlags(flags);
  return value !== null && Boolean(value & 0x40);
}

function parseObjectFlags(flags = "") {
  if (!flags || flags === "nil") return null;
  const value = Number(flags);
  return Number.isFinite(value) ? value : null;
}

function cleanName(value = "") {
  if (!value || value === "nil") return "";
  return stripBom(value).replace(/^"|"$/g, "");
}

function normalizeSpellName(value = "") {
  return SPELL_NAME_ALIASES.get(value) ?? value;
}

function stripBom(value = "") {
  return String(value).replace(/^\uFEFF/, "");
}

function numberOrNull(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function average(values) {
  if (!values.length) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function formatDuration(seconds) {
  const rounded = Math.max(0, Math.round(seconds));
  const minutes = Math.floor(rounded / 60);
  const rest = rounded % 60;
  return `${minutes}:${String(rest).padStart(2, "0")}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildSampleLog() {
  return [
    '5/28 20:00:00.000  SPELL_CAST_SUCCESS,Player-1,"Brakka",0x511,0x0,Creature-0-1,"Lucifron",0x10a48,0x0,7386,"Sunder Armor",0x1',
    '5/28 20:00:00.300  SPELL_AURA_APPLIED,Player-1,"Brakka",0x511,0x0,Creature-0-1,"Lucifron",0x10a48,0x0,7386,"Sunder Armor",0x1,DEBUFF',
    '5/28 20:00:02.000  SPELL_AURA_APPLIED,Player-2,"Karg",0x511,0x0,Player-4,"Rellia",0x511,0x0,6673,"Battle Shout",0x1,BUFF',
    '5/28 20:00:04.000  SPELL_DAMAGE,Creature-0-1,"Lucifron",0x10a48,0x0,Player-5,"Mavren",0x511,0x0,19703,"Lucifron\'s Curse",0x20,1800,0,32,0,0,0,nil,nil,nil',
    '5/28 20:00:06.000  SPELL_AURA_REFRESH,Player-1,"Brakka",0x511,0x0,Creature-0-1,"Lucifron",0x10a48,0x0,7386,"Sunder Armor",0x1,DEBUFF',
    '5/28 20:00:08.000  SPELL_AURA_APPLIED,Player-6,"Varia",0x511,0x0,Creature-0-1,"Lucifron",0x10a48,0x0,12873,"Improved Scorch",0x4,DEBUFF',
    '5/28 20:00:10.000  SPELL_AURA_APPLIED,Player-7,"Prya",0x511,0x0,Player-8,"Dane",0x511,0x0,10060,"Power Infusion",0x2,BUFF',
    '5/28 20:00:12.000  SPELL_AURA_APPLIED,Player-9,"Cind",0x511,0x0,Creature-0-1,"Lucifron",0x10a48,0x0,12654,"Ignite",0x4,DEBUFF',
    '5/28 20:00:14.000  SPELL_AURA_REMOVED,Player-9,"Cind",0x511,0x0,Creature-0-1,"Lucifron",0x10a48,0x0,12654,"Ignite",0x4,DEBUFF',
    '5/28 20:00:18.000  SPELL_DAMAGE,Creature-0-1,"Lucifron",0x10a48,0x0,Player-5,"Mavren",0x511,0x0,19702,"Impending Doom",0x20,2400,0,32,0,0,0,nil,nil,nil',
    '5/28 20:00:19.000  SWING_DAMAGE,Creature-0-1,"Lucifron",0x10a48,0x0,Player-5,"Mavren",0x511,0x0,1300,0,1,0,0,0,nil,nil,nil',
    '5/28 20:00:20.000  UNIT_DIED,0000000000000000,nil,0x80000000,0x80000000,Player-5,"Mavren",0x511,0x0',
    '5/28 20:00:35.000  SPELL_AURA_REMOVED,Player-7,"Prya",0x511,0x0,Player-8,"Dane",0x511,0x0,10060,"Power Infusion",0x2,BUFF',
    '5/28 20:01:05.000  SPELL_AURA_REMOVED,Player-2,"Karg",0x511,0x0,Player-4,"Rellia",0x511,0x0,6673,"Battle Shout",0x1,BUFF',
    '5/28 20:01:30.000  SPELL_AURA_REMOVED,Player-1,"Brakka",0x511,0x0,Creature-0-1,"Lucifron",0x10a48,0x0,7386,"Sunder Armor",0x1,DEBUFF'
  ].join("\n");
}
