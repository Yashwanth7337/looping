class employee 
  {  
  
    constructor(id,name)  //initializing using constructor
    {  
      this.id=id;  
      this.name=name;  
    }  
 
    detail()  //method
    {  
  console.log(this.id+" "+this.name+" "); 
    }  
  }  

var e1=new employee(101,"yashwanth");  
var e2=new employee(102,"madhu");  

e1.detail(); //calling method
e2.detail(); 