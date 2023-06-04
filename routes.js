module.exports = function(app, databaseService){

    app.get('/', (req,res) => {
        res.json({"test":"1"});
    });

    app.get('/peliculas', (req,res) => {
        res.json({"mensaje":"Peliculas!"});
    });

    app.post('/peliculas', (req,res) => {
        const nuevaPelicula = req.body;
        console.log(nuevaPelicula);

        databaseService.crearPelicula(nuevaPelicula)
        .then(()=>{
            res.json({"mensaje":"peliculas creada!"});
        }).catch(err => {
            res.status(500).json(err);
        })

       
    });
};