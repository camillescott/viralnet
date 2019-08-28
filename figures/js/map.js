var w = window.innerWidth - 30;
var h = window.innerHeight - 60;
//var w = 800;
//var h = 400;

var linkDistance = Math.min(w, h) / 3;

var colors = d3.scale.ordinal().range(["#79BED9","#A7E4F2","#618C70","#BFB960","#A6A053"]);
var edgeColor = '#36454F';

var dataset = {
  "directed": false,
  "multigraph": false,
  "graph": {},
  "nodes": [
    { "source": "metagenome", 
      "type": "spacer",
      "array": "3300002091:JGI24028J26656_1045539:1",
      "contig": "3300002091:JGI24028J26656_1045539",
      "taxon": "3300002091",
      "id": "3300002091:JGI24028J26656_1045539:1:114"},
    { "type": "virus",
      "vcluster": "vc_24380",
      "habitat": "freshwater", 
      "length": 21802,
      "id": "3300002091_____JGI24028J26656_1000230"},
    { "type": "virus",
      "vcluster": "vc_36133", 
      "habitat": "freshwater", 
      "length": 24597, "id": 
      "3300002092_____JGI24218J26658_1000365"}, 
    { "source": "metagenome",
      "type": "spacer",
      "array": "3300002091:JGI24028J26656_1045539:1", 
      "contig": "3300002091:JGI24028J26656_1045539", 
      "taxon": "3300002091", 
      "id": "3300002091:JGI24028J26656_1045539:1:180"}, 
    { "source": "metagenome", 
      "type": "spacer", 
      "array": "3300002091:JGI24028J26656_1045539:1", 
      "contig": "3300002091:JGI24028J26656_1045539", 
      "taxon": "3300002091", 
      "id": "3300002091:JGI24028J26656_1045539:1:246"},
    { "source": "metagenome", 
      "type": "spacer", 
      "array": "3300025595:Ga0208248_1015095:1", 
      "contig": "3300025595:Ga0208248_1015095", 
      "taxon": "3300025595", 
      "id": "3300025595:Ga0208248_1015095:1:1508"},
    { "source": "metagenome",
      "type": "spacer", 
      "array": "3300002091:JGI24028J26656_1076564:1", 
      "contig": "3300002091:JGI24028J26656_1076564", 
      "taxon": "3300002091", 
      "id": "3300002091:JGI24028J26656_1076564:1:77"}, 
    { "type": "virus",
      "vcluster": "vc_36133", 
      "habitat": "freshwater", 
      "length": 95019, 
      "id": "3300002307_____JGI24890J29729_1000063"}, 
    { "source": "metagenome",
      "type": "spacer", 
      "array": "3300002091:JGI24028J26656_1076564:1", 
      "contig": "3300002091:JGI24028J26656_1076564", 
      "taxon": "3300002091", 
      "id": "3300002091:JGI24028J26656_1076564:1:8"}, 
    { "type": "virus", 
      "vcluster": "vc_24380", 
      "habitat": "freshwater", 
      "length": 102345, 
      "id": "3300002092_____JGI24218J26658_1000071"}, 
    { "source": "metagenome", 
      "type": "spacer", 
      "array": "3300002091:JGI24028J26656_1045539:1", 
      "contig": "3300002091:JGI24028J26656_1045539", 
      "taxon": "3300002091", 
      "id": "3300002091:JGI24028J26656_1045539:1:48"}, 
    { "type": "virus", 
      "vcluster": "vc_36133", 
      "habitat": "freshwater", 
      "length": 80069, 
      "id": "3300002091_____JGI24028J26656_1000043"}, 
    { "source": "metagenome", 
      "type": "spacer", 
      "array": "3300004774:Ga0007794_10057085:1", 
      "contig": "3300004774:Ga0007794_10057085", 
      "taxon": "3300004774", 
      "id": "3300004774:Ga0007794_10057085:1:866"}, 
    { "type": "virus", 
      "vcluster": "vc_24380", 
      "habitat": "freshwater", 
      "length": 7868, 
      "id": "3300002091_____JGI24028J26656_1000870"}, 
    { "type": "virus", "vcluster": 
      "vc_24380", "habitat": 
      "freshwater", "length": 31912, 
      "id": "3300002307_____JGI24890J29729_1000350"}
  ], 
  "links": [ 
    { "s_start": 19999, "s_end": 20042, "source": "3300002091:JGI24028J26656_1045539:1:114", "target": "3300002092_____JGI24218J26658_1000071" }, 
    { "s_start": 11914, "s_end": 11871, "source": "3300002091:JGI24028J26656_1045539:1:114", "target": "3300002307_____JGI24890J29729_1000350" }, 
    { "s_start": 29, "s_end": 72, "source": "3300002091_____JGI24028J26656_1000230", "target": "3300002091:JGI24028J26656_1045539:1:246" }, 
    { "s_start": 80, "s_end": 51, "source": "3300002092_____JGI24218J26658_1000365", "target": "3300002091:JGI24028J26656_1076564:1:8" }, 
    { "s_start": 19933, "s_end": 19976, "source": "3300002091:JGI24028J26656_1045539:1:180", "target": "3300002092_____JGI24218J26658_1000071" }, 
    { "s_start": 11980, "s_end": 11937, "source": "3300002091:JGI24028J26656_1045539:1:180", "target": "3300002307_____JGI24890J29729_1000350" }, 
    { "s_start": 7822, "s_end": 7865, "source": "3300002091:JGI24028J26656_1045539:1:246", "target": "3300002091_____JGI24028J26656_1000870" }, 
    { "s_start": 20131, "s_end": 20174, "source": "3300002091:JGI24028J26656_1045539:1:246", "target": "3300002092_____JGI24218J26658_1000071" }, 
    { "s_start": 12046, "s_end": 12003, "source": "3300002091:JGI24028J26656_1045539:1:246", "target": "3300002307_____JGI24890J29729_1000350" }, 
    { "s_start": 11185, "s_end": 11144, "source": "3300025595:Ga0208248_1015095:1:1508", "target": "3300002092_____JGI24218J26658_1000071" }, 
    { "s_start": 20728, "s_end": 20769, "source": "3300025595:Ga0208248_1015095:1:1508", "target": "3300002307_____JGI24890J29729_1000350" }, 
    { "s_start": 102273, "s_end": 102244, "source": "3300002091:JGI24028J26656_1076564:1:77", "target": "3300002092_____JGI24218J26658_1000071" }, 
    { "s_start": 70433, "s_end": 70404, "source": "3300002091:JGI24028J26656_1076564:1:77", "target": "3300002307_____JGI24890J29729_1000063" }, 
    { "s_start": 70502, "s_end": 70473, "source": "3300002307_____JGI24890J29729_1000063", "target": "3300002091:JGI24028J26656_1076564:1:8" }, 
    { "s_start": 55552, "s_end": 55523, "source": "3300002091:JGI24028J26656_1076564:1:8", "target": "3300002091_____JGI24028J26656_1000043" }, 
    { "s_start": 102342, "s_end": 102313, "source": "3300002091:JGI24028J26656_1076564:1:8", "target": "3300002092_____JGI24218J26658_1000071" }, 
    { "s_start": 20065, "s_end": 20108, "source": "3300002092_____JGI24218J26658_1000071", "target": "3300002091:JGI24028J26656_1045539:1:48" }, 
    { "s_start": 11185, "s_end": 11144, "source": "3300002092_____JGI24218J26658_1000071", "target": "3300004774:Ga0007794_10057085:1:866" }, 
    { "s_start": 11848, "s_end": 11805, "source": "3300002091:JGI24028J26656_1045539:1:48", "target": "3300002307_____JGI24890J29729_1000350" }, 
    { "s_start": 20728, "s_end": 20769, "source": "3300004774:Ga0007794_10057085:1:866", "target": "3300002307_____JGI24890J29729_1000350" }
  ]
};

