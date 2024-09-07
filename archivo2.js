$(document).on("ready",inicio);
function inicio(){
    $("#txt2").on("keydown", function(){
       var num1=$("#txt1").val();
       var num2=$("#txt2").val();
       var resul = parseFloat(num1) + parseFloat(num2);
    $("#txt3").val(resul).css("background","orange");
    });
    $("#txt21").on("keydown", function(){
       var num1=$("#txt1").val();
       var num2=$("#txt2").val();
       var resul = parseFloat(num1) + parseFloat(num2);
    $("#txt3").val(resul).css("background","orange");
    });
    $("#txt2").on("mousemove", function(){
       var num1=$("#txt1").val();
       var num2=$("#txt2").val();
       var resul = parseFloat(num1) + parseFloat(num2);
    $("#txt3").val(resul).css("background","orange");
    });
    $("#txt1").on("mousemove", function(){
       var num1=$("#txt1").val();
       var num2=$("#txt2").val();
       var resul = parseFloat(num1) + parseFloat(num2);
    $("#txt3").val(resul).css("background","orange");
    });
   
}
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


