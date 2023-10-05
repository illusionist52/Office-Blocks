import supabase from "./supabase"

export default async function getProperties(){
  

  let { data, error } = await supabase
  .from('Properties')
  .select('*')


if(error){
  console.error(error)
  throw new Error("properties could not be fetched")
}
return data

}

export async function addProperties(property){
  
const { data, error } = await supabase
.from('Properties')
.insert([property])
.select()

if(error){
  console.error(error)
  throw new Error("properties could not be fetched")
}
return data

}

