export default {
  listarTarefas: estado => {
    const lista = estado.tarefas.slice();

    return lista.reverse();
  },
  buscarTarefas: estado => termo => {
    const resultado = [];

    if (termo !== '') {
      for (let i = 0; i < estado.tarefas.length; i++) {
        if (estado.tarefas[i].indexOf(termo) > -1) {
          resultado.push(estado.tarefas[i]);
        }
      }
    }

    return resultado;
  }
}
