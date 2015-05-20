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

/**
 * Utility to wrap the different behaviors between W3C-compliant browsers
 * and IE when adding event handlers.
 *
 * @param {Object} element Object on which to attach the event listener.
 * @param {string} type A string representing the event type to listen for
 *     (e.g. load, click, etc.).
 * @param {function()} callback The function that receives the notification.
 */
function addListener(element, type, callback) {
 if (element.addEventListener) element.addEventListener(type, callback);
 else if (element.attachEvent) element.attachEvent('on' + type, callback);
}

function newWord() {
  document.getElementById("name").innerHTML = getRandomSubarray(words, 2).join('');
}

newWord();

var newWordLink = document.getElementById('again');

addListener(newWordLink, 'click', function() {
  newWord();
  ga('send', 'event', 'button', 'click', 'newWordLink');
});
