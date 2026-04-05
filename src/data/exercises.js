const M=1.3;
const mk=a=>a.map(([n,t,...s])=>{const ir=n.includes("(reps)")||n.includes("(sec");const ip=t==="p"||t==="pl";return{n,t:t==="p"?"pace":t==="pl"?"pace_lower":t==="r"?"r":"a",s:ip||ir?s:s.map(v=>t==="r"?+(v*M).toFixed(2):Math.round(v*M))};});
export const FG={};

// === CHEST: 36 exercises ===
FG["Incline BB Bench"]=["Set bench 30-45°, retract shoulder blades","Grip 1.5x shoulder width, unrack","Lower to upper chest at 75°","Press to lockout in slight arc"];
FG["Incline DB Press"]=["Set bench 30-45°, kick DBs from knees","Press from shoulders, palms forward","Lower to chest, slight arc at top","Squeeze chest, full lockout"];
FG["Incline DB Fly"]=["Arms slightly bent, fixed angle","Open arms wide, stretch chest","Bring together at top, squeeze","3s eccentric down"];
FG["Low-High Cable Fly"]=["Pulleys low, step forward","Pull handles up to chest height","Squeeze upper chest at top","Slow return"];
FG["Incline Machine Press"]=["Adjust seat, handles at upper chest","Press to full extension","Squeeze, slow return","Back against pad"];
FG["Incline Smith Press"]=["Bench under Smith at 30-45°","Lower to upper chest","Press to lockout","Guided path, safe for heavy"];
FG["Landmine Press"]=["Bar in corner or landmine","Hold end at chest","Press up at 45° angle","Lower under control"];
FG["Rev Grip Bench"]=["Palms facing you, lighter weight","Lower to lower chest","Press up targeting upper chest","Spotter recommended"];
FG["Incline Cable Press"]=["Bench between cables at incline","Press handles together above chest","Constant tension throughout","Slow eccentric"];
FG["BB Bench Press"]=["Lie flat, retract shoulder blades, arch upper back","Grip 1.5x shoulder width, unrack","Lower to mid-chest, elbows 75°","Drive feet into floor, press to lockout"];
FG["DB Bench Press"]=["Kick DBs up from knees, start at lockout","Lower to chest level, elbows 45-75°","Press up with slight arc","DBs come together at top"];
FG["Machine Chest Press"]=["Adjust seat, handles at mid-chest","Press forward to extension","Squeeze chest, slow return","Keep back flat"];
FG["Cable Crossover"]=["Stand between cables, slight lean","Pull handles together at chest","Cross hands slightly","Slow return, arms wide"];
FG["DB Fly"]=["Lie flat, slight bend fixed","Open arms wide, chest stretch","Bring DBs together, squeeze","Keep angle fixed throughout"];
FG["Pec Deck"]=["Adjust seat, arms at chest height","Bring pads together","Squeeze 1 second","Open slowly, feel stretch"];
FG["Push-ups (reps)"]=["Hands shoulder width, body straight","Lower chest to floor, elbows 45°","Push to full extension","Core tight throughout"];
FG["Smith Bench"]=["Flat under Smith bar","Lower to mid-chest","Press to lockout","Good for learning form"];
FG["Floor Press"]=["Lie on floor with BB or DBs","Lower until triceps touch floor","Press to lockout","Pure upper body, no leg drive"];
FG["Svend Press"]=["Hold plate between palms at chest","Press forward, squeezing hard","Return maintaining squeeze","Great activation drill"];
FG["Decline BB Bench"]=["Bench at -15°, secure legs","Lower to lower chest","Press to lockout","Targets lower chest"];
FG["Decline DB Press"]=["Decline bench, DBs at chest","Press up with slight arc","Lower under control","Targets lower pecs"];
FG["Chest Dips (reps)"]=["Grip bars, lean forward 30°","Lower until arms parallel","Press up, squeeze chest","Maintain forward lean"];
FG["High-Low Cable Fly"]=["Pulleys high, step forward","Pull down and together","Squeeze lower chest","Slow return"];
FG["Decline Machine Press"]=["Adjust for decline angle","Press forward and down","Full extension, squeeze","Slow eccentric"];
FG["DB Pullover"]=["Across bench, hips low","Hold DB overhead, slight bend","Lower behind head, stretch","Pull back over chest"];
FG["Decline Smith Press"]=["Smith on decline","Lower to lower chest","Press to lockout","Stable for heavy work"];
FG["Decline Cable Fly"]=["Cables on decline bench","Fly movement downward","Squeeze at bottom","Control the stretch"];
FG["Wide Push-ups (reps)"]=["Hands wider than shoulders","Lower chest to floor","Press up, outer chest focus","Core engaged"];
FG["Deficit Push-ups (reps)"]=["Hands on blocks/plates","Lower deeper than normal","Extended ROM","Great for development"];
FG["Hex Press"]=["DBs pressed together throughout","Press up while squeezing","Inner chest focus","Lower under control"];
FG["Plate Squeeze Press"]=["Squeeze 2 plates together","Press forward from chest","Maintain squeeze","Activation drill"];
FG["Close Grip Push-ups (reps)"]=["Hands close under chest","Lower, press up","Triceps + inner chest","Elbows close to body"];
FG["Archer Push-ups (reps)"]=["Wide stance, shift to one arm","Lower on working arm","Press up on working side","Advanced variation"];
FG["Clap Push-ups (reps)"]=["Standard position, explode up","Clap hands, land softly","Builds explosive power","Advanced plyometric"];
FG["Spoto Press"]=["Pause 1 inch off chest","Hold 2 seconds, press up","Builds bottom-end strength","Use moderate weight"];

// === BACK - UPPER/TRAPS: 16 exercises ===
FG["BB Shrug"]=["Bar at hips, arms straight","Shrug shoulders to ears","Hold 1s, squeeze traps","Lower slowly, don't roll"];
FG["DB Shrug"]=["DBs at sides","Shrug straight up","Squeeze traps at top","Lower slowly, full stretch"];
FG["Face Pull"]=["Cable face height, rope","Pull to face, elbows high","Externally rotate hands by ears","Squeeze rear delts + upper back"];
FG["Upright Row"]=["Narrow grip bar","Pull to chin, elbows high","Squeeze traps at top","Lower under control"];
FG["Cable Upright Row"]=["Low cable, straight bar","Pull to chin","Elbows high and wide","Constant tension"];
FG["Rack Pull"]=["Pins at knee height","Deadlift to lockout","Squeeze traps hard","Heavy upper back builder"];
FG["Farmer Walk (per hand)"]=["Heavy DBs at sides","Walk with tall posture","Squeeze grip hard","Traps, grip, and core"];
FG["Behind Neck Shrug"]=["Bar behind back","Shrug up, squeeze","Lower slowly","Different trap angle"];
FG["Cable Shrug"]=["Face cable, bar low","Shrug against resistance","Squeeze at top","Constant tension"];
FG["Smith Shrug"]=["Stand in Smith machine","Shrug up, hold 1s","Lower slowly","Can go heavy safely"];
FG["Trap Bar Shrug"]=["Stand in trap bar","Neutral grip shrug","Squeeze traps","Comfortable grip"];
FG["Overhead Shrug"]=["Bar overhead, lock arms","Shrug up pushing bar higher","Upper trap + stability","Light weight"];
FG["Power Shrug"]=["Slight knee dip, explosive shrug","Use leg momentum","Heavy weight for traps","Olympic lifting accessory"];
FG["Kelso Shrug"]=["Face down on incline bench","DBs hang, shrug blades together","Squeeze mid/lower traps","Great for posture"];
FG["Snatch Grip Shrug"]=["Extra wide grip on bar","Shrug up, wider activation","Hold at top","Builds entire upper back"];
FG["Y-Raise (Traps)"]=["Face down on incline","Arms in Y overhead","Squeeze lower traps","Light weight, high reps"];

// === BACK - LATS: 15 exercises ===
FG["Lat PD (Wide)"]=["Wide grip, thighs secured","Pull to upper chest, elbows down","Squeeze lats 1s","Full stretch at top"];
FG["Lat PD (Close)"]=["V-bar attachment","Pull to chest, elbows back","Squeeze lats","Good stretch at top"];
FG["Lat PD (Neutral)"]=["Neutral grip handles","Pull to upper chest","Squeeze lats","Full extension at top"];
FG["Pull-ups (reps)"]=["Palms away, wider than shoulders","Pull chin over bar, lead with chest","Full extension at bottom","Control descent 2s"];
FG["Chin-ups (reps)"]=["Palms toward you","Pull chin over bar","Great for biceps + lats","Full hang at bottom"];
FG["Neutral Pull-ups (reps)"]=["Palms face each other","Chin over bar","Comfortable grip","Full ROM"];
FG["Straight Arm PD"]=["Stand, slight lean","Push bar down, arms straight","Squeeze lats at bottom","Slow return"];
FG["Single Arm Lat PD"]=["One arm at a time","Pull to chest","Great mind-muscle connection","Full stretch"];
FG["Machine Pullover"]=["Sit, elbows on pad","Drive down in arc","Squeeze lats","Great isolation"];
FG["Behind Neck PD"]=["Pull behind head carefully","Lighter weight","Upper lat focus","Shoulder flexibility needed"];
FG["Assisted Pull-ups (reps)"]=["Set assistance weight","Pull-ups with help","Build toward bodyweight","Full ROM"];
FG["Wide Pull-ups (reps)"]=["Extra wide grip","Outer lat focus","Chin to bar","Hardest variation"];
FG["Commando Pull-ups (reps)"]=["One hand each side of bar","Alternate sides","Grip + lats","Functional"];
FG["Band Pull-ups (reps)"]=["Band under feet","Assistance at bottom","Build strength","Full ROM"];
FG["Rope Lat PD"]=["Rope attachment","Pull apart at bottom","Squeeze lats","Constant tension"];

// === BACK - MID: 17 exercises ===
FG["BB Row"]=["Hinge 45°, bar at arms length","Pull to lower chest","Squeeze shoulder blades","No momentum, control descent"];
FG["Seated Cable Row"]=["Sit, slight knee bend, chest up","Pull handles to lower chest","Squeeze blades 1s","Full extension, feel stretch"];
FG["T-Bar Row"]=["Straddle bar, grip handle","Pull to chest, elbows back","Squeeze back at top","Lower slowly"];
FG["DB Row"]=["Hand+knee on bench, DB hangs","Pull to hip, elbow back","Squeeze blade in","Full stretch at bottom"];
FG["Chest Supported Row"]=["Face down on incline","Row DBs up, squeeze","No cheating possible","Strict form builder"];
FG["Machine Row"]=["Chest against pad","Pull handles back","Squeeze blades","Return slowly"];
FG["Pendlay Row"]=["Bar on floor each rep","Explosive pull to chest","Set down between reps","Dead stop each rep"];
FG["Meadows Row"]=["Perpendicular to landmine","One arm row, elbow high","Great lat/rhomboid work","Full stretch"];
FG["Inverted Row (reps)"]=["Under bar, body straight","Pull chest to bar","Squeeze back","Bodyweight rowing"];
FG["Seal Row"]=["Face down on elevated bench","Row from dead hang","Pure back, no cheating","Squeeze at top"];
FG["Cable Row (1-Arm)"]=["Sit at cable, one handle","Pull to side, rotate slightly","Great connection","Switch sides"];
FG["Helms Row"]=["Chest supported DB row","One arm on incline","Strict form","Squeeze blade"];
FG["Kroc Row"]=["Heavy single-arm DB row","High reps 15-20+","Some body English OK","Builds thick back"];
FG["Yates Row"]=["Underhand grip BB row","More upright torso","Pull to lower chest","Targets lower lats"];
FG["Smith Row"]=["Hinge in Smith machine","Row to lower chest","Guided path","Good for beginners"];
FG["Gorilla Row"]=["Two KBs on floor, wide stance","Row one at a time","Stay hinged throughout","Great for conditioning"];
FG["Band Row"]=["Step on band, hinge","Row to lower chest","Increasing resistance","Warm-up or burnout"];

// === BACK - LOWER: 14 exercises ===
FG["Conv Deadlift"]=["Bar over midfoot, hips back, chest up","Push floor away with legs","Bar drags up shins","Lock out with glute squeeze"];
FG["Romanian DL"]=["Slight knee bend, fixed","Push hips BACK, bar close","Feel hamstring stretch","Squeeze glutes to return"];
FG["Good Morning"]=["Bar on back, slight knee bend","Hinge at hips, push back","Torso nearly parallel","Drive hips forward to stand"];
FG["Hex Bar DL"]=["Stand inside hex bar","Grip handles, hips back","Push floor away","Lock out at top"];
FG["Sumo DL"]=["Wide stance, grip inside legs","Push knees out, hips low","Stand up, hips+knees extend","Lock out"];
FG["Stiff-Leg DL"]=["Minimal knee bend","Hinge forward, bar close","Max hamstring stretch","Stand up, squeeze glutes"];
FG["Deficit DL"]=["Stand on 2-4 inch platform","Conventional DL from deeper","Builds floor strength","Harder start"];
FG["Block Pull"]=["Bar on blocks/elevated","Deadlift from raised position","Focus on lockout","Heavy partials"];
FG["Back Extension (wt)"]=["Lock in apparatus, hold weight","Hinge down","Extend to neutral","Squeeze glutes at top"];
FG["Hyperextension (reps)"]=["Face down on bench","Lower torso down","Raise to neutral","Don't hyperextend"];
FG["Rev Hyperextension"]=["Face down, upper body on pad","Raise legs behind you","Squeeze glutes + lower back","Lower under control"];
FG["Jefferson DL"]=["Straddle bar, one foot each side","Grip front and back","Stand up","Unique rotational demand"];
FG["Trap Bar DL"]=["In trap bar, neutral grip","Squat-hinge hybrid","Push floor away","Joint-friendly deadlift"];
FG["Suitcase DL"]=["Bar at one side","Deadlift, resist lateral lean","Core stabilizes hard","Switch sides"];

