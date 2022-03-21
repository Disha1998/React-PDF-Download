import React from "react";
import ReactDOM from "react-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Box, Table } from "@material-ui/core";

const App = () => {
  let docToPrint = React.createRef();

  const printDocument = () => {
    const input = docToPrint.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [600, 400],
      });
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output("dataurlnewwindow");
      pdf.save("Demo_receipt.pdf");
    });
  };

  return (
    <div>
      <div>
        <button onClick={printDocument}>Print</button>
      </div>
      <div
        ref={docToPrint}
        style={{
          borderRadius: "5px",
          width: "auto",
          height: "4000px",
          margin: "0 auto",
          padding: "10mm",
        }}
      >
        <div className="container" id="invoiceDetail">
          <Box
            sx={{ borderBottom: 1, borderColor: "divider" }}
            style={{ margin: "0px !important" }}
          >
            <h2>Invoice from Disha Sathavara</h2>
          </Box>
          <div
            ref={docToPrint}
            style={{
              borderRadius: "5px",
              // width: "600px",
              // height: "400px",
              margin: "0 auto",
              padding: "10mm",
            }}
          ></div>
          <div className="container">
            <div className="panel panel-default mb-5">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-sm-8">
                    <strong>INVOICE No: 123</strong>
                  </div>
                  <div className="col-sm-4"> Created: 02/04/2019</div>
                </div>
                <div className="row">
                  <div className="col-sm-8"> </div>
                  <div className="col-sm-4"> Due: 05/04/2019 </div>
                </div>
                <div className="row"></div>
              </div>
              <div className="panel-body">
                <div className="col-md-6 mb-3">
                  <div className="panel panel-default">
                    <div className="panel-body">
                      <address>
                        <strong>Address : </strong>
                        Plot no : 1277/2 ,sec - 6/D, Gandhinagar
                      </address>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3 text-right">
                  <div className="panel panel-default"></div>
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>No. </th>
                      <th>Product </th>
                      <th>Qty. </th>
                      <th>Price </th>
                      <th className="text-right">Amount </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 </td>
                      <td>nimic </td>
                      <td>12 </td>
                      <td>2,000 </td>
                      <td className="text-right">24,000 </td>
                    </tr>
                    <tr className="border-bottom">
                      <td>2 </td>
                      <td>altceva </td>
                      <td>7 </td>
                      <td>5,000 </td>
                      <td className="text-right">35,000 </td>
                    </tr>
                  </tbody>
                </table>
                <div className="row justify-content-end">
                  <div className="col-md-6">
                    Currency: GBP
                    <br />
                    VAT: 19%
                    <br />
                    Expiration date:
                    <br />
                    Made by: Ana Gheorghe
                    <br />
                    Delivered in 21/10/2016 at 18:02
                  </div>
                  <div className="col-md-6">
                    <table className="table borderless">
                      <tbody>
                        <tr>
                          <th
                            scope="row"
                            //   className="text-right"
                            //   style={{ paddingRight: "4vw" }}
                          >
                            Subtotal
                          </th>
                          <th
                            className="text-right"
                            style={{ paddingRight: "2vw" }}
                          >
                            59,000
                          </th>
                        </tr>
                        <tr>
                          <th scope="row" className="text-right">
                            VAT 19%
                          </th>
                          <th className="text-right">11,210</th>
                        </tr>
                        <tr>
                          <th scope="row" className="text-right">
                            TOTAL
                          </th>
                          <th className="text-right">70,210</th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="panel-footer" style={{ height: "10rem" }}>
                <div className="col-md-6 col-md-offset-3">
                  <div className="col-md-6">
                    Client Signature _______________________
                  </div>
                  {/* <PDFButton targetRef={pdfRef}>Save to PDF!</PDFButton> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
