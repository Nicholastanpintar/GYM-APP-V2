export const RK = [
  { id: "novice", l: "Novice", i: "r0", c: "#8E8E93" },
  { id: "beginner", l: "Beginner", i: "r1", c: "#A8A8B0" },
  { id: "intermediate", l: "Intermediate", i: "r2", c: "#FFD700" },
  { id: "elite1", l: "Elite I", i: "r3", c: "#FF9500" },
  { id: "elite2", l: "Elite II", i: "r3", c: "#FF6B00" },
  { id: "elite3", l: "Elite III", i: "r3", c: "#FF4500" },
  { id: "gymrat", l: "Gym Rat", i: "r4", c: "#FF3B30" },
  { id: "pro", l: "Pro Bodybuilder", i: "r5", c: "#BF00FF" },
];

export const BP = [
  { id: "chest", l: "Chest", i: "chest", c: "#FF3B30", rg: [{ id: "uc", l: "Upper Chest" }, { id: "mc", l: "Mid Chest" }, { id: "lc", l: "Lower Chest" }] },
  { id: "back", l: "Back", i: "back", c: "#007AFF", rg: [{ id: "ut", l: "Upper Back / Traps" }, { id: "la", l: "Lats" }, { id: "mi", l: "Mid Back" }, { id: "lb", l: "Lower Back" }] },
  { id: "shoulders", l: "Shoulders", i: "shoulders", c: "#AF52DE", rg: [{ id: "fd", l: "Front Delt" }, { id: "sd", l: "Side Delt" }, { id: "rd", l: "Rear Delt" }] },
  { id: "legs", l: "Legs", i: "legs", c: "#34C759", rg: [{ id: "qu", l: "Quads" }, { id: "hm", l: "Hamstrings" }, { id: "cv", l: "Calves" }] },
  { id: "arms", l: "Arms", i: "arms", c: "#FF9500", rg: [{ id: "bi", l: "Biceps" }, { id: "tr", l: "Triceps" }, { id: "fa", l: "Forearms" }] },
  { id: "glutes", l: "Glutes", i: "glutes", c: "#FF2D55", rg: [{ id: "gl", l: "Glutes" }] },
  { id: "core", l: "Core", i: "core", c: "#FFCC00", rg: [{ id: "ab", l: "Abs" }, { id: "ob", l: "Obliques" }] },
  { id: "cardio", l: "Cardio", i: "cardio", c: "#FF375F", rg: [{ id: "ca", l: "Cardio" }] },
];

export const SCHEDULES = {
  3: { name: "Full Body 3x", days: ["Full Body A", "Full Body B", "Full Body C"], map: [["uc", "mc", "qu", "mi", "fd", "bi", "ab"], ["lc", "hm", "lb", "sd", "tr", "gl", "ob"], ["mc", "qu", "ut", "rd", "bi", "cv", "ab"]] },
  4: { name: "Upper/Lower 4x", days: ["Upper A", "Lower A", "Upper B", "Lower B"], map: [["uc", "mc", "mi", "la", "fd", "sd", "bi", "tr"], ["qu", "hm", "cv", "gl", "lb", "ab", "ob"], ["lc", "ut", "mi", "la", "rd", "fd", "bi", "tr"], ["qu", "hm", "cv", "gl", "lb", "ab", "ob"]] },
  5: { name: "PPL + Upper/Lower", days: ["Push", "Pull", "Legs", "Upper", "Lower"], map: [["uc", "mc", "lc", "fd", "sd", "tr"], ["ut", "la", "mi", "lb", "rd", "bi", "fa"], ["qu", "hm", "cv", "gl", "ab", "ob"], ["mc", "mi", "la", "fd", "sd", "bi", "tr"], ["qu", "hm", "cv", "gl", "ab", "lb"]] },
  6: { name: "Push/Pull/Legs 6x", days: ["Push A", "Pull A", "Legs A", "Push B", "Pull B", "Legs B"], map: [["uc", "mc", "fd", "sd", "tr", "ob"], ["ut", "la", "mi", "rd", "bi", "fa"], ["qu", "hm", "cv", "gl", "lb", "ob"], ["lc", "mc", "fd", "sd", "tr", "ab"], ["mi", "la", "ut", "rd", "bi", "fa"], ["qu", "hm", "cv", "gl", "lb", "ab"]] },
};

