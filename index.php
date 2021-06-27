<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <title>TypeJet</title>
  <meta name="description" content="Suck at typing? Get better!">
  <meta name="author" content="Andrew Musholt">
  <style>
    .darkSlateBg {
      background: #131921;
    }

    .slateBg {
      background: #232F3E;
    }

    .grayBg {
      background: lightgray;
    }

    .smoke {
      color: whitesmoke;
    }

    .border {
      border: 1px solid black;
    }

    .pad30 {
      padding: 30px;
    }

    .pad20 {
      padding: 20px;
    }

    .textCenter {
      text-align: center;
    }

    p, a, span, div {
      font-size: 22px;
    }

    .finger {
      border: 1px solid black;
      width: 50px;
      align-self: flex-end;
    }

  </style>
</head>
<body style="padding-left: 50px;">
  <div id="stage" class="border pad30">
    <!-- words populate here -->
  </div>
  <br>
  <div id="keyboard" class="border pad30" style="min-height: 300px;">
    <!-- keys populate here -->
  </div>
  <br>
  <div id="hands">
    <!-- hands populat here -->
  </div>

  <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
  <script type="module">

    import {Stage} from "./Stage.js";
    import {Keyboard} from "./Keyboard.js";
    import {Hands} from "./Hands.js";

    let inStr = "the of and a to in is you that it he was for on are as with his they at be this have from or one had by word but not what all were we when your can said";
    // todo: later - use keyboard.filter to clean copy/pasted strings

    let keyboard = new Keyboard();

    let stage = new Stage();
    stage.populateWordMap(
      inStr
    );
    stage.render();

    let firstLetter = stage.getCurrentLetter();
    keyboard.setCurrentKey(firstLetter);
    keyboard.render();

    let hands = new Hands();
    hands.setCurrentKey(firstLetter);
    hands.render();

    $(document).ready(() => {

      document.addEventListener('keypress', (e) => {

        let key = String.fromCharCode(e.which).toLowerCase();
        let currentLetter = stage.getCurrentLetter().toLowerCase();

        if (key === currentLetter) {
          stage.moveForward();

        } else {
          console.log("Wrong one, son!");
        }

        keyboard.setCurrentKey(stage.getCurrentLetter());
        hands.setCurrentKey(stage.getCurrentLetter());

        stage.render();
        keyboard.render();
        hands.render();
      });
    });


  </script>
</body>
</html>
