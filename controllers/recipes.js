/*const data = require('./data.json')*/



exports.index = function(req, res){
    return res.render("admin/index")
}

exports.create = function(req, res){
    return res.render("admin/create")
}

exports.show = function(req, res){
    return res.render("admin/show")
}

exports.edit = function(req, res){
    return res.render("admin/edit")
}

exports.post = function(req, res){
    return res.redirect("admin/index")
}

exports.put = function(req, res){
    return res.redirect("admin/index")
}

exports.delete = function(req, res){
    return res.redirect("admin/index")
}