// === SHOULDERS - FRONT: 13 exercises ===
FG["OHP (Barbell)"]=["Bar at collarbone, grip outside shoulders","Brace core, press in arc around face","Lock out overhead, bar over midfoot","Lower under control"];
FG["DB Shoulder Press"]=["Sit or stand, DBs at ear level","Press straight up","Lower to ears","Full lockout each rep"];
FG["Arnold Press"]=["Start palms facing you at chin","Rotate palms out as you press","Lockout with palms forward","Reverse on the way down"];
FG["Machine Shoulder Press"]=["Adjust seat, handles at shoulders","Press to lockout","Lower under control","Back against pad"];
FG["Push Press"]=["Bar at collarbone, slight knee dip","Explode with legs, press overhead","Lock out arms","Use leg momentum"];
FG["Seated DB Press"]=["Upright bench, DBs at ears","Press overhead","Lower to ear level","More stable than standing"];
FG["Smith OHP"]=["Under Smith bar","Press overhead guided","Lock out","Good for beginners"];
FG["Plate Front Raise"]=["Hold plate with both hands","Raise to shoulder height","Lower under control","Constant tension"];
FG["DB Front Raise"]=["DBs at thighs","Raise to shoulder height","Lower slowly","Don't swing"];
FG["Cable Front Raise"]=["Low cable","Raise to shoulder height","Constant tension","Strict form"];
FG["BB Front Raise"]=["Bar at thighs, shoulder width","Raise to shoulder height","Lower under control","Slight elbow bend"];
FG["Viking Press"]=["Landmine for overhead press","One or two arms","Unique angle","Shoulder-friendly"];
FG["Z Press"]=["Sit on floor, legs extended","Press overhead, no back support","Extreme core demand","True pressing strength"];

// === SHOULDERS - SIDE: 11 exercises ===
FG["DB Lateral Raise"]=["Slight forward lean, DBs at sides","Raise out, leading with elbows","Shoulder height, slight bend","3s eccentric down"];
FG["Cable Lateral Raise"]=["Low cable, handle at side","Raise to shoulder height","Constant tension","Lower slowly"];
FG["Machine Lateral Raise"]=["Sit, pads on outer arms","Raise to shoulder height","Squeeze at top","Lower under control"];
FG["Leaning Lateral Raise"]=["Hold post, lean away","Raise DB with free hand","Greater ROM","Intense stretch"];
FG["Behind-Back Cable Lat"]=["Cable behind you","Raise to side","Different pull angle","Great connection"];
FG["Upright Row (Wide)"]=["Wide grip bar","Pull to chin, elbows high","Side delt focus","Lower slowly"];
FG["Lu Raise"]=["Light DBs, palms down","Raise out and slightly forward","Between front and lateral","Named after Lu Xiaojun"];
FG["Cross-Body Cable Raise"]=["Sideways to cable","Pull across body and up","Unique angle","Constant tension"];
FG["Incline Lateral Raise"]=["Lie sideways on incline","Raise DB from low position","Extended ROM","Great stretch at bottom"];
FG["Bus Driver"]=["Hold plate at arm's length","Rotate like steering wheel","Constant tension","Great finisher"];
FG["Egyptian Lateral Raise"]=["Sideways to cable, arm behind","Pull across and up","Eliminates trap involvement","Pure side delt"];

// === SHOULDERS - REAR: 13 exercises ===
FG["Reverse Fly (DB)"]=["Bend over, DBs hanging","Raise arms to sides","Squeeze rear delts","Lower slowly"];
FG["Face Pull (Rear)"]=["Cable face height, rope","Pull to face, elbows high","Externally rotate","Squeeze rear delts"];
FG["Reverse Fly Machine"]=["Sit facing pec deck backward","Open arms to sides","Squeeze rear delts","Return slowly"];
FG["Cable Reverse Fly"]=["Between cables, cross them","Open arms wide","Squeeze rear delts","Slow return"];
FG["Band Pull-Apart (reps)"]=["Band at arm's length","Pull apart to chest","Squeeze rear delts","Return slowly"];
FG["Prone Y Raise"]=["Face down on bench","Arms in Y shape up","Light weight, upper back","Shoulder health"];
FG["Seated Rear Fly"]=["Sit, lean forward","Fly DBs to sides","Squeeze rear delts","Lower under control"];
FG["Bent-Over Rear Fly"]=["Stand, hinge at hips","Fly DBs out","Squeeze at top","No momentum"];
FG["Rope Face Pull"]=["Rope at face height","Pull to face and apart","External rotation","Key shoulder health exercise"];
FG["W Raise"]=["Face down, arms in W","Raise maintaining W shape","Rear delt + rotator cuff","Light weight only"];
FG["Incline Rear Fly"]=["Face down on incline","Fly DBs to sides","Gravity-assisted isolation","Great stretch"];
FG["Standing Cable Rear Fly"]=["Single cable at shoulder height","Pull back and squeeze","Switch sides","Constant tension"];
FG["Rev Pec Deck (Wide)"]=["Wide grip reverse pec deck","Open arms fully","End range squeeze","Different activation"];

