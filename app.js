/* =========================================================
   KYA BANAYE - VERSION 1
   Simple Indian Vegetarian Meal Decision App
   ========================================================= */


/* =========================================================
   1. FOOD DATABASE
   ========================================================= */

const foods = [

    /* ---------------- BREAKFAST ---------------- */

    {
        id: "poha",
        name: "Poha",
        type: "complete",
        category: "breakfast",
        suitableFor: ["breakfast"],
        time: 15,
        effort: "easy",
        ingredients: ["poha", "onion", "potato", "peanuts"],
        frequency: "regular",
        style: "quick",
        prep: ""
    },

    {
        id: "upma",
        name: "Vegetable Upma",
        type: "complete",
        category: "breakfast",
        suitableFor: ["breakfast"],
        time: 20,
        effort: "easy",
        ingredients: ["semolina", "vegetables"],
        frequency: "regular",
        style: "quick",
        prep: ""
    },

    {
        id: "besan-chilla",
        name: "Besan Chilla",
        type: "complete",
        category: "breakfast",
        suitableFor: ["breakfast"],
        time: 20,
        effort: "easy",
        ingredients: ["besan", "onion", "tomato"],
        frequency: "regular",
        style: "quick",
        prep: ""
    },

    {
        id: "bread-sandwich",
        name: "Vegetable Sandwich",
        type: "complete",
        category: "breakfast",
        suitableFor: ["breakfast"],
        time: 15,
        effort: "easy",
        ingredients: ["bread", "potato", "vegetables"],
        frequency: "regular",
        style: "quick",
        prep: ""
    },

    {
        id: "aloo-paratha",
        name: "Aloo Paratha",
        type: "complete",
        category: "breakfast",
        suitableFor: ["breakfast"],
        time: 35,
        effort: "medium",
        ingredients: ["wheat flour", "potato"],
        frequency: "regular",
        style: "special",
        prep: "Prepare the dough and potato filling tonight if making it tomorrow morning."
    },

    {
        id: "paneer-paratha",
        name: "Paneer Paratha",
        type: "complete",
        category: "breakfast",
        suitableFor: ["breakfast"],
        time: 35,
        effort: "medium",
        ingredients: ["wheat flour", "paneer"],
        frequency: "occasional",
        style: "special",
        prep: "Keep paneer ready and prepare dough tonight."
    },

    {
        id: "idli",
        name: "Idli",
        type: "complete",
        category: "breakfast",
        suitableFor: ["breakfast"],
        time: 20,
        effort: "easy",
        ingredients: ["idli batter"],
        frequency: "regular",
        style: "quick",
        prep: "Keep idli batter ready tonight."
    },

    {
        id: "dosa",
        name: "Dosa",
        type: "complete",
        category: "breakfast",
        suitableFor: ["breakfast"],
        time: 25,
        effort: "medium",
        ingredients: ["dosa batter"],
        frequency: "regular",
        style: "quick",
        prep: "Keep dosa batter ready tonight."
    },

    {
        id: "sabudana-khichdi",
        name: "Sabudana Khichdi",
        type: "complete",
        category: "breakfast",
        suitableFor: ["breakfast"],
        time: 25,
        effort: "medium",
        ingredients: ["sabudana", "peanuts", "potato"],
        frequency: "occasional",
        style: "special",
        prep: "Soak sabudana tonight."
    },

    {
        id: "vegetable-cheela",
        name: "Vegetable Cheela",
        type: "complete",
        category: "breakfast",
        suitableFor: ["breakfast"],
        time: 20,
        effort: "easy",
        ingredients: ["besan", "vegetables"],
        frequency: "regular",
        style: "quick",
        prep: ""
    },


    /* ---------------- DAL / LEGUMES ---------------- */

    {
        id: "moong-dal",
        name: "Moong Dal",
        type: "component",
        category: "dal",
        suitableFor: ["lunch", "dinner"],
        time: 25,
        effort: "easy",
        ingredients: ["moong dal"],
        frequency: "everyday",
        style: "everyday",
        prep: ""
    },

    {
        id: "masoor-dal",
        name: "Masoor Dal",
        type: "component",
        category: "dal",
        suitableFor: ["lunch", "dinner"],
        time: 25,
        effort: "easy",
        ingredients: ["masoor dal"],
        frequency: "regular",
        style: "everyday",
        prep: ""
    },

    {
        id: "toor-dal",
        name: "Toor Dal",
        type: "component",
        category: "dal",
        suitableFor: ["lunch", "dinner"],
        time: 30,
        effort: "easy",
        ingredients: ["toor dal"],
        frequency: "everyday",
        style: "everyday",
        prep: ""
    },

    {
        id: "dal-tadka",
        name: "Dal Tadka",
        type: "component",
        category: "dal",
        suitableFor: ["lunch", "dinner"],
        time: 30,
        effort: "easy",
        ingredients: ["toor dal", "moong dal"],
        frequency: "regular",
        style: "everyday",
        prep: ""
    },

    {
        id: "rajma",
        name: "Rajma",
        type: "component",
        category: "dal",
        suitableFor: ["lunch", "dinner"],
        time: 45,
        effort: "medium",
        ingredients: ["rajma"],
        frequency: "regular",
        style: "special",
        prep: "Soak rajma tonight if preparing tomorrow."
    },

    {
        id: "chole",
        name: "Chole",
        type: "component",
        category: "dal",
        suitableFor: ["lunch", "dinner"],
        time: 45,
        effort: "medium",
        ingredients: ["chickpeas"],
        frequency: "regular",
        style: "special",
        prep: "Soak chickpeas tonight if preparing tomorrow."
    },

    {
        id: "kadhi",
        name: "Kadhi",
        type: "component",
        category: "dal",
        suitableFor: ["lunch", "dinner"],
        time: 35,
        effort: "medium",
        ingredients: ["curd", "besan"],
        frequency: "regular",
        style: "special",
        prep: ""
    },


    /* ---------------- VEGETABLES ---------------- */

    {
        id: "aloo-gobi",
        name: "Aloo Gobi",
        type: "component",
        category: "vegetable",
        suitableFor: ["lunch", "dinner"],
        time: 30,
        effort: "medium",
        ingredients: ["potato", "cauliflower"],
        frequency: "regular",
        style: "everyday",
        prep: ""
    },

    {
        id: "aloo-matar",
        name: "Aloo Matar",
        type: "component",
        category: "vegetable",
        suitableFor: ["lunch", "dinner"],
        time: 25,
        effort: "easy",
        ingredients: ["potato", "peas"],
        frequency: "regular",
        style: "everyday",
        prep: ""
    },

    {
        id: "bhindi",
        name: "Bhindi Masala",
        type: "component",
        category: "vegetable",
        suitableFor: ["lunch", "dinner"],
        time: 25,
        effort: "easy",
        ingredients: ["okra"],
        frequency: "regular",
        style: "everyday",
        prep: ""
    },

    {
        id: "baingan",
        name: "Baingan Bharta",
        type: "component",
        category: "vegetable",
        suitableFor: ["lunch", "dinner"],
        time: 35,
        effort: "medium",
        ingredients: ["brinjal"],
        frequency: "regular",
        style: "everyday",
        prep: ""
    },

    {
        id: "beans",
        name: "Beans Sabzi",
        type: "component",
        category: "vegetable",
        suitableFor: ["lunch", "dinner"],
        time: 25,
        effort: "easy",
        ingredients: ["beans"],
        frequency: "regular",
        style: "everyday",
        prep: ""
    },

    {
        id: "cabbage",
        name: "Cabbage Sabzi",
        type: "component",
        category: "vegetable",
        suitableFor: ["lunch", "dinner"],
        time: 25,
        effort: "easy",
        ingredients: ["cabbage"],
        frequency: "regular",
        style: "everyday",
        prep: ""
    },

    {
        id: "lauki",
        name: "Lauki Sabzi",
        type: "component",
        category: "vegetable",
        suitableFor: ["lunch", "dinner"],
        time: 25,
        effort: "easy",
        ingredients: ["bottle gourd"],
        frequency: "regular",
        style: "everyday",
        prep: ""
    },

    {
        id: "mix-veg",
        name: "Mixed Vegetable",
        type: "component",
        category: "vegetable",
        suitableFor: ["lunch", "dinner"],
        time: 30,
        effort: "medium",
        ingredients: ["carrot", "beans", "peas", "cauliflower"],
        frequency: "regular",
        style: "everyday",
        prep: ""
    },

    {
        id: "palak-paneer",
        name: "Palak Paneer",
        type: "component",
        category: "vegetable",
        suitableFor: ["lunch", "dinner"],
        time: 35,
        effort: "medium",
        ingredients: ["spinach", "paneer"],
        frequency: "regular",
        style: "special",
        prep: ""
    },

    {
        id: "matar-paneer",
        name: "Matar Paneer",
        type: "component",
        category: "vegetable",
        suitableFor: ["lunch", "dinner"],
        time: 35,
        effort: "medium",
        ingredients: ["peas", "paneer"],
        frequency: "regular",
        style: "special",
        prep: ""
    },


    /* ---------------- RICE ---------------- */

    {
        id: "plain-rice",
        name: "Rice",
        type: "component",
        category: "rice",
        suitableFor: ["lunch", "dinner"],
        time: 20,
        effort: "easy",
        ingredients: ["rice"],
        frequency: "everyday",
        style: "everyday",
        prep: ""
    },

    {
        id: "jeera-rice",
        name: "Jeera Rice",
        type: "component",
        category: "rice",
        suitableFor: ["lunch", "dinner"],
        time: 20,
        effort: "easy",
        ingredients: ["rice", "cumin"],
        frequency: "regular",
        style: "everyday",
        prep: ""
    },

    {
        id: "veg-pulao",
        name: "Vegetable Pulao",
        type: "complete",
        category: "rice",
        suitableFor: ["lunch", "dinner"],
        time: 30,
        effort: "medium",
        ingredients: ["rice", "peas", "carrot", "beans"],
        frequency: "regular",
        style: "one-pot",
        prep: ""
    },

    {
        id: "khichdi",
        name: "Moong Dal Khichdi",
        type: "complete",
        category: "rice",
        suitableFor: ["lunch", "dinner"],
        time: 30,
        effort: "easy",
        ingredients: ["rice", "moong dal"],
        frequency: "regular",
        style: "one-pot",
        prep: ""
    },


    /* ---------------- ROTI ---------------- */

    {
        id: "roti",
        name: "Roti",
        type: "component",
        category: "roti",
        suitableFor: ["lunch", "dinner"],
        time: 25,
        effort: "medium",
        ingredients: ["wheat flour"],
        frequency: "everyday",
        style: "everyday",
        prep: ""
    },

    {
        id: "paratha",
        name: "Plain Paratha",
        type: "component",
        category: "roti",
        suitableFor: ["breakfast", "lunch", "dinner"],
        time: 30,
        effort: "medium",
        ingredients: ["wheat flour"],
        frequency: "regular",
        style: "everyday",
        prep: ""
    },


    /* ---------------- SIDES ---------------- */

    {
        id: "curd",
        name: "Curd",
        type: "component",
        category: "side",
        suitableFor: ["lunch", "dinner"],
        time: 2,
        effort: "easy",
        ingredients: ["curd"],
        frequency: "everyday",
        style: "everyday",
        prep: ""
    },

    {
        id: "salad",
        name: "Simple Salad",
        type: "component",
        category: "side",
        suitableFor: ["lunch", "dinner"],
        time: 10,
        effort: "easy",
        ingredients: ["cucumber", "tomato", "onion"],
        frequency: "everyday",
        style: "quick",
        prep: ""
    }

];


