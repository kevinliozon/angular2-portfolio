import { Component, OnInit } from '@angular/core';
//animations
import { routeTrans } from '../shared/components/animations/route-transition';

declare var d3: any;

@Component({
  moduleId: module.id.replace('/dist/app/', '/app/'),
  templateUrl: 'stats.html',
  animations: [routeTrans],
  host: { '[@routeTrans]': 'true' } // attach the fade in animation to the host (root) element of this component
})
export class StatsPage implements OnInit {
  
  private margin = {top: 20, right: 20, bottom: 30, left: 50};
  private width: number;
  private height: number;
  private radius: number;
  
  private arc: any;
  private labelArc: any;
  private pie: any;
  private color: any;
  private svg: any;
  
  constructor() {
    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
    this.radius = Math.min(this.width, this.height) / 2;
  }
  
  ngOnInit() {
    this.initSvg();
  }
  
  
  private initSvg() {
    // -->Set: pie chart for view
    let w = 400;                       //width
    let h = 400;                           //height
    let r = 150;                          //radius
    let color = d3.scale.category20c();     //builtin range of colors
    
    let dataDiploma = [{
      'category':'Certifications',
      'value':2
    },
    {
      'category':'University degrees',
      'value':2
    },
    {
      'category':'Bachelor\'s degrees',
      'value':1
    },
    {
      'category':'Highschool degrees',
      'value':1
    }];
    
    let vis = d3.select('svg')
      .append('svg:svg')              //create the SVG element inside the <body>
      .data([dataDiploma])                   //associate our data with the document
      .attr('width', w)           //set the width and height of our visualization (these will be attributes of the <svg> tag
      .attr('height', h)
      .append('svg:g')                //make a group to hold our pie chart
      .attr('transform', 'translate(' + r + ',' + r + ')')    //move the center of the pie chart from 0, 0 to radius, radius
    
    let arc = d3.svg.arc()              //this will create <path> elements for us using arc data
      .outerRadius(r);
    
    let pie = d3.layout.pie()           //this will create arc data for us given a list of values
      .value(function(d) { return d.value; });    //we must tell it out to access the value of each element in our data array
    
    let arcs = vis.selectAll('g.slice')     //this selects all <g> elements with class slice (there aren't any yet)
      .data(pie)                          //associate the generated pie data (an array of arcs, each having startAngle, endAngle and value properties)
      .enter()                            //this will create <g> elements for every 'extra' data element that should be associated with a selection. The result is creating a <g> for every object in the data array
      .append('svg:g')                //create a group to hold each slice (we will have a <path> and a <text> element associated with each slice)
      .attr('class', 'slice');    //allow us to style things in the slices (like text)
    
    arcs.append('svg:path')
      .attr('fill', function(d, i) { return color(i); } ) //set the color for each slice to be chosen from the color function defined above
      .attr('d', arc);                                    //this creates the actual SVG path using the associated data (pie) with the arc drawing function
    
    arcs.append('svg:text')                                     //add a label to each slice
      .attr('transform', function(d) {                    //set the label's origin to the center of the arc
        //we have to make sure to set these before calling arc.centroid
        d.innerRadius = 0;
        d.outerRadius = r;
        return 'translate(' + arc.centroid(d) + ')';        //this gives us a pair of coordinates like [50, 50]
      })
      .attr('text-anchor', 'middle')                          //center the text on it's origin
      .style('font-size', '1.0rem')
      .text(function(d, i) { return dataDiploma[i].category; });        //get the label from our original data array
  
    arcs.append('svg:text')                                     //add a label to each slice
      .attr('transform', function(d) {                    //set the label's origin to the center of the arc
        //we have to make sure to set these before calling arc.centroid
        d.innerRadius = r-40;
        d.outerRadius = r;
        return 'translate(' + arc.centroid(d) + ')';        //this gives us a pair of coordinates like [50, 50]
      })
      .attr('text-anchor', 'middle')
      .style('font-size', '1.6rem')
      .text(function(d, i) { return dataDiploma[i].value });
  
    arcs.append('svg:text')
      .attr("x", -75)
      .attr("y", 200)
      .text(function() { return `Number of diplomas: ${dataDiploma.length}`; });
  }
  
}
