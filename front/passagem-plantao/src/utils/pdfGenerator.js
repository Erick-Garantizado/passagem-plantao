import pdfMake from './pdfConfig'


export const gerarPDF = (dados) => {
    const docDefinition = {
        content: [
            { text: "Teste do doc de passagem de plantão", style: "header", alignment: "center" },
            { text: `Data de hoje: ${new Date().toLocaleDateString()}`, style: "subheader" },
            { text: "-------------------------------------" },
            { text: `Data do plantão: ${new Date(dados.createdAt).toLocaleDateString('pt-BR')}`, style: "subheader" },
            { text: `Turno: ${dados.turno.toUpperCase()}`},
            { text: `Status: ${dados.situacao === false ? 'Pendente' : 'Resolvido'}`},
            {
                canvas: [
                    {
                    type: 'line',
                    x1: 0, y1: 0,
                    x2: 520, y2: 0,
                    lineWidth: 1
                    }
                ],
                margin: [0, 10, 0, 10] 
            },
            { 
                columns: [
                    {
                        width: '50%',
                        stack: [
                            { text: 'Plantonista Passando', style: 'subheader', bold: true},
                            { text: `Nome: ${dados.plantonista.nome}`},
                            { text: `Matricula: ${dados.plantonista.matricula}`},
                            { text: `Função: ${dados.plantonista.funcao}`},
                        ]
                    },
                    dados.recebedor !== null ?
                    {
                        width: '50%',
                        stack: [
                            { text: 'Plantonista Recebedor', style: 'subheader', bold: true},
                            { text: `Nome: ${dados.recebedor.nome}`},
                            { text: `Matricula: ${dados.recebedor.matricula}`},
                            { text: `Função: ${dados.recebedor.funcao}`},
                        ]
                    }:
                    {
                        width: '50%',
                        stack: [
                            { text: 'Plantonista Recebedor', style: 'subheader'},
                            { text: 'Nome:' },
                            { text: 'Matricula:' },
                            { text: 'Função:' },
                        ]
                    }
                ]
            },
            {
                canvas: [
                    {
                    type: 'line',
                    x1: 0, y1: 0,
                    x2: 520, y2: 0,
                    lineWidth: 1
                    }
                ],
                margin: [0, 10, 0, 10] 
            },
            { text: "Descrição:"},
            { text: dados.observacao, italics:true}
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
