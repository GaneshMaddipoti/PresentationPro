let titleHTML = `
<table style="width: 100%; align:center">
<tr>
<td width="25%">
<div style=""><img src="img/scala.png" width="200px" height="200px"/></div>
</td><td style="align:right">
<div style="font-size:175px;font-family:fantasy;
margin-top:100px;padding:20px;color:#F8981D">Scala</div><br/>
<div style="padding:20px; color:#5382A1">Programming Language </div>
</td>
</tr>
</table>
`;

let aboutMeHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
About me
</div>
I am <b>Ganesh Maddipoti </b>,
<ul>
<li>Cloud architect with over 15 years of experience in IT</li>
<li>Primary Skills - scala, spring, python, spark, linux, AWS, Terraform </li>
<li>Roles - full stack developer, data engineer, solution architect</li>
<li>Domains - Banking and Finance, Logistics and Travel, IoT </li>
</ul>
<b>Certifications</b><br/>
<ul>
<li>Oracle certified Scala Professional</li>
<li>AWS certified solution architect </li>
<li>Hashicorp certified Terraform associate</li>
<li>Linux foundations certified system administrator  </li>
</ul>
<b>Hobbies & Interests </b> <br/>
<ul><li>Blogging and content writing on technology </li></ul>
`;

let featuresHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
Content
</div>
<b>Features</b>
<ul>
<li>Starting with system architecture</li>
<li>Program execution with internals </li>
<li>Learning along by coding an application</li>
<li>Language fundamentals to advanced features</li>
</ul>
<b>Presentation</b><br/>
<ul>
<li>Simple enough to understand</li>
<li>Block diagram with flow</li>
<li>Coding in parallel with Intellij IDE</li>
<li>One flow without any deviations</li>
</ul>
<b>Users</b>
<ul><li>Anyone who wants to learn Scala language from zero to advanced</li></ul>
`;

let scalaHTML = `
Scala is a programming language developed by Martin Odersky, in 2004 <br/>
The name Scala stands for scalable language <br/>
We can apply Scala to wide variety of programs from small scripts to large systems.<br/>
It runs on the standard java and javascript platforms.<br/>
It is blend of OOP and FP in statically typed language.<br/>
Scales FP constructs make it easy to build interesting things quickly from simple parts.<br/>
Its OOP constructs make it easy to build large systems and adapt them to new standards.<br/>
<br/>
Scala grows on <br/>
1. Types - we can add new types as libraries <br/>
2. Control constructs <br/>
<br/>
Functional programming <br/>
1. Functions are first class values <br/>
2. Pure functions map input values to output values without change them in place <br/>
<br/>
Why Scala?<br/>
1. Scala is compatible<br/>
2. Scala is concise<br/>
3. Scala is high level<br/>
4. Scala is statically typed<br/>

<br/>
`;

let scalaEncapsulationHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
What is encapsulation ?
</div>
<b>Encapsulation</b><br/>
<ul>
<li>Encapsulation is a mechanism which puts attributes and behavior together</li>
<li>And hides the information and implementation to the real world by access modifiers</li>
<li>Through  encapsulation we will get maintainability, flexibility, and extensibility, <br/>
ability to make changes in your implementation code with out breaking the code of the others.</li>
<li>We will hide data by using private access modifiers and gives to others public accessor methods</li>
</ul>
<br/>
<div class="sourceCode">public class Order {
    private Integer id;
    private Items[] items;
    private Buyer buyer;
    private Float cost;
    public Float getPrice() {
        //calculation of total price
    }
}
</div>
`;

let scalaAbstractionHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
What is abstraction ?
</div>
<b>Abstraction</b><br/>
<ul>
<li>Abstraction means giving the user essential and salient features </li>
<li>which represents unique behavior of that entity and ignoring non essential things</li>
<li>The powerful way to manage abstraction is through the use of hierarchical classification</li>
</ul>
<br/>
<div class="sourceCode">public class Order {
    private Integer id;
    private Items[] items;
    private Buyer buyer;
    private Float cost;
}

public class Buyer {
}

public class Item {
}
</div>
`;

let scalaInheritanceHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
What is inheritance ?
</div>
<b>Inheritance</b><br/>
<ul>
<li>It is the process by which one object acquires properties of other object.</li>
<li>Inheritance is for instance methods, not for static members and instance variables </li>
<li>if we write same static members/instance variables in subclass, parent members will get hidden </li>
<li>The most common reasons to use inheritance are <br/>
    1). To promote code reuse <br/>
    2). To use polymorphism</li>
<li>Code reuse through inheritance means that methods with generic functionality, <br/>
put them in super class and extend that super class in sub classes <br/>
</li>
<li>In Polymorphism, you can declare super class type, and you can pass any sub class types to that. <br/>
    It is used when objects satisfy [is-a] relationship.</li>
</ul>
<br/>
<div class="sourceCode">class Order {
  public void calculateTotal() {
    System.out.println("Order total:");
  }
  public void calculateTotal(Float tax) {
    System.out.println("Order total with tax:")
  }
}

class CashOrder extends Order {
  //All public members of Order class inherited
  //We have ability to override the super class behavior
  public void calculateTotal() { //run-time polymorphism
    System.out.println("Cash Order Total:");
  }
}
</div>
`;

let scalaPolymorphismHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
What is polymorphism ?
</div>
<b>Polymorphism</b><br/>
It is a feature that allows one interface to be used for a general class of actions.<br/>
1). Compile time polymorphism: <br/>
    In this linking between the object reference and the method it invokes will happen at compile time <br/>
    Ex: overloading. <br/>
    2). Run time polymorphism:  <br/>
    In this linking between the object reference and the method it invokes will happen at run time. <br/>
    Ex:overriding <br/>
<br/>
<div class="sourceCode">class Order {
  public void calculateTotal() {
    System.out.println("Order total:");
  }
  public void calculateTotal(Float tax) { //compile-time polymorphism
    System.out.println("Order total with tax:")
  }
}

class CashOrder extends Order {
  public void calculateTotal() { //run-time polymorphism
    System.out.println("Cash Order Total:");
  }
}

class DebitOrder extends Order {
  public void calculateTotal() {
    System.out.println("Debit order:");
  }
}
</div>
<br/>
<b>Overloading rules </b><br/>
1) Argument list should differ <br/>
<br/>
<b>Overriding rules </b><br/>
@Override annotation tells the compiler we are overriding <br/>
1) Signature must be same <br/>
2) Overridden method must be less secured than parent <br/>
3) Overridden method can not through new or broader exceptions than parent <br/>
4) the return type should be same or subtype of parent <br/>
`;

let jdkHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
What is JDK ?
</div>
<b>JDK</b><br/>
Scala Development Kit(JDK) contains the minimum software you need to do scala development. <br/>
It contains <br/>
<ul>
<li>Compiler</li>
<li>Application Programming Interface(API)</li>
<li>Scala Virtual Machine(JVM)</li>
</ul>
<br/>
<b>Execution</b><br/>
1) Compile the source code using scalac <br/>
&emsp; $scalac Program.scala -> outputs Program.class <br/>
&emsp; $scalac -sourcepath src -d target src\com\jtechy\commerce\Application.scala <br/>
2) Execute the class file using scala <br/>
&emsp; $scala Program                                   <br/>
&emsp; $scala -cp target com.jtechy.commerce.Application <br/>
3) Compile and execute single source file using scala <br/>
&emsp; $scala Program.scala            <br/>
4) jar -cvf (create, verbose, filename) sample.jar <br/>
&emsp; -C temp/ (to create jar containing the files in temp directory)<br/>
5) scaladoc - to create documentation of the class/application <br/>
6) A Scala program begins execution with its main method <br/>
<br/>
<b>scalac</b><br/>
Scala Compiler converts source files(.scala) to bytecode(.class) <br/>
&emsp; $scalac packagea/ClassA.scala <br/>
And * to mention compile all classes in that directory (not subdir) <br/>
&emsp; $scalac packagea/\*.scala <br/>
Bytecode is a special format that JVM can run <br/>
Compiler will place class files in same directory as source files <br/>
Using -d option, we can specify destination directory for class files <br/>
Using -cp option, we can specify classpath location/jar to compile <br/>
We can use * with -cp to include all classes and jars in that directory <br/>
<br/>
<b>scala</b><br/>
Scala runtime environment(JRE) contain Scala API and JVM <br/>
scala launches Scala virtual machine(JVM) before the program <br/>
We can pass arguments to the program <br/>
&emsp; $scala Application param1 "param   2" <br/>
Using -cp option, we can specify classpath location/jar to run <br/>
`;


let scalaSyntaxHTML = `
// used for comments <br/>
/* <br/>
 *<br/>
*/ used for multi line comments <br/>
/** <br/>
 *<br/>
*/ used for Scala doc comments <br/>
<br/>
<b>Keywords</b><br/>
It's a reserved word, have predefined meaning in scala language <br/>
Ex: int, byte, for, which, try, catch, class, interface, enum, etc...<br/>
<br/>

<b>Casting</b><br/>
We can change the data type from one to another using casting <br/>
Ex: byte value = (byte) 1000
`;

let scalaLiteralHTML = `
<pre><code class="language-scala">//literals
val i = 123   // defaults to Int
val x = 1.0   // defaults to Double
val x = 1_000L   // val x: Long = 1000
val y = 2.2D     // val y: Double = 2.2
val z = -3.3F    // val z: Float = -3.3
//Hexadecimal literals starts with 0x
val a = 0xACE    // val a: Int = 2766
val b = 0xfd_3aL // val b: Long = 64826

val c = 'a'     //Character

val s = "Bill"  //String
</code></pre>
`;

let scalaSourceCodeHTML = `
<b>Source Code</b><br/>
Source is organized into Packages <br/>
Package contains files <br/>
File contains high level types - classes, interfaces, records, enums <br/>
A file should contain only one public type, and that type name should match with file name <br/>
<br/>
<b>Package</b>
<ul>
    <li>It is used to group related classes </li>
    <li>To avoid naming conflicts</li>
    <li>To provide access protection</li>
    <li>If package name is not present, it belongs to default package</li>
</ul>
<br/>
<b>Importing classes </b><br/>
1) Import tells where to find the class <br/>
2) import scala.io.*; <br/>
&emsp; will import only classes in that package not sub packages <br/>
&emsp; will not import all classes in that package but needed ones <br/>
3) Try to list all import statements for readability, <br/>
&emsp; and * for shorten the imports <br/>
4) import scala.lang.*; is by default placed, we no need to place <br/>
5) Scala automatically looks in the current package for classes <br/>
6) import scala.util.Date; import scala.sql.Date; <br/>
&emsp; - will result compilation error, <br/>
&emsp; - it can be resolved by using fully qualified class name <br/>
7) explicitly importing using class name, takes precedence over * <br/>
&emsp; import scala.sql.Date; <br/>
&emsp; import scala.util.*; &emsp; &emsp; - it works <br/>
`;

let classHTML = `
A class in Scala is a template for the creation of object instances
<pre><code class="language-scala">//class
class Person(var name: String, var vocation: String)    //mutable fields
val p = Person("Robert Allen Zimmerman", "Harmonica Player")
p.name       // "Robert Allen Zimmerman"
p.vocation = "Musician" //we can change them

class Person(var firstName: String, var lastName: String):
  println("initialization begins")  //initialized as part of default constructor
  val fullName = firstName + " " + lastName //additional fields
  def printFullName: Unit =     // a class method
    println(fullName)
  printFullName
  println("initialization ends")
  
//class constructor parameters can also have default values:
class Socket(val timeout: Int = 5_000, val linger: Int = 5_000):
  override def toString = s"timeout: $timeout, linger: $linger"
  
//we can have multiple constructors - auxiliary constructors   
class Student(
  var name: String,
  var govtId: String
):
  private var _applicationDate: Option[LocalDate] = None
  def this(
    name: String,
    govtId: String,
    applicationDate: LocalDate
  ) =
    this(name, govtId)
    _applicationDate = Some(applicationDate)   