/* =========================================================
   2. MEAL TEMPLATES
   ========================================================= */

const mealTemplates = {

    lunch: [
        {
            name: "Dal + Vegetable + Roti",
            required: ["dal", "vegetable", "roti"]
        },

        {
            name: "Dal + Vegetable + Rice",
            required: ["dal", "vegetable", "rice"]
        },

        {
            name: "Dal + Rice",
            required: ["dal", "rice"]
        },

        {
            name: "Vegetable + Roti",
            required: ["vegetable", "roti"]
        },

        {
            name: "One Dish Meal",
            required: ["complete"]
        }
    ],

    dinner: [
        {
            name: "Dal + Vegetable + Roti",
            required: ["dal", "vegetable", "roti"]
        },

        {
            name: "Vegetable + Roti",
            required: ["vegetable", "roti"]
        },

        {
            name: "Dal + Roti",
            required: ["dal", "roti"]
        },

        {
            name: "One Dish Meal",
            required: ["complete"]
        }
    ]

};


/* =========================================================
   3. APP STATE
   ========================================================= */

let state = {

    currentMeal: "breakfast",

    currentSuggestions: {
        breakfast: null,
        lunch: null,
        dinner: null
    },

    todayCooked: [],

    tomorrowPlan: {},

    history: [],

    favourites: [],

    avoid: [],

    availableIngredients: [],

    timePreference: "any",

    people: 4,

    notToday: []

};


