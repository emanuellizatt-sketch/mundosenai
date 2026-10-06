const parkingBlocks = {
  A: {
    name: 'Bloco A',
    image: 'assets/bloco-a.jpg',
    spots: [
      ['A-01', 'green'],
      ['A-02', 'red'],
      ['A-03', 'green'],
      ['A-04', 'yellow'],
      ['A-05', 'green'],
      ['A-06', 'red'],
      ['A-07', 'green'],
      ['A-08', 'yellow'],
      ['A-09', 'green'],
    ]
  },
  C: {
    name: 'Bloco C',
    image: 'assets/bloco-c.jpg',
    spots: [
      ['C-01', 'green'],
      ['C-02', 'red'],
      ['C-03', 'green'],
      ['C-04', 'yellow'],
      ['C-05', 'green'],
      ['C-06', 'green'],
      ['C-07', 'red'],
      ['C-08', 'green'],
      ['C-09', 'green'],
      ['C-10', 'yellow'],
      ['C-11', 'green'],
      ['C-12', 'red'],
      ['IC-01', 'green'],
      ['IC-02', 'green'],
      ['PC-01', 'green'],
      ['PC-02', 'red'],
    ]
  },
  H: {
    name: 'Bloco H',
    image: 'assets/bloco-h.jpg',
    spots: [
      ['PH-01', 'green'],
      ['PH-02', 'green'],
      ['IH-01', 'yellow'],
      ['IH-02', 'green'],
      ['H-01', 'green'],
      ['H-02', 'red'],
      ['H-03', 'green'],
      ['H-04', 'yellow'],
      ['H-05', 'green'],
      ['H-06', 'red'],
      ['H-07', 'green'],
      ['H-08', 'green'],
      ['H-09', 'yellow'],
      ['H-10', 'green'],
      ['H-11', 'red'],
      ['H-12', 'green'],
      ['H-13', 'green'],
      ['H-14', 'yellow'],
      ['H-15', 'red'],
      ['H-16', 'green'],
      ['H-17', 'green'],
      ['H-18', 'yellow'],
      ['H-19', 'green'],
      ['H-20', 'red'],
      ['H-21', 'green'],
      ['H-22', 'green'],
      ['H-23', 'yellow'],
      ['H-24', 'green'],
      ['H-25', 'red'],
      ['H-26', 'green'],
      ['H-27', 'green'],
      ['H-28', 'yellow'],
      ['H-29', 'green'],
      ['H-30', 'red'],
      ['H-31', 'green'],
      ['H-32', 'green'],
      ['H-33', 'yellow'],
      ['H-34', 'green'],
      ['H-35', 'red'],
      ['H-36', 'green'],
      ['H-37', 'green'],
      ['H-38', 'yellow'],
      ['H-39', 'green'],
      ['H-40', 'red'],
      ['H-41', 'green'],
      ['H-42', 'yellow'],
      ['H-43', 'green'],
      ['H-44', 'green'],
      ['H-45', 'red'],
      ['H-46', 'green'],
      ['H-47', 'green'],
      ['H-48', 'yellow'],
      ['H-49', 'green'],
      ['H-50', 'red'],
      ['H-51', 'green'],
      ['H-52', 'red'],
      ['H-53', 'green'],
      ['H-54', 'yellow'],
      ['H-55', 'green'],
      ['H-56', 'red'],
      ['H-57', 'green'],
      ['H-58', 'red'],
      ['H-59', 'green'],
      ['H-60', 'yellow'],
      ['H-61', 'green'],
      ['H-62', 'red'],
      ['H-63', 'green'],
      ['H-64', 'green'],
      ['H-65', 'yellow'],
      ['H-66', 'green'],
      ['H-67', 'red'],
      ['H-68', 'green'],
      ['H-69', 'green'],
      ['H-70', 'yellow'],
      ['H-71', 'red'],
      ['H-72', 'green'],
      ['H-73', 'green'],
      ['H-74', 'yellow'],
      ['H-75', 'green'],
      ['H-76', 'red'],
      ['H-77', 'green'],
      ['H-78', 'green'],
      ['H-79', 'yellow'],
      ['H-80', 'green'],
      ['H-81', 'red'],
      ['H-82', 'green'],
      ['H-83', 'green'],
      ['H-84', 'yellow'],
      ['H-85', 'green'],
      ['H-86', 'red'],
    ]
  }
};

let selected = null;
let currentBlock = 'H';

// Estrutura temporária baseada nas tabelas do banco de dados
const DB_KEYS = {
  usuarios: 'senaiUsuarios',
  veiculos: 'senaiVeiculos',
  modelos: 'senaiModelos',
  marcas: 'senaiMarcas',
  vagas: 'senaiVagas',
  agendamentos: 'senaiAgendamentos',
  sancoes: 'senaiSancoes',
  pagamentos: 'senaiPagamentos'
};

function getDB(key) {
  return JSON.parse(localStorage.getItem(DB_KEYS[key]) || '[]');
}

