import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    apellido: {
      type: String,
      required: true,
    },
    documento: {
      type: String,
      required: true,
      unique: true,
    },
    crreo_institu: {
      type: String,
      required: true,
    },
    rol: {
      nombre: String,
      dependencia: String,
      estado: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Usuario", usuarioSchema);