</code>
</pre>
`;

let objectHTML = `
<pre><code class="language-scala">//An object is a class that has exactly one instance.
object StringUtils:
  def truncate(s: String, length: Int): String = s.take(length)
  def containsWhitespace(s: String): Boolean = s.matches(".*\\\\s.*")
  def isNullOrEmpty(s: String): Boolean = s == null || s.trim.isEmpty

StringUtils.truncate("Chuck Bartowski", 5)  // "Chuck"  
</code></pre>
An object that has the same name as a class, in the same file as the class, is called a “companion object.” <br/>
Similarly, the corresponding class is called the object’s companion class. <br/> 
A companion class or object can access the private members of its companion. <br/>
`;

let scalaDataTypeHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
Data Types
</div>
<b>Data Types </b><br/>
Scala is statically typed language<br/>
Data is declared of type primitive, array, string, and object <br/>
<br/>
<b>Primitives</b><br/>
There are 8 primitive data types
<table>
<tr><td>1)</td><td width="200px">Boolean</td><td width="200px">1 bit</td><td>true/false</td></tr>
<tr><td>2)</td><td>Byte</td><td>1 byte</td><td>-128 to 127</td></tr>
<tr><td>3)</td><td>Short</td><td>2 byte</td><td>-32768 to 32767</td></tr>
<tr><td>4)</td><td>Int</td><td>4 byte</td><td>-2^31 to 2^31-1</td></tr>
<tr><td>5)</td><td>Long</td><td>8 byte</td><td>-2^63 to 2^63-1</td></tr>
<tr><td>6)</td><td>Float</td><td>4 byte</td><td>Ex: 123.45f</td></tr>
<tr><td>7)</td><td>Double</td><td>8 byte</td><td>Ex: 123.456</td></tr>
<tr><td>8)</td><td>Char</td><td>2 byte</td><td>0 to 65535</td></tr>
</table>
<ul>
<li>For precise calculations use BigDecimal, because float, double will behave inconsistently</li>
<li>All the primitives should be initialized with value before use, not null</li>
</ul>
<br/>
<b>Local Variable Type inference </b><br/>
The compiler will infer the type of the local variable by its declaration <br/>
var length = 50; <br/>
var can not be null, Ex : var length = null;(invalid) <br/>
<br/>
<b>Enums</b><br/>
Scala lets you restrict a variable to having one of only a few predefined values<br/>
Ex: enum CoffeeSize {BIG,HUGE,SMALL,LARGE}; <br/>
In enums, you can add constructors, variables, methods. <br/>
Every enum has a static method, values() that returns an array of the enum’s values. <br/>
<br/>
<b>Arrays</b><br/>
Arrays are objects that store multiple variables of the same type or variables that are all subclasses of the same type.<br/>
Declare: Arrays are declared by stating the type of elements <br/>
Ex: int[] marks; <br/>
Construct: Arrays are constructed/created on heap with mentioned size <br/>
Ex: int[] marks = new int[100]; <br/>
Initialize: Arrays initialization means that putting things into it <br/>
Ex: int[] marks = {11, 12, 13, 14}; <br/>
&emsp;&emsp; marks[0] = 21; <br/>
They are indexed from 0 <br/>
`;

let scalaIdentifiersHTML = `
<pre><code class="language-scala">//variables
val a: Int = 0   // immutable and explicit
var b = 1   // mutable and implicit

//(classes, traits, enums) - Camel case with first letter capital
class Person(var firstName: String, var lastName: String):
  val fullName = firstName + " " + lastName //additional fields
  def printFullName: Unit =     //Camel case with first letter small
    println(fullName) 
}
</code>
</pre>
<b>Rules</b>
<ol><li>Identifiers must start with a letter(currency symbol $,£, etc...),(_)</li>
<li>After first character, they can contain numbers also.</li>
<li>There is no limit on number of characters</li>
<li>You can’t use scala keyword as an identifier</li>
<li>Identifiers are case sensitive.</li>
</ol>
<br/>
Scala is case-sensitive, while declaring variables, methods, classes, literals <br/>
<br/>
`;

let scalaStatementHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
Expression vs Statement
</div>
An expression returns a result, while a statement does not. <br/>
Statements are typically used for their side-effects, such as using println to print to the console.<br/>
<br/>
<b>Expression </b><br/>
An expression is a construct with operator and operands, that evaluates to a single value <br/>
This will be the code segment on the right side of = operator, in an assignment or declaration statement <br/>
Ex : (orderNumber + 100) <br/>
<br/>
<b>Statement </b><br/>
It's a complete command to be executed terminated by ; <br/>
It can include assignment/one or more expressions <br/>
Ex : total = orderValue + tax; <br/>
<br/>
<b>Declaration</b><br/>
Ex: val length <br/>
<br/>
<b>Initialization </b><br/>
Ex: val length = 50 <br/>
<br/>
<b>Operators</b><br/>
The operator performs an operation on variables/literals its used with <br/>
Ex : +, -, *, >, etc... <br/>
<table>
<tr><td>1)</td><td width="300px">Assignment</td><td>=</td></tr>
<tr><td>2)</td><td >Compound Assignment </td><td>+=, -=, *=, /=, etc...</td></tr>
<tr><td>3)</td><td >Arithmetic</td><td>+, -, *, /, %</td></tr>
<tr><td>4)</td><td>Increment & Decrement</td><td>++, --</td></tr>
<tr><td>5)</td><td>Relational</td><td><, <=, >, >=, ==, !=</td></tr>
<tr><td>6)</td><td>Logical</td><td>&, |, ^, !, &&, ||</td></tr>
<tr><td>7)</td><td>Bitwise</td><td>&, |, ^, ~</td></tr>
<tr><td>8)</td><td>Conditional</td><td>? : </td></tr>
<tr><td>9)</td><td>Type check</td><td>instanceOf</td></tr>
</table>
<br/>

