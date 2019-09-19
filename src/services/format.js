
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

export const formatDate = (date) => {
  const dia = date.getDate() > 9? date.getDate(): "0" + date.getDate();
  const mes = date.getMonth() > 9? date.getMonth(): "0" + date.getMonth();
  const hor = date.getHours() > 9? date.getHours(): "0" + date.getHours();
  const min = date.getMinutes() > 9? date.getMinutes(): "0" + date.getMinutes();
  return `${dia}/${mes}/${date.getFullYear()} ` +
         `${hor}:${min}`; 
}