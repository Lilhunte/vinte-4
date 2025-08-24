const WEBHOOK_URL = "https://boxer-rich-raccoon.ngrok-free.app/webhook/n8n";
const UNIQUE_KEY = (()=>{
  try{ const k=localStorage.getItem("v24_uid"); if(k) return k; const n=crypto.randomUUID(); localStorage.setItem("v24_uid", n); return n; }
  catch{ return String(Date.now()); }
})();
let messages = [];

function addMessageToChat(message, sender){
  messages.push({text:message, sender, timestamp: new Date().toLocaleTimeString()});
  const list = document.getElementById("chat-messages");
  if(!list) return;
  const bubble = document.createElement("div");
  const cls = sender==="user" ? "bg-black text-white ml-auto" : "bg-neutral-100";
  bubble.className = `max-w-[85%] w-fit px-3 py-2 rounded-2xl ${cls}`;
  bubble.innerText = message;
  list.appendChild(bubble);
  const ts = document.createElement("div");
  ts.className = "text-[10px] text-neutral-500 mt-1 " + (sender==="user"?"text-right":"text-left");
  ts.innerText = messages.at(-1).timestamp;
  list.appendChild(ts);
  list.scrollTop = list.scrollHeight;
}

async function sendMessage(message, action="text_input"){
  const input = document.getElementById("chat-input");
  if(!message.trim()) return;
  addMessageToChat(message, "user");
  if(input) input.value = "";
  try{
    const res = await axios.post(WEBHOOK_URL, {
      message, timestamp:new Date().toISOString(), key: UNIQUE_KEY, action
    }, { headers: { "Content-Type": "application/json" }});
    let data = res.data;
    if (typeof data === "string" && data.trim()){
      try { data = JSON.parse(data); } catch(e){
        console.error("Error parsing JSON response:", e);
        addMessageToChat("I received your message but had trouble processing the response.","omni");
        return;
      }
    }
    const omniResponse = data.output || data.response || data.message || "I received your message!";
    addMessageToChat(omniResponse, "omni");
  } catch (error){
    console.error("Error:", error);
    addMessageToChat("Sorry, I encountered an error processing your request.", "omni");
  }
}

function startVoice(){
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SR){ addMessageToChat("O seu navegador não suporta entrada por voz.", "omni"); return; }
  const rec = new SR();
  rec.lang = "pt-PT"; rec.interimResults = false;
  rec.onresult = (e)=> {
    const transcript = Array.from(e.results).map(r=>r[0].transcript).join(" ");
    sendMessage(transcript, "voice_input");
  };
  rec.onerror = ()=> addMessageToChat("Não consegui captar a sua voz. Tente novamente.", "omni");
  rec.start();
}

function mountChat(){
  const note = document.createElement("div");
  note.id="chat-note";
  note.className="fixed bottom-28 right-6 z-50 rounded-2xl bg-white/90 border p-3 text-sm max-w-[220px] shadow-soft animate-bounce";
  note.innerHTML="🗨️ <strong>Fale connosco em tempo real</strong>";
  document.body.appendChild(note);

  const btn = document.createElement("button");
  btn.id="chat-launcher";
  btn.setAttribute("aria-label","Abrir chat");
  btn.className="fixed bottom-6 right-6 z-50 rounded-full w-16 h-16 flex items-center justify-center shadow-2xl bg-black text-white font-semibold";
  btn.textContent="Chat";
  document.body.appendChild(btn);

  const panel = document.createElement("div");
  panel.id="chat-panel";
  panel.className="hidden fixed bottom-24 right-6 z-50 w-[min(92vw,380px)] h-[min(70vh,520px)] rounded-2xl bg-white/95 backdrop-blur border shadow-2xl flex flex-col";
  panel.innerHTML=`
    <div class="p-3 border-b font-semibold flex items-center justify-between">
      <span>Vinte & 4 · Atendimento</span>
      <button id="chat-close" aria-label="Fechar chat" class="w-8 h-8 rounded-full border hover:bg-neutral-100 flex items-center justify-center">✕</button>
    </div>
    <div id="chat-messages" class="flex-1 overflow-y-auto p-3 space-y-2"></div>
    <div class="p-3 border-t flex gap-2">
      <input id="chat-input" placeholder="Escreva a sua mensagem…" class="flex-1 border rounded-xl px-3 py-2"/>
      <button id="chat-send" aria-label="Enviar mensagem" class="px-4 py-2 rounded-xl bg-black text-white font-semibold">Enviar</button>
      <button id="chat-voice" aria-label="Enviar mensagem de voz" class="px-3 py-2 rounded-xl border">🎙️</button>
    </div>`;
  document.body.appendChild(panel);

  btn.addEventListener("click", ()=>{
    panel.classList.toggle("hidden");
    const visible=!panel.classList.contains("hidden");
    document.getElementById("chat-note")?.classList.toggle("hidden", visible);
    btn.textContent = visible ? "×" : "Chat";
    if (visible) {
        document.getElementById("chat-input").focus();
    }
  });
  document.getElementById("chat-close").addEventListener("click", ()=>{
    panel.classList.add("hidden"); btn.textContent="Chat"; note.classList.remove("hidden");
  });
  document.getElementById("chat-send").addEventListener("click", ()=> sendMessage(document.getElementById("chat-input").value));
  document.getElementById("chat-input").addEventListener("keydown", (e)=>{ if(e.key==="Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(e.target.value); } });
  document.getElementById("chat-voice").addEventListener("click", startVoice);

  panel.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.getElementById('chat-close').click();
    }
  });
}
document.addEventListener("DOMContentLoaded", mountChat);
