class math{
   // name="yashwanth";
    
constructor1(a,b)
{
this.a=a;
this.b=b;
}
add=(a,b)=>(a+b);
constructor2(x,y)
{
    this.x=x;
    this.y=y;
}
sub=(x,y)=>(x-y);
constructor3(m,n)
{
    this.m=m;
    this.n=n;
}
mul=(m,n)=>(m*n);
constructor4(o,p)
{
    this.o=o;
    this.p=p;
}
div=(o,p)=>(o/p);

}
let m=new math();
//m.add(5,4);
console.log(m.add(5,4));
//m.sub(10,5);
console.log(m.sub(10,5));
//m.mul(9,5);
console.log(m.mul(9,5));
//m.div(10,5);
console.log(m.div(10,5));
