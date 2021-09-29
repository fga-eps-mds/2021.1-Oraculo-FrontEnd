let request = axios.post("http://localhost:8000/processos", {
  seiNumber: seiNumber,
  emitter: emitter,
  sector: sector,
  issueDate: issueDate,
});