`;

let scalaArraysHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to store homogeneous collection of data ?
</div>
<b>Arrays</b><br/>
Arrays are objects that store multiple variables of the same type or variables that are all subclasses of the same type.<br/>
<br/>
<b>Declare</b><br/>
Arrays are declared by stating the type of elements <br/>
Ex: int[] marks; <br/>
<br/>
<b>Construct</b><br/>
Arrays are constructed/created on heap with mentioned size <br/>
Ex: int[] marks = new int[100]; <br/>
<br/>
<b>Initialize</b><br/>
Arrays initialization means that putting things into it <br/>
Ex: int[] marks = {11, 12, 13, 14}; <br/>
&emsp;&emsp; marks[0] = 21; <br/>
<br/>
They are indexed from 0 <br/>
`;

let scalaStringHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to represent words or sentences ?
</div>
<b>Strings</b><br/>
<ul>
<li>A string is an object that contains a sequence of characters. <br/>
    Ex: String name = "Sample sentence."; <br/></li>
<li>Strings are immutable</li>
<li>To make memory efficient, the JVM sets aside a memory called the “String Constant Pool”.</li>
<li>For string literal, it checks the pool to see if an identical string already exists. <br/>
If match is found, the reference to the new literal is directed to the existing string.</li>
</ul>
<b>Creating new Strings </b><br/>
String s = “abc”; <br/>
String s = new String(“abc”); – in this case 2 objects will be created in pool and in heap<br/>
String str = new String("abc").intern(); - instructs the jvm to using string pool <br/>
<br/>
<b>Methods in string class </b>
<ol>
<li>charAt(int radix) : returns the character located at the index.</li>
<li>concat(String s) : concatenates with the passed string and returns</li>
<li>equalsIgnoreCase(String s) : checks the strings are equal ignoring case and returns true/false </li>
<li>length() : this method returns length</li>
<li>trim(): will trim the spaces before and after string</li>
<li>substring(int begin, int end): returns sub string indexing from begin to end-1</li>
<li>replace(char old, char new) : replaces all old character occurrence with new character</li>
</ol>
<br/>
<b>Performance improvements </b><br/>
when you are making a lot of modifications to strings of characters, better to use
<ol>
<li>StringBuffer       -              thread safe</li>
<li>StringBuilder      -              not thread safe</li>
</ol>
`;

let domainModelingHTML = `
<pre><code class="language-scala">//definitions
val timeout = 1000      //package level field
def method(arg: String) : Unit = print(arg) //package level method

//for grouping field/data and behavior/method
class Person(var firstName: String, var lastName: String):
  val fullName = firstName + " " + lastName //additional fields
  def printFullName: Unit =
    println(fullName) 
</code></pre>
<pre>
Rule of thumb :
Use classes whenever you want to create instances of a particular type,
and traits when you want to decompose and reuse behaviour
</pre>
`;

let scalaTraitsHTML = `
Scala trait is similar to an interface in Java 8+ <br/>
Traits can contain: <br/>
Abstract methods and fields <br/>
Concrete methods and fields <br/>
<pre><code class="language-scala">//traits
trait Employee:
  def id: Int
  def firstName: String
  def lastName: String
</code></pre>
`;

let caseClassesHTML = `
Case classes are used to model immutable data structures. <br/>
<pre><code class="language-scala">case class Person(name: String, relation: String)</code></pre>
Since the fields of a case class are assumed to be immutable, the Scala compiler can generate many helpful methods <br/>

An unapply method is generated, which allows you to perform pattern matching on a case class (that is, case Person(n, r) => ...). <br/>
A copy method is generated in the class, which is very useful to create modified copies of an instance.<br/>
equals and hashCode methods using structural equality are generated, allowing you to use instances of case classes in Maps. <br/>
A default toString method is generated, which is helpful for debugging. <br/>

`;


let scalaLambdasHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
What are Lambda expressions ?
</div>
<b>Lambda</b> <br/>
Lambda expressions basically express instances of functional interfaces <br/>
An interface with a single abstract method is called a functional interface. <br/>
Lambda Expressions are the short block of code that accepts input as parameters and returns a resultant value. <br/>
<div class="sourceCode">interface FuncInterface {
    void abstractFun(int x);
}
FuncInterface fobj = (int x)->System.out.println(2*x);
fobj.abstractFun(5);
</div>
<br/>
<b>There are 3 main functional interfaces</b> <br/>
1. Predicate - test method and return true/false <br/>
2. Function - apply method take input apply the function and return output <br/>
3. Consumer - consume method take input and returns nothing <br/>
`;

let scalaFlowControlsHTML = `
<pre><code class="language-scala">//conditional expressions
val x = if a < b then a else b      //if expression

val result = i match    //like switch, but its an expression
  case 1 => "one"
  case 2 => "two"
  case _ => "other"
  
val p = Person("Fred")
p match
  case Person(name) if name == "Fred" =>
    println(s"$name says, Yubba dubba doo")
  case Person(name) if name == "Bam Bam" =>
    println(s"$name says, Bam bam!")
  case _ => println("Watch the Flintstones!")  
</code></pre>
`;

let scalaLoopsHTML = `
<pre><code class="language-scala">//loops
val ints = List(1, 2, 3, 4, 5)
for i <- ints do println(i)     //generators
for
  i <- ints
  if i > 2                      //guards
do
  println(i)
  
//You can use multiple generators and guards.
for
  i <- 1 to 3
  j <- 'a' to 'c'
  if i == 2
  if j == 'b'
do
  println(s"i = $i, j = $j")   // prints: "i = 2, j = b"
  
val doubles = for i <- ints yield i * 2     //for expression

while x >= 0 do x = f(x) //while construct
</code></pre>
`;

let scalaExceptionsHTML = `
<pre><code class="language-scala">//exception handling
try
  writeTextToFile(text)
catch
  case ioe: IOException => println("Got an IOException.")
  case nfe: NumberFormatException => println("Got a NumberFormatException.")
finally
  println("Clean up your resources here.")
</code></pre>
`;

let scalaMultiThreadsHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
Does scala support parallel processing ?
</div>
<b>Multithreading</b><br/>
<ul>
<li>A thread is a light weight process that has its own call stack</li>
<li>The main() method, that starts the whole ball rolling runs in one thread called main thread</li>
<li>When we create a new thread, a new stack materializes and method called from that thread run in parallel to main</li>
<li>Every new call stack, run concurrently with other</li>
<li>The jvm like mini os, schedules its own threads  regardless of the underlying us</li>
<li>In some jvm’s the scala threads are actually mapped to native os threads</li>
<li>We can create thread by extending Thread class, or implementing Runnable interface <br/>
    <div class="sourceCode">class MyThread extends Thread {
        @Override
        public void run() {
            System.out.println("Thread executed");
        }
    }
    Thread thread = new MyThread();
    thread.start();

    class Task implements Runnable {
        @Override
        public void run() {
            System.out.println("Task executed");
        }
    }
    Thread thread1 = new Thread(new Task());
    thread1.start();
    </div></li>
<li>Sleep() // static method, which to sleep the thread for some time <br/></li>
<li>Yield () //static method, It make the currently running thread to back to runnable state to allow other threads of equal priority to get their turn.</li>
<li>Join() //The non-static method of class thread lets one thread “ join onto the end” of other thread main.join()</li>
<li>To prevent race condition, synchronization issues we use synchronized keyword</li>
</ul>
<b>Thread Interaction </b><br/>
The thread interaction will be done through wait(), notify(), and notifyAll() methods of object
They must be called with in synchronized block
<ul>
<li>b.wait();  waits until b thread finishes</li>
<li>notify(); used to notify one waiting threads</li>
<li>notifyAll(); used to notify all waiting threads
</li>
</ul>`;

let scalaWrapperClassHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
Why we need wrapper classes for primitive data types ?
</div>
<b>Wrapper classes </b><br/>
In Scala, everything is an object, except primitives <br/>
Primitives can not be nullable, but wrapper objects are <br/>
All wrapper classes extends Number class, which has helper methods <br/>
Ex: .intValue(), doubleValue(),min(),sum() - for manipulating data <br/>
While using collections and generics these wrapper classes come into play <br/>
A wrapper class provides the basic operations like the corresponding primitive data type <br/>
as well as some information about the primitive data type stored in it, which can not be stored in primitive itself <br/>
Ex: Integer length = 0;         <br/>
boolean     - Boolean           <br/>
byte        - Byte              <br/>
short       - Short             <br/>
int         - Integer           <br/>
long        - Long              <br/>
float       - Float             <br/>
double      - Double            <br/>
char        - Character         <br/>
Wraparound will happen for byte, short, int, long data types <br/>
Integer wraparounds (Integer.MIN_VALUE - 1)(-2147483648 -1) to 2147483647 (Integer.MAX_VALUE) <br/>
Integer wraparounds (Integer.MAX_VALUE + 1)(2147483647+1) to -2147483648 (Integer.MIN_VALUE) <br/>
<br/>
<b>Creating wrapper objects</b><br/>
Ex: Integer length = Integer.valueOf(1234); <br/>
Ex: Integer length = Integer.valueOf("1234"); <br/>
`;

let scalaCollectionsHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
Is there any API/Framework to manage different collections of data ?
</div>
<b>Collection Framework </b><br/>
 It is framework to maintain larger collections of data. <br/>
1). Add objects to it. <br/>
2). Remove objects from the collection <br/>
3). Searching for an object. <br/>
4). Retrieving an object from the collection <br/>
5). Iterating through the collection  <br/>
<br/>
<b>List Interface </b>: An ordered, indexed collection of objects <br/>
1). ArrayList : Think of this as a growable array. It gives you fast iteration and fast random access. <br/>
2). Vector : Vector is basically the same as arrayList, but vendor methods are synchronized <br/>
3). Linked List: The elements are doubly-linked to one another. Iteration is slow, but its good for fast insertion and deletion. <br/>
<br/>
<b>Set Interface </b>: Unordered collection of unique objects <br/>
1). Hash Set : A Hash set in unsorted, unordered set <br/>
2). LinkedHashSet : Its an ordered version of HashSet. That maintains a doubly-linked list across all elements <br/>
3). TreeSet : It’s a sorted collection, means all elements will be in ascending order. <br/>
<br/>
<b>Map Interface </b>: Unordered collection of key,value pairs <br/>
A Map cares about unique identities, a unique key and the value. <br/>
1). HashMap : HashMap gives you an unsorted, unordered map. <br/>
HashMap allows one null key and multiple null values. <br/>
2). HashTable : Its like HashMap but the methods are synchronized. <br/>
HashTable doesn't allow any null values or null key. <br/>
3). LinkedHashMap : It’s a ordered version of HashMap. It's slower than HashMap but, you can expect faster iterations. <br/>
4). TreeMap : It’s a sorted map. <br/>
<br/>
<b>Comparable vs. Comparator </b> <br/>
if we want to use Arrays or Collections sort method, <br/>
Use Comparable if you need to sort by a property <br/>
Use Comparator if you need to have multiple sort mechanisms on the class <br/>
<br/>
<div class="sourceCode">public class MyCollection implements Comparable<MyCollection>{
    private int prop;
    private int salary;

    @Override
    public int compareTo(MyCollection target) {
        return this.prop - target.prop;
    }
}

class SalaryComparator implements Comparator<MyCollection> {
    @Override
    public int compare(MyCollection o1, MyCollection o2) {
        return o1.getSalary() - o2.getSalary();
    }
}
</div>
`;

let scalaGenericsHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
Can we have dynamic type properties and dynamic type argument methods ?
</div>
<b>Generic Classes </b> <br/>
We can make a class more generic by adding &lt; &gt; <br/>
<div class="sourceCode">class Printer&lt;T extends Animal & Serializable &gt; {
    T object;
    Printer(T object) {
        this.object = object;
    }
    public void print() {
        System.out.println(object);
    }
}</div>
E - Element (used extensively by the Scala Collections Framework) <br/>
K - Key                                                          <br/>
N - Number                                                       <br/>
T - Type                                                         <br/>
V - Value                                                        <br/>
S,U,V etc. - 2nd, 3rd, 4th types                                 <br/>
<br/>
<b>Generic Methods</b> <br/>
We can also make a method generic by adding &lt; &gt;
<div class="sourceCode">public static &lt;T&gt; void print(T thing) {
    System.out.println(thing);
}</div>
And, if we want to pass any type of collection to that method <br/>
We know that Object is the supertype of all Scala classes. However, a collection of Object is not the supertype of any collection. <br/>
<div class="sourceCode">public static void print(List&lt;?&gt; thing) {
    System.out.println(thing);
}</div>
`;

