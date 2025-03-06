let audioInstance = null;

function reproduzirNotas(nota) {
    // Obter o nome da nota a partir do atributo data-name
    const notaSymbol = nota.getAttribute('data-name').toLowerCase().replace('#', 'Sus');
    console.log(notaSymbol);
    
    // Verificar se há uma instância de áudio em execução e parar se necessário
    if (audioInstance && !audioInstance.paused) {
        audioInstance.pause(); // Pausar a reprodução anterior
        audioInstance.currentTime = 0; // Resetar o tempo de reprodução
    }

    // Criar uma nova instância de áudio e reproduzi-la
    audioInstance = new Audio(`${path}src/notes/${notaSymbol}.wav`);
    audioInstance.play();
    console.log(`${path}/notes/${notaSymbol}.wav`);
}
