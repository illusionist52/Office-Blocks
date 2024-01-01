import supabase from "./supabase";

export default async function getBlog(){
  
let { data: Blog, error } = await supabase
.from('Blog')
.select('*')
if(error){
  console.error(error)
  throw new Error("blogs could not be fetched")
}
return data

}

export default async function createBlog(data){
  
const { data, error } = await supabase
.from('Blog')
.insert([data])
.select()
if(error){
  console.error(error)
  throw new Error("blog could not be added")
}
}
