const jsPsych = initJsPsych({
  on_finish: () => jsPsych.data.displayData()
});

const bienvenida = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: 'Presioná cualquier tecla para continuar'
};

jsPsych.run([bienvenida]);
