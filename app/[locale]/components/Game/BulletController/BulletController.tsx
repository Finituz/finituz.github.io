import Bullet from "../Bullet/Bullet";

export default class BulletController {
  bullets: Array<Bullet> = [];
  TTNB: number = 0;

  canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  collideWith(object: any) {
    return this.bullets.some((bullet: Bullet) => {
      if (bullet.collideWith(object)) {
        this.destroyBullet(bullet);
      }
    });
  }

  shoot(
    bulletPosition: { x: number; y: number },
    velocity: { x: number; y: number },
    damage: number,
    delay: number,
  ) {
    if (this.TTNB <= 0) {
      this.bullets.push(new Bullet(bulletPosition, velocity, damage));
      this.TTNB = delay;
    }

    this.TTNB--;
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.bullets.forEach((bullet: Bullet) => {
      if (this.isBulletOffScreen(bullet)) {
        this.destroyBullet(bullet);
      }

      bullet.draw(ctx);
    });
  }

  destroyBullet(bullet: Bullet) {
    const index = this.bullets.indexOf(bullet);
    this.bullets.splice(index, 1);
  }

  isBulletOffScreen(bullet: Bullet) {
    return (
      bullet.position.y <= -bullet.height ||
      bullet.position.x <= -bullet.width ||
      bullet.position.y >= this.canvas.height ||
      bullet.position.x >= this.canvas.width
    );
  }
}
