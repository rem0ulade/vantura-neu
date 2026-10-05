/* Screenshot Grid */
.screenshot-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
}
.screenshot-grid img {
  width: 100%;
  aspect-ratio: 9 / 16;
  object-fit: cover;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.08);
  background: #111113;
}
