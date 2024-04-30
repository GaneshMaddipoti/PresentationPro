const stackTemplate =
  GO(go.Node, "Auto",
    GO(go.Shape, "Rectangle",
      { fill: "Transparent" }),
    GO(go.Panel, "Vertical",
      new go.Binding("itemArray", "items"),
      {
        itemTemplate:
          GO(go.Panel, "Auto",
            { margin: 0 },
            GO(go.Shape, "Rectangle",
              { fill: "Transparent", width: 100, stroke: "WhiteSmoke" }),
            GO(go.TextBlock, new go.Binding("text", ""),
              { margin: 0, stroke: "#cccccc" })
          )  // end of itemTemplate
      })
  );

const objectTemplate =
  GO(go.Node, "Auto",
    GO(go.Shape, "Ellipse", {stroke: "WhiteSmoke"}, new go.Binding("fill", "fill")),
    GO(go.TextBlock,
      { margin: 5,  stroke: "#cccccc" },
      new go.Binding("text", "desc"))
  );


const simpleTemplate = GO(go.Node, "Auto", {selectionAdorned: false},
    {isShadowed: true, shadowBlur: 1, shadowColor: colors.blackShadow,
           shadowOffset: new go.Point(5, 5), fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides},
    GO(go.Shape, "RoundedRectangle",
                {height: 30}, new go.Binding("height", "height"),
                {width: 100}, new go.Binding("width", "width"),
                {fill: colors.bgColorLight, stroke: "WhiteSmoke"}),
    GO(go.TextBlock, textStyle150(), new go.Binding("text", "desc")),
        { click: (e, obj) => showDetails(e, obj) }
);

const simpleTextTemplate =
    GO(go.Node, "Auto",{ selectionAdorned: false },{ fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides, isShadowed: false, shadowOffset: new go.Point(3, 3) },
        GO(go.Shape, {height: 15}, new go.Binding("height", "height"), new go.Binding("width", "width"),
            new go.Binding("figure", "shape"), { strokeWidth: 0, stroke: "#555", fill:"Transparent" }, new go.Binding("stroke", "color")),
        GO(go.Panel, "Horizontal", // the header
            {padding: new go.Margin(0, 10)},
            GO(go.Picture,{ maxSize: new go.Size(20, 20) }, new go.Binding("source", "img")),
            GO(go.TextBlock, textStyleLeft150(), new go.Binding("text", "desc"),),
        ),
        { click: (e, obj) => showDetails(e, obj) }
    );

const tokenTemplate = GO(go.Part, "Auto",
    { locationSpot: go.Spot.Center, layerName: 'Foreground' },
    GO(go.Shape, 'Rectangle',
    { width: 20, height: 20, fill: '#eee', stroke: "WhiteSmoke", strokeWidth: 1  },
    new go.Binding("opacity", "opacity")),
)
    
const simpleLinkTemplate =
    GO(go.Link, {routing: go.Routing.AvoidsNodes,
                       curve: go.Curve.JumpOver,
                       corner: 5,
                       toShortLength: 4},
        GO(go.Shape, { strokeWidth: 1, stroke: "WhiteSmoke" }),
        GO(go.Shape, { toArrow: "Standard" }, {stroke: "WhiteSmoke", fill: "WhiteSmoke"}),
    );    

const grid2Template = GO(go.Group, "Auto", { selectionAdorned: false },
    { layout: GO(go.GridLayout, {
        wrappingColumn: 2, alignment: go.GridLayout.Position,cellSize: new go.Size(1, 1), spacing: new go.Size(5,5)
    }), isShadowed: true, shadowOffset: new go.Point(5, 5), shadowBlur: 1, shadowColor: colors.blackShadow,
    fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides },
    GO(go.Shape, "RoundedRectangle",
        { parameter1: 5, stroke: "WhiteSmoke", fill: colors.bgColorLight}),
    GO(go.Panel, "Vertical",  // position header above the subgraph
        { defaultAlignment: go.Spot.Left },
        GO(go.Panel, "Horizontal",  // the header
            { defaultAlignment: go.Spot.Left, padding: new go.Margin(0, 5)},
            GO(go.Picture,{ maxSize: new go.Size(20, 20) }, new go.Binding("source", "img")),
            GO(go.TextBlock, textStyle(), new go.Binding("text", "desc"),),
            GO("SubGraphExpanderButton", subGraphExpanderButtonStyle()),
            { click: (e, obj) => showDetails(e, obj) }
        ),
        GO(go.Placeholder,     // represents area for all member parts
            { padding: new go.Margin(5, 5), background: "Transparent" })
    ), new go.Binding("isSubGraphExpanded", "expand"),
);