var svg = d3.select("body").append("svg").attr({"width":w,"height":h});

/*
var svg = d3.select("body")
    .append("div")
    .classed("svg-container", true) //container class to make it responsive
    .append("svg")
    //responsive SVG needs these 2 attributes and no width and height attr
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 1000 1000")
    //class to make it responsive
    .classed("svg-content-responsive", true); 
*/

var force = d3.layout.force()
    .nodes(dataset.nodes)
    .links(dataset.links)
    .size([w,h])
    .linkDistance([linkDistance])
    .charge([-500])
    .theta(0.1)
    .gravity(0.05)
    .start();

var edges = svg.selectAll("line")
    .data(dataset.edges)
    .enter()
    .append("line")
    .attr("id",function(d,i) {return 'edge'+i})
    //.attr('marker-end','url(#arrowhead)')
    .style("stroke",edgeColor)
    .style("stroke-width",2)
    .style("pointer-events", "none");

var edgepaths = svg.selectAll(".edgepath")
    .data(dataset.edges)
    .enter()
    .append('path')
    .attr({'d': function(d) {return 'M '+d.source.x+' '+d.source.y+' L '+ d.target.x +' '+d.target.y},
           'class':'edgepath',
           'fill':'blue',
           'fill-opacity':0,
           'stroke':'red',
           'stroke-opacity':0,
           'id':function(d,i) {return 'edgepath'+i}})
    .style("pointer-events", "none");

