const rwClient = require("./twitterClient");
const CronJob = require("cron").CronJob;


const tweet = async () => {
    try{
        await rwClient.v2.tweet("Que tistreza!")
    }catch (e){
        console.error(e)
    }
}

const job = new CronJob ("* 4 * * *", () =>{
    console.log("Cron job is starting!")
    tweet()
})

job.start();
