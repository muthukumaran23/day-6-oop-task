

// # Class - Movie

// The class Movie is stated below.
// An instance of class Movie represents a film.
// This class has the following three properties:

// - title, which is a String representing the title of the movie
// - studio, which is a String representing the studio that made the movie
// - rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, 
//    a String representing the studio, and a String representing the rating as its arguments, 
//    and sets the respective class properties to these values.

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG".
//    You may assume the input array is full of Movie instances. The returned array need not be full.

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”






class Movie {
   
    constructor (title, studio, rating) {
     
       this.title = title;
       this.studio = studio;
       this.rating = rating;
     
       if(rating==null) {
         return this.rating = "PG"
     }
       else{
         return this.rating = rating;
     }
  }
      getPG(array){
     
        var result = array.filter((element)=> element.rating =="PG")
        return result
  }

}

  let movie1 = new Movie ("vijay","seven studios","PG13");
  let movie2 = new Movie ("Esan","redgiant studios","PG1");
  let movie3 = new Movie ("A","red studios");
  let movie4 = new Movie ("B","pink studios");

  console.log(movie3)


  const array = [movie1, movie2, movie3,movie4]

  console.log(movie1.getPG(array));

  let movie5 = new Movie ("Casino Royale","Eon Productions","PG13")

  console.log(movie5)




  //Convert the UML diagram to Typescript class. - use number for double
//Circle-Class
// -radius:double=1.0;
// -color:string="Red";
// To write-->Circle(),
//            Circle(radius:double)
//            Circle(radius:double,color:string)
//            getRadius():double
//            setRadius(radius:double):void
//            getColor():string
//            setColor(color:string):void
//            getArea():double
//            getCircumtance():double
//Answer:




class circle{
  constructor(radius,color){
    this.radius=radius;
    this.color=color;
  }
     getRadius(){
     return this.radius
  }
     setRadius(data){
     this.radius=data
  }
     getColor(){
     return this.color
  }
     setColor(data){
     this.color=data
  }
     getArea(){
     return Math.PI*(this.radius*this.radius)
  }
     getCircumference(){
     return 2*Math.PI*this.radius
  }
}  
     var res=new circle(1.0,"red")
   //res.setColor("yellow")
   //res.setRadius(3.0)
    console.log(res.getColor());
    console.log(res.getRadius());
    console.log(res.getArea());
    console.log(res.getCircumference());

 
 
   //     Output:red
  //            1
  //            3.141592653589793
  //            6.283185307179586




  //Write a “person” class to hold all the details.

class person{
  constructor(FirstName,LastName,gender,age,email){
    this.FirstName=FirstName;
    this.LastName=LastName;
    this.gender=gender;
    this.age=age;
    this.email=email;
  } 
    getdetails(){
    
      return(`The person details-FirstName:${this.FirstName},LastName:${this.LastName},Gender:${this.gender},Age:${this.age},Email:${this.email}`) 
}
}


var res1=new person("muthukumaran","m","male",26,"tvm.muthukumaran007@gmail.com")
  var res2=new person("lokesh","v","male",26,"lokesh123@gmail.com")
  console.log(res1.getdetails());
  console.log(res2.getdetails());


  //write a class to calculate the uber price.

class Uber {
  constructor(distance,rate,waitingperiod){
      this.distance=distance;
      this.rate=rate;
      this.waitingperiod= waitingperiod;
  }
      setDistance(dist){
      
       this.distance=dist;
 
  }
      getRideDetails(){
      
       return(`The distance of the ride is ${this.distance} with rate of ${this.rate} 
         with a waiting period of ${this.waitingperiod}`)
 
 }
      getPrice(){
      
       let price =(this.distance * this.rate) + (5*this.waitingperiod)
       return price;
 }
 }
  let uber1 = new Uber (100,12,10);
  uber1.setDistance(130);

  console.log(uber1.getPrice())
  console.log(uber1.getRideDetails())