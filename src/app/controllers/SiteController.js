class SiteController {
    //GET /Site
    index(req, res) {
        res.render('home');
    }

    search(req, res) {
        res.render('SEARCH');
    }
}

module.exports = new SiteController();
