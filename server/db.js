var mysql= require("mysql");
var express= require("express");
var bodyparser= require("body-parser");
const path= require("path");
const multer=require("multer");
var cors=require("cors");
const { log } = require("console");

var app=express();
app.use(express.json());
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(cors());
app.use("/imgupload",express.static("imgupload"));

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"home",
});

const storage=multer.diskStorage({
    destination:path.join('./imgupload/'),
    filename:function(req,file,callback){
        callback(null,Date.now()+ '-'+path.extname
    (file.originalname))
    }

    
})

app.post("/api/addpkg", (req, res) => {
    const { name, email, pass } = req.body;
    
    if (!name || !email || !pass) {
        return res.status(400).send({ error: "All fields are required" });
    }

    const insert = "INSERT INTO login (name, email, pass) VALUES (?, ?, ?)";
    con.query(insert, [name, email, pass], (err, result) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).send({ error: "Failed to add package" });
        }
        res.send({ message: "Data Submitted" });
    });
});
   
app.post("/api/homepkg", (req, res) => {
    let upload = multer({ storage: storage }).single('filename');
    upload(req, res, function (err) {
        if (err) {
            return res.status(500).send({ error: "Failed to upload file" });
        }
        if (!req.file) {
            return res.status(400).send({ error: "File not found" });
        }

        const { pname, ptype, padd, date } = req.body;
        const filename = req.file.filename;

        if (!pname || !ptype || !padd || !date) {
            return res.status(400).send({ error: "All fields are required" });
        }

        const insert = "INSERT INTO pro (pname,ptype, padd, date, img) VALUES (?, ?, ?, ?, ?)";
        con.query(insert, [pname, ptype, padd, date, filename], (err, result) => {
            if (err) {
                console.error("Database error:", err);
                return res.status(500).send({ error: "Failed to add car package" });
            }
            res.send({ message: "Data Submitted" });
        });
    });
});

app.post("/api/data_verify", (req, resp) => {
    
    var email = req.body.email;
    var pass = req.body.pass;

    
    console.log(email);

    const query = "SELECT * FROM login WHERE email=? AND pass=?";
    con.query(query, [email, pass], (err, result) => {
        if (err) {
            resp.status(500).send({ error: "Database error" });
            return;
        }
        if (result.length > 0) {
            resp.send(result);
        } else {
            resp.send({ message: "Wrong Email or Password" });
        }
    });
}); 

app.get("/api/home", (req, res) => {
    const query = "SELECT * FROM pro"; 
    con.query(query, (err, results) => {
        if (err) {
            res.status(500).send({ error: "Failed to fetch property records" });
        } else {
            res.json(results);
        }
    });
});

app.delete("/api/home/:pid", (req, res) => {
    const pId = req.params.pid;
    const deleteQuery = "DELETE FROM pro WHERE pid = ?";
    con.query(deleteQuery, [pId], (err, result) => {
        if (err) {
            res.status(500).send({ error: "Failed to delete property record" });
        } else {
            res.send({ message: "Record deleted successfully" });
        }
    });
});

app.post("/api/managepkg", (req, res) => {
    const { stype, date, cost, hid } = req.body; // Ensure vehicle_id is included here as well
    const insert = "INSERT INTO manage (stype, date, cost, hid) VALUES (?, ?, ?, ?)";
    con.query(insert, [stype, date, cost, hid], (err, result) => {
        if (err) {
            console.error("Database error:", err);
            res.status(500).send({ error: "Failed to manage package" });
        } else {
            res.send({ message: "Data Submitted" });
        }
    });
});

app.get("/api/managepkg", (req, res) => {
    const query = "SELECT * FROM manage"; 
    con.query(query, (err, results) => {
        if (err) {
            res.status(500).send({ error: "Failed to fetch maintenance records" });
        } else {
            res.json(results);
        }
    });
});


    

var port=1337;
app.listen(port,()=>{
    console.log("Connected");
});

con.connect(function(error){
    // if(error)
    //     throw error;
    console.log("DB IS Connected");
});

