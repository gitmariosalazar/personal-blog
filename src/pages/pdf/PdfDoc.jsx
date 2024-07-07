import React from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";
import "./PdfDoc.css";
import { icons } from "../../assets/assets";

const PdfDoc = () => {
  const docs = [
    { uri: "/document/SalazarMario_CV.pdf" }, // Local File
  ];

  const pdfUrl = "/document/SalazarMario_CV.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "SalazarMario_CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="pdf-doc">
      <DocViewer
        documents={docs}
        theme={{
          primary: "#5296d8",
          secondary: "#ffffff",
          tertiary: "#5296d899",
          textPrimary: "#ffffff",
          textSecondary: "#5296d8",
          textTertiary: "#00000099",
          disableThemeScrollbar: false,
        }}
        pluginRenderers={DocViewerRenderers}
        style={{ width: "100%" }}
      />
      <div className="cv-btn-downloadcv-box">
        <button className="cv-btn-downloadcv" onClick={handleDownload}>
          <img
            src={icons.pdfdownload}
            className="icon-menu"
            alt="Download PDF"
            title="CV Download PDF"
          />
        </button>
      </div>
    </div>
  );
};

export default PdfDoc;
