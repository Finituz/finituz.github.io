import BulletController from "@/app/components/Game/BulletController/BulletController";

export default class Player {
  velocity: { x: number; y: number };
  width: number;
  height: number;
  position: { x: number; y: number };
  BulletController: BulletController;

  constructor(
    position: { x: number; y: number },
    BulletController: BulletController,
  ) {
    this.position = position;
    this.BulletController = BulletController;

    this.velocity = { x: 2, y: 5 };
    this.width = 10;
    this.height = 10;

    document.addEventListener("keydown", this.move.bind(this));
    document.addEventListener("click", this.shoot.bind(this));
  }

  shoot(event: MouseEvent) {
    let velocity = {
      x: (event.clientX - this.position.x + this.width / 2) / 30,
      y: (event.clientY - this.position.y) / 30,
    };
    let delay = 2;
    let damage = 10;
    let bulletPosition: { x: number; y: number } = {
      x: this.position.x + this.width / 2,
      y: this.position.y,
    };

    this.BulletController.shoot(bulletPosition, velocity, damage, delay);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "#fff";
    ctx.shadowColor = "#fff";
    ctx.shadowBlur = 20;
    ctx.lineJoin = "bevel";
    ctx.lineWidth = 10;

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  move(event: KeyboardEvent) {
    switch (event.key) {
      case "w":
        this.velocity.y = -5;
        break;
      case "s":
        this.velocity.y = 5;
        break;
      case "d":
        this.velocity.x = 5;
        break;
      case "a":
        this.velocity.x = -5;
        break;
    }
  }

  screenLimits(canvas: HTMLCanvasElement) {
    if (
      this.position.y + this.height + this.velocity.y >= canvas.height ||
      this.position.y + this.height + this.velocity.y <= 0
    ) {
      this.velocity.y =
        Math.sign(this.velocity.y) < 1
          ? Math.abs(this.velocity.y)
          : -this.velocity.y;
    } else if (
      this.position.x + this.width + this.velocity.x >= canvas.width ||
      this.position.x + this.width + this.velocity.x <= 0
    ) {
      this.velocity.x =
        Math.sign(this.velocity.x) < 1
          ? Math.abs(this.velocity.x)
          : -this.velocity.x;
    }
  }
}
