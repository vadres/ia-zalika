export const onlyNumber = (input) => {
  return (input + "").replace(/[^0-9]/g, ""); 
}

export const compound = (input, size) => {
  const arr = input.split("-");

  if (arr.length < size) return false;

  for(let i = 0; i < size; i++)
    if ((arr[i] + "").match(/[^0-9]/g) != null) 
      return false;
      
  return true;
}