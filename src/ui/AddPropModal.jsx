import React from 'react'
import AppNav from  '../ui/Appnav'
import styles from './AddPropModal.css'
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { addProperties } from '../services/apiProperties';
import { createUser } from '../services/apiUsers';

function AddPropModal() {
  const { register, handleSubmit} = useForm();
  const {mutate, isLoading} = useMutation({
    mutationFn: addProperties,
    onSuccess: ()=>{
      toast.success("Property added successfully")
    }})

  function onSubmit(data) {
    // mutate(data);
    // navigate(-1)
    console.log(data)
  }
  return (
    <div className='container3'>
      <AppNav/>
      <div className='container3'>
        <div className='form-container'>
          <h2>List a Property</h2>
          <form action="#" method="post" encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}/>
            <div className='comp'>
              <label htmlFor="title" className='labels'>Title</label>
              <input type="text" id="title" name="title" required {...register("title", {required: true})}/>
            </div>
            <div className='comp'>
              <label htmlFor="price" className='labels'>Price</label>
              <input type="text" id="price" name="price" required {...register("price", {required: true})}/>
            </div>
            <div className='comp'>
              <label htmlFor="description" className='labels'>Description</label>
              <textarea id="description" name="description" rows="4" required {...register("description", {required: true})}></textarea>
            </div>
            <div className='comp'>
              <label htmlFor="area" className='labels'>Carpet area</label>
              <input type="float" id="area" name="carpetarea" required {...register("area", {required: true})}/>
            </div>
            <div className='comp'>
              <label htmlFor="confroom" className='labels'>Conference room</label>
              <input type="text" name="conferenceroom" required {...register("conference_room", {required: true})}/>
            </div>
            <div className='comp'>
              <label htmlFor="rooms" className='labels'>Number of rooms</label>
              <input type="number" id="room" name="rooms" required {...register("rooms", {required: true})}/>
            </div>
            <div className='comp'>
              <label htmlFor="factors" className='labels'>Factors</label>
              <label htmlFor="property">Is your property furnished or not :</label>
              <select id="furniture" required {...register("Furniture", {required: true})}>
                <option value="furnished">Furnished</option>
                <option value="not_furnished">Not Furnished</option>
              </select>
            </div>
            <div className='comp'>
              <label htmlFor="property">Is your property for sale or rent  :</label>
              <select id="furniture" required {...register("manageprop", {required: true})}>
                <option value="furnished">Sale</option>
                <option value="not_furnished">Rent</option>
              </select>
            </div>
            <div className='comp'>
              <label htmlFor="city" className='labels'>City</label>
              <input type="text" id="city" name="city" required {...register("city", {required: true})}/>
            </div>
            <div className='comp'>
              <label htmlFor="address" className='labels'>Address</label>
              <input type="text" id="address" name="address" required {...register("address", {required: true})}/>
            </div>
            <div className='comp'>
              <label htmlFor="image" className='labels'>Image Upload</label>
              <input type="file" id="image" name="image" accept="image/*" required {...register("image", {required: true})}/>
              <label className="uploadbutton" htmlFor="image" >Choose Image</label>
            </div>
            </div>
            <div className='comp'>
              <button type="submit" className="submitbutton">Add</button>
            </div>
            <form/>
          </div>
        </div>
  )
}

export default AddPropModal