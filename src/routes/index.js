const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);

    app.use('/', siteRouter);
    // app.get("/", (req, res) => {
    //   res.render("home");
    // });

    // app.get('/news', (req, res) => {
    //   // console.log(req.query.q);
    //   res.render('news');
    // });

    // app.get("/search", (req, res) => {
    //   // console.log(req.query.q);
    //   res.render("search");
    // });

    // app.post("/search", (req, res) => {
    //   console.log(req.body);
    //   res.render("search");
    // });
}

module.exports = route;
