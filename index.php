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

    .smoke {
      color: whitesmoke;
    }

    .border {
      border: 1px solid black;
    }

    .pad30 {
      padding: 30px;
    }

    p, a, span, div {
      font-size: 22px;
    }

  </style>
</head>
<body style="padding: 50px;">

  <!--<h1>TypeJet</h1>-->
  <h1>Keystorm</h1>
  <div id="stage" class="border pad30">
    <h3>The Stage</h3>
    <p>
      <!-- Inject words here -->
    </p>
  </div>
  <br>
  <div id="keyboard" class="border pad30">
    <h3>Keyboard</h3>
  </div>
  <br>
  <div id="handContainer" style="display: flex;">
    <div style="flex: 1" class="border pad30">
      <h3>Left Hand</h3>
    </div>
    <div style="flex: 1" class="border pad30">
      <h3>Right Hand</h3>
    </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
  <script type="module">

    import {Stage} from "./Stage.js";

    let stage = new Stage()
    stage.populateWordMap("Hello owl I love yeow");

    stage.render();

    // todo: for testing
    window.stage = stage;

    $(document).ready(() => {

      document.addEventListener('keypress', (e) => {

        let key = String.fromCharCode(e.which).toLowerCase();
        let currentLetter = stage.getCurrentLetter().toLowerCase();

        // console.log("current "+stage.getCurrentLetter());
        // console.log("pressed "+key);


        if (key === currentLetter) {
          //console.log("move forward");
          stage.moveForward();

        } else {
          console.log("WRONG ONE BITCH!");
        }

        stage.render();

      });
    });


  </script>
</body>
</html>
