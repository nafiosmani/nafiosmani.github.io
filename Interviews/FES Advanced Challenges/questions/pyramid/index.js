/** Print out steps for a pyramid based on a given positive integer N.
 * For each line, print out the character '#' to demonstrate a step 
 * and make sure to use spaces to fill in the line.
 *
 * @example
 * pyramid(2) -> 3
 *  ' # '
 *  '###'
 * pyramid(3) -> 5
 *  '  #  '
 *  ' ### '
 *  '#####'
 * pyramid(4) -> 7
 *  '   #   '
 *  '  ###  '
 *  ' ##### '
 *  '#######'
 */

const pyramid = (n) => {
    let result = '';
    let spaces = ' '.repeat(n - 1);
    let hashes = '#'.repeat(1);
    for (let i = 1; i <= n; i++) {
        result += spaces + hashes + spaces + '\n';
        spaces = spaces.slice(0, -1);
        hashes += '##';
    }
    return result;
  
};

module.exports = pyramid;