function saveDB(key, data) {
  localStorage.setItem(DB_KEYS[key], JSON.stringify(data));
}
function inicializarDadosVeiculos() {

  // =====================================================
  // MARCAS
  // =====================================================

  let marcas = getDB('marcas');

  const novasMarcas = [
    { id_marca: 1, nome_marca: 'Toyota' },
    { id_marca: 2, nome_marca: 'Volkswagen' },
    { id_marca: 3, nome_marca: 'Chevrolet' },
    { id_marca: 4, nome_marca: 'Fiat' },
    { id_marca: 5, nome_marca: 'Honda' },
    { id_marca: 6, nome_marca: 'Hyundai' },
    { id_marca: 7, nome_marca: 'Ford' },
    { id_marca: 8, nome_marca: 'Nissan' },
    { id_marca: 9, nome_marca: 'Renault' },
    { id_marca: 10, nome_marca: 'Jeep' },
    { id_marca: 11, nome_marca: 'Peugeot' },
    { id_marca: 12, nome_marca: 'Citroën' },
    { id_marca: 13, nome_marca: 'Mitsubishi' },
    { id_marca: 14, nome_marca: 'Kia' },
    { id_marca: 15, nome_marca: 'BMW' },
    { id_marca: 16, nome_marca: 'Mercedes-Benz' },
    { id_marca: 17, nome_marca: 'Audi' },
    { id_marca: 18, nome_marca: 'Volvo' },
    { id_marca: 19, nome_marca: 'BYD' },
    { id_marca: 20, nome_marca: 'GWM' },
    { id_marca: 21, nome_marca: 'Caoa Chery' },
    { id_marca: 22, nome_marca: 'Land Rover' },
    { id_marca: 23, nome_marca: 'Porsche' },
    { id_marca: 24, nome_marca: 'Subaru' },
    { id_marca: 25, nome_marca: 'Suzuki' },
    { id_marca: 26, nome_marca: 'Lexus' },
    { id_marca: 27, nome_marca: 'RAM' },
    { id_marca: 28, nome_marca: 'Dodge' },
    { id_marca: 29, nome_marca: 'Chrysler' },
    { id_marca: 30, nome_marca: 'Jaguar' }
  ];

  // Adiciona somente marcas que ainda não existem
  novasMarcas.forEach(novaMarca => {
    const existe = marcas.some(
      marca => Number(marca.id_marca) === novaMarca.id_marca
    );

    if (!existe) {
      marcas.push(novaMarca);
    }
  });

  saveDB('marcas', marcas);


  // =====================================================
  // MODELOS
  // =====================================================

  let modelos = getDB('modelos');

  const novosModelos = [

    // TOYOTA
    { id_modelo: 1, nome_modelo: 'Corolla', id_marca: 1 },
    { id_modelo: 2, nome_modelo: 'Corolla Cross', id_marca: 1 },
    { id_modelo: 3, nome_modelo: 'Yaris', id_marca: 1 },
    { id_modelo: 4, nome_modelo: 'Yaris Sedan', id_marca: 1 },
    { id_modelo: 5, nome_modelo: 'Hilux', id_marca: 1 },
    { id_modelo: 6, nome_modelo: 'SW4', id_marca: 1 },
    { id_modelo: 7, nome_modelo: 'RAV4', id_marca: 1 },

    // VOLKSWAGEN
    { id_modelo: 8, nome_modelo: 'Gol', id_marca: 2 },
    { id_modelo: 9, nome_modelo: 'Polo', id_marca: 2 },
    { id_modelo: 10, nome_modelo: 'Virtus', id_marca: 2 },
    { id_modelo: 11, nome_modelo: 'T-Cross', id_marca: 2 },
    { id_modelo: 12, nome_modelo: 'Nivus', id_marca: 2 },
    { id_modelo: 13, nome_modelo: 'Taos', id_marca: 2 },
    { id_modelo: 14, nome_modelo: 'Tiguan', id_marca: 2 },
    { id_modelo: 15, nome_modelo: 'Saveiro', id_marca: 2 },
    { id_modelo: 16, nome_modelo: 'Amarok', id_marca: 2 },

    // CHEVROLET
    { id_modelo: 17, nome_modelo: 'Onix', id_marca: 3 },
    { id_modelo: 18, nome_modelo: 'Onix Plus', id_marca: 3 },
    { id_modelo: 19, nome_modelo: 'Tracker', id_marca: 3 },
    { id_modelo: 20, nome_modelo: 'Spin', id_marca: 3 },
    { id_modelo: 21, nome_modelo: 'Montana', id_marca: 3 },
    { id_modelo: 22, nome_modelo: 'S10', id_marca: 3 },
    { id_modelo: 23, nome_modelo: 'Trailblazer', id_marca: 3 },
    { id_modelo: 24, nome_modelo: 'Cruze', id_marca: 3 },
    { id_modelo: 25, nome_modelo: 'Equinox', id_marca: 3 },
    { id_modelo: 26, nome_modelo: 'Camaro', id_marca: 3 },

    // FIAT
    { id_modelo: 27, nome_modelo: 'Uno', id_marca: 4 },
    { id_modelo: 28, nome_modelo: 'Argo', id_marca: 4 },
    { id_modelo: 29, nome_modelo: 'Mobi', id_marca: 4 },
    { id_modelo: 30, nome_modelo: 'Cronos', id_marca: 4 },
    { id_modelo: 31, nome_modelo: 'Pulse', id_marca: 4 },
    { id_modelo: 32, nome_modelo: 'Fastback', id_marca: 4 },
    { id_modelo: 33, nome_modelo: 'Strada', id_marca: 4 },
    { id_modelo: 34, nome_modelo: 'Toro', id_marca: 4 },
    { id_modelo: 35, nome_modelo: 'Fiorino', id_marca: 4 },
    { id_modelo: 36, nome_modelo: 'Ducato', id_marca: 4 },

    // HONDA
    { id_modelo: 37, nome_modelo: 'Civic', id_marca: 5 },
    { id_modelo: 38, nome_modelo: 'City', id_marca: 5 },
    { id_modelo: 39, nome_modelo: 'City Hatchback', id_marca: 5 },
    { id_modelo: 40, nome_modelo: 'HR-V', id_marca: 5 },
    { id_modelo: 41, nome_modelo: 'ZR-V', id_marca: 5 },
    { id_modelo: 42, nome_modelo: 'CR-V', id_marca: 5 },
    { id_modelo: 43, nome_modelo: 'Fit', id_marca: 5 },

    // HYUNDAI
    { id_modelo: 44, nome_modelo: 'HB20', id_marca: 6 },
    { id_modelo: 45, nome_modelo: 'HB20S', id_marca: 6 },
    { id_modelo: 46, nome_modelo: 'Creta', id_marca: 6 },
    { id_modelo: 47, nome_modelo: 'Tucson', id_marca: 6 },
    { id_modelo: 48, nome_modelo: 'Santa Fe', id_marca: 6 },
    { id_modelo: 49, nome_modelo: 'ix35', id_marca: 6 },

    // FORD
    { id_modelo: 50, nome_modelo: 'Ka', id_marca: 7 },
    { id_modelo: 51, nome_modelo: 'Ka Sedan', id_marca: 7 },
    { id_modelo: 52, nome_modelo: 'Fiesta', id_marca: 7 },
    { id_modelo: 53, nome_modelo: 'Focus', id_marca: 7 },
    { id_modelo: 54, nome_modelo: 'EcoSport', id_marca: 7 },
    { id_modelo: 55, nome_modelo: 'Territory', id_marca: 7 },
    { id_modelo: 56, nome_modelo: 'Ranger', id_marca: 7 },
    { id_modelo: 57, nome_modelo: 'Maverick', id_marca: 7 },
    { id_modelo: 58, nome_modelo: 'Bronco', id_marca: 7 },

    // NISSAN
    { id_modelo: 59, nome_modelo: 'March', id_marca: 8 },
    { id_modelo: 60, nome_modelo: 'Versa', id_marca: 8 },
    { id_modelo: 61, nome_modelo: 'Kicks', id_marca: 8 },
    { id_modelo: 62, nome_modelo: 'Sentra', id_marca: 8 },
    { id_modelo: 63, nome_modelo: 'Frontier', id_marca: 8 },
    { id_modelo: 64, nome_modelo: 'X-Trail', id_marca: 8 },

    // RENAULT
    { id_modelo: 65, nome_modelo: 'Kwid', id_marca: 9 },
    { id_modelo: 66, nome_modelo: 'Sandero', id_marca: 9 },
    { id_modelo: 67, nome_modelo: 'Logan', id_marca: 9 },
    { id_modelo: 68, nome_modelo: 'Duster', id_marca: 9 },
    { id_modelo: 69, nome_modelo: 'Oroch', id_marca: 9 },
    { id_modelo: 70, nome_modelo: 'Captur', id_marca: 9 },
    { id_modelo: 71, nome_modelo: 'Master', id_marca: 9 },

    // JEEP
    { id_modelo: 72, nome_modelo: 'Renegade', id_marca: 10 },
    { id_modelo: 73, nome_modelo: 'Compass', id_marca: 10 },
    { id_modelo: 74, nome_modelo: 'Commander', id_marca: 10 },
    { id_modelo: 75, nome_modelo: 'Wrangler', id_marca: 10 },
    { id_modelo: 76, nome_modelo: 'Gladiator', id_marca: 10 },

    // PEUGEOT
    { id_modelo: 77, nome_modelo: '208', id_marca: 11 },
    { id_modelo: 78, nome_modelo: '2008', id_marca: 11 },
    { id_modelo: 79, nome_modelo: '3008', id_marca: 11 },
    { id_modelo: 80, nome_modelo: '5008', id_marca: 11 },
    { id_modelo: 81, nome_modelo: 'Partner', id_marca: 11 },

    // CITROËN
    { id_modelo: 82, nome_modelo: 'C3', id_marca: 12 },
    { id_modelo: 83, nome_modelo: 'C3 Aircross', id_marca: 12 },
    { id_modelo: 84, nome_modelo: 'C4 Cactus', id_marca: 12 },
    { id_modelo: 85, nome_modelo: 'C4', id_marca: 12 },
    { id_modelo: 86, nome_modelo: 'Jumpy', id_marca: 12 },

    // MITSUBISHI
    { id_modelo: 87, nome_modelo: 'L200', id_marca: 13 },
    { id_modelo: 88, nome_modelo: 'Pajero', id_marca: 13 },
    { id_modelo: 89, nome_modelo: 'Eclipse Cross', id_marca: 13 },
    { id_modelo: 90, nome_modelo: 'Outlander', id_marca: 13 },

    // KIA
    { id_modelo: 91, nome_modelo: 'Picanto', id_marca: 14 },
    { id_modelo: 92, nome_modelo: 'Cerato', id_marca: 14 },
    { id_modelo: 93, nome_modelo: 'Sportage', id_marca: 14 },
    { id_modelo: 94, nome_modelo: 'Sorento', id_marca: 14 },
    { id_modelo: 95, nome_modelo: 'Carnival', id_marca: 14 },

    // BMW
    { id_modelo: 96, nome_modelo: 'Série 1', id_marca: 15 },
    { id_modelo: 97, nome_modelo: 'Série 2', id_marca: 15 },
    { id_modelo: 98, nome_modelo: 'Série 3', id_marca: 15 },
    { id_modelo: 99, nome_modelo: 'Série 4', id_marca: 15 },
    { id_modelo: 100, nome_modelo: 'Série 5', id_marca: 15 },
    { id_modelo: 101, nome_modelo: 'X1', id_marca: 15 },
    { id_modelo: 102, nome_modelo: 'X3', id_marca: 15 },
    { id_modelo: 103, nome_modelo: 'X5', id_marca: 15 },
    { id_modelo: 104, nome_modelo: 'X6', id_marca: 15 },

    // MERCEDES-BENZ
    { id_modelo: 105, nome_modelo: 'Classe A', id_marca: 16 },
    { id_modelo: 106, nome_modelo: 'Classe C', id_marca: 16 },
    { id_modelo: 107, nome_modelo: 'Classe E', id_marca: 16 },
    { id_modelo: 108, nome_modelo: 'Classe S', id_marca: 16 },
    { id_modelo: 109, nome_modelo: 'GLA', id_marca: 16 },
    { id_modelo: 110, nome_modelo: 'GLC', id_marca: 16 },
    { id_modelo: 111, nome_modelo: 'GLE', id_marca: 16 },

    // AUDI
    { id_modelo: 112, nome_modelo: 'A1', id_marca: 17 },
    { id_modelo: 113, nome_modelo: 'A3', id_marca: 17 },
    { id_modelo: 114, nome_modelo: 'A4', id_marca: 17 },
    { id_modelo: 115, nome_modelo: 'A5', id_marca: 17 },
    { id_modelo: 116, nome_modelo: 'A6', id_marca: 17 },
    { id_modelo: 117, nome_modelo: 'Q3', id_marca: 17 },
    { id_modelo: 118, nome_modelo: 'Q5', id_marca: 17 },
    { id_modelo: 119, nome_modelo: 'Q7', id_marca: 17 },

    // VOLVO
    { id_modelo: 120, nome_modelo: 'XC40', id_marca: 18 },
    { id_modelo: 121, nome_modelo: 'XC60', id_marca: 18 },
    { id_modelo: 122, nome_modelo: 'XC90', id_marca: 18 },
    { id_modelo: 123, nome_modelo: 'S60', id_marca: 18 },
    { id_modelo: 124, nome_modelo: 'S90', id_marca: 18 },

    // BYD
    { id_modelo: 125, nome_modelo: 'Dolphin', id_marca: 19 },
    { id_modelo: 126, nome_modelo: 'Dolphin Mini', id_marca: 19 },
    { id_modelo: 127, nome_modelo: 'Yuan Plus', id_marca: 19 },
    { id_modelo: 128, nome_modelo: 'Song Plus', id_marca: 19 },
    { id_modelo: 129, nome_modelo: 'King', id_marca: 19 },
    { id_modelo: 130, nome_modelo: 'Seal', id_marca: 19 },

    // GWM
    { id_modelo: 131, nome_modelo: 'Haval H6', id_marca: 20 },
    { id_modelo: 132, nome_modelo: 'Haval H6 GT', id_marca: 20 },
    { id_modelo: 133, nome_modelo: 'Haval H6 HEV', id_marca: 20 },
    { id_modelo: 134, nome_modelo: 'Ora 03', id_marca: 20 },
    { id_modelo: 135, nome_modelo: 'Tank 300', id_marca: 20 },

    // CAOA CHERY
    { id_modelo: 136, nome_modelo: 'Tiggo 5X', id_marca: 21 },
    { id_modelo: 137, nome_modelo: 'Tiggo 7', id_marca: 21 },
    { id_modelo: 138, nome_modelo: 'Tiggo 8', id_marca: 21 },
    { id_modelo: 139, nome_modelo: 'Arrizo 6', id_marca: 21 },

    // LAND ROVER
    { id_modelo: 140, nome_modelo: 'Evoque', id_marca: 22 },
    { id_modelo: 141, nome_modelo: 'Discovery Sport', id_marca: 22 },
    { id_modelo: 142, nome_modelo: 'Discovery', id_marca: 22 },
    { id_modelo: 143, nome_modelo: 'Defender', id_marca: 22 },
    { id_modelo: 144, nome_modelo: 'Range Rover Sport', id_marca: 22 },

    // PORSCHE
    { id_modelo: 145, nome_modelo: '911', id_marca: 23 },
    { id_modelo: 146, nome_modelo: '718', id_marca: 23 },
    { id_modelo: 147, nome_modelo: 'Macan', id_marca: 23 },
    { id_modelo: 148, nome_modelo: 'Cayenne', id_marca: 23 },
    { id_modelo: 149, nome_modelo: 'Panamera', id_marca: 23 },

    // SUBARU
    { id_modelo: 150, nome_modelo: 'Impreza', id_marca: 24 },
    { id_modelo: 151, nome_modelo: 'Forester', id_marca: 24 },
    { id_modelo: 152, nome_modelo: 'XV', id_marca: 24 },
    { id_modelo: 153, nome_modelo: 'Outback', id_marca: 24 },

    // SUZUKI
    { id_modelo: 154, nome_modelo: 'Jimny', id_marca: 25 },
    { id_modelo: 155, nome_modelo: 'Vitara', id_marca: 25 },
    { id_modelo: 156, nome_modelo: 'S-Cross', id_marca: 25 },

    // LEXUS
    { id_modelo: 157, nome_modelo: 'UX', id_marca: 26 },
    { id_modelo: 158, nome_modelo: 'NX', id_marca: 26 },
    { id_modelo: 159, nome_modelo: 'RX', id_marca: 26 },
    { id_modelo: 160, nome_modelo: 'ES', id_marca: 26 },

    // RAM
    { id_modelo: 161, nome_modelo: 'Rampage', id_marca: 27 },
    { id_modelo: 162, nome_modelo: '1500', id_marca: 27 },
    { id_modelo: 163, nome_modelo: '2500', id_marca: 27 },
    { id_modelo: 164, nome_modelo: '3500', id_marca: 27 },

    // DODGE
    { id_modelo: 165, nome_modelo: 'Challenger', id_marca: 28 },
    { id_modelo: 166, nome_modelo: 'Charger', id_marca: 28 },
    { id_modelo: 167, nome_modelo: 'Durango', id_marca: 28 },

    // CHRYSLER
    { id_modelo: 168, nome_modelo: '300C', id_marca: 29 },
    { id_modelo: 169, nome_modelo: 'Pacifica', id_marca: 29 },

    // JAGUAR
    { id_modelo: 170, nome_modelo: 'XE', id_marca: 30 },
    { id_modelo: 171, nome_modelo: 'XF', id_marca: 30 },
    { id_modelo: 172, nome_modelo: 'F-Pace', id_marca: 30 },
    { id_modelo: 173, nome_modelo: 'E-Pace', id_marca: 30 }
  ];

  // Adiciona somente os modelos que ainda não existem
  novosModelos.forEach(novoModelo => {
    const existe = modelos.some(
      modelo => Number(modelo.id_modelo) === novoModelo.id_modelo
    );

    if (!existe) {
      modelos.push(novoModelo);
    }
  });

  saveDB('modelos', modelos);


  // =====================================================
  // VEÍCULOS JÁ SALVOS
  // =====================================================

  let veiculos = getDB('veiculos');

  // NÃO apaga veículos existentes.
  // Só cria o veículo de exemplo se realmente não existir nenhum.
  if (veiculos.length === 0) {
    const usuarioId = Number(localStorage.getItem('senaiUserId'));

    veiculos = [
      {
        id_placa: 'ABC1D23',
        cor: 'Prata',
        id_usuario: usuarioId || null,
        id_modelo: 1
      }
    ];

    saveDB('veiculos', veiculos);
  }
}