export const EX={
uc:mk([["Incline BB Bench","r",.25,.45,.70,.90,1.05,1.20,1.35,1.55],["Incline DB Press","a",8,16,26,34,40,46,52,62],["Incline DB Fly","a",5,10,18,24,28,32,36,44],["Low-High Cable Fly","a",4,8,16,22,26,30,36,44],["Incline Machine Press","a",12,25,45,60,72,82,92,110],["Incline Smith Press","r",.20,.40,.62,.80,.92,1.05,1.20,1.40],["Landmine Press","a",8,16,28,36,42,48,55,66],["Rev Grip Bench","r",.20,.40,.62,.80,.92,1.05,1.18,1.38],["Incline Cable Press","a",5,10,18,26,32,38,44,54],["Spoto Press","r",.22,.42,.65,.82,.95,1.08,1.22,1.45],["Incline Hammer Press","a",8,16,26,34,40,46,52,62],["Incline Cable Fly","a",4,8,16,22,26,30,36,44],["Smith Incline Press","r",.22,.42,.65,.82,.95,1.08,1.22,1.45],["Incline Chest Dip (reps)","a",1,3,8,14,18,24,32,44],["Low Incline DB Press","a",8,16,26,34,40,46,52,62],["Incline DB Squeeze Press","a",6,14,22,30,36,42,48,58],["Incline Plate Press","a",5,10,18,26,32,38,44,54],["Machine Incline Fly","a",8,16,28,38,44,52,60,72],["Cable Incline Crossover","a",4,8,16,22,26,30,36,44],["Incline Push-up (reps)","a",5,12,25,35,45,55,70,90],["Incline JM Press","r",.18,.32,.50,.65,.75,.85,1.00,1.22],["Incline Band Press","a",6,14,22,30,36,42,48,58]]),
mc:mk([["BB Bench Press","r",.30,.50,.80,1.00,1.15,1.30,1.50,1.80],["DB Bench Press","a",10,20,32,40,48,54,60,72],["Machine Chest Press","a",15,35,55,70,82,92,105,125],["Cable Crossover","a",4,10,18,24,28,34,40,50],["DB Fly","a",5,10,18,24,28,32,36,44],["Pec Deck","a",12,25,45,60,70,80,90,108],["Push-ups (reps)","a",3,10,25,35,45,55,70,90],["Smith Bench","r",.25,.45,.72,.92,1.05,1.18,1.35,1.55],["Floor Press","r",.25,.45,.70,.88,1.00,1.12,1.28,1.50],["Svend Press","a",2,5,10,16,20,24,28,36],["Hex Press","a",8,16,26,34,40,46,52,62],["Plate Squeeze Press","a",5,10,16,22,26,30,36,44],["Cable Chest Press","a",6,14,24,32,38,44,52,62],["Flat Cable Fly","a",4,10,18,24,28,34,40,50],["Resistance Band Press (reps)","a",5,12,22,32,40,48,58,72],["Tempo Bench Press","r",.25,.42,.68,.85,.98,1.10,1.28,1.52],["Pin Press","r",.28,.48,.78,.98,1.12,1.28,1.48,1.75],["Larsen Press","r",.25,.42,.68,.85,.98,1.10,1.28,1.52],["Board Press","r",.30,.52,.82,1.02,1.18,1.32,1.52,1.82],["Dip Machine (reps)","a",3,8,16,24,30,38,48,62],["Squeeze Press","a",8,16,26,34,40,46,52,62],["Machine Fly","a",8,16,28,38,44,52,60,72],["Band Chest Fly (reps)","a",5,12,22,32,40,48,58,72],["Bamboo Bar Bench","r",.20,.38,.60,.78,.88,1.00,1.18,1.42],["Feet Up Bench","r",.25,.42,.68,.85,.98,1.10,1.28,1.52],["Paused Bench Press","r",.25,.42,.68,.85,.98,1.10,1.28,1.52]]),
lc:mk([["Decline BB Bench","r",.30,.50,.80,1.00,1.15,1.30,1.50,1.80],["Decline DB Press","a",10,20,32,40,48,54,60,72],["Chest Dips (reps)","a",1,4,10,16,22,28,38,52],["High-Low Cable Fly","a",4,10,18,24,28,34,40,50],["Decline Machine Press","a",15,35,55,70,82,92,105,125],["DB Pullover","a",6,14,24,32,38,44,50,60],["Decline Smith Press","r",.25,.45,.72,.92,1.05,1.18,1.35,1.55],["Decline Cable Fly","a",4,10,18,24,28,34,40,50],["Wide Push-ups (reps)","a",3,8,20,30,40,50,65,85],["Deficit Push-ups (reps)","a",2,6,16,24,32,40,55,72],["Close Grip Push-ups (reps)","a",2,8,18,26,34,42,55,72],["Archer Push-ups (reps)","a",1,3,8,14,18,24,32,44],["Clap Push-ups (reps)","a",1,4,10,16,22,28,36,48],["Decline Fly","a",4,10,18,24,28,34,40,50],["Weighted Dips","a",0,5,12,20,28,36,48,64],["Ring Dips (reps)","a",0,2,6,12,16,22,30,42],["Banded Dips (reps)","a",2,6,14,22,28,36,46,60],["Straight Bar Dip (reps)","a",1,4,10,16,22,28,38,52],["Decline Push-up (reps)","a",3,10,22,32,40,50,65,85],["Cable Pullover","a",6,14,24,32,38,44,50,60],["Ring Push-ups (reps)","a",2,6,14,22,28,36,46,60],["Deficit DB Pullover","a",5,12,22,30,36,42,50,62]]),
ut:mk([["BB Shrug","r",.35,.60,1.00,1.25,1.45,1.65,1.90,2.30],["DB Shrug","a",10,20,34,44,52,58,65,78],["Face Pull","a",4,8,16,22,26,32,38,48],["Upright Row","r",.15,.30,.50,.62,.72,.82,.95,1.15],["Cable Upright Row","a",6,14,24,32,38,44,52,62],["Rack Pull","r",.45,.75,1.20,1.50,1.70,1.90,2.20,2.60],["Farmer Walk (per hand)","a",12,24,38,48,56,62,70,84],["Behind Neck Shrug","r",.30,.55,.90,1.15,1.35,1.55,1.80,2.15],["Cable Shrug","a",10,22,36,48,56,64,72,86],["Smith Shrug","r",.30,.55,.90,1.15,1.35,1.55,1.80,2.15],["Trap Bar Shrug","r",.35,.60,1.00,1.25,1.45,1.65,1.90,2.30],["Overhead Shrug","r",.20,.35,.55,.72,.82,.92,1.08,1.30],["Power Shrug","r",.40,.65,1.05,1.30,1.50,1.70,1.95,2.35],["Kelso Shrug","a",4,10,18,26,30,36,42,52],["Snatch Grip Shrug","r",.30,.55,.90,1.15,1.35,1.55,1.80,2.15],["Y-Raise (Traps)","a",1,3,6,10,14,18,22,28],["Haney Shrug","a",8,18,30,40,48,56,64,78],["Calf Machine Shrug","a",15,30,50,68,80,92,105,128],["Prone Shrug","a",3,8,14,20,26,32,38,48],["Band Shrug","a",4,10,18,26,32,38,44,54],["Machine Shrug","a",15,30,50,68,80,92,105,128],["Incline Shrug","a",6,14,24,34,40,48,56,68],["Clean Pull","r",.35,.58,.92,1.18,1.35,1.55,1.82,2.15],["High Pull","r",.25,.45,.72,.92,1.05,1.18,1.38,1.65],["Overhead Carry","a",8,18,30,40,48,56,64,78],["Band Face Pull (reps)","a",8,16,28,38,48,58,70,88]]),
la:mk([["Lat PD (Wide)","a",15,30,50,65,75,85,95,115],["Lat PD (Close)","a",15,30,50,65,75,85,95,115],["Lat PD (Neutral)","a",15,30,50,65,75,85,95,115],["Pull-ups (reps)","a",1,4,8,12,16,20,26,35],["Chin-ups (reps)","a",1,4,8,12,16,20,26,35],["Neutral Pull-ups (reps)","a",1,4,8,12,16,20,26,35],["Straight Arm PD","a",6,14,24,34,40,48,56,68],["Single Arm Lat PD","a",8,16,28,38,44,52,60,72],["Machine Pullover","a",10,22,38,50,58,66,76,92],["Behind Neck PD","a",12,26,42,56,66,76,86,104],["Assisted Pull-ups (reps)","a",1,4,8,14,18,22,28,38],["Wide Pull-ups (reps)","a",0,2,5,8,12,16,22,30],["Commando Pull-ups (reps)","a",0,2,5,8,12,16,22,30],["Band Pull-ups (reps)","a",1,4,8,14,18,22,28,38],["Rope Lat PD","a",10,22,38,50,58,66,76,92],["Lat Pulldown (Rev Grip)","a",12,26,42,56,66,76,86,104],["Lat Pulldown (1.5 reps)","a",10,22,38,50,58,66,76,92],["Banded Lat PD","a",6,14,24,34,40,48,56,68],["Close Grip Chin-ups (reps)","a",1,4,8,12,16,20,26,35],["Weighted Pull-ups","a",0,5,10,18,24,30,40,52],["Lat PD (Underhand)","a",12,26,42,56,66,76,86,104],["Half Kneeling Lat PD","a",10,22,38,50,58,66,76,92],["Banded Pull-Apart Lat","a",4,10,18,26,32,38,44,54],["Ring Pull-ups (reps)","a",0,2,6,10,14,18,24,32],["Archer Pull-ups (reps)","a",0,1,4,8,12,16,22,30],["Muscle-up (reps)","a",0,1,2,4,6,8,12,18],["Meadows Pulldown","a",8,16,28,38,44,52,60,72]]),
mi:mk([["BB Row","r",.25,.45,.72,.92,1.05,1.18,1.38,1.65],["Seated Cable Row","a",15,30,50,65,75,85,95,115],["T-Bar Row","r",.20,.40,.65,.85,.98,1.10,1.28,1.52],["DB Row","a",8,18,30,40,46,52,58,70],["Chest Supported Row","a",8,18,30,40,46,52,58,70],["Machine Row","a",15,30,50,65,75,85,95,115],["Pendlay Row","r",.20,.40,.65,.85,.98,1.10,1.28,1.52],["Meadows Row","a",8,16,28,36,42,48,55,66],["Inverted Row (reps)","a",2,6,12,18,24,30,38,50],["Seal Row","a",8,16,28,38,44,50,58,70],["Cable Row (1-Arm)","a",6,14,24,32,38,44,52,62],["Helms Row","a",8,16,28,36,42,48,55,66],["Kroc Row","a",10,22,36,46,54,62,70,84],["Yates Row","r",.22,.42,.68,.88,1.00,1.12,1.32,1.58],["Smith Row","r",.20,.38,.62,.80,.92,1.05,1.22,1.48],["Gorilla Row","a",8,16,28,36,42,48,55,66],["Band Row","a",4,10,18,26,32,38,44,54],["Iso Row Machine","a",12,26,42,56,66,76,86,104],["Low Cable Row","a",10,22,38,50,58,66,76,92],["Snatch Grip Row","r",.18,.35,.58,.75,.88,1.00,1.18,1.42],["Band Seated Row","a",6,14,24,34,40,48,56,68],["Landmine Row","a",8,16,28,38,44,52,60,72],["High Row Machine","a",12,26,42,56,66,76,86,104],["Renegade Row (reps)","a",3,7,14,20,24,28,34,42],["TRX Row (reps)","a",3,8,16,24,30,38,46,60],["Batwing Row","a",6,14,24,32,38,44,52,62],["Supine Row (reps)","a",3,8,16,24,30,38,46,60]]),
lb:mk([["Conv Deadlift","r",.45,.75,1.20,1.55,1.75,1.95,2.40,2.90],["Romanian DL","r",.35,.58,.92,1.18,1.35,1.55,1.82,2.15],["Good Morning","r",.15,.35,.58,.75,.85,.95,1.12,1.35],["Hex Bar DL","r",.45,.75,1.20,1.50,1.70,1.88,2.28,2.72],["Sumo DL","r",.45,.75,1.20,1.52,1.72,1.92,2.38,2.85],["Stiff-Leg DL","r",.30,.55,.88,1.12,1.28,1.45,1.70,2.00],["Deficit DL","r",.40,.68,1.10,1.42,1.62,1.82,2.22,2.65],["Block Pull","r",.50,.82,1.30,1.62,1.82,2.02,2.48,2.95],["Back Extension (wt)","a",0,8,18,26,32,38,48,60],["Hyperextension (reps)","a",3,8,15,22,28,34,42,55],["Rev Hyperextension","a",0,8,18,28,34,40,50,62],["Jefferson DL","r",.35,.60,.95,1.22,1.40,1.58,1.85,2.22],["Trap Bar DL","r",.45,.75,1.20,1.50,1.70,1.88,2.28,2.72],["Suitcase DL","a",10,22,36,48,56,64,72,86],["Paused Deadlift","r",.38,.65,1.05,1.35,1.55,1.72,2.10,2.55],["Snatch Grip DL","r",.38,.65,1.05,1.35,1.55,1.72,2.10,2.55],["Banded Deadlift","r",.42,.72,1.15,1.48,1.68,1.88,2.30,2.78],["Rack RDL","r",.38,.62,.98,1.25,1.42,1.62,1.90,2.25],["KB Deadlift","a",8,18,30,40,48,56,64,78],["Single Leg DL","a",4,10,18,26,32,38,44,54],["Duck Walk (reps)","a",3,8,14,22,28,34,42,54],["Hip Hinge (Bodyweight, reps)","a",5,12,22,32,42,52,65,82],["Superman Hold (seconds)","a",10,20,35,50,65,80,100,130]]),
fd:mk([["OHP (Barbell)","r",.20,.35,.55,.70,.80,.92,1.10,1.35],["DB Shoulder Press","a",6,14,24,32,38,44,48,58],["Arnold Press","a",6,12,22,30,36,42,46,56],["Machine Shoulder Press","a",12,25,45,58,68,78,88,105],["Push Press","r",.25,.45,.68,.85,.98,1.12,1.30,1.55],["Seated DB Press","a",6,14,24,32,38,44,48,58],["Smith OHP","r",.18,.32,.50,.65,.75,.85,1.00,1.22],["Plate Front Raise","a",5,10,16,22,26,30,36,44],["DB Front Raise","a",3,7,12,18,22,26,30,38],["Cable Front Raise","a",3,7,12,18,22,26,30,38],["BB Front Raise","a",4,10,18,24,28,34,40,50],["Viking Press","a",8,16,28,36,42,48,56,68],["Z Press","r",.15,.28,.45,.58,.68,.78,.92,1.12],["Seated BB OHP","r",.18,.32,.52,.68,.78,.90,1.05,1.28],["Klokov Press","r",.12,.22,.38,.50,.58,.68,.80,.98],["Landmine Shoulder Press","a",6,14,24,32,38,44,52,62],["Behind Neck Press","r",.15,.28,.45,.58,.68,.78,.92,1.12],["Handstand Push-ups (reps)","a",0,1,4,8,12,16,22,30],["Bottoms Up KB Press","a",4,8,14,20,26,32,38,48],["Single Arm DB Press","a",4,10,18,26,32,38,44,54],["Band OHP (reps)","a",5,12,22,32,40,48,58,72],["Javelin Press","a",4,10,18,26,32,38,44,54],["Savickas Press","r",.15,.28,.45,.58,.68,.78,.92,1.12]]),
sd:mk([["DB Lateral Raise","a",2,6,10,14,17,20,24,32],["Cable Lateral Raise","a",2,6,10,14,17,20,24,32],["Machine Lateral Raise","a",6,15,28,38,44,52,60,72],["Leaning Lateral Raise","a",2,5,10,14,17,20,24,30],["Behind-Back Cable Lat","a",2,5,10,14,17,20,24,30],["Upright Row (Wide)","r",.12,.25,.40,.52,.60,.68,.80,.98],["Lu Raise","a",2,4,8,12,15,18,22,28],["Cross-Body Cable Raise","a",2,5,10,14,17,20,24,30],["Incline Lateral Raise","a",2,4,8,12,15,18,22,28],["Bus Driver","a",5,10,16,22,26,30,36,44],["Egyptian Lateral Raise","a",2,5,10,14,17,20,24,30],["W Lateral Raise","a",1,4,8,12,15,18,22,28],["Chest Supported Lateral","a",2,5,10,14,17,20,24,30],["Banded Lateral Raise","a",2,5,10,14,17,20,24,30],["Partial Lateral Raise","a",3,8,14,20,24,28,34,42],["DB Y Press","a",3,7,12,18,22,26,30,38],["Seated Lateral Raise","a",2,5,10,14,17,20,24,30],["Plate Lateral Raise","a",3,7,12,18,22,26,30,38],["Band Side Raise (reps)","a",5,12,22,32,40,48,58,72],["Half Kneeling Lateral","a",2,4,8,12,15,18,22,28],["Prone Lateral Raise","a",1,4,8,12,15,18,22,28]]),
rd:mk([["Reverse Fly (DB)","a",2,6,10,14,17,20,24,32],["Face Pull (Rear)","a",4,8,16,22,26,32,38,48],["Reverse Fly Machine","a",8,18,32,42,50,58,66,80],["Cable Reverse Fly","a",2,6,10,14,17,20,24,32],["Band Pull-Apart (reps)","a",5,10,18,26,32,38,46,60],["Prone Y Raise","a",1,3,7,11,14,17,20,26],["Seated Rear Fly","a",2,6,10,14,17,20,24,32],["Bent-Over Rear Fly","a",2,6,10,14,17,20,24,32],["Rope Face Pull","a",4,8,16,22,26,32,38,48],["W Raise","a",1,3,7,11,14,17,20,26],["Incline Rear Fly","a",2,5,10,14,17,20,24,30],["Standing Cable Rear Fly","a",2,5,10,14,17,20,24,30],["Rev Pec Deck (Wide)","a",6,14,26,36,44,52,60,72],["Banded Face Pull (reps)","a",8,16,26,36,44,52,62,78],["Rear Delt Cable Pull","a",3,7,12,18,22,26,30,38],["Chest Supported Rear Fly","a",2,5,10,14,17,20,24,30],["Prone I Raise","a",1,3,6,10,13,16,20,26],["TRX Rear Fly (reps)","a",3,7,14,20,24,28,34,42],["DB Powell Raise","a",1,3,7,11,14,17,20,26],["Rear Delt Row","a",3,7,14,20,24,28,34,42],["Kelso Rear Fly","a",2,5,10,14,17,20,24,30]]),
qu:mk([["BB Back Squat","r",.40,.68,1.10,1.40,1.60,1.80,2.10,2.55],["Front Squat","r",.30,.52,.88,1.15,1.32,1.48,1.72,2.08],["Leg Press","r",.70,1.25,2.00,2.60,3.00,3.40,4.00,4.80],["Leg Extension","a",12,25,45,62,72,82,95,115],["Hack Squat","r",.35,.62,1.00,1.30,1.50,1.68,1.98,2.40],["Bulgarian Split Squat","a",6,14,26,34,40,46,52,64],["Goblet Squat","a",6,14,26,34,40,46,52,64],["Smith Squat","r",.30,.52,.92,1.18,1.38,1.55,1.82,2.18],["Pendulum Squat","a",12,25,45,62,72,82,95,115],["Belt Squat","r",.30,.52,.85,1.10,1.28,1.45,1.68,2.02],["DB Squat","a",6,14,26,34,40,46,52,64],["Sissy Squat (weighted)","a",0,4,8,14,18,22,28,36],["Lunges (per leg)","a",6,14,24,32,38,44,50,60],["Walking Lunge","a",6,14,24,32,38,44,50,60],["Step-ups (per leg)","a",4,10,20,28,34,40,46,56],["Single Leg Press","a",20,40,65,85,100,115,135,162],["Zercher Squat","r",.25,.45,.72,.92,1.05,1.18,1.35,1.62],["Wall Sit (seconds)","a",15,30,50,70,90,110,135,180],["Spanish Squat","a",0,4,10,18,24,30,38,48],["Close Stance Leg Press","r",.65,1.15,1.85,2.40,2.80,3.20,3.75,4.50],["Pause Squat","r",.32,.55,.90,1.15,1.32,1.48,1.72,2.10],["Box Squat","r",.35,.60,.95,1.22,1.40,1.58,1.85,2.25],["Reverse Lunge","a",6,14,24,32,38,44,50,60],["Curtsy Lunge","a",4,10,20,28,34,40,46,56],["Landmine Squat","a",8,18,30,40,48,56,64,78],["Anderson Squat","r",.30,.52,.85,1.10,1.28,1.45,1.68,2.02],["Safety Bar Squat","r",.35,.60,.95,1.22,1.40,1.58,1.85,2.25],["Split Squat","a",6,14,24,32,38,44,50,60],["Tempo Squat","r",.30,.52,.85,1.10,1.28,1.45,1.68,2.02],["Cyclist Squat","a",6,14,26,34,40,46,52,64],["Jump Squat (reps)","a",3,8,16,24,30,38,46,58],["Pistol Squat (reps)","a",0,1,3,6,10,14,18,24],["TRX Squat (reps)","a",5,12,22,32,40,48,58,72],["Leg Press (Wide)","r",.65,1.15,1.85,2.40,2.80,3.20,3.75,4.50],["Cable Squat","a",6,14,24,34,40,48,56,68],["Skater Squat (reps)","a",1,3,6,10,14,18,24,32],["Hatfield Squat","r",.35,.60,.95,1.22,1.40,1.58,1.85,2.25],["1.5 Rep Squat","r",.28,.48,.78,.98,1.15,1.30,1.50,1.82]]),
hm:mk([["Romanian DL (BB)","r",.35,.58,.92,1.18,1.35,1.55,1.82,2.15],["Lying Leg Curl","a",8,18,35,48,56,64,72,86],["Seated Leg Curl","a",10,22,38,52,60,68,78,92],["Standing Leg Curl","a",4,10,20,28,34,40,46,56],["Nordic Ham Curl (reps)","a",0,2,5,8,10,12,15,20],["Glute-Ham Raise (reps)","a",0,2,6,10,14,18,22,30],["DB Romanian DL","a",8,18,30,40,46,52,60,72],["Single-Leg RDL","a",4,10,18,26,32,38,44,54],["Stiff-Leg DL (DB)","a",8,16,28,38,44,50,58,70],["Cable Pull-Through","a",6,14,24,34,40,46,54,66],["Stability Ball Curl (reps)","a",3,8,14,20,26,32,38,50],["Sliding Leg Curl (reps)","a",2,6,12,18,24,30,36,48],["KB Swing","a",8,16,24,32,38,44,52,64],["Banded Leg Curl (reps)","a",4,10,18,26,32,38,46,58],["Band Good Morning","a",4,10,18,28,34,40,48,60],["GHD Sit-up (reps)","a",3,8,16,24,30,38,48,62],["Kettlebell DL","a",8,18,30,40,48,56,64,78],["Barbell Curl DL","r",.30,.52,.85,1.10,1.28,1.45,1.68,2.02],["Reverse Hyper Ham","a",0,6,14,22,28,34,42,54],["Swiss Ball Hamstring","a",2,6,12,18,24,30,38,48],["RDL (Single Arm DB)","a",4,10,18,26,32,38,44,54],["Hip Hinge Machine","a",12,26,42,56,66,76,86,104],["Band RDL","a",4,10,18,28,34,40,48,60],["Slider Nordic (reps)","a",0,2,5,8,10,12,15,20],["Band Hamstring Curl (reps)","a",5,12,22,32,40,48,58,72]]),
cv:mk([["Standing Calf Raise","r",.35,.65,1.10,1.40,1.60,1.78,2.10,2.52],["Seated Calf Raise","a",12,25,45,62,72,82,95,115],["Leg Press Calf Raise","r",.45,.80,1.30,1.65,1.88,2.10,2.48,2.98],["Donkey Calf Raise","r",.35,.65,1.10,1.40,1.60,1.78,2.10,2.52],["Smith Calf Raise","r",.25,.48,.82,1.08,1.25,1.40,1.62,1.95],["DB Calf Raise","a",6,14,26,34,40,46,52,64],["BW Calf Raise (reps)","a",8,20,35,48,56,65,75,95],["Tibialis Raise (reps)","a",5,12,22,30,36,42,50,65],["Single Leg Calf Raise","a",0,5,12,20,26,32,38,48],["Jump Rope Calf (reps)","a",20,40,60,80,100,120,150,200],["Calf Hold (seconds)","a",10,20,35,50,65,80,100,130],["Explosive Calf Raise","a",8,18,32,44,52,60,70,86],["Machine Calf Raise","a",15,30,50,68,80,92,105,128],["Deficit Calf Raise","a",6,14,26,34,40,46,52,64],["Band Calf Raise","a",5,12,22,30,38,46,54,66],["Calf Press (Machine)","a",15,32,52,70,82,94,108,130],["Eccentric Calf Raise","a",8,18,32,44,52,60,70,86],["Barbell Calf Raise","r",.30,.55,.90,1.15,1.35,1.55,1.80,2.15],["Toe Press (Leg Press)","a",15,30,50,68,80,92,105,128],["Stair Calf Raise","a",0,5,12,20,26,32,38,48],["Wall Calf Raise (reps)","a",8,20,35,48,56,65,75,95],["Single Leg Seated Calf","a",6,14,26,34,40,46,52,64]]),
bi:mk([["BB Curl","r",.12,.25,.40,.50,.58,.65,.75,.92],["DB Curl","a",4,8,14,20,24,28,32,40],["Hammer Curl","a",4,10,16,22,26,30,36,44],["Preacher Curl","a",4,10,18,24,28,34,40,50],["EZ-Bar Curl","r",.12,.24,.38,.48,.55,.62,.72,.88],["Concentration Curl","a",3,7,12,18,22,26,30,38],["Cable Curl","a",4,10,20,28,32,38,44,54],["Incline DB Curl","a",3,7,12,18,22,26,30,38],["Spider Curl","a",3,7,12,18,22,26,30,38],["Machine Bicep Curl","a",6,15,28,38,44,52,58,70],["Reverse Curl","a",4,8,16,22,26,32,38,48],["Cable Hammer Curl","a",4,10,18,24,28,34,40,50],["Bayesian Curl","a",3,6,12,18,22,26,30,38],["Zottman Curl","a",3,7,12,18,22,26,30,38],["Cross-Body Hammer","a",4,10,16,22,26,30,36,44],["21s Curl","a",3,7,12,18,22,26,30,38],["Drag Curl","r",.10,.20,.34,.44,.50,.58,.68,.82],["Waiter Curl","a",3,7,12,18,22,26,30,38],["Cable Preacher Curl","a",4,10,18,24,28,34,40,50],["Overhead Cable Curl","a",3,7,14,20,24,28,34,42],["Scott Curl","a",3,7,12,18,22,26,30,38],["Machine Preacher Curl","a",4,10,18,24,28,34,40,50],["Plate Curl","a",5,10,16,22,26,30,36,44],["Band Curl (reps)","a",5,12,22,32,40,48,58,72],["Cheat Curl","r",.15,.28,.45,.58,.68,.78,.92,1.12],["DB Preacher Curl","a",3,7,12,18,22,26,30,38],["Cable Concentration Curl","a",3,6,12,18,22,26,30,38],["Incline Hammer Curl","a",3,7,12,18,22,26,30,38],["TRX Curl (reps)","a",3,8,14,22,28,34,42,55],["Prone Incline Curl","a",3,6,12,18,22,26,30,38]]),
tr:mk([["Tricep Pushdown","a",6,15,28,40,48,56,64,78],["Skull Crushers","a",6,14,26,34,40,46,54,66],["Overhead Tricep Ext","a",5,12,22,30,36,42,48,58],["Close Grip Bench","r",.25,.45,.72,.90,1.02,1.15,1.35,1.62],["Dips - Tricep (reps)","a",1,5,12,18,24,30,38,52],["Cable Overhead Ext","a",5,12,22,30,36,42,48,58],["Tricep Kickback","a",2,5,10,15,18,22,26,34],["Diamond Push-ups (reps)","a",1,6,15,22,28,35,42,58],["JM Press","r",.18,.32,.50,.65,.75,.85,1.00,1.22],["Machine Tricep Ext","a",8,18,34,46,54,62,72,86],["French Press (BB)","a",6,14,24,32,38,44,50,62],["Rope Pushdown","a",5,12,24,34,42,50,58,72],["Single Arm Pushdown","a",3,7,14,20,24,28,34,42],["Bench Dip (reps)","a",3,8,16,24,30,38,48,65],["Tate Press","a",4,10,18,26,32,38,44,54],["California Press","r",.20,.38,.60,.78,.88,1.00,1.18,1.42],["Bodyweight Skull Crusher (reps)","a",2,6,14,22,28,36,46,60],["Band Pushdown (reps)","a",5,12,22,32,40,48,58,72],["Close Grip Floor Press","r",.22,.40,.65,.82,.95,1.08,1.25,1.50],["EZ Skull Crusher","a",5,12,22,30,36,42,48,58],["Overhead Cable Tricep Ext","a",5,12,22,30,36,42,48,58],["Seated Tricep Press","a",5,12,22,30,36,42,48,58],["Lying Cable Tricep Ext","a",5,12,22,30,36,42,48,58],["DB Skull Crusher","a",4,10,20,28,34,40,46,56],["Overhead Band Ext (reps)","a",5,12,22,32,40,48,58,72],["Dip to Lockout (reps)","a",2,6,14,22,28,36,46,60]]),
fa:mk([["Wrist Curl (BB)","a",5,12,22,30,36,42,50,62],["Rev Wrist Curl","a",3,7,14,20,24,28,34,42],["Farmer Walk (Forearm)","a",12,24,38,48,56,62,70,84],["Dead Hang (seconds)","a",10,20,40,60,75,90,110,140],["Plate Pinch (seconds)","a",5,12,22,32,40,48,58,75],["Wrist Roller","a",2,5,10,16,20,24,28,36],["Towel Hang (seconds)","a",5,12,25,40,50,62,78,100],["Gripper (reps)","a",3,8,16,24,30,38,48,62],["DB Wrist Curl","a",3,8,16,22,28,34,40,50],["Wrist Extension","a",2,5,10,16,20,24,28,36],["Hammer Hold (seconds)","a",8,16,30,45,55,68,82,105],["Fat Grip Curl","a",3,6,12,18,22,26,30,38],["Rice Bucket (seconds)","a",15,30,50,70,90,110,135,170],["Band Wrist Curl","a",3,8,16,22,28,34,40,50],["Pinch Grip DL","a",8,18,30,40,48,56,64,78],["Wrist Twist","a",2,5,10,16,20,24,28,36],["Finger Curl","a",3,8,16,22,28,34,40,50]]),
gl:mk([["BB Hip Thrust","r",.35,.62,1.05,1.35,1.55,1.72,2.05,2.48],["Glute Bridge (BB)","r",.25,.48,.82,1.08,1.25,1.40,1.62,1.95],["Cable Kickback","a",3,8,16,22,26,32,38,48],["Machine Hip Thrust","a",15,38,68,90,105,120,142,172],["Sumo DL (Glute)","r",.45,.75,1.20,1.52,1.72,1.92,2.38,2.85],["Good Mornings (Glute)","r",.15,.35,.58,.75,.85,.95,1.12,1.35],["Donkey Kick (weighted)","a",0,4,10,16,20,24,30,38],["Step-ups (Glute)","a",4,10,20,28,34,40,46,56],["Frog Pumps (reps)","a",5,12,22,32,40,48,58,75],["Single Leg HT (reps)","a",2,6,14,22,28,34,42,55],["Pull-Through (Cable)","a",6,14,24,34,40,46,54,66],["Single Leg RDL (Glute)","a",4,10,18,26,32,38,44,54],["Glute Back Ext","a",0,6,14,22,28,34,42,54],["Fire Hydrant (reps)","a",5,12,22,32,40,48,58,75],["Smith Hip Thrust","r",.30,.55,.92,1.18,1.35,1.55,1.82,2.15],["Banded Hip Thrust (reps)","a",5,12,22,32,40,48,58,75],["Weighted Glute Bridge","a",0,6,14,22,28,34,42,54],["Reverse Lunge (Glute)","a",4,10,20,28,34,40,46,56],["Curtsy Lunge (Glute)","a",4,10,20,28,34,40,46,56],["Cable Hip Abduction","a",3,8,16,22,26,32,38,48],["Band Clamshell (reps)","a",8,16,28,38,48,58,70,88],["Lateral Band Walk (reps)","a",8,16,26,36,44,52,62,78],["Frog Walk (reps)","a",3,8,14,22,28,34,42,54]]),
ab:mk([["Cable Crunch","a",6,15,28,40,48,56,64,78],["Hanging Leg Raise (reps)","a",1,4,8,12,16,20,26,35],["Ab Rollout (reps)","a",1,4,8,12,16,20,26,35],["Plank (seconds)","a",15,30,60,90,120,150,180,240],["Dragon Flag (reps)","a",0,1,4,7,10,12,15,20],["Machine Crunch","a",8,18,34,46,54,62,72,86],["V-ups (reps)","a",3,8,16,24,30,36,44,58],["Toes-to-Bar (reps)","a",0,2,6,10,14,18,24,32],["Decline Situp (weighted)","a",0,5,12,18,24,30,38,48],["Weighted Crunch","a",0,4,10,16,22,28,34,44],["L-Sit Hold (seconds)","a",2,5,12,20,28,36,45,60],["Hollow Body Hold (seconds)","a",8,18,32,45,58,72,90,120],["Flutter Kicks (reps)","a",10,20,35,50,65,80,100,130],["Stomach Vacuum (seconds)","a",5,12,22,32,42,55,70,90],["Leg Raise (reps)","a",3,8,16,24,30,38,48,62],["Bear Crawl Hold (seconds)","a",10,20,35,50,65,80,100,130],["GHD Sit-up Ab (reps)","a",3,8,16,24,30,38,48,62],["Pallof Crunch","a",3,8,16,22,26,32,38,48],["Sit-up (reps)","a",5,12,25,38,48,58,72,92],["Crunch (reps)","a",5,14,28,40,50,60,75,95],["Mountain Climber Ab (reps)","a",10,20,35,50,65,80,100,130],["Reverse Crunch (reps)","a",5,12,22,32,40,48,58,75],["Dish Hold (seconds)","a",8,16,30,45,58,72,90,115]]),
ob:mk([["Russian Twist (kg)","a",0,4,8,14,18,22,28,36],["Woodchoppers (Cable)","a",4,10,20,28,34,40,46,56],["Pallof Press","a",4,8,16,22,26,32,38,48],["Side Plank (seconds)","a",8,18,35,50,60,72,85,110],["Bicycle Crunch (reps)","a",4,12,26,38,48,58,70,92],["Landmine Rotation","a",4,8,16,22,26,32,38,48],["Suitcase Carry (per hand)","a",8,18,30,40,46,52,60,72],["Copenhagen Plank (seconds)","a",5,12,22,32,40,48,58,75],["Windshield Wipers (reps)","a",2,5,10,16,20,26,32,42],["Dead Bug (reps)","a",4,10,18,26,32,38,46,58],["Bird Dog (reps)","a",4,10,18,26,32,38,46,58],["Single Arm Farmer Walk","a",8,18,30,40,46,52,60,72],["Cable Oblique Crunch","a",4,10,20,28,34,40,46,56],["Hanging Oblique Raise (reps)","a",2,5,10,16,22,28,36,48],["Side Bend (DB)","a",6,14,24,34,40,48,56,68],["Turkish Get-up","a",4,8,14,20,26,32,40,50],["Oblique Cable Twist","a",4,10,20,28,34,40,46,56],["Plate Twist (reps)","a",5,12,22,32,40,48,58,75],["Half Turkish Getup","a",3,6,12,18,24,30,38,48],["Banded Pallof (reps)","a",5,12,22,32,40,48,58,72]]),
ca:mk([["Running","p",8.0,7.0,6.0,5.2,4.8,4.4,4.0,3.5],["Rowing","p",3.2,2.8,2.4,2.1,2.0,1.9,1.75,1.55],["Cycling","p",4.0,3.2,2.5,2.1,1.9,1.75,1.6,1.4],["Swimming","p",4.5,3.8,3.0,2.6,2.4,2.2,2.0,1.7],["Elliptical","p",6.0,5.0,4.2,3.6,3.3,3.0,2.7,2.3],["Stair Climber","p",7.0,5.5,4.5,3.8,3.4,3.1,2.8,2.4],["Jump Rope (reps/min)","a",20,40,65,90,110,130,155,195],["Box Jump (cm)","a",30,45,60,75,85,95,105,120],["Burpees 1min (reps)","a",5,10,16,22,26,30,35,42],["Sprint 100m (seconds)","pl",18,15.5,13.5,12.5,12,11.5,11,10.5],["Sprint 400m (seconds)","pl",100,85,72,65,60,56,52,48],["Battle Ropes (reps/min)","a",30,50,80,110,130,150,180,220],["Sled Push (m/min)","a",5,10,18,26,32,38,46,58],["Ski Erg (sec/500m)","pl",160,140,120,108,100,94,88,80],["Assault Bike (cal/min)","a",5,10,16,22,26,30,36,44],["Hiking (km/hr)","a",3,4,5,6,6.5,7,7.5,8.5],["Mountain Climbers (reps/min)","a",20,35,55,75,90,105,125,155],["Bear Crawl (m/min)","a",5,10,18,28,36,44,54,68],["Treadmill Walk (km/hr)","a",4,5,6,6.5,7,7.5,8,9],["Incline Walk (km/hr)","a",3,4,5,5.5,6,6.5,7,8],["Prowler Push (m/min)","a",5,10,18,26,32,38,46,58],["Versa Climber (cal/min)","a",4,8,14,20,24,28,34,42],["Rowing Sprint (cal/min)","a",6,12,20,28,34,40,48,58],["Jacob Ladder (cal/min)","a",5,10,16,22,26,30,36,44],["Airdyne Bike (cal/min)","a",4,8,14,20,24,28,34,42],["Walk (km/hr)","a",3,4,5,5.5,6,6.5,7,8],["Sprint 200m (seconds)","pl",45,38,32,28,26,24,22,20],["Jumping Jacks (reps/min)","a",30,50,70,90,110,130,155,190],["High Knees (reps/min)","a",30,50,75,100,120,140,165,200],["Kettlebell Cardio (cal/min)","a",4,8,14,20,24,28,34,42],["Farmer Walk Cardio","a",10,20,32,42,50,58,68,82],["Sled Drag (m/min)","a",5,10,18,26,32,38,46,58],["Shadow Boxing (reps/min)","a",30,50,80,110,130,150,180,220],["Tabata Sprints (reps)","a",4,6,8,10,12,14,16,20],["Sandbag Carry (m/min)","a",5,10,18,26,32,38,46,58],["Tire Flip (reps)","a",2,5,10,16,22,28,36,48],["Rope Climb (reps)","a",0,1,3,5,7,9,12,16],["Burpee Box Jump (reps)","a",3,6,10,16,20,24,30,38]]),
};

