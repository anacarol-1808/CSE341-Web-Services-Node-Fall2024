const carolRoute = (req, res) => {
    res.send("Carol Faccinetto");
};

const felipeRoute = (req, res) => {
    res.send("Felipe Faccinetto");
};
 
  
module.exports = {
    carolRoute,
    felipeRoute,
}