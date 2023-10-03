import supabase from "./supabase";

export async function checkUser(){

  let { data, error } = await supabase
  .from('Users')
  .select('*')

  if(error){
    console.error(error)
    throw new Error("user could not be created")
  }
  return data
}

export async function createUser(userData){
  
  const { data, error } = await supabase
  .from('Users')
  .insert([userData])
  .select()


  if(error){
    console.error(error)
    throw new Error("user could not be created")
  }

  return data;
}