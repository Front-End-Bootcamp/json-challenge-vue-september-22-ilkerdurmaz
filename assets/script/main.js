import data from '../data/data.json';

function getGroup(groupName,data){
    const isThere=data.some(item=>item.group===groupName) //fonksiyona gönderilen grup isminin data içerisinde olup olmaması kontrolü
    if(isThere){
        const members=data.filter(member=>member.group===groupName) //bu gruba ait üye objelerinin filtrelenmesi
        return {//ödevde istenilen yapıda object literal döndürülmesi 
            group:groupName,
            "assistant":(members.find(member=>member.type=="assistant").name), //üye objeleri arasından asistan'ın bulunup isminin alınması
            "members":members.map(member=>member.name) //üye objelerinden üyelerin isimlerinin ayıklanması
        }
    }
    return `There isn't any ${groupName} member in this data.`  
}

function getGroups(data){
    if(data.length>0){
        const groupNames=[...new Set(data.map(member=>member.group))] //fonksiyona gönderilen data'daki objelerden grupların ayıklanması ve Set() methodu ile her öğrenin eşsiz hale getirilmesi
        console.log(groupNames.map(groupName=>getGroup(groupName,data))) //eşşiz gruplardan oluşan dizi değerlerinin tek tek getGroup() fonksiyonuna yollanması ve map ile bu grupların--
    }                                                                    //bulunduğu dizinin oluşturulması
}

getGroups(data)