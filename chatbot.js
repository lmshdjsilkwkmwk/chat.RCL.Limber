class Chatbot {
        constructor() {
            this.context = {};
            this.responses = {
                greetings: ["¡Hola! en que lo puedo ayudar", "¡Hola! ¿Cómo estás?", "¡Hola! ¿Cómo te va?", "¡Hola! ¿Qué tal, todo bien?"],
                farewell: ["Adiós, ¡que tengas un buen día!", "Hasta luego, ¡cuídate!", "¡Nos vemos pronto!"],
                thanks: ["De nada, ¿en qué más te puedo ayudar?", "¡Con gusto! ¿Hay algo más?"],
                si: ["Super", "Que bueno, exelente"],
                limber1: ["Hola me llamo Limber, soy el creador de esta pagína"],
                limber2: ["Usted esta conversando con chat.RCL Limber"],
                bien: ["Que bien me alegro", "Super"],
                mal: ["Que pena", "Que mal"],
                como_estas: ["Muy bien y usted", "Bien y usted"],
                informacion_personal: ["Lo siento, no le puedo dar esa información"],
                Sal_a_jugar: ["Juegos", "Si le gusta puede jugar, fútbol", "Juegos en tu dispositivo"],
                aburrido: ["Si estas aburrido Tal vez deberias jugar algún juego", "Deberias escuchar algún música", "Podrías ver algún película"],
                no: ["Es tu desición"],
                okey: ["Bueno hasta luego", "Bueno cuidate"],
                juego: ['"Valle de Stardew": Un simulador de granja que también permite interactuar con la comunidad y explorar cuevas.', 
                        "Call of Duty: Moderno", 
                        '"Plants vs. Zombies 2": Un juego de estrategia de defensa de torres con una jugabilidad adictiva y divertida.', 
                        '"PUBG Móvil": Un popular juego de batalla real con acción', 
                        '"Eternium": Un RPG de acción con una buena historia, combate fluido y una gran cantidad de personal'],
                musica: ['Pop: Artistas como Taylor Swift, Dua Lipa, y Ed Sheeran.', 
                        'Jazz: Artistas como Miles Davis, John Coltrane, y Ella Fitzgerald.', 
                        'Música Electrónica: DJs como Daft Punk, Avicii, y Calvin Harris.'],
                musica2: ['Unas de las musicas que puedes escuchar. Pop: Artistas como Taylor Swift, Dua Lipa, y Ed Sheeran.', 
                        'Unas de las musicas que puedes escuchar. Jazz: Artistas como Miles Davis, John Coltrane, y Ella Fitzgerald.', 
                        'Unas de las musicas que puedes escuchar. Música Electrónica: DJs como Daft Punk, Avicii, y Calvin Harris.'],
                mejor_jugador: ['Lionel Messi: Con múltiples Balones de Oro y una carrera destacada en el FC Barcelona y el PSG, es ampliamente considerado uno de los mejores de todos los tiempos.'],
                que_entiendes:["Entiendo palabras basicas", "Solo entiendo palabras basicas", "Entiendo algunas preguntas, de acuerdo a eso le respondo. aun falta en desarrollarme", "Palabras basicas", "Si quiere podemos hablar un rato. me disculpas si no lo podre responderlo."],
                hora: ["La hora actual en Bolivia es: ", "La hora es: ", "La hora actual es: ", "La hora Boliviana es", "Hora de Bolivia: ", "Si usted no sabia la hora. La hora es: "], // Añadido para la pregunta de la hora
                fecha: ["Hoy es, ", "La fecha es, ", "La fecha actual en Bolivia es: ", "La fecha es: ","Hoy es"], // Añadido para la fecha
                año: ["El año en el que estamos es: ", "El año actual en Bolivia es: ", "Se olvido el año?. El año es: "], // Añadido para el año
                mes: ["El mes en el que estamos es: ", "El mes es: ", "El mes actual en Bolivia es: "], // Añadido para el mes
                dia: [ "Hoy es, ", "El día de hoy en Bolivia es: "], // Añadido para el día
                matematicas: ["El resultado es: "],
                fallback: ["Lo siento, no te entiendo bien.", "¿Podrías repetirlo?", "No estoy seguro de cómo responder a eso.", "No puedo responderle por el momento. El chat.RCL aún esta en desarrollo"]
            };
            this.learnedResponses = {};
        }
    
        getRandomResponse(key) {
            const responses = this.responses[key];
            return responses[Math.floor(Math.random() * responses.length)];
        }
        getCurrentTimeInBolivia() {
            const now = new Date();
            // Obtiene la hora en UTC
            const utc = now.getTime() + now.getTimezoneOffset() * 60000;
            // Calcula la diferencia horaria de Bolivia (UTC-4)
            const boliviaTime = new Date(utc + (3600000 * -4));
            return boliviaTime.toLocaleTimeString('es-BO', { timeZone: 'America/La_Paz' });
        }
        getCurrentDateInBolivia() {
            const now = new Date();
            const utc = now.getTime() + now.getTimezoneOffset() * 60000;
            const boliviaDate = new Date(utc + (3600000 * -4));
            return boliviaDate.toLocaleDateString('es-BO', { timeZone: 'America/La_Paz' });
        }
    
        getCurrentYearInBolivia() {
            const now = new Date();
            const utc = now.getTime() + now.getTimezoneOffset() * 60000;
            const boliviaDate = new Date(utc + (3600000 * -4));
            return boliviaDate.getFullYear();
        }
    
        getCurrentMonthInBolivia() {
            const now = new Date();
            const utc = now.getTime() + now.getTimezoneOffset() * 60000;
            const boliviaDate = new Date(utc + (3600000 * -4));
            return boliviaDate.toLocaleString('es-BO', { month: 'long', timeZone: 'America/La_Paz' });
        }
    
        getCurrentDayInBolivia() {
            const now = new Date();
            const utc = now.getTime() + now.getTimezoneOffset() * 60000;
            const boliviaDate = new Date(utc + (3600000 * -4));
            return boliviaDate.toLocaleString('es-BO', { weekday: 'long', timeZone: 'America/La_Paz' });
        }


        evaluateMathExpression(expression) {
            try {
                // Evalúa la expresión matemática
                const result = eval(expression);
                if (isNaN(result)) throw new Error("Resultado no es un número");
                return this.responses['matematicas'][0] + result;
            } catch (error) {
                return "Lo siento, no puedo realizar esa operación matemática.";
            }
        }
    
        processInput(input) {
            const cleanedInput = input.toLowerCase().trim();
            const responseMap = {
                "hola": "greetings", "hola chat": "greetings", "hola chat.rcl": "greetings", "hola chat.rcl-limber": "greetings",

                "adiós": "farewell", "adios": "farewell", "a dios": "farewell", "hasta luego": "farewell", "chau": "farewell", "me boy": "farewell", "me boy": "farewell",

                "gracias": "thanks",

                "si": "si",

                "como te llamas": "limber1", "cómo te llamas": "limber1", "¿como te llamas?": "limber1", "¿cómo te llamas?": "limber1", 

                "con quien hablo": "limber2", "¿con quien hablo?": "limber2", "¿con quién hablo?": "limber2",

                "bien": "bien",

                "mal": "mal",

                "como estas": "como_estas", "como estás": "como_estas", "¿como estas?": "como_estas", "¿como estás?": "como_estas",

                "que puedo jugar": "Sal_a_jugar", "qué puedo jugar": "Sal_a_jugar",

                "donde vives": "informacion_personal", "donde estas": "informacion_personal", "cuantos años tienes": "informacion_personal",

                "aburrido": "aburrido", "estoy aburrido": "aburrido", "me siento aburrido": "aburrido",   "aburrida": "aburrido", "estoy aburrida": "aburrido", "me siento aburrida": "aburrido",

                "no tengo tiempo": "no",

                "ok": "okey",

                "que juego me recomiendas": "juego",

                "musica": "musica",

                "quiero escuchar musica": "musica2",

                "que entiendes" : "que_entiendes", "que entiendes?" : "que_entiendes",

                "que hora es": "hora",  // Añadido para la pregunta de la hora

                "que fecha es": "fecha", "que fecha es hoy": "fecha", "que fecha es en mi pais": "fecha", "que fecha es en bolivia": "fecha", "que fecha es el pais bolivia": "fecha", "que fecha es": "fecha", "disculpe que fecha es": "fecha", "disculpe que fecha es hoy": "fecha", "disculpe que fecha es hoy en bilivia": "fecha", "disculpe me podria decir la fecha de hoy": "fecha", "disculpe me podria decir la fecha": "fecha", "disculpe me podria decir la fecha de bolivia": "fecha", "digame la fecha": "fecha", "digame la fecha de hoy": "fecha", "digame la fecha hoy en bolivia": "fecha", "me podria decir la fecha": "fecha", "me podria decir la fecha de hoy": "fecha",

                "que año es": "año", "en que año estamos": "año", "que año es en mi pais": "año", "que año es en bolivia": "año", "año actual": "año", "el año actual": "año", "el año actual en bolivia": "año", "me podria decir el año": "año", "me podria decir el año por favor": "año", "me podria decir el año porfavor": "año", "digame el año": "año", "digame el año en el que estamos": "año", "digame que año estamos": "año", 

                "que mes es": "mes", "en que mes estamos": "mes", "disculpe en que mes estamos": "mes", "digame el mes": "mes", "digame el mes en el que estamos": "mes",

                "que dia es": "dia", "que dia es hoy": "dia", "digame el dia": "dia", "digame el dia en el que estamos": "dia",

                "mejor jugador": "mejor_jugador", "quien es el mejor jugador": "mejor_jugador", "quien es el mejor jugador": "mejor_jugador",
            };
            // Evaluar expresiones matemáticas simples
            const mathExpressionPattern = /^[0-9+\-*/().\s]+$/;
            if (mathExpressionPattern.test(cleanedInput)) {
                return this.evaluateMathExpression(cleanedInput);
            }

            if (responseMap[cleanedInput]) {
                const responseKey = responseMap[cleanedInput];
                if (responseKey === 'hora') {
                    return this.responses['hora'][0] + this.getCurrentTimeInBolivia();
                }
                if (responseKey === 'fecha') {
                    return this.responses['fecha'][0] + this.getCurrentDateInBolivia();
                }
                if (responseKey === 'año') {
                    return this.responses['año'][0] + this.getCurrentYearInBolivia();
                }
                if (responseKey === 'mes') {
                    return this.responses['mes'][0] + this.getCurrentMonthInBolivia();
                }
                if (responseKey === 'dia') {
                    return this.responses['dia'][0] + this.getCurrentDayInBolivia();
                }
                return this.getRandomResponse(responseKey);
            }

            for (const [phrase, responseKey] of Object.entries(responseMap)) {
                if (cleanedInput.includes(phrase)) {
                    return this.getRandomResponse(responseKey);
                }
            }
    
            this.learnFromInput(cleanedInput);
            return this.getRandomResponse("fallback");
        }
    
        learnFromInput(input) {
            this.learnedResponses[input] = ["Lo siento, no tengo una respuesta para eso."];
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
