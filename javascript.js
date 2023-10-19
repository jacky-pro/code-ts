const threshold = 0.9;

function classify() {
    const sentence = document.form1.mitexto.value;
    toxicity.load(threshold).then(model => {
        model.classify(sentence).then(predictions => {
            const resultadosElement = document.getElementById('resultados');
            resultadosElement.innerHTML = ''; // Limpia el contenido anterior

            predictions.forEach(prediction => {
                const emoji = prediction.results[0].match ? '😃'-'YES' : '😠'-'NO'; // Emoji feliz o enojado
                resultadosElement.innerHTML += `<p>${prediction.label}: ${emoji}</p>`;
            });
        });
    });
}