// LEGS - QUADS form guides
FG["BB Back Squat"]=["Bar on upper traps, feet shoulder width","Break at hips and knees together","Descend to parallel or below","Drive up through midfoot, squeeze glutes"];
FG["Front Squat"]=["Bar on front delts, elbows HIGH","Stay upright, descend deep","Knees track over toes","Drive up, keep elbows high"];
FG["Leg Press"]=["Feet shoulder width on platform","Lower until knees at 90°","Press through full foot","Don't lock knees at top"];
FG["Leg Extension"]=["Sit, pad on lower shins","Extend fully, squeeze quads","Hold 1s at top","3s eccentric down"];
FG["Hack Squat"]=["Shoulders under pads","Lower by bending knees","Full depth, drive up","Back against pad"];
FG["Bulgarian Split Squat"]=["Rear foot on bench","Lower until front thigh parallel","Drive through front heel","Keep torso upright"];
FG["Goblet Squat"]=["Hold DB/KB at chest","Squat between legs","Elbows inside knees","Drive up, squeeze glutes"];
FG["Smith Squat"]=["Feet slightly forward","Squat down, guided bar","Press to lockout","Good for learning"];
FG["Pendulum Squat"]=["Load machine, stand on platform","Arc-like squat motion","Targets quads heavily","Joint-friendly"];
FG["Belt Squat"]=["Belt around hips","Squat without spinal load","Great for back issues","Pure leg work"];
FG["DB Squat"]=["DBs at sides","Squat, knees track toes","Drive through midfoot","Simple but effective"];
FG["Sissy Squat (weighted)"]=["Hold weight, heels up","Lean back, knees forward","Extreme quad stretch","Return to standing"];
FG["Lunges (per leg)"]=["Step forward into lunge","Lower rear knee near floor","Drive through front heel","Alternate legs"];
FG["Walking Lunge"]=["Step forward, keep walking","Each step is a lunge","Don't pause between","Quads and glutes"];
FG["Step-ups (per leg)"]=["Step onto box/bench","Drive up, stand on top","Step down controlled","All work on lead leg"];
FG["Single Leg Press"]=["One foot on platform","Press with single leg","Lower under control","Fixes imbalances"];
FG["Zercher Squat"]=["Bar in crook of elbows","Squat down, bar close","Stand, brace core hard","Builds core strength"];
FG["Wall Sit (seconds)"]=["Back against wall, thighs parallel","Hold position","Burning is normal","Isometric quad builder"];
FG["Spanish Squat"]=["Band around knees anchored behind","Lean back, squat","Shins stay vertical","Great for knee issues"];
FG["Close Stance Leg Press"]=["Feet close on platform","More quad emphasis","Lower to 90°","Don't let knees cave"];
// LEGS - HAMSTRINGS
FG["Romanian DL (BB)"]=["Slight knee bend fixed","Push hips BACK, bar close","Feel hamstring stretch","Squeeze glutes to return"];
FG["Lying Leg Curl"]=["Face down, pad on calves","Curl heels to glutes","Squeeze hamstrings","3s lower"];
FG["Seated Leg Curl"]=["Sit, pad on calves","Curl under seat","Squeeze at bottom","Slow return"];
FG["Standing Leg Curl"]=["One leg, pad on calf","Curl heel to glute","Squeeze hamstring","Switch legs"];
FG["Nordic Ham Curl (reps)"]=["Kneel, ankles secured","Lower forward slowly","Hamstrings control descent","Push off floor if needed"];
FG["Glute-Ham Raise (reps)"]=["Lock into GHD","Lower torso, knees pivot","Curl back up","Very challenging"];
FG["DB Romanian DL"]=["DBs at sides, hinge","Push hips back","Stretch hamstrings","Stand, squeeze glutes"];
FG["Single-Leg RDL"]=["One leg, hinge forward","Rear leg extends back","Single-leg stretch","Squeeze glute up"];
FG["Stiff-Leg DL (DB)"]=["DBs at sides, legs straight","Hinge forward, max stretch","Stand slowly","Very hamstring focused"];
FG["Cable Pull-Through"]=["Face away, rope between legs","Hinge, pull through","Squeeze glutes at top","Great hip hinge drill"];
FG["Stability Ball Curl (reps)"]=["Back on floor, heels on ball","Curl ball toward you","Hips stay up","Challenging stabilization"];
FG["Sliding Leg Curl (reps)"]=["Back down, feet on sliders","Curl heels to glutes","Hips elevated","Bodyweight hamstring"];
FG["KB Swing"]=["Stand over KB, hinge to grip","Swing with hip drive","HINGE don't squat","Powerful hip extension"];
FG["Banded Leg Curl (reps)"]=["Band on ankle and post","Curl heel to glute","Constant tension","Great home exercise"];
// CALVES
FG["Standing Calf Raise"]=["Balls of feet on edge","Rise as high as possible","Hold peak 2s","Lower below platform"];
FG["Seated Calf Raise"]=["Pad on knees, balls on platform","Press up on toes","Hold at top","Lower for stretch"];
FG["Leg Press Calf Raise"]=["Feet at bottom of platform","Press with toes only","Hold at top","Lower for stretch"];
FG["Donkey Calf Raise"]=["Hinge at hips, weight on back","Rise on toes","Full ROM","Classic builder"];
FG["Smith Calf Raise"]=["In Smith, balls on block","Rise on toes","Hold, squeeze","Lower below block"];
FG["DB Calf Raise"]=["Hold DBs, stand on step edge","Rise on toes","Slow controlled","Can do single-leg"];
FG["BW Calf Raise (reps)"]=["On step edge, no weight","Rise as high as possible","Hold 2s","Lower below step"];
FG["Tibialis Raise (reps)"]=["Against wall, heels on floor","Raise toes toward shins","Hold at top","Prevents shin splints"];
FG["Single Leg Calf Raise"]=["One foot on edge","Rise up, full range","Slow eccentric","Fixes imbalances"];
FG["Jump Rope Calf (reps)"]=["Jump rope on toes","Quick bouncing","Burns calves intensely","Cardio + calf combo"];
FG["Calf Hold (seconds)"]=["Rise to peak contraction","Hold as long as possible","Isometric builder","Great finisher"];
FG["Explosive Calf Raise"]=["Rise quickly, pause at top","Lower slowly 3s","Builds calf power","Moderate weight"];
// BICEPS
FG["BB Curl"]=["Stand, grip shoulder width","Pin elbows at sides","Curl up, squeeze at top","Lower under control"];
FG["DB Curl"]=["DBs at sides","Curl alternating or together","Squeeze at top","Don't swing"];
FG["Hammer Curl"]=["Neutral grip, palms face each other","Curl up keeping neutral","Targets brachialis","Lower slowly"];
FG["Preacher Curl"]=["Armpits on pad","Curl from full extension","Squeeze at top","Lower ALL the way"];
FG["EZ-Bar Curl"]=["Grip angled portions","Curl up, elbows pinned","Comfortable on wrists","Lower under control"];
FG["Concentration Curl"]=["Sit, elbow on inner thigh","Curl to shoulder","Squeeze hard at top","Pure isolation"];
FG["Cable Curl"]=["Low cable, bar or rope","Curl against tension","Squeeze at top","Lower slowly"];
FG["Incline DB Curl"]=["45° bench, arms hang back","Curl up","Great stretch","Full ROM"];
FG["Spider Curl"]=["Chest down on incline","Arms hang, curl up","No cheating","Squeeze at top"];
FG["Machine Bicep Curl"]=["Sit, pad on arms","Curl handles up","Guided movement","Good for beginners"];
FG["Reverse Curl"]=["Overhand grip","Curl with palms down","Forearm + brachioradialis","Lower slowly"];
FG["Cable Hammer Curl"]=["Rope on low cable","Neutral grip curl","Constant tension","Brachialis focus"];
FG["Bayesian Curl"]=["Face away from cable","Curl from behind body","Incredible stretch","Unique angle"];
FG["Zottman Curl"]=["Curl up supinated","Rotate pronated at top","Lower overhand","Best of both"];
FG["Cross-Body Hammer"]=["Curl DB across body","Hammer grip","Long head focus","Alternate arms"];
FG["21s Curl"]=["7 bottom, 7 top, 7 full","No rest between","Massive pump","Lighter weight"];
FG["Drag Curl"]=["Curl while dragging along body","Elbows go BACK","Bar rides up torso","Long head target"];
FG["Waiter Curl"]=["Hold DB by top like tray","Curl up keeping flat","Bicep peak focus","Unique contraction"];
FG["Cable Preacher Curl"]=["Low cable + preacher bench","Curl against tension","Constant throughout","Full stretch"];
FG["Overhead Cable Curl"]=["High cables, curl to ears","Double bicep pose","Squeeze hard","Peak builder"];
// TRICEPS
FG["Tricep Pushdown"]=["Cable top, bar/rope","Push down, elbows pinned","Full extension, squeeze","Return slowly"];
FG["Skull Crushers"]=["Bench, EZ-bar overhead","Lower to forehead, elbows only","Extend to lockout","Elbows stay vertical"];
FG["Overhead Tricep Ext"]=["DB overhead, both hands","Lower behind head","Extend to lockout","Feel stretch at bottom"];
FG["Close Grip Bench"]=["Hands shoulder width","Bench, elbows close","Lock out, squeeze","Lower to lower chest"];
FG["Dips - Tricep (reps)"]=["Bars, stay upright","Lower arms to 90°","Press to lockout","Body vertical"];
FG["Cable Overhead Ext"]=["Face away, rope overhead","Extend forward","Squeeze triceps","Constant tension"];
FG["Tricep Kickback"]=["Hinge, upper arm parallel","Extend forearm back","Squeeze at extension","Strict form"];
FG["Diamond Push-ups (reps)"]=["Hands diamond shape","Lower chest to hands","Press up","Harder than regular"];
FG["JM Press"]=["Hybrid skull crusher + close grip","Lower to chin area","Press to lockout","Unique builder"];
FG["Machine Tricep Ext"]=["Handles at ears","Press to extension","Squeeze at bottom","Return slowly"];
FG["French Press (BB)"]=["BB overhead seated/standing","Lower behind head","Extend to lockout","Deep stretch"];
FG["Rope Pushdown"]=["Rope at top cable","Push down and apart","Split rope at bottom","Squeeze"];
FG["Single Arm Pushdown"]=["One arm at cable","Full extension","Switch arms","Fix imbalances"];
FG["Bench Dip (reps)"]=["Hands on bench behind","Lower by bending arms","Press back up","Feet out = harder"];
FG["Tate Press"]=["Flat, DBs up, elbows out","Lower to chest bending elbows","Press back up","Unique angle"];
FG["California Press"]=["Close grip + skull crusher hybrid","Lower to upper chest","Press up","Powerlifting builder"];
// FOREARMS
FG["Wrist Curl (BB)"]=["Forearms on bench, palms up","Curl wrists up","Squeeze","Lower slowly"];
FG["Rev Wrist Curl"]=["Palms down","Extend wrists up","Squeeze extensors","Lower slowly"];
FG["Farmer Walk (Forearm)"]=["Heavy weights at sides","Walk tall","Crush grip","Overall strength"];
FG["Dead Hang (seconds)"]=["Overhand grip, hang","Hold as long as possible","Grip endurance","Shoulder decompression"];
FG["Plate Pinch (seconds)"]=["Pinch 2 plates smooth out","Hold at sides","Pinch grip","Drop when failing"];
FG["Wrist Roller"]=["Hold roller, weight hanging","Roll up then down","Killer burn","Light weight enough"];
FG["Towel Hang (seconds)"]=["Towels over bar, hang","Extremely challenging","Thick forearms","Functional grip"];
FG["Gripper (reps)"]=["Hand grippers","Squeeze to close","Crushing grip","Progressive resistance"];
// GLUTES
FG["BB Hip Thrust"]=["Back on bench, bar over hips","Drive hips up, squeeze glutes","Full extension, hold 2s","Lower until butt near floor"];
FG["Glute Bridge (BB)"]=["Floor, bar over hips","Drive hips up","Squeeze 2s","Lower under control"];
FG["Cable Kickback"]=["Ankle strap, face cable","Kick back, squeeze glute","Don't arch back","Slow return"];
FG["Machine Hip Thrust"]=["Pad on hips","Drive forward","Squeeze at top","Slow eccentric"];
FG["Sumo DL (Glute)"]=["Wide stance, inside grip","Drive hips forward","Squeeze glutes at lock","Great builder"];
FG["Good Mornings (Glute)"]=["Bar on back, slight bend","Hinge at hips","Feel stretch","Squeeze glutes up"];
FG["Donkey Kick (weighted)"]=["All fours, weight behind knee","Kick heel up","Squeeze at top","Don't arch"];
FG["Step-ups (Glute)"]=["High box, drive through heel","Full hip extension","Lower slowly","Lead leg does work"];
FG["Frog Pumps (reps)"]=["Back down, soles together","Thrust hips up","Squeeze at top","Activation drill"];
FG["Single Leg HT (reps)"]=["One foot, other extended","Thrust on single leg","Squeeze hard","Switch sides"];
FG["Pull-Through (Cable)"]=["Away from cable, rope between legs","Hinge and pull","Squeeze glutes","Hip hinge pattern"];
FG["Single Leg RDL (Glute)"]=["One leg, hinge forward","Rear leg extends","Hamstring+glute stretch","Squeeze up"];
FG["Glute Back Ext"]=["Back extension, round upper back","Focus on glute squeeze","Only to neutral","Isolates from erectors"];
FG["Fire Hydrant (reps)"]=["All fours, lift knee out","Hold, squeeze","Lower controlled","Glute med exercise"];
// ABS
FG["Cable Crunch"]=["Kneel, rope behind head","Crunch by flexing abs","Don't pull with arms","Hold 1s"];
FG["Hanging Leg Raise (reps)"]=["Hang from bar","Raise legs to parallel+","Control swing","Lower slowly"];
FG["Ab Rollout (reps)"]=["Kneel with wheel","Roll forward, extend","Pull back with abs","Don't collapse"];
FG["Plank (seconds)"]=["Forearms+toes, body straight","Core tight, don't sag","Breathe steadily","Hold position"];
FG["Dragon Flag (reps)"]=["Bench, grip behind head","Raise body rigid","Lower slowly","Bruce Lee's move"];
FG["Machine Crunch"]=["Sit, pad at chest","Crunch against resistance","Squeeze abs","Return slowly"];
FG["V-ups (reps)"]=["Flat, arms overhead","Raise legs and torso together","Touch toes at top","Lower to start"];
FG["Toes-to-Bar (reps)"]=["Hang from bar","Toes touch bar","Control movement","Lower controlled"];
FG["Decline Situp (weighted)"]=["Decline bench, weight at chest","Sit up fully","Lower slowly","Weighted for progression"];
FG["Weighted Crunch"]=["Flat, weight on chest","Crunch, shoulders off floor","Squeeze at top","Lower slowly"];
FG["L-Sit Hold (seconds)"]=["Support on bars/floor","Legs up to L position","Hold straight legs","Incredible core strength"];
FG["Hollow Body Hold (seconds)"]=["On back, arms+legs extended","Lift shoulders and feet slightly","Hold position","Gymnastic core builder"];
FG["Flutter Kicks (reps)"]=["On back, legs slightly up","Alternate kicking","Small quick movements","Core stays engaged"];
// OBLIQUES
FG["Russian Twist (kg)"]=["Sit, lean back, feet up","Rotate side to side with weight","Touch floor each side","Control the rotation"];
FG["Woodchoppers (Cable)"]=["Cable at high/low position","Chop diagonally across","Rotate through core","Control both directions"];
FG["Pallof Press"]=["Cable at chest height, sideways","Press forward, resist rotation","Hold extended","Anti-rotation strength"];
FG["Side Plank (seconds)"]=["Forearm+feet, body straight","Hold side position","Don't let hips drop","Switch sides"];
FG["Bicycle Crunch (reps)"]=["On back, hands behind head","Elbow to opposite knee","Rotate fully","Alternate sides"];
FG["Landmine Rotation"]=["Hold landmine end at arm's length","Rotate to each side","Control the arc","Core stays braced"];
FG["Suitcase Carry (per hand)"]=["Heavy DB in one hand","Walk without leaning","Core fights lateral flexion","Switch sides"];
FG["Copenhagen Plank (seconds)"]=["Side plank, top leg on bench","Hold position","Very challenging adductors+obliques","Switch sides"];
FG["Windshield Wipers (reps)"]=["Hang or lie, legs up","Rotate legs side to side","Control throughout","Advanced movement"];
FG["Dead Bug (reps)"]=["Back down, arms up, knees 90°","Extend opposite arm+leg","Keep lower back flat","Alternate sides"];
FG["Bird Dog (reps)"]=["All fours","Extend opposite arm+leg","Hold 2s","Return, switch sides"];
// CARDIO
FG["Running"]=["Steady pace or intervals","Track distance and time","Lower pace = better rank","Great overall cardio"];
FG["Rowing"]=["Drive with legs first","Then lean back, pull to chest","Return arms, body, legs","Full body cardio"];
FG["Cycling"]=["Maintain cadence 70-90 RPM","Track distance and time","Adjust resistance","Low impact cardio"];
FG["Swimming"]=["Full stroke technique","Track distance and time","Great full body workout","Easy on joints"];
FG["Elliptical"]=["Upright posture","Smooth stride","Use arms for full body","Track distance and time"];
FG["Stair Climber"]=["Upright, don't lean on handles","Steady step pace","Great for legs + cardio","Track floors or distance"];
FG["Jump Rope (reps/min)"]=["Stay on toes","Small quick jumps","Wrists drive rotation","Count reps per minute"];
FG["Box Jump (cm)"]=["Stand facing box","Explode up, land softly","Step down, don't jump","Measure box height"];
FG["Burpees 1min (reps)"]=["Squat, kick back, push-up","Jump up with hands overhead","Count reps in 1 minute","Full body conditioning"];
FG["Sprint 100m (seconds)"]=["Explosive start","Drive arms hard","Max effort","Time your 100m"];
FG["Sprint 400m (seconds)"]=["Strong start, maintain pace","Push through the curve","Kick at the end","Time your 400m"];
FG["Battle Ropes (reps/min)"]=["Alternating wave motion","Keep intensity high","Count waves per minute","Great upper body cardio"];
FG["Sled Push (m/min)"]=["Low position, drive legs","Push for distance","Track meters per minute","Brutal conditioning"];
FG["Ski Erg (sec/500m)"]=["Pull handles down with lats","Hip hinge pattern","Track pace per 500m","Full body cardio"];
FG["Assault Bike (cal/min)"]=["All out effort","Arms and legs together","Track calories per minute","Brutal but effective"];
FG["Hiking (km/hr)"]=["Steady walking pace","Track speed","Outdoor cardio","Great active recovery"];
FG["Mountain Climbers (reps/min)"]=["Plank position","Drive knees to chest alternating","Fast pace","Count total reps"];
FG["Bear Crawl (m/min)"]=["All fours, knees off ground","Crawl forward","Track distance","Full body coordination"];

