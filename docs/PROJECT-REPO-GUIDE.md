# Panduan repo project (34 repo)

## 1. Nama repo
Pakai `slug` dari `data/projects.js` persis sama, misalnya `before-after-defect-reduction`.
Dengan begitu tombol di hub langsung mengarah ke repo dan situs yang benar.

## 2. Aktifkan GitHub Pages
Settings → Pages → Deploy from a branch → `main` / `(root)` (atau `/docs`).
Situs otomatis tersedia di `https://bikacu.github.io/Portfolio/<slug>/`.

## 3. Link kembali ke hub
Tempel di bagian atas `index.html` setiap project:

```html
<a href="https://bikacu.github.io/Portfolio/" style="display:inline-block;margin:12px 16px;font:600 14px/1.4 'Source Sans 3',Arial,sans-serif;color:#1A73E8;text-decoration:none">← All projects / Semua project</a>
```

Dan di baris pertama README:

```markdown
[← Back to portfolio](https://bikacu.github.io/Portfolio/)
```

## 4. Struktur README (5 bagian)
1. **Problem**: pertanyaan bisnis.
2. **Data**: sumber, ukuran, langkah cleaning; tulis jelas jika data simulasi dan sertakan kode generator.
3. **Analysis**: metode, kode, temuan; semua angka dihitung dari data.
4. **Recommendation**: tindakan berdasarkan temuan.
5. **Impact**: rumus + asumsi eksplisit; label `estimated` / `simulated`.

## 5. Setelah project terbit
Ubah `status` project di `data/projects.js` repo hub menjadi `design`, `in-progress`, atau `done`, lalu push.

## 6. Topics repo (opsional, membantu pencarian)
Tambahkan topics: `data-analysis`, `portfolio`, dan tools utama (`sql`, `python`, `streamlit`, `duckdb`).
