
export const formatInput = (id, input) => {
  switch(id) {
    case "PS":  case "GP":  case "GC":  case "NSG":  case "NM":  
      return onlyNumber(input);
    case "MD":  case "VS":  case "U6":  default:
      return input;  
  }
}

export const formatCompound = (id, input) => {
  switch(id) {
    case "MD":  case "VS":  
      return compound(input, 4);
    case "U6":  
      return compound(input, 2);
    case "PS":  case "GP":  case "GC":  case "NSG":  case "NM":  default:
      return true;
  }
}

export const onlyNumber = (input) => {
  if (input === "") return "";
  return (input + "").replace(/[^0-9.]/g, ""); 
}

const compound = (input, size) => {
  const arr = input.split("-");

  if (arr.length < size) return false;

  for(let i = 0; i < size; i++)
    if ((arr[i] + "").match(/[^0-9.]/g) != null) 
      return false;
      
  return true;
}
