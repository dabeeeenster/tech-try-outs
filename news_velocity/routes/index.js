
/*
 * GET home page.
 */

var dao = require('../repository/dao.js');

exports.index = function(req, res){

    var content = {
        intro: "Comments velocity from Guardian Comment.",
        link1: "http://www.guardian.co.uk/help/insideguardian/2010/feb/03/zeitgeist",
        link2: "http://www.guardian.co.uk/zeitgeist"
    };

    dao.getNews(function (news) {
        res.render('index', { title: 'Guardian Zeitgeist', news: news, content: content });
    });
};