import express from "express"
import {
    countByCity,
    createHotel,
    deleteHotel,
    getHotel,
    getHotels,
    updateHotel
} from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

//CREAR
router.post("/",verifyAdmin, createHotel);

//ACTUALIZAR
router.put("/:id", verifyAdmin, updateHotel);

//BORRAR
router.delete("/:id", deleteHotel);

//GEt
router.get("/:id", getHotel);

//GET ALL
router.get("/", getHotels);
router.get('/countByCity',countByCity);



export default router


//funciona todo hasta el minuto 01:25:00
//edita hoteles si soy admin
// agrega cuartos y los puedo borrar
// para entrar como admin
// admin: andiimoyano   password:1234
//user: deronielgue password:1234