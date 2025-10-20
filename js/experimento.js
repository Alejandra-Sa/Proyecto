// Inicializar jsPsych después de que las bibliotecas estén cargadas
const jsPsych = initJsPsych({
  on_finish: () => jsPsych.data.displayData()
});

// Definir un trial simple que muestra un texto y espera una tecla
const bienvenida = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: 'Presioná cualquier tecla para continuar'
};

// Ejecutar el experimento con el trial en el timeline
jsPsych.run([bienvenida]);
