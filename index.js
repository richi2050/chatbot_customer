'use strict';
const BootBot = require('bootbot');
const config = require('config');
const echoModule = require('./modules/echo');

const bot = new BootBot({
  accessToken: config.get('accessToken'),
  verifyToken: config.get('verifyToken'),
  appSecret: config.get('appSecret')
});

/**
 * Demo handler to echo back whatever the user says.
 * Feel free to delete this handler and start hacking!
 */
const disableInput = false;


bot.setGreetingText('Hey Hola! Bienvenido a nuestro asistente virtual, Apoyate del menu !!!');

/*
bot.setGetStartedButton((payload, chat) => {
  const texto1 = `Hola Bienvenido. En que te puedo ayudar?, Estas buscando algo en especial? Apoyate de nuetro menu`;
  const texto2 = `😎🤖🍻🍺🎉`;
  const option = { typing: true };
  chat.say(texto1, option)
  .then(() =>  chat.say(texto2, option));
}); */

bot.on('message', (payload, chat) => {
  const welcome1 = `Hey Hola lo siento !`;
  const welcome2 = `😢😓`;
  const welcome3 = `No puedo ayudarte con esta petición`;
  const welcome4 = `No encontraste lo que buscabas?`;
  const welcome5 = `Lo lamentamos mucho deja tu comentario y pronto te responderemos !!`;
  const welcome6 = `☺🤗🙌🎉🎉`;
  const options = { typing: true };
  chat.say(welcome1, options)
    .then( () => { chat.say(welcome2, options)
      .then( () =>{ chat.say(welcome3, options)
        .then( () =>{ chat.say(welcome4, options)
          .then( () =>{ chat.say(welcome5, options)
            .then( () =>{ chat.say(welcome6, options) })
              })
            })
          })
      });
});

bot.setGetStartedButton((payload, chat) => {
  console.log('entra setGetStartedButton');
  const welcome1 = `Hey Hola Bienvenido !`;
  const welcome2 = `😎🤖🍻🍺🎉`;
  const welcome3 = `En que te puedo ayudar?`;
  const welcome4 = `Estas buscando algo en especial?`;
  const welcome5 = `Apoyate de nuestro menu`;
  const options = { typing: true };
  chat.say(welcome1, options)
    .then( () => { chat.say(welcome2, options)
      .then( () =>{ chat.say(welcome3, options)
        .then( () =>{ chat.say(welcome4, options)
          .then( () =>{ chat.say(welcome5, options) 
              })
            })
          })
      });
});


bot.setPersistentMenu([
  {
    title: 'El Cubil Wayabas Beer',
    type: 'nested',
    call_to_actions: [
      {
        title: 'Bebidas',
        type: 'postback',
        payload: 'DRINKS_PAYLOAD'
      },
      {
        title: 'Que Servicios tenemos?',
        type: 'postback',
        payload: 'SERVICES_PAYLOAD'
      },
      {
        title: 'Contactanos',
        type: 'postback',
        payload: 'CONTACT_INFO_PAYLOAD'
      }
    ]
  },
  {
    title: 'Donde estabos ubicados ?',
    type: 'web_url',
    url: 'https://www.google.com.mx/maps/place/WAYABAS+BEER/@19.262361,-99.5532533,17.5z/data=!4m5!3m4!1s0x85cd8b2f05b83d49:0x3f7ce0b1b430bad2!8m2!3d19.2620636!4d-99.5540084?shorturl=1'
  }
], disableInput);



