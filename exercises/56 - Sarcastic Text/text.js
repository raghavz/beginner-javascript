const textarea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const filterInputs = Array.from(document.querySelectorAll('[name="filter"]'));

/* eslint-disable */
const funkyLetters = {
    '-': '₋', '!': 'ᵎ', '?': 'ˀ', '(': '⁽', ')': '₎', '+': '⁺', '=': '₌', '0': '⁰', '1': '₁', '2': '²', '4': '₄', '5': '₅', '6': '₆', '7': '⁷', '8': '⁸', '9': '⁹', a: 'ᵃ', A: 'ᴬ', B: 'ᴮ', b: 'ᵦ', C: '𝒸', d: 'ᵈ', D: 'ᴰ', e: 'ₑ', E: 'ᴱ', f: '𝒻', F: 'ᶠ', g: 'ᵍ', G: 'ᴳ', h: 'ʰ', H: 'ₕ', I: 'ᵢ', i: 'ᵢ', j: 'ʲ', J: 'ᴶ', K: 'ₖ', k: 'ₖ', l: 'ˡ', L: 'ᴸ', m: 'ᵐ', M: 'ₘ', n: 'ₙ', N: 'ᴺ', o: 'ᵒ', O: 'ᴼ', p: 'ᵖ', P: 'ᴾ', Q: 'ᵠ', q: 'ᑫ', r: 'ʳ', R: 'ᵣ', S: 'ˢ', s: 'ˢ', t: 'ᵗ', T: 'ₜ', u: 'ᵘ', U: 'ᵤ', v: 'ᵛ', V: 'ᵥ', w: '𝓌', W: 'ʷ', x: 'ˣ', X: 'ˣ', y: 'y', Y: 'Y', z: '𝓏', Z: 'ᶻ'
  };
/* eslint-enable */

const filters = {
  sarcastic(lettter, index) {
    // If even.
    if (index % 2 > 0) {
      return lettter.toUpperCase();
    }

    // If odd.
    return lettter.toLowerCase();
  },

  funky(letter) {
    // If there is a funky letter for letter.
    let funkyLetter = funkyLetters[letter];
    if (funkyLetter) return funkyLetter;

    // Else if there is a funky letter for the lowercase version of letter.
    funkyLetter = funkyLetters[letter.toLowerCase()];
    if (funkyLetter) return funkyLetter;

    // Else return the regular letter.
    return letter;
  },
  unable(letter) {
    /* For every space entered, we want a 1 in 3 chance that it will be replaced by dots. */
    const random = Math.floor(Math.random() * 3);
    if (letter === ' ' && random === 2) {
      return '...';
    }

    return letter;
  },
};

function transformText(text) {
  const filter = filterInputs.find(input => input.checked === true).value;
  const mod = Array.from(text).map(filters[filter]);
  // Combine all chars into a string.
  result.textContent = mod.join('');
}

textarea.addEventListener('input', event => transformText(event.target.value));
filterInputs.forEach(input =>
  input.addEventListener('input', () => {
    transformText(textarea.value);
  })
);
