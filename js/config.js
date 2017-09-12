var
    DOC = document,
    canvas = DOC.getElementById("13canvas"),
    WIDTH = canvas.width,
    HEIGHT = canvas.height,

    //avoid score counts when window is unfocus
    focus = true,
    setFocus,

    //set mute
    mute = false,

    // status of the game
    s = 0,
    sTemp,

    //new game controll
    newGame = true,

    score=0,
    historyScore,

    //set image vars
    ctx = canvas.getContext("2d"),
    bg = new Image(),
    heroImg = new Image(),
    foodImg = new Image(),
    guardImg = new Image(),

    //////////////////////////////////game setting ///////////////////////////////
    //plus view
    plusView = 15;
    limitView = 50;
    limitUpView = 300;
    minusSpeed = 185;

    ////////main role setting////////
    //position of the hero
    x = 150,
    y = 150,
    hp = 5,
    view = 100,
    speed = 5,

    ////////food setting////////
    foodView = 50,
    //food number
    fnum = 1, //fixed

    ////////guard setting////////
    //guard number
    gnum = 4,
    gnumRate = 2,
    gnumLimit = 25 ,

    guardSpeed = 1,
    guardSpeedUp = 0.1,
    guardSpeedLimit = 3,

    guardSpeed2 = 5,
    guardSpeedUp2 = 0.5,
    guardSpeedLimit2 = 15,

    guardTime = 5000,
    guardTime2 = 5000,
    beginScore = 50,

//////////////////////////////////////////////////////////////////////////////

    //collision size
    heroSize = 30,
    guardSize = 30,
    foodSize = 20,

    //the size of each characters draw in the canvas
    heroDrawSize = 40,
    guardDrawSize = 40,
    foodDrawSize = 30,

    //size of the png file
    heroPicSize = 30,
    guardPicSize = 30,
    foodPicSize = 20,

    //for the picture animate
    ig = 0,

    //Flash for the Text
    ig2 = 0,

    keys = {},
    blood = false,

    //for the first page animate
    localX = 700,
    localX2 = -900,


    //description
    description = [
        "You are a man who has",
        "been lost in the nightmare.",
        "",
        "Try not to be beaten by",
        "your desperation and get ",
        "enough hope to survive."
    ]

    //request Animation Frame
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;

    //setting img
    bg.src = "img/bg-07-han.png";
    heroImg.src = "img/person.png";
    foodImg.src = "img/fire.png";
    guardImg.src = "img/monster.png";