bot.on('postback:SERVICES_PAYLOAD', (payload, chat) => {
  console.log('SERVICES_PAYLOAD');
  const senderId = payload.sender.id;
  const options = { typing: true };
  bot.sendListTemplate(senderId,[
    {
        "title": "El Cubil",
        "image_url": "https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/54203897_2236647039729834_4682318125704675328_n.jpg?_nc_cat=110&_nc_ht=scontent.fmex5-1.fna&oh=4674f7ecc7509b5eee7f77f478cfb235&oe=5D073733",
        "subtitle": "Cerveza",
    },
    {
        "title": "El Cubil Wayabas Beer",
        "image_url": "https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/53136666_2219721258089079_3068919978859167744_n.jpg?_nc_cat=102&_nc_eui2=AeFQL8LRaNqUpdKW6SkGJ99zmVEH9RqhaZIkqGMnQw_j5wru_k8U4kcGV8INAAqSa5vpUYfhL8NyVWyBaG06eVHk7AxFDZw0rU2DDvjD1hWWUg&_nc_ht=scontent.fmex5-1.fna&oh=84353be12ca42323560c454f600c8ff9&oe=5D3BF60C",
        "subtitle": "Centro Chelero",
        "buttons": [
            {
                "type": "web_url",
                "title": "Donde Estamos ?",
                "url": 'https://www.google.com.mx/maps/place/WAYABAS+BEER/@19.262361,-99.5532533,17.5z/data=!4m5!3m4!1s0x85cd8b2f05b83d49:0x3f7ce0b1b430bad2!8m2!3d19.2620636!4d-99.5540084?shorturl=1'
            }
        ]
    },
    {
      "title": "Depósito Wayabas",
      "image_url": "https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/54203897_2236647039729834_4682318125704675328_n.jpg?_nc_cat=110&_nc_ht=scontent.fmex5-1.fna&oh=4674f7ecc7509b5eee7f77f478cfb235&oe=5D073733",
      "subtitle": "Depósito",
      "buttons": [
          {
              "type": "web_url",
              "title": "Donde Estamos ?",
              "url": 'https://www.google.com/maps/place/Dep%C3%B3sito+Wayabas/@19.2404544,-99.5487519,20.25z/data=!4m5!3m4!1s0x85cd8b4fbc8bda6d:0x4d470c11669bf4ff!8m2!3d19.2405681!4d-99.548607?hl=es-MX'
          }
      ]
    }
],options,options);
});

bot.on('postback:DRINKS_PAYLOAD', (payload, chat) => {
  console.log('DRINKS_PAYLOAD');
  const senderId = payload.sender.id;
  const options = { 
    typing: true,
    topElementStyle: "compact"
  };
  bot.sendListTemplate(senderId,[
    {
        "title": "Micheladas",
        "image_url": "https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/53136666_2219721258089079_3068919978859167744_n.jpg?_nc_cat=102&_nc_ht=scontent.fmex5-1.fna&oh=8e57802073bc0398e17e10d7e25e6fd7&oe=5D3BF60C",
        "subtitle": "Micheladas"
    },
    {
      "title": "Pitufos",
      "image_url": "https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/55897075_2258336927560845_3437815226718748672_n.jpg?_nc_cat=111&_nc_ht=scontent.fmex5-1.fna&oh=b2c07e7b5294cd64262af31704e94543&oe=5D4617BD",
      "subtitle": "Pitufos"
    },
    {
      "title": "Mangos",
      "image_url": "https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/54518923_2249309508463587_4156657868621217792_n.jpg?_nc_cat=111&_nc_ht=scontent.fmex5-1.fna&oh=5b91e7d5ba0907fc10ed26f8559318ae&oe=5D457DD0",
      "subtitle": "Mangos"
    },
    {
      "title": "Piñas Coladas",
      "image_url": "https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/56184298_2264347766959761_2953079118838628352_n.jpg?_nc_cat=111&_nc_ht=scontent.fmex5-1.fna&oh=ec1e1d1f7398581ece7d86c80712855e&oe=5D4C5F01",
      "subtitle": "Piñas Coladas"
    }
],options,options);


});

bot.on('postback:CONTACT_INFO_PAYLOAD', (payload, chat) => {
  const senderId = payload.sender.id;
  const options = { typing: true };
  bot.sendTemplate(senderId,{
    "template_type": "button",
    "text": "Hola, Buscas algo en especial, ¿Quieres llamarnos?",
      "buttons": [
        {
          "type": "phone_number",
          "title": "Llamanos",
          "payload": "+5217227560439"
        }
      ]
    },options);
});




bot.start(config.get('botPort'));
