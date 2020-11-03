"use strict";

var chart1 = d3.select('.chart4__col1--svg').append('svg').attr('width', 360).attr('height', 360).attr('viewBox', '0 0 360 360').append('g').attr('transform', 'translate(180, 180)');
var r = 180;
var p = Math.PI;
var Arc = d3.arc().innerRadius(r - 65).outerRadius(r);
var chart1Arc1 = chart1.append('path').datum({
  endAngle: 0,
  startAngle: 0
}).style("fill", "#f14950").attr("d", Arc);
var chart1Arc2 = chart1.append('path').datum({
  endAngle: 0,
  startAngle: 0
}).style('fill', '#2a6fe0').attr("d", Arc);
;
var chart2 = d3.select('.chart4__col2--svg').append('svg').attr('width', 360).attr('height', 360).attr('viewBox', '0 0 360 360').append('g').attr('transform', 'translate(180, 180)');
var chart2Arc1 = chart2.append('path').datum({
  endAngle: 0,
  startAngle: 0
}).style('fill', '#f14950').attr('d', Arc);
var chart2Arc2 = chart2.append('path').datum({
  endAngle: 0,
  startAngle: 0
}).attr('d', Arc).style('fill', '#2a6fe0'); // p * 255.6/180

var arcTween = function () {
  function arcTween1(transition, newStartAngle, newFinishAngle) {
    transition.attrTween("d", function (d) {
      console.log(d);
      var interpolateStart = d3.interpolate(d.startAngle, newFinishAngle);
      console.log(interpolateStart);
      return function (t) {
        d.endAngle = interpolateStart(t);
        d.startAngle = newStartAngle;
        return Arc(d);
      };
    });
  }

  function arcTween2(transition, newStartAngle, newFinishAngle) {
    transition.attrTween("d", function (d) {
      var interpolateEnd = d3.interpolate(d.startAngle, newFinishAngle);
      var interpolateStart = d3.interpolate(d.startAngle, newStartAngle);
      console.log(interpolateStart);
      return function (t) {
        d.endAngle = interpolateEnd(t);
        d.startAngle = interpolateStart(t);
        return Arc(d);
      };
    });
  }

  function transitionCircle1() {
    chart1Arc1.transition().duration(1000).call(arcTween1, 0, p * 205.2 / 180);
    chart1Arc2.transition().duration(1000).call(arcTween2, p * 205.2 / 180, p * 2);
  }

  function transitionCircle2() {
    chart2Arc1.transition().duration(1000).call(arcTween1, 0, p * 255.6 / 180);
    chart2Arc2.transition().duration(1000).call(arcTween2, p * 255.6 / 180, p * 2);
  }

  return {
    arcTween1: arcTween1,
    arcTween2: arcTween2,
    circleChart1: transitionCircle1,
    circleChart2: transitionCircle2
  };
}();

$(function () {
  $('#backtop').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 'slow');
  });
});