// import OpenAI from 'openai';
// import { openai } from '../..';

export const AiJokeService = async (jokeTopic: string) => {
  try {
    // const params: OpenAI.Chat.ChatCompletionCreateParams = {
    //   messages: [
    //     { 
    //       role: 'user', 
    //       content: `imagine you are an experienced comedian tasked with creating a joke with a given topic; ${jokeTopic}. In a JSON formatted response separating the setup and punchline`
    //     }
    //   ],
    //   max_tokens: 50,
    //   response_format: { "type": "json_object" },
    //   model: 'gpt-3.5-turbo-1106',
    // };
    // const chatCompletion: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create(params);

    // const jokes = []

    // for(let i = 0; i < chatCompletion.choices.length; i++) {
    //   const messageContent = chatCompletion.choices[i].message.content

    //   if(messageContent){
    //     jokes.push({
    //       ...JSON.parse(messageContent)
    //     })
    //   }
    // }

    // return { 
    //   success: true, 
    //   body: jokes
    // };

    return 'ok'
  } catch (err) {
    return { success: false, error: err };
  }
};
