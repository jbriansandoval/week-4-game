$(document).ready(function(){
  var computerPick = [Math.floor((Math.random() * 100) + 1)];
  console.log("CP: " + computerPick);

  //DELETE
  var newComputerPick = function () {
    this.computerPick = this.Math.floor((Math.random() * 100) + 1);
    }

    
    var randomNumber = computerPick;
    $('#randomNumber').text(randomNumber);

    var rubyPts = [Math.floor((Math.random() * 10) + 1)];
    console.log("Ruby: " + rubyPts);
    $('#ruby').text(rubyPts)
    var turqPts = [Math.floor((Math.random() * 10) + 1)];
    console.log("Turquoise: " + turqPts);
    var emeraPts = [Math.floor((Math.random() * 10) + 1)];
    console.log("Emerald: " + emeraPts);
    var DiamondPts = [Math.floor((Math.random() * 10) + 1)];
    console.log("Diamond: " + DiamondPts);

    var wins = 0;
    var losses = 0;
    var yourScore = 0

    $('#wins').text("NWins: " + wins);
    // //resets the game
    // function reset(){
    //   ComputerPick=Math.floor((Math.random() * 100) + 1);
    //   console.log("NCP: " + ComputerPick);
    //   $('randomNumber').text(ComputerPick);
    //   var rubyPts = [Math.floor((Math.random() * 10) + 1)];
    //   console.log("NRuby: " + rubyPts);
    //   var turqPts = [Math.floor((Math.random() * 10) + 1)];
    //   console.log("NTurquoise: " + turqPts);
    //   var emeraPts = [Math.floor((Math.random() * 10) + 1)];
    //   console.log("NEmerald: " + emeraPts);
    //   var DiamondPts = [Math.floor((Math.random() * 10) + 1)];
    //   console.log("NDiamond: " + DiamondPts);
    //   yourScore = 0;
    //   $('yourScore').text(yourScore);
    // }


    function won(){
    alert("You won!");
      wins++; 
      $('#wins').text("NWins: " + wins);
      reset();
    }

    function lost(){
      alert("You Lost!");
      losses++;
      // $("Losses: ").text(losses)
      reset();
    }

    //sets up click for jewels
    $('#ruby').on ('click', function(){
      yourScore = yourScore + rubyPts;
      console.log("New yourScore= " + yourScore);
      $('#yourscore').text(yourScore); 
            //sets win/lose conditions
          if (yourScore == computerPick){
            won();
          }
          else if ( yourScore > computerPick){
            lost();
          }   
    }); 

    // if (yourScore === computerPick){
    //   wins++;
    //   console.log("wins:" + wins)
    //   document.getElementById("wins").innerHTML = "Wins: " + wins;
    //   newComputerPick();  
    // } 

    // if (yourScore > computerPick){
    //   console.log("CP: " + computerPick);
    //   document.getElementById("wins").innerHTML = "Wins: " + wins;
    //   document.getElementById("losses").innerHTML = "Losses: " + losses;
      
    // }

    //  <h2 id="randomNumber">Random Number</h2>
    // <br>
    // <p id="wins">Wins: 0</p>
    // <p id="losses">Losses: 0</p>

    // <img id="ruby" src="assets\images\ruby.jpeg" alt="ruby" width="100px" height="100px">
    // <img id="turq" src="assets\images\Turq.jpg" alt="Turq" width="100px" height="100px">
    // <img id="emerald" src="assets\images\emera.jpg" alt="Emerald" width="100px" height="100px">
    // <img id="Diamond" src="assets\images\diam.jpg" alt="Diamond" width="100px" height="100px">

    // <p>Your total score is:</p>
    // <h2 id="yourScore">0</h2>

  });