let scalaIteratorsHTML = `Iterator is an interface which is used to iterate over a collection <br/>
The iterator interface defines three methods as listed below: <br/>
1. hasNext(): Returns true if the iteration has more elements. <br/>
2. next(): Returns the next element in the iteration. <br/>
3. remove(): Removes the next element in the iteration.<br/>
`;

let scalaSpliteratorsHTML = `Spliterator is an interface used to traverse and partition sequences <br/>
- for support of efficient parallel traversal in addition to sequential traversal. <br/>
- it combines the hasNext and next operations into one method. <br/>
- tryAdvance(Consumer) - If a remaining element exists, performs the given action on it, returning true; else returns false. <br/>
- forEachRemaining(Consumer) - Performs the given action for each remaining element, sequentially in the current thread, <br/>
    until all elements have been processed or the action throws an exception. <br/>
`;

let scalaStreamsHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
What are the benefits/Why we need Streams ?
</div>
<b>Streams </b> <br/>
Stream API is used to process collections of objects, without external iteration/iterators <br/>
It supports various methods which can be pipelined to produce the desired result. <br/>
Enable us to perform operations like filtering, mapping,reducing and sorting. <br/>
<div class="sourceCode">Stream&lt;T&gt; stream;</div>
There are two types of Operations in Streams: <br/>
1) Intermediate Operations - in which multiple methods are chained in a row.<br/>
&emsp; - Intermediate operations transform a stream into another stream. <br/>
&emsp; - map() is used to return a stream consisting of the results of applying the given function to the elements of this stream. <br/>
&emsp; - filter()  is used to select elements as per the Predicate passed as an argument. <br/>
&emsp; - sorted() is used to sort the stream. <br/>
2) Terminate Operations <br/>
Terminal Operations are the type of Operations that return the result. <br/>
These Operations are not processed further just return a final result value. <br/>
&emsp; - collect() is used to return the result of the intermediate operations performed on the stream <br/>
&emsp; - forEach() is used to iterate through every element of the stream. <br/>
&emsp; - reduce() is used to reduce the elements of a stream to a single value. <br/>
<br/>
<b>Benefit of Scala Stream </b><br/>
1) No Storage <br/>
2) Pipeline of Functions <br/>
3) Laziness <br/>
4) Can be infinite <br/>
5) Can be parallelized <br/>
6) Can be created from collections, arrays, Files Lines <br/>
`;


let scalaProgrammingHTML = `Programming is about data analysis, data ingestion, data transformation, and data generation <br/>
`;

let bufferedReaderHTML = `Use BufferedReader if we need to read long strings from a file
<div class="sourceCode">//From System console input
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//From files
BufferedReader br = new BufferedReader(new FileReader("file.txt"));
//From Network
Socket socket = new Socket(hostName, portNumber);
BufferedReader br =  new BufferedReader(
                new InputStreamReader(socket.getInputStream()));

String line = br.readLine();
</div>
`;

let scannerHTML = `if we need to parse the input stream with a custom regular expression <br/>
<div class="sourceCode">//From System console input
Scanner sc = new Scanner(System.in).useDelimiter("\\n");
//From Files
Scanner sc = new Scanner(new File("file.txt"));
//From Network
Socket socket = new Socket(hostName, portNumber);
Scanner sc =  new Scanner(socket.getInputStream());

String line = sc.next(); //to get parsed input use next***()
</div>
`;

let consoleHTML = `if we’re reading secure data from the system console  <br/>
<div class="sourceCode">Console console = System.console();
String line = console.readLine(); //to get password use readPassword()
</div>
`;

let scalaDataTransformationHTML = `
`;

let scalaIterationHTML = `We can iterate over an array or collection using for<br/>
<div class="sourceCode">int[] nums = new int[10];
for(int i=0; i &lt; nums.length; i++) {
    System.out.println(nums[i]);
}
for(int pivot: nums) {
    System.out.println(pivot);
}</div>
Iterator - An Iterator is one of many ways we can traverse a collection <br/>
<div class="sourceCode">List&lt;String&gt; strings = List.of(new String[]{"one", "two"});
Iterator&lt;String&gt; iterator = strings.listIterator();
while (iterator.hasNext()) {
    System.out.println(iterator.next());
}</div>
ForEach - Using Scala 8 Lambdas, we can iterate over collections <br/>
<div class="sourceCode">List&lt;String&gt; strings = List.of(new String[]{"one", "two"});
strings.forEach(string -> System.out.println(string));
</div>
`;

let scalaDataGenerationHTML = `Write data to output devices <br/>
Write data to memory (variables, collections, cache) <br/>
Write data to Files <br/>
Write data to Databases <br/>
Write data over Network <br/>
`;

let scalaSPSingleRespHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
What is Single Responsibility principle ?
</div>
<b>Single Responsibility</b> <br/>
a class should only have one responsibility, and one reason to change <br/>
<br/>
<b>How to follow </b><br/>
Class should have methods that directly relate to its properties <br/>
<br/>
<b>Benefits</b><br/>
1) Testing – A class with one responsibility will have far fewer test cases. <br/>
2) Lower coupling – Less functionality in a single class will have fewer dependencies. <br/>
3) Organization – Smaller, well-organized classes are easier to search than monolithic ones. <br/>
<div class="sourceCode">public class Book {
    private String name;
    private String author;
    private String text;
    //constructor, getters and setters
    // methods that directly relate to the book properties
    public String replaceWordInText(String word, String replacementWord){
        return text.replaceAll(word, replacementWord);
    }
    public boolean isWordInText(String word){
        return text.contains(word);
    }
}
</div>
`;


let scalaSPOpenCloseHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
What is Open for extension Closed for modification principle ?
</div>
<b>Open for extension Closed for modification</b> <br/>
classes should be open for extension but closed for modification <br/>
i.e., should be able to add new features to a class without changing its existing code <br/>
<br/>
<b>How to follow</b><br/>
1) Abstraction and inheritance <br/>
2) code for interface <br/>
<div class="sourceCode">interface Shape {
  int area();
}

