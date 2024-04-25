let javaNodeDataArray = [

//    {key: "Presentation", desc: "Present", isGroup: true, category: "tree", img: "img/system.svg", expand: true},
//
//    {key: "Title", desc: "Title", category: "simple", group: "Presentation", toolTipHTML: titleHTML},
//    {key: "About Me", desc: "About Me", category: "simple", img: "img/PP.jpg", group: "Presentation", toolTipHTML: aboutMeHTML},
//    {key: "Features", desc: "Content", category: "simple", group: "Presentation", toolTipHTML: featuresHTML},
//

    {key: "System", desc: "System", group: "Presentation", isGroup: true, category: "tree", img: "img/system.svg", expand: true},

    {key: "Storage", desc: "Storage", isGroup: true, group: "System", category: "tree", img: "img/drive.svg", expand: true},

    {key: "CPU", desc: "CPU", isGroup: true, group: "System", category: "tree90", img: "img/pc.svg", expand: true},
    {key: "IO", desc: "Input/Output", group: "System", category: "simple", img: "img/terminal.svg", expand: false},

    {key: "Memory", desc: "Memory", isGroup: true, group: "CPU", category: "grid3", img: "img/memory.svg", expand: true},
    {key: "Processor", desc: "Processor", group: "CPU", category: "simple", img: "img/processor.svg", expand: false},


    {key: "Application", desc: "Application", isGroup: true, group: "Storage", category: "tree", toolTipHTML: javaProgrammingHTML, expand: true, img: "img/application.svg",},

    {key: "Sourcecode", desc: "source", group: "Application", isGroup: true, category: "tree", toolTipHTML: javaSourceCodeHTML, expand: false, img: "img/sourceFolder.svg",},
    {key: "Package", desc: "Package", group: "Sourcecode", isGroup: true, category: "tree",expand: false, img: "img/package.svg",},
    {key: "File", desc: "File", group: "Package", isGroup: true, category: "grid2",expand: false, img: "img/byteFile.svg",},

    {key: "Class", desc: "class", group: "File", category: "simple", toolTipHTML: javaClassHTML,},
//    {key: "Property", desc: " String name;", group: "Class", category: "simpleText", toolTipHTML: javaPropertyHTML, img: "img/private.svg"},
//    {key: "Property1", desc: " float price;", group: "Class", category: "simpleText", toolTipHTML: javaPropertyHTML, img: "img/private.svg"},
//    {key: "Method", desc: " double calculateTotal(flat tax)", group: "Class", isGroup: true, category: "tree250", toolTipHTML: javaMethodHTML, img: "img/public.svg", expand: true},
//
//    {key: "Statement1", desc: "Integer amount = 195;", group: "Method", category: "simpleText", toolTipHTML: javaStatementHTML, img: "img/null.svg"},
//    {key: "Statement2", desc: "if(rate !=0) { //stmts; }", group: "Method", category: "simpleText", toolTipHTML: javaFlowControlsHTML, img: "img/null.svg"},
//    {key: "Statement3", desc: "for(int i=0; i<10; i++) { //stmts; }", group: "Method", category: "simpleText", toolTipHTML: javaLoopsHTML, img: "img/null.svg"},
//    {key: "Statement4", desc: "try{ //stmts; } catch(Exceptin e) {}", group: "Method", category: "simpleText", toolTipHTML: javaExceptionsHTML, img: "img/null.svg"},

    {key: "Interface", desc: "interface", group: "File", category: "simple", toolTipHTML: javaInterfaceHTML, expand: false, img: "img/interface.svg",},
    {key: "Enum", desc: "enum", group: "File", category: "simple", expand: false,},
    {key: "Record", desc: "record", group: "File", category: "simple", expand: false,},

    {key: "Bytecode", desc: "Bytecode", group: "Application", category: "simple", toolTipHTML: javaProgrammingHTML, expand: false, img: "img/byteFile.svg",},
    {key: "Java", desc: "Java", isGroup: true, group: "Storage", category: "grid3", img: "img/java.svg", toolTipHTML: javaHTML, expand: false},
    {key: "JDK", desc: "JDK", isGroup: true, group: "Java", category: "tree", toolTipHTML: jdkHTML, expand: false},

    {key: "Java-WrapperClass", desc: "Wrapper Classes", group:"Java API", category: "simple", toolTipHTML: javaWrapperClassHTML},
    {key: "Java-Collections", desc: "Collections", group:"Java API", category: "simple", toolTipHTML: javaCollectionsHTML},
    {key: "Java-Generics", desc: "Generics", group:"Java-Syntax", category: "simple", toolTipHTML: javaGenericsHTML},
    {key: "Java-Iterators", desc: "Iterators", group:"Java API", category: "simple", toolTipHTML: javaIteratorsHTML},
    {key: "Java-Spliterators", desc: "Spliterators", group:"Java API", category: "simple", toolTipHTML: javaSpliteratorsHTML},
    {key: "Java-Streams", desc: "Streams", group:"Java API", category: "simple", toolTipHTML: javaStreamsHTML},

    {key: "Java-Syntax", desc: "Syntax", isGroup: true, group: "Java", expand: false, category: "grid3"},
    {key: "Java-Semantics", desc: "Semantics", isGroup: true, group: "Java", expand: false, category: "grid3"},

    {key: "Java-Design-Patterns", desc: "Design Patterns", isGroup: true, group: "Java-Semantics", category: "tree", expand: true},

    {key: "Java-DP-Creational", desc: "Creational", isGroup: true, group: "Java-Design-Patterns", category: "grid3", expand: true},
    {key: "Java-DP-Singleton", desc: "Singleton", group:"Java-DP-Creational", category: "simple", toolTipHTML: javaDPSingletonHTML},
    {key: "Java-DP-Factory", desc: "Factory", group:"Java-DP-Creational", category: "simple", toolTipHTML: javaDPFactoryHTML},
    {key: "Java-DP-AbstractFactory", desc: "Abstract Factory", group:"Java-DP-Creational", category: "simple", toolTipHTML: javaDPAbstractFactoryHTML},
    {key: "Java-DP-Builder", desc: "Builder", group:"Java-DP-Creational", category: "simple", toolTipHTML: javaDPBuilderHTML},
    {key: "Java-DP-Prototype", desc: "Prototype", group:"Java-DP-Creational", category: "simple", toolTipHTML: javaDPPrototypeHTML},

    {key: "Java-DP-Structural", desc: "Structural", isGroup: true, group: "Java-Design-Patterns", category: "grid3", expand: true},
    {key: "Java-DP-Adapter", desc: "Adapter", group:"Java-DP-Structural", category: "simple", toolTipHTML: javaDPAdapterHTML},
    {key: "Java-DP-Composite", desc: "Composite", group:"Java-DP-Structural", category: "simple", toolTipHTML: javaDPCompositeHTML},
    {key: "Java-DP-Proxy", desc: "Proxy", group:"Java-DP-Structural", category: "simple", toolTipHTML: javaDPProxyHTML},
    {key: "Java-DP-FlyWeight", desc: "FlyWeight", group:"Java-DP-Structural", category: "simple", toolTipHTML: javaDPFlyWeightHTML},
    {key: "Java-DP-Facade", desc: "Facade", group:"Java-DP-Structural", category: "simple", toolTipHTML: javaDPFacadeHTML},
    {key: "Java-DP-Decorator", desc: "Decorator", group:"Java-DP-Structural", category: "simple", toolTipHTML: javaDPDecoratorHTML},

    {key: "Java-DP-Behavioral", desc: "Behavioral", isGroup: true, group: "Java-Design-Patterns", category: "grid3", expand: false},
    {key: "Java-DP-Strategy", desc: "Strategy", group:"Java-DP-Behavioral", category: "simple", toolTipHTML: javaDPStrategyHTML},

    {key: "Java-Solid", desc: "Solid Principles", isGroup: true, group: "Java-Semantics", category: "tree", expand: true},
    {key: "Java-SP-singleResp", desc: "Single Responsibility", group:"Java-Solid", category: "simple", toolTipHTML: javaSPSingleRespHTML},
    {key: "Java-SP-OpenClose", desc: "Open Close", group:"Java-Solid", category: "simple", toolTipHTML: javaSPOpenCloseHTML},
    {key: "Java-SP-LiskovSubs", desc: "Liskov Substitution", group:"Java-Solid", category: "simple", toolTipHTML: javaSPLiskovSubHTML},
    {key: "Java-SP-Interface-Segregation", desc: "Interface Segregation", group:"Java-Solid", category: "simple", toolTipHTML: javaSPInterfaceSegregationHTML},
    {key: "Java-SP-DI", desc: "Dependency Inversion", group:"Java-Solid", category: "simple", toolTipHTML: javaSPDIHTML},

//    {key: "Execution", desc: "Execution", category: "simple", group: "System", img: "img/tools.svg", toolTipHTML: executionHTML},


    {key: "Java Compiler", desc: "Compiler", category: "simple", group: "JDK", img: "img/tools.svg"},
    {key: "Java API", desc: "API", category: "grid3", isGroup: true, group: "JDK", img: "img/plugin.svg", expand: false},

    {key: "Meta", desc: "Meta", category: "grid3", group: "Memory", isGroup: true,},
    {key: "class1", desc: "cls1", category: "object", group: "Meta", fill: "#3A5262"},
    {key: "class2", desc: "cls2", category: "object", group: "Meta", fill: "#3A5262"},

    {key: "Heap", desc: "Heap", category: "grid3", group: "Memory", isGroup: true,},
    {key: "object1", desc: "obj1", category: "object", group: "Heap", fill: "Transparent"},
    {key: "object2", desc: "obj2", category: "object", group: "Heap", fill: "Transparent"},

    {key: "Stack", desc: "Stack", category: "grid3", group: "Memory", isGroup: true,},
    {key: "thread1", desc: "thread1", category: "stack", group: "Stack", items: ["", "ref1", "var1", "method1"]},

    {key: "Java VM", desc: "Java VM", isGroup: true, expand: false, category: "tree", group: "JDK"},

    {key: "Java Class Loader", desc: "Class Loader", isGroup: true, expand: true, category: "tree", group: "Java VM"},
    {key: "Java Loading", desc: "Loading", isGroup: true, expand: false, category: "tree", group: "Java Class Loader"},
    {key: "Java Bootstrap Loader", desc: "Bootstrap Loader", category: "simple", group: "Java Loading"},
    {key: "Java Extension Loader", desc: "Extension Loader", category: "simple", group: "Java Loading"},
    {key: "Java Application Loader", desc: "Application Loader", category: "simple", group: "Java Loading"},

    {key: "Java Linking", desc: "Linking", isGroup: true, expand: false, category: "tree", group: "Java Class Loader"},
    {key: "Java Verify", desc: "Verify", category: "simple",  group: "Java Linking"},
    {key: "Java Prepare", desc: "Prepare", category: "simple",  group: "Java Linking"},
    {key: "Java Resolve", desc: "Resolve", category: "simple",  group: "Java Linking"},

    {key: "Java Initialization", desc: "Initialization", category: "simple", group: "Java Class Loader"},

    {key: "Execution Engine", desc: "Exec Engine", isGroup: true, expand: true, category: "grid3", group: "Java VM"},
    {key: "Interpreter", desc: "Interpreter", category: "simple",  group: "Execution Engine"},
    {key: "JIT Compiler", desc: "JIT Compiler", category: "simple",  group: "Execution Engine"},
    {key: "Garbage collector", desc: "Garbage Collector", category: "simple",  group: "Execution Engine"},


];

