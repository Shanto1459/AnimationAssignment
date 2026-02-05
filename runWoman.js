class RunWoman {
    constructor(game){
        this.game = game;
        const runSprite = ASSET_MANAGER.getAsset("./sprites/Run.png");
        this.animator = new Animator(runSprite, 0, 0, 128, 128, 8, 0.1);

        this.x = 0;
        this.y = 0;
        this.speed = 150;
    }

    update(){
        this.x += this.speed * this.game.clockTick;

        if (this.x > this.game.ctx.canvas.width) {
        this.x = -128; 
        }
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);};
}
