// Inicializamos jsPsych
const jsPsych = initJsPsych({
  display_element: 'jspsych-target',
  on_finish: function() {
    jsPsych.data.displayData();  // Mostrar resultados al terminar
  }
});

// Definimos un trial que pide responder pulsando A o L
const trial1 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '<p>¿Qué tecla vas a elegir? Presiona A o L.</p>',
  choices: ['a','l'],
  prompt: '<p>Presiona una de las dos teclas.</p>',
  on_finish: function(data){
    console.log('Respuesta registrada:', data.response);
  }
};

// Ejecutamos el experimento
jsPsych.run([trial1]);