let javaLinkDataArray = [

    {from:"Storage", to: "CPU", category: "simple"},
//    {from:"Execution", to: "CPU", category: "simple"},
    {from:"Memory", to: "Processor", category: "simple"},
    {from:"CPU", to: "IO", category: "simple"},
    {from:"About Me", to: "Features", category: "simple"},
    {from:"Title", to: "About Me", category: "simple"},
    {from:"Features", to: "eCommerce", category: "simple"},


    { from: "Add1", fromPort: "Out", to: "Subtract1", toPort: "A" },


    {from:"Java-Install", to: "Java-Syntax", category: "simple"},
    {from:"Java-Input", to: "Java-Process", category: "simple"},
    {from:"Java-Process", to: "Java-Output", category: "simple"},
    {from:"Initialization", to: "Process", category: "simple"},
//    {from:"Java-Semantics", to: "Java-Solid", category: "simple"},
{key: "scToCompiler", from: "Java Source Code", to: "Java Compiler", category: "simple"},
    {key: "compilerToBC", from: "Java Compiler", to: "Java Byte Code", category: "simple"},
    {key: "bcTojre", from: "Java Byte Code", to: "Java RE", category: "simple"},
    {key: "jlTolinking", from: "Java Loading", to: "Java Linking", category: "simple"},
    {key: "linkingToInit", from: "Java Linking", to: "Java Initialization", category: "simple"},
    {key: "bootstrapToextension", from: "Java Bootstrap Loader", to: "Java Extension Loader", category: "simple"},
    {key: "extensionToApplication", from: "Java Extension Loader", to: "Java Application Loader", category: "simple"},
    {key: "verifyToPrepare", from: "Java Verify", to: "Java Prepare", category: "simple"},
    {key: "prepareToResolve", from: "Java Prepare", to: "Java Resolve", category: "simple"},
];
let nodeDataArray = [];
let linkDataArray = [];
nodeDataArray = nodeDataArray.concat(javaNodeDataArray);
linkDataArray = linkDataArray.concat(javaLinkDataArray);