interface Bird {
  fly();
  layEggs();
}
interface Fish {
  swim();
  layEggs();
}
function isFish(pet: Fish | Bird): pet is Fish {
  return "swim" in pet;
}

function move(pet: Fish | Bird){
    pet
    if (isFish(pet)) {
        pet
    }
    else{
        pet
    }
}
