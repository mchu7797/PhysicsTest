// Code by minseok (mchu7797@gmail.com)

var app = new PIXI.Application({
    width           : 800,
    height          : 600,
    backgroundColor : 0x1099bb
});

document.body.appendChild(app.view);

var sigong = PIXI.Sprite.fromImage("sigong.png");

sigong.anchor.set(0.5);
sigong.x = 0;
sigong.y = 0;
sigong.xSpeed = 10;
sigong.ySpeed = 10;

var sigong2 = PIXI.Sprite.fromImage("sigong.png");

sigong2.anchor.set(0.5);
sigong2.x = 580;
sigong2.y = 50;
sigong2.xSpeed = 10;
sigong2.ySpeed = 10;

var movingWall = PIXI.Sprite.fromImage("wall.png");

movingWall.anchor.set(0.5);
movingWall.x = app.screen.width / 2;
movingWall.y = app.screen.height / 2;

app.stage.addChild(sigong);
app.stage.addChild(sigong2);
app.stage.addChild(movingWall);

app.ticker.add(function (delta) {
    sigong.rotation += 0.5 * delta;
    MovingSigong(sigong);
    MovingSigong(sigong2);
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
        } else if (attack.y > victim.y && attack.y < victim.y + victim.height / 2) {
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

function MovingSigong(sigongs) {
    sigongs.x += sigongs.xSpeed;
    sigongs.y += sigongs.ySpeed;
    hitEdge(sigongs);
    hitObject(sigongs, movingWall);
}

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (keyName == 'ArrowUp') {
        movingWall.y -= 80;
    }
    if (keyName == 'ArrowDown') {
        movingWall.y += 80;
    }
    if (keyName == 'ArrowLeft') {
        movingWall.x -= 80;
    }
    if (keyName == 'ArrowRight') {
        movingWall.x += 80;
    }
});