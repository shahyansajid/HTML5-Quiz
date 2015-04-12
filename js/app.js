// JavaScript Document
/***** GLOBAL VARIABLES *****/

//Questions
var q1 = "<input>タグのtype属性の値として使えないものを1つ選びなさい。";
var q2 = "以下の要素のうち、アウトラインの要素でないものを1つ選びなさい。";
var q3 = "font-sizeプロパティの値のうち、間違っているものを1つ選びなさい。";
var q4 = "mediaQueryで指定できるものを全て選びなさい。";
var q5 = "<meta>要素で指定できないものはどれか、1つ選びなさい。";
var q6 = "リンクにマウスを乗せた時に色が変わるように設定する場合、cssセレクタとして適切なものを1つ選びなさい。";
var q7 = "CSSプロパティのベンダープレフィックスで存在するものを1つ選びなさい。";
var q8 = "HTTPステータスコードのうち、正常時のコードを1つ選びなさい。";
var q9 = "次のうちcssで使えない単位を1つ選びなさい。";
var q10 = "次のうち、SQLインジェクション対策として適切なものをすべて選びなさい。";

//Answers
var q1a = ["file","password","tel","required","hidden"];
var q2a = ["body","section","article","figure","aside"];
var q3a = ["xxx-small","small","smaller","5px","80%"];
var q4a = ["アスペクト比","幅","ブラウザ","OS"];
var q5a = ["タイトル","キーワード","著者","説明"];
var q6a = ["a:hover","a:active","a:visited","a:mouseover"];
var q7a = ["-ie-","-ia-","-mozilla-","-webkit-"];
var q8a = ["200","210","400","404"];
var q9a = ["cm","mm","px","feet"];
var q10a = ["SSLを使う","特殊文字の変換をしてからデータを扱う","プレースホルダ―を利用する","入力文字が適切かバリデーションする","入力文字制限をする"];

//Answer Key
var ans1 = [0,0,0,1,0];
var ans2 = [1,0,0,0,0];
var ans3 = [1,0,0,0,0];
var ans4 = [1,1,0,0,0];
var ans5 = [1,0,0,0,0];
var ans6 = [1,0,0,0,0];
var ans7 = [0,0,0,1,0];
var ans8 = [1,0,0,0,0];
var ans9 = [0,0,0,1,0];
var ans10 = [0,1,1,1,1];

// Correct checkboxes
var corr1 = 5;
var corr2 = 5;
var corr3 = 5;
var corr4 = 4;
var corr5 = 4;
var corr6 = 4;
var corr7 = 4;
var corr8 = 4;
var corr9 = 4;
var corr10 = 5;

// Putting all the above into a map
var allquestions = {};
allquestions[0] = [q1,ans1,q1a,corr1];
allquestions[1] = [q2,ans2,q2a,corr2];
allquestions[2] = [q3,ans3,q3a,corr3];
allquestions[3] = [q4,ans4,q4a,corr4];
allquestions[4] = [q5,ans5,q5a,corr5];
allquestions[5] = [q6,ans6,q6a,corr6];
allquestions[6] = [q7,ans7,q7a,corr7];
allquestions[7] = [q8,ans8,q8a,corr8];
allquestions[8] = [q9,ans9,q9a,corr9];
allquestions[9] = [q10,ans10,q10a,corr10];

var item = {};
item[0] = [];
item[1] = [];
item[2] = [];
item[3] = [];
item[4] = [];

var item1 = [];
var item2 = [];
var item3 = [];
var item4 = [];
var item5 = [];

// 5 Random Questions
var rand = pickrando();

// Storing number of correct answers
var correct = [];


/***** CODE STARTS HERE *****/

// Creates the questions when the page is ready
$(document).ready(function() {
    for(var m = 0; m < 5; m++){
        var questionsout = create_ques(allquestions[rand[m]][0], allquestions[rand[m]][2], m);
        //$("#page2_wrapper").append(questionsout);
        $("#submit").before(questionsout);
    }
});

// Handles the button animation on the homescreen
$(document).ready(function() {
   setInterval(function() {
   		$("#beginbutt").fadeOut('slow');
		$("#beginbutt").fadeIn('slow');
	}, 2000);
	 //call fade in 3 seconds
 });