var edgelabels = svg.selectAll(".edgelabel")
    .data(dataset.edges)
    .enter()
    .append('text')
    .style("pointer-events", "none")
    .attr({'class':'edgelabel',
           'id':function(d,i) {return 'edgelabel'+i},
           'dx':60,
           'dy':-5,
           'font-size':'10pt',
           'fill':edgeColor});

edgelabels.append('textPath')
    .attr('xlink:href',function(d,i) {return '#edgepath'+i})
    .style("pointer-events", "none")
    .text(function(d,i){return d.name});

svg.append('defs').append('marker')
    .attr({'id':'arrowhead',
           'viewBox':'-0 -5 10 10',
           'refX':25,
           'refY':0,
           //'markerUnits':'strokeWidth',
           'orient':'auto',
           'markerWidth':10,
           'markerHeight':10,
           'xoverflow':'visible'})
    .append('svg:path')
        .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
        .attr('fill', '#ccc')
        .attr('stroke','#ccc');
 

var nodes = svg.selectAll("circle")
    .data(dataset.nodes)
    .enter()
    .append("circle")
    .attr({"r":25,
           "id":function(d,i) {return 'node'+i}, })
    .style("fill",function(d,i){return colors(i);})
    .call(force.drag)

var nodelabels = svg.selectAll(".nodelabel") 
    .data(dataset.nodes)
    .enter()
    .append("a").attr({"href":function(d){return d.url;}})
    .append("text")
    .attr({"x":function(d){return d.x;},
           "y":function(d){return d.y;},
           "dx":-5,
           "dy":4,
           "class":"nodelabel",
           "stroke":"black"})
    .text(function(d){return d.name;});

force.on("tick", function(){

    edges.attr({"x1": function(d){return d.source.x;},
                "y1": function(d){return d.source.y;},
                "x2": function(d){return d.target.x;},
                "y2": function(d){return d.target.y;}
    });

    nodes.attr({"cx":function(d){return d.x;},
                "cy":function(d){return d.y;}
    });

    nodelabels.attr("x", function(d) { return d.x; }) 
              .attr("y", function(d) { return d.y; });

    edgepaths.attr('d', function(d) { var path='M '+d.source.x+' '+d.source.y+' L '+ d.target.x +' '+d.target.y;
                                       //console.log(d)
                                       return path});       

    edgelabels.attr('transform',function(d,i){
        if (d.target.x<d.source.x){
            bbox = this.getBBox();
            rx = bbox.x+bbox.width/2;
            ry = bbox.y+bbox.height/2;
            return 'rotate(180 '+rx+' '+ry+')';
            }
        else {
            return 'rotate(0)';
            }
    });
});
