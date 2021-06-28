Canvas = document.getElementById("Canvas");

Ctx  = Canvas.getContext("2d");

Car1_Width = 120;

Car2_Width = 120;

Car1_Height = 70;

Car2_Height = 70;

Car1_Image = "Car1.png";

Car2_Image = "car2.png";

Car1_X = 10;

Car2_X = 10;

Car1_Y = 10;

Car2_Y = 100;

Background_Image = "CanvasBackground.jpeg";

function add() {

    BackgroundImageCanvas = new Image();

    BackgroundImageCanvas.onload = UplaoadBackground;

    BackgroundImageCanvas.src = Background_Image;

    Car1 = new Image();

    Car1.onload = UploadCar1;

    Car1.src = Car1_Image;

    Car2 = new Image();

    Car2.onload = UploadCar2;

    Car2.src = Car2_Image;
}

function UplaoadBackground() {

    Ctx.drawImage(BackgroundImageCanvas , 0 , 0 , Canvas.width , Canvas.height);
    
}

function UploadCar1() {

    Ctx.drawImage(Car1 , Car1_X , Car1_Y , Car1_Width , Car1_Height);
    
}

function UploadCar2() {

    Ctx.drawImage(Car2 , Car2_X , Car2_Y , Car2_Width , Car2_Height);
    
}


window.addEventListener("keydown" , My_KeyDown);

function My_KeyDown(e) {

    KeyPressed = e.keyCode;

    console.log(KeyPressed);

    if (KeyPressed == "38") {

        Car1Up();

        console.log("Up Arrow Key");
        
    }
    
    if (KeyPressed == "40") {

        Car1Down();

        console.log("Down Arrow Key");
        
    }
    
    if (KeyPressed == "37") {

        Car1Left();

        console.log("Left Arrow Key");
        
    }
    
    if (KeyPressed == "39") {

        Car1Right();

        console.log("Right Arrow Key");
        
    }    if (KeyPressed == "87") {

        Car2Up();

        console.log("Key W");
        
    }
    
    if (KeyPressed == "65") {

        Car2Left();

        console.log("Key A");
        
    }
    
    if (KeyPressed == "83") {

        Car2Down();

        console.log("Key S");
        
    }
    
    if (KeyPressed == "68") {

        Car2Right();

        console.log("Key D");
        
    }
    
}

function Car1Up() {

    if (Car1_Y >= 0) {

        Car1_Y = Car1_Y - 10;

        console.log("When Up Arrow Key Is Pressed The X For Car1 Is = " + Car1_X + " And The Y For Car1 Is = " + Car1_Y + " The X For Car2 Is = " + Car2_X + " The Y For Car2 Is = " + Car2_Y);

        UplaoadBackground();

        UploadCar1();

        UploadCar2();
        
    }

    if (Car1_X > 700) {

        console.log("Car1 Won");

        document.getElementById("GameStatus").innerHTML = "Car1 Won !!!";
        
    }
    
}

function Car1Down() {

    if (Car1_Y <= 500) {

        Car1_Y = Car1_Y + 10;

        console.log("When Down Arrow Key Is Pressed The X For Car1 Is = " + Car1_X + " And The Y For Car1 Is = " + Car1_Y + " The X For Car2 Is = " + Car2_X + " The Y For Car2 Is = " + Car2_Y);

        UplaoadBackground();

        UploadCar1();

        UploadCar2();
        
    }

    if (Car1_X > 700) {

        console.log("Car1 Won");

        document.getElementById("GameStatus").innerHTML = "Car1 Won !!!";
        
    }
    
}

function Car1Left() {

    if (Car1_X >= 0) {

        Car1_X = Car1_X - 10;

        console.log("When Left Arrow Key Is Pressed The X For Car1 Is = " + Car1_X + " And The Y For Car1 Is = " + Car1_Y + " The X For Car2 Is = " + Car2_X + " The Y For Car2 Is = " + Car2_Y);

        UplaoadBackground();

        UploadCar1();

        UploadCar2();
        
    }

    if (Car1_X > 700) {

        console.log("Car1 Won");

        document.getElementById("GameStatus").innerHTML = "Car1 Won !!!";
        
    }
    
}

function Car1Right() {

    if (Car1_X <= 500) {

        Car1_X = Car1_X + 10;

        console.log("When Right Arrow Key Is Pressed The X For Car1 Is = " + Car1_X + " And The Y For Car1 Is = " + Car1_Y + " The X For Car2 Is = " + Car2_X + " The Y For Car2 Is = " + Car2_Y);

        UplaoadBackground();

        UploadCar1();

        UploadCar2();
        
    }

    if (Car1_X > 700) {

        console.log("Car1 Won");

        document.getElementById("GameStatus").innerHTML = "Car1 Won !!!";
        
    }
    
}

function Car2Up() {

    if (Car2_Y >= 0) {

        Car2_Y = Car2_Y - 10;

        console.log("When W Key Is Pressed The X For Car1 Is = " + Car1_X + " And The Y For Car1 Is = " + Car1_Y + " The X For Car2 Is = " + Car2_X + " The Y For Car2 Is = " + Car2_Y);

        UplaoadBackground();

        UploadCar1();

        UploadCar2();
        
    }

    if (Car2_X > 700) {

        console.log("Car2 Won");

        document.getElementById("GameStatus").innerHTML = "Car2 Won !!!";
        
    }
    
}

function Car2Down() {

    if (Car2_Y <= 500) {

        Car2_Y = Car2_Y + 10;

        console.log("When S Is Pressed The X For Car1 Is = " + Car1_X + " And The Y For Car1 Is = " + Car1_Y + " The X For Car2 Is = " + Car2_X + " The Y For Car2 Is = " + Car2_Y);

        UplaoadBackground();

        UploadCar1();

        UploadCar2();
        
    }

    if (Car2_X > 700) {

        console.log("Car2 Won");

        document.getElementById("GameStatus").innerHTML = "Car2 Won !!!";
        
    }
    
}

function Car2Left() {

    if (Car2_X >= 0) {

        Car2_X = Car2_X - 10;

        console.log("When A Key Is Pressed The X For Car1 Is = " + Car1_X + " And The Y For Car1 Is = " + Car1_Y + " The X For Car2 Is = " + Car2_X + " The Y For Car2 Is = " + Car2_Y);

        UplaoadBackground();

        UploadCar1();

        UploadCar2();
        
    }

    if (Car2_X > 700) {

        console.log("Car2 Won");

        document.getElementById("GameStatus").innerHTML = "Car2 Won !!!";
        
    }
    
}

function Car2Right() {

    if (Car2_X <= 500) {

        Car2_X = Car2_X + 10;

        console.log("When D Key Is Pressed The X For Car1 Is = " + Car1_X + " And The Y For Car1 Is = " + Car1_Y + " The X For Car2 Is = " + Car2_X + " The Y For Car2 Is = " + Car2_Y);

        UplaoadBackground();

        UploadCar1();

        UploadCar2();
        
    }

    if (Car2_X > 700) {

        console.log("Car2 Won");

        document.getElementById("GameStatus").innerHTML = "Car2 Won !!!";
        
    }
    
}