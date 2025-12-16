import express from "express";
import {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario,
} from "../controllers/usuario.controller.js";

const router = express.Router();

router.post("/", crearUsuario);       // CREATE
router.get("/", obtenerUsuarios);     // READ ALL
router.get("/:id", obtenerUsuarioPorId); // READ BY ID
router.put("/:id", actualizarUsuario); // UPDATE
router.delete("/:id", eliminarUsuario); // DELETE

export default router;
