import Enemy from "../Enemy/Enemy";

export default class EnemyController {
  enemies: Array<Enemy> = [];
  public enemiesCounter: number = 10;

  objectToFollow: any;
  canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement, objectToFollow: any) {
    this.objectToFollow = objectToFollow;

    this.canvas = canvas;

    this.createEnemies();
  }

  createEnemies() {
    while (this.enemiesCounter > 0) {
      const randomX = this.randomIntFromInterval(0, this.canvas.width);
      const randomY = this.randomIntFromInterval(0, this.canvas.height);

      const directionVelocity = this.randomIntFromInterval(400, 600);

      this.enemies.push(
        new Enemy(
          { x: randomX, y: randomY },
          directionVelocity,
          10,
          10,
          this.objectToFollow,
          10,
        ),
      );

      this.enemiesCounter--;
    }
  }

  detectObject(area: number) {
    this.enemies.forEach((enemy: Enemy) => {
      if (
        (this.objectToFollow.position.y <= enemy.height + area &&
          this.objectToFollow.position.x <= enemy.width + area) ||
        (this.objectToFollow.position.y >= -enemy.height - area &&
          this.objectToFollow.position.x >= -enemy.width - area)
      ) {
        console.log("object detected");
      }
    });
  }

  destroyEnemy(enemy: Enemy) {
    const index = this.enemies.indexOf(enemy);
    this.enemies.splice(index, 1);
  }

  isEnemyDead() {
    this.enemies.forEach((enemy: Enemy) => {
      if (enemy.health <= 0) {
        this.destroyEnemy(enemy);
      }
    });
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.enemies.forEach((enemy: Enemy) => {
      enemy.draw(ctx);
    });

    this.detectObject(10);
  }

  randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
