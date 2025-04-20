import jsPDF from "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
import emailjs from "https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js";

export async function generatePDF(userEntries) {
  const { jsPDF: jsPDFLib } = window.jspdf;
  const doc = new jsPDFLib();
  doc.setFont("helvetica", "normal");
  doc.setFontSize(14);
  doc.text("Your Human OS Journal", 10, 10);

  let y = 20;
  for (const entry of userEntries) {
    doc.setFontSize(12);
    doc.text(`${entry.title} (${entry.date}):`, 10, y);
    y += 6;

    const lines = doc.splitTextToSize(entry.text, 180);
    doc.text(lines, 10, y);
    y += lines.length * 6 + 4;

    if (y > 270) {
      doc.addPage();
      y = 20;
    }
  }

  doc.save("HumanOS_Journal.pdf");
}

export function sendPDFByEmail(email, base64PDF) {
  emailjs.init("fldtsOAHDUrj9qj5d"); // Replace with your public key
  return emailjs.send("service_3xtr741", "template_518cstq", {
    to_email: email,
    attachment: base64PDF,
    filename: "HumanOS_Journal.pdf"
  });
}
