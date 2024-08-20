let scalaNodeDataArray = [

//    {key: "Presentation", desc: "Present", isGroup: true, category: "tree", img: "img/system.svg", expand: true},
//
//    {key: "Title", desc: "Title", category: "simple", group: "Presentation", toolTipHTML: titleHTML},
//    {key: "About Me", desc: "About Me", category: "simple", img: "img/PP.jpg", group: "Presentation", toolTipHTML: aboutMeHTML},
//    {key: "Features", desc: "Content", category: "simple", group: "Presentation", toolTipHTML: featuresHTML},
//

    {key: "VoidGroup", category: "voidTree", isGroup: true,},
    {key: "VoidNode", category: "voidNode", group: "VoidGroup"},

    {key: "System", desc: "System", group: "VoidGroup", isGroup: true, category: "tree", img: "img/system.svg", expand: true},

    {key: "Storage", desc: "Storage", isGroup: true, group: "System", category: "tree", img: "img/drive.svg", expand: true},

    {key: "CPU", desc: "CPU", isGroup: true, group: "System", category: "tree90", img: "img/pc.svg", expand: true},
    {key: "IO", desc: "Input/Output", group: "System", category: "simple", img: "img/terminal.svg", expand: false},

    {key: "Memory", desc: "Memory", isGroup: true, group: "CPU", category: "grid3", img: "img/memory.svg", expand: true},
    {key: "Processor", desc: "Processor", group: "CPU", category: "simple", img: "img/processor.svg", expand: false},


    {key: "Application", desc: "Application", isGroup: true, group: "Storage", category: "menu", expand: false, img: "img/application.svg",},

    {key: "Sourcecode", desc: "source", group: "Application", category: "menuItem", toolTipHTML: scalaSourceCodeHTML, expand: true,},
    {key: "Package", desc: "Package", group: "Application", category: "menuItem",expand: false, expand: true},
    {key: "File", desc: "File(.scala)", group: "Application", isGroup: true, category: "tree",expand: false},
    {key: "Code", desc: "Code", group: "File", category: "simpleEdit"},

    {key: "Bytecode", desc: "target", group: "Application", category: "menuItem", toolTipHTML: scalaSourceCodeHTML, expand: true,},
    {key: "Package1", desc: "Package", group: "Application", category: "menuItem",expand: false, expand: true},

    {key: "Scala", desc: "Scala", isGroup: true, group: "Storage", category: "grid3", img: "img/scala.svg", toolTipHTML: scalaHTML, expand: true},

    {key: "Scala-Syntax", desc: "Syntax", group: "Scala", isGroup:true, category: "tree", toolTipHTML: scalaSyntaxHTML},
    {key: "Scala-Literals", desc: "Literals", group:"Scala-Syntax", category: "simpleText100", toolTipHTML: scalaLiteralHTML},
    {key: "Scala-Identifiers", desc: "Identifiers", group:"Scala-Syntax", category: "simpleText100", toolTipHTML: scalaIdentifiersHTML},
    {key: "Scala-Datatypes", desc: "Datatypes", group:"Scala-Syntax", category: "simpleText100", toolTipHTML: scalaDataTypeHTML},
    {key: "Scala-Statements", desc: "Expressions", group:"Scala-Syntax", category: "simpleText100", toolTipHTML: scalaStatementHTML},
    {key: "Scala-Conditions", desc: "Conditions", group:"Scala-Syntax", category: "simpleText100", toolTipHTML: scalaFlowControlsHTML},
    {key: "Scala-Loops", desc: "Loops", group:"Scala-Syntax", category: "simpleText100", toolTipHTML: scalaLoopsHTML},
    {key: "Scala-Exceptions", desc: "Exceptions", group:"Scala-Syntax", category: "simpleText100", toolTipHTML: scalaExceptionsHTML},
    {key: "Scala-Generics", desc: "Generics", group:"Scala-Syntax", category: "simpleText100", toolTipHTML: scalaGenericsHTML},

    {key: "Domain-Modeling", desc: "Domain Modeling", group: "Scala-Syntax", isGroup: true, category: "tree", toolTipHTML: domainModelingHTML, expand: false},
    {key: "Class", desc: "class", group: "Domain-Modeling", category: "simpleText100", toolTipHTML: classHTML},
    {key: "Object", desc: "object", group: "Domain-Modeling", category: "simpleText100", toolTipHTML: objectHTML},
    {key: "Traits", desc: "trait", group: "Domain-Modeling", category: "simpleText100", toolTipHTML: scalaTraitsHTML},
    {key: "Case-Class", desc: "case class", group: "Domain-Modeling", category: "simpleText100", toolTipHTML: caseClassesHTML},

    {key: "Scala-Semantics", desc: "Semantics", isGroup: true, group: "Scala", expand: false, category: "grid3"},

    {key: "Scala-OOPS", desc: "OOPS", isGroup: true, group: "Scala-Semantics", category: "tree", expand: true},
    {key: "Scala-OOPS-Encapsulation", desc: "Encapsulation", group:"Scala-OOPS", category: "simpleTextLeft150", toolTipHTML: scalaEncapsulationHTML},
    {key: "Scala-OOPS-Abstraction", desc: "Abstraction", group:"Scala-OOPS", category: "simpleTextLeft150", toolTipHTML: scalaAbstractionHTML},
    {key: "Scala-OOPS-Inheritance", desc: "Inheritance", group:"Scala-OOPS", category: "simpleTextLeft150", toolTipHTML: scalaInheritanceHTML},
    {key: "Scala-OOPS-Polymorphism", desc: "Polymorphism", group:"Scala-OOPS", category: "simpleTextLeft150", toolTipHTML: scalaPolymorphismHTML},


    {key: "Scala-Design-Patterns", desc: "Design Patterns", isGroup: true, group: "Scala-Semantics", category: "tree", expand: false},

    {key: "Scala-DP-Creational", desc: "Creational", isGroup: true, group: "Scala-Design-Patterns", category: "tree", expand: false},
    {key: "Scala-DP-Singleton", desc: "Singleton", group:"Scala-DP-Creational", category: "simpleTextLeft150", toolTipHTML: scalaDPSingletonHTML},
    {key: "Scala-DP-Factory", desc: "Factory", group:"Scala-DP-Creational", category: "simpleTextLeft150", toolTipHTML: scalaDPFactoryHTML},
    {key: "Scala-DP-AbstractFactory", desc: "Abstract Factory", group:"Scala-DP-Creational", category: "simpleTextLeft150", toolTipHTML: scalaDPAbstractFactoryHTML},
    {key: "Scala-DP-Builder", desc: "Builder", group:"Scala-DP-Creational", category: "simpleTextLeft150", toolTipHTML: scalaDPBuilderHTML},
    {key: "Scala-DP-Prototype", desc: "Prototype", group:"Scala-DP-Creational", category: "simpleTextLeft150", toolTipHTML: scalaDPPrototypeHTML},

    {key: "Scala-DP-Structural", desc: "Structural", isGroup: true, group: "Scala-Design-Patterns", category: "tree", expand: false},
    {key: "Scala-DP-Adapter", desc: "Adapter", group:"Scala-DP-Structural", category: "simpleTextLeft150", toolTipHTML: scalaDPAdapterHTML},
    {key: "Scala-DP-Composite", desc: "Composite", group:"Scala-DP-Structural", category: "simpleTextLeft150", toolTipHTML: scalaDPCompositeHTML},
    {key: "Scala-DP-Proxy", desc: "Proxy", group:"Scala-DP-Structural", category: "simpleTextLeft150", toolTipHTML: scalaDPProxyHTML},
    {key: "Scala-DP-FlyWeight", desc: "FlyWeight", group:"Scala-DP-Structural", category: "simpleTextLeft150", toolTipHTML: scalaDPFlyWeightHTML},
    {key: "Scala-DP-Facade", desc: "Facade", group:"Scala-DP-Structural", category: "simpleTextLeft150", toolTipHTML: scalaDPFacadeHTML},
    {key: "Scala-DP-Decorator", desc: "Decorator", group:"Scala-DP-Structural", category: "simpleTextLeft150", toolTipHTML: scalaDPDecoratorHTML},

    {key: "Scala-DP-Behavioral", desc: "Behavioral", isGroup: true, group: "Scala-Design-Patterns", category: "tree", expand: false},
    {key: "Scala-DP-Strategy", desc: "Strategy", group:"Scala-DP-Behavioral", category: "simpleTextLeft150", toolTipHTML: scalaDPStrategyHTML},

    {key: "Scala-Solid", desc: "Solid Principles", isGroup: true, group: "Scala-Semantics", category: "tree", expand: false},
    {key: "Scala-SP-singleResp", desc: "Single Responsibility", group:"Scala-Solid", category: "simpleTextLeft150", toolTipHTML: scalaSPSingleRespHTML},
    {key: "Scala-SP-OpenClose", desc: "Open Close", group:"Scala-Solid", category: "simpleTextLeft150", toolTipHTML: scalaSPOpenCloseHTML},
    {key: "Scala-SP-LiskovSubs", desc: "Liskov Substitution", group:"Scala-Solid", category: "simpleTextLeft150", toolTipHTML: scalaSPLiskovSubHTML},
    {key: "Scala-SP-Interface-Segregation", desc: "Interface Segregation", group:"Scala-Solid", category: "simpleTextLeft150", toolTipHTML: scalaSPInterfaceSegregationHTML},
    {key: "Scala-SP-DI", desc: "Dependency Inversion", group:"Scala-Solid", category: "simpleTextLeft150", toolTipHTML: scalaSPDIHTML},

    {key: "JDK", desc: "JDK", isGroup: true, group: "Scala", category: "tree", toolTipHTML: jdkHTML, expand: false},
    {key: "Scala Compiler", desc: "Compiler", category: "simple", group: "JDK", img: "img/tools.svg"},
    {key: "Scala API", desc: "API", category: "tree", isGroup: true, group: "JDK",expand: false},
    {key: "Scala VM", desc: "Scala VM", isGroup: true, expand: false, category: "tree", group: "JDK"},

    {key: "Scala Class Loader", desc: "Class Loader", isGroup: true, expand: true, category: "tree", group: "Scala VM"},
    {key: "Scala Loading", desc: "Loading", isGroup: true, expand: false, category: "tree90", group: "Scala Class Loader"},
    {key: "Scala Bootstrap Loader", desc: "Bootstrap Loader", category: "simpleText150", group: "Scala Loading", width: 120},
    {key: "Scala Extension Loader", desc: "Extension Loader", category: "simpleText150", group: "Scala Loading", width: 120},
    {key: "Scala Application Loader", desc: "Application Loader", category: "simpleText150", group: "Scala Loading", width: 120},

    {key: "Scala Linking", desc: "Linking", isGroup: true, expand: false, category: "tree90", group: "Scala Class Loader"},
    {key: "Scala Verify", desc: "Verify", category: "simpleText",  group: "Scala Linking"},
    {key: "Scala Prepare", desc: "Prepare", category: "simpleText",  group: "Scala Linking"},
    {key: "Scala Resolve", desc: "Resolve", category: "simpleText",  group: "Scala Linking"},

    {key: "Scala Initialization", desc: "Initialization", category: "simple", group: "Scala Class Loader"},

    {key: "Execution Engine", desc: "Exec Engine", isGroup: true, expand: true, category: "grid3", group: "Scala VM"},
    {key: "Interpreter", desc: "Interpreter", category: "simple",  group: "Execution Engine"},
    {key: "JIT Compiler", desc: "JIT Compiler", category: "simple",  group: "Execution Engine"},
    {key: "Garbage collector", desc: "GC", category: "simple",  group: "Execution Engine"},


    {key: "Scala-String", desc: "String", group:"Scala API", category: "simpleTextLeft150", toolTipHTML: scalaStringHTML},
    {key: "Scala-System", desc: "System", group:"Scala API", category: "simpleTextLeft150", toolTipHTML: scalaStringHTML},
    {key: "Scala-Math", desc: "Math", group:"Scala API", category: "simpleTextLeft150", toolTipHTML: scalaStringHTML},
    {key: "Scala-DateTime", desc: "DateTime", group:"Scala API", category: "simpleTextLeft150", toolTipHTML: scalaStringHTML},

    {key: "Scala-WrapperClass", desc: "Wrapper Classes", group:"Scala API", category: "simpleTextLeft150", toolTipHTML: scalaWrapperClassHTML},
    {key: "Scala-Collections", desc: "Collections", group:"Scala API", category: "simpleTextLeft150", toolTipHTML: scalaCollectionsHTML},
    {key: "Scala-Iterators", desc: "Iterators", group:"Scala API", category: "simpleTextLeft150", toolTipHTML: scalaIteratorsHTML},
    {key: "Scala-Spliterators", desc: "Spliterators", group:"Scala API", category: "simpleTextLeft150", toolTipHTML: scalaSpliteratorsHTML},
    {key: "Scala-Streams", desc: "Streams", group:"Scala API", category: "simpleTextLeft150", toolTipHTML: scalaStreamsHTML},



//    {key: "Execution", desc: "Execution", category: "simple", group: "System", img: "img/tools.svg", toolTipHTML: executionHTML},


    {key: "Meta", desc: "Meta", category: "grid3", group: "Memory", isGroup: true,},
    {key: "class1", desc: "cls1", category: "box", group: "Meta", fill: "#3A5262"},
    {key: "class2", desc: "cls2", category: "box", group: "Meta", fill: "#3A5262"},

    {key: "Heap", desc: "Heap", category: "grid3", group: "Memory", isGroup: true,},
    {key: "class1", desc: "cls1", category: "object", group: "Heap", fill: "Transparent"},
    {key: "class2", desc: "cls2", category: "object", group: "Heap", fill: "Transparent"},
    {key: "object1", desc: "obj1", category: "object", group: "Heap", fill: "Transparent"},
    {key: "object1", desc: "obj1", category: "object", group: "Heap", fill: "Transparent"},
    {key: "object2", desc: "obj2", category: "object", group: "Heap", fill: "Transparent"},
    {key: "object2", desc: "obj2", category: "object", group: "Heap", fill: "Transparent"},

    {key: "Stack", desc: "Stack", category: "grid3", group: "Memory", isGroup: true,},
    {key: "thread1", desc: "thread1", category: "stack", group: "Stack", items: ["thread1" ,"", "ref1", "var1", "method1"]},




];

