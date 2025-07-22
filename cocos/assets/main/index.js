System.register("chunks:///_virtual/main",["./playGame.ts","./playerController.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/playerController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var i,o,t,n,r,c,l,s,a,d,h,y,p,u;return{setters:[function(e){i=e.applyDecoratedDescriptor,o=e.inheritsLoose,t=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){r=e.cclegacy,c=e._decorator,l=e.RigidBody2D,s=e.BoxCollider2D,a=e.input,d=e.Input,h=e.Contact2DType,y=e.KeyCode,p=e.Vec2,u=e.Component}],execute:function(){var g,C,R,f,b,m,B;r._RF.push({},"07c91CrcGRP3IgPZtbZnbhQ","playerController",void 0);var T=c.ccclass,v=c.property;e("playerController",(g=T("playerController"),C=v(l),R=v(s),g((m=i((b=function(e){function i(){for(var i,o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return i=e.call.apply(e,[this].concat(r))||this,t(i,"RigidBody",m,n(i)),t(i,"collider",B,n(i)),i.direction=0,i.maxVelocityX=100,i.walkForce=150,i.jumpForce=6e3,i.isGrounded=!1,i}o(i,e);var r=i.prototype;return r.onLoad=function(){a.on(d.EventType.KEY_DOWN,this.onKeyDown,this),a.on(d.EventType.KEY_UP,this.onKeyUp,this),this.collider.on(h.BEGIN_CONTACT,this.onBeginContact,this)},r.onBeginContact=function(e,i){console.log(e.tag),console.log(i.tag),2===e.tag&&(this.isGrounded=!0)},r.onKeyDown=function(e){switch(console.log(e.keyCode),e.keyCode){case y.ARROW_LEFT:this.direction=-1,this.node.setScale(-1*Math.abs(this.node.getScale().x),this.node.getScale().y);break;case y.ARROW_RIGHT:this.direction=1,this.node.setScale(Math.abs(this.node.getScale().x),this.node.getScale().y);break;case y.SPACE:this.isGrounded&&(this.jump(),this.isGrounded=!1)}},r.onKeyUp=function(e){switch(console.log(e.keyCode),e.keyCode){case y.ARROW_LEFT:case y.ARROW_RIGHT:this.direction=0}},r.jump=function(){this.RigidBody.applyForceToCenter(new p(0,this.jumpForce),!0)},r.move=function(){this.RigidBody.applyForceToCenter(new p(this.direction*this.walkForce,0),!0)},r.update=function(e){(this.direction>0&&this.RigidBody.linearVelocity.x<this.maxVelocityX||this.direction<0&&this.RigidBody.linearVelocity.x>-this.maxVelocityX)&&this.move()},i}(u)).prototype,"RigidBody",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),B=i(b.prototype,"collider",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=b))||f));r._RF.pop()}}}));

System.register("chunks:///_virtual/playGame.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,r,i,o,a,l,u,c,s,b;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,r=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,l=e.Button,u=e.Prefab,c=e.Node,s=e.instantiate,b=e.Component}],execute:function(){var p,f,y,P,d,m,h,w,g,v,z;o._RF.push({},"757bcugd4NIxrWArkbJ2eky","playGame",void 0);var N=a.ccclass,X=a.property;e("playGame",(p=N("playGame"),f=X(l),y=X(u),P=X([Number]),d=X(Number),p((w=t((h=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o))||this,r(t,"button",w,i(t)),r(t,"tilePrefab",g,i(t)),r(t,"betweenPosX",v,i(t)),r(t,"yPos",z,i(t)),t}return n(t,e),t.prototype.onLoad=function(){var e=this;this.button.node.on(c.EventType.MOUSE_DOWN,(function(){var t=s(e.tilePrefab),n=e.betweenPosX[0]+Math.random()*(e.betweenPosX[1]-e.betweenPosX[0]);t.setPosition(n,e.yPos),e.node.addChild(t)}))},t}(b)).prototype,"button",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=t(h.prototype,"tilePrefab",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=t(h.prototype,"betweenPosX",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),z=t(h.prototype,"yPos",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),m=h))||m));o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});