/* =========================================================
   4. LOAD / SAVE
   ========================================================= */

function loadState() {

    const saved = localStorage.getItem("kyaBanayeState");

    if (saved) {

        try {

            const oldState = JSON.parse(saved);

            state = {
                ...state,
                ...oldState
            };

        } catch (error) {

            console.log("Could not load saved data.");

        }

    }

}


function saveState() {

    localStorage.setItem(
        "kyaBanayeState",
        JSON.stringify(state)
    );

}


/* =========================================================
   5. DATE
   ========================================================= */

function getTodayKey() {

    const d = new Date();

    return d.toISOString().split("T")[0];

}


function getTomorrowKey() {

    const d = new Date();

    d.setDate(d.getDate() + 1);

    return d.toISOString().split("T")[0];

}


function formatDate(dateKey) {

    const date = new Date(dateKey + "T00:00:00");

    return date.toLocaleDateString(
        "en-IN",
        {
            day: "numeric",
            month: "short"
        }
    );

}


/* =========================================================
   6. BASIC HELPERS
   ========================================================= */

function getFood(id) {

    return foods.find(food => food.id === id);

}


function isAvoided(food) {

    return state.avoid.includes(food.id);

}


function isFavourite(food) {

    return state.favourites.includes(food.id);

}


function wasRecentlyCooked(food) {

    const recent = state.history.slice(-8);

    return recent.some(item => item.foodIds.includes(food.id));

}


