window.suoyin=0;
// window.dati={chencks:null,id:null};
window.allQuestions = [{ question: "1.吃冰淇淋不解渴主要是因为它？", choices: [ "含蛋白质", "含脂肪", "含糖"],correctAnswer: 0 },
    { question: "2.下列哪项是人体的造血器官?", choices: [ "心脏", "骨髓", "肾脏"],correctAnswer: 1 },
    { question: "3.下列哪种球类没有”越位”的规则?", choices: [ "足球", "篮球", "冰球",],correctAnswer: 2 },
    { question: "4.我国铁路部门规定身高多少的儿童要买全票？", choices: [ "1.20米", "1.30米", "1.40米"],correctAnswer: 0 },
    { question: "5.敲门砖一词源于？", choices: [ "考试", "拜师", "做官"],correctAnswer: 1 },
    { question: "6.下列关于花木整枝的说法不正确的是？", choices: [ "剪去部分新枝的顶梢", "剪去枯枝、弱叶和部分过密枝", "剪去主根过长的部分","摘除花木上的不定芽"],correctAnswer: 3 }
];
window.wentis=[];

   
$(document).ready(function(){
        $('#Next').click(function(){  
            var answer = $(":radio[name=xuanze]:checked"); 
            var a=answer.val();
            
            if(suoyin<allQuestions.length){
                if(wentis[suoyin]==null){
                    if(answer.val()!=null){
                        wentis.push({"gage":suoyin,"id":answer.val()});
                        console.log(wentis);
                    } 
                }
                if(answer.prop("checked")==true){
                    if(wentis[suoyin].id!=a){
                        wentis[suoyin].id=answer.val();
                    }
                    suoyin++;
                }
            }
        if(suoyin<allQuestions.length){ 
                //https://www.cnblogs.com/linyuhuan/p/4482424.html 获取值
                //开始检测当页是否答题，并存储当前页数  
            if(answer.prop("checked")==true){
                //获取本页选择的答案
                    $("#div4").empty();     
                    for(i=0;i<allQuestions[suoyin].choices.length;i++){
                        $("#problem").empty();
                        $('#problem').append(allQuestions[suoyin].question).hide().fadeIn(400);
                        $('#div4').append($("<span></spam>").text(allQuestions[suoyin].choices[i]).append($("<input>").attr("type","radio").attr("name","xuanze").attr("value",i))).hide().fadeIn(400);
                    }
            }else{//答题if
                alert("请选择后再下一步");
            }    
            if(suoyin>=1){
                $("#back").fadeIn(100);
                console.log(suoyin);
            }
        }else{//最外层if
            console.log("进入分数计算事件");
            let fenshu=0;
            for(i=0;i<allQuestions.length;i++){
                if(allQuestions[i].correctAnswer==wentis[i].id){
                    fenshu++;
                }
            }
            $("#back").fadeOut(100);
            $("#Next").fadeOut(100);
            $("#problem").empty();
            $("#div4").empty();
            // $("#div2").fadeOut(100);
            $("#div2").css("border-bottom","none");
            $("#div1").append($("<h1></h1>")).text("你的总分是"+fenshu).hide().fadeIn(400);
        }
        //存储
        if(wentis[suoyin]!=null){
            $("[value="+[wentis[suoyin].id]+"]").prop("checked",true);
        } 
        
        });
})
$(document).ready(function(){
    $("#back").click(function(){
        // console.log(suoyin);
        suoyin--;
        const gages=wentis[suoyin].gage;
        console.log(gages);
        $("#div4").empty();
            for(i=0;i<allQuestions[suoyin].choices.length;i++){
                            $("#problem").empty();
                            $('#problem').append(allQuestions[suoyin].question).hide().fadeIn(400);
                            $('#div4').append($("<span></spam>").text(allQuestions[suoyin].choices[i]).append($("<input>").attr("type","radio").attr("name","xuanze").attr("value",i)));
            }
            $("[value="+[wentis[suoyin].id]+"]").prop("checked",true);
            if(suoyin<=0){
                $("#back").fadeOut(100);
            }
    })
})
$(document).ready(function(){ 
    $("#Play").click(function(){
        
        for(i=0;i<allQuestions[suoyin].choices.length;i++){
            $("#problem").empty();
            $('#problem').append(allQuestions[suoyin].question).hide().fadeIn(400);
            $('#div4').append($("<span></spam>").text(allQuestions[suoyin].choices[i]).append($("<input>").attr("type","radio").attr("name","xuanze").attr("value",i))).hide().fadeIn(500);
        }
        $("#Play").fadeOut(100,function(){
            $("#Next").fadeIn(100);
        });
        
        
    })
})
