window.addEventListener("load", function() {
    let myLog = [];
    function consTrack(string) {
        console.log(string);
        myLog.push(String(string));
    }
    consTrack("Script initiated");
    //import {stringOfZeros} from "./helperFuncs.js";
    //consTrack(stringOfZeros(5));
  
    
    let form = document.getElementById("rocketForm");
    let button = document.getElementById("submit");
    function validateInput(input) {
      //Returns a string equal to 'null' if the input is empty, 'NaN' if the input is not a number, or 'number' if the input is a number.
      if(input == "null" || typeof input == "undefined" || String(input) == '') {
        return 'null';
      } else if (Number(input) == NaN || isNaN(Number(input))) {
        return "NaN";
      } else {
        return "number";
      }
    }
  
  
  
    let field1;
    let field2;
    let field3;
    let field4;
    let field6;
  
    function checkValidity() {
      //console.log("Validity check in progress");
      /*console.log("field 1 value: ", field1.value);
      console.log("field 4 value: ", field4.value);
      console.log("field 1 value type: ", validateInput(field1.value));
      console.log("field 1 cast to number: ", Number(field1.value));*/
      if(!(validateInput(field1.value) === "NaN")) {
        window.alert("testName has an invalid input");
        event.preventDefault();
      } else if (!(validateInput(field4.value) === "number")) {
        window.alert("boosterCount has an invalid input");
        event.preventDefault();
      } else if (field1.value.length > 99) {
        window.alert("Name must be 1-99 characters long");
        event.preventDefault();
      } else {
        console.log("fields 1 and 4 validated");
      }
    }
  
    form.addEventListener("submit", function(event) {
      field1 = document.querySelector("input[name=testName]");
      field2 = document.querySelector("input[name=testDate");
      field3 = document.querySelector("select[name=rocketType]")
      field4 = document.querySelector("input[name=boosterCount");
      field6 = document.querySelector("input[name=productionServers]");
  
      checkValidity();
      consTrack("Date: "+ field2.value);
      consTrack("rocketType: "+ field3.value);
      //console.log("Date value type: ", validateInput(field2.value), (validateInput(field2.value) == "null"));
  
      let testNameNum = field1.value.length; 
      //testNameNum = leadingZeros(testNameNum,2);
      //testNameNum = testNameNum.concat(leadingZeros(field1.value.charCodeAt(0)),5);
      consTrack("name data: "+ testNameNum);
      let testDateNum;
      if (validateInput(field2.value) === "null") {
        testDateNum = "00000000";
      } else {
        testDateNum = field2.value.replace(/-/g,"");
      }
      consTrack("Date data: "+ testDateNum);
      //console.log(leadingZeros(4,2));
      //let summaryString = testNameNum.concat(testDateNum);
      //console.log("Input data summary: ", summaryString);

      

      
    });

    let pLog = document.getElementById("consPar");
    pLog.innerHTML += "Page loaded";
    function showLog() {
        let logText = "Console log: ";
        for(let i=0; i<myLog.length; i++) {
            logText += (myLog[i]+"<br>");
        }
        pLog.innerHTML = logText;
    }

    let logButton = document.getElementById("showConsole");
    logButton.addEventListener("click", function(event) {
        showLog();
    });
  
  });
  
  
  