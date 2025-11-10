import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const docDefinition = {
  content: [
    { text: 'Relatório', style: 'header' },
    { text: `Data: ${new Date().toLocaleDateString()}` }
  ],
  styles: {
    header: { fontSize: 18, bold: true }
  }
};

pdfMake.createPdf(docDefinition).open();