function ingredientUsedRecently(food) {

    const recent = state.history.slice(-5);

    return recent.some(item => {

        return item.foodIds.some(id => {

            const oldFood = getFood(id);

            if (!oldFood) return false;

            return oldFood.ingredients.some(
                ingredient => food.ingredients.includes(ingredient)
            );

        });

    });

}


/* =========================================================
   7. TIME FILTER
   ========================================================= */

function fitsTime(food) {

    if (state.timePreference === "any") {
        return true;
    }

    if (state.timePreference === "quick") {
        return food.time <= 20;
    }

    if (state.timePreference === "normal") {
        return food.time <= 40;
    }

    return true;

}


/* =========================================================
   8. SCORE A FOOD
   ========================================================= */

function scoreFood(food, mealType) {

    let score = 0;


    /* Favourite */

    if (isFavourite(food)) {
        score += 20;
    }


    /* Available ingredients */

    if (state.availableIngredients.length > 0) {

        const matches = food.ingredients.filter(
            ingredient =>
                state.availableIngredients.includes(ingredient)
        ).length;

        score += matches * 8;

    }


    /* Time */

    if (fitsTime(food)) {
        score += 15;
    } else {
        score -= 30;
    }


    /* Recent exact repetition */

    if (wasRecentlyCooked(food)) {
        score -= 30;
    }


    /* Similar ingredient repetition */

    if (ingredientUsedRecently(food)) {
        score -= 10;
    }


    /* Frequency */

    if (food.frequency === "everyday") {
        score += 5;
    }

    if (food.frequency === "regular") {
        score += 3;
    }


    /* Meal-specific small preferences */

    if (mealType === "breakfast" && food.style === "quick") {
        score += 8;
    }


    if (mealType === "dinner" && food.style === "one-pot") {
        score += 5;
    }


    return score;

}


/* =========================================================
   9. GET SUITABLE FOODS
   ========================================================= */

function getCandidates(mealType) {

    return foods.filter(food => {

        if (!food.suitableFor.includes(mealType)) {
            return false;
        }

        if (isAvoided(food)) {
            return false;
        }

        if (state.notToday.includes(food.id)) {
            return false;
        }

        return true;

    });

}


