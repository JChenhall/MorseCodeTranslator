 const morse = {
    a: "._",
    b: "_ . . .",
    c: "_ . _ .",
    d: "_ . .",
    e: ".",
    f: ". . _ .",
    g: "_ _ .",
    h: ". . . .",
    i: ". .",
    j: ". _ _ _ _",
    k: "_ . _",
    l: ". _ . .",
    m: "_ _",
    n: "_ .",
    o: "_ _ _",
    p: ". _ _ .",
    q: "_ _ . _",
    r: ". _ .",
    s: ". . .",
    t: "_",
    u: ". . _",
    v: ". . . _",
    w: ". _ _",
    x: "_ . . _",
    y: "_ . _ _",
    z: "_ _ . .",
    1: ". _ _ _",
    2: ". . _ _ _",
    3: ". . . _ _",
    4: ". . . . _",
    5: ". . . . .",
    6: "_ . . . .",
    7: "_ _ . . .",
    8: "_ _ _ . .",
    9: "_ _ _ _ .",
    0: "_ _ _ _ _",
    " ": "/",
    ".": ". _ . _ . _", 
    ",": "_ . . _",
    ":": "_ . . .",
    "?": ". . _ . .", 
    "'": ". __ .", 
    "-": "_ . . . . _", 
    "/": "_ . . _ .",  
    "(": "_ . _ .",  
    ")": "_ . _ . _", 
    "\"": ". _ . . _ .", 
    "@": ". _ . _ .",
    "=": "_ . . . _",   
    "&": ". _ . . .", 
    ";": "_ . _ . _ .", 
    "+": ". _ . _ .",
    "_": ". . _ . __", 
    "$": ". . . _ . . _",
    "!": "__ . __ . __"
  };
  
  const input = document.getElementById("inp");
  const button = document.getElementById("butt");
  const output = document.getElementById("out");
  
  button.addEventListener("click", () => {
    let convert = input.value;
    convert = convert.toLowerCase();
    convert = convert.split("");
    for (let i = 0; i < convert.length; i++) {
      convert[i] = morse[convert[i]];
    }
    convert = convert.join(" ");
    console.log(convert);
    output.innerHTML = convert;
  });