import axios from 'axios';

// fetch api data
axios.get('https://barebone-2lfyi6wdba-uc.a.run.app/openapi.json')
  .then(res => {
    const apiData = res.data;
    console.log(apiData);
  })
  .catch(error => {
    console.error('Error fetching API data:', error);
  });

// create message
const createMsg = (context: string, class_name: string, parent: HTMLElement) => {
  const msg = document.createElement("div");
  msg.classList.add("msg");
  msg.classList.add(class_name);
  if (class_name == "user-msg") {
    msg.innerHTML = context.toString();
  } else {
    // random response
    const resp = [
      "This is a great question but I don't know the answer :)))",
      "I really don't know -.-",
      "Google is free out there =.=",
      "Try to find out by yourself =.-",
      "Ask your mom...",
    ];
    const rand = Math.floor(Math.random() * resp.length);
    msg.innerHTML = resp[rand];
  }
  parent.appendChild(msg);
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("Done loading chat component");
  const body = document.querySelector(".body") as HTMLElement;

  const sendBtn = document.querySelector(".footer-btn") as HTMLElement;
  const userinp = document.querySelector(".footer-input") as HTMLInputElement;

  sendBtn.addEventListener("click", async () => {
    const userInput = userinp.value.trim();
    if (userInput) {
      createMsg(userInput, "user-msg", body);
      try {
        const response = await axios.get('https://barebone-2lfyi6wdba-uc.a.run.app/SynapticQA', {
          params: {
            question: userInput
          }
        });
        const botResponse = response.data; // assume API returns bot response directly
        createMsg(botResponse, "bot-msg", body);
      } catch (error) {
        console.error('Error sending message:', error);
      }
      body.scrollTop = body.scrollHeight;
      userinp.value = "";
    }
  });

  userinp.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      sendBtn.click();
    }
  });

  window.addCleanup(() => sendBtn.removeEventListener("click", () => {}));
});
