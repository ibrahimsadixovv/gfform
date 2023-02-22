
const dogru = document.querySelectorAll(".true");
const yanlis = document.querySelectorAll(".false");
const netice = document.querySelectorAll(".netice");

const questionGroups = [
    {trues: document.querySelectorAll(".true1"), falses: document.querySelectorAll(".false1")},
    {trues: document.querySelectorAll(".true2"), falses: document.querySelectorAll(".false2")},
    {trues: document.querySelectorAll(".true3"), falses: document.querySelectorAll(".false3")},
    {trues: document.querySelectorAll(".true4"), falses: document.querySelectorAll(".false4")},
    {trues: document.querySelectorAll(".true5"), falses: document.querySelectorAll(".false5")},
    {trues: document.querySelectorAll(".true6"), falses: document.querySelectorAll(".false6")},
    {trues: document.querySelectorAll(".true7"), falses: document.querySelectorAll(".false7")},
  ];

  

  
  
  const scoreElement = document.querySelector(".score");
  let score = 0;

  let clickedt = false;
let clickedf = false;

dogru.forEach(function(item) {
    item.addEventListener("click", function() {
        item.parentElement.querySelector('.message').style.display = 'none'
        this.style.backgroundColor = "green";
        this.style.color = "white";

        yanlis.forEach(function(item) {
            item.style.backgroundColor = "initial";
            item.style.color = "black";
        });

        if (!clickedt && !clickedf) {
            score += 1;
            clickedt = true;
        } else if (clickedf && !clickedt) {
            score += 10001;
            clickedt = true;
            clickedf = false;
        }
        updateScore();
    });
});

yanlis.forEach(function(item) {
    item.addEventListener("click", function() {
        
        item.parentElement.querySelector('.message').style.display = 'inline';
        this.style.backgroundColor = "red";
        this.style.color = "white";
        dogru.forEach(function(item) {
            item.style.backgroundColor = "initial";
            item.style.color = "black";
        });

        if (!clickedt && !clickedf) {
            score -= 10000;
            clickedf = true;
        } else if (clickedt && !clickedf) {
            score -= 10001;
            clickedf = true;
            clickedt = false;
        }
        updateScore();
    });
});
document.addEventListener('click', function() {
      netice.forEach(item => {
        
        item.addEventListener('click', () => {
          if (score>=-10006 && score <-6) {
            resetDisplay();
            item.parentElement.querySelector('.oglan').style.display = 'inline';
           
          }
          else if (score >= -5 && score <= -3) {
            resetDisplay();
            item.parentElement.querySelector('.yox').style.display = 'inline';
          }
          else if (score < 2 && score > -3) {
            resetDisplay();
            item.parentElement.querySelector('.belke').style.display = 'inline';
          }
          else if (score >= 2 && score < 4) {
            resetDisplay();
            item.parentElement.querySelector('.olarolar').style.display = 'inline';
          }
          else if (score >= 4) {
            resetDisplay();
            item.parentElement.querySelector('.olsun').style.display = 'inline';
          }
        });
      });
    
  
    function resetDisplay() {
      netice.forEach(item => {
        item.parentElement.querySelector('.oglan').style.display = 'none';
        item.parentElement.querySelector('.yox').style.display = 'none';
        item.parentElement.querySelector('.belke').style.display = 'none';
        item.parentElement.querySelector('.olarolar').style.display = 'none';
        item.parentElement.querySelector('.olsun').style.display = 'none';
      });
    }
});


  
  let clicked = questionGroups.map(() => ({t: false, f: false}));
  
  questionGroups.forEach((group, index) => {
    const trues = group.trues;
    const falses = group.falses;
    const clickedt = () => clicked[index].t;
    const clickedf = () => clicked[index].f;
  
    trues.forEach(function(item) {
      item.addEventListener("click", function() {
        this.style.backgroundColor = "green";
        this.style.color = "white";
  
        falses.forEach(function(item) {
          item.style.backgroundColor = "initial";
          item.style.color = "black";
        });
  
        if (!clickedt() && !clickedf()) {
          score += 1;
          clicked[index].t = true;
        } else if (clickedf() && !clickedt()) {
          score += 2 ;
          clicked[index].t = true;
          clicked[index].f = false;
        }
        updateScore();
      });
    });
  
    falses.forEach(function(item) {
      item.addEventListener("click", function() {
        this.style.backgroundColor = "red";
        this.style.color = "white";
  
        trues.forEach(function(item) {
          item.style.backgroundColor = "initial";
          item.style.color = "black";
        });
  
        if (!clickedt() && !clickedf()) {
          score -= 1 ;
          clicked[index].f = true;
        } else if (clickedt() && !clickedf()) {
          score -= 2 ;
          clicked[index].f = true;
          clicked[index].t = false;
        }
        updateScore();
      });
    });
  });
  
  function updateScore() {
    scoreElement.innerHTML= "Score: " + score;
  }

  
  