export default class Bullet {
  public position: { x: number; y: number };
  public velocity: { x: number; y: number } = { x: 2, y: 2 };

  public width: number = 5;
  public height: number = 10;

  public damage: number;

  constructor(
    position: { x: number; y: number },
    velocity: { x: number; y: number },
    damage: number,
  ) {
    this.position = position;
    this.velocity = velocity;
    this.damage = damage;
  }

  collideWith(object: any) {
    const isCollidedX: boolean =
      this.position.x < object.position.x + object.width &&
      this.position.x + this.width > object.position.x;

    const isCollidedY: boolean =
      this.position.y + object.height &&
      this.position.y + this.height > object.position.y;

    if (isCollidedX && isCollidedY) {
      object.takeDamage(this.damage);
      return true;
    }

    return false;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "red";
    ctx.shadowColor = "red";
    ctx.shadowBlur = 20;
    ctx.lineJoin = "bevel";
    ctx.lineWidth = 10;

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
