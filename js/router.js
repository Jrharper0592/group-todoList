;(function(){

  Parse.todoRouter = Parse.Router.extend({
  
      initialize:function() {
        this.collection= new Parse.todoCollection()
        
         this.view = new Parse.todoView({
           collection: this.collection
         
         })
    this.collection.add([
          
          {
            name: 'do homework',
            description:'week 7 group todo list assignment',
            date: new Date()
  
          },
          
          {
            name: 'keep doing homework',
            description: 'week 8 group todo list assignment',
            date: new Date()
          
          }
        ])
         //this.collection.models[0].set('name', 'does homework')
        console.log('todo router')
      Parse.history.start();
      },
      routes:{
        
        '*default': 'home'
      
      },
      home:function() {
    
      }
    
    });
    
}());
