import supabase from "./supabase";

export async function searchProp(title) {
  const { data, error } = await supabase
    .from("Properties")
    .select("*")
    .ilike(`title`,`%${title}%`);
    if(error){
      console.error(error)
      throw new Error("properties could not be fetched")
    }
    console.log(data)
    return data
}
