const logout = async (req, res) => {
    req.session.userId = undefined
    res.redirect("/");
}

module.exports= {logout}