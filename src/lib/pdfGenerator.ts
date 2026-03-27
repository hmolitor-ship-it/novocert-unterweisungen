import { jsPDF } from 'jspdf';
import type { TeilnehmerDaten, QuizErgebnis } from './types';

export function generateNachweisPDF(
  teilnehmer: TeilnehmerDaten,
  ergebnis: QuizErgebnis,
  rechtsgrundlage: string,
  dauer: string,
): void {
  const doc = new jsPDF('p', 'mm', 'a4');
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 25;
  const contentWidth = pageWidth - 2 * margin;

  // Random Nachweis-Nr
  const nachweisNr = `NC-UW-2026-${String(Math.floor(100000 + Math.random() * 900000))}`;
  const prozent = Math.round((ergebnis.score / ergebnis.total) * 100);
  const status = ergebnis.bestanden ? 'BESTANDEN' : 'NICHT BESTANDEN';

  // Valid until +12 months
  const datumObj = new Date(ergebnis.datum);
  const gueltigBis = new Date(datumObj);
  gueltigBis.setFullYear(gueltigBis.getFullYear() + 1);
  const formatDate = (d: Date) =>
    `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}.${d.getFullYear()}`;

  // --- Header ---
  doc.setFontSize(22);
  doc.setTextColor(10, 37, 64); // Navy
  doc.setFont('helvetica', 'bold');
  doc.text('NOVOCERT', margin, 30);

  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 100, 100);
  doc.text('Unterweisungsnachweis', margin + 58, 30);

  // Line
  doc.setDrawColor(37, 99, 235); // Blue
  doc.setLineWidth(0.8);
  doc.line(margin, 35, pageWidth - margin, 35);

  // --- Body ---
  let y = 50;
  const lineHeight = 9;

  const addField = (label: string, value: string) => {
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.setFont('helvetica', 'normal');
    doc.text(label, margin, y);
    doc.setFontSize(11);
    doc.setTextColor(30, 30, 30);
    doc.setFont('helvetica', 'bold');
    doc.text(value, margin + 60, y);
    y += lineHeight;
  };

  addField('Thema:', ergebnis.unterweisungTitel);
  addField('Rechtsgrundlage:', rechtsgrundlage);
  addField('Datum:', formatDate(datumObj));
  addField('Dauer:', dauer);

  y += 4;
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.3);
  doc.line(margin, y, pageWidth - margin, y);
  y += 8;

  addField('Teilnehmer:', `${teilnehmer.vorname} ${teilnehmer.nachname}`);
  addField('Firma:', teilnehmer.firma);
  addField('E-Mail:', teilnehmer.email);

  y += 4;
  doc.line(margin, y, pageWidth - margin, y);
  y += 8;

  addField('Ergebnis:', `${ergebnis.score} von ${ergebnis.total} Fragen richtig (${prozent}%)`);

  // Status with color
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.setFont('helvetica', 'normal');
  doc.text('Status:', margin, y);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  if (ergebnis.bestanden) {
    doc.setTextColor(22, 163, 74); // green
  } else {
    doc.setTextColor(220, 38, 38); // red
  }
  doc.text(status, margin + 60, y);
  y += lineHeight;

  doc.setTextColor(30, 30, 30);
  doc.setFontSize(11);
  addField('Gueltig bis:', formatDate(gueltigBis));

  // --- Signature lines ---
  y += 20;
  doc.setDrawColor(150, 150, 150);
  doc.setLineWidth(0.4);

  const sigWidth = contentWidth / 2 - 10;
  doc.line(margin, y, margin + sigWidth, y);
  doc.line(margin + sigWidth + 20, y, pageWidth - margin, y);

  y += 6;
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.setFont('helvetica', 'normal');
  doc.text('Unterschrift Teilnehmer', margin, y);
  doc.text('Unterschrift Arbeitgeber', margin + sigWidth + 20, y);

  // --- Footer ---
  y = 260;
  doc.setDrawColor(37, 99, 235);
  doc.setLineWidth(0.5);
  doc.line(margin, y, pageWidth - margin, y);

  y += 6;
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text(`Nachweis-Nr: ${nachweisNr}`, margin, y);
  y += 5;
  doc.text('Erstellt von NOVOCERT \u2014 unterweisungen.novocert.de', margin, y);
  y += 5;
  doc.text('WS Anlagentechnik GmbH \u00b7 Koenigsberger Str. 23 \u00b7 53840 Troisdorf', margin, y);

  doc.save(`Unterweisungsnachweis_${ergebnis.unterweisungSlug}_${nachweisNr}.pdf`);
}
