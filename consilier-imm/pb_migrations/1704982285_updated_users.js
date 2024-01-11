/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ioxyh16nvafopry")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ayaq7rrb",
    "name": "Role",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "user",
        "admin"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ioxyh16nvafopry")

  // remove
  collection.schema.removeField("ayaq7rrb")

  return dao.saveCollection(collection)
})
