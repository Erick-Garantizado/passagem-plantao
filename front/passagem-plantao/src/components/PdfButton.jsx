import { Button } from "@mui/material";
import { gerarPDF } from "../utils/pdfGenerator";


const PdfButton = () => {
  return (
    // <button
    //   onClick={gerarPDF}
    //   style={{
    //     padding: "10px 20px",
    //     backgroundColor: "#007bff",
    //     color: "white",
    //     border: "none",
    //     borderRadius: "5px",
    //     cursor: "pointer",
    //   }}
    // >
    //   Gerar PDF
    // </button>
    <Button onClick={gerarPDF} variant="contained">
        Gerar PDF
    </Button>
  );
};

export default PdfButton;
