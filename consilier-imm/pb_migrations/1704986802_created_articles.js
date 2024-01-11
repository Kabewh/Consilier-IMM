/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "dc2hfeayliia4xa",
    "created": "2024-01-11 15:26:42.953Z",
    "updated": "2024-01-11 15:26:42.953Z",
    "name": "articles",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nougntyt",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "lsn9obyp",
        "name": "content",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("dc2hfeayliia4xa");

  return dao.deleteCollection(collection);
})
