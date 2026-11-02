// =====================================================================
//  SOAL: Mario Bros dengan OOP (TypeScript)
// =====================================================================
//  Mario memiliki atribut: HP, speed, positionX, positionY, invincible,
//  currentForm. Mario dapat berubah menjadi 3 form: 'mario',
//  'super mario', dan 'fire mario'.
//
//  Default: HP = 1, speed = 5, currentForm = 'mario', invincible = false,
//           positionX = 0, positionY = 0
//
//  1. SuperMushroom (Jamur): Mario menjadi Super Mario, HP + 1.
//  2. FireFlower (Bunga): Mario menjadi Fire Mario, HP + 1,
//     dan dapat menembakkan bola api.
//  3. SuperStar (Bintang): Mario kebal terhadap serangan.
//  4. Diserang: HP - 1 dan kembali ke form 'mario'.
//     Jika sedang kebal, serangan tidak berpengaruh.
//  5. Bergerak ke kanan: positionX + speed.
//  6. Bergerak ke kiri: positionX - speed.
//
//  Buat class, attribute, method, dan object.
//  Terapkan inheritance dan polymorphism.
// =====================================================================

// Kerjakan Quiznya Disini

// ==================================================
// 1. PARENT CLASS
// ==================================================
class Mario {

  // ATTRIBUTE / PROPERTIES
  hp: number;
  speed: number;
  positionX: number;
  positionY: number;
  invincible: boolean;
  currentForm: string;

  // CONSTRUCTOR
  constructor() {
    this.hp = 1;
    this.speed = 5;
    this.positionX = 0;
    this.positionY = 0;
    this.invincible = false;
    this.currentForm = "mario";
  }

  // METHOD 1
  collectItem(item: PowerUp) {
    return item.applyEffect(this);
  }

  // METHOD 2
  takeDamage() {
    if (this.invincible) {
      return "Mario kebal! Serangan tidak berpengaruh.";
    }

    this.hp -= 1;
    this.currentForm = "mario";
    return "Mario terkena serangan! HP berkurang 1.";
  }

  // METHOD 3
  moveRight() {
    this.positionX += this.speed;
    return `Mario bergerak ke kanan: ${this.positionX}`;
  }

  // METHOD 4
  moveLeft() {
    this.positionX -= this.speed;
    return `Mario bergerak ke kiri: ${this.positionX}`;
  }

  // METHOD 5
  shootFireball() {
    if (this.currentForm === "fire mario") {
      return "Mario menembakkan bola api!";
    }

    return "Mario belum memiliki kekuatan bola api.";
  }

  // METHOD 6
  getStatus() {
  return `
    HP          : ${this.hp}
    Speed       : ${this.speed}
    Form        : ${this.currentForm}
    Position X  : ${this.positionX}
    Position Y  : ${this.positionY}
    Invincible  : ${this.invincible}
`;
}
}


// ==================================================
// 2. PARENT CLASS POWERUP
// ==================================================
class PowerUp {

  // METHOD
  applyEffect(mario: Mario): string {
    return "Mario mendapatkan item.";
  }
}


// ==================================================
// 3. CHILD CLASS - SUPERMUSHROOM
// ==================================================
class SuperMushroom extends PowerUp {

  // POLYMORPHISM (OVERRIDING METHOD)
  applyEffect(mario: Mario): string {
    mario.hp += 1;
    mario.currentForm = "super mario";

    return "Mario mendapatkan Super Mushroom! HP +1.";
  }
}


// ==================================================
// 4. CHILD CLASS - FIREFLOWER
// ==================================================
class FireFlower extends PowerUp {

  // POLYMORPHISM (OVERRIDING METHOD)
  applyEffect(mario: Mario): string {
    mario.hp += 1;
    mario.currentForm = "fire mario";

    return "Mario mendapatkan Fire Flower! HP +1.";
  }
}


// ==================================================
// 5. CHILD CLASS - SUPERSTAR
// ==================================================
class SuperStar extends PowerUp {

  // POLYMORPHISM (OVERRIDING METHOD)
  applyEffect(mario: Mario): string {
    mario.invincible = true;

    return "Mario kebal! Serangan tidak berpengaruh.";
  }
}


// ==================================================
// 6. OBJECT / INSTANCE
// ==================================================
const mario = new Mario();
const mushroom = new SuperMushroom();
const flower = new FireFlower();
const star = new SuperStar();


// ==================================================
// 7. PEMANGGILAN METHOD / OUTPUT
// ==================================================
console.log("Status Awal:");
console.log(mario.getStatus());

console.log("\n1. Super Mushroom:");
console.log(mario.collectItem(mushroom));
console.log(mario.getStatus());

console.log("\n2. Fire Flower:");
console.log(mario.collectItem(flower));
console.log(mario.shootFireball());
console.log(mario.getStatus());

console.log("\n3. Super Star:");
console.log(mario.collectItem(star));
console.log(mario.getStatus());

console.log("\n4. Mario Diserang:");
console.log(mario.takeDamage());
console.log(mario.getStatus());

console.log("\n5. Mario Bergerak:");
console.log(mario.moveRight());
console.log(mario.moveLeft());
console.log(mario.getStatus());