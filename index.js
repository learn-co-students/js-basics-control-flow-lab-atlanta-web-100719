function scuberGreetingForFeet(distance){
  if (distance <= 400 ) {
    let response = "This one is on me!";
    return response;
    
  } 

  else if ( distance >= 2001 && distance < 2500) {

    let response = "I will gladly take your thirty bucks.";
    return response;

  }
  else {
    let response = "No can do.";
    return response;
  }
}

function ternaryCheckCity(city){
  if (city == "NYC") {
    return "Ok, sounds good.";
    
  } 
  else {
    return "No go.";
    
  }
  
}

let tip;

function switchOnCharmFromTip(tip){
  let response;

  switch (tip) {
    case 'generous':
      response = "Thank you so much.";
      break;

      case 'not as generous':
      response = "Thank you.";
      break;

      case 'thanks for everything':
      response = "Bye.";
      break;  
      
  }

  return response;

}