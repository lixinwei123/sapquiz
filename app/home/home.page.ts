import { Component, forwardRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cards : any;
  cardList: any;
  successFactor = 0;
  fieldGlass = 0;
  ariba = 0;
  qualtrics = 0;
  concur = 0;
  leonardo = 0;
  success = ["Beach","Sometimes casual but sometimes preppy","Go out and have drinks with friends","My own storefront","Between other tasks","Tea"];
  field = ["Amusement park","Sometimes casual but sometimes preppy","Go out and have drinks with friends","An art studio","Whenever the inspiration hits","Coffee"];
  ari = ["Stay in","Video game","An office","Early morning","Water"];
  qual = ["Road trip","Relax on the couch","In my bed","Late at night","Tea"];
  conc = ["Spend time outdoors","Wherever the work takes me","Whenever the inspiration hits","Coffee"];
  leo = ["Cultural","Black white and grey","Reading","Anywhere with WiFi", "Early morning","Water"];
  constructor() {
    this.cardList = [];
    var card1 = {
      title: "What’s your favorite kind of vacation?",
      choices: ["Beach","Amusement Park","Stay in","Exotic","Cultural"],
      checked: ""
    }
    var card2 = {
      title: "What’s your favorite food?",
      choices: ["Burger","Soup","Smoothie","Pasta","Steak", "I love to try new foods"],
      checked: ""
    }
    var card3 = {
      title: "What’s your favorite color?",
      choices: ["Blue","Redk","Teal","Black","White","Purple"],
      checked: ""
    }
    var card4 = {
      title: "How would you describe your style?",
      choices: ["Tons of colors","The styles vary, but everything is neat and organized ","Black white and grey","Sometimes casual but sometimes preppy"],
      checked: ""
    }
    var card5 = {
      title: "What do you do to relax?",
      choices: ["Spend time outdoors","Relax on the couch","Go out and have drinks with friends","Reading","Video game"],
      checked: ""
    }
    var card6 = {
      title: "What’s your ideal workspace?",
      choices: ["Anywhere with WiFi","An art studio","Wherever the work takes me","An office","My own storefront","In my bed"],
      checked: ""
    }
    var card7 = {
      title: "When do you get the most done?",
      choices: ["Early morning","Late at night","Between other tasks","Whenever the inspiration hits"],
      checked: ""
    }
    var card8 = {
      title: "What’s your go-to beverage?",
      choices: ["Water","Coffee","Tea"],
      checked: ""
    }
    this.cardList.push(card1);
    this.cardList.push(card2);
    this.cardList.push(card3);
    this.cardList.push(card4);
    this.cardList.push(card5);
    this.cardList.push(card6);
    this.cardList.push(card7);
    this.cardList.push(card8);

  }
  submit(){
    var product;
    for(var card in this.cardList){
      if(this.cardList[card].checked == ""){
        alert("Please make sure you select all the choices to see the result")
        return;
      }
      if(this.success.includes(this.cardList[card].checked)){
        this.successFactor += 1;
      }else if(this.field.includes(this.cardList[card].checked)){
        this.fieldGlass += 1;
      }else if(this.ari.includes(this.cardList[card].checked)){
        this.ariba += 1;
      }else if(this.qual.includes(this.cardList[card].checked)){
        this.qualtrics += 1;
      }
      else if(this.conc.includes(this.cardList[card].checked)){
        this.concur += 1;
      }
      else if(this.leo.includes(this.cardList[card].checked)){
        this.leonardo += 1;
      }
    }
    var max = Math.max(this.successFactor,this.fieldGlass,this.ariba,this.qualtrics,this.concur,this.leonardo)
    console.log("hi",max);
    if(max == this.successFactor){
      product = "Success Factor";
    }else if(max == this.fieldGlass){
      product = "Field Glass";
    }else if(max == this.ariba){
      product = "Ariba";
    }else if(max == this.qualtrics){
      product = "Qualtrics";
    }else if(max == this.concur){
      product = "Concur";
    }else if(max == this.leonardo){
      product = "Leonardo";
    }
    alert("you are " + product);
  }
}
