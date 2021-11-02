function getPeople(handshake) {
    let hands = 0;
    let peoples = 0;

    while (hands < handshake) {
        peoples++;
        hands += peoples;
    }

    if (hands > handshake) {
        throw new Error('wrong data');
    }

    return peoples;
}


console.log(getPeople(15));
console.log(getPeople(120));