import supabase from "./supabase"

export default async function addRequest(request){
  
const { data, error } = await supabase
.from('Requests')
.insert([request])
.select()
if(error){
  console.error(error)
  throw new Error("properties could not be fetched")
}
return data
}

export async function getRequests(){
  
let { data, error } = await supabase
.from('Requests')
.select('*')

if(error){
  console.error(error)
  throw new Error("requests could not be fetched")
}
return data
}