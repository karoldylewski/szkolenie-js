while (true) {
    var mountains = [];
    var highestMountain = 0;
    for (let i = 0; i < 8; i++) {
        const mountainH = parseInt(readline()); // represents the height of one mountain.
        if (mountainH>highestMountain){
            highestMountain=mountainH;
            mountains.push(i);
        }
    }
    console.log(mountains.pop()); // The index of the mountain to fire on.
}