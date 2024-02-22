import { query } from "../../boilerplate/db/index.js";

// eslint-disable-next-line import/prefer-default-export
export const getFotosDB = async () => {
  const { rows } = await query(`select * from images order by id asc;`);
  return rows;
};

export const postFotosDB = async (image_url, title, description, resolution, camera, datum) => {
  const { rows } = await query(
    `INSERT INTO images (image_url, title, description, resolution, camera, datum)
VALUES
  ($1, $2, $3, $4, $5, $6)
returning *;`,
    [image_url, title, description, resolution, camera, datum]
  );
  return rows;
};

export const updateFotosDB = async (title, description, id) => {
  const { rows } = await query(
    `UPDATE images
SET title = $1, description = $2
WHERE id = $3
returning *;`,
    [title, description, id]
  );
  return rows;
};
export const deleteFotosDB = async (id) => {
  const { rows } = await query(`DELETE FROM images WHERE id=$1 returning *;`, [id]);
  return rows;
};
