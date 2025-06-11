import db from "#db/client";

import imageData from "#lib/imageData";

export async function getImages() {
  const sql = `
    SELECT *
    FROM images
    `;
  const { rows: images } = await db.query(sql);
  return images;
}

export async function getImagesById(id) {
  const sql = `
    SELECT *
    FROM images
    WHERE id = $1
    `;
  const {
    rows: [image],
  } = await db.query(sql, [id]);
  return image;
}
