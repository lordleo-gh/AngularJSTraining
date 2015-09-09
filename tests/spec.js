// spec.js
describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://localhost:3000/');
    expect(browser.getTitle()).toEqual('Todo List');
  });
  
  it('should write text into todoText', function(){
	//browser.get('http://localhost:3000/');
  	element(by.model('todoList.todoText')).sendKeys('Christoph\n');
	var myTodo = element( by.repeater('todo in todoList.todos').row(3) );
	expect(myTodo.getText()).toEqual('Christoph');
	
	});
	
	
	// element( by.repeater('todo in todoList.todos').row(0).column('text') );
});