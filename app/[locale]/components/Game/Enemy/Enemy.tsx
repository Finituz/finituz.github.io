export default class Enemy {
  position: { x: number; y: number };
  velocity: { x: number; y: number } = { x: 0, y: 0 };
  directionVelocity: number; // count it in seconds
  width: number;
  height: number;

  objectToFollow: any;
  health: number;

  public colors: Array<string> = [
    "red",
    "green",
    "brown",
    "orange",
    "blue",
    "purple",
  ];
  color: string = this.randomColor();

  constructor(
    position: { x: number; y: number },
    directionVelocity: number,
    width: number,
    height: number,
    objectToFollow: any,
    health: number,
  ) {
    this.position = position;

    this.width = width;
    this.height = height;

    this.health = health;
    this.directionVelocity = directionVelocity;

    this.objectToFollow = objectToFollow;
  }

  takeDamage(damage: number) {
    this.health -= damage;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 20;
    ctx.lineJoin = "bevel";
    ctx.lineWidth = 10;

    this.velocity = {
      x:
        (this.objectToFollow.position.x - this.position.x + this.width / 2) /
        this.directionVelocity,
      y:
        (this.objectToFollow.position.y - this.position.y) /
        this.directionVelocity,
    };

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.fillRect(this.position.x, this.position.y-this.height, this.width, this.height);
  }

  randomColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}
