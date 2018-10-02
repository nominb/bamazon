var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazonDB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  products();
});

    var products =function(){
        //we are finished with our prompts, we now select products from our db with choices from user
        var query = "SELECT * FROM products"
        connection.query(query, function(err, results) {
            if(err) throw err;
            inquirer.prompt([
                {
                    name:"item_id",
                    type: "input",
                    message: "Select id for desired product",
                     function() {
                        var productArray = [];
                        for (var i=0; i<results.length; i++){
                            productArray.push(results[i].product_name);
                
                        }
                        return productArray;
                    },
                },
                {
                    name: "stock_quantity",
                    type: "input",
                    message: "How many products would you like?"
                }
            ])
            .then(function(answer){
                var chosenProduct = "SELECT * FROM products WHERE item_id = " + answer.stock_quanitity;
                connection.query(query,function(error,results){
                    if(answer.stock_quanitity <= results){
                        for (var i =0; i<results.length; i++) {
                            console.log("We have" + results[i].stock_quanitity + "" + results[i].product_name + "");
                        }
                    }
                        else{
                            console.log("We appologize for insufficient stock!");
                        }
                        products();
                    })
                };
