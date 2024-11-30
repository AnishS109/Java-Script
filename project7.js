let companies = ["Bloomberg", "Microsoft", "uber", "Google", "Netflix"];
companies.shift();
companies.splice(1,1,"Ola");
companies.push("Amazon");

console.log(companies);