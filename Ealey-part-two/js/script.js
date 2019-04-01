var occasion= "What type of event are you attending?"
var eventType= prompt(occasion);
var temp= "What's the weather today?"
var tempFahr= prompt(temp)
var results=""

If (eventType="casual"&& tempFahr<54){
  result= "Since it's colder than "+tempFahr+" outside and you are going to a "+eventType+ " event wear something comfy with a coat"
  alert(results)
} else if(eventType="casual"&& tempFahr>=54&&tempFahr<70){
  results= "Since it's warmer than 54 degrees outside and you are going to a "+eventType+ " event wear something comfy with a jacket"
  alert(results)
} else if(eventType="casual"&& tempFahr>70){
  result= "Since it's warmer than 70 degrees outside and you are going to a "+eventType+ " event just wear something comfy. No need for a coat or jacket!"
  alert(results)
}else if(eventType="semi-formal" && tempFahr<54"){
  result= "Since it's colder than 54 degrees outside and you are going to a " + eventType + " event wear a polo and a coat"
  alert(results)
} else if(eventType="semi-formal" && tempFahr>54&&tempFahr<70){
  result= "Since it's warmer than 54 degrees outside and you are going to a " + eventType + " event wear a polo with a jacket"
  alert(result)
}else if(eventType="semi-formal"&& tempFahr>70){
  result= "Since it's warmer than 70 degrees outside and you are going to a "+eventType+ " event just wear a polo. No need for a coat or jacket!"
  alert(results)
} else if (true) {eventType="formal"&& tempFahr<54){
  result= "Since it's colder than "+tempFahr+" outside and you are going to a "+eventType+ " event wear a suit with a coat"
  alert(results)
} else if(eventType="formal"&& tempFahr>=54&&tempFahr<70){
  results= "Since it's warmer than 54 degrees outside and you are going to a "+eventType+ " event wear a suit with a jacket"
  alert(results)
} else else if(eventType="formal"&& tempFahr>70){
  result= "Since it's warmer than 70 degrees outside and you are going to a "+eventType+ " event just wear a suit. No need for a coat or jacket!"
  alert(results)
