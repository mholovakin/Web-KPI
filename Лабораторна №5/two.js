function harshad()
{
    var user_input = prompt("Input your number: ");
    var sum = 0;
    for (var i = 0; i <= 9; i++)
    {
        for (var j = user_input; j != 0; j /= 10)
        {
            if (Math.floor(j) % 10 == i)
            {
                sum = sum + i;
            }
        }
    }


    if (user_input % sum == 0)
    {
        window.alert("Your number "+user_input+" is Harshad");
    }
    else
    {
        window.alert("Your number "+user_input+" is not Harshad");
    }
}

function asc()
{
    var start;
    var str = prompt("Input numbers: ", '99100');
    var lent = str.length;
    for (var i = 0; i < Math.floor(lent / 2); i++)
    {
        var new_str = str.substr(0, i+1);
        var num = parseInt(new_str);
        start = num;

        while(new_str.length < lent)
        {
            num++;
            new_str = new_str + num;
        }

        if (new_str == str)
        {
            return start;
        }
    }
    return -1;
}

function ascorno()
{
    var start = asc();
    if (start != -1)
    {
        window.alert("Yes");
    }
    else
    {
        window.alert("No");
    }

}


class Person {
    constructor(firstName, surname, gender, dob){
      this.name = firstName;
      this.surname = surname;
      this.gender = gender;
      this.dob = dob;
      this.dobDay = dob.split("/")[0];
      this.dobMonth = dob.split("/")[1];
      this.dobYear = dob.split("/")[2];
    }
    
    nameConvertor(name) {
      var vowels = "aeiou"
      var name = name.toLowerCase();
      var result = "";
  
        for (var i = 0; i < name.length; i++){
          if (vowels.indexOf(name[i]) < 0){
              result += name[i];
            }
        }
  
        if (result.length > 3){
          result = result[0]+result[2]+result[3];
        } else if (result.length < 3){
          for (var i = 0; i < name.length & result.length < 3; i++){
              if (vowels.indexOf(name[i]) > -1){
                  result += name[i];
              }
          }
  
            if (result.length < 3){
              result += "x".repeat(3-result.length);
            }
        }
  
        return result.toUpperCase();
    }
    
    get code(){
      var result = this.nameConvertor(this.surname) + this.nameConvertor(this.name);
      result += this.dobYear[2] + this.dobYear[3];
      
      const months = {"1":"A","2":"B","3":"C","4":"D","5":"E","6":"H","7":"L","8":"M","9":"P","10":"R","11":"S","12":"T"}
      result += months[this.dobMonth];
      var day = this.dobDay;
      if (this.gender == "F"){
        day = (parseInt(day)+40).toString();
      }
      
      if (day.length < 2){
        day = "0"+day;
      }
      result += day;
      
      return result;
    }
  }
  
  function FiskalnaSluzhba()
  {
    var doc = new Person("Matt", "Edabit", "M", "1/1/1900");
    window.alert(doc.code);
  }