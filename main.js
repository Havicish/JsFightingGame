import { Vector } from "./vector.js";

function Get(Query) {
    return document.querySelector(Query);
}

/** @type {HTMLCanvasElement} */
let Canvas;
/** @type {CanvasRenderingContext2D} */
let Ctx;

document.addEventListener("DOMContentLoaded", () => {
    Canvas = Get("#Canvas");
    Ctx = Canvas.getContext("2d");

    Frame();
});

class Player {
    constructor() {
        this.Pos = new Vector(0, 0);
        this.Vel = new Vector(0, 0);
        this.Drag = 0.02;
    }

    Update() {
        this.Vel = this.Vel.MulN(1 - this.Drag);
        this.Pos = this.Pos.Add(this.Vel);
    }

    Draw() {
        Ctx.fillStyle = "white";
        Ctx.fillRect(this.Pos.X, this.Pos.Y, 20, 20);
    }
}

let Time = new Date();
let LastRecTime = Date.now();
let DT = 0;
let FPSs = [];
let FPS = 0;
function Frame() {
    DT = Date.now() - LastRecTime;
    FPSs.push(1000 / DT);
    if (FPSs.length > 60) FPSs.shift();
    FPS = Math.round(FPSs.reduce((a, b) => a + b) / FPSs.length);
    LastRecTime = Date.now();

    Ctx.clearRect(0, 0, Canvas.width, Canvas.height);

    Canvas.width = innerWidth;
    Canvas.height = innerHeight;

    Ctx.fillStyle = "black";
    Ctx.fillRect(0, 0, Canvas.width, Canvas.height);

    Ctx.fillStyle = "white";
    Ctx.font = "14px monospace";
    Ctx.fillText(`fps: ${FPS}`, 10, 17);

    requestAnimationFrame(Frame);
}