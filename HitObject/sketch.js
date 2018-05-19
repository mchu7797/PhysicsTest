// Code by minseok (mchu7797@gmail.com)

var app = new PIXI.Application({
    width           : 800,
    height          : 600,
    backgroundColor : 0x1099bb
});

document.body.appendChild(app.view);

var sigong = PIXI.Sprite.fromImage("sigong.png");

sigong.anchor.set(0.5);
sigong.x = 200;
sigong.y = 100;
sigong.xSpeed = 10;
sigong.ySpeed = 10;

var wall = PIXI.Sprite.fromImage("wall.png");

wall.anchor.set(0.5);
wall.x = 400;
wall.y = app.screen.height / 2;

app.stage.addChild(sigong);
app.stage.addChild(wall);

app.ticker.add(function (delta) {
    sigong.rotation += 0.5 * delta;
    sigong.x += sigong.xSpeed;
    sigong.y += sigong.ySpeed;
    hitEdge(sigong);
    hitObject(sigong, wall);
});

function hitObject(attack, victim) {
    if (attack.y < victim.y + victim.height / 2 && attack.y > victim.y - victim.height / 2) {
        if (attack.x < victim.x && attack.x > victim.x - victim.width / 2) {
            attack.xSpeed = -attack.xSpeed;
        } else if (attack.x > victim.x && attack.x < victim.x + victim.width / 2) {
            attack.xSpeed = -attack.xSpeed;
        }
    }
    if (attack.x < victim.x + (victim.width / 2) && attack.x > victim.x - victim.width / 2) {
        if (attack.y < victim.y && attack.y > victim.y - victim.height / 2) {
        attack.ySpeed = -attack.ySpeed;
        } else if (attack.y > victim.y && attack.y < victim.y + victim.width / 2) {
            attack.ySpeed = -attack.ySpeed;
        }
    }
}

function hitEdge(victim) {
    if (victim.y > app.screen.height || victim.y < 0) {
        victim.ySpeed = -victim.ySpeed;
    }
    if (victim.x > app.screen.width || victim.x < 0) {
        victim.xSpeed = -victim.xSpeed;
    }
}