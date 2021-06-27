class Keyboard {

  constructor() {

    this.highlightedKey = null;

    this.keyMap = [
      'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
      'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
      'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.',
      ' ' //space
    ];
  }

  setCurrentKey(currentKey) {
    this.highlightedKey = currentKey.toLowerCase();
  }

  filterStrToAvailableKeys(dirtyString) {

    let cleanString = '';
    dirtyString.split().forEach((dirtyChar) => {
      if (this.keyMap.includes(dirtyChar)) {
        let cleanChar = dirtyChar;
        cleanString += cleanChar;
      }
    });

    return cleanString;
  }

  render() {

    let lastKeys = ['p', 'l', '.'];

    let finalHtml = '';
    this.keyMap.forEach((key) => {

      let isHighlighted = (key === this.highlightedKey);
      finalHtml += `
        <div id="the${key.toUpperCase()}Key"
        class="textCenter pad20 border ${isHighlighted ? 'grayBg' : ''}"
        style="float: left; min-width: 30px;">
          ${(key === ' ') ? 'Spacebar' : key.toUpperCase()}
        </div>
      `;
      if (lastKeys.includes(key)) {
        finalHtml += '<br><br><br>';
      }
    });

    $('#keyboard').html(finalHtml);
  }
}
export {
  Keyboard
}
