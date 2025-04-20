window.addEventListener("DOMContentLoaded", () => {
  const exportBtn = document.getElementById("exportBtn");
  const journalEntry = document.getElementById("journalEntry");

  exportBtn.addEventListener("click", () => {
    const content = journalEntry.value.trim();
    if (!content) return alert("Please enter something to export.");

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "journal.txt";
    link.click();
  });
});