export const TOTAL_EX = Object.values(EX).reduce((a, arr) => a + arr.length, 0);
export const fE = (rid, nm) => (EX[rid] || []).find(e => e.n === nm);
export const e1 = (w, r) => { if (r <= 0 || w <= 0) return 0; if (r === 1) return w; return w * (36 / (37 - r)); };
export const gRI = (ex, v, bw, g) => { const m = g === "female" ? .65 : 1; if (ex.t === "pace" || ex.t === "pace_lower") { const s = ex.s.map(x => x * m); for (let j = s.length - 1; j >= 0; j--) if (v <= s[j]) return j; return 0; } const s = ex.s.map(x => ex.t === "r" ? x * bw * m : x * m); for (let j = s.length - 1; j >= 0; j--) if (v >= s[j]) return j; return 0; };
export const gPR = (ex, v, bw, g) => { const m = g === "female" ? .65 : 1; const il = ex.t === "pace" || ex.t === "pace_lower"; const s = ex.s.map(x => ex.t === "r" ? x * bw * m : x * m); const ri = gRI(ex, v, bw, g); if (ri >= 7) return { p: 1, nt: s[7], cur: v }; const lo = s[ri], hi = s[ri + 1]; let p; if (il) p = Math.min(1, Math.max(0, (lo - v) / (lo - hi))); else p = Math.min(1, Math.max(0, (v - lo) / (hi - lo))); return { p, nt: hi, cur: v }; };
export const HEAVY_COMPOUND = ["BB Bench Press", "BB Back Squat", "Conv Deadlift", "Front Squat", "Hex Bar DL", "Sumo DL", "Decline BB Bench", "Incline BB Bench", "BB Hip Thrust"];
export const MED_COMPOUND = ["BB Row", "OHP (Barbell)", "Push Press", "Romanian DL (BB)", "T-Bar Row", "Close Grip Bench", "Hack Squat", "Leg Press", "DB Bench Press", "DB Shoulder Press"];
export const getRestSec = (n) => { if (HEAVY_COMPOUND.some(c => n === c)) return 180; if (MED_COMPOUND.some(c => n === c)) return 120; if (n.includes("(reps)") || n.includes("(sec") || n.includes("Plank") || n.includes("Hold")) return 60; return 90; };
export const getSets = (n) => { if (n.includes("(reps)") || n.includes("(sec") || n.includes("Plank") || n.includes("Hold")) return 3; if (HEAVY_COMPOUND.some(c => n === c)) return 4; return 3; };
export const suggestW = (logs) => { if (!logs || logs.length === 0) return null; return Math.round((Math.max(...logs.map(l => l.weight)) + 2.5) * 2) / 2; };

