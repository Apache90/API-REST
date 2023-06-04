const databaseService = () => {
  const knex = require("knex")({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB,
    },
  });

  const table = "peliculas";

  const leerPelicula = ()=>{
    return knex(table).select();
  }

  const crearPelicula = ({nombre, genero, anio}) => {
    return knex(table).insert({
      nombre: nombre,
      genero: genero,
      anio: anio,
    });
  };

  const modificarPelicula = (id_pelicula, { nombre, genero, anio }) => {
    return knex(table).where("id_pelicula", id_pelicula).update({
      nombre: nombre,
      genero: genero,
      anio: anio,
    });
  };

  const eliminarPelicula = (id_pelicula) => {
    return knex(table).where("id_pelicula", id_pelicula).del();
  };

  return {
    crearPelicula,
    leerPelicula,
    modificarPelicula,
    eliminarPelicula,
  };
};


  
module.exports ={
    databaseService
}