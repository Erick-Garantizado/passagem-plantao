import { Button } from "@mui/material";
import { LoadingButton } from '@mui/lab'
import { gerarPDF } from "../utils/pdfGenerator";
import api from "../services/api";


const PdfButton = ({ id }) => {

  const handleCLick = () => {
    api.post('plantao/detalhes', {chave:id})
    .then( ({ data })=>{ gerarPDF(data.plantao) })
    // .then( ({ data })=>{ console.log(data.plantao) })
    .catch((e)=>{ console.log(e) })
  }
  return (    
    <LoadingButton onClick={handleCLick} variant="contained">
      Gerar PDF
    </LoadingButton>
  );
};

export default PdfButton;
