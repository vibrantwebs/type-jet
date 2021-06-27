
// array of words, which is each an array of letters

class Stage {

  constructor() {

    this.wordMap = [];
    this.currentWordIndex = 0;
    this.currentLetterIndex = 0;
  }

  /**
   * Take an array of words and build the word map
   */
  populateWordMap(str) {

    let words = str.split(' ');

    let wm = [];
    for (const word of words) {

      let charArray = [...word];
      wm.push(charArray);
      wm.push([' ']);
    }
    wm.pop(); // lose the trailing space
    this.wordMap = wm;
  }

  getCurrentLetter() {
    return this.wordMap[this.currentWordIndex][this.currentLetterIndex];
  }

  getWordMap() {
    return this.wordMap;
  }

  moveForward() {

    let isLastWord = false;
    let isLastLetter = this._nextLetter();
    if (isLastLetter) {
      isLastWord = this._nextWord();
    }

    if (isLastLetter && !isLastWord) {
      this.currentLetterIndex = 0; // reset the letter index
    }

    return isLastWord;
  }

  /**
   * Updates display (AFTER data structure changes)
   */
  render() {
    //$('#stage').html(internalHTML);
    /**
    console.log("Word Map:", this.wordMap);
    console.log(
      "Current Word",
      this.wordMap[this.currentWordIndex].join('')
    );
    console.log(
      "Current Letter:",
      this.wordMap[this.currentWordIndex][this.currentLetterIndex]
    );
    /**/

    let finalHtml = '';

    this.wordMap.forEach((word, wordIdx) => {
      let isCurrentWord = (wordIdx === this.currentWordIndex);
      let wordContainerColor = isCurrentWord ? 'lightgray' : 'white';

      let wordHtml = '';
      word.forEach((letter, letterIdx) => {

        let isCurrentLetter = (isCurrentWord && letterIdx === this.currentLetterIndex);
        let letterColor = isCurrentLetter ? 'blue' : 'black';

        let letterHtml = `<span style="color: ${letterColor}">${letter}</span>`;
        wordHtml += letterHtml;
      });

      let wordContainerHtml = `<div style="background: ${wordContainerColor}; padding: 5px;">${wordHtml}</div>`;

      finalHtml += wordContainerHtml;
    });

    $('#stage').html(`<div style="display: flex;">${finalHtml}</div>`);
  }

  /**
   * PRIVATE
   * Iterates to next index
   * Returns false if end of word is reached
   */
  _nextLetter() {

    let isLastLetter = true;
    let currentLetterIndex = this.currentLetterIndex;
    let nextLetterIndex = currentLetterIndex + 1;
    let currentWord = this.wordMap[this.currentWordIndex];

    if (nextLetterIndex < currentWord.length) {
      this.currentLetterIndex = nextLetterIndex;
      isLastLetter = false;
    }
    return isLastLetter;
  }

  /**
   * PRIVATE
   * Iterates to next index
   * Returns false if no remaining words
   */
  _nextWord() {
    let isLastWord = true;
    let currentWordIndex = this.currentWordIndex;
    let nextWordIndex = currentWordIndex + 1;

    if (nextWordIndex < this.wordMap.length) {
      this.currentWordIndex = nextWordIndex;
      isLastWord = false;
    }
    return isLastWord;
  }
}

export {
  Stage
}
