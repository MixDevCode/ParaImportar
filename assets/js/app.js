let installPrompt=null;const installButton=document.getElementById("botonApp");function disableInAppInstallPrompt(){installPrompt=null,installButton.setAttribute("hidden","")}window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),installPrompt=t,installButton.removeAttribute("hidden")}),installButton.addEventListener("click",async()=>{installPrompt&&(await installPrompt.prompt(),disableInAppInstallPrompt())});