// Function that handles generating the answers for each question
function create_ans(num, ans, text) {
    var str = 'checkbox' + num + ans;
    var divadd = $('<div>').attr('class','ui-checkbox');
    var inp = $('<input>').attr('name', 'checkbox'+num).attr('id', str).attr('type', 'checkbox').attr('class', 'answer');
    var label = $('<label>').attr('for', str).attr('class','ui-btn ui-btn-up-a ui-btn-icon-left ui-checkbox-off ui-corner-top').attr('data-theme', 'a');
    var span1 = $('<span>').attr('class','ui-btn-inner ui-corner-top').attr('aria-hidden','true');
    var span2 = $('<span>').attr('class','ui-btn-text').text(text);
    var span3 = $('<span>').attr('class','ui-icon ui-icon-checkbox-off ui-icon-shadow');
    span1.append(span2);
    span1.append(span3);
    label.append(span1);
    divadd.append(inp);
    divadd.append(label);
    return divadd;
}

// The function that creates the question and associates and answer with itself
function create_ques(ques, ans_list, i) {
    var alpha = ['a', 'b', 'c', 'd', 'e'];
    var fieldset = $('<div>').attr('data-role', 'controlgroup').attr('name','quiz').attr('id','question' + i).attr('class', 'ui-corner-all ui-controlgroup ui-controlgroup-vertical');
    var legend = $('<p>').text("Question " + (i+1) + ": " + ques);
    fieldset.append(legend);
    for (var j = 0; j < ans_list.length; j++) {
        var elem = create_ans(i, alpha[j], ans_list[j]);
        fieldset.append(elem);
    }
    return fieldset;
}

// Randomize the questions
function shuffle(array) { var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
 

// Pick the numbers that were put into a random order
function pickrando() {
    var arr = [];
    var random = [];
    
    for (var i = 0; i < 10; i++) {
        arr[i] = i;
    }
    
    var shuffed = shuffle(arr);
    for (var i = 0; i < 5; i++)
        random.push(shuffed[i]);
    return random;
}

// Checking the state of the checkboxes
function checked(checkboxlist, num){
    for(var i = 0; i < checkboxlist.length; i++){
        if (checkboxlist[i].checked)
            item[num].push(1);
        else
            item[num].push(0);
    }

}

// Perform checks for the correct answer.
function result(){
    console.info("COMPUTING RESULT");
    var answer = {};
    answer[0] = [];
    answer[1] = [];
    answer[2] = [];
    answer[3] = [];
    answer[4] = [];
    
    var wrong = {};
    wrong[0] = [];
    wrong[1] = [];
    wrong[2] = [];
    wrong[3] = [];
    wrong[4] = [];
    
    var qlist = {};
    qlist[0] = $("div[name='quiz'] input[name='checkbox0']");
    qlist[1] = $("div[name='quiz'] input[name='checkbox1']");
    qlist[2] = $("div[name='quiz'] input[name='checkbox2']");
    qlist[3] = $("div[name='quiz'] input[name='checkbox3']");
    qlist[4] = $("div[name='quiz'] input[name='checkbox4']");
    
    var letter;

    for(var i = 0; i<5; i++)
        checked(qlist[i], i);

    
    //　Checking Answer
    for (var y = 0; y < 5; y++){
        for(var x = 0; x < item[y].length; x++){
            if(item[y][x] == allquestions[rand[y]][1][x])
                answer[y].push(1);
            else
                wrong[y].push(1);
                
            if(allquestions[rand[y]][1][x] == 1){
                if (x == 0)
                    letter = "a";
                if (x == 1)
                    letter = "b";
                if (x == 2)
                    letter = "c";
                if (x == 3)
                    letter = "d";
                if (x == 4)
                    letter = "e";
                var strchk = "checkbox" + y + letter;
                $("label[for='" + strchk + "']").addClass("correctanswer");
            }
        }
        if (answer[y].length == allquestions[rand[y]][3]){
            correct.push(1);
        }
    }
    
    // Changing BG color based off of right or wrong
    for(var i = 0; i<5; i++){
        if (wrong[i].length > 0) {
            $("#question" + i).css({'backgroundColor':'#f29dc3'});
            $("#question" + i).addClass("cross");
        } else {
        $("#question" + i).css({'backgroundColor':'#4aa9e2'});
        $("#question" + i).addClass("circle");
        }
    } 
    
    // Redirecting to correct page based off of correct answers
    if (correct.length == 5){
        window.location.href = "#result5";
        }
    else if (correct.length == 4){
        window.location.href = "#result4";
        }	
    else if (correct.length == 3){
        window.location.href = "#result3";
        }
    else if (correct.length == 2){
        window.location.href = "#result2";
        }
    else if (correct.length == 1){
        window.location.href = "#result1";
        }	
    else if (correct.length == 0){
        window.location.href = "#result0";
        }
    
    $("#submit").hide();
    
    return false;
}

function back(){
	$(':checkbox').each(function(i,item){ 
        this.checked = item.defaultChecked; 
	}); 
	window.location.href="index.html#page";
	window.location.reload();
}