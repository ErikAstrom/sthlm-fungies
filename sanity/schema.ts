import { SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
      {
        title: "My Example Document Type",
        name: "exampleDocumentType",
        type: "document",
        fields: [
          {
            title: "Greeting",
            name: "greeting",
            type: "string"
          }
        ]
      }  
  ],
}
