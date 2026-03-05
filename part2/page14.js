const stock=[
    {name:"Wipro",
        lastprice:200,
        currprice:250,
    },
    {name:"Deloitte",
        lastprice:100,
        currprice:150,
    }
]
function calc(obj){
    console.log(obj.lastprice)
    obj.growth=obj.currprice-obj.lastprice
    obj.growthpercent=(obj.growth/obj.lastprice)*100
    console.log(obj)

}
res1=calc(stock[0])
res2=calc(stock[1])

s1=stock[0].growthpercent
s2=stock[1].growthpercent
if(s1>s2){
    console.log(`${stock[0].name} has more growth`)
}
else{
    console.log(`${stock[1].name} has more growth`)
}