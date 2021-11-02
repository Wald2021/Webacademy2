function getVillainName(birthday) {
    const m = ["Evil", "Vile", "Cruel", "Trashy", "Despicable", "Embarrassing", "Disreputable", "Atrocious", "Twirling", "Orange", "Terrifying", "Awkward"];
    const d = ["Mustache", "Pickle", "Hood Ornament", "Raisin", "Recycling Bin", "Potato", "Tomato", "House Cat", "Teaspoon", "Laundry Basket"];
    var VillainName;

    VillainName = (m[birthday.getMonth()]) +
        " " + (d[birthday.getDate() % 10]);

    console.log(VillainName);
    return (VillainName);
}

getVillainName(new Date("April 23"));

function isValidWalk(walk) {
    let n = 0;
    let s = 0;
    let w = 0;
    let e = 0;
    //console.log(n, s, w, e, walk);
    for (i = 0; i < walk.length; i++) {
        // console.log(walk[i]);
        switch (walk[i]) {
            case 'n': n += 1;
                //console.log('n=', n);
                break;
            case 's': s += 1;
                //console.log('s=', s);
                break;
            case 'w': w += 1;
                //console.log('w=', w);
                break;
            case 'e': e += 1;
                //console.log('e=', e);
                break;
            default:
                break;
        }
    }
    if ((n !== s) || (w !== e) || (walk.length != 10)) {
        console.log(false);
        return false;
    }
    console.log(true);
    return true;
}
isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']);
isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']);
isValidWalk(['w']);
isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']);

var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

for (i = 0; i < questions.length; i++) {
    //for (let questions[i].userAnswer in questions) {
    questions[i].userAnswer = null;

}
//}

//(questions[0].userAnswer) = null;
console.log(questions);