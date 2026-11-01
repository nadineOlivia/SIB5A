class Mario {
    HP: number;
    speed: number;
    positionX: number;
    positionY: number;
    invincible: boolean;
    currentForm: "mario" | "super mario" | "fire mario";

    constructor() {
        this.HP = 1;
        this.speed = 5;
        this.positionX = 0;
        this.positionY = 0;
        this.invincible = false;
        this.currentForm = "mario";
    }

    takePowerUp(powerUp: PowerUp): void {
        powerUp.apply(this);
    }

    takeDamage(): void {
        if (this.invincible) {
            console.log("mario kebal! serangan tidak berpengaruh.");
            return;
        }
        
        this.HP -= 1;
        this.currentForm ="mario"

        console.log(`mario diserang! HP: ${this.HP}`);
    }

    moveRight(): void {
        this.positionX += this.speed;

        console.log(`mario bergerak ke kanan. Position X: ${this.positionX}`);
    }

    moveleft(): void {
        this.positionX -= this.speed;

        console.log(`matio bergerak ke kiri. Position X: ${this.positionX}`);
    }

    shootFireball(): void {
        if (this.currentForm === "fire mario") {
            console.log("fire mario menembakkan bola api");
        }else{
            console.log("mario harus menjadi fire mario untuk menembak.");
        }
    }

    showStatus(): void {
        console.log("===== sTATUS MARIO =====");
        console.log(`HP: ${this.HP}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Position X: ${this.positionX}`);
        console.log(`Position Y: ${this.positionY}`);
        console.log(`Invincible: ${this.invincible}`);
        console.log(`Current Form: ${this.currentForm}`);
    }
}

// Class induk power-up
abstract class PowerUp {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    abstract apply(mario: Mario): void;
}

// inheritance: SuperMushroom mewarisi PowerUp
class SuperMushroom extends PowerUp {
    constructor() {
        super("Super Mushroom");
    }

    apply(mario: Mario): void {
        mario.currentForm ="super mario";
        mario.HP += 1;

        console.log(`mario menjadin Super Mario! HP: ${mario.HP}`);
    }
}

//inheritance: FireFlower mewarisi PowerUp
class FireFlower extends PowerUp {
    constructor() {
        super("Fire Flower");
    }

    apply(mario: Mario): void {
        mario.currentForm = "fire mario";
        mario.HP += 1;

        console.log(`mario menjadi Fire Mario! HP: ${mario.HP}`);
    }
}

// Inheritance: SuperStar mewarisi PowerUp
class SuperStar extends PowerUp {
    constructor() {
        super("Super Star");
    }

    apply(mario: Mario): void {
        mario.invincible = true;


        console.log("mario menjadi kebal terhadap serangan!");
    }
}

// membuat object
const mario = new Mario();
const mushroom = new SuperMushroom();
const flower = new FireFlower();
const star = new SuperStar();

// status awal
mario.showStatus();

// bergerak ke kanan dan ke kiri
mario.moveRight();
mario.moveleft();

// Mengambil jamur
mario.takePowerUp(mushroom);
mario.showStatus();

// Mengambil bunga dan menembakkan bola api
mario.takePowerUp(flower);
mario.shootFireball();

// Diserang Saat belum kebal
mario.takeDamage();
mario.showStatus();

// mengambil bintang
mario.takePowerUp(star);

// Diserang saat kebal
mario.takeDamage();
mario.showStatus();