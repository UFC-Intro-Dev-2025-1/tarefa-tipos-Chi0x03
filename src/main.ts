interface Sala {
  nome: string;
  bloco: number;
  quantidadeMaxDeAlunos: number;
  possuiComputadores: boolean;
  quantidadeDeComputadores: number | undefined
  aberta: boolean;
};

const minhaSala: Sala = {
  nome: 'Lab de Informática',
  bloco: 1,
  quantidadeMaxDeAlunos: 42,
  possuiComputadores: true,
  quantidadeDeComputadores: undefined,
  aberta: true,
};

console.log(minhaSala);
