var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
{
  name: "Telus",
  province: "BC",
  sales: [ 100, 200, 400 ]
},
{
  name: "Bombardier",
  province: "AB",
  sales: [ 80, 20, 10, 100, 90, 500 ]
},
{
  name: "Telus",
  province: "SK",
  sales: [ 500, 100 ]
}
];


function calculateSales(sales) {
  var totalSales = 0;
  for (var i = 0; i < sales.length; ++i) {
    totalSales += sales[i];
  }
  return totalSales;
}

function calculateTax(sales, taxRate) {
  var totalSales = calculateSales(sales);
  return totalSales * taxRate;
}

function findTaxRate(tprovince, taxRates) {
  for (var currentProvince in taxRates) {
    if (currentProvince === tprovince) {
      return taxRates[currentProvince];
    }
  }
}


function calculateSalesTax(salesData, taxRates) {
  var salesTaxSheet = {};
  for (var i = 0; i < salesData.length; ++i) {
    var companyName = salesData[i].name;
    var companyProvince = salesData[i].province;
    var companySales = salesData[i].sales;
    var companyTax = findTaxRate(companyProvince, salesTaxRates);
    if (salesTaxSheet[companyName] === undefined) {
      salesTaxSheet[companyName] = {totalSales: 0, totalTaxes: 0};
      salesTaxSheet[companyName].totalSales = calculateSales(companySales);
      salesTaxSheet[companyName].totalTaxes = calculateTax(companySales, companyTax);
    } else {
      salesTaxSheet[companyName].totalSales += calculateSales(companySales);
      salesTaxSheet[companyName].totalTaxes += calculateTax(companySales, companyTax);
    }
  }
  return salesTaxSheet;
}


var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/