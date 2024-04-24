const simpleTemplate = GO(go.Node, "Auto", {selectionAdorned: false},
    {isShadowed: true, shadowBlur: 1, shadowColor: colors.blackShadow,
           shadowOffset: new go.Point(5, 5), fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides},
    GO(go.Shape, "RoundedRectangle",
                {height: 50}, new go.Binding("height", "height"),
                {width: 150}, new go.Binding("width", "width"),
                {fill: colors.bgColorLight, stroke: "WhiteSmoke"}),
    GO(go.TextBlock, textStyle150(), new go.Binding("text", "key")),
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

const gridTemplate = GO(go.Group, "Auto", { selectionAdorned: false },
    { layout: GO(go.GridLayout, {
        wrappingColumn: 3, alignment: go.GridLayout.Position,cellSize: new go.Size(1, 1), spacing: new go.Size(5,5)
    }), isShadowed: true, shadowOffset: new go.Point(5, 5), shadowBlur: 1, shadowColor: colors.blackShadow,
    fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides },
    GO(go.Shape, "RoundedRectangle",
        { parameter1: 10, stroke: "WhiteSmoke", fill: colors.bgColorLight}),
    GO(go.Panel, "Vertical",  // position header above the subgraph
        { defaultAlignment: go.Spot.Left },
        GO(go.Panel, "Horizontal",  // the header
            { defaultAlignment: go.Spot.Left },{padding: new go.Margin(0, 0)},
            GO(go.Picture,{ maxSize: new go.Size(30, 30) }, new go.Binding("source", "img")),
            GO(go.TextBlock, textStyle(), new go.Binding("text", "key"),),
            GO("SubGraphExpanderButton", subGraphExpanderButtonStyle()),
//            { click: (e, obj) => showDetails(e, obj) }
        ),
        GO(go.Placeholder,     // represents area for all member parts
            { padding: new go.Margin(10, 10), background: "Transparent" })
    ), new go.Binding("isSubGraphExpanded", "expand"),
);

const treeTemplate = GO(go.Group, "Auto", { selectionAdorned: false },
    { layout: GO(go.TreeLayout,
    { angle: 0, nodeSpacing: 30, layerSpacing: 50 }),
    isShadowed: true, shadowOffset: new go.Point(5, 5), shadowBlur: 1, shadowColor: colors.blackShadow,
            fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides},
    GO(go.Shape, "RoundedRectangle", // surrounds everything
        { parameter1: 10, stroke: "WhiteSmoke", fill: colors.bgColorLight}),
    GO(go.Panel, "Vertical",  // position header above the subgraph
        { defaultAlignment: go.Spot.Left },
        GO(go.Panel, "Horizontal",  // the header
            { defaultAlignment: go.Spot.Right },
            GO(go.Picture,{ maxSize: new go.Size(30, 30) }, new go.Binding("source", "img")),
            GO(go.TextBlock, textStyle(), new go.Binding("text", "key"),),
            GO("SubGraphExpanderButton", subGraphExpanderButtonStyle()),
             { click: (e, obj) => showDetails(e, obj) }
        ),
        GO(go.Placeholder,     // represents area for all member parts
            { padding: new go.Margin(10, 10), background: "Transparent" }),
    ), new go.Binding("isSubGraphExpanded", "expand"),
);

const tree90Template = GO(go.Group, "Auto", { selectionAdorned: false },
    { layout: GO(go.TreeLayout,
    { angle: 90, nodeSpacing: 30, layerSpacing: 50 }),
    isShadowed: true, shadowOffset: new go.Point(5, 5), shadowBlur: 1, shadowColor: colors.blackShadow,
            fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides},
    GO(go.Shape, "RoundedRectangle", // surrounds everything
        { parameter1: 10, stroke: "WhiteSmoke", fill: colors.bgColorLight}),
    GO(go.Panel, "Vertical",  // position header above the subgraph
        { defaultAlignment: go.Spot.Left },
        GO(go.Panel, "Horizontal",  // the header
            { defaultAlignment: go.Spot.Right },
            GO(go.Picture,{ maxSize: new go.Size(30, 30) }, new go.Binding("source", "img")),
            GO(go.TextBlock, textStyle(), new go.Binding("text", "key"),),
            GO("SubGraphExpanderButton", subGraphExpanderButtonStyle()),
             { click: (e, obj) => showDetails(e, obj) }
        ),
        GO(go.Placeholder,     // represents area for all member parts
            { padding: new go.Margin(0, 0), background: "Transparent" }),
    ), new go.Binding("isSubGraphExpanded", "expand"),
);