/* =========================================================
   10. RANDOM SMALL VARIATION
   ========================================================= */

function addSmallVariation(score) {

    return score + Math.random() * 5;

}


/* =========================================================
   11. BREAKFAST DECISION
   ========================================================= */

function decideBreakfast(excludedId = null) {

    let candidates = getCandidates("breakfast");

    if (excludedId) {

        candidates = candidates.filter(
            food => food.id !== excludedId
        );

    }


    if (candidates.length === 0) {
        return null;
    }


    candidates.sort((a, b) => {

        return (
            addSmallVariation(scoreFood(b, "breakfast")) -
            addSmallVariation(scoreFood(a, "breakfast"))
        );

    });


    return {

        title: candidates[0].name,

        foods: [candidates[0]],

        type: "breakfast",

        template: "Breakfast",

        prep: candidates[0].prep,

        totalTime: candidates[0].time

    };

}


/* =========================================================
   12. COMPONENT FINDER
   ========================================================= */

function getComponentCandidates(
    category,
    mealType,
    usedIds = [],
    excludedId = null
) {

    return foods.filter(food => {

        if (food.category !== category) {
            return false;
        }

        if (!food.suitableFor.includes(mealType)) {
            return false;
        }

        if (isAvoided(food)) {
            return false;
        }

        if (usedIds.includes(food.id)) {
            return false;
        }

        if (state.notToday.includes(food.id)) {
            return false;
        }

        if (excludedId && food.id === excludedId) {
            return false;
        }

        return true;

    });

}


/* =========================================================
   13. PICK BEST COMPONENT
   ========================================================= */

function pickBestComponent(
    category,
    mealType,
    usedIds = []
) {

    const candidates =
        getComponentCandidates(
            category,
            mealType,
            usedIds
        );


    if (candidates.length === 0) {
        return null;
    }


    candidates.sort((a, b) => {

        return (
            scoreFood(b, mealType) -
            scoreFood(a, mealType)
        );

    });


    return candidates[0];

}


/* =========================================================
   14. LUNCH / DINNER DECISION
   ========================================================= */

function decideCombination(mealType) {

    const templates = mealTemplates[mealType];

    const possible = [];


    for (const template of templates) {

        let selected = [];
        let valid = true;


        for (const required of template.required) {

            let category = required;


            if (required === "complete") {

                const completeFoods =
                    getCandidates(mealType)
                        .filter(food => food.type === "complete");

                if (completeFoods.length === 0) {

                    valid = false;
                    break;

                }

                completeFoods.sort(
                    (a, b) =>
                        scoreFood(b, mealType) -
                        scoreFood(a, mealType)
                );

                selected.push(completeFoods[0]);

                continue;

            }


            const component =
                pickBestComponent(
                    category,
                    mealType,
                    selected.map(food => food.id)
                );


            if (!component) {

                valid = false;
                break;

            }


            selected.push(component);

        }


        if (valid && selected.length > 0) {

            let totalScore = 0;

            selected.forEach(food => {

                totalScore += scoreFood(
                    food,
                    mealType
                );

            });


            possible.push({
                template: template.name,
                foods: selected,
                score: totalScore
            });

        }

    }


    if (possible.length === 0) {
        return null;
    }


    possible.sort(
        (a, b) =>
            addSmallVariation(b.score) -
            addSmallVariation(a.score)
    );


    const winner = possible[0];


    return {

        title: winner.foods
            .map(food => food.name)
            .join(" + "),

        foods: winner.foods,

        type: mealType,

        template: winner.template,

        prep: winner.foods
            .map(food => food.prep)
            .filter(Boolean)
            .join(" "),

        totalTime: Math.max(
            ...winner.foods.map(food => food.time)
        )

    };

}


/* =========================================================
   15. DECIDE MEAL
   ========================================================= */

function decideMeal(mealType, excludedId = null) {

    if (mealType === "breakfast") {

        return decideBreakfast(excludedId);

    }


    return decideCombination(mealType);

}


/* =========================================================
   16. DISPLAY SUGGESTION
   ========================================================= */

