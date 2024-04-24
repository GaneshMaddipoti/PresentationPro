const nodeTemplateMap = new go.Map();
nodeTemplateMap.add("simple", simpleTemplate);
nodeTemplateMap.add("token", tokenTemplate);
diagram.nodeTemplateMap = nodeTemplateMap;

const linkTemplateMap = new go.Map();
linkTemplateMap.add("simple", simpleLinkTemplate);
diagram.linkTemplateMap = linkTemplateMap;

const groupTemplateMap = new go.Map();
groupTemplateMap.add("grid", gridTemplate);
groupTemplateMap.add("tree", treeTemplate);
groupTemplateMap.add("tree90", tree90Template);
diagram.groupTemplateMap = groupTemplateMap;

//const nodeDataArray = [
//      { key: "System", category: "tree", isGroup: true, expand: true},
//
//      { key: "Alpha", category: "simple", group: "System"},
//      { key: "Gama", category: "simple", group: "System"},
//      { key: "Beta", category: "tree", group: "System", isGroup: true, expand: true},
//    ];
//    const linkDataArray = [
//      { from: "Alpha", to: "Beta", category: "simple",  },
//      { from: "Gama", to: "Beta", category: "simple",  },
//    ];
diagram.animationManager.initialAnimationStyle = go.AnimationStyle.AnimateLocations;
diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);

function addNode() {
    diagram.model.commit(m => {
        const newNodeData = { key: "NewNode", category: "simple", group: "Beta" };
        m.addNodeData(newNodeData);
        let newNode = diagram.findNodeForData(newNodeData);
        let betaNode = diagram.findNodeForKey("Beta");
        if (newNode) newNode.location = betaNode.location;
    }, 'add node');
}

let aToken;
let aFrac;
let aFrom;
let aTo;

function addToken() {
    diagram.model.commit(m => {
        const newNodeData = { category: "token", key: aToken, visible: false};
        m.addNodeData(newNodeData);
        let newPart = diagram.findPartForData(newNodeData);
        // set location so new node doesn't animate in from top left
        if (newPart) newPart.location = diagram.findNodeForKey(aFrom).location;
    }, 'add token');
}

function removeToken() {
    diagram.model.commit(m => {
        m.removeNodeData(m.findNodeDataForKey(aToken));
    }, 'remove token');
}

function animateToken(token, from, to) {
    aToken = token;
    aFrom = from;
    aTo = to;
    aFrac = 0.0;
    addToken();
    updateToken();
}

function updateToken() {
    let part1 = diagram.findPartForKey(aToken);
    var link = diagram.findNodeForKey(aFrom).findLinksTo(diagram.findNodeForKey(aTo)).first();
    if (link !== null) {
        part1.location = link.path.getDocumentPoint(link.path.geometry.getPointAlongPath(aFrac, new go.Point()));
    }
    if (aFrac < 1.0) {
        part1.data.frac = aFrac = aFrac + 0.01;
        window.requestAnimationFrame(updateToken);
    } else {
        part1.visible = false;
        window.requestAnimationFrame(removeToken);
    }
}

function showDetails(e, obj) {
    const node = obj.part;
    if(node) {
        const diagram = node.diagram;
        let details = node.data;
        showToolTip(node, diagram, null);
    }
}

function showToolTip(obj, diagram, tool) {
    var pt = diagram.lastInput.viewPoint;
    let toolTipDIV = document.getElementById("toolTipDIV");
    let closeButtonHTML = '<button id="tooltipClose" onclick="hideToolTip()">X</button>';
    let footerHTML = '<p class="tooltipFooter">Footer</p>';
    if(toolTipDIV && obj.data.toolTipHTML) {
//        toolTipDIV.style.left = (window.innerWidth - 600)/2 + "px";
//        toolTipDIV.style.top = (window.innerHeight - 600)/2 + "px";
        toolTipDIV.innerHTML = closeButtonHTML +
            "<div class='tooltipBody'>" + obj.data.toolTipHTML + "</div>";
        toolTipDIV.style.opacity = "1";
        toolTipDIV.style.display = "block";
        toolTipFlag = true;
    }
}

function showToolTip1(toolTipHTML) {

    let toolTipDIV = document.getElementById("toolTipDIV1");
    let closeButtonHTML = '<button id="tooltipClose" onclick="hideToolTip1()">X</button>';
    let footerHTML = '<p class="tooltipFooter">Footer</p>';
    if(toolTipDIV && toolTipHTML) {
        toolTipDIV.innerHTML = closeButtonHTML +
            "<div class='tooltipBody'>" + toolTipHTML + "</div>";
        toolTipDIV.style.opacity = "1";
        toolTipDIV.style.display = "block";
        toolTip1Flag = true;
    }
}

function hideToolTip() {
    var toolTipDIV = document.getElementById('toolTipDIV');
    if(toolTipDIV) {
        toolTipDIV.style.opacity = "0";
        toolTipDIV.style.display = "none";
        toolTipFlag = false;
    }
}

function hideToolTip1() {
    var toolTipDIV = document.getElementById('toolTipDIV1');
    if(toolTipDIV) {
        toolTipDIV.style.opacity = "0";
        toolTipDIV.style.display = "none";
        toolTip1Flag = false;
    }
}

var myToolTip = GO(go.HTMLInfo, {
    show: showToolTip,
});

let toolTipFlag = false;
let toolTip1Flag = false;

//Keypress
document.onkeyup = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        if(toolTip1Flag) {
            hideToolTip1();
            return;
        }
        if(toolTipFlag) {
            hideToolTip();
        }
    }
};


