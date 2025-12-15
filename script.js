function firstNonRepeatedChar(str) {
    if (!str || str.length === 0) return null;

    let freq = {};

    // Count frequency of each character
    for (let ch of str) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    // Find the first non-repeating character
    for (let ch of str) {
        if (freq[ch] === 1) {
            return ch;
        }
    }

    return null;
}