function displaySuggestion(mealType, suggestion) {

    const area =
        document.getElementById("suggestionArea");

    if (!suggestion) {

        area.innerHTML = `
            <div class="thinking">
                I could not find a suitable suggestion.
                Try changing your preferences.
            </div>
        `;

        return;

    }


    state.currentSuggestions[mealType] =
        suggestion;


    const foodIds =
        suggestion.foods.map(food => food.id);


    const foodNames =
        suggestion.foods.map(food => food.name);


    let prepHTML = "";

    if (suggestion.prep) {

        prepHTML = `
            <div class="prep-box">
                <strong>🌙 Prepare Ahead</strong>
                ${suggestion.prep}
            </div>
        `;

    }


    area.innerHTML = `

        <div class="suggestion-main">

            <h2>${suggestion.title}</h2>

            <p class="suggestion-description">
                A practical suggestion for ${mealType}.
            </p>


            <div class="meal-combination">

                ${suggestion.foods.map(food => `
                    <div class="meal-item">
                        🍽️ ${food.name}
                    </div>
                `).join("")}

            </div>


            <div class="info-row">

                <span class="info-pill">
                    ⏱️ About ${suggestion.totalTime} min
                </span>

                <span class="info-pill">
                    👨‍👩‍👧‍👦 ${state.people} people
                </span>

            </div>


            ${prepHTML}


            <div class="action-buttons">

                <button
                    class="action-btn change-btn"
                    id="changeBtn">
                    🔄 Change
                </button>

                <button
                    class="action-btn not-today-btn"
                    id="notTodayBtn">
                    🚫 Not Today
                </button>

                <button
                    class="action-btn cooked-btn"
                    id="cookedBtn">
                    ✓ Cooked
                </button>

            </div>

        </div>

    `;


    document
        .getElementById("changeBtn")
        .addEventListener(
            "click",
            changeSuggestion
        );


    document
        .getElementById("notTodayBtn")
        .addEventListener(
            "click",
            notToday
        );


    document
        .getElementById("cookedBtn")
        .addEventListener(
            "click",
            markCooked
        );

}


/* =========================================================
   17. DECIDE CURRENT MEAL
   ========================================================= */

function makeDecision() {

    const mealType = state.currentMeal;

    const current =
        state.currentSuggestions[mealType];


    const excludedId =
        current &&
        current.foods.length === 1
            ? current.foods[0].id
            : null;


    const suggestion =
        decideMeal(
            mealType,
            excludedId
        );


    displaySuggestion(
        mealType,
        suggestion
    );

}


/* =========================================================
   18. CHANGE SUGGESTION
   ========================================================= */

function changeSuggestion() {

    const current =
        state.currentSuggestions[
            state.currentMeal
        ];


    let excludedId = null;

    if (
        current &&
        current.foods.length === 1
    ) {
        excludedId = current.foods[0].id;
    }


    const suggestion =
        decideMeal(
            state.currentMeal,
            excludedId
        );


    displaySuggestion(
        state.currentMeal,
        suggestion
    );

}


/* =========================================================
   19. NOT TODAY
   ========================================================= */

function notToday() {

    const current =
        state.currentSuggestions[
            state.currentMeal
        ];


    if (!current) {
        return;
    }


    current.foods.forEach(food => {

        if (!state.notToday.includes(food.id)) {

            state.notToday.push(food.id);

        }

    });


    saveState();


    makeDecision();

}


/* =========================================================
   20. COOKED
   ========================================================= */

function markCooked() {

    const mealType =
        state.currentMeal;


    const suggestion =
        state.currentSuggestions[mealType];


    if (!suggestion) {
        return;
    }


    const record = {

        date: getTodayKey(),

        meal: mealType,

        foodIds:
            suggestion.foods.map(
                food => food.id
            )

    };


    state.history.push(record);


    state.todayCooked.push({

        meal: mealType,

        title: suggestion.title

    });


    /* Remove temporary Not Today entries */

    suggestion.foods.forEach(food => {

        state.notToday =
            state.notToday.filter(
                id => id !== food.id
            );

    });


    saveState();


    renderTodayMenu();


    const next =
        decideMeal(mealType);


    displaySuggestion(
        mealType,
        next
    );

}


/* =========================================================
   21. TOMORROW
   ========================================================= */

