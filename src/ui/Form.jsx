import React from 'react'
import { useForm } from "react-hook-form";
import "../pages/signup.css"
import "./form.css"
import { useMutation } from '@tanstack/react-query';
import { addProperties } from '../services/apiProperties';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
function Form() {
  const navigate= useNavigate();
  const { register, handleSubmit,reset } = useForm();
  const { mutate, isLoading } = useMutation({
    mutationFn: addProperties,
    onSuccess: () => {
      toast.success("Property added successfully")
      reset()
      navigate(-1);
    }
  })

  const userData = JSON.parse(localStorage.getItem('token'))

  // function onSubmit(data) {
  //   mutate({ data, image: data.image.at(0), OwnedBy: userData.username });
  //   console.log(data)
  //   console.log("Data");
  // }

  function onSubmit(data) {
    mutate({ ...data, OwnedBy: userData.username ,image: data.image[0] });
  }

  // function onSubmit(data) {

    // const imageFile = data.image[0];
    // const imageName = imageFile.name;
    // console.log(imageName);

    // Check if the image data is an array
    // (Array.isArray(data.image) && data.image.length > 0) 
  //   mutate({
  //     data,
  //     image: imageFile, // Access the image data using array notation (data.image[0])
  //     OwnedBy: userData.username
  //   });


  //   console.log(data);
  //   console.log("Data");
  // }


  return (
    <div className='box-41'>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="title" {...register("title", { required: true })} />
        <input type="text" placeholder="price" {...register("price", { required: true })} />
        <input type="text" placeholder="decription" {...register("description", { required: true })} />
        <input type="number" placeholder="area" {...register("area", { required: true })} />
        <input type="text" placeholder="cr" {...register("conference_room", { required: true })} />
        <input type="number" placeholder="rooms" {...register("rooms", { required: true })} />
        <input type="text" placeholder="furniture" {...register("Furniture", { required: true })} />
        <input type="text" placeholder="manageprop" {...register("manageprop", { required: true })} />
        <input type="text" placeholder="co-working" {...register("isCoworking", { required: true })} />
        <input type="text" placeholder="city" {...register("city", { required: true })} />
        <input type="text" placeholder="address" {...register("address", { required: true })} />
        <input type="file" accept="image/*" placeholder="image" {...register("image", { required: true })} />



        {/* <input
          type="file"
          accept="image/*"
          {...register('image', { required: true })}
        /> */}

        <button type='submit'>Submit</button>
      </form>

    </div>
  )
}

export default Form