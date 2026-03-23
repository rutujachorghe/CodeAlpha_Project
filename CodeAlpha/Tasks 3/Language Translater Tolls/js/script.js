 async function translateText() {
      const text = document.getElementById("inputText").value;
      const source = document.getElementById("sourceLang").value;
      const target = document.getElementById("targetLang").value;

      if (!text) {
        alert("Please enter text");
        return;
      }

      try {
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${source}|${target}`);
        const data = await response.json();
        document.getElementById("outputText").innerText = data.responseData.translatedText;
      } catch (error) {
        document.getElementById("outputText").innerText = "Error in translation";
      }
    }

    function copyText() {
      const text = document.getElementById("outputText").innerText;
      navigator.clipboard.writeText(text);
      alert("Copied to clipboard!");
    }

    function speakText() {
      const text = document.getElementById("outputText").innerText;
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = document.getElementById("targetLang").value;
      window.speechSynthesis.speak(speech);
    }