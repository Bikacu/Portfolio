# Panduan repo project (34 repo)

## 1. Nama repo
Pola: `Project-N-<Nama-Singkat>` (tanpa spasi, titik dua, atau tanda kurung), misalnya `Project-2-Customer-Churn-Analysis`. N mengikuti nomor project di daftar portofolio.
Karena nama repo berbeda dari `slug`, tambahkan `"live"` dan `"repo"` pada entri project di `data/projects.js`:

```js
"status": "design", "live": "https://bagusbernadi.github.io/Project-2-Customer-Churn-Analysis/", "repo": "https://github.com/bagusbernadi/Project-2-Customer-Churn-Analysis"
```

Buat repo **public dan kosong** dulu (tanpa README/.gitignore/license), baru push isi project. Hub diperbarui setelah repo project ada, supaya tidak ada link mati.

## 2. Aktifkan GitHub Pages
Settings → Pages → Deploy from a branch → `main` / `(root)`.
Situs tersedia di `https://bagusbernadi.github.io/<nama-repo>/`.

## 3. Link kembali ke hub
Tempel di bagian atas `index.html` setiap project:

```html
<a href="https://bagusbernadi.github.io/" style="display:inline-block;margin:12px 16px;font:600 14px/1.4 'Source Sans 3',Arial,sans-serif;color:#1A73E8;text-decoration:none">← All projects / Semua project</a>
```

Dan di baris pertama README:

```markdown
[← Back to portfolio](https://bagusbernadi.github.io/)
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