// Additional form guides for expanded exercises
FG["Incline Hammer Press"]=["Neutral grip DBs on incline","Press up, palms face each other","Lower under control","Great for shoulder comfort"];
FG["Incline Cable Fly"]=["Incline between cables","Fly movement upward","Squeeze upper chest","Constant tension"];
FG["Smith Incline Press"]=["Incline bench in Smith","Guided press to upper chest","Safe for heavy","Lock out at top"];
FG["Incline Chest Dip (reps)"]=["Dip bars with forward lean","Target upper chest on dips","Lower controlled","Press up"];
FG["Low Incline DB Press"]=["Bench at 15-20°","Press DBs up","Slight incline targets upper","Lower to chest"];
FG["Incline DB Squeeze Press"]=["DBs pressed together on incline","Press up maintaining squeeze","Inner upper chest","Lower under control"];
FG["Incline Plate Press"]=["Hold plate on incline bench","Press up from chest","Squeeze throughout","Lower slowly"];
FG["Flat Cable Fly"]=["Cables at chest height, flat","Fly movement together","Squeeze at center","Constant tension"];
FG["Resistance Band Press (reps)"]=["Band around back, press forward","Increasing resistance at lockout","Great for warm-up","Constant tension"];
FG["Tempo Bench Press"]=["3-1-3 tempo bench","3s down, 1s pause, 3s up","Builds control","Use less weight"];
FG["Pin Press"]=["Set pins at sticking point","Press from pins to lockout","Builds lockout strength","Overload top range"];
FG["Larsen Press"]=["Bench with feet up off floor","No leg drive allowed","Pure pressing strength","Core stability required"];
FG["Board Press"]=["Boards on chest, shorter ROM","Press from boards","Overloads top portion","Powerlifting accessory"];
FG["Dip Machine (reps)"]=["Sit in dip machine","Press down","Controlled movement","Good for beginners"];
FG["Decline Fly"]=["Decline bench, DBs","Fly movement downward","Lower chest stretch","Squeeze at top"];
FG["Weighted Dips"]=["Add weight with belt or DB","Dip with extra load","Progressive overload","Advanced movement"];
FG["Ring Dips (reps)"]=["Gymnastic rings","Dip with unstable surface","Very challenging","Builds stability"];
FG["Banded Dips (reps)"]=["Band assists at bottom","Build toward bodyweight","Full ROM","Progressive"];
FG["Haney Shrug"]=["BB behind back, shrug up","Named after Lee Haney","Different trap angle","Squeeze at top"];
FG["Calf Machine Shrug"]=["Standing calf machine for shrugs","Heavy shrug motion","Comfortable padding","Squeeze traps"];
FG["Prone Shrug"]=["Face down on incline","Shrug blades together","Mid/lower trap focus","Light weight"];
FG["Band Shrug"]=["Step on band, shrug up","Constant tension","Good warm-up","Full ROM"];
FG["Lat Pulldown (Rev Grip)"]=["Reverse/underhand grip","Pull to chest","Bicep assist","Good for lats"];
FG["Lat Pulldown (1.5 reps)"]=["Full rep + half rep = 1","Extra time under tension","Builds lat endurance","Lighter weight"];
FG["Banded Lat PD"]=["Band over bar, pull down","Variable resistance","Good finisher","Constant tension"];
FG["Close Grip Chin-ups (reps)"]=["Very close grip chin-ups","Strong bicep involvement","Pull chin over bar","Full ROM"];
FG["Weighted Pull-ups"]=["Add weight belt or DB","Pull-ups with load","Advanced progression","Full ROM"];
FG["Iso Row Machine"]=["Independent arm row machine","Row each side","Fix imbalances","Machine guided"];
FG["Low Cable Row"]=["Low cable position","Row to lower chest","Different angle","Constant tension"];
FG["Snatch Grip Row"]=["Extra wide grip row","Different back activation","Upper back focus","Lower weight"];
FG["Band Seated Row"]=["Band around feet, row","Increasing resistance","Home exercise","Good warm-up"];
FG["Paused Deadlift"]=["Pause at knee height 2s","Then complete the lift","Builds positional strength","Lighter weight needed"];
FG["Snatch Grip DL"]=["Extra wide grip deadlift","Greater ROM","More upper back","Harder from floor"];
FG["Banded Deadlift"]=["Band adds resistance at top","Accommodation resistance","Builds lockout speed","Powerlifting method"];
FG["Rack RDL"]=["RDL from rack at hip height","Focus on hip hinge","Controlled eccentric","Builds hamstrings"];
FG["Seated BB OHP"]=["Sit on upright bench","Press overhead from collarbone","No leg drive","Strict pressing"];
FG["Klokov Press"]=["Behind neck press, snatch grip","Requires good mobility","Builds overhead strength","Light weight"];
FG["Landmine Shoulder Press"]=["Landmine setup, press up","One or two hands","Shoulder-friendly angle","Good for rehab"];
FG["Behind Neck Press"]=["Bar behind head, press up","Requires shoulder mobility","Builds overhead strength","Be careful with weight"];
FG["Handstand Push-ups (reps)"]=["Against wall or freestanding","Lower head to floor","Press back up","Advanced bodyweight"];
FG["W Lateral Raise"]=["Arms in W shape at bottom","Raise to shoulder height","Different starting position","Targets side delts"];
FG["Chest Supported Lateral"]=["Lie face down on incline","Lateral raise from supported position","No cheating","Pure side delt"];
FG["Banded Lateral Raise"]=["Band under feet or anchored","Raise to side","Variable resistance","Good finisher"];
FG["Partial Lateral Raise"]=["Heavy weight, partial ROM","Top portion only","Overloads side delts","Use with full ROM sets"];
FG["DB Y Press"]=["Press DBs at 45° angle","Between shoulder press and lateral","Unique pressing angle","Targets side delts"];
FG["Banded Face Pull (reps)"]=["Band at face height","Pull apart to face","External rotation","Good warm-up"];
FG["Rear Delt Cable Pull"]=["Cable at shoulder height","Pull back one arm","Rear delt isolation","Switch sides"];
FG["Chest Supported Rear Fly"]=["On incline bench face down","Fly to sides","No momentum possible","Pure rear delt"];
FG["Pause Squat"]=["Pause 2s at bottom","Then drive up","Builds bottom strength","Lighter weight needed"];
FG["Box Squat"]=["Squat to box, pause briefly","Stand up explosively","Builds power","Controlled depth"];
FG["Reverse Lunge"]=["Step backward into lunge","Lower rear knee","Step back to start","Less knee stress"];
FG["Curtsy Lunge"]=["Step back and across","Cross behind standing leg","Targets glute med","Balance challenge"];
FG["Landmine Squat"]=["Hold landmine at chest","Squat down","Natural forward lean","Good for beginners"];
FG["Anderson Squat"]=["Squat from pins at bottom","Start from dead stop","Builds starting strength","Set depth with pins"];
FG["Safety Bar Squat"]=["Safety squat bar on traps","Squat normally","Easier on shoulders","More quad focus"];
FG["Split Squat"]=["Feet staggered, lower down","Front leg does most work","Keep torso upright","Switch legs"];
FG["Tempo Squat"]=["3-1-3 tempo","Slow eccentric and concentric","Builds control","Less weight needed"];
FG["Cyclist Squat"]=["Heels elevated, narrow stance","Very quad dominant","Deep squat","Excellent quad builder"];
FG["Band Good Morning"]=["Band around neck/traps","Hinge at hips","Constant tension","Good warm-up"];
FG["GHD Sit-up (reps)"]=["Lock in GHD, sit up","Full ROM sit-up","Powerful hip flexion","Control descent"];
FG["Kettlebell DL"]=["KB between feet","Hinge and lift","Squeeze glutes at top","Lower under control"];
FG["Barbell Curl DL"]=["Normal deadlift variation","Focus on hamstring stretch","Full ROM","Squeeze at top"];
FG["Reverse Hyper Ham"]=["Reverse hyper machine","Focus on hamstrings","Controlled motion","Great for posterior chain"];
FG["Swiss Ball Hamstring"]=["Back down, feet on ball","Curl ball in","Hips stay up","Stability challenge"];
FG["Machine Calf Raise"]=["Machine calf raise","Press up on toes","Hold at top","Full stretch at bottom"];
FG["Deficit Calf Raise"]=["Extra ROM from deficit","Rise high, lower deep","Maximum stretch","Builds full range"];
FG["Band Calf Raise"]=["Band under feet","Rise on toes","Variable resistance","Good finisher"];
FG["Calf Press (Machine)"]=["Calf press machine","Push through toes","Hold at top","Lower for stretch"];
FG["Eccentric Calf Raise"]=["Rise on both feet","Lower on one foot slowly","Eccentric overload","Switch legs"];
FG["Barbell Calf Raise"]=["Bar on back, on step","Rise on toes","Hold at top","Lower for stretch"];
FG["Scott Curl"]=["Preacher curl variation","Named after Larry Scott","Arm fully supported","Maximum isolation"];
FG["Machine Preacher Curl"]=["Machine preacher station","Curl handles up","Guided movement","Good isolation"];
FG["Plate Curl"]=["Hold plate, curl up","Grip challenge","Simple equipment","Full ROM"];
FG["Band Curl (reps)"]=["Step on band, curl up","Variable resistance","Good for home","Full contraction"];
FG["Cheat Curl"]=["Use momentum for heavy weight","Strict eccentric lowering","Overloads negative","Advanced technique"];
FG["Bodyweight Skull Crusher (reps)"]=["Bar at waist height","Lower head under bar","Press back up","Bodyweight tricep work"];
FG["Band Pushdown (reps)"]=["Band over bar/door","Push down","Variable resistance","Good for home"];
FG["Close Grip Floor Press"]=["Floor, hands narrow","Press to lockout","Tricep focused","No leg drive"];
FG["EZ Skull Crusher"]=["EZ-bar for skull crushers","Comfortable wrist angle","Lower to forehead","Extend up"];
FG["DB Wrist Curl"]=["DBs, palms up, forearms on bench","Curl wrists up","Squeeze","Lower slowly"];
FG["Wrist Extension"]=["Palms down, extend wrists","Wrist extensor focus","Light weight","Slow and controlled"];
FG["Hammer Hold (seconds)"]=["Hold DB in hammer grip","Squeeze as long as possible","Static hold","Builds grip endurance"];
FG["Fat Grip Curl"]=["Fat grips on bar/DBs","Curl normally","Harder grip demand","Builds forearms"];
FG["Rice Bucket (seconds)"]=["Hand in bucket of rice","Open and close hand","Grip rehab","Great for climbers"];
FG["Band Wrist Curl"]=["Band around hand, curl wrist","Variable resistance","Good for rehab","Light and controlled"];
FG["Smith Hip Thrust"]=["Smith bar over hips","Thrust up, guided path","Stable and safe","Can go heavy"];
FG["Banded Hip Thrust (reps)"]=["Band around knees","Thrust up, push knees out","Glute activation","Great warm-up"];
FG["Weighted Glute Bridge"]=["Floor, weight on hips","Bridge up","Squeeze glutes","Lower slowly"];
FG["Reverse Lunge (Glute)"]=["Step back, emphasize glute","Drive through front heel","Squeeze glute at top","Switch legs"];
FG["Curtsy Lunge (Glute)"]=["Cross behind, lower","Targets glute med","Balance required","Switch legs"];
FG["Cable Hip Abduction"]=["Ankle strap, side kick","Lift leg to side","Squeeze glute med","Switch legs"];
FG["Stomach Vacuum (seconds)"]=["Exhale fully, pull belly in","Hold contracted position","Transverse abdominis","Breathe shallowly"];
FG["Leg Raise (reps)"]=["Lie flat, legs straight up","Lower legs slowly","Don't arch back","Core stays engaged"];
FG["Bear Crawl Hold (seconds)"]=["All fours, knees 1 inch off ground","Hold position","Entire core engaged","Don't let knees touch"];
FG["GHD Sit-up Ab (reps)"]=["GHD machine for sit-ups","Full ROM ab work","Hip flexors assist","Control descent"];
FG["Pallof Crunch"]=["Cable at chest, extend+crunch","Anti-rotation + flexion","Core works hard","Unique combination"];
FG["Single Arm Farmer Walk"]=["One heavy DB, walk","Resist leaning","Oblique anti-flexion","Switch sides"];
FG["Cable Oblique Crunch"]=["High cable, side crunch","Pull down to side","Oblique contraction","Switch sides"];
FG["Hanging Oblique Raise (reps)"]=["Hang, raise knees to side","Alternate sides","Advanced movement","Control swing"];
FG["Side Bend (DB)"]=["DB in one hand, lean","Return to upright","Don't go both sides at once","Switch hands"];
FG["Turkish Get-up"]=["KB overhead, stand from floor","Complex full-body movement","Core stability throughout","Switch sides"];
FG["Treadmill Walk (km/hr)"]=["Steady walking pace","Easy cardio","Track speed","Active recovery"];
FG["Incline Walk (km/hr)"]=["Treadmill at incline","Walking uphill","Great for fat loss","Track speed and incline"];
FG["Prowler Push (m/min)"]=["Low handles, drive forward","Sprint with sled","Track distance","Brutal conditioning"];
FG["Versa Climber (cal/min)"]=["Alternating arm+leg climb","Full body cardio","Track calories","High intensity"];
FG["Rowing Sprint (cal/min)"]=["All-out rowing effort","Short burst rowing","Max calories per minute","Explosive"];
FG["Jacob Ladder (cal/min)"]=["Climbing machine","Continuous climbing","Track calories","Full body"];
FG["Airdyne Bike (cal/min)"]=["Arms and legs together","Air resistance bike","All-out effort","Track calories"];