export const AUTO_PICKS = { uc: ["Incline BB Bench", "Incline DB Press"], mc: ["BB Bench Press", "DB Bench Press"], lc: ["Decline BB Bench", "Chest Dips (reps)"], ut: ["BB Shrug", "Face Pull"], la: ["Lat PD (Wide)", "Pull-ups (reps)"], mi: ["BB Row", "Seated Cable Row"], lb: ["Conv Deadlift", "Romanian DL"], fd: ["OHP (Barbell)", "DB Shoulder Press"], sd: ["DB Lateral Raise", "Cable Lateral Raise"], rd: ["Reverse Fly (DB)", "Face Pull (Rear)"], qu: ["BB Back Squat", "Leg Press", "Leg Extension"], hm: ["Romanian DL (BB)", "Lying Leg Curl"], cv: ["Standing Calf Raise", "Seated Calf Raise"], bi: ["BB Curl", "DB Curl"], tr: ["Tricep Pushdown", "Skull Crushers"], fa: ["Wrist Curl (BB)"], gl: ["BB Hip Thrust", "Cable Kickback"], ab: ["Cable Crunch", "Hanging Leg Raise (reps)"], ob: ["Russian Twist (kg)", "Woodchoppers (Cable)"], ca: ["Running", "Rowing"] };

export const TIPS = ["Consistency beats intensity.", "Sleep 7-9 hours for recovery.", "1.6-2.2g protein per kg daily.", "Add 2.5kg weekly to barbell lifts.", "Control the eccentric phase.", "Deload every 4-6 weeks.", "Compound first, isolation after.", "Stalled 3 weeks? Change variation.", "Drink 3-4L water daily.", "Don't skip leg day.", "Warm up before heavy sets.", "Mind-muscle connection matters.", "Mix LISS with HIIT for cardio.", "5 min stretching prevents injuries.", "Track your lifts consistently."];

export const BDG = [
  { id: "fl", n: "First Rep", d: "Log first set", ic: "r1", ck: d => Object.values(d.logs || {}).some(l => l.length > 0) },
  { id: "t10", n: "Consistency", d: "10 total logs", ic: "badge", ck: d => Object.values(d.logs || {}).reduce((a, l) => a + l.length, 0) >= 10 },
  { id: "t50", n: "Dedicated", d: "50 total logs", ic: "badge", ck: d => Object.values(d.logs || {}).reduce((a, l) => a + l.length, 0) >= 50 },
  { id: "hk", n: "100KG Club", d: "Lift 100kg+ 1RM", ic: "trophy", ck: d => Object.values(d.logs || {}).some(l => l.some(e => e.oneRM >= 100)) },
  { id: "e5", n: "Well Rounded", d: "Track 5+ exercises", ic: "dumbbell", ck: d => Object.values(d.selectedExercises || {}).reduce((a, l) => a + l.length, 0) >= 5 },
  { id: "bw", n: "BW Lift", d: "Lift bodyweight 1RM", ic: "r2", ck: d => { const w = d.profile?.bodyweight || 999; return Object.values(d.logs || {}).some(l => l.some(e => e.oneRM >= w)); } },
];

export const FOODS = [
  { n: "Chicken Breast", p: 31, cal: 165, u: "100g" }, { n: "Chicken Thigh", p: 26, cal: 209, u: "100g" },
  { n: "Beef (Lean)", p: 26, cal: 250, u: "100g" }, { n: "Ground Beef", p: 17, cal: 332, u: "100g" },
  { n: "Salmon", p: 20, cal: 208, u: "100g" }, { n: "Tuna (Canned)", p: 26, cal: 116, u: "100g" },
  { n: "Shrimp", p: 24, cal: 99, u: "100g" }, { n: "Eggs (1 large)", p: 6, cal: 72, u: "1 egg" },
  { n: "Egg Whites", p: 3.6, cal: 17, u: "1 white" }, { n: "Greek Yogurt", p: 10, cal: 59, u: "100g" },
  { n: "Cottage Cheese", p: 11, cal: 98, u: "100g" }, { n: "Whey Protein", p: 25, cal: 120, u: "1 scoop" },
  { n: "Casein Protein", p: 24, cal: 120, u: "1 scoop" }, { n: "Milk (Whole)", p: 3.4, cal: 61, u: "100ml" },
  { n: "Tofu (Firm)", p: 8, cal: 76, u: "100g" }, { n: "Tempeh", p: 19, cal: 192, u: "100g" },
  { n: "Lentils", p: 9, cal: 116, u: "100g" }, { n: "Chickpeas", p: 9, cal: 164, u: "100g" },
  { n: "White Rice", p: 2.7, cal: 130, u: "100g" }, { n: "Oats", p: 13, cal: 389, u: "100g" },
  { n: "Bread (1 slice)", p: 3.6, cal: 79, u: "1 slice" }, { n: "Pasta", p: 5, cal: 131, u: "100g" },
  { n: "Sweet Potato", p: 1.6, cal: 86, u: "100g" }, { n: "Peanut Butter", p: 25, cal: 588, u: "100g" },
  { n: "Almonds", p: 21, cal: 579, u: "100g" }, { n: "Broccoli", p: 2.8, cal: 34, u: "100g" },
  { n: "Spinach", p: 2.9, cal: 23, u: "100g" },
];