class Circle implements Shape {
  int r;
  int area() { return Math.PI*r*r*;}
}

class Square() implements {
  int height;
  int area() { return height * height; }
}
</div>`;

let scalaSPLiskovSubHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
What is Liskov Substitution principle ?
</div>
<b>Liskov Substitution </b> <br/>
Objects of a superclass should be replaceable with objects of its subclasses without breaking the system.<br/>
That requires the objects of your subclasses to behave in the same way as the objects of your superclass.<br/>
i.e., we should provide valid implementation in subclass for all inherited behavior from super class <br/>
<div class="sourceCode">public class Bird{}
public class FlyingBird extends Bird{
    public void fly(){}
}
public class Duck extends FlyingBird{}
public class Ostrich extends Bird{}
</div>
`;

let scalaSPInterfaceSegregationHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
What is Interface segregation principle ?
</div>
<b>Interface segregation </b> <br/>
No client should be forced to depend on methods that it does not use.<br/>
i.e., larger interfaces should be split into smaller ones. By doing so, <br/>
we can ensure that implementing classes only need to be concerned about the methods that are of interest to them.
<div class="sourceCode">public class Bird{}
public class FlyingBird extends Bird{
    public void fly(){}
}
public class Duck extends FlyingBird{}
public class Ostrich extends Bird{}
</div>
`;

let scalaSPDIHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
What is Dependency Inversion principle ?
</div>
<b>Dependency Inversion </b> <br/>
High-level modules should not depend on low-level modules, both should depend on abstractions. <br/>
This can be achieved by layers of abstraction <br/>
Ex: Controller -> Service -> DAO <br/>
<div class="sourceCode">public class CustomerService {
    private final CustomerDao customerDao;
    // standard constructor / getter
    public Optional<Customer> findById(int id) {
        return customerDao.findById(id);
    }
    public List<Customer> findAll() {
        return customerDao.findAll();
    }
}
public interface CustomerDao {
    Optional<Customer> findById(int id);
    List<Customer> findAll();
}
`;


let scalaDPSingletonHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to restrict object creation of a class to create single instance ?
</div>
<b>Singleton Design Pattern </b> <br/>
The singleton pattern restricts the instantiation of a Class and ensures that  <br/>
only one instance of the class exists in the Scala Virtual Machine. <br/>
<div class="sourceCode">class Singleton {
    private static Singleton single_instance = null;
    private String info = "Default";
    private Singleton() {}
    public synchronized static Singleton getInstance() {
        if (single_instance == null) {
            single_instance = new Singleton();
        }
        return single_instance;
    }

public class BillPughSingleton {
    private BillPughSingleton(){}
    private static class SingletonHelper {
        private static final BillPughSingleton INSTANCE = new BillPughSingleton();
    }
    public static BillPughSingleton getInstance() {
        return SingletonHelper.INSTANCE;
    }
}
</div>
`;

let scalaDPFactoryHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to reuse conditional object creation ?
</div>
<b>Factory Design Pattern </b> <br/>
Its used when we have a superclass with multiple subclasses <br/>
and based on input, we need to return one of the subclass. <br/>
This pattern takes out the responsibility of the instantiation of a class from the client program<br/>
We can keep Factory class Singleton or we can keep the method that returns the subclass as static.<br/>
<div class="sourceCode">public abstract class Computer {
}

public class PC extends Computer {
}

public class ComputerFactory {
    public static Computer getComputer(){
    if("PC".equalsIgnoreCase(type)) return new PC();
    else if("Server".equalsIgnoreCase(type)) return new Server();
    return null;
}
</div>`;

let scalaDPAbstractFactoryHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to avoid conditional logic in factory pattern ?
</div>
<b>Factory Design Pattern </b> <br/>
It is a factory of factories <br/>
Abstract Factory pattern is robust and avoid conditional logic of Factory pattern.<br/>
<div class="sourceCode">public interface ComputerAbstractFactory {
    public Computer createComputer();
}
public class ComputerFactory {
	public static Computer getComputer(ComputerAbstractFactory factory){
		return factory.createComputer();
	}
}
public class PCFactory implements ComputerAbstractFactory {
	@Override
	public Computer createComputer() {
		return new PC(ram,hdd,cpu);
	}
}
</div>
`;

let scalaDPBuilderHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to simplify constructing huge object with mandatory and optional properties?
</div>
<b>Builder Design Pattern </b> <br/>
First of all you need to create a static nested class <br/>
and then copy all the arguments from the outer class to the Builder class.<br/>
By providing a constructor with required parameters
and then different setter methods to set the optional parameters. <br/>
<div class="sourceCode">public class Computer {
    private String HDD;
    private String RAM;
    private boolean isGraphicsCardEnabled;
    private boolean isBluetoothEnabled;
    private Computer(ComputerBuilder builder) {
        this.HDD=builder.HDD;
        this.RAM=builder.RAM;
        this.isGraphicsCardEnabled=builder.isGraphicsCardEnabled;
        this.isBluetoothEnabled=builder.isBluetoothEnabled;
    }
    public static class ComputerBuilder{
        private String HDD;
        private String RAM;
        private boolean isGraphicsCardEnabled;
        private boolean isBluetoothEnabled;
        public ComputerBuilder(String hdd, String ram){
            this.HDD=hdd;
            this.RAM=ram;
        }
        public ComputerBuilder setGraphicsCardEnabled(boolean isGraphicsCardEnabled) {
            this.isGraphicsCardEnabled = isGraphicsCardEnabled;
            return this;
        }
        public Computer build(){
            return new Computer(this);
        }
    }
}</div>
`;

let scalaDPPrototypeHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to use cloning instead of object initialization which is resource heavy ?
</div>
<b>Prototype Design Pattern </b> <br/>
It is used when the Object creation is a costly affair and requires <br/>
a lot of time and resources, and you have a similar object already existing. <br/>
It provides a mechanism to copy the original object to a new object and then modify it according to our needs. <br/>
Prototype design pattern uses scala cloning to copy the object. <br/>
<div class="sourceCode">public class Employees implements Cloneable{
    private List<String> empList;
    @Override
    public Object clone() throws CloneNotSupportedException{
        List<String> temp = new ArrayList<String>();
        for(String s : this.getEmpList()){
        temp.add(s);
    }
    return new Employees(temp);
}</div>
`;

let scalaDPAdapterHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to combine the functionality of two independent interfaces ?
</div>
<b>Adapter Design Pattern </b> <br/>
It's used so that two unrelated interfaces can work together.<br/>
The object that joins these unrelated interface is called an Adapter. <br/>
<div class="sourceCode">public interface MediaPlayer {
   public void play(String audioType, String fileName);
}
public interface AdvancedMediaPlayer {
   public void playVlc(String fileName);
   public void playMp4(String fileName);
}
public class MediaAdapter implements MediaPlayer {
   AdvancedMediaPlayer advancedMusicPlayer;
   public MediaAdapter(String audioType){
      if(audioType.equalsIgnoreCase("vlc") ){
         advancedMusicPlayer = new VlcPlayer();
      }else if (audioType.equalsIgnoreCase("mp4")){
         advancedMusicPlayer = new Mp4Player();
      }
   }
   @Override
   public void play(String audioType, String fileName) {
      if(audioType.equalsIgnoreCase("vlc")){
         advancedMusicPlayer.playVlc(fileName);
      }
      else if(audioType.equalsIgnoreCase("mp4")){
         advancedMusicPlayer.playMp4(fileName);
      }
   }
}
}</div>
`;

let scalaDPStrategyHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to apply behavior at runtime ?
</div>
<b>Strategy Design Pattern </b> <br/>
It is used when we have multiple algorithm for a specific task <br/>
and client decides the actual implementation to be used at runtime. <br/>
<div class="sourceCode">public interface PaymentStrategy {
    public void pay(int amount);
}
public class CreditCardStrategy implements PaymentStrategy {
    @Override
    public void pay(int amount) {
        System.out.println(amount +" paid with credit/debit card");
    }
}
public class ShoppingCart {
    public void pay(PaymentStrategy paymentMethod){
        int amount = calculateTotal();
        paymentMethod.pay(amount);
    }
}</div>
`;

let scalaDPCompositeHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to group same type of objects and treat as single object ?
</div>
<b>Composite Design Pattern </b> <br/>
Composite pattern is used where we need to treat a group of objects in similar way as a single object. <br/>
<div class="sourceCode">public class Drawing implements Shape {
    private List&lt;Shape&gt; shapes = new ArrayList&lt;Shape&gt;();
    @Override
    public void draw(String fillColor) {
        for (Shape sh : shapes) {
            sh.draw(fillColor);
        }
    }
}</div>
`;

let scalaDPProxyHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to add layer of security/control to the existing functionality <br/>
</div>
<b>Proxy Design Pattern </b> <br/>
Provide a surrogate or placeholder for another object to control access to it<br/>
<div class="sourceCode">public class CommandExecutorProxy implements CommandExecutor {
    private boolean isAdmin;
    private CommandExecutor executor;
    public CommandExecutorProxy(String user, String pwd){
        if("test".equals(user) && "test123".equals(pwd)) isAdmin=true;
        executor = new CommandExecutorImpl();
    }
    @Override
    public void runCommand(String cmd) throws Exception {
        if(isAdmin){
            executor.runCommand(cmd);
        }else{
            if(cmd.trim().startsWith("rm")){
                throw new Exception("rm command is not allowed for non-admin users.");
            }else{
                executor.runCommand(cmd);
            }
        }
    }
}</div>
`;

let scalaDPFlyWeightHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to implement a cache of objects to optimize memory ?
</div>
<b>FlyWeight Design Pattern </b> <br/>
It is used when we need to create a lot of Objects of a class. <br/>
Since every object consumes memory space that can be crucial for low memory devices, <br/>
it can be applied to reduce the load on memory by sharing objects. <br/>
Note : We use pooling mechanism to optimize time while creating an object <br/>
<div class="sourceCode">public class ShapeFactory {
    private static final HashMap&lt;ShapeType, Shape&gt; shapes = new HashMap&lt;ShapeType, Shape&gt;();
    public static Shape getShape(ShapeType type) {
        Shape shapeImpl = shapes.get(type);
        if (shapeImpl == null) {
            if (type.equals(ShapeType.OVAL_FILL)) {
                shapeImpl = new Oval(true);
            } else if (type.equals(ShapeType.OVAL_NOFILL)) {
                shapeImpl = new Oval(false);
            } else if (type.equals(ShapeType.LINE)) {
                shapeImpl = new Line();
            }
        }
        shapes.put(type, shapeImpl);
    }
    return shapeImpl;
}</div>
`;

let scalaDPFacadeHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to add simple layer/interface to hide complex functionality ?
</div>
<b>Facade Design Pattern </b> <br/>
It is used to help client applications easily interact with the system.<br/>
<div class="sourceCode">public class CarEngineFacade {
    private static int DEFAULT_COOLING_TEMP = 90;
    private static int MAX_ALLOWED_TEMP = 50;
    private FuelInjector fuelInjector = new FuelInjector();
    private AirFlowController airFlowController = new AirFlowController();
    private Starter starter = new Starter();
    private CoolingController coolingController = new CoolingController();
    private CatalyticConverter catalyticConverter = new CatalyticConverter();

    public void startEngine() {
        fuelInjector.on();
        airFlowController.takeAir();
        fuelInjector.on();
        fuelInjector.inject();
        starter.start();
        coolingController.setTemperatureUpperLimit(DEFAULT_COOLING_TEMP);
        coolingController.run();
        catalyticConverter.on();
    }
}
</div>
`;

let scalaDPDecoratorHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to modify the functionality of an object dynamically ?
</div>
<b>Decorator Design Pattern </b> <br/>
It is used to modify the functionality of an object dynamically. <br/>
<div class="sourceCode">public abstract class TreeDecorator implements ChristmasTree {
    private ChristmasTree tree;
    @Override
    public String decorate() {
        return tree.decorate();
    }
}
ChristmasTree tree2 = new BubbleLights(
      new Garland(new Garland(new ChristmasTreeImpl())));
</div>`;