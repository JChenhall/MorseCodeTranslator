    const morse = {
      a: "._",
      b: "_...",
      c: "_._.",
      d: "_..",          
      e: ".",
      f: ".._.",
      g: "__.",
      h: "....",
      i: "..",
      j: ".____",
      k: "_._",
      l: "._..",
      m: "__",
      n: "_.",
      o: "___",
      p: ".__.",
      q: "__._",
      r: "._.",
      s: "...",
      t: "_",
      u: ".._",
      v: "..._",
      w: ".__",
      x: "_.._",
      y: "_.__",
      z: "__..",
      1: ".___",
      2: "..___",
      3: "...__",
      4: "...._",
      5: ".....",
      6: "_....",
      7: "__...",
      8: "___..",
      9: "____.",
      0: "_____",
      " ": "/",
      ".": "._._._", 
      ",": "_.._",
      ":": "_...",
      "?": ".._..", 
      "'": ".__.", 
      "-": "_...._", 
      "/": "_.._.",  
      "(": "_._.",  
      ")": "_._._", 
      "\"": "._.._.", 
      "@": "._._.",
      "=": "_..._",   
      "&": "._...", 
      ";": "_._._.", 
      "+": "._._.",
      "_": ".._.__", 
      "$": "..._.._",
      "!": "__.__.__"
    };
    
    export let translateEnglishToMorse = (input) => {
    
         let convert = input;
         console.log(convert)
        convert = convert.toLowerCase();
        convert = convert.split("");
        console.log(convert)
        for (let i = 0; i < input.length; i++) {
          convert[i] = morse[convert[i]]
          console.log(convert);
        }

        convert = convert.join(" ");
        console.log(convert)
        return convert;
        // console.log(conv);
        // out.innerHTML = conv;
      // });
};


