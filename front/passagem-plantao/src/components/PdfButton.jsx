import { LoadingButton } from '@mui/lab'
import { gerarPDF } from "../utils/pdfGenerator";
import api from "../services/api";


const PdfButton = ({ id }) => {

  const handleCLick = () => {
    api.post('plantao/detalhes', {chave:id})
    .then( ({ data })=>{ gerarPDF(data.plantao) })
    .catch((e)=>{ alert(e) })
  }
  return (    
    <LoadingButton onClick={handleCLick} variant="contained">
      Gerar PDF
    </LoadingButton>
  );
};

export default PdfButton;