// Busca uma marca pelo ID
function buscarMarca(idMarca) {
  const marcas = getDB('marcas');

  return marcas.find(
    marca => Number(marca.id_marca) === Number(idMarca)
  );
}


// Busca um modelo pelo ID
function buscarModelo(idModelo) {
  const modelos = getDB('modelos');

  return modelos.find(
    modelo => Number(modelo.id_modelo) === Number(idModelo)
  );
}


// Busca um veículo pela placa
function buscarVeiculo(placa) {
  const veiculos = getDB('veiculos');

  return veiculos.find(
    veiculo => veiculo.id_placa === placa
  );
}


// Cadastra um veículo
function cadastrarVeiculo(placa, cor, idModelo, idUsuario) {
  const veiculos = getDB('veiculos');

  const placaExistente = veiculos.find(
    veiculo => veiculo.id_placa === placa
  );

  if (placaExistente) {
    return {
      sucesso: false,
      mensagem: 'Essa placa já está cadastrada.'
    };
  }
  function mostrarMeuVeiculo() {
    
  const usuarioId = Number(localStorage.getItem('senaiUserId'));

  const veiculos = getDB('veiculos');
  const veiculo = veiculos.find(
    v => Number(v.id_usuario) === usuarioId
  );

  if (!veiculo) return;

  const modelo = buscarModelo(veiculo.id_modelo);
  const marca = modelo ? buscarMarca(modelo.id_marca) : null;

  document.getElementById('veiculoPlaca').textContent =
    veiculo.id_placa || 'Não cadastrada';

  document.getElementById('veiculoCor').textContent =
    veiculo.cor || 'Não cadastrada';

  document.getElementById('veiculoModelo').textContent =
    modelo ? modelo.nome_modelo : 'Não cadastrado';

  document.getElementById('veiculoMarca').textContent =
    marca ? marca.nome_marca : 'Não cadastrada';
}

  const modelo = buscarModelo(idModelo);

  if (!modelo) {
    return {
      sucesso: false,
      mensagem: 'Modelo não encontrado.'
    };
  }

  const novoVeiculo = {
    id_placa: placa,
    cor: cor,
    id_usuario: idUsuario,
    id_modelo: idModelo
  };

  veiculos.push(novoVeiculo);

  saveDB('veiculos', veiculos);

  return {
    sucesso: true,
    veiculo: novoVeiculo
  };
}

