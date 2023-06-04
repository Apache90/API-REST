module.exports = function (app, databaseService) {
  app.get("/", (req, res) => {
    res.json({ test: "1" });
  });

  app.get("/peliculas", (req, res) => {
    databaseService
      .leerPelicula()
      .then((peliculas) => {
        res.json(peliculas);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

  app.post("/peliculas", (req, res) => {
    const nuevaPelicula = req.body;
    console.log(nuevaPelicula);

    databaseService
      .crearPelicula(nuevaPelicula)
      .then(() => {
        res.json({ mensaje: "peliculas creada!" });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

  app.put("/peliculas/:id_pelicula", (req, res) => {
    const id_pelicula = req.params.id_pelicula;
    const peliculaActualizada = req.body;

    databaseService
      .modificarPelicula(id_pelicula, peliculaActualizada)
      .then(() => {
        res.json({ mensaje: "pelicula actualizada" });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

  app.delete("/peliculas/:id_pelicula", (req, res) => {
    const id_pelicula = req.params.id_pelicula;

    databaseService
      .eliminarPelicula(id_pelicula)
      .then(() => {
        res.json({ mensaje: "pelicula eliminada" });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });
};
