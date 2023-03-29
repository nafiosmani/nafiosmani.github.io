/** Given a sentence, capitalize the first letter of each word and 
 * return the capitalized sentence.
 *
 * @example
 * capitalize('coding is awesome') === 'Coding Is Awesome'
 * capitalize('a green apple') === 'A Green Apple'
 * capitalize('i love frontend simplified') === 'I Love Frontend Simplified'
 */

const capitalize = (str) => {
        let result = str.split(' ');
        for (let i = 0; i < result.length; i++) {
            result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
        }
        return result.join(' ');
};

module.exports = capitalize;
