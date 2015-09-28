  function changeDoot()
  {
    var imagePath  = "assets/img/"

    var doots = [
    imagePath + "1.jpg", 
    imagePath + "2.jpg",
    imagePath + "3.jpg",
    imagePath + "4.jpg",
    imagePath + "5.jpg",
    imagePath + "6.jpg",
    imagePath + "doot.gif"
    ];

    var randDoot = doots[Math.floor(Math.random() * doots.length)];

    document.getElementById("dootImg").src = randDoot;

  }