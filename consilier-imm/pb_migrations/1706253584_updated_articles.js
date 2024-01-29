/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dc2hfeayliia4xa")

  // remove
  collection.schema.removeField("lsppwkyc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cvnpz10z",
    "name": "content",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dc2hfeayliia4xa")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lsppwkyc",
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
  }))

  // remove
  collection.schema.removeField("cvnpz10z")

  return dao.saveCollection(collection)
})