// Batch 2 form guides
FG["Machine Incline Fly"]=["Machine fly at incline","Squeeze at top","Constant tension","Upper chest focus"];
FG["Cable Incline Crossover"]=["Cables set low, incline angle","Cross over at top","Upper chest squeeze","Constant tension"];
FG["Incline Push-up (reps)"]=["Hands on elevated surface","Push-up at angle","Easier than flat","Good for beginners"];
FG["Squeeze Press"]=["DBs pressed together, bench press","Maintain inward squeeze","Inner chest activation","Full lockout"];
FG["Machine Fly"]=["Sit in fly machine","Bring arms together","Squeeze at center","Return slowly"];
FG["Band Chest Fly (reps)"]=["Band behind back","Fly motion forward","Variable resistance","Good for home"];
FG["Straight Bar Dip (reps)"]=["On straight bar","Dip forward","Lower chest focus","Advanced bodyweight"];
FG["Decline Push-up (reps)"]=["Feet elevated, hands on floor","Push-up at decline","More chest emphasis","Harder than flat"];
FG["Cable Pullover"]=["Cable behind, pull over","Arc motion","Lats and chest","Constant tension"];
FG["Machine Shrug"]=["Shrug machine, handles at sides","Shrug up","Comfortable position","Go heavy"];
FG["Incline Shrug"]=["Incline bench face down","Shrug blades together","Mid trap focus","Light weight"];
FG["Clean Pull"]=["Deadlift position, pull explosively","Bar to hip height","Triple extension","Olympic accessory"];
FG["High Pull"]=["Bar at hips, pull to chin explosively","Elbows high","Explosive trap builder","Power movement"];
FG["Lat PD (Underhand)"]=["Underhand/supinated grip","Pull to chest","Bicep involvement","Good lat stretch"];
FG["Half Kneeling Lat PD"]=["One knee down at cable","Pull down single arm","Core engagement","Anti-rotation"];
FG["Banded Pull-Apart Lat"]=["Band overhead, pull apart","Lat activation","Good warm-up","Light resistance"];
FG["Ring Pull-ups (reps)"]=["Rings instead of bar","Pull up with rotation","Shoulder-friendly","Very challenging"];
FG["Archer Pull-ups (reps)"]=["One arm extends, other pulls","Unilateral pull-up","Very advanced","Build to one-arm"];
FG["Landmine Row"]=["Bar in corner, row one end","Pull to chest","Unique angle","Good for back"];
FG["High Row Machine"]=["Pull from high angle","Targets upper back","Guided movement","Good for beginners"];
FG["Renegade Row (reps)"]=["Plank with DBs, row alternating","Core + back","Don't rotate hips","Functional"];
FG["TRX Row (reps)"]=["Hold TRX, lean back","Row body up","Adjust angle for difficulty","Bodyweight rowing"];
FG["KB Deadlift"]=["KB between feet, hinge and lift","Squeeze glutes at top","Good for learning hinge","Controlled movement"];
FG["Single Leg DL"]=["One leg deadlift","Hinge forward","Great balance work","Hamstring and glute"];
FG["Duck Walk (reps)"]=["Stay in deep squat, walk","Steps while squatting","Brutal on quads","Mobility + strength"];
FG["Bottoms Up KB Press"]=["KB upside down, press","Requires grip + stability","Light weight","Shoulder stability"];
FG["Single Arm DB Press"]=["One arm overhead press","Core stabilizes","Fix imbalances","Switch arms"];
FG["Band OHP (reps)"]=["Band under feet, press up","Variable resistance","Good for home","Full lockout"];
FG["Seated Lateral Raise"]=["Sit on bench, raise DBs","No momentum possible","Strict form","Side delt isolation"];
FG["Plate Lateral Raise"]=["Hold small plate, raise","Unique grip challenge","Side delt focus","Slow and controlled"];
FG["Band Side Raise (reps)"]=["Band under foot, raise","Variable resistance","Home exercise","Good finisher"];
FG["Prone I Raise"]=["Face down, arms straight","Raise arms forward","Lower trap focus","Very light weight"];
FG["TRX Rear Fly (reps)"]=["Hold TRX, lean back","Fly arms apart","Rear delt focus","Adjust angle"];
FG["DB Powell Raise"]=["Lie on side, raise DB forward","Rotator cuff + rear delt","Very light weight","Rehab exercise"];
FG["Jump Squat (reps)"]=["Squat down, jump explosively","Land softly","Plyometric power","No added weight needed"];
FG["Pistol Squat (reps)"]=["Single leg squat, other extended","Full depth on one leg","Very advanced","Balance + strength"];
FG["TRX Squat (reps)"]=["Hold TRX, squat deep","Assisted balance","Good for learning","Full depth"];
FG["Leg Press (Wide)"]=["Wide stance on platform","More glute/adductor","Full depth","Don't lock knees"];
FG["Cable Squat"]=["Face cable, squat holding handle","Counterbalance assists depth","Unique stimulus","Constant tension"];
FG["RDL (Single Arm DB)"]=["One DB, hinge forward","Single arm challenge","Core anti-rotation","Switch sides"];
FG["Hip Hinge Machine"]=["Machine for hip hinge","Guided movement","Hamstring focus","Safe for beginners"];
FG["Band RDL"]=["Band under feet, RDL","Variable resistance","Home exercise","Good warm-up"];
FG["Toe Press (Leg Press)"]=["Toes only on leg press","Calf press variation","Heavy loading possible","Full ROM"];
FG["Stair Calf Raise"]=["On stairs, bodyweight","Calf raise anywhere","Full stretch at bottom","Hold at top"];
FG["DB Preacher Curl"]=["DB on preacher bench","Single arm curl","Fix imbalances","Full stretch"];
FG["Cable Concentration Curl"]=["Low cable, elbow on thigh","Curl up and squeeze","Constant tension","Great peak work"];
FG["Incline Hammer Curl"]=["Incline bench, neutral grip","Arms hang back","Great stretch","Full ROM"];
FG["Overhead Cable Tricep Ext"]=["High cable, rope overhead","Extend arms upward","Squeeze triceps","Unique angle"];
FG["Seated Tricep Press"]=["Sit, press DB overhead","Lower behind head","Extend up","Stable position"];
FG["Lying Cable Tricep Ext"]=["Lie on bench at cable","Cable skull crusher","Constant tension","Full stretch"];
FG["DB Skull Crusher"]=["DBs instead of bar","Skull crusher with DBs","Independent arms","Fix imbalances"];
FG["Pinch Grip DL"]=["Deadlift gripping plates by pinching","Extreme grip challenge","Light weight","Builds pinch strength"];
FG["Band Clamshell (reps)"]=["Side lying, band around knees","Open knees like clamshell","Squeeze glute med","Keep feet together"];
FG["Lateral Band Walk (reps)"]=["Band around ankles, squat stance","Step sideways","Glute med activation","Stay in squat"];
FG["Sit-up (reps)"]=["Lie flat, hands behind head","Sit up fully","Touch elbows to knees","Lower under control"];
FG["Crunch (reps)"]=["Lie flat, hands behind head","Curl shoulders off floor","Squeeze abs at top","Lower slowly"];
FG["Mountain Climber Ab (reps)"]=["Plank position","Drive knees to chest fast","Alternating legs","Core engaged throughout"];
FG["Oblique Cable Twist"]=["Cable at chest height","Twist away from cable","Control rotation","Core stays braced"];
FG["Plate Twist (reps)"]=["Hold plate, arms extended","Twist side to side","Touch floor each side","Control the movement"];
FG["Walk (km/hr)"]=["Simple walking","Track speed","Active recovery","Easy cardio"];
FG["Sprint 200m (seconds)"]=["200m all-out sprint","Track time","Anaerobic power","Full recovery between"];
FG["Jumping Jacks (reps/min)"]=["Arms and legs out/in","Count per minute","Warm-up or cardio","Full body"];
FG["High Knees (reps/min)"]=["Running in place, knees high","Fast pace","Count total","Great warm-up"];
FG["Kettlebell Cardio (cal/min)"]=["KB swings, snatches, etc","Track calories","Full body","High intensity"];

