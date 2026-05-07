const developers=[
    {name:'Ahmed',age:35,job:'Backend',salary:8000,workdaysforweek:5},
    {name:'Aymen',age:'25',job:'Flutter',salary:6000,workdaysforweek:6},
    {name:'Mahmoud',age:30,job:'Frontend',salary:7000,workdaysforweek:6},
    {name:'Ola',age:'37',job:'Backend',salary:10000,workdaysforweek:5},
    {name:'Maged',age:'23',job:'Backend',salary:8500,workdaysforweek:6},
    {name:'Hamdy',age:'28',job:'Frontend',salary:5000,workdaysforweek:5},
    {name:'Yasmine',age:28,job:'Backend',salary:10000,workdaysforweek:5},
    {name:'Gamal',age:26,job:'Flutter',salary:8000,workdaysforweek:5},
    {name:'Rashed',age:'33',job:'Backend',salary:10000,workdaysforweek:5},
    {name:'Hada',age:'25',job:'Backend',salary:10000,workdaysforweek:5}
];
console.table(developers);
const result1=developers.filter(developer=>developer.salary>=8000 && Number(developer.age)<30).map(developer=>(
    {
        ...developer,
        name:developer.name.toUpperCase(),
        age:Number(developer.age)
    }
));
console.table(result1);
// Another Solution
let result2=[];
for(let i=0;i<developers.length;i++){
    let dev=developers[i]
    if(dev.salary>=8000 && Number(dev.age)<30){
        result2.push({
            ...dev,
            name:dev.name.toUpperCase(),
            age:Number(dev.age)
        });
    }

};
console.table(result2);
// Another Solution
let result3=[];
for(let dev of developers){
    if(dev.salary>=8000 && Number(dev.age)<30){
        result3.push({
            ...dev,
            name:dev.name.toUpperCase(),
            age:Number(dev.age)
        });
    }
}
console.table(result3);

