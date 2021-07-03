class Slingshot{
    constructor(body1,body2){
        var options={
            bodyA:body1,
            bodyB:body2,
            length:100,stiffness:0.5
        }
        this.Sling=Constraint.create(options);
        World.add(world,this.Sling);
    }
    display(){
        var pointA=this.Sling.bodyA.position;
        var pointB=this.Sling.bodyB.position;
        line (pointA.x,pointA.y,pointB.x,pointB.y);
    }
}