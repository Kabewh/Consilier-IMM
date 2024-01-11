/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dc2hfeayliia4xa")

  // remove
  collection.schema.removeField("uvhhqrzz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ddnksovx",
    "name": "description",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dc2hfeayliia4xa")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uvhhqrzz",
    "name": "content",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // remove
  collection.schema.removeField("ddnksovx")

  return dao.saveCollection(collection)
})
