import { useEffect } from "react";

import Player from "./Player/Player";
import BulletController from "./BulletController/BulletController";
import EnemyController from "./EnemyController/EnemyController";
import Enemy from "./Enemy/Enemy";

export default function Game() {
  useEffect(() => {
    const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    const bulletController: BulletController = new BulletController(canvas);
    const player: Player = new Player({ x: 10, y: 100 }, bulletController);
    const enemyController: EnemyController = new EnemyController(
      canvas,
      player,
    );

    if (!ctx) {
      throw new Error("Failed to get 2D context");
    }

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    window.scrollTo(0, 0);
    document.body.classList.add("overflow-hidden");

    const mainLoop = () => {
      window.requestAnimationFrame(mainLoop);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bulletController.draw(ctx);

      player.screenLimits(canvas);
      player.draw(ctx);

      enemyController.draw(ctx);

      gameOver();
    };

    const gameOver = () => {
      enemyController.enemies.forEach((enemy: Enemy) => {
        bulletController.collideWith(enemy);
      });

      enemyController.isEnemyDead();
    };

    mainLoop();
  }, []);

  return (
    <>
      <canvas id="gameCanvas"></canvas>
      <p className="absolute bottom-2 w-1/2 text-center select-none">
        Assets, music, sfx, life bar and basic mechanics will be available as
        soon as you pay our new monthly
        <strong className="text-red-900"> BATTLEPASS </strong>!!!
      </p>


    </>


  );
}