function decideTomorrow() {

    const tomorrow =
        getTomorrowKey();


    const result = {};


    ["breakfast", "lunch", "dinner"]
        .forEach(mealType => {

            const suggestion =
                decideMeal(mealType);


            if (suggestion) {

                result[mealType] = {

                    title: suggestion.title,

                    foods:
                        suggestion.foods.map(
                            food => food.id
                        ),

                    prep: suggestion.prep,

                    totalTime:
                        suggestion.totalTime

                };

            }

        });


    state.tomorrowPlan = result;

    saveState();

    renderTomorrow();

}


/* =========================================================
   22. TODAY MENU
   ========================================================= */

function renderTodayMenu() {

    const area =
        document.getElementById("todayMenu");


    if (state.todayCooked.length === 0) {

        area.innerHTML = `
            <p class="empty-text">
                Your cooked meals will appear here.
            </p>
        `;

        return;

    }


    area.innerHTML =
        state.todayCooked
            .map(item => `

                <div class="menu-row">

                    <div class="menu-row-left">

                        <span class="menu-row-meal">
                            ${capitalize(item.meal)}
                        </span>

                        <span class="menu-row-name">
                            ${item.title}
                        </span>

                    </div>

                    <span class="menu-row-action">
                        ✓ Cooked
                    </span>

                </div>

            `)
            .join("");

}


/* =========================================================
   23. TOMORROW MENU
   ========================================================= */

function renderTomorrow() {

    const area =
        document.getElementById("tomorrowMenu");


    const plan =
        state.tomorrowPlan;


    if (
        !plan ||
        Object.keys(plan).length === 0
    ) {

        area.innerHTML = `
            <p class="empty-text">
                Plan tomorrow's meals when you're ready.
            </p>
        `;

        return;

    }


    area.innerHTML =
        ["breakfast", "lunch", "dinner"]
            .filter(meal => plan[meal])
            .map(meal => {

                const item = plan[meal];


                return `

                    <div class="menu-row">

                        <div class="menu-row-left">

                            <span class="menu-row-meal">
                                ${capitalize(meal)}
                            </span>

                            <span class="menu-row-name">
                                ${item.title}
                            </span>

                        </div>

                    </div>

                `;

            })
            .join("");

}


/* =========================================================
   24. SETTINGS FOOD LISTS
   ========================================================= */

function uniqueFoodIngredients() {

    const ingredients = [];

    foods.forEach(food => {

        food.ingredients.forEach(
            ingredient => {

                if (!ingredients.includes(ingredient)) {

                    ingredients.push(ingredient);

                }

            }
        );

    });


    return ingredients.sort();

}


function renderSettings() {

    const favouriteList =
        document.getElementById(
            "favouriteList"
        );


    const avoidList =
        document.getElementById(
            "avoidList"
        );


    const ingredientList =
        document.getElementById(
            "ingredientList"
        );


    favouriteList.innerHTML =
        foods
            .filter(food => food.type === "complete")
            .map(food => `

                <button
                    class="food-check ${
                        state.favourites.includes(food.id)
                            ? "selected"
                            : ""
                    }"
                    data-favourite="${food.id}">

                    ${food.name}

                </button>

            `)
            .join("");


    avoidList.innerHTML =
        foods
            .map(food => `

                <button
                    class="food-check ${
                        state.avoid.includes(food.id)
                            ? "selected"
                            : ""
                    }"
                    data-avoid="${food.id}">

                    ${food.name}

                </button>

            `)
            .join("");


    ingredientList.innerHTML =
        uniqueFoodIngredients()
            .map(ingredient => `

                <button
                    class="food-check ${
                        state.availableIngredients.includes(
                            ingredient
                        )
                            ? "selected"
                            : ""
                    }"
                    data-ingredient="${ingredient}">

                    ${capitalize(ingredient)}

                </button>

            `)
            .join("");


    document
        .querySelectorAll(
            "[data-favourite]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        button.dataset.favourite;


                    if (
                        state.favourites.includes(id)
                    ) {

                        state.favourites =
                            state.favourites.filter(
                                item => item !== id
                            );

                    } else {

                        state.favourites.push(id);

                    }


                    button.classList.toggle(
                        "selected"
                    );

                }
            );

        });


    document
        .querySelectorAll(
            "[data-avoid]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        button.dataset.avoid;


                    if (
                        state.avoid.includes(id)
                    ) {

                        state.avoid =
                            state.avoid.filter(
                                item => item !== id
                            );

                    } else {

                        state.avoid.push(id);

                    }


                    button.classList.toggle(
                        "selected"
                    );

                }
            );

        });


    document
        .querySelectorAll(
            "[data-ingredient]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const ingredient =
                        button.dataset.ingredient;


                    if (
                        state.availableIngredients
                            .includes(ingredient)
                    ) {

                        state.availableIngredients =
                            state.availableIngredients
                                .filter(
                                    item =>
                                        item !== ingredient
                                );

                    } else {

                        state.availableIngredients
                            .push(ingredient);

                    }


                    button.classList.toggle(
                        "selected"
                    );

                }
            );

        });

}


