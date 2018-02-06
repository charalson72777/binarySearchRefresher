function findInt(numberArray, key) {
    var middleIdx = Math.floor(numberArray.length / 2);
    var middleElem = numberArray[middleIdx];
    
    if (middleElem === key) return true;
    else if (middleElem < key && numberArray.length > 1) {
        return findInt(numberArray.splice(middleIdx, numberArray.length), key);
    }
    else if (middleElem > key && numberArray.length > 1) {
        return findInt(numberArray.splice(0, middleIdx), key);
    }
    else return false;
}

findInt([5, 7, 12, 16, 36, 39, 42, 56, 71], 42);