function allSpots() {
  return Object.values(parkingBlocks).flatMap(b => b.spots.map(s => ({ ...s, block: b.name })));
}

function getReservations() {
  return JSON.parse(localStorage.getItem('senaiReservations') || '[]');
}

function saveReservations(v) {
  localStorage.setItem('senaiReservations', JSON.stringify(v));
}

function getSanctions() {
  return JSON.parse(localStorage.getItem('senaiSanctions') || '[]');
}

function saveSanctions(v) {
  localStorage.setItem('senaiSanctions', JSON.stringify(v));
}

function statusFor(spot) {
  const r = getReservations().find(x => x.id === spot[0] && x.active);
  return r ? 'yellow' : spot[1];
}

function renderMap(blockKey, targetId = 'map') {
  currentBlock = blockKey;
  const b = parkingBlocks[blockKey];
  const el = document.getElementById(targetId);
  if (!el) return;
  selected = null;
  // As identificações já estão desenhadas nas imagens oficiais dos estacionamentos.
  // O mapa não recebe mais divs, botões ou etiquetas sobrepostas.
  el.innerHTML = `<img src="${b.image}" alt="Mapa ${b.name}">`;
  populateSpotSelector(blockKey);
}

function setSelectorStatusColor(select, status = '') {
  if (!select) return;
  select.classList.remove('status-green', 'status-red', 'status-yellow');
  if (status) select.classList.add(`status-${status}`);
}