let scalaLinkDataArray = [

    {from:"Storage", to: "CPU", category: "simple"},
//    {from:"Execution", to: "CPU", category: "simple"},
    {from:"Memory", to: "Processor", category: "simple"},
    {from:"CPU", to: "IO", category: "simple"},
    {from:"About Me", to: "Features", category: "simple"},
    {from:"Title", to: "About Me", category: "simple"},
    {from:"Features", to: "eCommerce", category: "simple"},
    {from:"Sourcecode", to:"Package", category: "menuLink"},
    {from:"Package", to:"File", category: "menuLink"},

    {from:"Bytecode", to:"Package1", category: "menuLink"},
    {from:"Package1", to:"File1", category: "menuLink"},

    // {from:"Scala-Statements", to:"Scala-Literals", category: "menuLink"},
    // {from:"Scala-Statements", to:"Scala-Identifiers", category: "menuLink"},
    // {from:"Scala-Statements", to:"Scala-Datatypes", category: "menuLink"},


    { from: "Add1", fromPort: "Out", to: "Subtract1", toPort: "A" },


    {from:"Scala-Install", to: "Scala-Syntax", category: "simple"},
    {from:"Scala-Input", to: "Scala-Process", category: "simple"},
    {from:"Scala-Process", to: "Scala-Output", category: "simple"},
    {from:"Initialization", to: "Process", category: "simple"},
//    {from:"Scala-Semantics", to: "Scala-Solid", category: "simple"},
{key: "scToCompiler", from: "Scala Source Code", to: "Scala Compiler", category: "simple"},
    {key: "compilerToBC", from: "Scala Compiler", to: "Scala Byte Code", category: "simple"},
    {key: "bcTojre", from: "Scala Byte Code", to: "Scala RE", category: "simple"},
    {key: "jlTolinking", from: "Scala Loading", to: "Scala Linking", category: "simple"},
    {key: "linkingToInit", from: "Scala Linking", to: "Scala Initialization", category: "simple"},
    {key: "bootstrapToextension", from: "Scala Bootstrap Loader", to: "Scala Extension Loader", category: "simple"},
    {key: "extensionToApplication", from: "Scala Extension Loader", to: "Scala Application Loader", category: "simple"},
    {key: "verifyToPrepare", from: "Scala Verify", to: "Scala Prepare", category: "simple"},
    {key: "prepareToResolve", from: "Scala Prepare", to: "Scala Resolve", category: "simple"},
];
let nodeDataArray = [];
let linkDataArray = [];
nodeDataArray = nodeDataArray.concat(scalaNodeDataArray);
linkDataArray = linkDataArray.concat(scalaLinkDataArray);