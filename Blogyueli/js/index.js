// JavaScript
'use strict';

// const { default: axios } = require("axios");

// const { default: axios } = require("axios");

function onClick(){


    // form - input - name 


    let name = document.getElementById('onChangeName').value;
    if (name.length <4 || name.length > 15){
        let name_p;
        name_p = "Please fllow this: Name length should bigger than 3 and less than 15."
        document.getElementById('name_p').innerHTML = name_p;
    }
    else if ( name.length >= 4 &&  name.length <= 15){
        let name_p;
        name_p = "Successed!"
        document.getElementById('name_p').innerHTML = name_p;
    }




    // form - input - email
       // to check we need this
          // to see is our email style is like this:  myExample@gmail.com

    let email = document.inputForm.elements[1].value;

    let email_rule = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let email_reg = "example@gmail.com"

    if (email.length >= 35 || email.length < 14 ){
        let email_p;
        email_p = "Please fllow this: 1, The email length should be bigger than equel 35."
        document.getElementById('email_p').innerHTML = email_p;

    }
    else if (email.length >= 14 || email.length < 35 ){
        let email_p;
        email_p = "Successed"
        document.getElementById('email_p').innerHTML = email_p;

    }
    else if(email == validateEmail(email_reg)){
        let email_p;
        email_p = "Successed"
        document.getElementById('email_p').innerHTML = email_p;
    }
    else if(email == email_rule ){
        let email_p;
        email_p = "Successed"
        document.getElementById('email_p').innerHTML = email_p;
    }

    //form - questions
    let questions = document.getElementById('onChangeQuestion').value;

    let question_words = "Fuck"
    let question_word = "fuck"
    if( questions.length <= 5 || questions.length >=150 ){
        let questions_p;
        questions_p = "Please say something~ Thank you!"
        document.getElementById('question_p').innerHTML = questions_p;

    }
    else if (questions ==  question_words || questions == question_word){
        let questions_p;
        questions_p = "I'm sorry about that~ ~"
        document.getElementById('question_p').innerHTML=questions_p;

    }
    else if ( questions.length > 6 && questions.length< 151 ){
        let questions_p;
        questions_p = "Successed"
        document.getElementById('question_p').innerHTML=questions_p;
    }
    
}





