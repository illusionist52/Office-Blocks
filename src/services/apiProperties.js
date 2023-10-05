import supabase, { supabaseUrl } from "./supabase"

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

  const imageName=`${Math.random()}-${property.image.name}`.replaceAll("/","")
  // https://traxgpezajucfbzmvloz.supabase.co/storage/v1/object/public/Property%20Images/office-1.jpg
  const imagePath =`${supabaseUrl}//storage/v1/object/public/Property%20Images/${imageName}`
const { data, error } = await supabase
.from('Properties')
.insert([{...property, image: imagePath}])
.select()

const { error: storageError } = await supabase
  .storage
  .from('Property%20Images')
  .upload(imageName, property.image)


if(error){
  console.error(error)
  throw new Error("properties could not be fetched")
}
return data

}

