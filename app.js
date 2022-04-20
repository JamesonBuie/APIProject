/* 
Data names
Logo = strTeamLogo
Description = strDescriptionEN
Year formed = intFormedYear
Stadium photo = strStadiumThumb
Jersey = strTeamJersey

*/




async function getSportsData() {
   
    try {
       const dataPointOne = await axios.get(`https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=MLB`);
       console.log(`Get request was successful`);
       console.log(dataPointOne.data.teams);
       console.log(`=======`);
    } catch(err){
        console.log(`Get request was not successful`);
        console.log(err);
    }
}
getSportsData();

