/*
 * CodeSignal Arcade "Phone Call"
 * 
 * https://app.codesignal.com/arcade/code-arcade/intro-gates/mZAucMXhNMmT7JWta
 * 
 * Some phone usage rate may be described as follows:
 * 
 * first minute of a call costs min1 cents,
 * each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
 * each minute after 10th costs min11 cents.
 * 
 * You have s cents on your account before the call. What is the duration of the
 * longest call (in minutes rounded down to the nearest integer) you can have?
 * 
 * Example
 * 
 * For min1 = 3, min2_10 = 1, min11 = 2, and s = 20, the output should be
 * phoneCall(min1, min2_10, min11, s) = 14.
 * 
 * Here's why:
 * the first minute costs 3 cents, which leaves you with 20 - 3 = 17 cents;
 * the total cost of minutes 2 through 10 is 1 * 9 = 9, so you can talk 9 more
 * minutes and still have 17 - 9 = 8 cents;
 * each next minute costs 2 cents, which means that you can talk 8 / 2 = 4 more
 * minutes.
 * 
 * Thus, the longest call you can make is 1 + 9 + 4 = 14 minutes long.
 * 
 * Input/Output
 * 
 * [execution time limit] 4 seconds (js)
 * 
 * [input] integer min1
 * 
 * Guaranteed constraints:
 * 1 ≤ min1 ≤ 10.
 * 
 * [input] integer min2_10
 * 
 * Guaranteed constraints:
 * 1 ≤ min2_10 ≤ 10.
 * 
 * [input] integer min11
 * 
 * Guaranteed constraints:
 * 1 ≤ min11 ≤ 10.
 * 
 * [input] integer s
 * 
 * Guaranteed constraints:
 * 2 ≤ s ≤ 500.
 * 
 * [output] integer
 */


function phoneCall(min1, min2_10, min11, s) {
    // Initialize the call length at zero minutes.
    var callLength = 0;
    // If we don't have enough money for even the
    // first minute, return 0 because we can't make
    // a call at all.
    if (s < min1)
        return 0;
    // Otherwise, deduct the cost of the first minute
    // from our balance...
    s -= min1;
    // ...and add a minute to our call length so far.
    callLength++;
    // See if we have enough money to pay for nine
    // more minutes (that is, enough for minutes 2
    // through 10)...
    if (s >= min2_10*9)
    {
        // If so, take the cost of those nine minutes
        // out of our balance...
        s -= min2_10*9;
        // And add nine minutes to our call length.
        callLength += 9;
    }
    // Otherwise...
    else
    {
        // Add as many minutes as we can afford to
        // our call length, and return the resulting
        // length.
        callLength += Math.floor(s / min2_10);
        return callLength;
    }
    // If we have enough money for any more minutes,
    // find out how many and add them to our call
    // length. Then return the total length.
    callLength += Math.floor(s / min11);
    return callLength;
}
