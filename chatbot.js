class Chatbot {
    constructor() {
        this.context = {
        };
        this.responses = {
            greetings: ["¡Hola! ¿Cómo estás?", "¡Hola! ¿Cómo te va?", "¡Hola! ¿Qué tal, todo bien?"],
            farewell: ["Adiós, ¡que tengas un buen día!", "Hasta luego, ¡cuídate!", "¡Nos vemos pronto!"],
            thanks: ["De nada, ¿en qué más te puedo ayudar?", "¡Con gusto! ¿Hay algo más?"],

            si: ["super", "que bueno, exelente"],
            limber1: ["hola me llamo limber, soy el creador de esta pagína",],
            limber2: ["usted esta conversando con chat.RCL limber"],
            bien: ["Que bien me alegro", "Super",],
            mal: ["Que pena", "Que mal me da tristeza"],
            como_estas: ["Muy bien y usted", "Bien y usted"],
            informacion_personal: ["Lo siento, no le puedo dar esa informacion"],
            aburrido: ["Sal a jugar", "Deberia salir a dar unas vueltas"],
            Sal_a_jugar:["Talvez puede ir a jugar futbol", "Puede ir a jugar con un amigo"],
            no: ["Es tu desición"],
            okey: ["Bueno hasta luego", "Bueno cuidate"],
            juego:['"Valle de Stardew": Un simulador de granja que también permite interactuar con la comunidad y explorar cuevas.', "Call of Duty: Moderno", '"Plants vs. Zombies 2": Un juego de estrategia de defensa de torres con una jugabilidad adictiva y divertida.', '"PUBG Móvil": Un popular juego de batalla real con acción', '"Eternium": Un RPG de acción con una buena historia, combate fluido y una gran cantidad de personal'],
            musica:['Pop: Artistas como Taylor Swift, Dua Lipa, y Ed Sheeran.', 'Jazz: Artistas como Miles Davis, John Coltrane, y Ella Fitzgerald.', 'Música Electrónica: DJs como Daft Punk, Avicii, y Calvin Harris.'],
            musica2:['Unas de las musicas que puedes escuchar. Pop: Artistas como Taylor Swift, Dua Lipa, y Ed Sheeran.', 'Unas de las musicas que puedes escuchar. Jazz: Artistas como Miles Davis, John Coltrane, y Ella Fitzgerald.', 'Unas de las musicas que puedes escuchar. Música Electrónica: DJs como Daft Punk, Avicii, y Calvin Harris.'],
            mejor_jugador:['Lionel Messi: Con múltiples Balones de Oro y una carrera destacada en el FC Barcelona y el PSG, es ampliamente considerado uno de los mejores de todos los tiempos.'],

            fallback: ["Lo siento, no te entiendo bien.", "¿Podrías repetirlo?", "No estoy seguro de cómo responder a eso.", "no puedo responderle por el momento. el chat.RCL, aun falta en desarrollarse"],
        };
        this.learnedResponses = {
        };
    }

    processInput(input) {
        const cleanedInput = input.toLowerCase().trim();
        const words = cleanedInput.split(" ");
        if (this.checkForContext(words)) {
            return this.handleContext(words);
        }

        if (this.learnedResponses[cleanedInput]) {
            return this.learnedResponses[cleanedInput];
        }


        if (words.includes("hola") || words.includes("Hola") || words.includes("HOLA") || words.includes("buenos días")) {
            return this.getRandomResponse("greetings");/** hola */
        } else if (words.includes("adiós") || words.includes("hasta luego") || words.includes("adios")) {
            return this.getRandomResponse("farewell"); /** despedida */
        } else if (words.includes("gracias") || words.includes("gracias")) {
            return this.getRandomResponse("thanks"); /** agradecimientos */
        } else if (words.includes("si") || words.includes("Si") || words.includes("SI")){
            return this.getRandomResponse("si")
        } else if (words.includes("como") && words.includes("te") && words.includes("llamas") || words.includes("Como") && words.includes("te") && words.includes("llamas") || words.includes("Como") && words.includes("Te") && words.includes("Llamas") || words.includes("COMO") && words.includes("TE") && words.includes("LLAMAS") || words.includes("que") && words.includes("te") && words.includes("llamas") || words.includes("Que") && words.includes("te") && words.includes("llamas")){
            return this.getRandomResponse("limber1"); /** respuesta de mi nombre */
        } else if (words.includes("con") && words.includes("quien") && words.includes("hablo")){
            return this.getRandomResponse("limber2"); /** respuesta: con quien hablo  */
        } else if (words.includes("bien")){
            return this.getRandomResponse("bien"); /** esta bien */
        } else if (words.includes("mal")){
            return this.getRandomResponse("mal"); /** esta mal */
        } else if ((words.includes("como") && words.includes("estas")) || (words.includes("Como") && words.includes("estas")) || (words.includes("que") && words.includes("tal")) || (words.includes("Que") && words.includes("tal"))){
            return this.getRandomResponse("como_estas"); /** respuesta de como estoy */
        } else if (words.includes("que") && words.includes("puedo") && words.includes("jugar") || words.includes("Que") && words.includes("puedo") && words.includes("jugar") || words.includes("no") && words.includes("se") && words.includes("que") && words.includes("jugar") || words.includes("No") && words.includes("se") && words.includes("que") && words.includes("jugar") || words.includes("no") && words.includes("se") && words.includes("que") || words.includes("No") && words.includes("se") && words.includes("que") && words.includes("jugar")){
            return this.getRandomResponse("Sal_a_jugar"); /** recomendacion de juegos en persona */
        } else if (words.includes("donde") && words.includes("vives") || words.includes("Donde") && words.includes("vives") || words.includes("donde") && words.includes("estas") || words.includes("Donde") && words.includes("estas") || words.includes("cuantos") && words.includes("años") && words.includes("tiene") && words.includes("usted") || words.includes("Cuantos") && words.includes("años") && words.includes("tiene") && words.includes("usted") || words.includes("cuantos") && words.includes("años") && words.includes("tiene") || words.includes("Cuantos") && words.includes("años") && words.includes("tiene") || words.includes("cuantos") && words.includes("años") && words.includes("tienes") || words.includes("Cuantos") && words.includes("años") && words.includes("tienes")){
            return this.getRandomResponse("informacion_personal"); /** no mostrar al preguntar cosas personales de mi */
        } else if (words.includes("aburrido") || words.includes("Aburrido") || words.includes("aburido") || words.includes("Aburido") || words.includes("estoy") && words.includes("aburrido") || words.includes("Estoy") && words.includes("aburrido")){
            return this.getRandomResponse("aburrido");/** respuestas de estar aburrido */
        } else if (words.includes("no") && words.includes("tengo") && words.includes("tiempo") || words.includes("No") && words.includes("tengo") && words.includes("tiempo")|| words.includes("no") && words.includes("se") || words.includes("No") && words.includes("se") || words.includes("no") || words.includes("No") ){
            return this.getRandomResponse("no"); /** respuesta de no */
        } else if (words.includes("ok") || words.includes("Ok") || words.includes("okey") || words.includes("Okey") || words.includes("esta") && words.includes("bien") || words.includes("Esta") && words.includes("bien")){
            return this.getRandomResponse("okey"); /** respuesta de okey */
        } else if ((words.includes("que") && words.includes("juego") && words.includes("me") && words.includes("recomiendas")) || (words.includes("Que") && words.includes("juego") && words.includes("me") && words.includes("recomiendas")) || words.includes("Que") && words.includes("juego") && words.includes("me") && words.includes("recomiendas") || words.includes("juego") && words.includes("que") && words.includes("me") && words.includes("recomiendas") || words.includes("Juego") && words.includes("que") && words.includes("me") && words.includes("recomiendas") || words.includes("que") && words.includes("juego") && words.includes("puedo") && words.includes("jugar") || words.includes("Que") && words.includes("juego") && words.includes("puedo") && words.includes("jugar") || words.includes("juego") || words.includes("Juego")){
            return this.getRandomResponse("juego"); /** recomendacion de juegos para celular */
        } else if (words.includes("que") && words.includes("musica") && words.includes("puedo") && words.includes("escuchar") || words.includes("Que") && words.includes("musica") && words.includes("puedo") && words.includes("escuchar") || words.includes("musica") || words.includes("")){
            return this.getRandomResponse("musica"); /** recomendar musicas */
        } else if (words.includes("quiero") && words.includes("escuchar") && words.includes("musica") || words.includes("Quiero") && words.includes("escuchar") && words.includes("musica")){
            return this.getRandomResponse("musica2"); /** quiere escuchar musica */
        } else if ( words.includes("mejor") && words.includes("jugador") || words.includes("Mejor") && words.includes("jugador") || words.includes("el") && words.includes("mejor") && words.includes("jugador") || words.includes("El") && words.includes("mejor") && words.includes("jugador") || words.includes("mejor") && words.includes("jugador") && words.includes("del") && words.includes("mundo") || words.includes("Mejor") && words.includes("jugador") && words.includes("del") && words.includes("mundo") || words.includes("quien") && words.includes("es") && words.includes("el") && words.includes("mejor") && words.includes("jugador") && words.includes("del") && words.includes("mundo") || words.includes("Quien") && words.includes("es") && words.includes("el") && words.includes("mejor") && words.includes("jugador") && words.includes("del") && words.includes("mundo") || words.includes("el") && words.includes("mejor") && words.includes("jugador") && words.includes("del") && words.includes("mundo") || words.includes("El") && words.includes("mejor") && words.includes("jugador") && words.includes("del") && words.includes("mundo")){
            return this.getRandomResponse("mejor_jugador"); /** respuesta al mejor jugador */
        }
        else {
            this.learnFromInput(cleanedInput);
            return this.getRandomResponse("fallback"); /** respuestas faltantes */
        }
        
    }

    getRandomResponse(category) {
        const responsesArray = this.responses[category];
        return responsesArray[Math.floor(Math.random() * responsesArray.length)];
    }

    checkForContext(words) {
        return words.includes("aprende") || words.includes("recuerda");
    }

    handleContext(words) {
        const commandIndex = words.indexOf("aprende");
        if (commandIndex !== -1 && words.length > commandIndex + 2) {
            const phraseToLearn = words.slice(commandIndex + 1).join(" ");
            this.learnedResponses[phraseToLearn] = "He aprendido algo nuevo: " + phraseToLearn;
            return "¡Gracias! Ahora he aprendido algo nuevo.";
        }

        const rememberIndex = words.indexOf("recuerda");
        if (rememberIndex !== -1 && words.length > rememberIndex + 2) {
            const rememberedPhrase = words.slice(rememberIndex + 1).join(" ");
            return this.learnedResponses[rememberedPhrase] || "No recuerdo nada sobre eso.";
        }

        return "No estoy seguro de cómo manejar eso.";
    }

    learnFromInput(input) {
        if (!this.learnedResponses[input]) {
            this.learnedResponses[input] = "¿Podrías explicar eso mejor?";
        }
    }
}

const chatbot = new Chatbot();

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (!userInput) return;

    document.getElementById('user-input').value = '';

    addMessageToChat('user', userInput);

    const botResponse = chatbot.processInput(userInput);

    setTimeout(() => {
        addMessageToChat('bot', botResponse);
        document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
    }, 1000);
}

function addMessageToChat(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);

    const textElement = document.createElement('div');
    textElement.classList.add('text');
    textElement.textContent = message;

    messageElement.appendChild(textElement);
    chatBox.appendChild(messageElement);
}