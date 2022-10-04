class Boat{
    constructor (x, y, width, hight, bodypos, boatAnimation) {
        this.animation = boatAnimation;
        this.speed = 0.05;
        this.isBroken = false;
        this.body = Bodies.rectangle (x, y, width, hight)
        this.width = width
        this.hight = hight
        this.bodypos = bodypos
        this.image = loadImage("assets/boat.png")
        World.add(world, this.body)
    }
    animate(){
        this.speed += 0.05;
    }
    remove(index){
        this.animation = brokenBoatAnimation;
        this.speed = 0.05;
        this.isBroken = true;
        this.width = 300;
        this.hight = 300;
        setTimeout(() => {
            Matter.World.remove(world, this.body)
            delete boats[index]
        }, 2000)
    }

    display () {
        var pos = this.body.position
        var angle = this.body.angle
        var index = floor(this.speed % this.animation.length);
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.animation[index], 0, this.bodypos, this.width, this.hight)
        pop()
    }
}
