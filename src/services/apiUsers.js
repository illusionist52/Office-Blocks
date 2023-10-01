import supabase from "./supabase";

export async function checkUser(){

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