const grid3Template = GO(go.Group, "Auto", { selectionAdorned: false },
    { layout: GO(go.GridLayout, {
        wrappingColumn: 3, alignment: go.GridLayout.Position,cellSize: new go.Size(1, 1), spacing: new go.Size(5,5)
    }), isShadowed: true, shadowOffset: new go.Point(5, 5), shadowBlur: 1, shadowColor: colors.blackShadow,
    fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides },
    GO(go.Shape, "RoundedRectangle",
        { parameter1: 5, stroke: "WhiteSmoke", fill: colors.bgColorLight}),
    GO(go.Panel, "Vertical",  // position header above the subgraph
        { defaultAlignment: go.Spot.Left },
        GO(go.Panel, "Horizontal",  // the header
            { defaultAlignment: go.Spot.Left, padding: new go.Margin(0, 5)},
            GO(go.Picture,{ maxSize: new go.Size(20, 20) }, new go.Binding("source", "img")),
            GO(go.TextBlock, textStyle(), new go.Binding("text", "desc"),),
            GO("SubGraphExpanderButton", subGraphExpanderButtonStyle()),
            { click: (e, obj) => showDetails(e, obj) }
        ),
        GO(go.Placeholder,     // represents area for all member parts
            { padding: new go.Margin(5,5), background: "Transparent" })
    ), new go.Binding("isSubGraphExpanded", "expand"),
);

const treeTemplate = GO(go.Group, "Auto", { selectionAdorned: false },
    { layout: GO(go.TreeLayout,
    { angle: 0, nodeSpacing: 30, layerSpacing: 50 }),
    isShadowed: true, shadowOffset: new go.Point(5, 5), shadowBlur: 1, shadowColor: colors.blackShadow,
            fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides},
    GO(go.Shape, "RoundedRectangle", // surrounds everything
        { parameter1: 5, stroke: "WhiteSmoke", fill: colors.bgColorLight}),
    GO(go.Panel, "Vertical",  // position header above the subgraph
        { defaultAlignment: go.Spot.Left },
        GO(go.Panel, "Horizontal",  // the header
            { defaultAlignment: go.Spot.Right, padding: new go.Margin(0, 5) },
            GO(go.Picture,{ maxSize: new go.Size(20, 20) }, new go.Binding("source", "img")),
            GO(go.TextBlock, textStyle(), new go.Binding("text", "desc"),),
            GO("SubGraphExpanderButton", subGraphExpanderButtonStyle()),
             { click: (e, obj) => showDetails(e, obj) }
        ),
        GO(go.Placeholder,     // represents area for all member parts
            { padding: new go.Margin(5, 5), background: "Transparent" }),
    ), new go.Binding("isSubGraphExpanded", "expand"),
);

const tree90Template = GO(go.Group, "Auto", { selectionAdorned: false },
    { layout: GO(go.TreeLayout,
    { angle: 90, nodeSpacing: 30, layerSpacing: 50 }),
    isShadowed: true, shadowOffset: new go.Point(5, 5), shadowBlur: 1, shadowColor: colors.blackShadow,
            fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides},
    GO(go.Shape, "RoundedRectangle", // surrounds everything
        { parameter1: 5, stroke: "WhiteSmoke", fill: colors.bgColorLight}),
    GO(go.Panel, "Vertical",  // position header above the subgraph
        { defaultAlignment: go.Spot.Left },
        GO(go.Panel, "Horizontal",  // the header
            { defaultAlignment: go.Spot.Right, padding: new go.Margin(0, 5) },
            GO(go.Picture,{ maxSize: new go.Size(20, 20) }, new go.Binding("source", "img")),
            GO(go.TextBlock, textStyle(), new go.Binding("text", "key"),),
            GO("SubGraphExpanderButton", subGraphExpanderButtonStyle()),
             { click: (e, obj) => showDetails(e, obj) }
        ),
        GO(go.Placeholder,     // represents area for all member parts
            { padding: new go.Margin(5, 5), background: "Transparent" }),
    ), new go.Binding("isSubGraphExpanded", "expand"),
);

const tree250Template = GO(go.Group, "Auto", { selectionAdorned: false }, {layout: GO(go.TreeLayout,
            { angle: 0, nodeSpacing: 30, layerSpacing: 50 }), isShadowed: false, shadowOffset: new go.Point(3, 3)},
    GO(go.Shape, "RoundedRectangle", // surrounds everything
        { parameter1: 0, strokeWidth: 0, stroke: "WhiteSmoke", fill: "Transparent", strokeDashArray: [4, 2] }, new go.Binding("stroke", "color")),
    GO(go.Panel, "Vertical",  // position header above the subgraph
        { defaultAlignment: go.Spot.Left },
        GO(go.Panel, "Horizontal",  // the header
            { defaultAlignment: go.Spot.Right, padding: new go.Margin(0, 10) }, {padding: new go.Margin(0, 10)},
            GO(go.Picture,{ maxSize: new go.Size(20, 20) }, new go.Binding("source", "img")),
            GO(go.TextBlock, textStyle150(), new go.Binding("text", "desc"),),
            GO("SubGraphExpanderButton", subGraphExpanderButtonStyle()),
             { click: (e, obj) => showDetails(e, obj) }
        ),
        GO(go.Placeholder,     // represents area for all member parts
            { padding: 10, background: "Transparent" }),
    ), new go.Binding("isSubGraphExpanded", "expand"),
);