function populateSpotSelector(blockKey, keepId = '') {
  const sel = document.getElementById('spotSelector');
  if (!sel) return;
  const spots = parkingBlocks[blockKey].spots;
  sel.innerHTML = '<option value="">Selecione uma vaga...</option>' +
    spots.map(s => {
      const st = statusFor(s);
      const label = st === 'green' ? 'Livre' : st === 'red' ? 'Ocupada' : 'Agendada';
      const color = st === 'green' ? 'var(--green)' : st === 'red' ? 'var(--red)' : 'var(--yellow)';
      return `<option value="${s[0]}" class="spot-option ${st}" style="color:${color}">${s[0]} — ${label}</option>`;
    }).join('');
  setSelectorStatusColor(sel, '');
  if (keepId) {
    sel.value = keepId;
    updateSelectorStatus(keepId, blockKey);
    showSelectedFromSelector(keepId, blockKey);
  }
}

function updateSelectorStatus(id, blockKey = currentBlock) {
  const sel = document.getElementById('spotSelector');
  if (!sel || !id) {
    setSelectorStatusColor(sel, '');
    return;
  }
  const s = parkingBlocks[blockKey].spots.find(x => x[0] === id);
  setSelectorStatusColor(sel, s ? statusFor(s) : '');
}

function showSelectedFromSelector(id, blockKey = currentBlock) {
  const s = parkingBlocks[blockKey].spots.find(x => x[0] === id);
  if (!s) {
    selected = null;
    return;
  }
  selected = { s, blockKey };
  const box = document.getElementById('spotDetail');
  if (!box) return;
  const st = statusFor(s);
  const today = new Date().toISOString().slice(0, 10);
  const isBookingPage = location.pathname.endsWith('/agendar.html') || location.pathname.endsWith('agendar.html');
  const action = isBookingPage ? (st === 'green' ? `<label class="field-label">Data<br><input id="reserveDate" type="date" value="${today}" min="${today}"></label><label class="field-label">Horário<br><input id="reserveTime" type="time" value="18:00"></label><button class="btn btn-primary full" onclick="reserveSelected()">Confirmar agendamento</button>` : `<button class="btn btn-light" disabled>${st === 'yellow' ? 'Vaga já agendada' : 'Vaga ocupada'}</button>`) : `<div class="view-only-note">Modo de visualização: esta página não permite agendamentos.<br><a href="agendar.html">Ir para Novo agendamento</a> para reservar uma vaga.</div>`;
  box.innerHTML = `<div class="detail-top"><div class="eyebrow">Vaga selecionada</div><div class="detail-id">${s[0]}</div><div class="detail-status"><span class="badge ${st}">${st === 'green' ? 'Livre' : st === 'red' ? 'Ocupada' : 'Agendada'}</span></div><div class="detail-meta"><div class="meta-row"><span>Local</span><strong>${parkingBlocks[blockKey].name}</strong></div><div class="meta-row"><span>Identificação</span><strong>${s[0]}</strong></div><div class="meta-row"><span>Disponibilidade</span><strong>${st === 'green' ? 'Pode ser reservada' : st === 'yellow' ? 'Reserva ativa' : 'Indisponível'}</strong></div></div></div><div class="detail-action">${action}</div>`;
}