FG["Incline JM Press"]=["Incline + JM press hybrid","Lower to chin area","Press to lockout","Upper chest + tricep"];
FG["Incline Band Press"]=["Band on incline bench","Press against band","Variable resistance","Good warm-up"];
FG["Bamboo Bar Bench"]=["Flexible bar with hanging weights","Bench with instability","Stabilizer activation","Light weight"];
FG["Feet Up Bench"]=["Bench with feet up","No leg drive","Core works harder","Strict pressing"];
FG["Paused Bench Press"]=["2 second pause on chest","Press explosively","Builds bottom strength","Competition style"];
FG["Ring Push-ups (reps)"]=["Rings near floor","Push-up on unstable","Extremely challenging","Builds stability"];
FG["Deficit DB Pullover"]=["Extra ROM pullover","Deeper stretch","Lats and chest","Controlled movement"];
FG["Overhead Carry"]=["Weight overhead, walk","Stability challenge","Traps and core","Tall posture"];
FG["Band Face Pull (reps)"]=["Band at face height","Pull apart","Rear delt + traps","Great warm-up"];
FG["Muscle-up (reps)"]=["Pull-up transitioning to dip","Explosive pull","Very advanced","Full upper body"];
FG["Meadows Pulldown"]=["Single arm landmine pulldown","Squeeze lat","Named after John Meadows","Great isolation"];
FG["Batwing Row"]=["Hold peak contraction 5s","Isometric row hold","Builds back thickness","Light weight"];
FG["Supine Row (reps)"]=["Under bar, face up","Pull chest to bar","Bodyweight rowing","Adjust angle"];
FG["Hip Hinge (Bodyweight, reps)"]=["Practice hinge pattern","No weight","Perfect form drill","Touch wall behind"];
FG["Superman Hold (seconds)"]=["Face down, lift arms+legs","Hold position","Lower back endurance","Don't overextend"];
FG["Javelin Press"]=["Single arm landmine press","One arm at a time","Core anti-rotation","Unique angle"];
FG["Savickas Press"]=["Axle bar strict press","Thick bar challenge","Named after Big Z","Pure strength"];
FG["Half Kneeling Lateral"]=["One knee down, raise DB","Anti-lateral flexion","Core + side delt","Switch sides"];
FG["Prone Lateral Raise"]=["Face down on bench","Raise arms to sides","No momentum possible","Pure side delt"];
FG["Rear Delt Row"]=["Row with flared elbows","Target rear delts","Different from regular row","Elbows high"];
FG["Kelso Rear Fly"]=["On incline face down","Fly to sides","Named after Paul Kelso","Great isolation"];
FG["Skater Squat (reps)"]=["Single leg, lean forward","Lower knee near floor","Balance intensive","Like pistol but different"];
FG["Hatfield Squat"]=["Safety bar + hands on rack","Use arms for balance","Can go very deep","Quad destroyer"];
FG["1.5 Rep Squat"]=["Full squat + half squat = 1 rep","Extra time under tension","Brutal","Lighter weight"];
FG["Slider Nordic (reps)"]=["Nordic curl with sliding feet","Eccentric hamstring","Very challenging","Build up slowly"];
FG["Band Hamstring Curl (reps)"]=["Band around ankle, curl","Standing hamstring curl","Variable resistance","Home exercise"];
FG["Wall Calf Raise (reps)"]=["Against wall for balance","Bodyweight calf raise","Anywhere exercise","Full ROM"];
FG["Single Leg Seated Calf"]=["One leg seated calf raise","Fix imbalances","Full ROM","Switch legs"];
FG["TRX Curl (reps)"]=["Hold TRX, lean back, curl","Bodyweight bicep curl","Adjust angle","Functional"];
FG["Prone Incline Curl"]=["Face down on incline, curl","No cheating possible","Great stretch","Strict form"];
FG["Overhead Band Ext (reps)"]=["Band overhead, extend","Tricep extension","Variable resistance","Home exercise"];
FG["Dip to Lockout (reps)"]=["Partial dip, lockout only","Top portion only","Tricep focused","Heavy overload"];
FG["Wrist Twist"]=["Hold DB, rotate wrist","Pronation/supination","Forearm rotators","Light weight"];
FG["Finger Curl"]=["Fingers only, curl bar up","Finger strength","Very specific","Climber exercise"];
FG["Frog Walk (reps)"]=["Deep squat, walk forward","Glute + hip mobility","Steps while low","Burn guaranteed"];
FG["Reverse Crunch (reps)"]=["Lie flat, curl hips up","Lift hips off floor","Lower abs focus","Control the movement"];
FG["Dish Hold (seconds)"]=["On back, arms+legs slightly up","Hollow body shape","Gymnastic core","Don't arch back"];
FG["Half Turkish Getup"]=["KB overhead, get to seated","Half the full TGU","Core stability","Switch sides"];
FG["Banded Pallof (reps)"]=["Band at chest, press out","Anti-rotation press","Reps version","Core stability"];
FG["Farmer Walk Cardio"]=["Moderate weight, walk far","Conditioning focus","Full body","Track distance"];
FG["Sled Drag (m/min)"]=["Rope attached to sled, pull","Walk backward dragging","Track distance","Brutal legs"];
FG["Shadow Boxing (reps/min)"]=["Punch combinations in air","Count total punches","Cardio + coordination","Fun workout"];

FG["Tabata Sprints (reps)"]=["20s sprint, 10s rest x8","Count total sprints","Max effort each","Ultimate HIIT"];
FG["Sandbag Carry (m/min)"]=["Carry sandbag","Walk or jog","Track distance","Functional strength"];
FG["Tire Flip (reps)"]=["Squat under tire, flip","Explosive full body","Count flips","Strongman training"];
FG["Rope Climb (reps)"]=["Climb rope using legs+arms","Count climbs","Upper body + grip","Advanced"];
FG["Burpee Box Jump (reps)"]=["Burpee then box jump","Count total","Brutal combination","Full body power"];