/* =========================================================
   25. CAPITALIZE
   ========================================================= */

function capitalize(text) {

    return text.charAt(0).toUpperCase()
        + text.slice(1);

}


/* =========================================================
   26. MEAL TAB EVENTS
   ========================================================= */

document
    .querySelectorAll(".meal-tab")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        ".meal-tab"
                    )
                    .forEach(btn =>
                        btn.classList.remove(
                            "active"
                        )
                    );


                button.classList.add("active");


                state.currentMeal =
                    button.dataset.meal;


                document.getElementById(
                    "mealTitle"
                ).textContent =
                    capitalize(
                        state.currentMeal
                    );


                const existing =
                    state.currentSuggestions[
                        state.currentMeal
                    ];


                if (existing) {

                    displaySuggestion(
                        state.currentMeal,
                        existing
                    );

                } else {

                    makeDecision();

                }

            }
        );

    });


/* =========================================================
   27. TIME / PEOPLE EVENTS
   ========================================================= */

document
    .getElementById("timePreference")
    .addEventListener(
        "change",
        event => {

            state.timePreference =
                event.target.value;

            saveState();

            makeDecision();

        }
    );


document
    .getElementById("peopleCount")
    .addEventListener(
        "change",
        event => {

            state.people =
                event.target.value;

            saveState();

        }
    );


/* =========================================================
   28. SETTINGS EVENTS
   ========================================================= */

document
    .getElementById("settingsBtn")
    .addEventListener(
        "click",
        () => {

            document
                .getElementById(
                    "settingsPanel"
                )
                .classList.remove(
                    "hidden"
                );

            renderSettings();

        }
    );


document
    .getElementById("closeSettingsBtn")
    .addEventListener(
        "click",
        () => {

            document
                .getElementById(
                    "settingsPanel"
                )
                .classList.add(
                    "hidden"
                );

        }
    );


document
    .getElementById("saveSettingsBtn")
    .addEventListener(
        "click",
        () => {

            saveState();

            document
                .getElementById(
                    "settingsPanel"
                )
                .classList.add(
                    "hidden"
                );

            makeDecision();

        }
    );


/* =========================================================
   29. TOMORROW BUTTON
   ========================================================= */

document
    .getElementById("tomorrowBtn")
    .addEventListener(
        "click",
        decideTomorrow
    );


/* =========================================================
   30. ABOUT MODALS
   ========================================================= */

document
    .getElementById("aboutBtn")
    .addEventListener(
        "click",
        () => {

            document
                .getElementById(
                    "aboutModal"
                )
                .classList.remove(
                    "hidden"
                );

        }
    );


document
    .getElementById("aboutUsBtn")
    .addEventListener(
        "click",
        () => {

            document
                .getElementById(
                    "aboutUsModal"
                )
                .classList.remove(
                    "hidden"
                );

        }
    );


document
    .querySelectorAll(
        "[data-close]"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .getElementById(
                        button.dataset.close
                    )
                    .classList.add(
                        "hidden"
                    );

            }
        );

    });


/* =========================================================
   31. INITIALISE APP
   ========================================================= */

function initialiseApp() {

    loadState();


    document.getElementById(
        "timePreference"
    ).value =
        state.timePreference;


    document.getElementById(
        "peopleCount"
    ).value =
        state.people;


    document.getElementById(
        "dateText"
    ).textContent =
        formatDate(
            getTodayKey()
        );


    renderTodayMenu();

    renderTomorrow();

    makeDecision();

}


initialiseApp();