function onSpotSelectorChange(value) {
  updateSelectorStatus(value, currentBlock);
  if (!value) {
    selected = null;
    const box = document.getElementById('spotDetail');
    if (box) box.innerHTML = '<div class="empty">Selecione uma vaga na barra ao lado do mapa para consultar seus dados.</div>';
    return;
  }
  showSelectedFromSelector(value, currentBlock);
}

function reserveSelected() {
  if (!selected) return;
  const [id] = selected.s;
  const date = document.getElementById('reserveDate')?.value;
  const time = document.getElementById('reserveTime')?.value;
  if (!date || !time) {
    toast('Informe data e horário.');
    return;
  }
  const reservations = getReservations();
  if (reservations.some(x => x.id === id && x.active)) {
    toast('Essa vaga já está agendada.');
    return;
  }
  reservations.push({
    id,
    block: selected.blockKey,
    date,
    time,
    scheduledAt: `${date}T${time}`,
    active: true,
    status: 'scheduled',
    user: localStorage.getItem('senaiUser') || 'Usuário demonstrativo'
  });

  
const usuarios = getDB('usuarios');

const login = localStorage.getItem('senaiUser') || 'Usuário demonstrativo';

let usuario = usuarios.find(
  u => u.login === login
);

if (!usuario) {
  usuario = {
    id_usuario: usuarios.length + 1,
    login: login,
    telefone: '',
    matricula: '',
    senha: ''
  };
  usuarios.push(usuario);
  saveDB('usuarios', usuarios);
}

const vagas = getDB('vagas');

let vaga = vagas.find(v => v.codigo_vaga === id);

if (!vaga) {
  vaga = {
    id_vagas: vagas.length + 1,
    codigo_vaga: id,
    tipo_vaga: 'Comum',
    status_vaga: 'agendada',
    vagas_ocupadas: 0,
    vagas_livres: 0,
    vagas_agendadas: 1
  };

  vagas.push(vaga);
} else {
  vaga.status_vaga = 'agendada';
  vaga.vagas_agendadas = 1;
  vaga.vagas_livres = 0;
}

saveDB('vagas', vagas);

const agendamentos = getDB('agendamentos');

const idAgendamento = agendamentos.length + 1;

agendamentos.push({
  id_agendamento: idAgendamento,
  id_usuario: usuario.id_usuario,
  id_vagas: vaga.id_vagas,
  data_agendamento: date,
  horario_inicio: time,
  horario_fim: '',
  tolerancia: 15
});

reservations[reservations.length - 1].id_agendamento = idAgendamento;
reservations[reservations.length - 1].id_usuario = usuario.id_usuario;
reservations[reservations.length - 1].id_vagas = vaga.id_vagas;
reservations[reservations.length - 1].tolerancia = 15;

saveDB('agendamentos', agendamentos);


  saveReservations(reservations);
  toast(`${id} agendada para ${date.split('-').reverse().join('/')} às ${time}.`);
  renderMap(currentBlock);
  if (document.getElementById('spotDetail')) {
    document.getElementById('spotDetail').innerHTML = '<div class="empty">Reserva realizada. Você pode conferir em <a href="minhas-vagas.html">Minhas vagas</a>.<br><br>Fique atento ao horário para evitar uma ocorrência.</div>';
  }
}

