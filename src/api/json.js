

const API_KEY = 'test_9b7db3d991341c6073d6f07823eb863b28372ae3dffedd8074a9b8241ed8b74f4e63142f51c36ec452db55f2c5efc19e'
const DATE = '2024-04-29';
 export async function getRank(){
    const response = await fetch(`https://open.api.nexon.com/maplestory/v1/ranking/overall?date=${DATE}`,{
        headers:{
            'x-nxopen-api-key':API_KEY
        }
    })
     const data = await response.json();

    console.log(data.ranking);
    return data.ranking;
}

export async function getCharacterInformation(name){
     const response = await fetch(`https://open.api.nexon.com/maplestory/v1/id?character_name=${name}`,{
         headers:{
             'x-nxopen-api-key':API_KEY
         }
     });
     const data = await response.json();
     console.log(data.ocid);
     return data.ocid;
}
export async function getCharacterDetail(ocid){
    const response = await fetch(`https://open.api.nexon.com/maplestory/v1/character/basic?ocid=${ocid}`,{
        headers:{
            'x-nxopen-api-key':API_KEY
        }
    });
    const data = await response.json();
    console.log(data);
    return data;
}

