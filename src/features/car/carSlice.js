import  {createSlice} from "@reduxjs/toolkit"
const initialState = {
    
  //  id:["models","modelx","c","d"],
    cars : [ { name: "Model S", linkid: "models"},{ name: "Model X", linkid: "modelx"},{ name: "Model Y", linkid: "modely"},{ name: "Model 3", linkid: "model3"}] 
}
    


const carSlice=createSlice({
    name:"car",
    initialState,
    reducers:{}

})

export const selectCars=state=>state.car.cars;
//export const selectId=state=>state.car.id;

export default carSlice.reducer