function cancelReservation(id) {
  const rs = getReservations();
  const r = rs.find(x => x.id === id && x.active);
  if (r) {
    r.active = false;
    r.status = 'cancelled';
    saveReservations(rs);
    toast(`Agendamento de ${id} cancelado.`);
    setTimeout(() => location.reload(), 350);
  }
}

function markNoShow(id) {
  const rs = getReservations();
  const r = rs.find(x => x.id === id && x.active);
  if (!r) {
    toast('Agendamento não encontrado.');
    return;
  }
  r.active = false;
  r.status = 'no-show';
  r.noShowAt = new Date().toISOString();
  saveReservations(rs);
  
  const ss = getSanctions();
const previous = ss.filter(x => x.user === r.user && !x.resolved).length;
const level = previous + 1;

const penalty =
  level === 1 ? 'Advertência' :
  level === 2 ? 'Bloqueio por 24 horas' :
  level === 3 ? 'Bloqueio por 7 dias' :
  'Bloqueio por 30 dias';

const sancoes = getDB('sancoes');

const idSancao = sancoes.length + 1;

ss.push({
  id: idSancao,
  user: r.user,
  reservationId: r.id,
  date: new Date().toLocaleDateString('pt-BR'),
  reason: 'Não comparecimento ao horário agendado',
  level,
  penalty,
  resolved: false
});

sancoes.push({
  id_sancoes: idSancao,
  id_agendamento: r.id_agendamento || null,
  id_usuario: r.id_usuario || null,
  data_sancao: new Date().toISOString().split('T')[0],
  tipo_sancao: 'Não comparecimento',
  tipo_penalidade: penalty,
  tempo_tolerancia: r.tolerancia || 15,
  ocorrencias_abertas: true
});

saveDB('sancoes', sancoes);
saveSanctions(ss);

saveDB('sancoes', sancoes);
  saveSanctions(ss);
  toast(`${r.id}: não comparecimento registrado. Sanção: ${penalty}.`);
  setTimeout(() => location.reload(), 450);
}
function resolveSanction(id) {
  const ss = getSanctions();
  const s = ss.find(x => Number(x.id) === Number(id));

  if (!s) {
    toast('Ocorrência não encontrada.');
    return;
  }

  s.resolved = true;
  saveSanctions(ss);

  const sancoes = getDB('sancoes');
  const sancaoDB = sancoes.find(
    x => Number(x.id_sancoes) === Number(s.id)
  );

  if (sancaoDB) {
    sancaoDB.ocorrencias_abertas = false;
    saveDB('sancoes', sancoes);
  }

  toast('Ocorrência encerrada.');

  setTimeout(() => location.reload(), 300);
}

