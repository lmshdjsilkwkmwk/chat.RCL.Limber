class Chatbot {
    constructor() {
        this.context = {};
        this.responses = {
            greetings: ["¡Hola! ¿Cómo puedo ayudarte hoy?", "¡Hola! ¿Qué tal tu día?", "¡Saludos! ¿En qué puedo asistirte?", "¡Hola! ¿Cómo te encuentras?", "¡Hola! ¿Qué necesitas?", "¡Hola! ¿Todo bien por ahí?", "¡Hola! ¿Cómo va todo?", "¡Hola! ¿En qué puedo colaborar?", "¡Hola! ¿Cómo estás hoy?", "¡Hola! ¿Qué te trae por aquí?", "¡Hola! ¿Qué puedo hacer por ti hoy?", "¡Hola! ¿Cómo te sientes?", "¡Hola! ¿En qué estás interesado?", "¡Hola! ¿Cómo puedo ser de ayuda?", "¡Hola! ¿Qué novedades hay?", "¡Hola! ¿Cómo puedo asistirte en este momento?", "¡Hola! ¿Cómo va todo contigo?", "¡Hola! ¿En qué puedo ayudarte?", "¡Hola! ¿Cómo puedo hacer tu día mejor?", "¡Hola! ¿Tienes alguna pregunta?", "¡Hola! ¿Qué puedo hacer por ti ahora?", "¡Hola! ¿En qué estás trabajando?", "¡Hola! ¿Cómo puedo ser útil para ti hoy?", "¡Hola! ¿Qué tal está todo?", "¡Hola! ¿En qué puedo colaborar contigo?", "¡Hola! ¿Qué información necesitas?", "¡Hola! ¿Cómo va tu jornada?", "¡Hola! ¿Qué puedo hacer para ayudarte?","¡Hola! ¿Cómo puedo asistirte hoy?","¡Hola! ¿En qué puedo ayudarte?","¡Hola! ¿Qué necesitas hoy?","¡Saludos! ¿Cómo puedo ayudarte?","¡Hola! ¿Cómo estás?","¡Hola! Estoy aquí para ayudarte. ¿Qué necesitas?","¡Hola! ¿En qué puedo ser útil hoy?","¡Hola! ¿En qué puedo asistirte hoy?","¡Hola! Estoy aquí para ayudarte. ¿Cómo puedo asistirte?","¡Hola! ¿En qué necesitas ayuda?","¡Hola! Estoy disponible para cualquier cosa que necesites.","¡Hola! ¿Qué necesitas saber?","¡Hola! ¿Cómo puedo ser de ayuda hoy?","¡Hola! ¿Cómo estás hoy?","¡Hola! ¿Cómo puedo ayudarte en este momento?","¡Hola! ¿Qué puedo hacer por ti?","¡Hola! ¿Qué necesitas saber hoy?","¡Hola! ¿Cómo va tu día?",
            "¡Hola! ¿Cómo puedo ayudarte?","¡Hola! Estoy aquí para ayudarte. ¿En qué puedo asistirte?"],
            saludo_ayuda:["¡Hola! Claro, estoy aquí para ayudarte. ¿En qué puedo asistirte hoy?","¡Hola! Por supuesto, dime qué necesitas y con gusto te ayudaré.", "¡Hola! ¿Cómo puedo ayudarte? Estoy listo para resolver cualquier duda o problema que tengas.", "¡Hola! Estoy aquí para ayudarte. ¿Cuál es el problema o la pregunta que tienes?", "¡Hola! Claro, ¿qué necesitas? Estoy aquí para ofrecerte la mejor asistencia posible.", "¡Hola! ¿Cómo puedo asistirte? Dime qué necesitas y me encargaré de ello.", "¡Hola! Por supuesto, ¿qué puedo hacer por ti? Estoy aquí para ayudarte con cualquier cosa que necesites.", "¡Hola! Estoy listo para ayudarte. ¿Qué puedo hacer para resolver tu problema?", "¡Hola! Estoy aquí para asistirte. ¿En qué puedo ayudarte hoy?", "¡Hola! Claro, dime qué necesitas y estaré encantado de ayudarte.", "¡Hola! ¿Cómo puedo ayudarte? Estoy aquí para resolver tus dudas.", "¡Hola! Por favor, explícame en qué necesitas ayuda y me aseguraré de asistirte.", "¡Hola! Estoy aquí para ofrecerte apoyo. ¿Qué necesitas solucionar o preguntar?", "¡Hola! Cuéntame cómo puedo ayudarte. Estoy disponible para cualquier consulta.", "¡Hola! Estoy aquí para lo que necesites. ¿En qué puedo asistirte hoy?", "¡Hola! Dime qué necesitas y estaré encantado de ofrecerte mi ayuda.", "¡Hola! ¿Cómo puedo ser de ayuda para ti? Estoy aquí para resolver tus inquietudes.", "¡Hola! Claro, ¿qué puedo hacer para ayudarte? Estoy aquí para asistirte.", "¡Hola! Estoy disponible para ayudarte. ¿Qué necesitas?", "¡Hola! Estoy a tu disposición. ¿Cómo puedo ayudarte hoy?", "¡Hola! ¿Qué problema necesitas resolver? Estoy aquí para ayudarte.", "¡Hola! Cuéntame más sobre cómo puedo asistirte. Estoy aquí para ofrecerte mi ayuda.", "¡Hola! ¿Qué necesitas? Estoy aquí para brindarte toda la asistencia que requieras.", "¡Hola! Por favor, dime en qué puedo ayudarte. Estoy listo para asistirte.", "¡Hola! Estoy aquí para resolver cualquier duda que tengas. ¿Qué necesitas?", "¡Hola! Claro, ¿en qué puedo ayudarte? Estoy disponible para lo que necesites.", "¡Hola! Estoy a tu servicio. ¿Qué problema o consulta tienes?", "¡Hola! ¿Cómo puedo asistirte? Estoy aquí para proporcionarte la ayuda que necesites.", "¡Hola! Dime qué necesitas y me encargaré de ofrecerte la solución adecuada.", "¡Hola! Estoy listo para ayudarte con cualquier cosa que necesites. ¿Cómo puedo asistirte hoy?"],
            ayuda1:["¡Claro que sí! ¿En qué puedo ayudarte hoy?", "¡Por supuesto! ¿Qué necesitas? Estoy aquí para asistirte.", "¡Claro! Dime qué problema tienes y haré lo posible por ayudarte.", "¡Por supuesto! ¿Cómo puedo ser de ayuda?", "¡Sí, por supuesto! ¿Qué necesitas resolver?","¡Claro! Estoy aquí para ayudarte. ¿Qué puedo hacer por ti?","¡Por supuesto! ¿Qué problema necesitas solucionar?","¡Claro! Dime en qué necesitas ayuda y estaré encantado de asistirte.","¡Sí, claro! ¿Cómo puedo ayudarte hoy?","¡Por supuesto! ¿En qué puedo asistirte?","¡Claro que sí! ¿Cuál es tu pregunta o problema?","¡Por supuesto! Estoy aquí para ayudarte. ¿Qué necesitas?","¡Sí, claro! Dime más sobre lo que necesitas y te ayudaré.","¡Claro! ¿Qué problema estás enfrentando?","¡Por supuesto! ¿Qué necesitas saber o resolver?","¡Sí, por supuesto! Estoy listo para ayudarte. ¿Qué puedo hacer por ti?","¡Claro! ¿Qué puedo hacer para asistirte hoy?","¡Por supuesto! Estoy aquí para ayudarte con cualquier cosa que necesites.","¡Sí, claro! Dime cómo puedo ayudarte.","¡Claro que sí! ¿En qué área necesitas asistencia?","¡Por supuesto! ¿Qué tipo de ayuda estás buscando?","Sí, claro! Cuéntame qué necesitas y te asistiré.","¡Claro! ¿En qué puedo ser de ayuda para ti?","¡Por supuesto! Estoy aquí para resolver cualquier problema. ¿Qué necesitas?","¡Sí, claro! ¿Cómo puedo asistirte?","¡Claro que sí! ¿Qué necesitas? Estoy aquí para ofrecerte mi ayuda.","¡Por supuesto! Dime qué necesitas y te ayudaré a resolverlo.","¡Sí, claro! ¿Qué tipo de ayuda requieres?","¡Claro! Estoy disponible para ayudarte. ¿Qué necesitas?","¡Por supuesto! ¿Cómo puedo ayudarte hoy?"],
            farewell: ["¡Hasta luego! Si necesitas algo más, aquí estaré.","Adiós, ¡que tengas un buen día!","¡Adiós! Que tengas un excelente día.","¡Hasta luego! No dudes en volver si necesitas más ayuda.","¡Nos vemos! Estoy aquí para cuando me necesites.","¡Hasta la próxima! Si tienes alguna otra pregunta, avísame.","¡Que te vaya bien! Estoy a tu disposición si necesitas algo más.","¡Hasta luego! Cuídate y que tengas un gran día.","¡Adiós por ahora! No dudes en volver si necesitas más asistencia.","¡Hasta pronto! Estoy aquí para ayudarte en cualquier momento.","¡Nos vemos pronto! Si necesitas algo más, aquí estaré.","¡Hasta luego! Que tengas un buen día y éxito en lo que hagas.","¡Adiós! Si surge algo más, no dudes en contactarme.","¡Hasta luego! Que tengas un excelente resto del día.","¡Nos vemos! Estaré aquí para asistirte cuando lo necesites.","¡Hasta luego! Que todo vaya bien para ti.","¡Adiós por ahora! Regresa cuando quieras, estaré aquí para ayudarte.","¡Hasta pronto! Si necesitas algo, solo pregunta.","¡Que te vaya bien! Estoy aquí para cualquier cosa que necesites.","¡Hasta luego! Cuida de ti y no dudes en volver si necesitas asistencia.","¡Nos vemos! Espero poder ayudarte nuevamente pronto.","¡Hasta luego! Espero que tu día sea excelente.","¡Adiós! Recuerda que estoy aquí para cualquier consulta futura.","¡Hasta pronto! Que todo te salga bien.","¡Nos vemos pronto! No dudes en contactarme si necesitas más ayuda.","¡Hasta luego! Estoy a tu disposición para cualquier cosa.","¡Adiós! Que tengas un día fantástico.","¡Hasta luego! Si tienes más preguntas, aquí estaré para ayudarte.","¡Que tengas un buen día! Espero verte de nuevo pronto.","¡Hasta luego! No dudes en regresar si necesitas más información.","¡Nos vemos! Cuida de ti y ten un excelente día."],
            thanks: ["¡De nada! Me alegra haber podido ayudarte.","¡Con gusto! Si necesitas algo más, no dudes en decírmelo.","¡Es un placer! Estoy aquí para lo que necesites.","¡De nada! Si tienes más preguntas, aquí estaré.","¡No hay de qué! Estoy feliz de haberte asistido.","¡Encantado de ayudarte! Si necesitas más asistencia, solo avísame.","¡Gracias a ti por utilizar nuestro servicio! ¿Hay algo más en lo que pueda ayudarte?","¡De nada! Estoy aquí para ayudarte siempre que lo necesites.","¡Es un placer! Si surge algo más, no dudes en contactarme.","¡Con gusto! Si necesitas más ayuda, estaré aquí para ti.","¡No hay problema! Estoy feliz de haberte sido útil.","¡De nada! No dudes en regresar si tienes más preguntas.","¡Encantado de ayudar! Si necesitas algo más, aquí estoy.","¡De nada! Si tienes más dudas, estaré encantado de resolverlas.","¡Es un placer asistirte! ¿Hay algo más en lo que pueda ayudarte?","¡De nada! Siempre estoy aquí para ayudarte con lo que necesites.","¡Gracias a ti! Espero haberte sido de ayuda.","¡De nada! Si necesitas más información, no dudes en pedirla.","¡Con gusto! Me alegra saber que pude ayudarte.","¡No hay de qué! Si necesitas algo más, solo avísame.","¡Es un placer! Estoy disponible para cualquier otra pregunta que tengas.","¡De nada! Si tienes más consultas, estaré aquí para responderlas.","¡Gracias a ti por tu paciencia! Si necesitas más asistencia, estoy aquí.","¡De nada! Espero que tengas un gran día.","¡Encantado de ayudar! Si necesitas algo más, solo dímelo.","¡No hay problema! Siempre estoy disponible para asistirte.","¡De nada! Estoy aquí para lo que necesites en el futuro.","¡Gracias a ti! Si surge algo más, estaré aquí para ayudarte.","¡Es un placer! No dudes en contactarme si necesitas más ayuda.","¡De nada! Si tienes más preguntas o necesitas asistencia adicional, aquí estaré."],
            si: ["¡Perfecto! ¿Qué más necesitas?","¡Genial! ¿En qué puedo ayudarte a continuación?","¡Excelente! ¿Cuál es el siguiente paso?","¡Muy bien! ¿Qué puedo hacer por ti ahora?","¡Entendido! ¿Qué necesitas a continuación?","¡Perfecto! Dime qué más necesitas.","¡Claro! ¿Cómo puedo asistirte más?","¡De acuerdo! ¿Qué te gustaría hacer ahora?","¡Genial! ¿Qué puedo hacer por ti en este momento?","¡Perfecto! Estoy listo para seguir ayudándote.","¡Muy bien! ¿Qué paso sigue?","¡Entendido! ¿Qué te gustaría hacer a continuación?","¡Claro que sí! ¿Cómo puedo continuar ayudándote?","¡Genial! ¿Hay algo más en lo que pueda asistirte?","¡Perfecto! ¿Cuál es el siguiente paso para ti?","¡De acuerdo! ¿Qué más necesitas?","¡Sí, claro! ¿Qué otra cosa puedo hacer por ti?","¡Muy bien! Estoy aquí para ayudarte con lo que necesites.","¡Entendido! ¿Qué sigue en tu lista de cosas por hacer?","¡Genial! ¿En qué más puedo ayudarte?","¡Perfecto! ¿Qué otro detalle necesitas ajustar?","¡Claro! ¿Qué sigue ahora?","¡De acuerdo! ¿Cómo puedo seguir asistiendo?","¡Muy bien! Estoy listo para lo siguiente.","¡Entendido! ¿Hay algo más en lo que te pueda ayudar?","¡Genial! ¿Qué más quieres hacer?","¡Perfecto! ¿Qué más puedo hacer por ti?","¡Sí, claro! ¿Qué otros detalles necesitas?","¡Muy bien! ¿Qué quieres hacer a continuación?","¡De acuerdo! ¿Qué más necesitas para continuar?"],
            limber2: ['"Hola, soy chatRCL-Limber. ¿En qué puedo ayudarte hoy?"','"¡Hola! Soy chatRCL-Limber, tu asistente virtual. ¿Cómo puedo asistirte?"','"¡Saludos! Soy chatRCL-Limber. Estoy aquí para ayudarte con lo que necesites."','"Hola, soy chatRCL-Limber. ¿Qué puedo hacer por ti hoy?"','"¡Hola! Mi nombre es chatRCL-Limber. ¿En qué puedo ayudarte?"','"Soy chatRCL-Limber, tu asistente virtual. ¿Qué necesitas hoy?"','"¡Hola! Me llamo chatRCL-Limber. Estoy aquí para ayudarte."','"¡Saludos! Soy chatRCL-Limber, y estoy aquí para resolver tus dudas."','"Hola, soy chatRCL-Limber. ¿Cómo puedo asistirte?""¡Hola! Mi nombre es chatRCL-Limber. ¿Cómo puedo ayudarte?"','"Soy chatRCL-Limber. ¿En qué puedo asistirte hoy?"','"¡Hola! Soy chatRCL-Limber. ¿Qué puedo hacer por ti?"','"Hola, soy chatRCL-Limber, y estoy aquí para ayudarte con cualquier cosa que necesites."','"¡Hola! Mi nombre es chatRCL-Limber. ¿Cómo puedo ayudarte hoy?"','"Soy chatRCL-Limber, tu asistente virtual. ¿Qué necesitas saber?"','"¡Saludos! Soy chatRCL-Limber. ¿En qué puedo ser de ayuda?"','"Hola, soy chatRCL-Limber. ¿Qué puedo hacer por ti hoy?"','"¡Hola! Me llamo chatRCL-Limber. ¿En qué puedo asistirte?"','"Soy chatRCL-Limber, tu chatbot. ¿Cómo puedo ayudarte hoy?"','"¡Hola! Soy chatRCL-Limber, y estoy aquí para ayudarte con tus preguntas."','"Hola, soy chatRCL-Limber. ¿Cómo puedo ayudarte hoy?"','"¡Hola! Soy chatRCL-Limber, y estoy aquí para asistirte en lo que necesites."','"Soy chatRCL-Limber, tu asistente en línea. ¿Qué puedo hacer por ti?"','"¡Hola! Mi nombre es chatRCL-Limber. ¿En qué puedo ayudarte hoy?"','"Hola, soy chatRCL-Limber. ¿Cómo puedo ser de ayuda?"','"¡Saludos! Soy chatRCL-Limber. ¿Qué necesitas hoy?"','"Hola, soy chatRCL-Limber. Estoy aquí para responder tus preguntas."','"¡Hola! Soy chatRCL-Limber. ¿En qué puedo asistirte hoy?"','"Soy chatRCL-Limber, y estoy aquí para ayudarte con cualquier consulta."','"¡Hola! Mi nombre es chatRCL-Limber. ¿Cómo puedo asistirte hoy?"'],
            bien: ["¡Me alegra escuchar eso! ¿En qué más puedo ayudarte?","¡Genial! Si necesitas algo más, no dudes en decírmelo.","¡Qué bueno! Estoy aquí para ayudarte con lo que necesites.","¡Perfecto! Si tienes alguna otra pregunta, estoy aquí para asistirte.","¡Me alegra saberlo! ¿Hay algo más en lo que pueda ayudarte?","¡Excelente! ¿Cómo puedo asistirte más?","¡Fantástico! Si necesitas más ayuda, aquí estaré.","¡Perfecto! ¿Hay algo más en lo que necesites ayuda?","¡Qué bien! Si surge algo más, solo avísame.","¡Genial! Estoy aquí para lo que necesites.","¡Me alegra escuchar eso! ¿Cómo puedo seguir ayudándote?","¡Excelente! ¿Qué más puedo hacer por ti hoy?","¡Perfecto! Si hay algo más que necesites, no dudes en decírmelo.","¡Fantástico! Estoy aquí para cualquier otra cosa que necesites.","¡Qué bueno! ¿Hay algo más en lo que pueda asistirte?","¡Genial! ¿En qué más puedo ayudarte hoy?","¡Qué bueno escuchar eso! ¿Qué más puedo hacer por ti?","¡Perfecto! Si tienes más preguntas, estaré encantado de responderlas.","¡Me alegra saber que todo está bien! ¿En qué más puedo asistirte?","¡Genial! Si necesitas más ayuda, aquí estaré para ti.","¡Qué bueno! ¿Cómo puedo ayudarte con algo más?","¡Excelente! ¿Qué otra cosa necesitas hoy?","¡Perfecto! Si tienes más consultas, solo dímelo.","¡Qué bien escuchar eso! Estoy aquí para cualquier otra cosa que necesites.","¡Genial! Si surge algo más, no dudes en decírmelo.","¡Qué bueno! ¿Hay algo más en lo que te pueda ayudar?","¡Perfecto! Estoy aquí para resolver cualquier otra duda que tengas.","¡Excelente! ¿En qué más puedo asistirte hoy?","¡Fantástico! Si necesitas ayuda adicional, no dudes en pedirla."],
            mal: ["Lamento escuchar eso. ¿Cómo puedo ayudarte a solucionar el problema?","Siento que no estés bien. Dime qué está pasando para ver cómo puedo asistirte.","Lamento oír eso. ¿Qué puedo hacer para mejorar la situación?","Siento escuchar que no estás bien. ¿En qué puedo ayudarte para resolver esto?","Lamento que las cosas no estén yendo bien. ¿Cómo puedo ayudarte a mejorar la situación?","Entiendo que no estés contento. Cuéntame más para poder ayudarte mejor.","Lo siento si algo no está funcionando como esperabas. ¿Cómo puedo asistirte?","Siento que estés pasando por esto. Dime más para ver cómo puedo ayudarte.","Lamento escuchar eso. ¿Qué puedo hacer para corregir la situación?","Siento que no estés bien. Estoy aquí para ayudarte a solucionar cualquier inconveniente.","Lamento que estés teniendo problemas. ¿Cómo puedo asistirte para solucionarlos?","Siento que las cosas no estén saliendo bien. Cuéntame más para encontrar una solución.","Lamento escuchar que las cosas están mal. ¿En qué puedo ayudarte a mejorar la situación?","Siento mucho que no estés satisfecho. ¿Qué puedo hacer para ayudarte?","Entiendo que no estés bien. Estoy aquí para ayudarte a resolver cualquier problema.","Lamento que estés pasando por esto. Dime más para poder asistirte mejor.","Siento que las cosas no estén yendo como esperabas. ¿Cómo puedo ayudarte a solucionarlo?","Lamento escuchar que las cosas no están bien. Estoy aquí para ayudarte en lo que necesites.","Siento que no estés satisfecho. ¿Qué detalles podrías darme para mejorar la situación?","Lamento que no estés bien. Estoy aquí para asistirte y encontrar una solución.","Siento que estés pasando un mal momento. ¿Qué puedo hacer para ayudarte a resolverlo?","Lamento escuchar que las cosas están mal. ¿Cómo puedo asistirte en este momento?","Siento que no estés teniendo una buena experiencia. ¿En qué puedo ayudarte a mejorarla?","Lamento escuchar que no estás bien. Estoy aquí para ayudarte a solucionar cualquier problema.","Siento mucho que estés teniendo dificultades. ¿Qué puedo hacer para asistirte?","Lamento que estés pasando por esto. Cuéntame más para encontrar la mejor solución.","Siento que las cosas no estén funcionando bien. Estoy aquí para ayudarte a resolverlo.","Lamento que las cosas no estén bien. ¿Cómo puedo ayudarte a mejorar la situación?","Siento que no estés satisfecho. ¿Qué más puedo hacer para asistirte mejor?",
            "Lamento escuchar que no estás contento. Estoy aquí para ayudarte con cualquier problema que tengas."],
            como_estas: ["¡Hola! Estoy aquí y listo para ayudarte. ¿En qué puedo asistirte hoy?","¡Hola! Estoy funcionando perfectamente. ¿Cómo puedo ayudarte hoy?","¡Hola! Estoy bien, gracias por preguntar. ¿En qué puedo ayudarte?","¡Hola! Todo está en orden aquí. ¿Qué puedo hacer por ti?","¡Hola! Estoy aquí para asistirte. ¿Cómo puedo ayudarte hoy?","¡Hola! Estoy listo para ayudarte con lo que necesites. ¿Cómo estás tú?","¡Hola! Estoy bien, gracias. ¿En qué puedo asistirte hoy?","¡Hola! Estoy aquí y preparado para cualquier cosa que necesites. ¿Cómo estás?","¡Hola! Todo está funcionando correctamente. ¿Qué puedo hacer por ti?","¡Hola! Estoy aquí para ayudarte. ¿Cómo puedo asistirte hoy?","¡Hola! Estoy bien, gracias por preguntar. ¿Qué necesitas hoy?","¡Hola! Estoy listo para ayudarte con cualquier consulta. ¿Cómo te encuentras?","¡Hola! Estoy funcionando perfectamente. ¿En qué puedo ayudarte?","¡Hola! Estoy aquí y todo está bien. ¿Cómo puedo asistirte hoy?","¡Hola! Todo está en orden. ¿Qué puedo hacer por ti hoy?","¡Hola! Estoy listo para ayudarte. ¿Cómo estás tú?","¡Hola! Estoy aquí para cualquier cosa que necesites. ¿Cómo te va?","¡Hola! Todo está bien de mi lado. ¿En qué puedo asistirte hoy?","¡Hola! Estoy aquí y en excelente estado. ¿Qué necesitas?","¡Hola! Estoy bien, gracias. ¿En qué puedo ayudarte hoy?","¡Hola! Estoy funcionando como siempre. ¿Cómo estás tú?","¡Hola! Estoy aquí y listo para asistirte. ¿Qué puedo hacer por ti hoy?","¡Hola! Estoy en perfecto estado. ¿Cómo puedo ayudarte?","¡Hola! Estoy bien y preparado para cualquier cosa. ¿En qué puedo asistirte?","¡Hola! Estoy aquí para resolver cualquier duda que tengas. ¿Cómo estás?","¡Hola! Estoy listo para ayudarte con lo que necesites. ¿Qué hay de ti?","¡Hola! Todo está funcionando correctamente. ¿En qué puedo asistirte hoy?","¡Hola! Estoy aquí y en buena forma. ¿Cómo te encuentras?","¡Hola! Estoy bien y disponible para ayudarte. ¿Cómo estás tú?","¡Hola! Estoy en orden y listo para ayudarte. ¿Qué necesitas hoy?"],
            informacion_personal: ["Lo siento, no le puedo dar esa información"],//
            aburrido: ["Lo siento que te sientas aburrido. ¿Te gustaría que te sugiera algo interesante para hacer?","Lamento escuchar que estás aburrido. ¿Qué tal si hablamos de algo que te interese?","Siento que te sientas aburrido. ¿Hay algún tema que te gustaría explorar?","Lamento que estés aburrido. ¿Te gustaría jugar a algún juego o aprender algo nuevo?","Entiendo que estés aburrido. ¿Qué tal si te cuento un dato curioso o te hago una pregunta interesante?","Siento que no estés entretenido. ¿Qué tal si hablamos de tus pasatiempos o intereses?","Lo siento por el aburrimiento. ¿Te gustaría escuchar una historia o anécdota interesante?","Entiendo que te sientas aburrido. ¿Qué tal si te propongo un desafío o te hago una trivia?","Lamento que estés aburrido. ¿Quieres que te sugiera alguna actividad o lectura?","Siento que te sientas así. ¿Te gustaría aprender algo nuevo o resolver un enigma?","Lamento escuchar que te sientes aburrido. ¿Qué tal si probamos un pequeño juego o una pregunta divertida?","Siento que estés aburrido. ¿Qué tal si te cuento un chiste o un dato interesante?","Lo siento por el aburrimiento. ¿Te gustaría charlar sobre algún tema específico que te interese?","Entiendo que estés aburrido. ¿Qué tal si exploramos un tema nuevo juntos?","Lamento que te sientas así. ¿Qué te gustaría hacer para pasar el rato?","Siento que estés aburrido. ¿Quieres que te recomiende algún contenido interesante?","Lo siento que estés pasando por esto. ¿Te gustaría que te proponga algún reto divertido?","Entiendo que te sientas aburrido. ¿Qué tal si te cuento un hecho fascinante?","Siento que te sientas así. ¿Te gustaría hablar sobre algún tema que te apasione?","Lamento que estés aburrido. ¿Qué tal si te hago algunas preguntas interesantes para distraerte?","Lo siento por el aburrimiento. ¿Te gustaría que busque algo entretenido para ti?","Entiendo que estés aburrido. ¿Qué te parece si hacemos una pequeña actividad juntos?","Siento que te sientas así. ¿Quieres que te sugiera alguna serie, libro o película?","Lamento escuchar eso. ¿Te gustaría que te proponga un desafío mental para distraerte?","Lo siento por el aburrimiento. ¿Qué tal si exploramos algún tema o hobby que te interese?","Entiendo que te sientas aburrido. ¿Qué te gustaría hacer para animarte un poco?","Siento que estés aburrido. ¿Qué te parece si hablamos de tus intereses o pasatiempos?","Lo siento que te sientas así. ¿Te gustaría que te cuente algo curioso o divertido?",
            "Entiendo que estés aburrido. ¿Qué tal si te hago unas preguntas interesantes para pasar el tiempo?","Lamento que te sientas aburrido. ¿Qué te parece si encontramos algo entretenido juntos?"],
            no: ["Entendido. Si cambias de opinión o necesitas ayuda con algo más, aquí estaré.","¡Está bien! Si hay algo más en lo que pueda asistirte, solo dímelo.","Comprendido. Si tienes alguna otra pregunta o necesitas ayuda más adelante, estaré aquí.","De acuerdo. No dudes en volver si necesitas algo más en el futuro.","¡Entendido! Si decides que necesitas ayuda con algo más, no dudes en contactarme.","¡Claro! Si hay otra cosa en la que pueda asistirte, házmelo saber.","De acuerdo. Si cambias de opinión o necesitas ayuda con otra cosa, aquí estaré.","Entiendo. Si en algún momento necesitas ayuda, no dudes en decirlo.","Está bien. Estoy aquí para ayudarte con cualquier otra cosa que necesites.","Comprendido. Si hay algo más en lo que pueda ayudarte, solo avísame.","¡Entendido! Si surge algo más, estaré aquí para asistirte.","De acuerdo. Si necesitas ayuda con otra cosa, estaré aquí para ti.","¡Claro! Si tienes otra pregunta o necesitas asistencia, no dudes en decírmelo.","Entiendo. Si en el futuro necesitas algo más, estaré aquí para ayudarte.","¡De acuerdo! Si hay algo más en lo que pueda asistirte, házmelo saber.","Está bien. Si necesitas ayuda en el futuro, no dudes en volver.","¡Entendido! Si decides que necesitas asistencia más adelante, aquí estaré.","Comprendido. Si necesitas algo más, solo avísame.","De acuerdo. Si hay algo más en lo que pueda ayudarte, estaré aquí.","¡Claro! Si cambias de opinión o necesitas asistencia en otro momento, aquí estaré.","Está bien. Si tienes más preguntas o necesitas ayuda, no dudes en decírmelo.","¡Entiendo! Si hay otra cosa en la que pueda asistirte, solo dímelo.","De acuerdo. Si necesitas algo más en el futuro, aquí estaré para ayudarte.","¡Claro! Si en algún momento necesitas más ayuda, estaré disponible para ti.","Comprendido. Si surge otra necesidad, no dudes en contactarme.","Está bien. Si en el futuro necesitas asistencia, estaré aquí para ayudarte.","¡Entendido! Si en algún momento necesitas ayuda con otra cosa, no dudes en decírmelo.","De acuerdo. Si necesitas algo más más adelante, aquí estaré para asistirte.","¡Claro! Si hay algo más en lo que pueda ayudarte en el futuro, solo avísame.","Comprendido. Si decides que necesitas ayuda con otra cosa, estaré aquí para ti."],
            okey: ["¡Perfecto! ¿En qué más puedo asistirte?","¡Genial! Si necesitas algo más, solo dímelo.","¡Entendido! ¿Cómo puedo ayudarte a continuación?","¡Perfecto! Si hay algo más en lo que pueda ayudarte, aquí estaré.","¡Genial! ¿Hay algo más en lo que necesites asistencia?","¡Perfecto! Estoy aquí para cualquier otra cosa que necesites.","¡De acuerdo! Si surge alguna otra consulta, no dudes en decírmelo.","¡Entendido! ¿Qué te gustaría hacer a continuación?","¡Genial! Estoy aquí para resolver cualquier otra duda que tengas.","¡Perfecto! ¿En qué más puedo ayudarte hoy?","¡De acuerdo! Si hay más en lo que pueda asistirte, solo házmelo saber.","¡Entendido! ¿Cómo puedo seguir ayudándote?","¡Genial! Si tienes otra pregunta, estaré encantado de responderla.","¡Perfecto! Estoy aquí para lo que necesites.","¡Entendido! Si necesitas más ayuda, no dudes en contactarme.","¡Genial! ¿Qué más puedo hacer por ti?","¡De acuerdo! Si surge algo más, aquí estaré para ayudarte.","¡Perfecto! ¿Cómo puedo asistirte en lo que sigue?","¡Entendido! Si necesitas más información, estoy a tu disposición.","¡Genial! ¿Qué quieres hacer a continuación?","¡De acuerdo! Si hay algo más en lo que pueda ayudarte, solo avísame.","¡Perfecto! Si necesitas algo más, solo dímelo.","¡Entendido! ¿Hay algo más que pueda hacer por ti?","¡Genial! Estoy aquí para cualquier otra consulta que tengas.","¡De acuerdo! Si surge alguna otra pregunta, no dudes en decírmelo.","¡Perfecto! ¿En qué más puedo asistirte hoy?","¡Entendido! ¿Qué otra cosa necesitas?","¡Genial! Si hay algo más en lo que pueda ayudarte, aquí estaré.","¡De acuerdo! ¿Qué más puedo hacer por ti?","¡Perfecto! Si hay algo más en lo que necesites ayuda, solo házmelo saber."],
            juego: ["¡Claro! ¿Qué tipo de juegos te gustan? Así puedo recomendarte algo que te interese.","¡Por supuesto! ¿Prefieres juegos de acción, estrategia, o algo más relajado?","Depende de tus gustos. Si te gustan los juegos de aventuras, te recomiendo [Nombre del juego]. ¿Qué opinas?","Para un juego emocionante, te recomiendo [Nombre del juego]. ¿Te gusta el género de [género]?","Si buscas algo divertido, [Nombre del juego] es una excelente opción. ¿Qué tipo de juegos disfrutas más?","Te sugiero [Nombre del juego] si te gustan los retos. ¿Estás interesado en juegos de [género]?","¿Qué te parece [Nombre del juego]? Es perfecto para pasar el tiempo y es muy divertido.","Para una experiencia entretenida, prueba [Nombre del juego]. ¿Qué tipo de juegos prefieres?","Si te gustan los juegos de rol, te recomiendo [Nombre del juego]. ¿Te interesa ese tipo de juego?","¡Claro! ¿Te gustan los juegos en solitario o prefieres jugar con amigos? Así te puedo recomendar mejor.","Te recomiendo [Nombre del juego] si disfrutas de juegos de estrategia. ¿Te parece interesante?","Para una experiencia de juego inmersiva, te sugiero [Nombre del juego]. ¿Te gustan los juegos de [género]?","Si te gustan los juegos de acción, [Nombre del juego] es una excelente opción. ¿Te gustaría probarlo?","Para algo relajante, [Nombre del juego] podría ser ideal. ¿Qué tipo de juegos prefieres jugar?","Si buscas algo desafiante, prueba [Nombre del juego]. ¿Te gustan los juegos difíciles?","Para juegos de aventuras épicas, [Nombre del juego] es una gran elección. ¿Qué tipo de juego disfrutas?","Te recomiendo [Nombre del juego] si te encantan los juegos de rol. ¿Qué opinas?","Para una experiencia de juego divertida, [Nombre del juego] es muy popular. ¿Te interesa?","Si buscas algo innovador, prueba [Nombre del juego]. ¿Qué tipo de juegos te atraen más?","Te sugiero [Nombre del juego] si te gustan los juegos de estrategia. ¿Te gustaría probarlo?","Para un juego que te mantendrá entretenido, [Nombre del juego] es ideal. ¿Qué opinas?","Si disfrutas de juegos con una buena historia, te recomiendo [Nombre del juego]. ¿Qué te parece?","Para una experiencia de juego emocionante, prueba [Nombre del juego]. ¿Qué tipo de juegos te gustan?","Si buscas algo con acción intensa, [Nombre del juego] es una gran opción. ¿Te interesa?","Te recomiendo [Nombre del juego] si prefieres juegos de aventuras. ¿Qué opinas?","Para un juego relajado y entretenido, prueba [Nombre del juego]. ¿Te gustaría jugarlo?",
            "Si te gustan los juegos cooperativos, [Nombre del juego] es una excelente opción. ¿Te interesa?","Te sugiero [Nombre del juego] si disfrutas de juegos de estrategia y táctica. ¿Qué te parece?","Para un desafío mental, [Nombre del juego] podría ser ideal. ¿Qué opinas de los juegos de rompecabezas?","Si buscas algo divertido y social, prueba [Nombre del juego]. ¿Te gusta jugar con amigos?","Te recomiendo [Nombre del juego] si te gustan los juegos de simulación. ¿Qué opinas?","Para una experiencia inmersiva, [Nombre del juego] es perfecto. ¿Te gustan los juegos de aventuras?","Si prefieres un juego de acción y aventuras, te sugiero [Nombre del juego]. ¿Te interesa?","Para algo relajado y entretenido, prueba [Nombre del juego]. ¿Qué te parece?","Te recomiendo [Nombre del juego] si disfrutas de juegos con una buena historia. ¿Qué opinas?","Si buscas un juego emocionante, [Nombre del juego] es una gran opción. ¿Te interesa?","Para un desafío interesante, te sugiero [Nombre del juego]. ¿Qué opinas de los juegos de estrategia?","Si te gustan los juegos con múltiples jugadores, [Nombre del juego] es ideal. ¿Te gustaría jugarlo?","Te recomiendo [Nombre del juego] si prefieres juegos de rol y aventuras. ¿Qué opinas?","Para algo innovador y divertido, prueba [Nombre del juego]. ¿Te gustaría intentarlo?"],
            musica: ['Pop: Artistas como Taylor Swift, Dua Lipa, y Ed Sheeran.', 'Jazz: Artistas como Miles Davis, John Coltrane, y Ella Fitzgerald.', 'Música Electrónica: DJs como Daft Punk, Avicii, y Calvin Harris.'],
            musica2: ['Unas de las musicas que puedes escuchar. Pop: Artistas como Taylor Swift, Dua Lipa, y Ed Sheeran.', 'Unas de las musicas que puedes escuchar. Jazz: Artistas como Miles Davis, John Coltrane, y Ella Fitzgerald.', 'Unas de las musicas que puedes escuchar. Música Electrónica: DJs como Daft Punk, Avicii, y Calvin Harris.'],
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

            "hola necesito ayuda":"saludo_ayuda", "necesito ayuda":"saludo_ayuda",

            "me puedes ayudar":"ayuda1",
"adiós": "farewell", "adios": "farewell", "a dios": "farewell", 
            "hasta luego": "farewell", "chau": "farewell", 
            "me boy": "farewell", "me boy": "farewell",

            "gracias": "thanks",

            "si": "si",

            "con quien hablo": "limber2", "¿con quien hablo?": "limber2", "¿con quién hablo?": "limber2",

            "bien": "bien",

            "mal": "mal",

            "como estas": "como_estas", "como estás": "como_estas", "¿como estas?": "como_estas", "¿como estás?": "como_estas",

            "donde vives": "informacion_personal", "donde estas": "informacion_personal", "cuantos años tienes": "informacion_personal",//

            "aburrido": "aburrido",

            "no tengo tiempo": "no",

            "ok": "okey", "okey": "okey",

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
