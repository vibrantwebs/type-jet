class Hands {

  constructor() {

    this.highlightedFinger = null;

    this.keyFingerMapping = {
      leftPinky: ['q', 'a', 'z'],
      leftIndex: ['w', 's', 'x'],
      leftMiddle: ['e', 'd', 'c'],
      leftPointer: ['r', 'f', 'v', 't', 'g', 'b'],
      leftThumb: [' '], // space
      rightThumb: [],
      rightPointer: ['y', 'h', 'n', 'u', 'j', 'm'],
      rightMiddle: ['i', 'k', ','],
      rightIndex: ['o', 'l', '.'],
      rightPinky: ['p', ';', '/'],
    }
  }

  setCurrentKey(currentKey) {
    this.currentKey = currentKey.toLowerCase();
  }

  render() {

    let finalHtml = `
      <div id="handContainer" style="display: flex;">
        <div style="display: flex;" class="border pad30">
          <div id="leftPinky" class="finger" style="height: 250px;"></div>
          <div id="leftIndex" class="finger" style="height: 275px;"></div>
          <div id="leftMiddle" class="finger" style="height: 300px;"></div>
          <div id="leftPointer" class="finger" style="height: 260px;"></div>
          <div id="leftThumb" class="finger" style="height: 130px;"></div>
        </div>
        <div style="width: 20px;">
        </div>
        <div style="display: flex;" class="border pad30">
          <div id="rightThumb" class="finger" style="height: 130px;"></div>
          <div id="rightPointer" class="finger" style="height: 260px;"></div>
          <div id="rightMiddle" class="finger" style="height: 300px;"></div>
          <div id="rightIndex" class="finger" style="height: 275px;"></div>
          <div id="rightPinky" class="finger" style="height: 250px;"></div>
        </div>
      </div>
    `;

    $('#hands').html(finalHtml);

    let map = this.keyFingerMapping;
    Object.keys(map).forEach((key) => {

      if (map[key].includes(this.currentKey)) {
        $('#'+key).css({background: 'lightgray'});
      }
    });
  }
}

export {
  Hands
}