function toast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2600);
}

function setupBlockSwitch() {
  document.querySelectorAll('[data-block]').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('[data-block]').forEach(x => x.classList.remove('active'));
    btn.classList.add('active');

    const block = btn.dataset.block;

    currentBlock = block;
    renderMap(block);
  }));

  const sel = document.getElementById('spotSelector');
  if (sel) {
    sel.addEventListener('change', e => onSpotSelectorChange(e.target.value));
  }
}

function setupLogin() {
  const f = document.getElementById('loginForm');
  if (!f) return;

  f.addEventListener('submit', e => {
    e.preventDefault();

    const login = document.getElementById('login').value || 'Usuário';
    localStorage.setItem('senaiUser', login);

    const usuarios = getDB('usuarios');

    let usuario = usuarios.find(u => u.login === login);

    if (!usuario) {
      usuario = {
        id_usuario: usuarios.length + 1,
        login: login,
        telefone: '',
        matricula: '',
        senha: ''
      };

      usuarios.push(usuario);
      saveDB('usuarios', usuarios);
    }

    localStorage.setItem('senaiUserId', usuario.id_usuario);
    location.href = 'painel.html';
  });
}

function pageInit() {
  setupLogin();
  setupBlockSwitch();
  inicializarDadosVeiculos();
  //mostrarMeuVeiculo();
  const map = document.getElementById('map');
 
  if (map) {
  document.querySelectorAll('[data-block]').forEach(btn => {
    btn.classList.remove('active');
  });

  const hButton = document.querySelector('[data-block="H"]');

  if (hButton) {
    hButton.classList.add('active');
  }

  renderMap('H');
}

  const reservations = getReservations();
  document.querySelectorAll('[data-reservas]').forEach(el => el.textContent = reservations.filter(r => r.active).length);
  const stats = { green: 0, red: 0, yellow: 0 };
  allSpots().forEach(s => stats[statusFor(s)]++);
  document.querySelectorAll('[data-stat=green]').forEach(e => e.textContent = stats.green);
  document.querySelectorAll('[data-stat=red]').forEach(e => e.textContent = stats.red);
  document.querySelectorAll('[data-stat=yellow]').forEach(e => e.textContent = stats.yellow);
  const table = document.getElementById('reservationTable');
  if (table) {
    const active = reservations.filter(r => r.active);
    table.innerHTML = active.length ? active.map(r => `<tr><td><strong>${r.id}</strong></td><td>${parkingBlocks[r.block].name}</td><td>${r.date}</td><td>${r.time || '—'}</td><td><button class="btn btn-danger" onclick="cancelReservation('${r.id}')">Cancelar</button></td></tr>`).join('') : `<tr><td colspan="5" class="empty">Nenhum agendamento ativo.</td></tr>`;
  }
  const sanctionTable = document.getElementById('sanctionTable');
  if (sanctionTable) {
    const ss = getSanctions();
    sanctionTable.innerHTML = ss.length ? ss.slice().reverse().map(s => `<tr><td><strong>${s.id}</strong></td><td>${s.reservationId}</td><td>${s.date}</td><td>${s.reason}</td><td><span class="badge ${s.resolved ? 'green' : 'red'}">${s.resolved ? 'Encerrada' : s.penalty}</span></td><td>${s.resolved ? '—' : `<button class="btn btn-light" onclick="resolveSanction('${s.id}')">Encerrar</button>`}</td></tr>`).join('') : `<tr><td colspan="6" class="empty">Nenhuma ocorrência registrada.</td></tr>`;
  }
  const sanctionCount = getSanctions().filter(s => !s.resolved).length;
  document.querySelectorAll('[data-sancoes]').forEach(e => e.textContent = sanctionCount);
  const noShowWrap = document.getElementById('noShowList');
  if (noShowWrap) {
    const active = reservations.filter(r => r.active);
    noShowWrap.innerHTML = active.length ? active.map(r => `<div class="list-item"><div><strong>${r.id} • ${parkingBlocks[r.block].name}</strong><div style="font-size:12px;color:var(--muted)">${r.date} às ${r.time || '—'} • ${r.user}</div></div><button class="btn btn-danger" onclick="markNoShow('${r.id}')">Marcar não comparecimento</button></div>`).join('') : `<div class="empty">Nenhum agendamento ativo para registrar ocorrência.</div>`;
  }
}

document.addEventListener('DOMContentLoaded', pageInit);