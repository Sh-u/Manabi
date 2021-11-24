import DiscordJS, { Intents } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const client = new DiscordJS.Client({
    intents: [  
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ]
})

client.on('ready', () => { console.log(`rdy`)})

client.on('messageCreate', (msg) => {
    if (msg.content === 'kto'){
        msg.reply('pytal?');

    }
}); 

client.login(process.env.TOKEN);



