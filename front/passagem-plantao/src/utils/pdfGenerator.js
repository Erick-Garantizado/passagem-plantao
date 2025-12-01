import pdfMake from './pdfConfig'


export const gerarPDF = (dados) => {
    const docDefinition = {
        content: [
            { text: "Teste do doc de passagem de plantão", style: "header" },
            { text: `Data de hoje: ${new Date().toLocaleDateString()}`, style: "subheader" },
            { text: `Data do plantão: ${new Date(dados.data).toLocaleDateString('pt-BR')}`, style: "subheader" },
            { text: "-------------------------------------" },
            { text: `Turno: ${dados.turno.toUpperCase()}`},
            { text: "Descrição:"},
            { text: dados.descricao}
        ],
        footer: {
            columns: [
                { text: "___________________________\nGestor", alignment: "center" },
                { text: "___________________________\nPlant. recptor", alignment: "center" },
                { text: "___________________________\nPlant. do dia ", alignment: "center" },
            ],
        },
        styles: {
            header: { fontSize: 18, bold: true },
            subheader: { fontSize: 12, italics: true },
        },
        defaultStyle: {
            fontSize: 11,
        },
    }
    pdfMake.createPdf(docDefinition).open()
}
