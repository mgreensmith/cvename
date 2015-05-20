var words = ['head', 'heart', 'brain', 'toxic', 'cold', 'shock', 'bleed', 'venom', 'fire', 'snake', 'cobra', 'fang', 'flood', 'blast', 'bite', 'scorpion', 'stinger', 'spark', 'flame', 'swarm', 'weeping'];

// http://stackoverflow.com/questions/11935175/sampling-a-random-subset-from-an-array
function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, min = i - size, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

function newWord() {
  document.getElementById("name").innerHTML = getRandomSubarray(words, 2).join('');
}

newWord();
