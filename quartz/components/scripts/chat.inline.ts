import axios from "axios";
import cors from "cors";
import markdownit from 'markdown-it'
import showdown from 'showdown'
// fetch api data
// axios.get('https://barebone-2lfyi6wdba-uc.a.run.app/openapi.json')
//   .then(res => {
//     const apiData = res.data;
//     console.log(apiData);
//   })
//   .catch(error => {
//     console.error('Error fetching API data:', error);
//   });

// create message
const md = markdownit("commonmark")
var converter = new showdown.Converter()
    // text      = '# hello, markdown!',
    // html      = converter.makeHtml(text);
const createMsg = (
  context: string,
  class_name: string,
  parent: HTMLElement
) => {
  const msg = document.createElement("div");
  msg.classList.add("msg");
  msg.classList.add(class_name);
  if (class_name == "user-msg") {
    msg.innerHTML = context.toString();
  } else {
    // random response
    msg.innerHTML = converter.makeHtml(context.toString());
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
    const loadingDiv = document.createElement("ReactMarkdown");

    if (userInput) {
      createMsg(userInput, "user-msg", body);
      userinp.value = "";
      loadingDiv.classList.add("msg");
      loadingDiv.classList.add("bot-msg");
      loadingDiv.innerHTML = converter.makeHtml("*Loading...*")
      body.appendChild(loadingDiv);
      body.scrollTop = body.scrollHeight;
      try {
        axios
          .get("https://barebone-2lfyi6wdba-uc.a.run.app/SynapticAI", {
            params: { question: userInput },
          })
          .then((res) => {
            body.removeChild(loadingDiv);
            const botResponse = res.data;
            console.log(botResponse);
            createMsg(botResponse, "bot-msg", body);

            // const paras = botResponse.split("\n");
            // paras.forEach((element: string, index: number) => {
            //   if (element.length != 0) {
            //     setTimeout(
            //       () => {
            //         createMsg(element, "bot-msg", body);
            //         body.scrollTop = body.scrollHeight;
            //       },
            //       700 + index * 100
            //     );
            //   }
            // });
          })
          .catch((error) => {
            console.error("Error fetching API data:", error);
          });
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  });

  userinp.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      sendBtn.click();
    }
  });

  window.addCleanup(() => sendBtn.removeEventListener("click", () => {}));
});
