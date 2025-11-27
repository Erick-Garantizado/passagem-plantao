import pdfMake from './pdfConfig'


export const gerarPDF = () => {
    const docDefinition = {
        content: [
            { text: "Relatório de Vendas", style: "header" },
            { text: `Data: ${new Date().toLocaleDateString()}`, style: "subheader" },
            { text: "-------------------------------------" },
            { text: "Itens vendidos:" },
            {
                table: {
                widths: ["*", "*", "*"],
                body: [
                    ["Produto", "Quantidade", "Preço"],
                    ["Caneta", "10", "R$ 5,00"],
                    ["Caderno", "5", "R$ 15,00"],
                    ["Mochila", "2", "R$ 120,00"],
                ],
                },
            },
        ],
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
