/** Print out steps based on a given positive integer N.
 * For each line, print out the character '#' to demonstrate 
 * a step and make sure to use spaces to fill in the line.
 *
 * @example
 * steps(2)
 *  '# '
 *  '##'
 * steps(3)
 *  '#  '
 *  '## '
 *  '###'
 * steps(4)
 *  '#   '
 *  '##  '
 *  '### '
 *  '####'
 */

const steps = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log('#'.repeat(i) + ' '.repeat(n - i));
    }

};

module.exports = steps;
