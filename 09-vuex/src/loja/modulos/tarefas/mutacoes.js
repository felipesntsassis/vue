export default {
  ADD_TAREFA: (estado, valor) => {
    estado.tarefas.push(valor);
  },
  DEL_TAREFA: (estado, valor) => {
    const posicao = estado.tarefas.indexOf(valor);

    if (posicao > -1) {
      estado.tarefas.splice(posicao, 1);
    }
  }
}
