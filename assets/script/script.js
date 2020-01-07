
$(document).ready(function(){
  var xhr = new XMLHttpRequest(); 
  xhr.open('GET', 'http://www.apilayer.net/api/list?access_key=f693059fa767e40c5c0cfc0c2ce9ece4');
  xhr.send()
  xhr.onload = function (){
  if(xhr.status == 200){
    res = JSON.parse(xhr.response)
    console.log(res)
    var currency = res.currencies
    console.log(currency)
    for(key in currency) {
      $('#country1').append("<option value="+key+">"+currency[key]+"</option>")
      $('#country2').append("<option value="+key+">"+currency[key]+"</option>")
      $('#showList').append("<li>"+key+"</li>")
      $('#countryList').append("<li>"+currency[key]+"</li>")

    }
  }
  else{
      console.log("Error Code is:" + xhr.status)
    }
  }
  
  
})


var country1 =''
var country2 =''
var amount = ''

$("#country1").change(function(){
  country1 = $('#country1').val();
  console.log(country1)
});

$("#country2").change(function(){
country2 = $('#country2').val();
console.log(country2)
});


$('#inputVal').blur(function(){
  amount = $('#inputVal').val()
  console.log(amount)
})

$('#btn').click(function(){
  var xhr = new XMLHttpRequest(); 
  xhr.open('GET', 'http://www.apilayer.net/api/live?access_key=f693059fa767e40c5c0cfc0c2ce9ece4');
  xhr.send()
  xhr.onload = function (){
  if(xhr.status == 200){
    res = JSON.parse(xhr.response)

    var data1 = res.quotes
    var x=0
    var y=0
    var key1 = 'USD'+country1
    var key2 = 'USD'+country2

    console.log(key1)
    console.log(key2)

    for(key in data1) {
      if(key == key1) {
        x = data1[key]
        // console.log(x) 
      }
    }
    for(key in data1) {
      if(key==key2) {
        y = data1[key]
        // console.log(y)
      }
    }

    x = parseFloat(x)
    y = parseFloat(y)
    console.log(x)
    console.log(y)
    amount = parseInt(amount)

      $('#show').text((y/x) * amount )


    // console.log(data1)
 

      
      
      // console.log(key)
      // console.log(data1[key])
    }
    // data1.forEach(function(elem){
    //   $("#showRate").append("<li>"+key[elem]+"</li>")
    // })
  }
  // else{
  //     console.log("Error Code is:" + xhr.status)
  //   }
  // }

// if(amount == '') {
//   $('#show').text('Hello')
// } else
// $('#show').text(country1+' '+amount+' '+country2)
})


// $('#btn').click(function(){
  
// })

$(document).ready(function(){

  var xhr = new XMLHttpRequest(); 
  xhr.open('GET', 'http://www.apilayer.net/api/live?access_key=f693059fa767e40c5c0cfc0c2ce9ece4');
  xhr.send()
  xhr.onload = function (){
  if(xhr.status == 200){
    res = JSON.parse(xhr.response)
    var data1 = res.quotes

  for(key in data1) {
    $('#showRate').append("<li>"+data1[key]+"</li>")
  }
}
}
})

