$(function(){
    $("#div1").css("background","green");
    $(".div2").css("border","1px solid red");
    $("[name=div3]").css("background","blue");
    $("div:eq(5)").css("background","yellow");
    console.log($("div:eq(6)"));

    $("#list li").each(function (indexInArray, valueOfElement) { 
        this.title="我是第"+(indexInArray+1)+"个";
    });

    $("#btn1").click(function(){
        alert('文本内容:'+$('#test0').text())
    });

    $("#btn2").click(function(){
        alert($("#test1").attr("title"));
    });

    var $li1 = $("<li>谁知盘中餐</li>");
    var $li2 = $("<li>粒粒皆辛苦</li>");
    $('#btn3').click(function(){
        $('#list1').append($li1);
        $('#list1').append($li2);
    });

    $('#btn4').click(function(){
        $('#list2 li:eq(2)').replaceWith("<li>苹果爱上大鸭梨</li>");
    });

    $('#btn5').one("click",function(){
        alert('Hello');
    });

    $('#btn6').bind("click",function(){
        alert('Hi');
    });
    
    $('#btn7').click(function(){
        $('#btn6').unbind();
    });
});